/**
 * CRM bridge. Set CRM_WEBHOOK_URL (and optionally CRM_WEBHOOK_SECRET) in the environment.
 * The webhook receives JSON: { kind: 'consultation' | 'lab', ...fields }.
 * In production, if no webhook is configured the request FAILS on purpose so that no lead is lost silently.
 */
export type CrmResult = { ok: boolean; reason?: 'not_configured' | 'upstream_error' };

export async function forwardToCrm(kind: 'consultation' | 'lab', payload: Record<string, unknown>): Promise<CrmResult> {
  const url = process.env.CRM_WEBHOOK_URL;
  if (!url) {
    if (process.env.NODE_ENV === 'production') return { ok: false, reason: 'not_configured' };
    console.log(`[crm:${kind}] CRM_WEBHOOK_URL not set (dev) —`, JSON.stringify(payload));
    return { ok: true };
  }
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(process.env.CRM_WEBHOOK_SECRET ? { 'X-BF-Secret': process.env.CRM_WEBHOOK_SECRET } : {}),
      },
      body: JSON.stringify({ kind, ...payload }),
      signal: ctrl.signal,
    });
    return res.ok ? { ok: true } : { ok: false, reason: 'upstream_error' };
  } catch {
    return { ok: false, reason: 'upstream_error' };
  } finally {
    clearTimeout(timer);
  }
}
