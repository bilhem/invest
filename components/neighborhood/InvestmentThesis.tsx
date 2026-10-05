import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { GAP, Heading, Prose, Shell, Statement, muted } from './ui';
import type { Density, ThesisData } from '@/lib/data/neighborhood-types';

/** "Le regard BF Properties": the thesis, one big quote, optional final line. */
export default function InvestmentThesis({ s, density }: { s: ThesisData; density: Density }) {
  const dark = s.tone === 'dark';
  return (
    <Shell id={s.id ?? 'these'} tone={s.tone} density={density}>
      <div className={s.image ? 'grid items-start gap-12 lg:grid-cols-12 lg:gap-16' : ''}>
        <div className={s.image ? 'lg:col-span-8' : ''}>
          <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} />
          <div className={`${GAP} grid gap-8 lg:grid-cols-12 lg:gap-16`}>
            {s.lead && s.lead.length > 0 && (
              <Reveal className="space-y-3 lg:col-span-6">
                {s.lead.map((l) => (
                  <p key={l} className={`ed-statement ${dark ? 'text-ivory' : 'text-charcoal'}`}>{l}</p>
                ))}
              </Reveal>
            )}
            <Reveal className={s.lead?.length ? 'lg:col-span-6' : 'lg:col-span-7'}>
              <Prose paragraphs={s.paragraphs} dark={dark} />
            </Reveal>
          </div>
        </div>
        {s.image && (
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <BFImage slot={s.image} sizes="(min-width:1024px) 400px, 100vw" />
            </div>
          </Reveal>
        )}
      </div>

      {s.quote && (
        <Reveal className={`mt-16 border-t pt-12 md:mt-24 md:pt-16 ${dark ? 'border-ivory/20' : 'border-champagne/50'}`}>
          <Statement dark={dark} rule={false}>{s.quote}</Statement>
          {s.final && (
            <p className={`ed-statement mt-8 ${dark ? 'text-champagne-light' : 'text-champagne-dark'}`}>{s.final}</p>
          )}
        </Reveal>
      )}
      {!s.quote && s.final && (
        <Reveal className="mt-14"><p className={`ed-statement ${muted(dark)}`}>{s.final}</p></Reveal>
      )}
    </Shell>
  );
}
