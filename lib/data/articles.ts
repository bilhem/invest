import type { ImageKey } from '@/lib/images';

/**
 * ARTICLES — demonstration content. `placeholder: true` articles are noindex and absent from the sitemap.
 * Block types let editors compose tables, key figures and quotes without touching components.
 */
export type Block =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'quote'; text: string; by: string }
  | { type: 'figures'; items: { label: string; value: string }[] }
  | { type: 'table'; head: string[]; rows: string[][] };

export type ArticleCategory = 'Market' | 'Investment' | 'Areas' | 'Developers' | 'Guides';
export const ARTICLE_CATEGORIES: ArticleCategory[] = ['Market', 'Investment', 'Areas', 'Developers', 'Guides'];

/** A category with its own editorial page: its button on /insights leads there instead of filtering the list. */
export const CATEGORY_PAGES: Partial<Record<ArticleCategory, string>> = { Developers: '/insights/developers' };

export type Article = {
  slug: string;
  placeholder: boolean;
  category: ArticleCategory;
  title: string;
  excerpt: string;
  img: ImageKey;
  published: string | null; // ISO date, null while a draft
  updated: string | null;
  readingTime: string;
  author: string;
  body: Block[];
};

export const ARTICLES: Article[] = [
  {
    slug: 'article-1',
    placeholder: true,
    category: 'Market',
    title: '[Titre de l’analyse de marché]',
    excerpt: '[Résumé en deux phrases de l’analyse.]',
    img: 'insight-1',
    published: null,
    updated: null,
    readingTime: '[X] min',
    author: 'BF Properties',
    body: [
      { type: 'p', text: '[Introduction : poser la question à laquelle l’article répond.]' },
      { type: 'h2', text: '[Premier angle d’analyse]' },
      { type: 'p', text: '[Paragraphe d’analyse. Toute donnée chiffrée doit citer sa source.]' },
      { type: 'figures', items: [{ label: '[Indicateur 1]', value: '[X]' }, { label: '[Indicateur 2]', value: '[X]' }, { label: '[Indicateur 3]', value: '[X]' }] },
      { type: 'h2', text: '[Deuxième angle d’analyse]' },
      { type: 'table', head: ['[Critère]', '[Option A]', '[Option B]'], rows: [['[Ligne 1]', '[…]', '[…]'], ['[Ligne 2]', '[…]', '[…]']] },
      { type: 'quote', text: '[Citation d’un expert ou d’un document source.]', by: '[Source]' },
      { type: 'p', text: '[Conclusion et mise en perspective pour l’investisseur.]' },
    ],
  },
  {
    slug: 'article-2',
    placeholder: true,
    category: 'Guides',
    title: '[Titre du guide investisseur]',
    excerpt: '[Résumé en deux phrases du guide.]',
    img: 'insight-2',
    published: null,
    updated: null,
    readingTime: '[X] min',
    author: 'BF Properties',
    body: [
      { type: 'p', text: '[Introduction du guide.]' },
      { type: 'h2', text: '[Première partie]' },
      { type: 'p', text: '[Contenu pédagogique.]' },
    ],
  },
  {
    slug: 'article-3',
    placeholder: true,
    category: 'Areas',
    title: '[Titre de l’analyse de quartier]',
    excerpt: '[Résumé en deux phrases de l’analyse de quartier.]',
    img: 'insight-3',
    published: null,
    updated: null,
    readingTime: '[X] min',
    author: 'BF Properties',
    body: [
      { type: 'p', text: '[Introduction de l’analyse de quartier.]' },
      { type: 'h2', text: '[Forces et points d’attention]' },
      { type: 'p', text: '[Analyse équilibrée.]' },
    ],
  },
];
