import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { getAspect, getImage } from '@/lib/images';
import { Heading, Photo, Prose, Quote, Shell, type SectionProps } from './ui';
import type { ImageStatementData, StoryFigure } from '@/lib/data/neighborhood-types';

/**
 * Photo-led chapter, four compositions on the 12-column grid:
 *  side    = text 5 / image 7 (landscape) or text 5 / image 6 (portrait); `flip` puts the image on the other side,
 *            `imageCols` (5 | 6 | 7) fits the image width to its resolution (small sources are never enlarged beyond their pixels)
 *  overlay = full-bleed photo, text on columns 1–6 (or the right side with `align: 'right'`) over a gradient
 *  banner  = full-bleed photo band, then title 6 / text 5 on the grid underneath
 *  duo     = text 4 / main photo 5 / secondary photo 3: the three columns share the same top and bottom edges
 * Optional blocks, always in the order of the supplied copy: lead lines, keywords, text, key idea, figures under the photo.
 */
const IMG_SPAN = { 5: 'lg:col-span-5', 6: 'lg:col-span-6', 7: 'lg:col-span-7' } as const;
const IMG_START_FLIP = { 5: 'lg:col-start-8', 6: 'lg:col-start-7', 7: 'lg:col-start-6' } as const;
const TEXT_SPAN = { 5: 'lg:col-span-6', 6: 'lg:col-span-5', 7: 'lg:col-span-5' } as const;
const TEXT_START = { 5: 'lg:col-start-7', 6: 'lg:col-start-8', 7: 'lg:col-start-8' } as const;
const IMG_SIZES = {
  5: '(min-width:1360px) 514px, (min-width:1024px) 42vw, 100vw',
  6: '(min-width:1360px) 628px, (min-width:1024px) 50vw, 100vw',
  7: '(min-width:1360px) 733px, (min-width:1024px) 58vw, 100vw',
} as const;

function Lead({ lines, dark }: { lines: string[]; dark: boolean }) {
  return (
    <Reveal className="mt-8 space-y-2 md:mt-10">
      {lines.map((l, i) => (
        <Quote key={l} dark={dark} accent={i === lines.length - 1} className="!text-[1.5rem] md:!text-[1.75rem]">{l}</Quote>
      ))}
    </Reveal>
  );
}

