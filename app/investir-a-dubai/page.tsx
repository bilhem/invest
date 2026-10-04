import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import JsonLd from '@/components/ui/JsonLd';
import Reveal from '@/components/Reveal';
import { SectionHead, Disclaimer } from '@/components/ui/Bits';
import { buildMetadata } from '@/lib/seo';
import { getInvestFaq } from '@/lib/cms';

export const metadata = buildMetadata({
  title: 'Investir à Dubai',
  description: 'Comprendre le marché immobilier de Dubai avant de choisir une propriété : zones, processus d’achat, coûts à anticiper, plans de paiement, financement et risques.',
  path: '/investir-a-dubai',
});

const WHY = [
  { t: 'Un marché ouvert aux investisseurs internationaux', d: 'Dans des zones désignées (freehold), les non-résidents peuvent en général acquérir en pleine propriété. Les règles précises sont à confirmer pour chaque projet.' },
  { t: 'Une ville tournée vers l’international', d: 'Dubai est un carrefour économique et résidentiel. Cette ouverture alimente la demande, mais l’expose aussi aux cycles économiques mondiaux.' },
  { t: 'Un marché en évolution rapide', d: 'L’offre se renouvelle vite et les quartiers évoluent à des rythmes différents. C’est une opportunité pour qui sait analyser, un risque pour qui achète sans méthode.' },
];

const MARKET = [
  { t: 'Zones freehold', d: 'Zones où les étrangers peuvent détenir un bien en pleine propriété. Toutes les zones de Dubai ne sont pas concernées.' },
  { t: 'Ready (livré)', d: 'Bien achevé, pouvant être occupé ou loué rapidement. Le capital est généralement mobilisé plus tôt.' },
  { t: 'Off-plan (sur plan)', d: 'Bien acquis avant sa livraison, payé par étapes. L’exécution du promoteur devient un facteur clé.' },
  { t: 'Marché primaire et secondaire', d: 'Le primaire correspond à l’achat auprès du promoteur ; le secondaire à la revente entre particuliers. Les conditions, les prix et les risques diffèrent.' },
];

const PROCESS = [
  'Objectif de l’investisseur', 'Budget', 'Analyse des quartiers', 'Sélection d’opportunités',
  'Réservation', 'Documentation', 'Paiements', 'Remise des clés',
];

const COSTS = [
  { t: 'Frais d’acquisition', d: 'Frais liés à l’achat du bien, variables selon le projet et la transaction.' },
  { t: 'Enregistrement', d: 'Frais d’enregistrement auprès des autorités compétentes.' },
  { t: 'Charges de service', d: 'Charges annuelles de copropriété et d’entretien, qui peuvent peser sur le rendement net.' },
  { t: 'Coûts de financement', d: 'Intérêts, frais de dossier et assurances, lorsqu’un financement est utilisé.' },
  { t: 'Frais de gestion', d: 'Gestion locative et entretien si le bien est loué.' },
  { t: 'Autres coûts', d: 'Frais de conseil, de change, d’ameublement, etc., selon la situation.' },
];

const COMPARE = [
  ['Paiement', 'Échelonné jusqu’à la livraison', 'Généralement en une fois ou financé'],
  ['Revenus locatifs', 'Aucun avant la livraison', 'Possibles dès l’acquisition'],
  ['Risque principal', 'Exécution et calendrier du promoteur', 'Prix payé et état du bien'],
  ['Choix', 'Projets récents, large éventail', 'Biens existants, visite possible'],
  ['Flexibilité', 'Engagement ferme sur l’échéancier', 'Capital engagé immédiatement'],
];

const PLAN = [
  { t: 'Réservation', d: 'Acompte initial : [X %]' },
  { t: 'Acquisition', d: 'Signature et premières échéances : [X %]' },
  { t: 'Construction', d: 'Versements échelonnés selon l’avancement : [X %]' },
  { t: 'Livraison', d: 'Solde à la remise des clés : [X %]' },
];

const RISKS = [
  { t: 'Cycles de marché', d: 'Les prix peuvent baisser comme augmenter ; les périodes de croissance sont suivies de phases de correction.' },
  { t: 'Offre', d: 'De nouvelles livraisons importantes peuvent peser sur les prix et les loyers.' },
  { t: 'Exécution du promoteur', d: 'Retards ou modification de projet sont possibles ; l’historique du promoteur doit être étudié.' },
  { t: 'Liquidité', d: 'Revendre un bien peut prendre du temps et dépend des conditions du marché.' },
  { t: 'Engagements de paiement', d: 'Chaque échéance doit être honorée, y compris si votre situation évolue.' },
  { t: 'Localisation', d: 'Deux biens proches peuvent se comporter très différemment selon l’immeuble et l’environnement.' },
  { t: 'Horizon d’investissement', d: 'Un horizon trop court augmente le risque de devoir vendre dans de mauvaises conditions.' },
];

