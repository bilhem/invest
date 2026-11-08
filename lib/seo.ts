import type { Metadata } from 'next';
import { SITE } from './site';

type SocialImage = { src: string; width?: number; height?: number; alt?: string };

/** Absolute URL of a path of the site (a full URL is returned unchanged). */
export const abs = (path: string) => (/^https?:\/\//.test(path) ? path : `${SITE.url}${path}`);

/** `@id` of the Organization node (app/layout.tsx), referenced by the Article and WebSite data. */
export const ORG_ID = `${SITE.url}/#organization`;

/**
 * Share image used by every page that has no picture of its own (1200 × 630, the Open Graph / Twitter large-card ratio).
 * It is cut from the home hero (`hero` in lib/images.ts, rights cleared by the client) with the BF Properties wordmark: public/images/og-default.jpg.
 */
export const DEFAULT_SHARE_IMAGE: SocialImage = {
  src: '/images/og-default.jpg',
  width: 1200,
  height: 630,
  alt: 'BF Properties : investir dans l’immobilier à Dubai, front de mer au crépuscule',
};

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  /** Page's own share image (district, story, article cover). Without it the default share image above is used. */
  image?: SocialImage;
  /** `article` (BF Insights): Open Graph type article, with the optional dates (ISO) and section. Default: website. */
  article?: { publishedTime?: string; modifiedTime?: string; section?: string };
  /** Home only: the title is used as is, without the « | BF Properties » suffix of the layout template. */
  absoluteTitle?: boolean;
}): Metadata {
  const { title, description, path, noindex, image, article, absoluteTitle } = opts;
  const share = image?.src ? image : DEFAULT_SHARE_IMAGE;
  const shareUrl = abs(share.src);
  const og = {
    title,
    description,
    url: abs(path),
    siteName: SITE.name,
    locale: 'fr_FR',
    images: [{ url: shareUrl, width: share.width, height: share.height, alt: share.alt }],
  };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: abs(path) },
    openGraph: article ? { ...og, type: 'article' as const, ...article } : { ...og, type: 'website' as const },
    twitter: { card: 'summary_large_image' as const, title, description, images: [share.alt ? { url: shareUrl, alt: share.alt } : shareUrl] },
    robots: noindex ? { index: false, follow: false } : undefined,
  };
}
