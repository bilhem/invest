import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BFImage from '@/components/BFImage';
import CtaBand from '@/components/ui/CtaBand';
import Figure from '@/components/ui/Figure';
import MapSlot from '@/components/ui/MapSlot';
import Reveal from '@/components/Reveal';
import { StatusBadge } from '@/components/area/Status';
import SourceRefs from '@/components/area/SourceRefs';
import type { Area, AreaDeep, AreaEditorial, Catalyst } from '@/lib/data/area-types';

const fmt = (iso: string) => new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
const num = (i: number) => String(i + 1).padStart(2, '0');

/**
 * Simplified, editorial layout for an enriched area page (6 sections):
 * Hero · Pourquoi · Une master community en transformation · 3 catalyseurs · Notre regard · CTA.
 * A small "Localisation" block and a discreet sources note sit below. Content lives in `deep.editorial`.
 */
export default function AreaEditorial({ area, deep, editorial: ed }: { area: Area; deep: AreaDeep; editorial: AreaEditorial }) {
  const catalysts = ed.catalysts
    .map((c) => ({ c, base: deep.catalysts.find((x) => x.id === c.id) }))
    .filter((x): x is { c: AreaEditorial['catalysts'][number]; base: Catalyst } => Boolean(x.base));

  return (
    <>
      {/* 1 · HERO */}
      <section className="relative flex min-h-[88svh] items-end bg-charcoal text-ivory">
        <BFImage slot={area.img} priority overlay="strong" />
        <div className="wrap relative pb-20 pt-40 md:pb-28">
          <Breadcrumbs items={[{ label: 'Quartiers', href: '/quartiers' }, { label: area.name }]} />
          <h1 className="mt-10 max-w-5xl font-serif text-[2.75rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.5rem]">
            {area.name}
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ivory/85 md:text-xl">{ed.heroLine}</p>
        </div>
      </section>

      {/* 2 · POURQUOI */}
      <section className="py-24 md:py-40">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Pourquoi</p>
            <h2 className="h-section mt-4 max-w-3xl">{ed.why.title}</h2>
          </Reveal>
          <div className="mt-16 grid gap-14 md:mt-24 md:grid-cols-2 md:gap-10 lg:gap-16">
            {ed.why.items.slice(0, 2).map((it, i) => (
              <Reveal key={it.title}>
                {it.slot && (
                  <div className="relative aspect-[5/4] w-full overflow-hidden">
                    <BFImage slot={it.slot} sizes="(min-width:768px) 50vw, 100vw" />
                  </div>
                )}
                <p className="mt-8 font-serif text-5xl text-champagne-dark">{num(i)}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">{it.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-charcoal/75">{it.text}</p>
              </Reveal>
            ))}
          </div>
          {ed.why.items[2] && (
            <Reveal className="mt-20 border-t border-stone-light/60 pt-12 md:mt-28 md:pt-16">
              <div className="grid gap-6 md:grid-cols-[0.4fr_1fr] md:gap-16">
                <p className="font-serif text-5xl text-champagne-dark">03</p>
                <div>
                  <h3 className="max-w-2xl font-serif text-3xl leading-tight md:text-4xl">{ed.why.items[2].title}</h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-charcoal/75">{ed.why.items[2].text}</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* 3 · MASTER COMMUNITY EN TRANSFORMATION */}
      <section className="bg-ivory-200 py-24 md:py-40">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">{ed.timeline.eyebrow}</p>
            <h2 className="h-section mt-4 max-w-3xl">{ed.timeline.title}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/75">{ed.timeline.text}</p>
          </Reveal>
          <Figure
            slot={deep.masterplanImage}
            caption="Masterplan de référence — la configuration finale de certains projets et infrastructures peut évoluer."
            sizes="(min-width:1280px) 1200px, 100vw"
            fallbackAspect="16 / 5"
            className="mt-14 md:mt-20"
          />
        </div>
      </section>

      {/* 4 · LES 3 CATALYSEURS */}
      <section id="catalyseurs" className="bg-charcoal py-24 text-ivory md:py-40">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Les catalyseurs</p>
            <h2 className="h-section mt-4 max-w-3xl">Trois projets qui peuvent changer la lecture du quartier</h2>
          </Reveal>
          <div className="mt-16 space-y-24 md:mt-24 md:space-y-36">
            {catalysts.map(({ c, base }) => {
              const slot = base.images[0].slot;
              const text = (
                <div>
                  <StatusBadge status={base.status} tone="dark" />
                  <h3 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">{base.title}</h3>
                  <p className="mt-4 font-serif text-xl leading-snug text-champagne-light md:text-2xl">{c.subtitle}</p>
                  <ul className="mt-8 space-y-3 text-sm leading-relaxed text-ivory/75 md:text-base">
                    {c.lines.map((l, i) => (
                      <li key={l} className="flex gap-3">
                        <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-champagne" />
                        <span>
                          {l}
                          {i === 0 && c.sourceIds && <SourceRefs ids={c.sourceIds} sources={deep.sources} tone="dark" />}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
              return (
                <Reveal key={c.id}>
                  {c.layout === 'split' ? (
                    <article className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
                      <Figure slot={slot} tone="dark" caption={c.imageNote} sizes="(min-width:1024px) 55vw, 100vw" />
                      {text}
                    </article>
                  ) : (
                    <article>
                      <Figure slot={slot} tone="dark" caption={c.imageNote} sizes="(min-width:1280px) 1200px, 100vw" />
                      <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-20">{text}</div>
                    </article>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 · NOTRE REGARD */}
      <section className="py-24 md:py-40">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Le regard de BF Properties</p>
            <h2 className="h-section mt-4 max-w-3xl">{ed.lens.title}</h2>
          </Reveal>
          <div className="mt-14 grid gap-14 md:mt-20 md:grid-cols-2 md:gap-20">
            <div>
              <h3 className="font-serif text-2xl text-champagne-dark md:text-3xl">{ed.lens.interestTitle}</h3>
              <ul className="mt-6 divide-y divide-stone-light/60">
                {ed.lens.interest.map((t) => (
                  <li key={t} className="py-4 leading-relaxed text-charcoal/80">{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl">{ed.lens.watchTitle}</h3>
              <ul className="mt-6 divide-y divide-stone-light/60">
                {ed.lens.watch.map((t) => (
                  <li key={t} className="py-4 leading-relaxed text-charcoal/80">{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <Reveal className="mt-20 md:mt-28">
            <p className="max-w-4xl font-serif text-3xl leading-snug md:text-4xl lg:text-[2.75rem]">{ed.lens.closing}</p>
          </Reveal>
        </div>
      </section>

      {/* Localisation — petit bloc indépendant */}
      <section className="border-t border-stone-light/60 bg-ivory-200 py-16 md:py-24">
        <div className="wrap grid items-center gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Localisation</p>
            <p className="mt-4 max-w-md leading-relaxed text-charcoal/75">{area.location}</p>
          </div>
          <MapSlot name={area.name} lat={area.coords.lat} lng={area.coords.lng} />
        </div>
      </section>

      {/* 6 · CTA */}
      <CtaBand id={`area_${area.slug}`} title={ed.cta.title} text={ed.cta.text} label={ed.cta.label} />

      {/* Sources — discret */}
      <section id="sources" className="bg-ivory py-12 md:py-16">
        <div className="wrap max-w-4xl">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-stone">Sources et vérification</h2>
          <p className="mt-3 text-xs leading-relaxed text-stone">
            Informations vérifiées le {fmt(deep.lastReviewed)}, auprès de sources officielles lorsqu’elles existent ; une information de presse est signalée comme telle. Analyse à visée informative : elle ne constitue pas un conseil financier et ne garantit aucune performance.
          </p>
          <ol className="mt-5 space-y-2 text-xs text-charcoal/65">
            {deep.sources.map((s, i) => (
              <li key={s.id} id={`source-${s.id}`} className="scroll-mt-28">
                <span className="mr-2 text-champagne-dark">{i + 1}.</span>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-champagne-dark">{s.title}</a>
                {' '}— {s.publisher}, {fmt(s.date)} — {s.type === 'primary' ? 'source officielle' : 'presse'}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