function Words({ words, dark }: { words: string[]; dark: boolean }) {
  return (
    <Reveal>
      <ul
        className={`grid grid-cols-2 gap-x-8 border-t font-serif text-[1.25rem] leading-snug md:text-[1.5rem] ${
          dark ? 'border-ivory/25 text-ivory' : 'border-charcoal/15 text-charcoal'
        }`}
      >
        {words.map((w) => (
          <li key={w} className={`border-b py-3 ${dark ? 'border-ivory/25' : 'border-charcoal/15'}`}>{w}</li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Discreet figures published by the developer: two columns, a fine rule above, one line of source below. */
function Figures({ figures, note, dark }: { figures: StoryFigure[]; note?: string; dark: boolean }) {
  return (
    <div className={`mt-8 border-t pt-6 ${dark ? 'border-ivory/25' : 'border-charcoal/15'}`}>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
        {figures.map((f) => (
          <div key={f.label}>
            <dt className={`ed-figure ${dark ? '' : '!text-champagne-dark'}`}>{f.value}</dt>
            <dd className={`mt-2 text-sm leading-snug ${dark ? 'text-ivory/70' : 'text-charcoal/70'}`}>{f.label}</dd>
          </div>
        ))}
      </dl>
      {note && <p className={`ed-caption mt-4 ${dark ? 'text-ivory/55' : 'text-stone'}`}>{note}</p>}
    </div>
  );
}

export default function ImageStatement({ s, density, tone, join }: SectionProps<ImageStatementData>) {
  const dark = tone === 'dark';
  const [a, b] = s.images;

  if (s.variant === 'overlay') {
    const right = s.align === 'right';
    return (
      <section className="relative isolate overflow-hidden bg-charcoal text-ivory">
        <BFImage slot={a.slot} sizes="100vw" />
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/80 to-charcoal/55 ${
            right ? 'lg:bg-gradient-to-l lg:from-charcoal/90 lg:via-charcoal/60 lg:to-transparent' : 'lg:bg-gradient-to-r lg:from-charcoal/90 lg:via-charcoal/55 lg:to-transparent'
          }`}
        />
        <div className="ed-wrap relative">
          <div className={`flex min-h-[44rem] flex-col justify-end py-16 md:py-24 lg:min-h-[50rem] lg:max-w-[40rem] ${right ? 'lg:ml-auto' : ''}`}>
            <Heading eyebrow={s.eyebrow} title={s.title} dark titleClass="max-w-[34rem]" />
            <Reveal className="mt-8">
              <Prose paragraphs={s.paragraphs} dark className="[&>p]:text-ivory/85" />
            </Reveal>
            {s.quote && (
              <Reveal className="mt-10">
                <Quote dark accent className="!text-[1.5rem] md:!text-[1.75rem]">{s.quote}</Quote>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (s.variant === 'banner') {
    return (
      <>
        <section className="relative isolate overflow-hidden bg-charcoal">
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
            <BFImage slot={a.slot} sizes="100vw" />
          </div>
        </section>
        <Shell id={s.id} tone={tone} density={density} join={{ prev: false, next: join.next }}>
          <div className="ed-grid items-start gap-y-8">
            <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} className="col-span-12 lg:col-span-6" titleClass="max-w-[34rem]" />
            <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-11">
              <Prose paragraphs={s.paragraphs} dark={dark} />
            </Reveal>
          </div>
          {s.quote && (
            <Reveal className="mt-12 md:mt-16">
              <Quote dark={dark} accent className="max-w-[56rem] border-l-2 border-champagne pl-6 md:pl-8">{s.quote}</Quote>
            </Reveal>
          )}
        </Shell>
      </>
    );
  }

  if (s.variant === 'duo') {
    return (
      <Shell id={s.id} tone={tone} density={density} join={join}>
        <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} titleClass="max-w-[48rem]" />
        <div className="ed-grid mt-12 gap-y-10 md:mt-16">
          <div className="order-2 col-span-12 flex flex-col justify-between gap-12 lg:order-1 lg:col-span-4">
            <Prose paragraphs={s.paragraphs} dark={dark} />
            {s.quote && <Quote dark={dark} accent className="!text-[1.75rem] md:!text-[2rem]">{s.quote}</Quote>}
          </div>
          <Reveal className="order-1 col-span-12 lg:order-2 lg:col-span-5">
            <Photo ratio="4 / 5"><BFImage slot={a.slot} sizes="(min-width:1360px) 514px, (min-width:1024px) 40vw, 100vw" /></Photo>
          </Reveal>
          {b && (
            <Reveal className="relative order-3 col-span-12 hidden lg:col-span-3 lg:block">
              <div className="absolute inset-0 overflow-hidden bg-charcoal/10">
                <BFImage slot={b.slot} sizes="(min-width:1360px) 296px, 24vw" />
              </div>
            </Reveal>
          )}
        </div>
      </Shell>
    );
  }

  // side: the photo keeps its real ratio, so the height follows the image and nothing is cropped
  const portrait = (() => {
    const i = getImage(a.slot);
    return i.width && i.height ? i.width < i.height : false;
  })();
  const cols = s.imageCols ?? (portrait ? 6 : 7);
  const imgPos = s.flip ? `${IMG_START_FLIP[cols]} lg:order-2` : 'lg:order-1';
  const textPos = s.flip ? 'lg:order-1' : `lg:order-2 ${TEXT_START[cols]} ${cols === 7 ? 'lg:pl-4' : ''}`;
  return (
    <Shell id={s.id} tone={tone} density={density} join={join}>
      <div className="ed-grid items-center gap-y-10">
        <Reveal className={`col-span-12 ${IMG_SPAN[cols]} ${imgPos}`}>
          <Photo ratio={getAspect(a.slot, '4 / 5')}>
            <BFImage slot={a.slot} sizes={IMG_SIZES[cols]} />
          </Photo>
          {s.figures && s.figures.length > 0 && <Figures figures={s.figures} note={s.figuresNote} dark={dark} />}
        </Reveal>
        <div className={`col-span-12 ${TEXT_SPAN[cols]} ${textPos}`}>
          <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} titleClass="max-w-[34rem]" />
          {s.lead && s.lead.length > 0 && <Lead lines={s.lead} dark={dark} />}
          {s.words && s.words.length > 0 && (
            <div className="mt-8 md:mt-10"><Words words={s.words} dark={dark} /></div>
          )}
          <Reveal className="mt-8">
            <Prose paragraphs={s.paragraphs} dark={dark} />
          </Reveal>
          {s.quote && (
            <Reveal className="mt-10 md:mt-12">
              <Quote dark={dark} accent className="!text-[1.75rem] md:!text-[2rem]">{s.quote}</Quote>
            </Reveal>
          )}
          {s.outro && s.outro.length > 0 && (
            <Reveal className="mt-8 md:mt-10">
              <Prose paragraphs={s.outro} dark={dark} />
            </Reveal>
          )}
        </div>
      </div>
    </Shell>
  );
}
