import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BFImage from '@/components/BFImage';
import CtaLink from '@/components/CtaLink';
import { Eyebrow } from './ui';
import type { StoryHero } from '@/lib/data/neighborhood-types';

/** The only H1 of the page. Full-bleed photo, restrained overlay, one CTA. Text sits on columns 1–8 of the shared grid. */
export default function NeighborhoodHero({ slug, name, hero }: { slug: string; name: string; hero: StoryHero }) {
  return (
    <section className={`relative flex items-end bg-charcoal text-ivory ${hero.size === 'standard' ? 'min-h-[80svh]' : 'min-h-[92svh]'}`}>
      <BFImage slot={hero.image} priority overlay="strong" sizes="100vw" />
      <div className="ed-wrap relative pb-14 pt-36 md:pb-24">
        <Breadcrumbs items={[{ label: 'Quartiers', href: '/quartiers' }, { label: name }]} />
        <Eyebrow dark className="mt-10">{hero.eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-[56rem] text-balance font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.5rem]">
          {hero.title}
        </h1>
        <div className="mt-8 max-w-[42rem] space-y-4">
          {hero.paragraphs.map((p) => (
            <p key={p} className="ed-lead text-ivory/85">{p}</p>
          ))}
        </div>
        <div className="mt-10">
          <CtaLink href="/consultation" id={`hero_${slug}`} className="btn btn-gold">{hero.cta}</CtaLink>
        </div>
      </div>
    </section>
  );
}
