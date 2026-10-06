import Breadcrumbs from '@/components/ui/Breadcrumbs';
import BFImage from '@/components/BFImage';
import { getImage } from '@/lib/images';
import { Eyebrow, nb } from '@/components/neighborhood/ui';
import type { Story } from '@/lib/data/stories';

const DEFAULT_VEIL = { bottom: 0.82, left: 0.62, top: 0.3, reach: 88 };
const veilStyle = (v: { bottom: number; left: number; top: number; reach?: number }) =>
  ({ '--v-b': v.bottom, '--v-l': v.left, '--v-t': v.top, '--v-r': `${v.reach ?? 72}%` }) as React.CSSProperties;

/**
 * Hero of a case study: the project picture behind the case's strong sentence (the only H1), then project, unit and developer.
 * A photo smaller than the screen is kept at its native pixel size (never enlarged): the box stops at the photo's size and its sides fade into the charcoal
 * (same `.hero-capped` mechanism as the district pages). A slot without picture shows the neutral placeholder, full width.
 */
export default function StoryHero({ story }: { story: Story }) {
  const img = getImage(story.img);
  const native = img.width && img.height && img.src ? { w: img.width, h: img.height } : null;
  const note = 'note' in img ? img.note : undefined;
  const VEIL = veilStyle(img.veil ?? DEFAULT_VEIL);
  return (
    <section className="relative flex min-h-[74svh] items-end bg-charcoal text-ivory">
      {native ? (
        <div
          className="hero-capped absolute left-1/2 top-0 h-full w-full -translate-x-1/2"
          style={{ maxWidth: native.w, maxHeight: native.h, '--native-w': `${native.w}px` } as React.CSSProperties}
        >
          <BFImage slot={story.img} priority sizes={`(min-width:${native.w}px) ${native.w}px, 100vw`} />
          <div aria-hidden className="hero-veil absolute inset-0" style={VEIL} />
          {/* when the section is taller than the photo (phones), the photo dissolves into the section instead of ending on a hard edge */}
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-charcoal to-transparent" />
        </div>
      ) : (
        <>
          <BFImage slot={story.img} priority sizes="100vw" />
          <div aria-hidden className="hero-veil absolute inset-0" style={VEIL} />
        </>
      )}
      {native && note && (
        <div className="ed-wrap pointer-events-none absolute inset-x-0 bottom-0 flex justify-end pb-2 md:pb-3">
          <span className="bg-charcoal/55 px-2 py-1 font-sans text-[0.6875rem] leading-tight tracking-wide text-ivory/85">{note}</span>
        </div>
      )}
      <div className="ed-wrap relative pb-14 pt-36 md:pb-20">
        <Breadcrumbs items={[{ label: 'Investor Stories', href: '/investor-stories' }, { label: story.name }]} />
        <Eyebrow dark className="mt-10">{story.name} — {story.city} · {story.strategy}</Eyebrow>
        <h1 className="mt-5 max-w-[52rem] text-balance font-serif text-[2.125rem] font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]">
          {nb(story.headline)}
        </h1>
        <div className="mt-8">
          <p className="font-serif text-[1.375rem] leading-snug md:text-[1.625rem]">{story.project} · {story.area}</p>
          <p className="mt-2 text-[0.9375rem] tracking-wide text-ivory/75">
            {story.unit}{story.developer ? <span className="text-ivory/55"> — Développeur : {story.developer}</span> : null}
          </p>
        </div>
      </div>
    </section>
  );
}
