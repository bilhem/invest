import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { StatusBadge } from '@/components/area/Status';
import { Eyebrow, Prose, Shell } from './ui';
import type { Density, FeatureItem, FeaturesData } from '@/lib/data/neighborhood-types';

const num = (i: number) => String(i + 1).padStart(2, '0');

/** One feature = the same system every time: banner image, numbered eyebrow + status, H2, text, figures. */
function Feature({ f, index, total }: { f: FeatureItem; index: number; total: number }) {
  const figs = f.figures ?? [];
  return (
    <article>
      <figure>
        <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[2/1]">
          <BFImage slot={f.image} sizes="(min-width:1280px) 1200px, 100vw" />
        </div>
        <figcaption className="ed-caption mt-3 text-ivory/60">{f.imageNote}</figcaption>
      </figure>

      <div className="mt-10 md:mt-14">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="font-serif text-xl text-champagne-light">
            {num(index)}<span className="text-ivory/40"> / {num(total - 1)}</span>
          </span>
          <Eyebrow dark>{f.eyebrow}</Eyebrow>
          <StatusBadge status={f.status} tone="dark" className="uppercase tracking-[0.14em]" />
        </div>
        <h2 className="ed-h2 mt-5 max-w-4xl text-balance">{f.title}</h2>
      </div>

      <div className="mt-8 grid gap-10 md:mt-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Prose paragraphs={f.paragraphs} dark />
          {f.insight && <p className="ed-body mt-8 border-l-2 border-champagne pl-5 text-ivory/90">{f.insight}</p>}
        </div>
        {figs.length > 0 && (
          <dl className={`grid content-start gap-6 border-t border-ivory/15 pt-8 lg:col-span-5 lg:border-t-0 lg:pt-1 ${figs.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {figs.map((g) => (
              <div key={g.label}>
                <dd className="ed-figure">
                  {g.value}
                  {g.unit && <span className="ml-1.5 text-[0.5em] text-champagne-light/80">{g.unit}</span>}
                </dd>
                <dt className="mt-3 max-w-[14rem] text-xs leading-relaxed text-ivory/60 md:text-sm">{g.label}</dt>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}

export default function FeaturesSection({ s, density }: { s: FeaturesData; density: Density }) {
  return (
    <Shell id={s.id ?? 'catalyseurs'} tone="dark" density={density}>
      <div className="space-y-24 md:space-y-36">
        {s.items.map((f, i) => (
          <Reveal key={f.id}>
            <Feature f={f} index={i} total={s.items.length} />
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}
