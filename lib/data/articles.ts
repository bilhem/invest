import { INSIGHT_ARTICLES } from './insights';

/**
 * BF Insights articles. The 30 articles of the « SEO 30 Articles V1 » pack live in ./insights.ts (supplied copy, verbatim).
 * Block types let editors compose tables, key figures and quotes without touching components.
 */
export type Block =
  | { type: 'h2'; text: string }
  /** `bf`: « Le regard BF Properties » (pull statement). `note`: tax caveat, shown as a call-out. */
  | { type: 'p'; text: string; variant?: 'bf' | 'note' }
  /** A chain written with arrows (« Stratégie → marché → … »), shown as a sequence. */
  | { type: 'flow'; text: string }
  | { type: 'quote'; text: string; by: string }
  | { type: 'figures'; items: { label: string; value: string }[] }
  | { type: 'table'; head: string[]; rows: string[][] };

export type ArticleCategory = 'Market' | 'Investment' | 'Areas' | 'Developers' | 'Guides';
export const ARTICLE_CATEGORIES: ArticleCategory[] = ['Market', 'Investment', 'Areas', 'Developers', 'Guides'];

/** A category with its own editorial page: its button on /insights leads there instead of filtering the list. */
export const CATEGORY_PAGES: Partial<Record<ArticleCategory, string>> = { Developers: '/insights/developers' };

export type Article = {
  /** Position in the supplied pack (01–30): the order of the hub. */
  n: number;
  slug: string;
  category: ArticleCategory;
  /** H1 and meta title, as supplied. */
  title: string;
  /** The supplied one-sentence summary: standfirst on the page, meta description, hub excerpt. */
  standfirst: string;
  /** Computed from the word count at generation time (never entered by hand). */
  readingMinutes: number;
  body: Block[];
  /** Slugs of other articles (contextual « Pour aller plus loin »). */
  related: string[];
  /** Links to routes that exist (never to a page that is not built). */
  links?: { label: string; href: string }[];
  /** True when the Franck / Peninsula Five Investor Story is relevant (off-plan, payment plan, resale, unit choice, Geneva). */
  story?: true;
  /** Overrides INSIGHT_SOURCES for this article. */
  sources?: string;
  /** Keeps this article noindex and out of the sitemap even once `INSIGHTS_PUBLICATION.reviewedOn` is set. */
  hold?: true;
};

/**
 * PUBLICATION GATE for BF Insights.
 * The supplied sources are « à valider avant publication » and market figures are time-sensitive (DLD Q1 2026, DLD Rental 2025,
 * Service Charge Index, Al Jaddaf freehold…). So the articles are noindex and absent from the sitemap until `reviewedOn` is set.
 *   - reviewedOn: ISO date (YYYY-MM-DD) on which the figures and sources were checked. Shown as « Dernière revue », used as dateModified,
 *     and it is what turns indexing on. null = « [date] » placeholder on the page and noindex.
 *   - publishedOn: ISO date of first publication (datePublished). null = not shown, not in the structured data.
 * Set `hold: true` on an article to keep it noindex while the others go live.
 */
export const INSIGHTS_PUBLICATION: { reviewedOn: string | null; publishedOn: string | null } = {
  reviewedOn: null,
  publishedOn: null,
};

export const INSIGHTS_AUTHOR = 'BF Properties';

export const isIndexable = (a: Pick<Article, 'hold'>) => INSIGHTS_PUBLICATION.reviewedOn !== null && !a.hold;

export const ARTICLES: Article[] = INSIGHT_ARTICLES;
