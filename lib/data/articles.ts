import type { ImageKey } from '@/lib/images';
import { INVESTIR_A_DUBAI } from './insights/investir-a-dubai';
import { OU_INVESTIR_A_DUBAI } from './insights/ou-investir-a-dubai';
import { QUARTIERS_DEMANDE_LOCATIVE } from './insights/quartiers-les-plus-demandes-location-dubai';
import { INVESTIR_BUREAUX_DUBAI_2026 } from './insights/investir-bureaux-dubai-2026';
import { COMBIEN_FAUT_IL_INVESTIR_DUBAI } from './insights/combien-faut-il-investir-dubai';
import { RENDEMENT_LOCATIF_DUBAI_2026 } from './insights/rendement-locatif-dubai-2026';
import { ACHETER_BIEN_IMMOBILIER_DUBAI_2026 } from './insights/acheter-bien-immobilier-dubai-2026';

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
  /**
   * Key numbers staged as a row of large figures. Values are shown exactly as supplied (`prefix`: « Environ », « Plus de »… set smaller before the value;
   * `unit`: set smaller after it). `label` may be left out when the figures stand alone (a series of amounts). `columns: 2`: two per row from tablets up
   * (four wide amounts such as « 2 000 000 AED » do not fit side by side).
   */
  | { type: 'figures'; items: { value: string; prefix?: string; unit?: string; label?: string; note?: string }[]; caption?: string; columns?: 2 }
  /**
   * A ranked list of figures (a top 10): rank, name, where it is, and the figure with its unit. A thin bar scaled on the largest value makes the
   * volumes comparable at a glance (the figures themselves are always written out). Items are shown in the order given.
   */
  | {
      type: 'ranking';
      /** `prefix`: « environ », « Près de »… set small before the value. */
      items: { name: string; place?: string; prefix?: string; value: string; unit?: string }[];
      /** Rank numbers 01, 02… in front of the names (default true). Off for a series that is not a ranking (shares, pipelines). */
      numbered?: boolean;
      /** The value a full bar stands for (100 for percentages). Default: the largest value of the list. */
      scale?: number;
      caption?: string;
    }
  /**
   * A call-to-action panel set inside the text (dark, full column): eyebrow, title, a few paragraphs / lists, then one or two buttons.
   * `id` is the analytics id (suffixed -primary / -secondary). Both `href` must be routes that exist.
   */
  | {
      type: 'ctaPanel';
      id: string;
      eyebrow?: string;
      title: string;
      content: ({ type: 'p'; text: string } | { type: 'list'; items: string[] })[];
      primary: { label: string; href: string };
      secondary?: { label: string; href: string };
    }
  /** The recurring question of a section (« La question BF »): a short framed line, set in serif. */
  | { type: 'question'; label: string; text: string }
  /** An index of entries (a reading map): a title (linked when `href` is a route that exists), then labelled lines. */
  | { type: 'profiles'; items: { title: string; href?: string; rows: { label: string; text: string }[] }[]; caption?: string }
  /** A table. On phones each row becomes a labelled block (no horizontal scrolling). `first: 'label'` makes the first column a row title. */
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string; note?: string; first?: 'label' }
  /** Options side by side (stacked on phones). */
  | { type: 'compare'; columns: { title: string; points: string[] }[]; caption?: string }
  /** A methodology / process: numbered steps. `dark`: set on a charcoal panel, two columns from tablets up (a long method, e.g. ten steps). */
  | { type: 'method'; title?: string; steps: { title: string; text?: string }[]; dark?: boolean }
  /**
   * Links to other pages of the site, set apart in the text (« À lire aussi » unless `label` is given). Each `title` is the real title of the page it
   * leads to and each `href` a route that exists.
   */
  | { type: 'readMore'; label?: string; items: { title: string; href: string }[] }
  /** Frequently asked questions: the question (a heading) and its answer paragraphs. Also published as FAQPage structured data. */
  | { type: 'faq'; items: { q: string; a: string[] }[] }
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
  /** Disclaimer, as supplied (kept visible, discreet): one paragraph, or several. */
  disclaimer: string | string[];
  /** Closing call to action band. Defaults to the generic qualification CTA; `false` when the article carries its own call to action (a `ctaPanel` block), so the page is not closed twice. */
  cta?: { title: string; text?: string; label?: string; href?: string } | false;
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
/** Order matters for equal publication dates: the first of the list is shown first (the guide, the district reading, the rental-demand analysis, the office market, the budgets, then the rental yield). */
export const ARTICLES: Article[] = [INVESTIR_A_DUBAI, OU_INVESTIR_A_DUBAI, QUARTIERS_DEMANDE_LOCATIVE, INVESTIR_BUREAUX_DUBAI_2026, COMBIEN_FAUT_IL_INVESTIR_DUBAI, RENDEMENT_LOCATIF_DUBAI_2026, ACHETER_BIEN_IMMOBILIER_DUBAI_2026];

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
      case 'figures': b.items.forEach((f) => parts.push(f.prefix ?? '', f.value, f.unit ?? '', f.label ?? '', f.note ?? '')); parts.push(b.caption ?? ''); break;
      case 'ranking': b.items.forEach((it) => parts.push(it.name, it.place ?? '', it.prefix ?? '', it.value, it.unit ?? '')); parts.push(b.caption ?? ''); break;
      case 'ctaPanel':
        parts.push(b.eyebrow ?? '', b.title);
        b.content.forEach((c) => (c.type === 'p' ? parts.push(c.text) : parts.push(...c.items)));
        parts.push(b.primary.label, b.secondary?.label ?? '');
        break;
      case 'table': parts.push(...b.head, ...b.rows.flat(), b.caption ?? '', b.note ?? ''); break;
      case 'compare': b.columns.forEach((c) => parts.push(c.title, ...c.points)); break;
      case 'method': parts.push(b.title ?? ''); b.steps.forEach((st) => parts.push(st.title, st.text ?? '')); break;
      case 'faq': b.items.forEach((it) => parts.push(it.q, ...it.a)); break;
      case 'readMore': break;
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
