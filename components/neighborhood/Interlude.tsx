import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { Quote, Section, type SectionProps } from './ui';
import type { InterludeData } from '@/lib/data/neighborhood-types';

const RATIO = {
  cinema: 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]',
  wide: 'aspect-[4/3] sm:aspect-[16/9] lg:max-h-[56rem]',
} as const;

/**
 * A picture on its own between two chapters: a pause in the reading, no text of its own.
 *  full  = edge to edge (a band)
 *  frame = framed on the wide container (≤ 1400px) with the tone of the page around it: the calm option for sources that are not meant to be enlarged
 * `statement` (optional) is laid over the picture, bottom left, on a shade. The shade is a plain gradient behind the text: the picture itself is never filtered.
 */
export default function Interlude({ s, density, tone, join }: SectionProps<InterludeData>) {
  const framed = s.width === 'frame';
  const onLight = s.ink === 'dark';
  const shade = s.statement ? (
    <>
      {!onLight && (
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-charcoal/35 lg:bg-gradient-to-r lg:from-charcoal/85 lg:via-charcoal/60 lg:to-charcoal/30" />
      )}
      <div className={`absolute inset-0 flex items-end ${framed ? 'p-6 md:p-12 lg:p-16' : ''}`}>
        {framed ? (
          <Quote dark={!onLight} className={`max-w-[40rem] ${onLight ? 'text-charcoal' : 'text-ivory'}`}>{s.statement}</Quote>
        ) : (
          <div className="ed-wrap w-full pb-10 md:pb-16">
            <Quote dark={!onLight} className={`max-w-[40rem] ${onLight ? 'text-charcoal' : 'text-ivory'}`}>{s.statement}</Quote>
          </div>
        )}
      </div>
    </>
  ) : null;
  const band = (
    <div className={`relative w-full overflow-hidden bg-charcoal/10 ${RATIO[s.ratio ?? 'cinema']} ${s.statement ? 'min-h-[22rem]' : ''}`}>
      <BFImage slot={s.image} sizes={framed ? '(min-width:1456px) 1400px, 100vw' : '100vw'} tag />
      {shade}
    </div>
  );

  if (!framed) {
    return (
      <section id={s.id} className="relative isolate overflow-hidden bg-charcoal">
        <Reveal>{band}</Reveal>
        {s.caption && <p className="ed-wrap ed-caption bg-charcoal py-3 text-ivory/60">{s.caption}</p>}
      </section>
    );
  }
  return (
    <Section id={s.id} tone={tone} density={density} join={join}>
      <div className="ed-wide">
        <Reveal className="mx-auto max-w-[1400px]">{band}</Reveal>
        {s.caption && <p className="ed-caption mx-auto mt-4 max-w-[1400px] text-stone">{s.caption}</p>}
      </div>
    </Section>
  );
}
