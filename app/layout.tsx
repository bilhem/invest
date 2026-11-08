import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE, SOCIAL } from '@/lib/site';
import { ORG_ID, DEFAULT_SHARE_IMAGE, abs } from '@/lib/seo';
import Consent from '@/components/Consent';
import AttributionCapture from '@/components/AttributionCapture';

const serif = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-serif', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  // Fallback for routes that do not call buildMetadata (every page does): same default share image.
  openGraph: {
    type: 'website', siteName: SITE.name, locale: 'fr_FR', title: SITE.name, description: SITE.description,
    images: [{ url: abs(DEFAULT_SHARE_IMAGE.src), width: DEFAULT_SHARE_IMAGE.width, height: DEFAULT_SHARE_IMAGE.height, alt: DEFAULT_SHARE_IMAGE.alt }],
  },
  twitter: { card: 'summary_large_image', title: SITE.name, description: SITE.description, images: [abs(DEFAULT_SHARE_IMAGE.src)] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Organization + WebSite: only what is verified (name, URL, description, language). No logo, address, phone or social profile until real ones exist (lib/site.ts, SOCIAL).
  const org = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', '@id': ORG_ID, name: SITE.name, url: SITE.url, description: SITE.description,
        ...(SOCIAL.length ? { sameAs: SOCIAL.map((s) => s.href) } : {}),
      },
      { '@type': 'WebSite', '@id': `${SITE.url}/#website`, name: SITE.name, url: SITE.url, inLanguage: 'fr', publisher: { '@id': ORG_ID } },
    ],
  };
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <AttributionCapture />
        <Consent />
      </body>
    </html>
  );
}
