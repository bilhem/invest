// Central event hook. Wire GA4 / Meta Pixel / CRM here (see components/Analytics.tsx).
export type BFEvent =
  | 'consultation_started' | 'consultation_completed' | 'cta_clicked' | 'article_read'
  | 'area_viewed' | 'strategy_viewed' | 'investor_story_viewed' | 'lab_interest'
  | 'calendar_opened' | 'appointment_booked';

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void; fbq?: (...a: unknown[]) => void } }

export function track(event: BFEvent, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer?.push({ event, ...params });
  window.gtag?.('event', event, params);
}
