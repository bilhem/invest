import { nb } from '@/components/neighborhood/ui';
import type { Article } from '@/lib/data/articles';
import { renderInline } from './inline';

const host = (url: string) => {
  try { return new URL(url).hostname.replace(/^www\./, ''); } catch { return url; }
};

/**
 * « Sources & méthodologie »: the sources, then the editorial / methodology note when there is one, then the disclaimer (discreet but legible).
 * Sources are clean editorial links (label, then the site's name in small type): the URLs are never printed as blocks.
 * Only the sources supplied with the article are listed.
 */
export default function ArticleSources({ a }: { a: Article }) {
  const hasSources = a.sources.length > 0;
  const hasMethod = Boolean(a.methodology?.length);
  return (
    <>
      {(hasSources || hasMethod) && (
        <section id="sources" aria-labelledby="sources-title" className="mt-24 scroll-mt-28 border-t border-charcoal/15 pt-8 md:mt-32 md:pt-10">
          <h2 id="sources-title" className="font-serif text-[1.5rem] font-medium leading-tight text-charcoal md:text-[1.875rem]">Sources &amp; méthodologie</h2>
          {hasSources && (
            <ol className="mt-8 max-w-[44rem] divide-y divide-charcoal/10 border-y border-charcoal/10">
              {a.sources.map((s, i) => (
                <li key={s.url} className="grid grid-cols-[2rem_1fr] gap-x-3 py-4 text-[0.95rem] leading-snug">
                  <span aria-hidden className="pt-0.5 text-xs text-stone">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-charcoal underline decoration-champagne/60 decoration-1 underline-offset-[5px] transition-colors hover:text-champagne-dark">
                      {nb(s.label)}<span aria-hidden className="ml-1 text-champagne-dark">↗</span>
                    </a>
                    <p className="mt-1 text-xs text-stone">{host(s.url)}{s.note ? ` — ${s.note}` : ''}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}
          {hasMethod && (
            <div className="mt-10 max-w-[38rem]">
              {a.methodologyTitle && <p className="ed-eyebrow !text-champagne-dark">{nb(a.methodologyTitle)}</p>}
              <div className={`${a.methodologyTitle ? 'mt-3 ' : ''}space-y-4 text-[0.95rem] leading-[1.75] text-charcoal/75`}>
                {a.methodology!.map((p, i) => <p key={i}>{renderInline(p)}</p>)}
              </div>
            </div>
          )}
        </section>
      )}
      <p className="mt-10 max-w-[40rem] border-l-2 border-champagne pl-4 text-[0.8125rem] leading-relaxed text-charcoal/65">{renderInline(a.disclaimer)}</p>
    </>
  );
}
