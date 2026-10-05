import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { Heading, Photo, Shell, type SectionProps } from './ui';
import type { ComparisonData, ComparisonSide } from '@/lib/data/neighborhood-types';

/** One side of the comparison: same photo ratio, same label, same list rhythm on both sides, so the two columns line up exactly. */
function Side({ side, dark, className }: { side: ComparisonSide; dark: boolean; className: string }) {
  return (
    <Reveal className={className}>
      <Photo ratio="4 / 3"><BFImage slot={side.image} sizes="(min-width:1360px) 624px, (min-width:1024px) 47vw, 100vw" /></Photo>
      <h3 className="ed-h3 mt-8 border-t border-champagne pt-6">{side.label}</h3>
      <ul className={`mt-5 divide-y ${dark ? 'divide-ivory/15' : 'divide-charcoal/10'}`}>
        {side.lines.map((l) => (
          <li key={l} className="py-3 text-[1.0625rem] leading-snug text-charcoal/80 md:text-lg">{l}</li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Two options, side by side: two equal photos on 6 + 6 columns, label and list underneath. Typographic, no cards. */
export default function ComparisonSection({ s, density, tone, join }: SectionProps<ComparisonData>) {
  const dark = tone === 'dark';
  return (
    <Shell id={s.id} tone={tone} density={density} join={join}>
      <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} titleClass="max-w-[40rem]" />
      <div className="ed-grid mt-12 gap-y-14 md:mt-16">
        <Side side={s.left} dark={dark} className="col-span-12 lg:col-span-6" />
        <Side side={s.right} dark={dark} className="col-span-12 lg:col-span-6" />
      </div>
    </Shell>
  );
}
