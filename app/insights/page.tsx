import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import InsightsExplorer from '@/components/InsightsExplorer';
import { DraftNotice } from '@/components/ui/Bits';
import { buildMetadata } from '@/lib/seo';
import { getArticles } from '@/lib/cms';
import { ARTICLE_CATEGORIES } from '@/lib/data/articles';

export const metadata = buildMetadata({
  title: 'BF Insights : analyses du marché immobilier de Dubai',
  description: 'Comprendre le marché. Mieux investir. Analyses de marché, stratégies d’investissement, quartiers, promoteurs et guides pour investisseurs à Dubai.',
  path: '/insights',
});

export default function Page() {
  const articles = getArticles();
  return (
    <>
      <PageHero
        image="hero-insights"
        title="Comprendre le marché. Mieux investir."
        crumbs={[{ label: 'Insights' }]}
      />
      {articles.some((a) => a.placeholder) && <DraftNotice>Articles de démonstration : les titres et contenus seront remplacés par des analyses réelles.</DraftNotice>}
      <section className="section">
        <div className="wrap">
          <InsightsExplorer articles={articles} categories={ARTICLE_CATEGORIES} />
        </div>
      </section>
      <CtaBand id="insights_page" title="Une question sur votre projet ?" text="Les analyses éclairent. La consultation les relie à votre situation." />
    </>
  );
}
