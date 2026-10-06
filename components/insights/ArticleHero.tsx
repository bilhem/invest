import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Eyebrow, nb } from '@/components/neighborhood/ui';
import { INSIGHTS_AUTHOR, INSIGHTS_PUBLICATION, type Article } from '@/lib/data/articles';
import { fmtFr } from './dates';

/**
 * Typographic hero (charcoal, no picture: no illustration was supplied and none is invented).
 * Category → H1 → the supplied standfirst → byline, reading time and « Dernière revue ».
 * While `INSIGHTS_PUBLICATION.reviewedOn` is not set, the review date shows as a visible « [date] » placeholder (and the page is noindex).
 */
export default function ArticleHero({ a }: { a: Article }) {
  const reviewed = INSIGHTS_PUBLICATION.reviewedOn;
  return (
    <section className="relative bg-charcoal text-ivory">
      <div className="wrap pb-14 pt-36 md:pb-20 md:pt-44 lg:pt-48">
        <Breadcrumbs items={[{ label: 'Insights', href: '/insights' }, { label: a.title }]} />
        <Eyebrow dark className="mt-12 md:mt-14">{a.category}</Eyebrow>
        <h1 className="mt-6 max-w-[56rem] text-balance font-serif text-[2.125rem] font-medium leading-[1.1] tracking-tight sm:text-[2.75rem] lg:text-[3.5rem]">
          {nb(a.title)}
        </h1>
        <p className="mt-8 max-w-[44rem] text-balance font-serif text-[1.25rem] leading-[1.4] text-ivory/80 md:mt-10 md:text-[1.5rem]">{nb(a.standfirst)}</p>
        <p className="mt-10 flex flex-wrap gap-x-5 gap-y-1 border-t border-ivory/20 pt-5 text-xs tracking-wide text-ivory/60 md:mt-14">
          <span>{INSIGHTS_AUTHOR}</span>
          <span>Lecture : {a.readingMinutes} min</span>
          <span>Dernière revue : {reviewed ? <time dateTime={reviewed}>{fmtFr(reviewed)}</time> : '[date]'}</span>
        </p>
      </div>
    </section>
  );
}
