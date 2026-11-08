import CtaBand from '@/components/ui/CtaBand';
import BFImage from '@/components/BFImage';
import InsightsExplorer, { type HubCard } from '@/components/InsightsExplorer';
import HubCover from '@/components/insights/HubCover';
import HubDossier from '@/components/insights/HubDossier';
import { buildMetadata } from '@/lib/seo';
import { getArticles, getDevelopersPage } from '@/lib/cms';
import { readingMinutes, type Article } from '@/lib/data/articles';
import { DEVELOPERS_PATH } from '@/lib/data/developers';
import { CATEGORY_FR, DEVELOPERS_VISUAL, FEATURED_SLUG, HUB_FILTERS, HUB_VISUALS, splitTitle, type HubVisual } from '@/lib/data/insights-hub';
import type { ImageKey } from '@/lib/images';

export const metadata = buildMetadata({
  title: 'Marché immobilier de Dubai : analyses et guides pour investir',
  description: 'Analyses de marché, stratégies d’investissement, quartiers, promoteurs et guides pour comprendre le marché immobilier de Dubai et mieux investir.',
  path: '/insights',
});

/** The picture chosen for this page, else the article's own cover, else the neutral placeholder: nothing is invented to fill a card. */
const visualOf = (a: Article): HubVisual => HUB_VISUALS[a.slug] ?? { image: (a.image ?? 'insight-1') as ImageKey };

export default function Page() {
  // Published articles only (final copy). One is on the cover; the others are listed below, in the order of getArticles().
  const articles = getArticles();
  const cover = articles.find((a) => a.slug === FEATURED_SLUG) ?? articles[0];
  const cards: HubCard[] = articles
    .filter((a) => a !== cover)
    .map((a) => {
      const v = visualOf(a);
      const cats = [a.category, ...(a.alsoIn ?? [])];
      const { headline, rest } = splitTitle(a.title);
      return {
        slug: a.slug,
        headline,
        rest,
        category: CATEGORY_FR[a.category],
        readingMinutes: readingMinutes(a),
        filters: HUB_FILTERS.filter((f) => f.category && cats.includes(f.category)).map((f) => f.key),
        media: <BFImage slot={v.image} alt={v.alt} focal={v.focal} sizes="(min-width: 1280px) 365px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />,
      };
    });

  const dev = getDevelopersPage();
  return (
    <>
      <HubCover
        cover={cover && { slug: cover.slug, title: cover.title, description: cover.description, category: CATEGORY_FR[cover.category], readingMinutes: readingMinutes(cover), visual: visualOf(cover) }}
      />
      <section className="bg-ivory py-16 md:py-24">
        <div className="wrap">
          <InsightsExplorer cards={cards} />
        </div>
      </section>
      <HubDossier d={{ eyebrow: dev.hero.eyebrow, title: dev.hero.title, text: dev.hero.intro[0], href: DEVELOPERS_PATH, cta: 'Lire l’analyse', visual: DEVELOPERS_VISUAL }} />
      <CtaBand id="insights_page" title="Une question sur votre projet ?" text="Les analyses éclairent. La consultation les relie à votre situation." />
    </>
  );
}
