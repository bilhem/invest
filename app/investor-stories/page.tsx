import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import BFImage from '@/components/BFImage';
import { DraftNotice } from '@/components/ui/Bits';
import { buildMetadata } from '@/lib/seo';
import { getStories } from '@/lib/cms';

export const metadata = buildMetadata({
  title: 'Investor Stories',
  description: 'Découvrez comment des investisseurs ont abordé leur projet immobilier à Dubai avec BF Properties : situation, options étudiées, décision et suivi.',
  path: '/investor-stories',
});

export default function Page() {
  const stories = getStories();
  const hasDraft = stories.some((s) => s.placeholder);
  return (
    <>
      <PageHero
        image="hero-stories"
        title="Des stratégies réelles. Des parcours différents."
        subtitle="Découvrez comment des investisseurs ont abordé leur projet immobilier à Dubai avec BF Properties."
        crumbs={[{ label: 'Investor Stories' }]}
      />
      {hasDraft && <DraftNotice>Contenu de démonstration : les parcours et chiffres ci-dessous seront remplacés par des cas réels, vérifiés et approuvés avant publication.</DraftNotice>}
      <section className="section">
        <div className="wrap grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <article key={s.slug} className="group flex flex-col bg-white">
              <div className="relative aspect-[4/3]">
                <BFImage slot={s.img} sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw" className="transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-serif text-2xl">{s.name}</h2>
                <p className="text-sm text-stone">Investisseur — {s.country}</p>
                <dl className="mt-5 space-y-2 border-t border-stone-light/60 pt-4 text-sm">
                  <Row k="Stratégie" v={s.strategy} />
                  <Row k="Quartier" v={s.areaName} />
                  <Row k="Investissement" v={s.acquisition.price} />
                </dl>
                <Link href={`/investor-stories/${s.slug}`} className="mt-6 text-sm font-medium text-champagne-dark underline-offset-4 hover:underline">Découvrir son histoire</Link>
              </div>
            </article>
          ))}
        </div>
        <p className="wrap mt-10 text-xs text-stone">Les parcours ne sont pas classés. Les performances passées ne garantissent pas les performances futures.</p>
      </section>
      <CtaBand id="stories_page" title="Construisons votre propre stratégie." />
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4"><dt className="text-stone">{k}</dt><dd className="text-right">{v}</dd></div>
  );
}
