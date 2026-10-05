import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { Heading, Photo, Prose, Quote, Shell, Statement, type SectionProps } from './ui';
import type { ThesisData } from '@/lib/data/neighborhood-types';

/**
 * "Le regard BF Properties".
 *  with image    = title, lead lines and text on 7 columns, portrait photo on 4 (dark moment)
 *  typographic   = title 6 / text 5, then (optional) the selection criteria, then the key quote (and final line) centred on 900px: a real editorial moment
 *  criteria      = numbered list of what the selection looks at (four columns on desktop), closed by one statement
 */
export default function InvestmentThesis({ s, density, tone, join }: SectionProps<ThesisData>) {
  const dark = tone === 'dark';
  const rule = dark ? 'border-ivory/20' : 'border-champagne/50';

  if (s.image) {
    return (
      <Shell id={s.id ?? 'these'} tone={tone} density={density} weight="major" join={join}>
        <div className="ed-grid items-start gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} titleClass="max-w-[40rem]" />
            {s.lead && s.lead.length > 0 && (
              <Reveal className="mt-10 space-y-2 md:mt-12">
                {s.lead.map((l, i) => (
                  <Quote key={l} dark={dark} accent={i === s.lead!.length - 1} className="max-w-[40rem]">{l}</Quote>
                ))}
              </Reveal>
            )}
            <Reveal className="mt-10 md:mt-12">
              <Prose paragraphs={s.paragraphs} dark={dark} />
            </Reveal>
          </div>
          <Reveal className="col-span-12 sm:col-span-8 lg:col-span-4 lg:col-start-9">
            <Photo ratio="3 / 4"><BFImage slot={s.image} sizes="(min-width:1360px) 405px, (min-width:1024px) 33vw, 100vw" /></Photo>
          </Reveal>
        </div>
        {s.quote && (
          <Reveal className={`mt-16 border-t pt-12 md:mt-24 md:pt-16 ${rule}`}>
            <Quote dark={dark} className="max-w-[56rem] md:mx-auto md:text-center">{s.quote}</Quote>
          </Reveal>
        )}
      </Shell>
    );
  }

  return (
    <Shell id={s.id ?? 'these'} tone={tone} density={density} weight="major" join={join}>
      <div className="ed-grid items-start gap-y-10">
        <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} className="col-span-12 lg:col-span-6" titleClass="max-w-[34rem]" />
        <Reveal className="col-span-12 space-y-5 lg:col-span-5 lg:col-start-8 lg:pt-11">
          {s.lead && s.lead.map((l) => <Quote key={l} dark={dark} className="!text-[1.5rem] md:!text-[1.75rem]">{l}</Quote>)}
          <Prose paragraphs={s.paragraphs} dark={dark} />
        </Reveal>
      </div>

      {s.criteria && s.criteria.items.length > 0 && (
        <Reveal className={`mt-16 border-t pt-10 md:mt-20 ${dark ? 'border-ivory/20' : 'border-charcoal/15'}`}>
          <ol className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {s.criteria.items.map((item, i) => (
              <li key={item} className={`flex items-baseline gap-4 border-b py-5 ${dark ? 'border-ivory/20' : 'border-charcoal/15'}`}>
                <span className={`font-sans text-xs font-medium tracking-[0.2em] ${dark ? 'text-champagne-light' : 'text-champagne-dark'}`}>{String(i + 1).padStart(2, '0')}</span>
                <span className="font-serif text-[1.375rem] leading-snug md:text-[1.5rem]">{item}</span>
              </li>
            ))}
          </ol>
          {s.criteria.closing && (
            <Statement dark={dark} className="mt-12 max-w-[48rem] md:mt-14">{s.criteria.closing}</Statement>
          )}
        </Reveal>
      )}

      {(s.quote || s.final) && (
        <Reveal className={`mt-16 max-w-[58rem] border-t pt-12 md:mx-auto md:mt-24 md:pt-16 md:text-center ${rule}`}>
          {s.quote && <Quote dark={dark}>{s.quote}</Quote>}
          {s.final && (
            <>
              {s.quote && <span aria-hidden className="my-10 block h-px w-14 bg-champagne md:mx-auto" />}
              <Quote dark={dark} accent>{s.final}</Quote>
            </>
          )}
        </Reveal>
      )}
    </Shell>
  );
}
