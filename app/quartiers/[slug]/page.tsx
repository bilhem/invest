import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import MapSlot from '@/components/ui/MapSlot';
import JsonLd from '@/components/ui/JsonLd';
import TrackEvent from '@/components/TrackEvent';
import BFImage from '@/components/BFImage';
import { Disclaimer } from '@/components/ui/Bits';
import { buildMetadata, abs } from '@/lib/seo';
import { getArea, getAreas, getStory } from '@/lib/cms';

type Params = { slug: string };

export function generateStaticParams() {
  return getAreas().map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) return {};
  return buildMetadata({
    title: `${a.name} : analyse pour investisseur`,
    description: `${a.tagline} ${a.summary}`,
    path: `/quartiers/${a.slug}`,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArea(slug);
  if (!a) notFound();
  const story = a.storySlug ? getStory(a.storySlug) : undefined;
  const others = getAreas().filter((x) => x.slug !== a.slug).slice(0, 3);

  const rows: [string, string][] = [
    ['Vue d’ensemble', a.overview],
    ['Plan directeur', a.masterplan],
    ['Situation', a.location],
    ['Connectivité', a.connectivity],
    ['Art de vivre', a.lifestyle],
    ['Marché immobilier', a.market],
    ['Marché locatif', a.rental],
    ['Projets en cours', a.pipeline],
  ];

  const placeLd = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: a.name,
    description: a.summary,
    url: abs(`/quartiers/${a.slug}`),
    geo: { '@type': 'GeoCoordinates', latitude: a.coords.lat, longitude: a.coords.lng },
  };

  return (
    <>
      <TrackEvent event="area_viewed" params={{ area: a.slug }} />
      <JsonLd data={placeLd} />
      <PageHero
        image={a.img}
        title={a.name}
        subtitle={a.tagline}
        crumbs={[{ label: 'Quartiers', href: '/quartiers' }, { label: a.name }]}
      />

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[1.5fr_0.8fr] lg:gap-20">
          <div>
            <dl>
              {rows.map(([k, v]) => (
                <div key={k} className="grid gap-2 border-t border-stone-light/70 py-7 md:grid-cols-[0.5fr_1fr] md:gap-10">
                  <dt className="font-serif text-2xl">{k}</dt>
                  <dd className="leading-relaxed text-charcoal/75">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <MapSlot name={a.name} lat={a.coords.lat} lng={a.coords.lng} />
            <div className="border-t border-charcoal/30 pt-5">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-stone">Profils de biens</h2>
              <ul className="mt-3 space-y-1.5 text-sm">{a.profiles.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
            <div className="border-t border-charcoal/30 pt-5">
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-stone">Promoteurs clés</h2>
              <ul className="mt-3 space-y-1.5 text-sm">{a.developers.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
            <ul className="flex flex-wrap gap-2" aria-label="Profils d’investissement">
              {a.tags.map((t) => <li key={t} className="border border-stone-light px-3 py-1 text-xs text-charcoal/70">{t}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section bg-ivory-200">
        <div className="wrap">
          <h2 className="h-section max-w-3xl">Considérations d’investissement</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h3 className="font-serif text-2xl text-champagne-dark">Points forts potentiels</h3>
              <ul className="mt-5 space-y-3 text-charcoal/80">
                {a.strengths.map((s) => <li key={s} className="flex gap-3"><span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-champagne" />{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl">Points d’attention</h3>
              <ul className="mt-5 space-y-3 text-charcoal/80">
                {a.considerations.map((s) => <li key={s} className="flex gap-3"><span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-charcoal/40" />{s}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-14 border-l-2 border-champagne bg-ivory p-8 md:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone">Le regard de BF Properties</p>
            <p className="mt-4 max-w-3xl font-serif text-2xl leading-snug">{a.bfView}</p>
          </div>
          <Disclaimer>Analyse qualitative à visée informative, sans donnée chiffrée vérifiée à ce stade. Elle ne constitue pas un conseil financier et ne garantit aucune performance.</Disclaimer>
        </div>
      </section>

      {story && (
        <section className="section">
          <div className="wrap grid items-center gap-10 md:grid-cols-2">
            <div className="relative aspect-[4/3]"><BFImage slot={story.img} sizes="(min-width:768px) 50vw, 100vw" /></div>
            <div>
              <h2 className="h-section">Un parcours d’investisseur ici</h2>
              <p className="mt-4 text-charcoal/75">{story.name}, {story.country} : {story.strategy}.</p>
              <Link href={`/investor-stories/${story.slug}`} className="btn btn-outline-dark mt-8">Découvrir son histoire</Link>
            </div>
          </div>
        </section>
      )}

      <section className="section pt-0">
        <div className="wrap">
          <h2 className="font-serif text-2xl">Autres quartiers</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/quartiers/${o.slug}`} className="group relative block aspect-[4/3] overflow-hidden text-ivory">
                  <BFImage slot={o.img} overlay="soft" sizes="(min-width:640px) 33vw, 100vw" className="transition-transform duration-[1200ms] group-hover:scale-[1.04]" />
                  <span className="absolute inset-x-0 bottom-0 p-5 font-serif text-2xl">{o.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand id={`area_${a.slug}`} title="Ce quartier correspond-il à votre stratégie ?" label="En parler avec BF Properties" />
    </>
  );
}
