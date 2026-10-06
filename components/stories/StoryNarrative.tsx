import Link from 'next/link';
import { Heading, Quote, Shell, Statement, fr, type Join } from '@/components/neighborhood/ui';
import StoryQuote from './StoryQuote';
import type { StoryTone } from '@/lib/data/stories';

/**
 * A narrative chapter: the heading on one side, the supplied paragraphs on the other (`flip` swaps the sides from the large breakpoint up).
 * `stress` = indexes of paragraphs set as a serif statement; `head` = a key line set large under the heading; `aside` = facts / link under the heading.
 */
export default function StoryNarrative({
  id, title, paragraphs, stress = [], head, quote, aside, tone, join, flip,
}: {
  id?: string; title: string; paragraphs: string[]; stress?: number[]; head?: string; quote?: string; aside?: React.ReactNode;
  tone: StoryTone; join: Join; flip: boolean;
}) {
  const dark = tone === 'dark';
  return (
    <Shell id={id} tone={tone} density="standard" join={join}>
      <div className="ed-grid items-start gap-y-8">
        <div className={`col-span-12 lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8 lg:col-span-5' : ''}`}>
          <Heading title={title} dark={dark} titleClass="max-w-[28rem]" />
          {head && <Quote dark={dark} accent className="mt-8 md:mt-10">{head}</Quote>}
          {aside && <div className="mt-8">{aside}</div>}
        </div>
        <div className={`col-span-12 lg:col-span-6 ${flip ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-7'}`}>
          <div className="space-y-5">
            {paragraphs.map((p, i) => (stress.includes(i)
              ? <Statement key={p} dark={dark} className="!mt-8 !mb-8">{fr(p)}</Statement>
              : <p key={p} className={`ed-body ${dark ? 'text-ivory/80' : 'text-charcoal/75'}`}>{fr(p)}</p>))}
          </div>
          {quote && (
            <blockquote className="mt-12 border-l-2 border-champagne pl-6 md:pl-8">
              <StoryQuote dark={dark} accent>{quote}</StoryQuote>
            </blockquote>
          )}
        </div>
      </div>
    </Shell>
  );
}

/** Project facts + the district link (only rendered when the district page exists). */
export function ProjectFacts({ project, area, unit, developer, areaLink, dark = false }: {
  project: string; area: string; unit: string; developer?: string; areaLink?: { href: string; name: string }; dark?: boolean;
}) {
  return (
    <div className={`border-t pt-6 ${dark ? 'border-ivory/25' : 'border-charcoal/20'}`}>
      <p className="font-serif text-[1.375rem] leading-snug">{project} · {area}</p>
      <p className={`mt-2 text-[0.9375rem] ${dark ? 'text-ivory/70' : 'text-charcoal/70'}`}>{unit}{developer ? ` — Développeur : ${developer}` : ''}</p>
      {areaLink && (
        <Link href={areaLink.href} className={`mt-4 inline-block text-sm font-medium underline-offset-4 hover:underline ${dark ? 'text-champagne-light' : 'text-champagne-dark'}`}>
          Analyse du quartier {areaLink.name}
        </Link>
      )}
    </div>
  );
}
