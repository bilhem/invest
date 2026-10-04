import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import TrackEvent from '@/components/TrackEvent';
import { Disclaimer, DraftNotice } from '@/components/ui/Bits';
import { buildMetadata } from '@/lib/seo';
import { getStories, getStory, getArea } from '@/lib/cms';

type Params = { slug: string };

export function generateStaticParams() {
  return getStories().map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) return {};
  return buildMetadata({
    title: `${s.name}, investisseur — ${s.strategy}`,
    description: `Le parcours d’un investisseur (${s.country}) à Dubai : situation de départ, options étudiées, décision et suivi.`,
    path: `/investor-stories/${s.slug}`,
    noindex: s.placeholder,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) notFound();
  const area = getArea(s.areaSlug);

  return (
    <>
      <TrackEvent event="investor_story_viewed" params={{ story: s.slug }} />
      <PageHero
        image={s.img}
        eyebrow={`${s.strategy} — ${s.country}`}
        title={`${s.name}, investisseur`}
        subtitle={`Stratégie : ${s.strategy}. Quartier : ${s.areaName}.`}
        crumbs={[{ label: 'Investor Stories', href: '/investor-stories' }, { label: s.name }]}
      />
      {s.placeholder && <DraftNotice>Cas de démonstration : toutes les données sont des espaces réservés, en attente d’un parcours réel vérifié et approuvé.</DraftNotice>}

      <section className="section">
        <div className="wrap max-w-5xl">
          <h2 className="h-section">Situation initiale</h2>
          <dl className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {([['Capital disponible', s.situation.capital], ['Objectifs', s.situation.objectives], ['Horizon', s.situation.horizon], ['Contraintes', s.situation.constraints]] as const).map(([k, v]) => (
              <div key={k} className="border-t border-stone-light/70 py-5">
                <dt className="text-sm text-stone">{k}</dt>
                <dd className="mt-1 font-serif text-2xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section bg-ivory-200">
        <div className="wrap">
          <h2 className="h-section">Options étudiées</h2>
          <div className="mt-10 grid gap-px bg-stone-light/50 md:grid-cols-3">
            {s.options.map((o) => (
              <article key={o.title} className="bg-ivory-200 p-6 md:px-8">
                <h3 className="font-serif text-2xl">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="h-section">Décision</h2>
            <p className="mt-6 leading-relaxed text-charcoal/75">{s.decision}</p>
          </div>
          <div>
            <h2 className="h-section">Acquisition</h2>
            <dl className="mt-6">
              {([['Quartier', s.acquisition.area], ['Promoteur', s.acquisition.developer], ['Prix d’achat', s.acquisition.price], ['Structure de paiement', s.acquisition.structure], ['Date d’achat', s.acquisition.date]] as const).map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-t border-stone-light/70 py-4 text-sm">
                  <dt className="text-stone">{k}</dt><dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
            {area && <Link href={`/quartiers/${area.slug}`} className="mt-4 inline-block text-sm font-medium text-champagne-dark underline-offset-4 hover:underline">Analyse du quartier {area.name}</Link>}
          </div>
        </div>
      </section>

      <section className="section bg-charcoal text-ivory">
        <div className="wrap">
          <h2 className="h-section">Évolution</h2>
          <p className="mt-4 max-w-xl text-sm text-ivory/60">Uniquement des données historiques vérifiées seront affichées ici.</p>
          <dl className="mt-10 grid gap-px bg-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
            {s.evolution.map((e) => (
              <div key={e.label} className="bg-charcoal p-6">
                <dt className="text-sm text-ivory/60">{e.label}</dt>
                <dd className="mt-2 font-serif text-4xl text-champagne-light">{e.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="h-section">Ce que BF Properties a apporté</h2>
          <ul className="mt-10 grid gap-px bg-stone-light/50 sm:grid-cols-2 lg:grid-cols-4">
            {s.contribution.map((c) => (
              <li key={c.title} className="bg-ivory p-6 sm:first:pl-0">
                <h3 className="font-serif text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{c.text}</p>
              </li>
            ))}
          </ul>
          {s.quote && (
            <blockquote className="mt-16 max-w-3xl border-l-2 border-champagne pl-6">
              <p className="font-serif text-3xl leading-snug">{s.quote.text}</p>
              <footer className="mt-4 text-sm text-stone">{s.quote.by}</footer>
            </blockquote>
          )}
          <Disclaimer>Les performances passées ne garantissent pas les performances futures. Chaque situation est unique et ne constitue pas une recommandation.</Disclaimer>
        </div>
      </section>

      <CtaBand id={`story_${s.slug}`} title="Construisons votre propre stratégie." />
    </>
  );
}
