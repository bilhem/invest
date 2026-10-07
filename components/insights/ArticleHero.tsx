import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Eyebrow, nb } from '@/components/neighborhood/ui';
import { INSIGHTS_AUTHOR, categoryLabel, readingMinutes, type Article } from '@/lib/data/articles';
import { fmtFr } from './dates';
import { renderInline } from './inline';

/**
 * Typographic hero (charcoal, no picture unless an authorised one is supplied).
 * Category → H1 → optional standfirst → byline, publication date, last revision (only when there is one) and reading time.
 * The byline is the organisation unless a real, named BF author is set on the article: no invented identity.
 */
export default function ArticleHero({ a }: { a: Article }) {
  const revised = a.updated && a.updated !== a.published ? a.updated : null;
  return (
    <section className="relative bg-charcoal text-ivory">
      <div className="wrap pb-14 pt-36 md:pb-24 md:pt-44 lg:pt-52">
        <Breadcrumbs items={[{ label: 'Insights', href: '/insights' }, { label: a.title }]} />
        <Eyebrow dark className="mt-12 md:mt-16">{categoryLabel(a)}</Eyebrow>
        <h1 className="mt-6 max-w-[58rem] text-balance font-serif text-[2.25rem] font-medium leading-[1.08] tracking-tight sm:text-[3rem] lg:text-[4.25rem]">
          {nb(a.title)}
        </h1>
        {a.standfirst && (
          <p className="mt-8 max-w-[46rem] text-balance font-serif text-[1.25rem] leading-[1.4] text-ivory/80 md:mt-10 md:text-[1.625rem]">{renderInline(a.standfirst)}</p>
        )}
        <p className="mt-12 flex flex-wrap gap-x-6 gap-y-1 border-t border-ivory/20 pt-5 text-xs tracking-wide text-ivory/65 md:mt-16">
          <span>{a.author ? `${a.author.name}${a.author.role ? `, ${a.author.role}` : ''}` : INSIGHTS_AUTHOR}</span>
          <span>Publié le <time dateTime={a.published}>{fmtFr(a.published)}</time></span>
          {revised && <span>Dernière révision : <time dateTime={revised}>{fmtFr(revised)}</time></span>}
          <span>Lecture : {readingMinutes(a)} min</span>
        </p>
      </div>
    </section>
  );
}
