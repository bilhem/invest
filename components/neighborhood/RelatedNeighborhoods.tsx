import Link from 'next/link';
import { Eyebrow, PAD } from './ui';
import type { Area } from '@/lib/data/area-types';
import type { Strategy } from '@/lib/data/strategies';

/** Contextual internal links: compare with other districts, related strategies. Quiet typographic links, not cards. */
export default function RelatedNeighborhoods({ compare, strategies }: { compare: Area[]; strategies: Strategy[] }) {
  if (!compare.length && !strategies.length) return null;
  return (
    <section className={`border-t border-stone-light/60 bg-ivory-200 ${PAD.dense}`}>
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        {compare.length > 0 && (
          <nav aria-label="Comparer avec d’autres quartiers" className="lg:col-span-7">
            <Eyebrow>Comparer</Eyebrow>
            <ul className="mt-5 divide-y divide-stone-light/70 border-y border-stone-light/70">
              {compare.map((a) => (
                <li key={a.slug}>
                  <Link href={`/quartiers/${a.slug}`} className="group flex items-center justify-between gap-6 py-5 font-serif text-xl md:text-2xl">
                    <span>Comparer avec {a.name}</span>
                    <span aria-hidden className="text-champagne-dark transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        {strategies.length > 0 && (
          <nav aria-label="Stratégies liées" className="lg:col-span-5">
            <Eyebrow>Stratégies liées</Eyebrow>
            <ul className="mt-5 divide-y divide-stone-light/70 border-y border-stone-light/70">
              {strategies.map((s) => (
                <li key={s.slug}>
                  <Link href={`/strategies#${s.slug}`} className="group flex items-center justify-between gap-6 py-5 text-base">
                    <span>{s.title}</span>
                    <span aria-hidden className="text-champagne-dark transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
}
