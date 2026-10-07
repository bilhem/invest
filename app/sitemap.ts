import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { getAreas, getStories, getArticles, getReadyDevelopers, isPublishable } from '@/lib/cms';
import { developerHref } from '@/lib/data/developers';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/investir-a-dubai', '/strategies', '/strategies/entrepreneurs', '/quartiers', '/investor-stories', '/insights', '/insights/developers', '/a-propos', '/consultation', '/lab', '/legal/disclaimers'];
  const entries: MetadataRoute.Sitemap = staticRoutes.map((p) => ({
    url: `${SITE.url}${p}`,
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : 0.7,
  }));
  getAreas().forEach((a) => entries.push({ url: `${SITE.url}/quartiers/${a.slug}`, changeFrequency: 'monthly', priority: 0.8 }));
  // Demonstration (placeholder) content is excluded until it is real and approved.
  getStories().filter(isPublishable).forEach((s) => entries.push({ url: `${SITE.url}/investor-stories/${s.slug}`, changeFrequency: 'yearly', priority: 0.6 }));
  // Individual developer pages (/insights/developers/<slug>) are listed only once they have final content.
  getReadyDevelopers().forEach((d) => entries.push({ url: `${SITE.url}${developerHref(d)}`, changeFrequency: 'monthly', priority: 0.6 }));
  // BF Insights articles (final copy only; there is no demonstration content).
  getArticles().filter((a) => !a.noindex).forEach((a) => entries.push({ url: `${SITE.url}/insights/${a.slug}`, lastModified: a.updated ?? a.published, changeFrequency: 'monthly', priority: 0.7 }));
  return entries;
}
