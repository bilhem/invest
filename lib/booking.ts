/**
 * Appointment booking shown right after the consultation request has been saved.
 * Default: the Calendly event of BF Properties. NEXT_PUBLIC_BOOKING_URL overrides it (another Calendly event, or Cal.com…).
 */
export const DEFAULT_BOOKING_URL = 'https://calendly.com/bilel-hemissi/new-meeting';
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || DEFAULT_BOOKING_URL;

const isCalendly = (u: URL) => u.hostname === 'calendly.com' || u.hostname.endsWith('.calendly.com');

/** True when the booking page is Calendly: only then do the Calendly embed options and the « event scheduled » message apply. */
export function bookingIsCalendly(url: string = BOOKING_URL): boolean {
  try { return isCalendly(new URL(url)); } catch { return false; }
}

/**
 * URL of the inline embed. For Calendly: embed mode, the site's colours and the visitor's name and e-mail (Calendly pre-fills them; the visitor can still change them).
 * Other providers get the URL untouched.
 */
export function bookingEmbedUrl(opts: { name?: string; email?: string; host?: string }, url: string = BOOKING_URL): string {
  try {
    const u = new URL(url);
    if (!isCalendly(u)) return url;
    u.searchParams.set('embed_type', 'Inline');
    if (opts.host) u.searchParams.set('embed_domain', opts.host);
    u.searchParams.set('background_color', 'F7F3EB');
    u.searchParams.set('text_color', '1B1A18');
    u.searchParams.set('primary_color', 'B8935A');
    if (opts.name) u.searchParams.set('name', opts.name);
    if (opts.email) u.searchParams.set('email', opts.email);
    return u.toString();
  } catch {
    return url;
  }
}
