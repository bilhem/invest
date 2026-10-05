import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { StatusBadge } from '@/components/area/Status';
import { Eyebrow, Prose, Shell, nb, type SectionProps } from './ui';
import type { FeatureItem, FeaturesData } from '@/lib/data/neighborhood-types';

const num = (i: number) => String(i + 1).padStart(2, '0');

/** One feature = the same system every time: banner image, numbered eyebrow + status, H2, text, figures. */
function Feature({ f, index, total }: { f: FeatureItem; index: number; total: number }) {
  const figs = f.figures ?? [];
  return (
    <article>
      <figure>
        <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[2/1]">
          <BFImage slot={f.image} sizes="(min-width:1360px) 1280px, 100vw" />
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
        <h2 className="ed-h2 mt-5 max-w-4xl text-balance">{nb(f.title)}</h2>
      </div>

      <div className="ed-grid mt-8 gap-y-10 md:mt-12">
        <div className="col-span-12 lg:col-span-6">
          <Prose paragraphs={f.paragraphs} dark />
          {f.insight && <p className="ed-body mt-8 border-l-2 border-champagne pl-5 text-ivory/90">{f.insight}</p>}
        </div>
        {figs.length > 0 && (
          <dl className={`grid content-start gap-6 border-t border-ivory/15 pt-8 col-span-12 lg:col-span-5 lg:col-start-8 lg:border-t-0 lg:pt-1 ${figs.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
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

export default function FeaturesSection({ s, density, join }: SectionProps<FeaturesData>) {
  return (
    <Shell id={s.id ?? 'catalyseurs'} tone="dark" density={density} weight="major" join={join}>
      <div className="space-y-16 md:space-y-24">
        {s.items.map((f, i) => (
          <Reveal key={f.id} className={i > 0 ? 'border-t border-ivory/10 pt-16 md:pt-24' : ''}>
            <Feature f={f} index={i} total={s.items.length} />
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}
