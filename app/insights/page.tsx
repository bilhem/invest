import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import InsightsExplorer from '@/components/InsightsExplorer';
import { buildMetadata } from '@/lib/seo';
import { getArticles, getDevelopersPage } from '@/lib/cms';
import { ARTICLE_CATEGORIES, CATEGORY_PAGES } from '@/lib/data/articles';
import { DEVELOPERS_PATH } from '@/lib/data/developers';

export const metadata = buildMetadata({
  title: 'BF Insights : analyses du marché immobilier de Dubai',
  description: 'Comprendre le marché. Mieux investir. Analyses de marché, stratégies d’investissement, quartiers, promoteurs et guides pour investisseurs à Dubai.',
  path: '/insights',
});

export default function Page() {
  const articles = getArticles().map(({ slug, category, title, standfirst, readingMinutes }) => ({ slug, category, title, standfirst, readingMinutes }));
  const dev = getDevelopersPage();
  // Editorial verticals with a page of their own, built from that page's own supplied copy.
  const featured = [{ eyebrow: dev.hero.eyebrow, title: dev.hero.title, text: dev.hero.intro[0], href: DEVELOPERS_PATH, cta: 'Lire l’analyse' }];
  return (
    <>
      <PageHero
        image="hero-insights"
        title="Comprendre le marché. Mieux investir."
        crumbs={[{ label: 'Insights' }]}
      />
      <section className="section">
        <div className="wrap">
          <InsightsExplorer articles={articles} categories={ARTICLE_CATEGORIES} categoryLinks={CATEGORY_PAGES} featured={featured} />
        </div>
      </section>
      <CtaBand id="insights_page" title="Une question sur votre projet ?" text="Les analyses éclairent. La consultation les relie à votre situation." />
    </>
  );
}
