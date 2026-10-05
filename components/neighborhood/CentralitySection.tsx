import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { Eyebrow, nb } from './ui';
import type { SectionProps } from './ui';
import type { CentralityData } from '@/lib/data/neighborhood-types';

/** A visual chapter: full-bleed photo, a short title, and the landmarks as a quiet row of four on the grid. No travel times. */
export default function CentralitySection({ s }: SectionProps<CentralityData>) {
  return (
    <section id={s.id} className="relative isolate overflow-hidden bg-charcoal text-ivory">
      <BFImage slot={s.image} sizes="100vw" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/25 to-charcoal/90" />
      <div className="ed-wrap relative flex min-h-[40rem] flex-col justify-between gap-20 py-16 md:min-h-[46rem] md:py-24 lg:min-h-[52rem]">
        <Reveal>
          {s.eyebrow && <Eyebrow dark>{s.eyebrow}</Eyebrow>}
          <h2 className="ed-h2 mt-5 max-w-[48rem] text-balance">{nb(s.title)}</h2>
          {s.intro && <p className="ed-lead mt-6 max-w-[32rem] text-ivory/80">{s.intro}</p>}
        </Reveal>
        <ul className="ed-grid gap-y-0">
          {s.items.map((i) => (
            <li key={i.label} className="col-span-12 border-t border-ivory/30 py-5 sm:col-span-6 lg:col-span-3 lg:pr-6">
              <p className="font-serif text-[1.375rem] leading-tight md:text-2xl">{i.label}</p>
              {i.note && <p className="mt-2 text-sm text-ivory/70">{i.note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
