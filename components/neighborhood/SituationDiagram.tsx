import Reveal from '@/components/Reveal';
import { Eyebrow } from './ui';
import type { SituationData } from '@/lib/data/neighborhood-types';

/**
 * Schematic of a district's position: one side (the sea), the district in the middle, the other side (the centre).
 * It is a reading aid, not a map: no coastline, no roads, no scale, no distances. Shown while the official location graphic
 * of the district is not available (City Walk). Text only, so it stays readable at every width.
 */
function Side({ side, dark, flow }: { side: SituationData['left']; dark: boolean; flow: 'in' | 'out' }) {
  const rule = dark ? 'border-ivory/25' : 'border-charcoal/15';
  return (
    <div className={flow === 'in' ? 'lg:text-right' : ''}>
      <Eyebrow dark={dark}>{side.label}</Eyebrow>
      <ul className={`mt-5 border-b ${rule}`}>
        {side.items.map((i) => (
          <li key={i} className={`border-t py-3.5 font-serif text-[1.375rem] leading-snug md:text-[1.75rem] ${rule} ${dark ? 'text-ivory' : 'text-charcoal'}`}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SituationDiagram({ d, dark }: { d: SituationData; dark: boolean }) {
  return (
    <Reveal
      className={`border px-6 py-10 md:px-12 md:py-14 ${dark ? 'border-ivory/20 bg-ivory/[0.03]' : 'border-charcoal/15 bg-charcoal/[0.02]'}`}
    >
      <div className="grid grid-cols-1 items-center gap-y-2 lg:grid-cols-[1fr_15rem_1fr] lg:gap-x-6">
        <Side side={d.left} dark={dark} flow="in" />

        <div className="flex flex-col items-center py-2 lg:py-0">
          <span aria-hidden className="h-10 w-px bg-gradient-to-b from-transparent to-champagne lg:hidden" />
          <div className="relative flex w-full items-center justify-center py-2">
            <span aria-hidden className="absolute right-1/2 hidden h-px w-1/2 bg-gradient-to-l from-champagne to-transparent lg:block" />
            <span aria-hidden className="absolute left-1/2 hidden h-px w-1/2 bg-gradient-to-r from-champagne to-transparent lg:block" />
            <span aria-hidden className="relative flex h-16 w-16 items-center justify-center rounded-full border border-champagne/70 md:h-20 md:w-20">
              <span className="h-4 w-4 rounded-full bg-champagne shadow-[0_0_0_8px_rgba(184,147,90,0.25)]" />
            </span>
          </div>
          <p className={`mt-3 text-center font-sans text-[0.8125rem] font-medium uppercase tracking-[0.22em] ${dark ? 'text-champagne-light' : 'text-champagne-dark'}`}>
            {d.focus}
          </p>
          <span aria-hidden className="mt-3 h-10 w-px bg-gradient-to-b from-champagne to-transparent lg:hidden" />
        </div>

        <Side side={d.right} dark={dark} flow="out" />
      </div>
    </Reveal>
  );
}
