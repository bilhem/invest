/**
 * International phone numbers (libphonenumber-js, default « min » metadata). Shared by the consultation form (browser) and its API route (server):
 * the browser validates for the visitor, the server validates again and stores E.164 only (« +33612345678 »).
 */
import { AsYouType, getCountries, getCountryCallingCode, parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js';

export type { CountryCode };

export const DEFAULT_PHONE_COUNTRY: CountryCode = 'FR';

/** Shown first in the country list (the markets BF Properties works with most, same order as the residence suggestions of the form). */
const FREQUENT: CountryCode[] = ['FR', 'CH', 'BE', 'LU', 'CA', 'GB', 'DE', 'ES', 'IT', 'PT', 'NL', 'US', 'AE', 'MA', 'TN', 'DZ', 'LB', 'SA', 'QA', 'IN', 'SG', 'HK'];

export type PhoneCountry = { iso: CountryCode; name: string; dial: string; flag: string };

/** Regional-indicator flag emoji (no image is downloaded). Some Windows browsers draw the two letters instead of a flag: the dial code stays visible next to it. */
export function flagEmoji(iso: string): string {
  return String.fromCodePoint(...[...iso.toUpperCase()].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

let cache: { all: PhoneCountry[]; frequent: PhoneCountry[]; others: PhoneCountry[] } | null = null;

/** Every country libphonenumber-js knows, named in French, with its calling code. */
export function phoneCountries() {
  if (cache) return cache;
  let names: Intl.DisplayNames | null = null;
  try { names = new Intl.DisplayNames(['fr'], { type: 'region' }); } catch { /* old browser: ISO codes are shown instead */ }
  const nameOf = (iso: string) => { try { return names?.of(iso) ?? iso; } catch { return iso; } };
  const all = getCountries()
    .map((iso): PhoneCountry => ({ iso, name: nameOf(iso), dial: getCountryCallingCode(iso), flag: flagEmoji(iso) }))
    .sort((a, b) => a.name.localeCompare(b.name, 'fr'));
  const frequent = FREQUENT.map((iso) => all.find((c) => c.iso === iso)).filter((c): c is PhoneCountry => Boolean(c));
  cache = { all, frequent, others: all.filter((c) => !FREQUENT.includes(c.iso)) };
  return cache;
}

const plain = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const ALIASES: Record<string, CountryCode> = { 'hong kong': 'HK', 'etats unis': 'US', 'usa': 'US', 'uk': 'GB', 'emirats arabes unis': 'AE', 'eau': 'AE', 'dubai': 'AE' };

/** « Suisse » → 'CH'. Used to pre-select the dial code from the residence country typed in the first step. Returns undefined when nothing matches clearly. */
export function countryFromName(name: string): CountryCode | undefined {
  const q = plain(name);
  if (!q) return undefined;
  if (ALIASES[q]) return ALIASES[q];
  const { all } = phoneCountries();
  const exact = all.find((c) => plain(c.name) === q);
  if (exact) return exact.iso;
  const partial = all.filter((c) => plain(c.name).includes(q));
  return partial.length === 1 ? partial[0].iso : undefined;
}

export type ParsedPhone = { e164: string; country: CountryCode | undefined; national: string; international: string };

/**
 * Validates a number typed by a visitor. Without a leading « + » (or « 00 ») it is read in `country`; with one it is read as international and `country` is ignored.
 * Returns null when it is not a valid number.
 */
export function parsePhone(input: string, country?: CountryCode): ParsedPhone | null {
  const raw = input.trim().replace(/^00(?=\d)/, '+');
  if (!raw) return null;
  const p = raw.startsWith('+') ? parsePhoneNumberFromString(raw) : parsePhoneNumberFromString(raw, country);
  if (!p || !p.isValid()) return null;
  return { e164: p.number, country: p.country, national: p.formatNational(), international: p.formatInternational() };
}

/** While a visitor types « +971… » or « +33… »: the country that prefix designates (undefined while it is still ambiguous, e.g. « +1 »). */
export function countryFromInternational(input: string): CountryCode | undefined {
  const raw = input.trim().replace(/^00(?=\d)/, '+');
  if (!raw.startsWith('+')) return undefined;
  const t = new AsYouType();
  t.input(raw);
  return t.getCountry();
}

/** E.164 shape check, used by the server on what the browser sends before parsing it again. */
export const E164 = /^\+[1-9]\d{6,14}$/;
