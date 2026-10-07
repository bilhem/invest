import Link from 'next/link';
import CtaLink from '@/components/CtaLink';
import { Eyebrow, nb } from '@/components/neighborhood/ui';
import { categoryLabel, type Article } from '@/lib/data/articles';

const ROW = 'group flex items-baseline justify-between gap-4 border-b border-charcoal/15 py-4 font-serif text-[1.1875rem] leading-snug transition-colors hover:text-champagne-dark';
const ARROW = 'text-champagne-dark transition-transform duration-300 group-hover:translate-x-1';

/**
 * « Pour aller plus loin » (links to routes that exist) and « À lire aussi » (other published articles).
 * Rendered only when the article has something to show: nothing is invented to fill the space.
 */
export default function ArticleMore({ a, related }: { a: Article; related: Article[] }) {
  const links = a.links ?? [];
  if (links.length === 0 && related.length === 0) return null;
  return (
    <section aria-label="Pour aller plus loin" className="mt-24 md:mt-32">
      {links.length > 0 && (
        <div>
          <Eyebrow>Pour aller plus loin</Eyebrow>
          <ul className="mt-5 max-w-[44rem] border-t border-charcoal/20">
            {links.map((l) => (
              <li key={l.href}>
                <CtaLink href={l.href} id={`article_${a.slug}_${l.href.replace(/\W+/g, '_').replace(/^_|_$/g, '')}`} className={ROW}>
                  <span>{nb(l.label)}</span><span aria-hidden className={ARROW}>→</span>
                </CtaLink>
              </li>
            ))}
          </ul>
        </div>
      )}
      {related.length > 0 && (
        <div className={links.length > 0 ? 'mt-14' : ''}>
          <Eyebrow>À lire aussi</Eyebrow>
          <ul className="mt-5 max-w-[44rem] border-t border-charcoal/20">
            {related.map((r) => (
              <li key={r.slug} className="border-b border-charcoal/15">
                <Link href={`/insights/${r.slug}`} className="group block py-4">
                  <span className="text-xs text-champagne-dark">{categoryLabel(r)}</span>
                  <span className="mt-1 block font-serif text-[1.1875rem] leading-snug transition-colors group-hover:text-champagne-dark">{nb(r.title)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
