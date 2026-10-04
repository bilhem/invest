'use client';
import Link from 'next/link';
import { useState } from 'react';
import BFImage from '@/components/BFImage';
import type { Article, ArticleCategory } from '@/lib/data/articles';

type Props = { articles: Article[]; categories: ArticleCategory[] };

const fmt = (iso: string | null) =>
  iso ? new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '[Date]';

export default function InsightsExplorer({ articles, categories }: Props) {
  const [cat, setCat] = useState<ArticleCategory | 'all'>('all');
  const list = cat === 'all' ? articles : articles.filter((a) => a.category === cat);
  const [lead, ...rest] = list;

  return (
    <div>
      <div role="group" aria-label="Filtrer par catégorie" className="flex flex-wrap gap-2">
        {(['all', ...categories] as const).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            className={`border px-4 py-2 text-sm transition-colors ${cat === c ? 'border-charcoal bg-charcoal text-ivory' : 'border-stone-light text-charcoal/70 hover:border-charcoal'}`}
          >
            {c === 'all' ? 'Tout' : c}
          </button>
        ))}
      </div>

      {!lead ? (
        <p className="mt-12 text-charcoal/70">Aucune analyse dans cette catégorie pour le moment.</p>
      ) : (
        <>
          <Link href={`/insights/${lead.slug}`} className="group mt-12 grid overflow-hidden bg-white md:grid-cols-[1.3fr_1fr]">
            <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[380px]">
              <BFImage slot={lead.img} sizes="(min-width:768px) 60vw, 100vw" className="transition-transform duration-[1400ms] group-hover:scale-[1.03]" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs text-champagne-dark">{lead.category} — {fmt(lead.published)}</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">{lead.title}</h2>
              <p className="mt-4 text-charcoal/70">{lead.excerpt}</p>
              <span className="mt-6 text-sm font-medium text-champagne-dark">Lire l’analyse</span>
            </div>
          </Link>

          {rest.length > 0 && (
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {rest.map((a) => (
                <Link key={a.slug} href={`/insights/${a.slug}`} className="group block">
                  <div className="relative aspect-[3/2]">
                    <BFImage slot={a.img} sizes="(min-width:768px) 33vw, 100vw" className="transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-5 text-xs text-champagne-dark">{a.category} — {fmt(a.published)}</p>
                  <h3 className="mt-2 font-serif text-2xl leading-snug group-hover:text-champagne-dark">{a.title}</h3>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
