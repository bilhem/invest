import { Fragment } from 'react';
import Link from 'next/link';
import BFImage from '@/components/BFImage';
import { nb } from '@/components/neighborhood/ui';
import type { Story, StoryFigure } from '@/lib/data/stories';
import { splitFigure } from './format';

/**
 * The two figures a card puts forward, taken from the case's own `figures` (never rewritten, never computed here):
 *   1. the appreciation, in % (« Appréciation de l’actif », « Appréciation latente », « Appréciation »);
 *   2. a resold asset → « Plus-value brute » (the supplied wording: before costs); an asset still held → « Loyer actuel ».
 * An asset that is still held never shows a realised gain: its appreciation is « latente » (README, language rules of Investor Stories).
 */
export function cardFigures(story: Story): StoryFigure[] {
  const byLabel = (test: (label: string) => boolean) => story.figures.find((f) => test(f.label));
  const second = story.outcome === 'sold' ? byLabel((l) => l === 'Plus-value brute') : byLabel((l) => l === 'Loyer actuel');
  return [byLabel((l) => l.startsWith('Appréciation')), second].filter((f): f is StoryFigure => !!f);
}

/** The label that tells a reader whether the figures are realised (resale) or latent (asset kept). Uses the supplied « Situation » when there is one. */
export const storyStatus = (story: Story) => (story.outcome === 'sold' ? 'Revendu' : 'Actif conservé');

const EYEBROW = 'text-[0.75rem] font-medium uppercase leading-snug tracking-[0.16em] text-[#7E6234]'; // 12px: #7E6234 is ≈ 4.7:1 on ivory (the site's champagne-dark is 3.6:1)

/**
 * One case on the Investor Stories list: picture (5:4), investor, city · objective, project · district, two figures, link.
 * The whole card is one link (the visible « Découvrir le parcours » link is stretched over it), so there is a single tab stop per case.
 */
export default function StoryCard({ story }: { story: Story }) {
  const href = `/investor-stories/${story.slug}`;
  const figures = cardFigures(story);
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[5/4] overflow-hidden bg-charcoal">
        <BFImage
          slot={story.img}
          tag
          sizes="(min-width:1280px) 560px, (min-width:768px) 46vw, 100vw"
          className="transition-transform duration-[1200ms] group-hover:scale-[1.03]"
        />
      </div>

      {/* From tablets up two cards share a row: two lines are kept for « ville · objectif » until the column is wide enough for one (xl), so the names line up. */}
      <p className={`${EYEBROW} mt-6 md:min-h-[2.75em] xl:min-h-0`}>{story.city} · {story.strategy}</p>
      <h3 className="mt-3 text-balance font-serif text-[2rem] font-medium leading-[1.08] tracking-tight md:text-[2.25rem]">{nb(story.name)}</h3>
      <p className="mt-2 text-[1rem] leading-snug text-charcoal/80">
        <span className="font-medium text-charcoal">{story.project}</span> · {story.area}
      </p>

      <div className="mt-6 border-t border-charcoal/15 pt-4">
        <p className={EYEBROW}>{storyStatus(story)}</p>
        {/* Two columns, two rows filled column by column: both labels share one row and both figures start on the same line, whatever the label length. */}
        <dl className="mt-3 grid grid-flow-col grid-cols-2 grid-rows-[auto_auto] gap-x-6 gap-y-2">
          {figures.map((f) => {
            const { num, unit } = splitFigure(f.value);
            return (
              <Fragment key={f.label}>
                <dt className="text-[0.8125rem] leading-snug text-charcoal/75">{f.label}</dt>
                <dd>
                  <span className="block font-serif text-[1.75rem] leading-none tracking-tight sm:text-[2rem]">{num}</span>
                  {unit && <span className="mt-1.5 block text-[0.6875rem] uppercase tracking-[0.18em] text-charcoal/70">{unit}</span>}
                </dd>
              </Fragment>
            );
          })}
        </dl>
      </div>

      <div className="mt-auto pt-8">
        <Link
          href={href}
          className="inline-flex items-center gap-2 border-b border-champagne-dark/60 pb-1 text-sm font-medium text-charcoal transition-colors after:absolute after:inset-0 hover:border-champagne-dark"
        >
          Découvrir le parcours<span aria-hidden className="text-[#7E6234] transition-transform group-hover:translate-x-1">→</span>
          <span className="sr-only"> : {story.name}</span>
        </Link>
      </div>
    </article>
  );
}
