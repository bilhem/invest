import type { Metadata } from 'next';
import { SITE } from './site';

type SocialImage = { src: string; width?: number; height?: number; alt?: string };

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  /** Optional share image. When set, Open Graph images and a Twitter card are emitted (other pages are unchanged). */
  image?: SocialImage;
  /** `article` (BF Insights): Open Graph type article, with the optional dates (ISO) and section. Default: website. */
  article?: { publishedTime?: string; modifiedTime?: string; section?: string };
}): Metadata {
  const { title, description, path, noindex, image, article } = opts;
  const og = {
    title,
    description,
    url: path,
    siteName: SITE.name,
    locale: 'fr_FR',
    ...(image ? { images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }] } : {}),
  };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: article ? { ...og, type: 'article' as const, ...article } : { ...og, type: 'website' as const },
    ...(image ? { twitter: { card: 'summary_large_image' as const, title, description, images: [image.src] } } : {}),
    robots: noindex ? { index: false, follow: false } : undefined,
  };
}

export const abs = (path: string) => `${SITE.url}${path}`;
