'use client';
import Script from 'next/script';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const GA = process.env.NEXT_PUBLIC_GA4_ID;
const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;
type Choice = 'granted' | 'denied' | null;

/**
 * Loads GA4 / Meta Pixel ONLY after explicit consent, and only if the IDs are configured.
 * With no IDs set, nothing is loaded and no banner is shown.
 */
export default function Consent() {
  const [choice, setChoice] = useState<Choice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem('bf-consent');
      if (v === 'granted' || v === 'denied') setChoice(v);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const decide = (v: 'granted' | 'denied') => {
    try {
      localStorage.setItem('bf-consent', v);
    } catch {
      /* ignore */
    }
    setChoice(v);
  };

  if (!GA && !PIXEL) return null;

  return (
    <>
      {choice === 'granted' && GA && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      {choice === 'granted' && PIXEL && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL}');fbq('track','PageView');`}
        </Script>
      )}
      {ready && choice === null && (
        <div role="dialog" aria-label="Préférences de confidentialité" className="fixed inset-x-0 bottom-0 z-[60] border-t border-ivory/10 bg-charcoal text-ivory">
          <div className="wrap flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-ivory/80">
              Nous utilisons des mesures d’audience et de publicité uniquement avec votre accord.{' '}
              <Link href="/legal/cookie-policy" className="underline underline-offset-4 hover:text-champagne-light">Politique de cookies</Link>
            </p>
            <div className="flex gap-3">
              <button type="button" onClick={() => decide('denied')} className="btn btn-outline-light !py-2.5">Refuser</button>
              <button type="button" onClick={() => decide('granted')} className="btn btn-gold !py-2.5">Accepter</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
