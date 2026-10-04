import PageHero from '@/components/ui/PageHero';
import LabForm from '@/components/LabForm';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'BF Investment Lab',
  description: 'Votre stratégie immobilière, modélisée. Un futur outil BF Properties pour comparer des stratégies, visualiser des plans de paiement et modéliser les besoins en capital.',
  path: '/lab',
});

const CAPS = [
  { t: 'Comparer des stratégies', d: 'Mettre côte à côte plusieurs approches d’investissement.' },
  { t: 'Visualiser les plans de paiement', d: 'Voir comment le capital est engagé dans le temps.' },
  { t: 'Modéliser les besoins en capital', d: 'Anticiper l’effort financier selon votre scénario.' },
  { t: 'Comprendre les flux de trésorerie', d: 'Lire les entrées et sorties d’un projet.' },
  { t: 'Explorer des scénarios', d: 'Tester des hypothèses avant de décider.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        image="hero-lab"
        eyebrow="Bientôt disponible"
        title="BF Investment Lab"
        subtitle="Votre stratégie immobilière, modélisée."
        crumbs={[{ label: 'BF Investment Lab' }]}
      />
      <section className="section">
        <div className="wrap">
          <h2 className="h-section max-w-2xl">Ce que le Lab permettra.</h2>
          <p className="mt-5 max-w-xl text-charcoal/70">Un outil en préparation. Les fonctionnalités ci-dessous décrivent une intention, pas encore un produit disponible.</p>
          <ul className="mt-12 grid gap-px bg-stone-light/50 sm:grid-cols-2 lg:grid-cols-5">
            {CAPS.map((c) => (
              <li key={c.t} className="bg-ivory p-6 lg:first:pl-0">
                <h3 className="font-serif text-xl leading-snug">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{c.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section relative bg-charcoal text-ivory">
        <div className="wrap">
          <h2 className="h-section max-w-2xl">Soyez informé du lancement.</h2>
          <div className="mt-8"><LabForm /></div>
        </div>
      </section>
    </>
  );
}
