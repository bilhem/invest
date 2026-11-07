'use client';
import { useEffect, useRef, useState } from 'react';
import { track } from '@/lib/analytics';
import { getAttribution } from '@/lib/attribution';
import PhoneField from '@/components/PhoneField';
import { CONSENT_LEAD } from '@/lib/consent';
import { BOOKING_URL, bookingEmbedUrl, bookingIsCalendly } from '@/lib/booking';
import { countryFromName, DEFAULT_PHONE_COUNTRY, parsePhone, type CountryCode } from '@/lib/phone';

const OBJECTIVES = ['Valorisation du capital', 'Revenus locatifs', 'Diversification', 'Résidence secondaire', 'Je découvre'];
const BUDGETS = ['Moins de 250 k€', '250 k€ – 500 k€', '500 k€ – 1 M€', 'Plus de 1 M€'];
const HORIZONS = ['Immédiatement', 'Sous 3 mois', '3 à 6 mois', '6 à 12 mois', 'Je découvre'];
const LANGS = ['Français', 'English'];
const COUNTRIES = ['France', 'Suisse', 'Belgique', 'Luxembourg', 'Canada', 'Royaume-Uni', 'Allemagne', 'Espagne', 'Italie', 'Portugal', 'Pays-Bas', 'États-Unis', 'Émirats arabes unis', 'Maroc', 'Tunisie', 'Algérie', 'Liban', 'Arabie saoudite', 'Qatar', 'Inde', 'Singapour', 'Hong Kong'];

type Data = {
  country: string; objective: string; budget: string; horizon: string;
  name: string; email: string;
  phone: string; phoneCountry: CountryCode; // phone = what the visitor typed; it is sent as E.164 (« +33612345678 »), see submit()
  language: string;
  message: string; consent: boolean; website: string; // website = honeypot
};
const EMPTY: Data = { country: '', objective: '', budget: '', horizon: '', name: '', email: '', phone: '', phoneCountry: DEFAULT_PHONE_COUNTRY, language: 'Français', message: '', consent: false, website: '' };

/** One id per form: a retry after an error carries the same id, so the CRM never creates the lead twice. */
const newSubmissionId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;

const STEPS = [
  { title: 'Où résidez-vous ?', hint: 'Votre pays de résidence nous aide à préparer l’échange.' },
  { title: 'Quel est votre objectif principal ?', hint: 'Il pourra évoluer. C’est un point de départ.' },
  { title: 'Quel budget d’investissement envisagez-vous ?', hint: 'Une fourchette suffit.' },
  { title: 'Quel est votre horizon de décision ?', hint: 'Dans combien de temps souhaitez-vous avancer ?' },
  { title: 'Comment vous joindre ?', hint: 'Nous utilisons ces informations uniquement pour organiser votre rendez-vous.' },
  { title: 'Souhaitez-vous ajouter un message ?', hint: 'Facultatif.' },
] as const;

function validate(step: number, d: Data): string {
  switch (step) {
    case 0: return d.country.trim().length < 2 ? 'Indiquez votre pays de résidence.' : '';
    case 1: return d.objective ? '' : 'Choisissez un objectif.';
    case 2: return d.budget ? '' : 'Choisissez une fourchette de budget.';
    case 3: return d.horizon ? '' : 'Choisissez un horizon.';
    case 4:
      if (d.name.trim().length < 2) return 'Indiquez votre nom.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email.trim())) return 'Indiquez une adresse e-mail valide.';
      if (!parsePhone(d.phone, d.phoneCountry)) return 'Indiquez un numéro de téléphone ou WhatsApp valide, avec le bon pays.';
      return '';
    case 5: return d.consent ? '' : 'Vous devez accepter le traitement de vos données pour envoyer la demande.';
    default: return '';
  }
}

