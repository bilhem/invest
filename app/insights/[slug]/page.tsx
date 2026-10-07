import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CtaBand from '@/components/ui/CtaBand';
import JsonLd from '@/components/ui/JsonLd';
import TrackEvent from '@/components/TrackEvent';
import ArticleHero from '@/components/insights/ArticleHero';
import ArticleToc from '@/components/insights/ArticleToc';
import ArticleBody from '@/components/insights/ArticleBody';
import ArticleMore from '@/components/insights/ArticleMore';
import ArticleSources from '@/components/insights/ArticleSources';
import { tocFrom, withHeadingIds } from '@/components/insights/inline';
import { buildMetadata, abs } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { getArticle, getArticles, getRelatedArticles } from '@/lib/cms';
import { INSIGHTS_AUTHOR, articleWords, plainText } from '@/lib/data/articles';
import { getImage } from '@/lib/images';

type Params = { slug: string };

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const cover = a.image ? getImage(a.image) : undefined;
  return buildMetadata({
    title: a.seoTitle ?? a.title,
    description: a.description,
    path: `/insights/${a.slug}`,
    noindex: a.noindex,
    image: cover && 'src' in cover && cover.src ? { src: cover.src, width: cover.width, height: cover.height, alt: cover.alt } : undefined,
    article: { section: a.category, publishedTime: a.published, modifiedTime: a.updated ?? a.published },
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

  const body = withHeadingIds(a.body);
  const toc = [...tocFrom(body), ...(a.sources.length || a.methodology?.length ? [{ id: 'sources', label: 'Sources & méthodologie' }] : [])];
  const related = getRelatedArticles(a);
  const cover = a.image ? getImage(a.image) : undefined;

  // Article (the BreadcrumbList is emitted by the hero). Author: the organisation, unless a real BF author is set on the article.
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    inLanguage: 'fr',
    articleSection: [a.category, ...(a.alsoIn ?? [])],
    datePublished: a.published,
    dateModified: a.updated ?? a.published,
    wordCount: articleWords(a),
    ...(cover && 'src' in cover && cover.src ? { image: abs(cover.src) } : {}),
    author: a.author ? { '@type': 'Person', name: a.author.name } : { '@type': 'Organization', name: INSIGHTS_AUTHOR, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntityOfPage: { '@type': 'WebPage', '@id': abs(`/insights/${a.slug}`) },
    ...(a.sources.length ? { citation: a.sources.map((s) => ({ '@type': 'CreativeWork', name: s.label, url: s.url })) } : {}),
  };

  // FAQPage structured data when the article has a FAQ block: the questions and answers of the page, as written.
  const faq = a.body.flatMap((b) => (b.type === 'faq' ? b.items : []));
  const faqLd = faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: 'fr',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: plainText(f.q), acceptedAnswer: { '@type': 'Answer', text: plainText(f.a.join(' ')) } })),
      }
    : null;

  const cta = a.cta === false ? null : a.cta ?? { title: 'Cette analyse soulève une question pour votre projet ?' };

  return (
    <>
      <JsonLd data={ld} />
      {faqLd && <JsonLd data={faqLd} />}
      <ArticleHero a={a} />

      <div className="py-14 md:py-20 lg:py-28">
        <div className="wrap">
          <div className="ed-grid gap-y-10">
            <div className="col-span-12 lg:col-span-3"><ArticleToc items={toc} /></div>
            <article className="col-span-12 lg:col-span-9">
              <ArticleBody blocks={body} />
              <ArticleMore a={a} related={related} />
              <ArticleSources a={a} />
              <TrackEvent event="article_read" params={{ article: a.slug }} when="visible" />
            </article>
          </div>
        </div>
      </div>

      {cta && <CtaBand id={`article_${a.slug}`} title={cta.title} text={cta.text} label={cta.label} href={cta.href} />}
    </>
  );
}
