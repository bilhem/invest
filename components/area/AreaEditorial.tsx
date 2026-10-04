import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BFImage from '@/components/BFImage';
import CtaBand from '@/components/ui/CtaBand';
import MapSlot from '@/components/ui/MapSlot';
import Reveal from '@/components/Reveal';
import ZoomImage from '@/components/area/ZoomImage';
import { StatusBadge } from '@/components/area/Status';
import SourceRefs from '@/components/area/SourceRefs';
import type { Area, AreaDeep, AreaEditorial, Catalyst, EditorialHead } from '@/lib/data/area-types';

/**
 * Editorial layout for an enriched area page. One system, used everywhere:
 *   eyebrow (.eyebrow) → H2 (.h-section) → intro (.ed-lead) → content
 *   H1 only in the hero · H3 (.ed-h3) inside blocks · body (.ed-body) · statement (.ed-statement)
 *   chapters = .section (same vertical padding) · content = .wrap (same max width) · header→content gap = GAP
 * Content lives in `deep.editorial`; catalyst titles, statuses and images come from `deep.catalysts`.
 */
const GAP = 'mt-14 md:mt-20';
const fmt = (iso: string) => new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
const num = (i: number) => String(i + 1).padStart(2, '0');

function ChapterHead({ eyebrow, title, intro, dark = false }: EditorialHead & { dark?: boolean }) {
  return (
    <Reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-section mt-5 max-w-3xl">{title}</h2>
      {intro && <p className={`ed-lead mt-6 ${dark ? 'text-ivory/75' : 'text-charcoal/75'}`}>{intro}</p>}
    </Reveal>
  );
}

