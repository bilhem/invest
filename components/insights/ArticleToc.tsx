'use client';
import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

/**
 * Table of contents, discreet. Desktop (≥ 1024 px): a sticky rail beside the text, the section being read is marked.
 * Below: a compact, collapsible « Dans cet article » above the text. Plain anchors, so it works without JavaScript.
 */
export default function ArticleToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => Boolean(e));
    if (els.length === 0) return;
    // A heading is « current » while it sits in the band between 15 % and 30 % of the viewport height; the last one stays current in between.
    const io = new IntersectionObserver(
      (entries) => {
        const inBand = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (inBand) setActive(inBand.target.id);
      },
      { rootMargin: '-15% 0px -70% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  if (items.length < 2) return null;

  return (
    <>
      <nav aria-label="Sommaire" className="hidden lg:sticky lg:top-28 lg:block lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:overscroll-contain">
        <p className="ed-eyebrow !text-champagne-dark">Dans cet article</p>
        <ol className="mt-5 border-l border-charcoal/15">
          {items.map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                aria-current={active === i.id ? 'location' : undefined}
                className={`-ml-px block border-l py-1 pl-4 pr-2 text-[0.8125rem] leading-snug transition-colors ${active === i.id ? 'border-champagne text-charcoal' : 'border-transparent text-charcoal/60 hover:text-charcoal'}`}
              >
                {i.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <details className="group border-y border-charcoal/15 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm [&::-webkit-details-marker]:hidden">
          <span className="ed-eyebrow !text-champagne-dark">Dans cet article</span>
          <span aria-hidden className="text-charcoal/60 transition-transform duration-300 group-open:rotate-180">⌄</span>
        </summary>
        <nav aria-label="Sommaire">
          <ol className="space-y-px pb-4">
            {items.map((i) => (
              <li key={i.id}>
                <a
                  href={`#${i.id}`}
                  onClick={(e) => e.currentTarget.closest('details')?.removeAttribute('open')}
                  className="block py-2 text-[0.9375rem] leading-snug text-charcoal/75"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </details>
    </>
  );
}
