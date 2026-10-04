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
  if (str(body.website, 200)) return NextResponse.json({ ok: true });

  const email = str(body.email, 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || body.consent !== true) {
    return NextResponse.json({ ok: false, error: 'invalid_fields' }, { status: 422 });
  }

  const a = (body.attribution ?? {}) as Record<string, unknown>;
  const result = await forwardToCrm('lab', {
    email,
    consent: true,
    utm_source: str(a.utm_source, 120),
    utm_medium: str(a.utm_medium, 120),
    utm_campaign: str(a.utm_campaign, 120),
    landing_page: str(a.landing_page, 300),
    referrer: str(a.referrer, 300),
    submitted_at: str(body.submitted_at, 40) || new Date().toISOString(),
  });
  if (!result.ok) return NextResponse.json({ ok: false, error: result.reason ?? 'upstream_error' }, { status: 502 });
  return NextResponse.json({ ok: true });
}
