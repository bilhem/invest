import Link from 'next/link';
import BFImage from '@/components/BFImage';
import { nb } from '@/components/neighborhood/ui';
import type { HubVisual } from '@/lib/data/insights-hub';

type Dossier = { eyebrow: string; title: string; text: string; href: string; cta: string; visual: HubVisual };

/** A page of its own that is not an article (the developers page), kept reachable whatever filter is active. Copy is that page's own supplied copy. */
export default function HubDossier({ d }: { d: Dossier }) {
  return (
    <section aria-label={d.eyebrow} className="bg-ivory-200 py-16 md:py-24">
      <div className="wrap">
        <Link href={d.href} className="group grid items-center gap-8 md:gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden bg-ivory lg:col-span-5">
            <BFImage slot={d.visual.image} alt={d.visual.alt} focal={d.visual.focal} sizes="(min-width: 1280px) 480px, (min-width: 1024px) 40vw, 100vw" />
          </div>
          <div className="lg:col-span-7">
            <p className="ed-eyebrow !text-champagne-dark">{d.eyebrow}</p>
            <h2 className="mt-5 max-w-[34rem] text-balance font-serif text-[2rem] font-medium leading-[1.1] tracking-tight transition-colors group-hover:text-champagne-dark sm:text-4xl lg:text-[2.75rem]">{nb(d.title)}</h2>
            <p className="mt-5 max-w-md leading-relaxed text-charcoal/70">{d.text}</p>
            <span className="mt-8 inline-flex items-center gap-2 border-b border-champagne-dark/40 pb-1 text-sm font-medium text-champagne-dark transition-colors group-hover:border-champagne-dark">
              {d.cta}<span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
