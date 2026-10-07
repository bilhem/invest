import type { ImageKey } from '@/lib/images';
import { OU_INVESTIR_A_DUBAI } from './insights/ou-investir-a-dubai';

/**
 * BF INSIGHTS — long-form articles.
 *
 * Articles are FINAL COPY supplied by the editorial team: the text is integrated as supplied (never summarised, shortened or reworded).
 * What lives here is structure only; the page shell (components/insights) is deliberately flexible: every article is a list of blocks,
 * so two articles can have very different shapes (figures first, a comparison, a methodology, a long quote…).
 *
 * To add an article: create ./insights/<slug>.ts (an `Article`), import it here and add it to ARTICLES.
 * Nothing is listed, indexed or put in the sitemap that is not in ARTICLES: there is no demonstration content.
 */

/** Inline markup allowed in any `text`: [label](/route or https://…) for links and **bold**. Nothing else. */
export type Block =
  /**
   * Section title. Listed in the table of contents (`toc: false` to leave it out; `short` is the shorter label shown there).
   * `id` overrides the anchor generated from the text. `num` (shown as 01, 02…) or `kicker` (« Introduction », « Conclusion »…) is the
   * small label set above the title when the supplied copy numbers or labels its sections; it is not part of the heading text.
   */
  | { type: 'h2'; text: string; id?: string; toc?: boolean; short?: string; num?: number; kicker?: string }
  | { type: 'h3'; text: string }
  /** `lead`: a larger opening paragraph. */
  | { type: 'p'; text: string; lead?: boolean }
  | { type: 'list'; items: string[]; ordered?: boolean }
  /** A key sentence of the article, set large in serif (not an attributed quotation). */
  | { type: 'statement'; text: string }
  /** A quotation (a sentence set in a framed block); attributed when `by` is given. */
  | { type: 'quote'; text: string; by?: string; source?: string }
  /** Key numbers staged as a row of large figures. Values are shown exactly as supplied (`unit`: set smaller, after the value). */
  | { type: 'figures'; items: { value: string; unit?: string; label: string; note?: string }[]; caption?: string }
  /** The recurring question of a section (« La question BF »): a short framed line, set in serif. */
  | { type: 'question'; label: string; text: string }
  /** An index of entries (a reading map): a title (linked when `href` is a route that exists), then labelled lines. */
  | { type: 'profiles'; items: { title: string; href?: string; rows: { label: string; text: string }[] }[]; caption?: string }
  /** A table. On phones each row becomes a labelled block (no horizontal scrolling). `first: 'label'` makes the first column a row title. */
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string; note?: string; first?: 'label' }
  /** Options side by side (stacked on phones). */
  | { type: 'compare'; columns: { title: string; points: string[] }[]; caption?: string }
  /** A methodology / process: numbered steps. */
  | { type: 'method'; title?: string; steps: { title: string; text?: string }[] }
  /** « BF Analysis »: a call-out that stands apart from the running text. */
  | { type: 'analysis'; title?: string; paragraphs: string[] }
  /** A small caveat set apart from the text. */
  | { type: 'note'; text: string }
  /** Only authorised pictures (registered in lib/images.ts, rights cleared). */
  | { type: 'image'; slot: ImageKey; caption?: string; ratio?: 'wide' | 'standard' }
  | { type: 'divider' };

export type ArticleCategory = 'Market' | 'Investment' | 'Areas' | 'Developers' | 'Guides';
export const ARTICLE_CATEGORIES: ArticleCategory[] = ['Market', 'Investment', 'Areas', 'Developers', 'Guides'];

/** A category with its own editorial page: its button on /insights leads there instead of filtering the list. */
export const CATEGORY_PAGES: Partial<Record<ArticleCategory, string>> = { Developers: '/insights/developers' };

export type ArticleSource = {
  label: string;
  url: string;
  /** What the source is used for, as supplied. */
  note?: string;
};

