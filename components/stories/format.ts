/** Display helpers for Investor Stories figures. The supplied values are never changed: only the kind of space (non-breaking) and the split number / unit. */
const NBSP = ' ';

/** `3 284 900 AED` → { num: '3 284 900', unit: 'AED' } ; `220 000 AED / an` → unit `AED / an` ; `+37 %`, `50 / 50`, `≈ 9,4 %` stay whole. */
export function splitFigure(value: string): { num: string; unit?: string } {
  const m = value.match(/^(.*?)\s+(AED(?:\s*\/\s*an)?)$/);
  if (!m) return { num: value.replace(/ /g, NBSP) };
  return { num: m[1].replace(/ /g, NBSP), unit: m[2].replace(/ /g, NBSP) };
}

/** Same value on one line (list cards, timeline). */
export const oneLine = (value: string) => value.replace(/ /g, NBSP);
