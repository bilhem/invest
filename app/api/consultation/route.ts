import { NextResponse } from 'next/server';
import { forwardToCrm } from '@/lib/crm';
import { CONSENT_TEXT, CONSENT_VERSION } from '@/lib/consent';
import { clientIp, finishSubmission, rateLimited, startSubmission } from '@/lib/lead-guard';
import { E164, parsePhone } from '@/lib/phone';

export const runtime = 'nodejs';

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
const json = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

const MAX_BODY = 20_000; // bytes: the form is a few hundred
const MIN_FILL_MS = 3000; // nobody fills six steps in under 3 s

export async function POST(req: Request) {
  const prod = process.env.NODE_ENV === 'production';

  // Rate limit (production, when the platform gives the client IP).
  const ip = clientIp(req);
  if (prod && ip && rateLimited(ip)) return json({ ok: false, error: 'rate_limited' }, 429);

  if (Number(req.headers.get('content-length') ?? 0) > MAX_BODY) return json({ ok: false, error: 'too_large' }, 413);

  let body: Record<string, unknown>;
  try {
    const text = await req.text();
    if (text.length > MAX_BODY) return json({ ok: false, error: 'too_large' }, 413);
    const parsed: unknown = JSON.parse(text);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('not an object');
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  // Honeypot: pretend success so bots learn nothing.
  if (str(body.website, 200)) return json({ ok: true });

  // Timing trap (production only, so that curl tests in development need nothing special): the browser reports how long the form was open.
  if (prod && !(typeof body.elapsed_ms === 'number' && body.elapsed_ms >= MIN_FILL_MS)) return json({ ok: false, error: 'too_fast' }, 429);

  const phone = parsePhone(str(body.phone, 40));
  const lead = {
    country: str(body.country, 80),
    objective: str(body.objective, 80),
    budget: str(body.budget, 40),
    horizon: str(body.horizon, 40),
    name: str(body.name, 120),
    email: str(body.email, 200),
    language: str(body.language, 20),
    message: str(body.message, 1500),
  };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  if (!lead.country || !lead.objective || !lead.budget || !lead.horizon || lead.name.length < 2 || !emailOk || body.consent !== true) {
    return json({ ok: false, error: 'invalid_fields' }, 422);
  }
  // E.164 only: the browser sends « +33612345678 », the server checks it again with the same library.
  if (!phone || !E164.test(phone.e164)) return json({ ok: false, error: 'invalid_phone' }, 422);

  const a = (body.attribution ?? {}) as Record<string, unknown>;
  const attribution = {
    utm_source: str(a.utm_source, 120),
    utm_medium: str(a.utm_medium, 120),
    utm_campaign: str(a.utm_campaign, 120),
    landing_page: str(a.landing_page, 300),
    referrer: str(a.referrer, 300),
  };

  // Idempotency: the browser keeps one id per form, even across retries. A second request with the same id is not forwarded twice (the CRM should also de-duplicate on it).
  const rawId = str(body.submission_id, 64);
  const submissionId = /^[A-Za-z0-9-]{8,64}$/.test(rawId) ? rawId : crypto.randomUUID();
  const state = startSubmission(submissionId);
  if (state === 'duplicate') return json({ ok: true, id: submissionId, duplicate: true });
  if (state === 'in_progress') return json({ ok: false, error: 'in_progress' }, 409);

  const now = new Date().toISOString();
  let saved = false;
  let reason: string | undefined;
  try {
    const result = await forwardToCrm('consultation', {
      submission_id: submissionId,
      ...lead,
      phone: phone.e164,
      phone_country: phone.country ?? '',
      ...attribution,
      submitted_at: str(body.submitted_at, 40) || now,
      // Proof of consent, written by the server: the wording shown, its version and the moment it was received.
      consent: true,
      consent_text: CONSENT_TEXT,
      consent_version: CONSENT_VERSION,
      consent_received_at: now,
      source: 'bf-properties.consultation-form',
    });
    saved = result.ok;
    reason = result.reason;
  } finally {
    // Whatever happens, the id stops being « in progress »; it is remembered as sent only when the CRM accepted it.
    finishSubmission(submissionId, saved);
  }

  if (!saved) return json({ ok: false, error: reason ?? 'upstream_error' }, 502);
  return json({ ok: true, id: submissionId });
}
