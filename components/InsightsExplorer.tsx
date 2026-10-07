'use client';
import Link from 'next/link';
import { useState } from 'react';
import { categoryLabel, type Article, type ArticleCategory } from '@/lib/data/articles';
import { fmtFr } from '@/components/insights/dates';

/** An editorial page of its own (a « vertical »), shown first on the « Tout » view. */
export type Featured = { eyebrow: string; title: string; text: string; href: string; cta: string };

/** Only what the cards show (the client component never receives the article bodies). */
export type ArticleCard = Pick<Article, 'slug' | 'category' | 'alsoIn' | 'title' | 'description' | 'published'> & { readingMinutes: number };

type Props = {
  articles: ArticleCard[];
  categories: ArticleCategory[];
  /** Categories that have their own page: their button leads there instead of filtering. */
  categoryLinks?: Partial<Record<ArticleCategory, string>>;
  featured?: Featured[];
};

export default function InsightsExplorer({ articles, categories, categoryLinks = {}, featured = [] }: Props) {
  const [cat, setCat] = useState<ArticleCategory | 'all'>('all');
  const list = cat === 'all' ? articles : articles.filter((a) => a.category === cat || a.alsoIn?.includes(cat));
  const [lead, ...rest] = list;

  return (
    <div>
      <div role="group" aria-label="Filtrer par catégorie" className="flex flex-wrap gap-2">
        {(['all', ...categories] as const).map((c) => {
          const href = c === 'all' ? undefined : categoryLinks[c];
          if (href) {
            return (
              <Link key={c} href={href} className="border border-stone-light px-4 py-2 text-sm text-charcoal/70 transition-colors hover:border-charcoal">
                {c}<span aria-hidden> →</span>
              </Link>
            );
          }
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={`border px-4 py-2 text-sm transition-colors ${cat === c ? 'border-charcoal bg-charcoal text-ivory' : 'border-stone-light text-charcoal/70 hover:border-charcoal'}`}
            >
              {c === 'all' ? 'Tout' : c}
            </button>
          );
        })}
      </div>

      {cat === 'all' && featured.map((f) => (
        <Link key={f.href} href={f.href} className="group mt-12 grid bg-charcoal text-ivory md:grid-cols-[1.3fr_1fr]">
          <div className="p-8 md:p-14">
            <p className="eyebrow !text-champagne-light">{f.eyebrow}</p>
            <h2 className="mt-5 max-w-[34rem] text-balance font-serif text-3xl leading-[1.1] tracking-tight md:text-5xl">{f.title}</h2>
          </div>
          <div className="flex flex-col justify-between gap-10 border-t border-ivory/15 p-8 md:border-l md:border-t-0 md:p-14">
            <p className="leading-relaxed text-ivory/75">{f.text}</p>
            <span className="text-sm font-medium text-champagne-light">{f.cta}<span aria-hidden className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></span>
          </div>
        </Link>
      ))}

      {!lead ? (
        (cat !== 'all' || featured.length === 0) && <p className="mt-12 text-charcoal/70">Aucune analyse dans cette catégorie pour le moment.</p>
      ) : (
        /* Text-first: no illustration is invented. The latest article leads; the others follow as a quiet list of columns. */
        <>
          <Link href={`/insights/${lead.slug}`} className="group mt-12 grid gap-8 border-t border-charcoal/25 pt-8 md:grid-cols-[1.3fr_1fr] md:gap-14 md:pt-10">
            <div>
              <p className="text-xs text-champagne-dark">{categoryLabel(lead)} — {fmtFr(lead.published)} — Lecture : {lead.readingMinutes} min</p>
              <h2 className="mt-4 max-w-[34rem] text-balance font-serif text-[2rem] leading-[1.1] tracking-tight transition-colors group-hover:text-champagne-dark md:text-[3rem]">{lead.title}</h2>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <p className="leading-relaxed text-charcoal/70">{lead.description}</p>
              <span className="text-sm font-medium text-champagne-dark">Lire l’analyse<span aria-hidden className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></span>
            </div>
          </Link>

          {rest.length > 0 && (
            <ul className={`mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 ${rest.length >= 3 ? 'lg:grid-cols-3' : ''}`}>
              {rest.map((a) => (
                <li key={a.slug}>
                  <Link href={`/insights/${a.slug}`} className="group flex h-full flex-col border-t border-charcoal/25 pt-5">
                    <p className="text-xs text-champagne-dark">{categoryLabel(a)} — {fmtFr(a.published)}</p>
                    <h2 className="mt-3 text-balance font-serif text-[1.5rem] leading-[1.2] transition-colors group-hover:text-champagne-dark">{a.title}</h2>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-charcoal/70">{a.description}</p>
                    <span className="mt-6 pt-1 text-sm font-medium text-champagne-dark">Lire l’analyse<span aria-hidden className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
