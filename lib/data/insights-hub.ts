import type { ArticleCategory } from '@/lib/data/articles';
import type { ImageKey } from '@/lib/images';

/**
 * /insights (the hub page): editorial layout only. Nothing here changes an article, its URL or its metadata.
 *
 * The pictures are the site's own approved visuals (lib/images.ts, rights « cleared »), picked per article for this page. They do NOT replace an article's own cover `image`
 * (Open Graph, JSON-LD), and the home page keeps its own teaser visuals (HOME_TEASER_IMAGES in lib/content.ts).
 */

/** The article set on the cover (« À la une »). Falls back to the most recent article when the slug is not published. */
export const FEATURED_SLUG = 'investir-a-dubai';

export type HubVisual = {
  image: ImageKey;
  /** Wording of the alt text for this use; defaults to the slot's own. */
  alt?: string;
  focal?: string;
};

/** One visual per published article (4:3 cards, 3:2 cover). An article without an entry gets the neutral placeholder rather than a picture that does not fit. */
export const HUB_VISUALS: Record<string, HubVisual> = {
  'investir-a-dubai': { image: 'area-dubai-creek-harbour', focal: '58% 50%' },
  'ou-investir-a-dubai': { image: 'area-downtown-dubai' },
  'quartiers-les-plus-demandes-location-dubai': {
    image: 'hills-hero',
    alt: 'Immeubles résidentiels autour d’un grand parc, vus en hauteur',
  },
  'investir-bureaux-dubai-2026': {
    image: 'downtown-centrality',
    alt: 'Façade vitrée d’une tour de Dubai face au Burj Khalifa, avec la skyline à l’horizon',
  },
  'combien-faut-il-investir-dubai': { image: 'creek-downtown-view' },
  'rendement-locatif-dubai-2026': {
    image: 'citywalk-crestlane',
    alt: 'Immeubles résidentiels face à un jardin paysager et à des bassins d’eau',
  },
  'acheter-bien-immobilier-dubai-2026': { image: 'islands-residential' },
};

/** The « dossier » shown after the grid: the developers page (/insights/developers), which is a page of its own, not an article. */
export const DEVELOPERS_VISUAL: HubVisual = {
  image: 'citywalk-hero',
  alt: 'Vue aérienne d’un ensemble résidentiel de Dubai : immeubles, jardins paysagers et bassins',
};

export type HubFilterKey = 'all' | 'market' | 'strategies' | 'areas' | 'guides';

/**
 * Filters shown on the page, in this order. `category` is the article category (lib/data/articles.ts) the filter matches, as main or secondary category.
 * An article whose category has no filter (e.g. « Developers ») only appears under « Toutes les analyses ».
 */
export const HUB_FILTERS: { key: HubFilterKey; label: string; category?: ArticleCategory }[] = [
  { key: 'all', label: 'Toutes les analyses' },
  { key: 'market', label: 'Marché', category: 'Market' },
  { key: 'strategies', label: 'Stratégies', category: 'Investment' },
  { key: 'areas', label: 'Quartiers', category: 'Areas' },
  { key: 'guides', label: 'Guides', category: 'Guides' },
];

/** French label of an article's main category (the data keeps its English keys). */
export const CATEGORY_FR: Record<ArticleCategory, string> = {
  Market: 'Marché',
  Investment: 'Stratégies',
  Areas: 'Quartiers',
  Developers: 'Développeurs',
  Guides: 'Guides',
};

/**
 * Headline for a card: the part of the title before « : » (or after the question mark of a title that asks one). The full title is unchanged everywhere else
 * (article page, metadata) and `rest` is kept for screen readers, so no wording is lost.
 */
export function splitTitle(title: string): { headline: string; rest: string } {
  const colon = title.indexOf(' : ');
  if (colon >= 12) return { headline: title.slice(0, colon), rest: title.slice(colon) };
  const q = title.indexOf(' ? ');
  if (q >= 12) return { headline: title.slice(0, q + 2), rest: title.slice(q + 2) };
  return { headline: title, rest: '' };
}

export const minutesLabel = (n: number) => `${n} min de lecture`;
