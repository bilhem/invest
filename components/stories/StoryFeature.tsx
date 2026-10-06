import Link from 'next/link';
import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { Section, nb, type Join } from '@/components/neighborhood/ui';
import type { Story, StoryTone } from '@/lib/data/stories';
import { splitFigure } from './format';

/**
 * One case on the Investor Stories page: a large project picture (7 columns) against the profile (5 columns), alternating sides.
 * Picture + city·strategy + name + strong sentence + project + three of the case's own figures + link. Not a card: a magazine spread.
 */
export default function StoryFeature({ story, index, tone, flip, join }: { story: Story; index: number; tone: StoryTone; flip: boolean; join: Join }) {
  const href = `/investor-stories/${story.slug}`;
  const hl = story.highlights.map((l) => story.figures.find((f) => f.label === l)).filter((f): f is NonNullable<typeof f> => !!f);
  return (
    <Section id={story.slug} tone={tone} density="standard" weight="major" join={join}>
      <div className="ed-wrap">
        <div className="ed-grid items-center gap-y-10">
          <Reveal className={`col-span-12 lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
            <Link href={href} tabIndex={-1} aria-hidden="true" className="group relative block aspect-[16/11] overflow-hidden bg-charcoal">
              <BFImage
                slot={story.img}
                tag
                sizes="(min-width:1360px) 780px, (min-width:1024px) 58vw, 100vw"
                className="transition-transform duration-[1200ms] group-hover:scale-[1.03]"
              />
            </Link>
          </Reveal>
          <Reveal className={`col-span-12 lg:col-span-5 ${flip ? 'lg:order-1 lg:pr-6' : 'lg:pl-6'}`}>
            <p className="font-serif text-[1.125rem] tracking-wide text-champagne-dark">{String(index + 1).padStart(2, '0')}</p>
            <p className="ed-eyebrow mt-3 !text-champagne-dark">{story.city} · {story.strategy}</p>
            <h2 className="ed-h2 mt-4 text-balance">{story.name}</h2>
            <p className="mt-6 font-serif text-[1.375rem] leading-[1.3] tracking-tight text-balance md:text-[1.625rem]">{nb(story.headline)}</p>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-charcoal/75">
              <span className="font-medium text-charcoal">{story.project}</span> · {story.area}
              <span className="block">{story.unit}</span>
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-x-5 border-t border-charcoal/20 pt-6">
              {hl.map((f) => {
                const { num, unit } = splitFigure(f.value);
                return (
                  <div key={f.label}>
                    <dt className="min-h-[2.4em] text-[0.75rem] leading-snug text-charcoal/60 sm:min-h-0">{f.label}</dt>
                    <dd className="mt-2">
                      <span className="block font-serif text-[1.375rem] leading-none tracking-tight sm:text-[1.625rem] xl:text-[1.875rem]">{num}</span>
                      {unit && <span className="mt-1.5 block text-[0.6875rem] uppercase tracking-[0.18em] text-charcoal/55">{unit}</span>}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <Link href={href} className="btn btn-outline-dark mt-9">
              Lire le cas<span aria-hidden>→</span><span className="sr-only"> : {story.name}</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
