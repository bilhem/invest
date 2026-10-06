import Link from 'next/link';
import CtaLink from '@/components/CtaLink';
import { Eyebrow, nb } from '@/components/neighborhood/ui';
import type { Article } from '@/lib/data/articles';
import type { Story } from '@/lib/cms';

const ROW = 'group flex items-baseline justify-between gap-4 border-b border-charcoal/15 py-4 font-serif text-[1.125rem] leading-snug transition-colors hover:text-champagne-dark';

/**
 * Next to the text: contextual links (only routes that exist; the Investor Story of Franck where it is relevant) and the related articles.
 * Link labels are navigation wording only: no claim, no figure.
 */
export default function ArticleAside({ a, related, story }: { a: Article; related: Article[]; story?: Story }) {
  const links = a.links ?? [];
  const hasMore = links.length > 0 || Boolean(story);
  return (
    <aside aria-label="Pour aller plus loin" className="lg:sticky lg:top-28">
      {hasMore && (
        <div>
          <Eyebrow>Pour aller plus loin</Eyebrow>
          <ul className="mt-4 border-t border-charcoal/20">
            {links.map((l) => (
              <li key={l.href}>
                <CtaLink href={l.href} id={`article_${a.slug}_${l.href.replace(/\W+/g, '_').replace(/^_|_$/g, '')}`} className={ROW}>
                  <span>{l.label}</span><span aria-hidden className="text-champagne-dark transition-transform duration-300 group-hover:translate-x-1">→</span>
                </CtaLink>
              </li>
            ))}
            {story && (
              <li>
                <CtaLink href={`/investor-stories/${story.slug}`} id={`article_${a.slug}_story_${story.slug}`} className={ROW}>
                  <span>Voir l’Investor Story de Franck</span><span aria-hidden className="text-champagne-dark transition-transform duration-300 group-hover:translate-x-1">→</span>
                </CtaLink>
              </li>
            )}
          </ul>
        </div>
      )}
      {related.length > 0 && (
        <div className={hasMore ? 'mt-12' : ''}>
          <Eyebrow>À lire aussi</Eyebrow>
          <ul className="mt-4 border-t border-charcoal/20">
            {related.map((r) => (
              <li key={r.slug} className="border-b border-charcoal/15">
                <Link href={`/insights/${r.slug}`} className="group block py-4">
                  <span className="text-xs text-champagne-dark">{r.category}</span>
                  <span className="mt-1 block font-serif text-[1.125rem] leading-snug transition-colors group-hover:text-champagne-dark">{nb(r.title)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
