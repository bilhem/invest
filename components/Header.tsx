'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NAV, CTA } from '@/lib/site';
import Logo from './Logo';
import CtaLink from './CtaLink';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-ivory transition-colors duration-500 ${solid || open ? 'bg-charcoal/95 backdrop-blur' : 'bg-gradient-to-b from-charcoal/60 to-transparent'}`}>
      <div className="wrap flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="BF Properties — accueil" onClick={() => setOpen(false)}><Logo /></Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => <Link key={n.href} href={n.href} className="text-[0.8rem] tracking-wide text-ivory/80 transition-colors hover:text-champagne-light">{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <CtaLink href={CTA.href} id="header" className="btn btn-gold hidden !py-2.5 sm:inline-flex">{CTA.label}</CtaLink>
          <button className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(!open)}>
            <span className={`h-px w-6 bg-ivory transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-ivory transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[72px] flex flex-col justify-between bg-charcoal px-6 pb-10 pt-10">
          <nav aria-label="Menu mobile" className="flex flex-col gap-1">
            {NAV.map((n) => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="border-b border-ivory/10 py-4 font-serif text-3xl">{n.label}</Link>)}
          </nav>
          <CtaLink href={CTA.href} id="mobile_menu" className="btn btn-gold w-full">{CTA.label}</CtaLink>
        </div>
      )}
    </header>
  );
}