export default function Page() {
  const faq = getInvestFaq();
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <>
      <PageHero
        image="hero-invest"
        title="Investir à Dubai."
        subtitle="Comprendre le marché avant de choisir une propriété."
        crumbs={[{ label: 'Investir à Dubai' }]}
      />

      <section className="section">
        <div className="wrap">
          <Reveal><SectionHead title="Pourquoi Dubai" intro="Des caractéristiques structurelles à comprendre, sans promesse ni raccourci." /></Reveal>
          <div className="mt-14 grid gap-px bg-stone-light/50 md:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.t} className="bg-ivory py-8 pr-6 md:px-8 md:first:pl-0">
                <h3 className="font-serif text-2xl">{w.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-ivory-200">
        <div className="wrap">
          <SectionHead title="Comprendre le marché immobilier" />
          <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
            {MARKET.map((m) => (
              <div key={m.t} className="border-t border-stone-light/70 pt-6">
                <dt className="font-serif text-2xl">{m.t}</dt>
                <dd className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">{m.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Le processus d’achat" intro="Un parcours en huit étapes, dont les quatre premières se jouent avant toute réservation." />
          <ol className="mt-14 grid gap-px bg-stone-light/50 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p} className="bg-ivory p-6">
                <span className="font-serif text-3xl text-champagne">{String(i + 1).padStart(2, '0')}</span>
                <p className="mt-3 font-serif text-xl">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-ivory-200">
        <div className="wrap">
          <SectionHead title="Les coûts à anticiper" intro="Chaque poste est à chiffrer pour votre projet précis. Aucun montant n’est affiché ici tant qu’il n’est pas vérifié." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COSTS.map((c) => (
              <article key={c.t} className="border border-stone-light/70 bg-ivory p-6">
                <h3 className="font-serif text-xl">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{c.d}</p>
                <p className="mt-5 border-t border-stone-light/60 pt-3 text-xs text-stone">Montant : [à confirmer selon le projet]</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead title="Off-plan ou ready ?" intro="Deux logiques différentes. Le bon choix dépend de votre horizon, de votre trésorerie et de votre tolérance au risque." />
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Comparaison entre un bien off-plan et un bien ready</caption>
              <thead>
                <tr className="border-b border-charcoal/30">
                  <th scope="col" className="py-4 pr-4 font-normal text-stone"><span className="sr-only">Critère</span></th>
                  <th scope="col" className="py-4 pr-4 font-serif text-2xl font-medium">Off-plan</th>
                  <th scope="col" className="py-4 font-serif text-2xl font-medium">Ready</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([k, a, b]) => (
                  <tr key={k} className="border-b border-stone-light/60 align-top">
                    <th scope="row" className="w-1/4 py-5 pr-4 text-left font-medium">{k}</th>
                    <td className="py-5 pr-4 text-charcoal/75">{a}</td>
                    <td className="py-5 text-charcoal/75">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-charcoal text-ivory">
        <div className="wrap">
          <h2 className="h-section max-w-3xl">Plans de paiement : comprendre l’échéancier.</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-ivory/70">Schéma conceptuel. Les pourcentages varient selon chaque promoteur et chaque projet.</p>
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            <span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-champagne/40 md:left-0 md:top-[7px] md:h-px md:w-full" />
            {PLAN.map((p) => (
              <li key={p.t} className="relative pl-9 md:pl-0 md:pt-9">
                <span aria-hidden className="absolute left-0 top-1 h-[15px] w-[15px] rounded-full border border-champagne bg-charcoal md:top-0" />
                <h3 className="font-serif text-2xl">{p.t}</h3>
                <p className="mt-2 text-sm text-ivory/65">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHead title="Financement" />
          <div className="space-y-5 leading-relaxed text-charcoal/75">
            <p>Un financement peut compléter un apport personnel. Son accès, son coût et ses conditions dépendent de votre profil, de votre pays de résidence et de l’établissement.</p>
            <p>Il augmente votre capacité d’investissement, mais aussi votre exposition au risque : le crédit doit être remboursé quelle que soit l’évolution du marché.</p>
            <p>BF Properties vous aide à comprendre ces mécanismes à haut niveau. Les offres de financement relèvent des établissements concernés.</p>
          </div>
        </div>
      </section>

      <section className="section bg-ivory-200">
        <div className="wrap">
          <SectionHead title="Risques et points d’attention" intro="L’immobilier à Dubai n’est pas sans risque. Les connaître fait partie de la méthode." />
          <ul className="mt-12 grid gap-x-16 md:grid-cols-2">
            {RISKS.map((r) => (
              <li key={r.t} className="border-t border-stone-light/70 py-6">
                <h3 className="font-serif text-xl">{r.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{r.d}</p>
              </li>
            ))}
          </ul>
          <Disclaimer>Contenu à visée informative. Il ne constitue pas un conseil juridique, fiscal ou financier. Les performances passées ne garantissent pas les performances futures.</Disclaimer>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-3xl">
          <JsonLd data={faqLd} />
          <h2 className="h-section">Questions fréquentes</h2>
          <div className="mt-10">
            {faq.map((f) => (
              <details key={f.q} className="group border-t border-stone-light/70 py-5 last:border-b">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl">
                  {f.q}
                  <span aria-hidden className="text-champagne transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand id="invest_page" title="Parlons de votre projet." text="Une conversation pour clarifier votre situation avant d’envisager le moindre bien." />
    </>
  );
}
