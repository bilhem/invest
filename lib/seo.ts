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
}): Metadata {
  const { title, description, path, noindex, image } = opts;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      locale: 'fr_FR',
      type: 'website',
      ...(image ? { images: [{ url: image.src, width: image.width, height: image.height, alt: image.alt }] } : {}),
    },
    ...(image ? { twitter: { card: 'summary_large_image' as const, title, description, images: [image.src] } } : {}),
    robots: noindex ? { index: false, follow: false } : undefined,
  };
}

export const abs = (path: string) => `${SITE.url}${path}`;