export default function ConsultationForm() {
  const [step, setStep] = useState(0);
  const [d, setD] = useState<Data>(EMPTY);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'failed'>('idle');
  const [failure, setFailure] = useState('');
  const started = useRef(false);
  const sending = useRef(false); // synchronous lock: two quick clicks / Enter presses can never send twice
  const submissionId = useRef('');
  const openedAt = useRef(Date.now());
  const headingRef = useRef<HTMLHeadingElement>(null);

  const mounted = useRef(false);
  useEffect(() => {
    // Move focus to the new step heading, but not on first page load.
    if (mounted.current) headingRef.current?.focus();
    mounted.current = true;
  }, [step, status]);

  const set = <K extends keyof Data>(k: K, v: Data[K]) => {
    if (!started.current) { started.current = true; track('consultation_started'); }
    setError('');
    setD((p) => ({ ...p, [k]: v }));
  };

  const next = () => {
    const e = validate(step, d);
    if (e) return setError(e);
    setError('');
    // The dial code starts from the residence country given in the first step (the visitor can change it).
    if (step === 0 && !d.phone) setD((p) => ({ ...p, phoneCountry: countryFromName(p.country) ?? p.phoneCountry }));
    setStep((s) => s + 1);
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (step < STEPS.length - 1) return next();
    if (sending.current || status === 'done') return;
    const e = validate(step, d);
    if (e) return setError(e);
    const phone = parsePhone(d.phone, d.phoneCountry);
    if (!phone) return setError('Indiquez un numéro de téléphone ou WhatsApp valide, avec le bon pays.');
    sending.current = true;
    setStatus('sending');
    setFailure('');
    submissionId.current ||= newSubmissionId();
    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...d,
          phone: phone.e164,
          submission_id: submissionId.current,
          elapsed_ms: Date.now() - openedAt.current,
          attribution: getAttribution(),
          submitted_at: new Date().toISOString(),
        }),
      });
      const out = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !out.ok) {
        // The lead was NOT saved: say so, and let the visitor try again (same submission id).
        const code = out.error ?? '';
        if (code === 'invalid_phone') { setStep(4); setError('Ce numéro de téléphone n’a pas été accepté. Vérifiez-le et le pays sélectionné.'); setStatus('idle'); }
        else {
          setFailure(res.status === 429
            ? 'Trop de tentatives pour le moment. Patientez quelques instants puis réessayez.'
            : 'L’envoi a échoué. Vérifiez votre connexion et réessayez, ou contactez-nous directement.');
          setStatus('failed');
        }
        sending.current = false;
        return;
      }
      // Saved on the server (the route answers ok only once the CRM has accepted the lead): only now does the booking step open.
      track('consultation_completed', { budget: d.budget, objective: d.objective });
      setStatus('done');
    } catch {
      setFailure('L’envoi a échoué. Vérifiez votre connexion et réessayez, ou contactez-nous directement.');
      setStatus('failed');
      sending.current = false;
    }
  };

  if (status === 'done') return <Confirmation name={d.name.trim()} email={d.email.trim()} headingRef={headingRef} />;

  const choice = (name: keyof Data, options: string[]) => (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => (
        <label key={o} className={`flex cursor-pointer items-center gap-3 border px-5 py-4 text-sm transition-colors has-[:checked]:border-charcoal has-[:checked]:bg-charcoal has-[:checked]:text-ivory has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-champagne border-stone-light hover:border-charcoal`}>
          <input type="radio" name={name} value={o} checked={d[name] === o} onChange={() => set(name, o as never)} className="sr-only" />
          {o}
        </label>
      ))}
    </div>
  );

  const input = 'w-full border border-stone-light bg-white px-4 py-3.5 text-base focus:border-charcoal focus:outline-none';
  const label = 'mb-2 block text-sm text-charcoal/70';

  return (
    <form onSubmit={submit} noValidate className="mx-auto max-w-2xl">
      <p className="text-sm text-stone" aria-live="polite">Étape {step + 1} sur {STEPS.length}</p>
      <div className="mt-3 h-px w-full bg-stone-light" aria-hidden>
        <div className="h-px bg-champagne transition-all duration-500" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
      </div>

      <fieldset className="mt-10 min-w-0 border-0 p-0">
        <legend className="sr-only">{STEPS[step].title}</legend>
        <h2 ref={headingRef} tabIndex={-1} className="font-serif text-3xl leading-tight outline-none md:text-4xl">{STEPS[step].title}</h2>
        <p className="mt-3 text-charcoal/65">{STEPS[step].hint}</p>

        <div className="mt-8">
          {step === 0 && (
            <>
              <label htmlFor="country" className={label}>Pays de résidence</label>
              <input id="country" list="countries" autoComplete="country-name" className={input} value={d.country} onChange={(e) => set('country', e.target.value)} />
              <datalist id="countries">{COUNTRIES.map((c) => <option key={c} value={c} />)}</datalist>
            </>
          )}
          {step === 1 && choice('objective', OBJECTIVES)}
          {step === 2 && choice('budget', BUDGETS)}
          {step === 3 && choice('horizon', HORIZONS)}
          {step === 4 && (
            <div className="space-y-5">
              <div><label htmlFor="name" className={label}>Nom</label><input id="name" autoComplete="name" className={input} value={d.name} onChange={(e) => set('name', e.target.value)} /></div>
              <div><label htmlFor="email" className={label}>E-mail</label><input id="email" type="email" autoComplete="email" className={input} value={d.email} onChange={(e) => set('email', e.target.value)} /></div>
              <PhoneField
                id="phone"
                label="Téléphone / WhatsApp"
                value={{ country: d.phoneCountry, national: d.phone }}
                onChange={(v) => { set('phone', v.national); set('phoneCountry', v.country); }}
                inputClass={input}
                labelClass={label}
              />
              <div>
                <label htmlFor="language" className={label}>Langue préférée</label>
                <select id="language" className={input} value={d.language} onChange={(e) => set('language', e.target.value)}>{LANGS.map((l) => <option key={l}>{l}</option>)}</select>
              </div>
            </div>
          )}
          {step === 5 && (
            <div className="space-y-6">
              <div><label htmlFor="message" className={label}>Votre message</label><textarea id="message" rows={5} maxLength={1500} className={input} value={d.message} onChange={(e) => set('message', e.target.value)} /></div>
              {/* honeypot: hidden from people, visible to bots */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="website">Ne pas remplir</label>
                <input id="website" tabIndex={-1} autoComplete="off" value={d.website} onChange={(e) => set('website', e.target.value)} />
              </div>
              <label className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/75">
                <input type="checkbox" checked={d.consent} onChange={(e) => set('consent', e.target.checked)} className="mt-1 h-4 w-4 accent-[#B8935A]" />
                <span>{CONSENT_LEAD} Consultez la <a href="/legal/privacy-policy" className="underline underline-offset-4">politique de confidentialité</a>.</span>
              </label>
            </div>
          )}
        </div>
      </fieldset>

      <div role="alert" className="mt-5 min-h-[1.5rem] text-sm text-[#9B2C2C]">
        {error || (status === 'failed' ? failure : '')}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        {step > 0 ? (
          <button type="button" disabled={status === 'sending'} onClick={() => { setError(''); setStep(step - 1); }} className="text-sm text-charcoal/70 underline-offset-4 hover:underline disabled:opacity-60">Retour</button>
        ) : <span />}
        <button type="submit" disabled={status === 'sending'} className="btn btn-gold disabled:opacity-60">
          {step < STEPS.length - 1 ? 'Continuer' : status === 'sending' ? 'Envoi…' : 'Envoyer ma demande'}
        </button>
      </div>
    </form>
  );
}

