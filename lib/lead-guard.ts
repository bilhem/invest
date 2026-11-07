/**
 * Best-effort protections for the lead routes, kept in the memory of the server instance (no database is assumed).
 * On a serverless host each instance has its own memory: these limits slow a bot down and absorb double clicks, they do NOT replace a WAF / bot filter (e.g. Cloudflare Turnstile)
 * nor the CRM's own de-duplication on `submission_id`.
 */
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 8;
const hits = new Map<string, number[]>();

/** True when this IP already sent RATE_MAX requests during the last 15 minutes (the current one is counted). */
export function rateLimited(ip: string, now = Date.now()): boolean {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) for (const [k, v] of hits) if (v.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(k);
  return recent.length > RATE_MAX;
}

const SEEN_TTL_MS = 60 * 60 * 1000;
const seen = new Map<string, number>(); // submission ids already forwarded to the CRM
const inflight = new Set<string>(); // submission ids being forwarded right now

export type SubmissionState = 'new' | 'duplicate' | 'in_progress';

/** Claims a submission id. Call `finishSubmission` when the CRM answered. */
export function startSubmission(id: string, now = Date.now()): SubmissionState {
  for (const [k, t] of seen) if (now - t > SEEN_TTL_MS) seen.delete(k);
  if (seen.has(id)) return 'duplicate';
  if (inflight.has(id)) return 'in_progress';
  inflight.add(id);
  return 'new';
}

/** `ok`: the CRM accepted it (a retry with the same id is then a duplicate). Otherwise the id is released so the visitor can retry. */
export function finishSubmission(id: string, ok: boolean, now = Date.now()) {
  inflight.delete(id);
  if (ok) seen.set(id, now);
}

/** Client IP as given by the platform's proxy (first hop of x-forwarded-for). Undefined when unknown (local development). */
export function clientIp(req: Request): string | undefined {
  const xff = req.headers.get('x-forwarded-for');
  const ip = (xff ? xff.split(',')[0] : req.headers.get('x-real-ip'))?.trim();
  return ip || undefined;
}
