import Link from 'next/link';
import JsonLd from './JsonLd';
import { abs } from '@/lib/seo';

export type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: 'Accueil', href: '/' }, ...items];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: abs(c.href) } : {}),
    })),
  };
  return (
    <nav aria-label="Fil d’Ariane" className="text-xs text-ivory/60">
      <JsonLd data={ld} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {all.map((c, i) => (
          <li key={c.label} className="flex items-center gap-2">
            {c.href && i < all.length - 1 ? <Link href={c.href} className="hover:text-champagne-light">{c.label}</Link> : <span aria-current={i === all.length - 1 ? 'page' : undefined}>{c.label}</span>}
            {i < all.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
