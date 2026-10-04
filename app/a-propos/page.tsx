import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/Reveal';
import BFImage from '@/components/BFImage';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'À propos de BF Properties',
  description: 'BF Properties accompagne les investisseurs internationaux dans la compréhension, la sélection et l’acquisition d’opportunités immobilières à Dubai, en commençant par l’investisseur.',
  path: '/a-propos',
});

const METHOD = [
  { t: 'Comprendre', d: 'Votre situation financière, vos objectifs, votre horizon et vos contraintes.' },
  { t: 'Analyser', d: 'Le marché, les quartiers, les promoteurs et les structures de paiement.' },
  { t: 'Sélectionner', d: 'Une sélection ciblée d’opportunités, plutôt qu’un catalogue.' },
  { t: 'Accompagner', d: 'La comparaison et l’acquisition, étape par étape.' },
  { t: 'Suivre', d: 'Le suivi de votre investissement après l’achat.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        image="hero-about"
        title="Une approche différente de l’immobilier à Dubai."
        subtitle="BF Properties accompagne les investisseurs internationaux dans la compréhension, la sélection et l’acquisition d’opportunités immobilières à Dubai."
        crumbs={[{ label: 'À propos' }]}
      />

      <section className="section">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 className="h-section max-w-xl">L’investisseur avant la propriété.</h2>
            <p className="mt-8 max-w-xl leading-relaxed text-charcoal/75">BF Properties ne commence pas par un bien : elle commence par vous. Votre capital, vos objectifs, votre horizon et vos contraintes définissent les opportunités qui méritent réellement votre attention.</p>
            <p className="mt-4 max-w-xl leading-relaxed text-charcoal/75">C’est pourquoi ce site ne présente pas de catalogue de propriétés. Il vous aide à comprendre le marché, puis à préparer une conversation à partir de laquelle une sélection est construite pour vous.</p>
          </Reveal>
          <div className="relative aspect-[4/5]"><BFImage slot="philosophy" sizes="(min-width:1024px) 40vw, 100vw" /></div>
        </div>
      </section>

      <section className="section bg-ivory-200">
        <div className="wrap">
          <h2 className="h-section max-w-2xl">Notre méthode</h2>
          <ol className="mt-12 grid gap-px bg-stone-light/50 sm:grid-cols-2 lg:grid-cols-5">
            {METHOD.map((m, i) => (
              <li key={m.t} className="bg-ivory-200 p-6 lg:first:pl-0">
                <span className="font-serif text-3xl text-champagne">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-serif text-2xl">{m.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{m.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-3xl">
          <h2 className="h-section">Notre philosophie de sélection</h2>
          <p className="mt-6 leading-relaxed text-charcoal/75">BF Properties évalue les opportunités en fonction de leur adéquation avec chaque investisseur, plutôt que de présenter l’ensemble des projets disponibles. Une opportunité peut être excellente pour un profil et inadaptée pour un autre.</p>
          <p className="mt-4 leading-relaxed text-charcoal/75">Nous vous recommandons de faire valider les aspects juridiques, fiscaux et financiers de votre projet par des conseillers qualifiés.</p>
        </div>
      </section>

      <CtaBand id="about_page" title="Découvrez comment nous travaillons." text="La façon la plus simple de comprendre notre approche est d’en parler." label="Définir mon projet" />
    </>
  );
}
