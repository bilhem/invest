'use client';
import Link from 'next/link';
import { useState, type ReactNode } from 'react';
import { HUB_FILTERS, minutesLabel, type HubFilterKey } from '@/lib/data/insights-hub';

/** Only what the cards show (the client component never receives the article bodies). `media` is the picture, rendered on the server (BFImage). */
export type HubCard = {
  slug: string;
  /** Card headline (see splitTitle) and the rest of the title, kept for screen readers. */
  headline: string;
  rest: string;
  /** French label of the main category. */
  category: string;
  readingMinutes: number;
  /** The filters this article belongs to (main and secondary categories). */
  filters: HubFilterKey[];
  media: ReactNode;
};

/** Filter tabs + grid of editorial cards. The cover article and the developers dossier live outside (page.tsx): they do not depend on the filter. */
export default function InsightsExplorer({ cards }: { cards: HubCard[] }) {
  const [active, setActive] = useState<HubFilterKey>('all');
  const shown = active === 'all' ? cards : cards.filter((c) => c.filters.includes(active));
  const n = shown.length;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between md:border-b md:border-charcoal/15">
        {/* Phones: small solid chips that wrap (every filter stays visible, nothing scrolls sideways). From tablets up: quiet text tabs on one hairline. */}
        <div role="group" aria-label="Filtrer les analyses par catégorie" className="flex flex-wrap gap-2 md:gap-10">
          {HUB_FILTERS.map((f) => {
            const on = active === f.key;
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => setActive(f.key)}
                aria-pressed={on}
                className={`relative inline-flex min-h-11 items-center px-4 text-[0.9375rem] tracking-wide transition-colors md:min-h-0 md:px-0 md:py-4 ${on
                  ? 'bg-charcoal text-ivory md:bg-transparent md:text-charcoal md:after:absolute md:after:inset-x-0 md:after:bottom-0 md:after:h-px md:after:bg-champagne-dark'
                  : 'bg-ivory-200 text-charcoal/70 hover:text-charcoal md:bg-transparent md:text-charcoal/55'}`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="mt-5 text-sm text-stone md:mt-0 md:pb-4">{n} {n > 1 ? 'analyses' : 'analyse'}</p>
      </div>

      {n === 0 ? (
        <p className="mt-14 text-charcoal/70">Aucune analyse dans cette catégorie pour le moment.</p>
      ) : (
        <ul className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16">
          {shown.map((c) => (
            <li key={c.slug} className="min-w-0">
              <Link href={`/insights/${c.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-ivory-200">{c.media}</div>
                <p className="mt-5 flex items-center gap-3 text-xs">
                  <span className="font-medium uppercase tracking-[0.16em] text-champagne-dark">{c.category}</span>
                  <span aria-hidden className="h-px w-4 bg-stone-light" />
                  <span className="text-stone">{minutesLabel(c.readingMinutes)}</span>
                </p>
                <h2 className="mt-3 line-clamp-3 text-balance font-serif text-[1.625rem] font-medium leading-[1.15] tracking-tight transition-colors group-hover:text-champagne-dark md:text-[1.75rem]">
                  {c.headline}
                  {c.rest && <span className="sr-only">{c.rest}</span>}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