export type Article = {
  /** URL: /insights/<slug>. */
  slug: string;
  /** Primary category (card, breadcrumb section, Open Graph section). */
  category: ArticleCategory;
  /** Other categories the article also belongs to (it then also appears under their filter on /insights). */
  alsoIn?: ArticleCategory[];
  /** H1. */
  title: string;
  /** Meta title when it must differ from the H1 (the site template adds « | BF Properties »). */
  seoTitle?: string;
  /** Meta description, Open Graph description and hub excerpt. */
  description: string;
  /** Cover image: an authorised slot of lib/images.ts, used by the home teaser, the Open Graph card and the structured data (none: placeholder teaser, no share image). */
  image?: ImageKey;
  /** Optional standfirst shown under the H1 (supplied text). */
  standfirst?: string;
  /** ISO date (YYYY-MM-DD) of publication. */
  published: string;
  /** ISO date of the last revision, when there is one. */
  updated?: string;
  /** A real BF author only. When absent the byline is « BF Properties » (organisation): no invented identity. */
  author?: { name: string; role?: string };
  body: Block[];
  /** Official sources, as supplied. Shown under « Sources & méthodologie ». */
  sources: ArticleSource[];
  /** Editorial / methodology note, as supplied: shown after the sources, under `methodologyTitle` when there is one. */
  methodology?: string[];
  methodologyTitle?: string;
  /** Disclaimer, as supplied (kept visible, discreet). */
  disclaimer: string;
  /** Closing call to action. Defaults to the generic qualification CTA. */
  cta?: { title: string; text?: string; label?: string; href?: string };
  /** Links to routes that exist (never to a page that is not built). Shown in « Pour aller plus loin ». */
  links?: { label: string; href: string }[];
  /** Slugs of other articles. */
  related?: string[];
  /** Keep out of search engines and the sitemap (default: indexable). */
  noindex?: true;
};

/** « Investment / Areas »: the primary category followed by the others, as the supplied category line reads. */
export const categoryLabel = (a: Pick<Article, 'category' | 'alsoIn'>) => [a.category, ...(a.alsoIn ?? [])].join(' / ');

/** Byline when the article has no real, named BF author. */
export const INSIGHTS_AUTHOR = 'BF Properties';

/** The published library: final copy only, never placeholder articles. One file per article in ./insights/<slug>.ts. */
export const ARTICLES: Article[] = [OU_INVESTIR_A_DUBAI];

/** Plain text of a piece of inline markup: [label](href) → label, **bold** → bold. */
export const plainText = (text: string) => text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');

/** Every word of the article body (headings, text, lists, figures, tables…), markup removed. Used for the reading time and wordCount. */
export function articleText(a: Pick<Article, 'body'>): string {
  const parts: string[] = [];
  for (const b of a.body) {
    switch (b.type) {
      case 'h2': case 'h3': case 'p': case 'statement': case 'note': parts.push(b.text); break;
      case 'list': parts.push(...b.items); break;
      case 'quote': parts.push(b.text, b.by ?? ''); break;
      case 'question': parts.push(b.label, b.text); break;
      case 'profiles': b.items.forEach((it) => { parts.push(it.title); it.rows.forEach((r) => parts.push(r.label, r.text)); }); parts.push(b.caption ?? ''); break;
      case 'figures': b.items.forEach((f) => parts.push(f.value, f.unit ?? '', f.label, f.note ?? '')); parts.push(b.caption ?? ''); break;
      case 'table': parts.push(...b.head, ...b.rows.flat(), b.caption ?? '', b.note ?? ''); break;
      case 'compare': b.columns.forEach((c) => parts.push(c.title, ...c.points)); break;
      case 'method': parts.push(b.title ?? ''); b.steps.forEach((st) => parts.push(st.title, st.text ?? '')); break;
      case 'analysis': parts.push(b.title ?? '', ...b.paragraphs); break;
      case 'image': parts.push(b.caption ?? ''); break;
      case 'divider': break;
    }
  }
  return plainText(parts.join(' ')).replace(/\s+/g, ' ').trim();
}
export const articleWords = (a: Pick<Article, 'body'>) => (articleText(a).match(/\S+/g) ?? []).length;
/** Reading time in whole minutes (about 220 words a minute for French long-form), at least 1. Computed, never typed. */
export const readingMinutes = (a: Pick<Article, 'body'>) => Math.max(1, Math.round(articleWords(a) / 220));
