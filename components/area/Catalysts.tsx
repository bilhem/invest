import BFImage from '@/components/BFImage';
import type { Catalyst, SourceRef } from '@/lib/data/area-types';
import { StatusBadge, StatusLegend } from './Status';
import SourceRefs from './SourceRefs';

/** "Les catalyseurs" — large editorial blocks, one per major catalyst. Reusable for any district. */
export default function Catalysts({ areaName, intro, items, sources }: { areaName: string; intro: string; items: Catalyst[]; sources: SourceRef[] }) {
  return (
    <section id="catalyseurs" className="section bg-charcoal text-ivory">
      <div className="wrap">
        <h2 className="h-section max-w-3xl">Les catalyseurs de {areaName}</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-ivory/70">{intro}</p>
        <div className="mt-10"><StatusLegend tone="dark" /></div>

        <div className="mt-16 space-y-20 md:space-y-28">
          {items.map((c, i) => (
            <article key={c.id} id={c.id} className="grid scroll-mt-28 items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={`relative aspect-[4/3] w-full lg:sticky lg:top-28 ${i % 2 ? 'lg:order-2' : ''}`}>
                <BFImage slot={c.image} sizes="(min-width:1024px) 50vw, 100vw" />
              </div>
              <div>
                <StatusBadge status={c.status} tone="dark" />
                <h3 className="mt-5 font-serif text-4xl leading-tight">{c.title}</h3>
                <p className="mt-2 text-champagne-light">{c.kicker}</p>
                {c.statusNote && <p className="mt-3 text-xs text-ivory/55">{c.statusNote}</p>}

                <div className="mt-6 space-y-4 leading-relaxed text-ivory/80">
                  {c.body.map((p) => <p key={p}>{p}</p>)}
                </div>

                {c.facts && (
                  <dl className="mt-8 border-t border-ivory/15">
                    {c.facts.map((f) => (
                      <div key={f.label} className="flex items-baseline justify-between gap-6 border-b border-ivory/15 py-3 text-sm">
                        <dt className="text-ivory/60">{f.label}</dt>
                        <dd className="text-right font-serif text-xl">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-champagne-light">Confirmé par les sources</h4>
                    <ul className="mt-3 space-y-3 text-sm leading-relaxed text-ivory/80">
                      {c.confirmed.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-ivory/60">À confirmer</h4>
                    <ul className="mt-3 space-y-3 text-sm leading-relaxed text-ivory/65">
                      {c.toConfirm.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                </div>

                {c.history && (
                  <div className="mt-8 border-l border-ivory/25 pl-5">
                    <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-ivory/60">Historique du projet</h4>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-ivory/65">
                      {c.history.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                )}

                <p className="mt-6 text-xs text-ivory/55">Sources : <SourceRefs ids={c.sourceIds} sources={sources} tone="dark" /></p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
