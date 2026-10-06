import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BFImage from '@/components/BFImage';
import { getImage } from '@/lib/images';
import CtaLink from '@/components/CtaLink';
import { Eyebrow } from './ui';
import type { StoryHero } from '@/lib/data/neighborhood-types';

/** Shading on the text side: even on phones (the text spans the screen), a left-to-right gradient from the large breakpoint up. */
const Veil = ({ soft = false }: { soft?: boolean }) => (
  <div
    aria-hidden
    className={`absolute inset-0 ${soft ? 'bg-charcoal/55 lg:from-charcoal/80 lg:via-charcoal/50' : 'bg-charcoal/40 lg:from-charcoal/70 lg:via-charcoal/35'} lg:bg-transparent lg:bg-gradient-to-r lg:to-transparent`}
  />
);

/** The only H1 of the page. Full-bleed photo, restrained overlay, one CTA. Text sits on columns 1–8 of the shared grid. */
export default function NeighborhoodHero({ slug, name, hero }: { slug: string; name: string; hero: StoryHero }) {
  const img = getImage(hero.image);
  const overlay = hero.overlay ?? 'strong';
  const note = 'note' in img ? img.note : undefined;
  const native = hero.native && img.width && img.height ? { w: img.width, h: img.height } : null;
  return (
    <section className={`relative flex items-end bg-charcoal text-ivory ${hero.size === 'standard' ? 'min-h-[80svh]' : 'min-h-[92svh]'}`}>
      {native ? (
        <div
          className="hero-capped absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
          style={{ maxWidth: native.w, maxHeight: native.h, '--native-w': `${native.w}px` } as React.CSSProperties}
        >
          <BFImage slot={hero.image} priority overlay={overlay} sizes={`(min-width:${native.w}px) ${native.w}px, 100vw`} />
          {hero.veil && <Veil soft={overlay === 'soft'} />}
        </div>
      ) : (
        <>
          <BFImage slot={hero.image} priority overlay={overlay} sizes="100vw" tag />
          {hero.veil && <Veil soft={overlay === 'soft'} />}
        </>
      )}
      {native && note && (
        // The capped photo box can be shorter than the text (phones) and its sides fade out (wide screens): the caption belongs to the section, not to the box.
        <div className="ed-wrap pointer-events-none absolute inset-x-0 bottom-0 flex justify-end pb-2 md:pb-3">
          <span className="bg-charcoal/55 px-2 py-1 font-sans text-[0.6875rem] leading-tight tracking-wide text-ivory/85">{note}</span>
        </div>
      )}
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