/**
 * Step shown ONLY once the server has saved the request. The booking is a separate, third-party step (Calendly): the appointment is announced as confirmed
 * only when Calendly itself says so (« calendly.event_scheduled », from calendly.com). If the visitor leaves without booking, the request stays saved.
 */
function Confirmation({ name, email, headingRef }: { name: string; email: string; headingRef: React.RefObject<HTMLHeadingElement | null> }) {
  const [booked, setBooked] = useState(false);
  const [src] = useState(() => bookingEmbedUrl({ name, email, host: typeof window !== 'undefined' ? window.location.hostname : undefined }));
  const firstName = name.split(' ')[0];

  useEffect(() => {
    track('calendar_opened');
    if (!bookingIsCalendly()) return;
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;
      const ev = (e.data as { event?: string } | null)?.event;
      if (ev === 'calendly.event_scheduled') { setBooked(true); track('appointment_booked'); }
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 ref={headingRef} tabIndex={-1} className="font-serif text-4xl outline-none" aria-live="polite">
        {booked ? `Votre rendez-vous est confirmé${firstName ? `, ${firstName}` : ''}.` : `Merci${firstName ? `, ${firstName}` : ''}.`}
      </h2>
      <p className="mt-4 text-charcoal/70">
        {booked
          ? 'Calendly vous envoie le détail du rendez-vous par e-mail.'
          : 'Votre demande est enregistrée. Choisissez maintenant un créneau pour notre échange : le rendez-vous n’est confirmé qu’une fois le créneau réservé. Si vous préférez le faire plus tard, votre demande reste enregistrée.'}
      </p>
      <iframe title="Réservation de rendez-vous" src={src} className="mt-10 h-[720px] w-full border border-stone-light/70 bg-white" />
      <p className="mt-5 text-sm text-charcoal/65">
        Le calendrier ne s’affiche pas ?{' '}
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Ouvrir la page de réservation</a>.
      </p>
      {bookingIsCalendly() && (
        <p className="mt-2 text-xs text-charcoal/50">
          La réservation est gérée par Calendly, qui applique sa propre{' '}
          <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">politique de confidentialité</a>.
        </p>
      )}
    </div>
  );
}
