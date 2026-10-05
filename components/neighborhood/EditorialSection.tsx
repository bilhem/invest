import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { Heading, Photo, Prose, Quote, Section, Shell, muted, type SectionProps } from './ui';
import type { EditorialData } from '@/lib/data/neighborhood-types';

/** Short closing lines at key-quote size: every line but the last is muted, the last one lands. */
function Closing({ lines, dark, className = '' }: { lines: string[]; dark: boolean; className?: string }) {
  return (
    <div className={`space-y-1 ${className}`}>
      {lines.map((l, i) => (
        <Quote key={l} dark={dark} className={i < lines.length - 1 ? (dark ? '!text-ivory/55' : '!text-charcoal/50') : ''}>{l}</Quote>
      ))}
    </div>
  );
}

/**
 * Text chapter. Compositions (all on the 12-column grid):
 *  centered = airy centred block (Dubai Hills)
 *  columns  = title 7 / text 5, then the closing lines across the full width (Downtown)
 *  split    = text 5 / image 7
 *  stagger  = title across, text 4 / large image 8, then a full-bleed photo band carrying the statement (Creek)
 */
export default function EditorialSection({ s, density, tone, join }: SectionProps<EditorialData>) {
  const dark = tone === 'dark';

  if (s.layout === 'centered') {
    return (
      <Shell id={s.id} tone={tone} density={density} join={join}>
        <div className="mx-auto max-w-[56rem] md:text-center">
          <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} center titleClass="max-w-[44rem]" />
          <Reveal className="mt-10 max-w-[36rem] space-y-5 md:mx-auto md:mt-12">
            {s.paragraphs.map((p) => <p key={p} className={`ed-body md:mx-auto ${muted(dark)}`}>{p}</p>)}
          </Reveal>
        </div>
        {s.statement && (
          <Reveal className="mt-14 max-w-[58rem] md:mx-auto md:mt-20 md:text-center">
            <span aria-hidden className="mb-10 block h-px w-14 bg-champagne md:mx-auto" />
            <Quote dark={dark}>{s.statement}</Quote>
          </Reveal>
        )}
      </Shell>
    );
  }

  if (s.layout === 'columns') {
    return (
      <Shell id={s.id} tone={tone} density={density} join={join}>
        <div className="ed-grid items-start gap-y-10">
          <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} className="col-span-12 lg:col-span-7" titleClass="max-w-[40rem]" />
          <Reveal className="col-span-12 lg:col-span-5 lg:pt-11">
            <Prose paragraphs={s.paragraphs} dark={dark} />
          </Reveal>
        </div>
        {s.closing && s.closing.length > 0 && (
          <Reveal className={`mt-14 border-t pt-10 md:mt-20 md:pt-14 ${dark ? 'border-ivory/20' : 'border-charcoal/15'}`}>
            <Closing lines={s.closing} dark={dark} className="max-w-[62rem]" />
          </Reveal>
        )}
        {s.statement && (
          <Reveal className="mt-12"><Quote dark={dark} accent className="max-w-[56rem]">{s.statement}</Quote></Reveal>
        )}
      </Shell>
    );
  }

  if (s.layout === 'split') {
    const img = s.images?.[0];
    return (
      <Shell id={s.id} tone={tone} density={density} join={join}>
        <div className="ed-grid items-center gap-y-10">
          <div className={`col-span-12 lg:col-span-5 ${s.flip ? 'lg:order-2' : ''}`}>
            <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} titleClass="max-w-[34rem]" />
            <Reveal className="mt-8">
              <Prose paragraphs={s.paragraphs} dark={dark} />
              {s.closing && <Closing lines={s.closing} dark={dark} className="mt-10" />}
              {s.statement && <Quote dark={dark} accent className="mt-10">{s.statement}</Quote>}
            </Reveal>
          </div>
          {img && (
            <Reveal className={`col-span-12 lg:col-span-7 ${s.flip ? 'lg:order-1' : ''}`}>
              <Photo ratio="3 / 2"><BFImage slot={img.slot} sizes="(min-width:1280px) 733px, (min-width:1024px) 58vw, 100vw" /></Photo>
            </Reveal>
          )}
        </div>
      </Shell>
    );
  }

  // stagger: title across the grid, text on 4 columns + one large photo on 8, then the band.
  const [lead, band] = s.images ?? [];
  return (
    <>
      <Shell id={s.id} tone={tone} density={density} join={{ prev: join.prev, next: false }}>
        <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} titleClass="max-w-[64rem]" />
        <div className="ed-grid mt-12 items-start gap-y-10 md:mt-16">
          <Reveal className="col-span-12 lg:col-span-4">
            <Prose paragraphs={s.paragraphs} dark={dark} />
          </Reveal>
          {lead && (
            <Reveal className="col-span-12 lg:col-span-8">
              <Photo ratio="3 / 2"><BFImage slot={lead.slot} sizes="(min-width:1360px) 843px, (min-width:1024px) 62vw, 100vw" /></Photo>
            </Reveal>
          )}
        </div>
      </Shell>
      {band && (
        <section className="relative isolate overflow-hidden bg-charcoal text-ivory">
          <BFImage slot={band.slot} sizes="100vw" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10" />
          <div className="ed-wrap relative flex min-h-[28rem] items-end pb-12 pt-40 md:min-h-[36rem] md:pb-20 lg:min-h-[42rem]">
            {s.statement && <Quote dark className="max-w-[58rem]">{s.statement}</Quote>}
          </div>
        </section>
      )}
    </>
  );
}
