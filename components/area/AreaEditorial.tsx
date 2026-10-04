import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BFImage from '@/components/BFImage';
import CtaBand from '@/components/ui/CtaBand';
import MapSlot from '@/components/ui/MapSlot';
import Reveal from '@/components/Reveal';
import ZoomImage from '@/components/area/ZoomImage';
import { StatusBadge } from '@/components/area/Status';
import type { Area, AreaDeep, AreaEditorial, Catalyst, EditorialHead } from '@/lib/data/area-types';

/**
 * Editorial layout for an enriched area page. One system, used everywhere:
 *   eyebrow (.eyebrow) → H2 (.h-section) → intro (.ed-lead) → content
 *   H1 only in the hero · H3 (.ed-h3) inside blocks · body (.ed-body) · statement (.ed-statement)
 *   chapters = .section (same vertical padding) · content = .wrap (same max width) · header→content gap = GAP
 * Content lives in `deep.editorial`; catalyst titles, statuses and images come from `deep.catalysts`.
 */
const GAP = 'mt-14 md:mt-20';
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
  index, item, base,
}: {
  index: number;
  item: AreaEditorial['catalysts']['items'][number];
  base: Catalyst;
}) {
  const figs = item.figures ?? [];
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
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="font-serif text-xl text-champagne-light">{num(index)}</span>
            <span className="eyebrow">{base.title}</span>
            <StatusBadge status={base.status} tone="dark" className="uppercase tracking-[0.14em]" />
          </div>
          <h3 className="ed-h3 mt-6">{item.headline}</h3>
        </div>
        <div className="lg:col-span-7">
          <div className="space-y-5">
            {item.paragraphs.map((p) => (
              <p key={p} className="ed-body text-ivory/75">{p}</p>
            ))}
          </div>
          {item.insight && (
            <p className="ed-body mt-8 border-l-2 border-champagne pl-5 text-ivory/90">{item.insight}</p>
          )}
          {figs.length > 0 && (
            <dl className={`mt-10 grid gap-6 border-t border-ivory/15 pt-8 ${figs.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {figs.map((f) => (
                <div key={f.label}>
                  <dd className="ed-figure">
                    {f.value}
                    {f.unit && <span className="ml-1.5 text-[0.5em] text-champagne-light/80">{f.unit}</span>}
                  </dd>
                  <dt className="mt-3 max-w-[14rem] text-xs leading-relaxed text-ivory/60 md:text-sm">{f.label}</dt>
                </div>
              ))}
            </dl>
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
          <div className={`${GAP} grid items-end gap-10 lg:grid-cols-12 lg:gap-14`}>
            <div className="lg:col-span-8">
              <ZoomImage slot={deep.masterplanImage} sizes="(min-width:1280px) 800px, (min-width:1024px) 62vw, 100vw" />
              <p className="mt-3 text-xs leading-relaxed text-stone">{ed.masterplan.caption}</p>
            </div>
            <Reveal className="lg:col-span-4 lg:pb-10">
              <p className="eyebrow">Lecture BF</p>
              <p className="ed-sub mt-4 border-l-2 border-champagne pl-5 text-charcoal/90">{ed.masterplan.insight}</p>
            </Reveal>
          </div>
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
                  <CatalystBlock index={i} item={item} base={base} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4 · LA THÈSE BF PROPERTIES — dark editorial break */}
      <section className="section relative overflow-hidden border-t border-ivory/10 bg-charcoal text-ivory">
        <BFImage slot="creek-downtown-view" overlay="strong" className="opacity-40" sizes="100vw" />
        <div className="wrap relative">
          <Reveal>
            <p className="eyebrow">{ed.thesisBreak.eyebrow}</p>
            <h2 className="h-section mt-5 max-w-4xl">{ed.thesisBreak.title}</h2>
          </Reveal>
          <div className={`${GAP} grid gap-6 lg:grid-cols-12 lg:gap-16`}>
            <div className="space-y-6 lg:col-span-7 lg:col-start-6">
              {ed.thesisBreak.paragraphs.map((p) => (
                <p key={p} className="ed-lead text-ivory/80">{p}</p>
              ))}
            </div>
          </div>
          <Reveal className="mt-16 border-t border-ivory/20 pt-12 md:mt-24 md:pt-16">
            <p className="ed-statement text-ivory/70">{ed.thesisBreak.statement[0]}</p>
            <p className="ed-statement mt-3 text-champagne-light">{ed.thesisBreak.statement[1]}</p>
          </Reveal>
        </div>
      </section>

      {/* 5 · BF PROPERTIES — how we select */}
      <section className="section">
        <div className="wrap">
          <ChapterHead eyebrow={ed.approach.eyebrow} title={ed.approach.title} intro={ed.approach.intro} />
          <div className={`${GAP} grid gap-14 md:grid-cols-2 md:gap-16 lg:gap-24`}>
            <NumberedList title={ed.approach.interestTitle} items={ed.approach.interest} accent />
            <NumberedList title={ed.approach.analysisTitle} items={ed.approach.analysis} />
          </div>
          <Reveal className="mt-16 md:mt-20">
            <p className="ed-statement border-l-2 border-champagne pl-6 md:pl-8">{ed.approach.conviction}</p>
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
    </>
  );
}
