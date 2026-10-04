import type { Metadata } from 'next';
import { SITE } from './site';

export function buildMetadata(opts: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  const { title, description, path, noindex } = opts;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE.name, locale: 'fr_FR', type: 'website' },
    robots: noindex ? { index: false, follow: false } : undefined,
  };
}

export const abs = (path: string) => `${SITE.url}${path}`;
