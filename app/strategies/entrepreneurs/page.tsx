import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import TrackEvent from '@/components/TrackEvent';
import { Disclaimer, SectionHead } from '@/components/ui/Bits';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Entrepreneurs & sociétés : investir à Dubai',
  description: 'Votre entreprise génère du cash. Quelles sont vos options ? Une présentation conceptuelle des pistes immobilières à Dubai pour les entrepreneurs, sans conseil fiscal ou juridique.',
  path: '/strategies/entrepreneurs',
});

const SITUATION = [
  { k: 'Trésorerie annuelle de l’entreprise', v: '300 000 €' },
  { k: 'Capital disponible', v: '500 000 €' },
  { k: 'Horizon d’investissement', v: '5 à 10 ans' },
];

const STRUCTURES = [
  { t: 'Investissement personnel', d: 'L’entrepreneur investit à titre privé, à partir de son capital personnel. C’est le cas le plus simple à comprendre.' },
  { t: 'Investissement via une société', d: 'Lorsque cela est juridiquement approprié. La faisabilité dépend des juridictions concernées et doit être validée par des conseillers.' },
  { t: 'Financement', d: 'Un apport complété par un financement peut réduire le capital initial, mais augmente l’engagement et le risque.' },
  { t: 'Plans de paiement', d: 'L’engagement de capital est étalé dans le temps selon l’échéancier du promoteur.' },
  { t: 'Acquisitions échelonnées', d: 'Plusieurs acquisitions réparties dans le temps, plutôt qu’un seul achat.' },
];

const TIMELINE = [
  { t: 'Année 1', d: 'Réservation et premier versement' },
  { t: 'Années 2–3', d: 'Versements échelonnés' },
  { t: 'Année 4', d: 'Solde avant livraison' },
  { t: 'Livraison', d: 'Remise des clés, puis décision : conserver, louer ou revendre' },
];

export default function Page() {
  return (
    <>
      <TrackEvent event="strategy_viewed" params={{ strategy: 'entrepreneurs' }} />
      <PageHero
        image="hero-entrepreneurs"
        title="Votre entreprise génère du cash. Quelles sont vos options ?"
        subtitle="BF Properties accompagne les entrepreneurs souhaitant explorer l’immobilier à Dubai dans le cadre d’une stratégie patrimoniale ou d’investissement."
        crumbs={[{ label: 'Stratégies', href: '/strategies' }, { label: 'Entrepreneurs & sociétés' }]}
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHead title="Un exemple de situation" intro="Un point de départ pour réfléchir, pas un cas réel ni une recommandation." />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-charcoal/70">Les fonds d’une société ne peuvent pas être simplement transférés à titre personnel ou vers l’étranger sans conséquences juridiques et fiscales. C’est précisément la première question à traiter avec des spécialistes.</p>
          </div>
          <dl className="border-t border-charcoal/30">
            {SITUATION.map((s) => (
              <div key={s.k} className="flex items-baseline justify-between gap-6 border-b border-stone-light/60 py-5">
                <dt className="text-sm text-charcoal/70">{s.k}</dt>
                <dd className="font-serif text-3xl">{s.v}</dd>
              </div>
            ))}
            <p className="pt-4 text-xs text-stone">Exemple illustratif.</p>
          </dl>
        </div>
      </section>

      <section className="section bg-ivory-200">
        <div className="wrap">
          <SectionHead title="Structures possibles" intro="Cinq pistes à étudier conceptuellement. Leur pertinence dépend de votre situation personnelle et professionnelle." />
          <div className="mt-12 grid gap-px bg-stone-light/50 sm:grid-cols-2 lg:grid-cols-5">
            {STRUCTURES.map((s) => (
              <article key={s.t} className="bg-ivory-200 p-6">
                <h3 className="font-serif text-xl leading-snug">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-charcoal text-ivory">
        <div className="wrap">
          <h2 className="h-section max-w-3xl">Un plan de paiement, dans le temps.</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ivory/70">Schéma conceptuel de trésorerie : le capital est engagé progressivement. Les montants et dates réels dépendent du projet.</p>
          <div className="mt-14">
            <div className="h-1 w-full bg-ivory/15" aria-hidden>
              <div className="h-full w-full bg-gradient-to-r from-champagne/20 to-champagne" />
            </div>
            <ol className="mt-8 grid gap-8 md:grid-cols-4">
              {TIMELINE.map((t) => (
                <li key={t.t}>
                  <h3 className="font-serif text-2xl text-champagne-light">{t.t}</h3>
                  <p className="mt-2 text-sm text-ivory/70">{t.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h-section">Les conseils de professionnels sont indispensables.</h2>
          <p className="mt-6 leading-relaxed text-charcoal/75">BF Properties ne fournit pas de conseil fiscal ou juridique. La structuration juridique, fiscale et sociétaire d’un investissement doit être validée par des conseillers qualifiés dans chacune des juridictions concernées, par exemple votre pays de résidence, le pays de votre société et les Émirats arabes unis.</p>
          <p className="mt-4 leading-relaxed text-charcoal/75">Notre rôle : vous aider à comprendre le marché immobilier de Dubai et à préparer des questions précises pour vos conseillers.</p>
          <Disclaimer>Exemple illustratif, sans valeur de recommandation, de garantie de rendement ou d’avis fiscal.</Disclaimer>
        </div>
      </section>

      <CtaBand id="entrepreneurs_page" title="Prenons le temps d’étudier votre situation." label="Étudier ma situation" />
    </>
  );
}
