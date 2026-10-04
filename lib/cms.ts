/**
 * CONTENT ACCESS LAYER.
 * Pages never import data files directly: they call these functions.
 * To move to a headless CMS (Sanity, Payload, Contentful…), re-implement these functions
 * to fetch from the CMS and keep the same return types — no page needs to change.
 * See /cms/schemas.ts for the document models to create in the CMS.
 */
import { AREAS, getAreaBySlug, type Area } from './data/areas';
import { STRATEGIES, type Strategy } from './data/strategies';
import { STORIES, type Story } from './data/stories';
import { ARTICLES, type Article } from './data/articles';
import { INVEST_FAQ, type Faq } from './data/faq';

export type { Area, Strategy, Story, Article, Faq };

export const getAreas = (): Area[] => AREAS;
export const getArea = (slug: string): Area | undefined => getAreaBySlug(slug);

export const getStrategies = (): Strategy[] => STRATEGIES;

export const getStories = (): Story[] => STORIES;
export const getStory = (slug: string): Story | undefined => STORIES.find((s) => s.slug === slug);

export const getArticles = (): Article[] => ARTICLES;
export const getArticle = (slug: string): Article | undefined => ARTICLES.find((a) => a.slug === slug);

export const getInvestFaq = (): Faq[] => INVEST_FAQ;

/** Only content that is real and approved should be indexed or listed in the sitemap. */
export const isPublishable = (x: { placeholder: boolean }) => !x.placeholder;
