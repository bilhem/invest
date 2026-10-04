export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  landing_page?: string;
  referrer?: string;
  first_seen?: string;
};

const KEY = 'bf-attribution';

/** First-touch attribution, kept for the browser session only. */
export function captureAttribution() {
  if (typeof window === 'undefined') return;
  try {
    if (sessionStorage.getItem(KEY)) return;
    const p = new URLSearchParams(window.location.search);
    const a: Attribution = {
      utm_source: p.get('utm_source') ?? undefined,
      utm_medium: p.get('utm_medium') ?? undefined,
      utm_campaign: p.get('utm_campaign') ?? undefined,
      landing_page: window.location.pathname + window.location.search,
      referrer: document.referrer || undefined,
      first_seen: new Date().toISOString(),
    };
    sessionStorage.setItem(KEY, JSON.stringify(a));
  } catch {
    /* storage unavailable: attribution is simply skipped */
  }
}

export function getAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) ?? '{}') as Attribution;
  } catch {
    return {};
  }
}
