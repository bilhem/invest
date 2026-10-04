import { NextResponse } from 'next/server';
import { forwardToCrm } from '@/lib/crm';

export const runtime = 'nodejs';

const str = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const lead = {
    country: str(body.country, 80),
    objective: str(body.objective, 80),
    budget: str(body.budget, 40),
    horizon: str(body.horizon, 40),
    name: str(body.name, 120),
    email: str(body.email, 200),
    phone: str(body.phone, 40),
    language: str(body.language, 20),
    message: str(body.message, 1500),
    consent: body.consent === true,
  };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email);
  if (!lead.country || !lead.objective || !lead.budget || !lead.horizon || lead.name.length < 2 || !emailOk || !lead.consent) {
    return NextResponse.json({ ok: false, error: 'invalid_fields' }, { status: 422 });
  }

  const a = (body.attribution ?? {}) as Record<string, unknown>;
  const attribution = {
    utm_source: str(a.utm_source, 120),
    utm_medium: str(a.utm_medium, 120),
    utm_campaign: str(a.utm_campaign, 120),
    landing_page: str(a.landing_page, 300),
    referrer: str(a.referrer, 300),
  };

  const result = await forwardToCrm('consultation', {
    ...lead,
    ...attribution,
    submitted_at: str(body.submitted_at, 40) || new Date().toISOString(),
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.reason ?? 'upstream_error' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
