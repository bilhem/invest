'use client';
import { useMemo } from 'react';
import { countryFromInternational, parsePhone, phoneCountries, type CountryCode } from '@/lib/phone';

export type PhoneValue = { country: CountryCode; national: string };

type Props = {
  id: string;
  label: string;
  value: PhoneValue;
  onChange: (v: PhoneValue) => void;
  inputClass: string;
  labelClass: string;
};

/**
 * International phone field: a country selector (flag, name, dial code, every country) next to the number.
 * - The selector is a native <select> laid over a compact « 🇫🇷 +33 » button: the native picker is the best experience on phones (wheel / list), and keyboard and screen readers work as usual.
 * - Typing « +971… » or « 00971… » in the number switches the country by itself.
 * - The number is formatted when the field loses focus (never while typing, so the caret does not jump).
 * The parent keeps the raw value, validates it with `parsePhone` (E.164 is what is stored) and shows the error message.
 */
export default function PhoneField({ id, label, value, onChange, inputClass, labelClass }: Props) {
  const { frequent, others, all } = useMemo(() => phoneCountries(), []);
  const current = all.find((c) => c.iso === value.country) ?? all[0];
  const option = (c: (typeof all)[number]) => <option key={c.iso} value={c.iso}>{`${c.flag} ${c.name} (+${c.dial})`}</option>;

  const onNumber = (raw: string) => {
    const guessed = countryFromInternational(raw);
    onChange({ country: guessed ?? value.country, national: raw });
  };

  const onBlur = () => {
    const p = parsePhone(value.national, value.country);
    if (p) onChange({ country: p.country ?? value.country, national: value.national.trim().startsWith('+') || value.national.trim().startsWith('00') ? p.international : p.national });
  };

  return (
    <div>
      <label htmlFor={id} className={labelClass}>{label}</label>
      <div className="flex gap-2">
        <div className="relative shrink-0 has-[select:focus-visible]:outline has-[select:focus-visible]:outline-2 has-[select:focus-visible]:outline-offset-2 has-[select:focus-visible]:outline-champagne">
          <div aria-hidden className="pointer-events-none flex h-full min-w-[6.5rem] items-center justify-between gap-2 border border-stone-light bg-white px-3 py-3.5 text-base">
            <span className="whitespace-nowrap">{current.flag} +{current.dial}</span>
            <svg width="10" height="6" viewBox="0 0 10 6" className="text-charcoal/50"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          </div>
          <select
            aria-label="Pays et indicatif téléphonique"
            autoComplete="tel-country-code"
            value={value.country}
            onChange={(e) => onChange({ country: e.target.value as CountryCode, national: value.national })}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
          >
            <optgroup label="Pays fréquents">{frequent.map(option)}</optgroup>
            <optgroup label="Tous les pays">{others.map(option)}</optgroup>
          </select>
        </div>
        <input
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          aria-describedby={`${id}-hint`}
          className={`${inputClass} min-w-0 flex-1`}
          value={value.national}
          onChange={(e) => onNumber(e.target.value)}
          onBlur={onBlur}
        />
      </div>
      <p id={`${id}-hint`} className="mt-2 text-xs text-charcoal/55">Vous pouvez aussi saisir le numéro avec son indicatif, par exemple +971 ou +33.</p>
    </div>
  );
}
