import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { getAreas, getStories, getArticles, isPublishable } from '@/lib/cms';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/investir-a-dubai', '/strategies', '/strategies/entrepreneurs', '/quartiers', '/investor-stories', '/insights', '/a-propos', '/consultation', '/lab', '/legal/disclaimers'];
  const entries: MetadataRoute.Sitemap = staticRoutes.map((p) => ({
    url: `${SITE.url}${p}`,
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : 0.7,
  }));
  getAreas().forEach((a) => entries.push({ url: `${SITE.url}/quartiers/${a.slug}`, changeFrequency: 'monthly', priority: 0.8 }));
  // Demonstration (placeholder) content is excluded until it is real and approved.
  getStories().filter(isPublishable).forEach((s) => entries.push({ url: `${SITE.url}/investor-stories/${s.slug}`, changeFrequency: 'yearly', priority: 0.6 }));
  getArticles().filter(isPublishable).forEach((a) => entries.push({ url: `${SITE.url}/insights/${a.slug}`, lastModified: a.updated ?? a.published ?? undefined, changeFrequency: 'monthly', priority: 0.6 }));
  return entries;
}
