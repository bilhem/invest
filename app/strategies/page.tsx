import Link from 'next/link';
import BFImage from '@/components/BFImage';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CtaLink from '@/components/CtaLink';
import TrackEvent from '@/components/TrackEvent';
import { buildMetadata } from '@/lib/seo';
import { getStrategies } from '@/lib/cms';
import { getImage } from '@/lib/images';
import type { Strategy } from '@/lib/data/strategies';

export const metadata = buildMetadata({
  title: 'Stratégies d’investissement à Dubai',
  description: 'Valorisation, revenus locatifs, off-plan, plans de paiement, financement, diversification : les stratégies d’investissement immobilier à Dubai, expliquées sans promesse de rendement.',
  path: '/strategies',
});

/**
 * One type scale (serif for headings, sans for the rest): H1 32 → 40 → 48 px · H2 28 → 32 px · H3 20 → 22 px · text 16 px / 1.7 · labels and notes 14 px.
 * One container (1100 px), one text measure (36 rem). Objectives and acquisition methods are two different things and are shown as two different groups.
 * The seven anchors (#capital-appreciation … #entrepreneurs) are those the district pages link to.
 */
const CONTAINER = 'mx-auto w-full max-w-[1100px] px-6 md:px-10';
const H1 = 'font-serif text-[2rem] font-medium leading-[1.15] tracking-tight sm:text-[2.5rem] lg:text-[3rem]';
const H2 = 'font-serif text-[1.75rem] font-medium leading-[1.2] tracking-tight text-charcoal md:text-[2rem]';
const H3 = 'font-serif text-[1.25rem] font-medium leading-snug text-charcoal md:text-[1.375rem]';
const TEXT = 'text-base leading-[1.7] text-charcoal/80';
const SECTION = 'py-12 md:py-16';

/** Objectives: what the investor wants. Acquisition methods: how to buy and finance. */
const OBJECTIVES = ['capital-appreciation', 'rental-income', 'portfolio-diversification'];
const METHODS = ['off-plan', 'payment-plans', 'financing', 'entrepreneurs'];

function List({ label, items }: { label: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="mt-5">
      <p className="text-sm font-semibold text-charcoal">{label}</p>
      <ul className={`mt-2 list-disc space-y-1.5 pl-5 marker:text-champagne-dark ${TEXT}`}>
        {items.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </div>
  );
}

function More({ s }: { s: Strategy }) {
  return (
    <div className="mt-auto pt-6">
      <Link href={s.more.href} className="inline-flex items-center gap-2 border-b border-champagne-dark/60 pb-1 text-sm font-medium text-charcoal transition-colors hover:border-champagne-dark">
        {s.more.label}<span aria-hidden className="text-[#7E6234]">→</span>
      </Link>
    </div>
  );
}

export default function Page() {
  const all = getStrategies();
  const pick = (slugs: string[]) => slugs.map((slug) => all.find((s) => s.slug === slug)).filter((s): s is Strategy => !!s);
  const veil = getImage('hero-strategies').veil;
  return (
    <>
      {/* 1 · INTRODUCTION — compact: the page's editorial photograph behind the title, with its usual dark veil */}
      <section className="relative flex min-h-[22rem] items-end bg-charcoal text-ivory md:min-h-[26rem]">
        <BFImage slot="hero-strategies" priority sizes="100vw" />
        {/* a little extra shade: this compact hero shows the brightest part of the photograph behind the title */}
        <div aria-hidden className="absolute inset-0 bg-charcoal/50" />
        {veil && (
          <div aria-hidden className="hero-veil absolute inset-0"
            style={{ '--v-b': veil.bottom, '--v-l': veil.left, '--v-t': veil.top, ...(veil.reach ? { '--v-r': `${veil.reach}%` } : {}) } as React.CSSProperties} />
        )}
        <div className={`${CONTAINER} relative pb-12 pt-32 md:pb-14 md:pt-36 [&_nav]:text-ivory/90`}>
          <Breadcrumbs items={[{ label: 'Stratégies' }]} />
          <h1 className={`${H1} mt-8 max-w-[40rem] text-balance`}>Chaque investissement commence par un objectif.</h1>
          <p className="mt-5 max-w-[36rem] text-balance text-base leading-[1.7] text-ivory/90">Votre horizon, votre capital et vos ambitions déterminent les opportunités à étudier.</p>
        </div>
      </section>

      <div className="bg-ivory">
        <div className={CONTAINER}>
          {/* 2 · THREE OBJECTIVES — open columns under a gold hairline */}
          <section aria-labelledby="objectifs-title" className={SECTION}>
            <h2 id="objectifs-title" className={H2}>Trois objectifs d’investissement</h2>
            <p className={`${TEXT} mt-3 max-w-[36rem]`}>Ce que vous attendez de votre investissement.</p>
            <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-x-10">
              {pick(OBJECTIVES).map((s) => (
                <article key={s.slug} id={s.slug} className="flex max-w-[36rem] scroll-mt-24 flex-col border-t border-champagne-dark pt-6 lg:max-w-none">
                  <h3 className={H3}>{s.label}</h3>
                  <p className={`${TEXT} mt-3`}>{s.objective}</p>
                  <List label="Critères à considérer" items={s.criteria ?? []} />
                  <List label="Points d’attention" items={s.considerations} />
                  <More s={s} />
                  <TrackEvent event="strategy_viewed" params={{ strategy: s.slug }} when="visible" />
                </article>
              ))}
            </div>
          </section>

          {/* 3 · ACQUISITION METHODS — four simple cards, a different group from the objectives above */}
          <section aria-labelledby="modalites-title" className={`${SECTION} border-t border-charcoal/15`}>
            <h2 id="modalites-title" className={H2}>Modalités d’investissement</h2>
            <p className={`${TEXT} mt-3 max-w-[36rem]`}>Comment acquérir et financer un bien, une fois l’objectif défini.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
              {pick(METHODS).map((s) => (
                <article key={s.slug} id={s.slug} className="flex scroll-mt-24 flex-col border border-charcoal/15 p-6 md:p-8">
                  <h3 className={H3}>{s.label}</h3>
                  <p className={`${TEXT} mt-3`}>{s.objective}</p>
                  <List label="Points d’attention" items={s.considerations} />
                  <More s={s} />
                  <TrackEvent event="strategy_viewed" params={{ strategy: s.slug }} when="visible" />
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-[36rem] text-sm leading-relaxed text-charcoal/75">
              Aucune valorisation ni aucun rendement n’est garanti. Ce contenu est informatif : il ne constitue pas un conseil juridique, fiscal ou financier.
            </p>
          </section>

          {/* 4 · CONVERSION */}
          <section className={`${SECTION} border-t border-charcoal/15`}>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-10">
              <h2 className={`${H2} max-w-[36rem] text-balance`}>Définissons ensemble votre stratégie d’investissement.</h2>
              <CtaLink href="/consultation" id="strategies_page" className="btn btn-gold shrink-0">Discuter de ma stratégie</CtaLink>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
