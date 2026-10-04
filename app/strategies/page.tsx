import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import CtaLink from '@/components/CtaLink';
import TrackEvent from '@/components/TrackEvent';
import { Disclaimer } from '@/components/ui/Bits';
import { buildMetadata } from '@/lib/seo';
import { getStrategies } from '@/lib/cms';

export const metadata = buildMetadata({
  title: 'Stratégies d’investissement à Dubai',
  description: 'Valorisation, revenus locatifs, off-plan, plans de paiement, financement, diversification : les stratégies d’investissement immobilier à Dubai, expliquées sans promesse de rendement.',
  path: '/strategies',
});

export default function Page() {
  const strategies = getStrategies();
  return (
    <>
      <PageHero
        image="hero-strategies"
        title="Une stratégie avant une propriété."
        subtitle="Votre investissement doit répondre à vos objectifs, pas l’inverse."
        crumbs={[{ label: 'Stratégies' }]}
      />

      <nav aria-label="Aller à une stratégie" className="sticky top-[72px] z-30 border-b border-stone-light/60 bg-ivory/95 backdrop-blur">
        <ul className="wrap flex gap-6 overflow-x-auto py-4 text-sm">
          {strategies.map((s) => (
            <li key={s.slug} className="shrink-0">
              <a href={`#${s.slug}`} className="text-charcoal/70 hover:text-champagne-dark">{s.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="wrap">
        {strategies.map((s, i) => (
          <article key={s.slug} id={s.slug} className="scroll-mt-40 border-b border-stone-light/60 py-16 md:py-24">
            <TrackEvent event="strategy_viewed" params={{ strategy: s.slug }} when="visible" />
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <header>
                <p className="font-serif text-xl text-champagne">{String(i + 1).padStart(2, '0')}</p>
                <h2 className="h-section mt-3">{s.title}</h2>
                <p className="mt-4 max-w-sm text-charcoal/70">{s.short}</p>
                {s.href ? (
                  <Link href={s.href} className="mt-6 inline-block text-sm font-medium text-champagne-dark underline-offset-4 hover:underline">Voir la page dédiée</Link>
                ) : null}
              </header>
              <div className="space-y-8">
                <Block label="Objectif">{s.objective}</Block>
                <Block label="À qui cela peut convenir">{s.suits}</Block>
                <Block label="Comment cela fonctionne">{s.how}</Block>
                <Block label="Exemple de scénario (illustratif)">{s.scenario}</Block>
                <Block label="Capital nécessaire">{s.capital}</Block>
                <div className="grid gap-8 sm:grid-cols-2">
                  <List label="Avantages potentiels" items={s.benefits} />
                  <List label="Points d’attention" items={s.considerations} />
                </div>
                <CtaLink href="/consultation" id={`strategy_${s.slug}`} className="btn btn-outline-dark">Discuter de ma stratégie</CtaLink>
              </div>
            </div>
          </article>
        ))}
        <Disclaimer>Tous les exemples sont illustratifs et ne constituent ni une promesse ni une garantie de rendement. Les chiffres entre crochets sont des espaces réservés. Ce contenu ne constitue pas un conseil juridique, fiscal ou financier.</Disclaimer>
        <div className="pb-20" />
      </div>

      <CtaBand id="strategies_page" title="Quelle stratégie vous ressemble ?" text="Un échange pour relier vos objectifs, votre capital et votre horizon." label="Discuter de ma stratégie" />
    </>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-stone">{label}</h3>
      <p className="mt-2 leading-relaxed text-charcoal/80">{children}</p>
    </div>
  );
}

function List({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-stone">{label}</h3>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-charcoal/80">
        {items.map((x) => (
          <li key={x} className="flex gap-3"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-champagne" />{x}</li>
        ))}
      </ul>
    </div>
  );
}
