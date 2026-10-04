import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import JsonLd from '@/components/ui/JsonLd';
import TrackEvent from '@/components/TrackEvent';
import ArticleBody from '@/components/ArticleBody';
import BFImage from '@/components/BFImage';
import { Disclaimer, DraftNotice } from '@/components/ui/Bits';
import { buildMetadata, abs } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { getArticle, getArticles } from '@/lib/cms';

type Params = { slug: string };

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return buildMetadata({ title: a.title, description: a.excerpt, path: `/insights/${a.slug}`, noindex: a.placeholder });
}

const fmt = (iso: string | null, fallback: string) =>
  iso ? new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : fallback;

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const related = getArticles().filter((x) => x.slug !== a.slug).slice(0, 2);

  const ld = a.published && !a.placeholder ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.excerpt,
    datePublished: a.published,
    dateModified: a.updated ?? a.published,
    author: { '@type': 'Organization', name: a.author },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntityOfPage: abs(`/insights/${a.slug}`),
  } : null;

  return (
    <>
      {ld && <JsonLd data={ld} />}
      <PageHero
        image={a.img}
        eyebrow={a.category}
        title={a.title}
        crumbs={[{ label: 'Insights', href: '/insights' }, { label: a.category }]}
      />
      {a.placeholder && <DraftNotice>Article de démonstration : contenu à remplacer.</DraftNotice>}

      <article className="section">
        <div className="wrap max-w-3xl">
          <p className="border-b border-stone-light/70 pb-6 text-sm text-stone">
            {a.author} — Publié le {fmt(a.published, '[date de publication]')}
            {' '}— Mis à jour le {fmt(a.updated, '[date de mise à jour]')} — Lecture : {a.readingTime}
          </p>
          <div className="mt-10"><ArticleBody blocks={a.body} /></div>
          <TrackEvent event="article_read" params={{ article: a.slug }} when="visible" />
          <Disclaimer>Contenu à visée informative. Il ne constitue pas un conseil juridique, fiscal ou financier.</Disclaimer>
        </div>
      </article>

      <section className="section bg-ivory-200">
        <div className="wrap">
          <h2 className="font-serif text-3xl">À lire aussi</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {related.map((r) => (
              <Link key={r.slug} href={`/insights/${r.slug}`} className="group block">
                <div className="relative aspect-[3/2]"><BFImage slot={r.img} sizes="(min-width:768px) 50vw, 100vw" className="transition-transform duration-[1200ms] group-hover:scale-[1.03]" /></div>
                <p className="mt-4 text-xs text-champagne-dark">{r.category}</p>
                <h3 className="mt-1 font-serif text-2xl group-hover:text-champagne-dark">{r.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand id={`article_${a.slug}`} title="Cette analyse soulève une question pour votre projet ?" />
    </>
  );
}
