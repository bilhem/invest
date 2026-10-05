import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { getAspect, getImage } from '@/lib/images';
import { Heading, Photo, Prose, Quote, Shell, type SectionProps } from './ui';
import type { ImageStatementData } from '@/lib/data/neighborhood-types';

/**
 * Photo-led chapter, three compositions on the 12-column grid:
 *  side    = text 5 / image 7 (landscape) or text 5 / image 6 (portrait); `flip` puts the image on the right
 *  overlay = full-bleed photo, text on columns 1–6 over a gradient
 *  duo     = text 4 / main photo 5 / secondary photo 3: the three columns share the same top and bottom edges
 */
export default function ImageStatement({ s, density, tone, join }: SectionProps<ImageStatementData>) {
  const dark = tone === 'dark';
  const [a, b] = s.images;

  if (s.variant === 'overlay') {
    return (
      <section className="relative isolate overflow-hidden bg-charcoal text-ivory">
        <BFImage slot={a.slot} sizes="100vw" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/75 to-charcoal/10 lg:bg-gradient-to-r lg:from-charcoal/90 lg:via-charcoal/55 lg:to-transparent" />
        <div className="ed-wrap relative">
          <div className="flex min-h-[44rem] flex-col justify-end py-16 md:py-24 lg:min-h-[50rem] lg:max-w-[40rem]">
            <Heading eyebrow={s.eyebrow} title={s.title} dark titleClass="max-w-[34rem]" />
            <Reveal className="mt-8">
              <Prose paragraphs={s.paragraphs} dark className="[&>p]:text-ivory/85" />
            </Reveal>
          </div>
        </div>
      </section>
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
  const imgCols = portrait ? 'lg:col-span-6' : 'lg:col-span-7';
  const imgPos = s.flip ? (portrait ? 'lg:col-start-7 lg:order-2' : 'lg:col-start-6 lg:order-2') : 'lg:order-1';
  const textPos = s.flip ? 'lg:order-1' : `lg:order-2 ${portrait ? 'lg:col-start-8' : 'lg:col-start-8 lg:pl-4'}`;
  return (
    <Shell id={s.id} tone={tone} density={density} join={join}>
      <div className="ed-grid items-center gap-y-10">
        <Reveal className={`col-span-12 ${imgCols} ${imgPos}`}>
          <Photo ratio={getAspect(a.slot, '4 / 5')}>
            <BFImage slot={a.slot} sizes="(min-width:1360px) 733px, (min-width:1024px) 58vw, 100vw" />
          </Photo>
        </Reveal>
        <div className={`col-span-12 lg:col-span-5 ${textPos}`}>
          <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} titleClass="max-w-[34rem]" />
          <Reveal className="mt-8">
            <Prose paragraphs={s.paragraphs} dark={dark} />
          </Reveal>
          {s.quote && (
            <Reveal className="mt-10 md:mt-12">
              <Quote dark={dark} accent className="!text-[1.75rem] md:!text-[2rem]">{s.quote}</Quote>
            </Reveal>
          )}
        </div>
      </div>
    </Shell>
  );
}
