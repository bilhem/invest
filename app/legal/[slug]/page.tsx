import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import { DraftNotice } from '@/components/ui/Bits';
import { buildMetadata } from '@/lib/seo';

type Params = { slug: string };

type LegalDoc = { title: string; draft: boolean; sections: { h: string; p: string }[] };

/**
 * Legal texts must be written or validated by BF Properties' legal counsel.
 * Only the disclaimer below is a ready-to-use informational text; the others are structured skeletons.
 */
const DOCS: Record<string, LegalDoc> = {
  'privacy-policy': {
    title: 'Politique de confidentialité',
    draft: true,
    sections: [
      { h: 'Responsable du traitement', p: '[Raison sociale, adresse et contact de BF Properties.]' },
      { h: 'Données collectées', p: '[Formulaire de consultation, inscription au Lab, mesures d’audience avec consentement.]' },
      { h: 'Finalités et bases légales', p: '[À compléter par le conseil juridique.]' },
      { h: 'Durée de conservation', p: '[À compléter.]' },
      { h: 'Vos droits', p: '[Accès, rectification, effacement, opposition, portabilité. Contact pour exercer ces droits.]' },
      { h: 'Sous-traitants et transferts', p: '[CRM, outil de rendez-vous, hébergeur, outils d’analyse : à lister.]' },
    ],
  },
  terms: {
    title: 'Conditions d’utilisation',
    draft: true,
    sections: [
      { h: 'Objet', p: '[À compléter par le conseil juridique.]' },
      { h: 'Propriété intellectuelle', p: '[À compléter.]' },
      { h: 'Limitation de responsabilité', p: '[À compléter.]' },
      { h: 'Droit applicable', p: '[À compléter.]' },
    ],
  },
  'cookie-policy': {
    title: 'Politique de cookies',
    draft: true,
    sections: [
      { h: 'Cookies utilisés', p: '[Lister précisément les traceurs : mesure d’audience (GA4), publicité (Meta Pixel), autres.]' },
      { h: 'Consentement', p: 'Les outils de mesure et de publicité ne se chargent qu’après votre accord, que vous pouvez refuser.' },
      { h: 'Gérer vos choix', p: '[Décrire comment modifier son choix.]' },
    ],
  },
  'legal-notice': {
    title: 'Mentions légales',
    draft: true,
    sections: [
      { h: 'Éditeur du site', p: '[Raison sociale, forme juridique, adresse, numéro d’enregistrement, licences éventuelles.]' },
      { h: 'Directeur de la publication', p: '[Nom.]' },
      { h: 'Hébergeur', p: '[Nom et adresse de l’hébergeur.]' },
    ],
  },
  disclaimers: {
    title: 'Avertissements',
    draft: false,
    sections: [
      { h: 'Information, pas conseil', p: 'Les contenus de ce site sont fournis à titre informatif. Ils ne constituent ni un conseil juridique, fiscal ou financier, ni une recommandation personnalisée d’investissement.' },
      { h: 'Pas de garantie de performance', p: 'Les performances passées ne garantissent pas les performances futures. Les exemples et scénarios sont illustratifs. La valeur d’un bien immobilier et ses revenus peuvent évoluer à la hausse comme à la baisse.' },
      { h: 'Validation par des professionnels', p: 'La structuration juridique, fiscale et financière d’un investissement doit être validée par des conseillers qualifiés dans chaque juridiction concernée.' },
      { h: 'Exactitude des informations', p: 'Les informations peuvent évoluer. Elles doivent être vérifiées avant toute décision.' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(DOCS).map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const d = DOCS[slug];
  if (!d) return {};
  return buildMetadata({ title: d.title, description: `${d.title} de BF Properties.`, path: `/legal/${slug}`, noindex: d.draft });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const d = DOCS[slug];
  if (!d) notFound();
  return (
    <>
      <PageHero image="hero-legal" title={d.title} crumbs={[{ label: d.title }]} />
      {d.draft && <DraftNotice>Document en cours de rédaction : ce texte doit être complété et validé par le conseil juridique de BF Properties avant publication.</DraftNotice>}
      <section className="section">
        <div className="wrap max-w-3xl">
          {d.sections.map((s) => (
            <div key={s.h} className="border-t border-stone-light/70 py-7">
              <h2 className="font-serif text-2xl">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-charcoal/75">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