function CatalystBlock({
  index, item, base, sources,
}: {
  index: number;
  item: AreaEditorial['catalysts']['items'][number];
  base: Catalyst;
  sources: AreaDeep['sources'];
}) {
  return (
    <article>
      <figure>
        <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[2/1]">
          <BFImage slot={base.images[0].slot} sizes="(min-width:1280px) 1200px, 100vw" />
        </div>
        <figcaption className="mt-3 text-xs leading-relaxed text-ivory/60">{item.imageNote}</figcaption>
      </figure>

      <div className="mt-10 grid gap-8 md:mt-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <span className="font-serif text-xl text-champagne-light">{num(index)}</span>
            <StatusBadge status={base.status} tone="dark" className="uppercase tracking-[0.14em]" />
          </div>
          <h3 className="ed-h3 mt-6">{base.title}</h3>
          <p className="ed-sub mt-4 text-champagne-light">{item.subtitle}</p>
        </div>
        <div className="lg:col-span-7">
          <p className="ed-body text-ivory/75">
            {item.text}
            {item.sourceIds && <SourceRefs ids={item.sourceIds} sources={sources} tone="dark" />}
          </p>
          {item.facts && (
            <dl className="mt-8 max-w-[36rem] divide-y divide-ivory/15 border-y border-ivory/15">
              {item.facts.map((f) => (
                <div key={f.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                  <dt className="text-sm text-ivory/60">{f.label}</dt>
                  <dd className="font-serif text-xl text-ivory">{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {item.insight && (
            <p className="ed-body mt-8 border-l-2 border-champagne pl-5 text-ivory/90">{item.insight}</p>
          )}
        </div>
      </div>
    </article>
  );
}

function NumberedList({ title, items, accent = false }: { title: string; items: string[]; accent?: boolean }) {
  return (
    <div>
      <h3 className={`ed-h3 ${accent ? 'text-champagne-dark' : ''}`}>{title}</h3>
      <ol className="mt-6 divide-y divide-stone-light/60 border-t border-stone-light/60">
        {items.map((t, i) => (
          <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-2 py-5">
            <span className="font-serif text-lg text-champagne-dark">{num(i)}</span>
            <span className="ed-body text-charcoal/80">{t}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function AreaEditorial({ area, deep, editorial: ed }: { area: Area; deep: AreaDeep; editorial: AreaEditorial }) {
  return (
    <>
      {/* HERO — the only H1 */}
      <section className="relative flex min-h-[88svh] items-end bg-charcoal text-ivory">
        <BFImage slot={area.img} priority overlay="strong" />
        <div className="wrap relative pb-16 pt-40 md:pb-24">
          <Breadcrumbs items={[{ label: 'Quartiers', href: '/quartiers' }, { label: area.name }]} />
          <h1 className="mt-10 max-w-5xl font-serif text-[2.75rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.5rem]">
            {area.name}
          </h1>
          <p className="ed-lead mt-8 max-w-2xl text-ivory/85 md:text-xl">{ed.heroLine}</p>
        </div>
      </section>

      {/* 1 · POURQUOI CREEK HARBOUR */}
      <section className="section">
        <div className="wrap">
          <ChapterHead eyebrow={ed.intro.eyebrow} title={ed.intro.title} intro={ed.intro.intro} />
          <div className={`${GAP} grid gap-12 md:grid-cols-2 md:gap-10 lg:gap-16`}>
            {ed.intro.items.map((it) => (
              <Reveal key={it.title}>
                <figure>
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <BFImage slot={it.slot} sizes="(min-width:1280px) 580px, (min-width:768px) 45vw, 100vw" />
                  </div>
                </figure>
                <h3 className="ed-h3 mt-8">{it.title}</h3>
                <p className="ed-body mt-4 text-charcoal/75">{it.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 border-t border-stone-light/60 pt-12 md:mt-20 md:pt-16">
            <p className="ed-statement">{ed.intro.statement}</p>
          </Reveal>
        </div>
      </section>

      {/* 2 · MASTERPLAN — shown in full, never cropped */}
      <section className="section bg-ivory-200">
        <div className="wrap">
          <ChapterHead eyebrow={ed.masterplan.eyebrow} title={ed.masterplan.title} intro={ed.masterplan.intro} />
          <div className={GAP}>
            <ZoomImage slot={deep.masterplanImage} sizes="(min-width:1280px) 1200px, 100vw" />
            <p className="mt-3 text-xs leading-relaxed text-stone">
              {ed.masterplan.extractLabel && <span className="mr-3 text-champagne-dark">{ed.masterplan.extractLabel}</span>}
              {ed.masterplan.caption}
            </p>
          </div>
          <Reveal className="mt-14 md:mt-16">
            <p className="ed-body border-l-2 border-champagne pl-5 text-charcoal/85">{ed.masterplan.insight}</p>
          </Reveal>
        </div>
      </section>

      {/* 3 · CATALYSEURS — three identical blocks */}
      <section id="catalyseurs" className="section bg-charcoal text-ivory">
        <div className="wrap">
          <ChapterHead eyebrow={ed.catalysts.eyebrow} title={ed.catalysts.title} intro={ed.catalysts.intro} dark />
          <div className={`${GAP} space-y-20 md:space-y-28`}>
            {ed.catalysts.items.map((item, i) => {
              const base = deep.catalysts.find((c) => c.id === item.id);
              if (!base) return null;
              return (
                <Reveal key={item.id}>
                  <CatalystBlock index={i} item={item} base={base} sources={deep.sources} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 · NOTRE ANALYSE */}
      <section className="section">
        <div className="wrap">
          <ChapterHead eyebrow={ed.thesis.eyebrow} title={ed.thesis.title} intro={ed.thesis.intro} />
          <div className={`${GAP} grid gap-14 md:grid-cols-2 md:gap-16 lg:gap-24`}>
            <NumberedList title={ed.thesis.interestTitle} items={ed.thesis.interest} accent />
            <NumberedList title={ed.thesis.watchTitle} items={ed.thesis.watch} />
          </div>
          <Reveal className="mt-16 md:mt-20">
            <p className="ed-statement border-l-2 border-champagne pl-6 md:pl-8">{ed.thesis.conviction}</p>
          </Reveal>
        </div>
      </section>

      {/* 5 · LOCALISATION */}
      <section className="section bg-ivory-200">
        <div className="wrap">
          <ChapterHead eyebrow={ed.location.eyebrow} title={ed.location.title} intro={ed.location.intro} />
          <div className={GAP}>
            <MapSlot name={area.name} lat={area.coords.lat} lng={area.coords.lng} aspect="aspect-[4/3] md:aspect-[21/9]" />
          </div>
          <dl className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3 md:gap-10">
            {ed.location.landmarks.map((l) => (
              <div key={l.label} className="border-t border-charcoal/30 pt-4">
                <dt className="font-serif text-xl">{l.label}</dt>
                <dd className="ed-body mt-2 text-charcoal/75">{l.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 6 · CTA */}
      <CtaBand id={`area_${area.slug}`} title={ed.cta.title} text={ed.cta.text} label={ed.cta.label} />

      {/* Sources — discret */}
      <section id="sources" className="py-12 md:py-16">
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
