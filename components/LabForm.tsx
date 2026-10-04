'use client';
import { useState } from 'react';
import { track } from '@/lib/analytics';
import { getAttribution } from '@/lib/attribution';

export default function LabForm() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'failed'>('idle');
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError('Indiquez une adresse e-mail valide.');
    if (!consent) return setError('Veuillez accepter pour être informé du lancement.');
    setError('');
    setStatus('sending');
    try {
      const res = await fetch('/api/lab', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), consent, website, attribution: getAttribution(), submitted_at: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error('bad status');
      track('lab_interest');
      setStatus('done');
    } catch {
      setStatus('failed');
    }
  };

  if (status === 'done') {
    return <p role="status" className="font-serif text-2xl text-champagne-light">Merci. Nous vous préviendrons dès l’ouverture du Lab.</p>;
  }

  return (
    <form onSubmit={submit} noValidate className="max-w-xl">
      <label htmlFor="lab-email" className="sr-only">Adresse e-mail</label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="lab-email"
          type="email"
          autoComplete="email"
          placeholder="Votre adresse e-mail"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setError(''); }}
          className="w-full border border-ivory/30 bg-transparent px-4 py-3.5 text-ivory placeholder:text-ivory/40 focus:border-champagne focus:outline-none"
        />
        <button type="submit" disabled={status === 'sending'} className="btn btn-gold shrink-0 disabled:opacity-60">
          {status === 'sending' ? 'Envoi…' : 'Être informé du lancement'}
        </button>
      </div>
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="lab-website">Ne pas remplir</label>
        <input id="lab-website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <label className="mt-4 flex items-start gap-3 text-xs leading-relaxed text-ivory/65">
        <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); setError(''); }} className="mt-0.5 h-4 w-4 accent-[#B8935A]" />
        <span>J’accepte de recevoir un e-mail de BF Properties concernant le lancement du Lab. <a href="/legal/privacy-policy" className="underline underline-offset-4">Confidentialité</a></span>
      </label>
      <p role="alert" className="mt-3 min-h-[1.25rem] text-sm text-[#E8A0A0]">
        {error || (status === 'failed' ? 'L’envoi a échoué. Réessayez dans un instant.' : '')}
      </p>
    </form>
  );
}
