import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { Heading, PAD } from './ui';
import type { CentralityData, Density } from '@/lib/data/neighborhood-types';

/** Very visual, very little text: a dark image field and a typographic list of landmarks. No invented travel times. */
export default function CentralitySection({ s, density }: { s: CentralityData; density: Density }) {
  return (
    <section id={s.id} className={`relative overflow-hidden bg-charcoal text-ivory ${PAD[density]}`}>
      <BFImage slot={s.image} overlay="strong" className="opacity-45" sizes="100vw" />
      <div className="wrap relative">
        <Heading eyebrow={s.eyebrow} title={s.title} dark />
        {s.intro && (
          <Reveal className="mt-6"><p className="ed-body text-ivory/75">{s.intro}</p></Reveal>
        )}
        <Reveal>
          <ul className="mt-12 grid border-t border-ivory/20 sm:grid-cols-2 md:mt-16">
            {s.items.map((i, k) => (
              <li
                key={i.label}
                className={`flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-ivory/20 py-6 md:py-8 ${k % 2 === 0 ? 'sm:pr-8' : 'sm:border-l sm:pl-8'}`}
              >
                <span className="ed-h3">{i.label}</span>
                {i.note && <span className="text-sm text-ivory/60">{i.note}</span>}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
