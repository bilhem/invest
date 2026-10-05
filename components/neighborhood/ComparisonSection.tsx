import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { GAP, Heading, Shell } from './ui';
import type { ComparisonData, ComparisonSide, Density } from '@/lib/data/neighborhood-types';

function Side({ side, dark, offset }: { side: ComparisonSide; dark: boolean; offset: boolean }) {
  return (
    <Reveal className={offset ? 'md:mt-24' : ''}>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <BFImage slot={side.image} sizes="(min-width:1280px) 580px, (min-width:768px) 45vw, 100vw" />
      </div>
      <h3 className="ed-h3 mt-8 uppercase tracking-[0.14em]">{side.label}</h3>
      <ul className={`mt-5 divide-y border-y ${dark ? 'divide-ivory/15 border-ivory/15' : 'divide-stone-light/70 border-stone-light/70'}`}>
        {side.lines.map((l) => (
          <li key={l} className="py-4 font-serif text-xl leading-snug md:text-2xl">{l}</li>
        ))}
      </ul>
    </Reveal>
  );
}

/** Two addresses, two ways to invest: two photos, two typographic lists. No table, no cards. */
export default function ComparisonSection({ s, density }: { s: ComparisonData; density: Density }) {
  const dark = s.tone === 'dark';
  return (
    <Shell id={s.id} tone={s.tone} density={density}>
      <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} />
      <div className={`${GAP} grid gap-14 md:grid-cols-2 md:gap-12 lg:gap-20`}>
        <Side side={s.left} dark={dark} offset={false} />
        <Side side={s.right} dark={dark} offset />
      </div>
    </Shell>
  );
}
