import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CtaBand from '@/components/ui/CtaBand';
import JsonLd from '@/components/ui/JsonLd';
import TrackEvent from '@/components/TrackEvent';
import ArticleBody from '@/components/ArticleBody';
import ArticleHero from '@/components/insights/ArticleHero';
import ArticleAside from '@/components/insights/ArticleAside';
import { Disclaimer } from '@/components/ui/Bits';
import { buildMetadata, abs } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { getArticle, getArticles, getRelatedArticles, getStory, isIndexable, isPublishable } from '@/lib/cms';
import { INSIGHTS_AUTHOR, INSIGHTS_PUBLICATION } from '@/lib/data/articles';
import { INSIGHT_CTA, INSIGHT_METHOD, INSIGHT_PAST_PERFORMANCE, INSIGHT_SOURCES } from '@/lib/data/insights';

type Params = { slug: string };

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const { publishedOn, reviewedOn } = INSIGHTS_PUBLICATION;
  return buildMetadata({
    title: a.title,
    description: a.standfirst,
    path: `/insights/${a.slug}`,
    noindex: !isIndexable(a),
    article: { section: a.category, ...(publishedOn ? { publishedTime: publishedOn } : {}), ...(reviewedOn ? { modifiedTime: reviewedOn } : {}) },
  });
}

/** The supplied call to action reads « Définir mon projet / faire analyser une opportunité » → the existing qualification CTA (/consultation). */
const CTA_LABEL = INSIGHT_CTA.split(' / ')[0] ?? 'Définir mon projet';

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const related = getRelatedArticles(a);
  const franck = a.story ? getStory('franck-peninsula-five') : undefined;
  const story = franck && isPublishable(franck) ? franck : undefined;
  const { publishedOn, reviewedOn } = INSIGHTS_PUBLICATION;

  // Article + (in the hero) BreadcrumbList. No image, author or date is invented: the dates appear once they are set in INSIGHTS_PUBLICATION.
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.standfirst,
    inLanguage: 'fr',
    articleSection: a.category,
    author: { '@type': 'Organization', name: INSIGHTS_AUTHOR, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(`/insights/${a.slug}`) },
    ...(publishedOn ? { datePublished: publishedOn } : {}),
    ...(reviewedOn ? { dateModified: reviewedOn } : {}),
  };

  return (
    <>
      <JsonLd data={ld} />
      <ArticleHero a={a} />

      <div className="py-14 md:py-20 lg:py-24">
        <div className="wrap">
          <div className="ed-grid gap-y-14">
            <article className="col-span-12 lg:col-span-7">
              <ArticleBody blocks={a.body} />
              <TrackEvent event="article_read" params={{ article: a.slug }} when="visible" />

              <section aria-label="Sources et méthodologie" className="mt-14 max-w-[40rem] border-t border-charcoal/10 pt-5 text-xs leading-relaxed text-stone">
                <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.18em]">Sources &amp; méthodologie</h2>
                <p className="mt-2">Sources : {a.sources ?? INSIGHT_SOURCES}</p>
                <p className="mt-1">{INSIGHT_METHOD}</p>
              </section>
              <div className="max-w-[40rem]">
                <Disclaimer>
                  Contenu à visée informative. Il ne constitue pas un conseil juridique, fiscal ou financier. {INSIGHT_PAST_PERFORMANCE}
                </Disclaimer>
              </div>
            </article>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <ArticleAside a={a} related={related} story={story} />
            </div>
          </div>
        </div>
      </div>

      <CtaBand id={`article_${a.slug}`} title="Cette analyse soulève une question pour votre projet ?" label={CTA_LABEL} />
    </>
  );
}
