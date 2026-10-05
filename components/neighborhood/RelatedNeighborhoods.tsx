import Link from 'next/link';
import type { Area } from '@/lib/data/area-types';
import type { Strategy } from '@/lib/data/strategies';

const Arrow = () => (
  <span aria-hidden className="ml-2 inline-block text-champagne-dark transition-transform duration-300 group-hover:translate-x-1">→</span>
);

/** Contextual internal links as one discreet band (a fine border, one row on desktop). It must never compete with the final CTA. */
export default function RelatedNeighborhoods({ compare, strategies }: { compare: Area[]; strategies: Strategy[] }) {
  if (!compare.length && !strategies.length) return null;
  return (
    <section className="border-y border-charcoal/10 bg-ivory py-7 md:py-9">
      <div className="ed-wrap flex flex-col gap-x-12 gap-y-5 lg:flex-row lg:items-baseline lg:justify-between">
        {compare.length > 0 && (
          <nav aria-label="Comparer avec d’autres quartiers" className="flex flex-wrap items-baseline gap-x-8 gap-y-2">
            {compare.map((a) => (
              <Link key={a.slug} href={`/quartiers/${a.slug}`} className="group font-serif text-xl md:text-[1.375rem]">
                {`Comparer avec ${a.name.split(' ').slice(0, -1).join(' ')} `}
                <span className="whitespace-nowrap">
                  {a.name.split(' ').slice(-1)[0]}
                  <Arrow />
                </span>
              </Link>
            ))}
          </nav>
        )}
        {strategies.length > 0 && (
          <nav aria-label="Stratégies liées" className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-[0.9375rem]">
            <span className="ed-eyebrow !text-champagne-dark">Stratégies liées</span>
            {strategies.map((s) => (
              <Link key={s.slug} href={`/strategies#${s.slug}`} className="group text-charcoal/80 underline-offset-4 hover:text-charcoal hover:underline">
                {s.title}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
