import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { Eyebrow, nb, fr } from '@/components/neighborhood/ui';
import Paras from './Paras';
import { getDevelopers, getDevelopersPage } from '@/lib/cms';

/**
 * Typographic hero (charcoal, no picture: the page is about words, the developers are identified by name and logo further down).
 * H1 → the three supplied intro paragraphs → an index of the developers (plain anchors, in the order of the page; no number, no ranking).
 */
export default function DevelopersHero() {
  const { hero } = getDevelopersPage();
  const [lead, ...rest] = hero.intro;
  return (
    <section className="relative bg-charcoal text-ivory">
      <div className="ed-wrap pb-16 pt-36 md:pb-24 md:pt-44 lg:pt-52">
        <Breadcrumbs items={[{ label: 'Insights', href: '/insights' }, { label: 'Developers' }]} />
        <Eyebrow dark className="mt-12 md:mt-16">{hero.eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-[62rem] text-balance font-serif text-[2.5rem] font-medium leading-[1.06] tracking-tight sm:text-[3.5rem] lg:text-[4.75rem]">
          {nb(hero.title)}
        </h1>

        <div className="mt-14 border-t border-ivory/20 pt-8 md:mt-20 md:pt-10">
          <div className="ed-grid gap-y-6">
            <p className="col-span-12 text-balance font-serif text-[1.5rem] leading-[1.3] md:text-[1.875rem] lg:col-span-5">{fr(lead)}</p>
            <Paras paragraphs={rest} dark className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-1.5" />
          </div>
        </div>

        <nav aria-label="Les développeurs" className="mt-12 border-t border-ivory/20 pt-6 md:mt-16">
          <ul className="flex flex-wrap gap-x-7 gap-y-3 font-serif text-[1.125rem] text-ivory/80 md:text-[1.25rem]">
            {getDevelopers().map((d) => (
              <li key={d.slug}><a href={`#${d.slug}`} className="transition-colors hover:text-champagne-light">{d.name}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
