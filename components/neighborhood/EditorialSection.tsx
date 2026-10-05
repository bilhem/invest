import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { GAP, Heading, Prose, Shell, Statement } from './ui';
import type { Density, EditorialData, StoryImage } from '@/lib/data/neighborhood-types';

function Frame({ img, className = '', sizes }: { img: StoryImage; className?: string; sizes: string }) {
  return (
    <figure className={className}>
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <BFImage slot={img.slot} sizes={sizes} />
      </div>
      {img.caption && <figcaption className="ed-caption mt-3 text-stone">{img.caption}</figcaption>}
    </figure>
  );
}

function Closing({ lines, dark }: { lines?: string[]; dark: boolean }) {
  if (!lines?.length) return null;
  return (
    <div className="mt-10 space-y-2">
      {lines.map((l) => (
        <p key={l} className={`ed-statement ${dark ? 'text-ivory' : 'text-charcoal'}`}>{l}</p>
      ))}
    </div>
  );
}

/** Text chapter. Four compositions share the same type scale; the district picks the one that fits its story. */
export default function EditorialSection({ s, density }: { s: EditorialData; density: Density }) {
  const dark = s.tone === 'dark';

  if (s.layout === 'centered') {
    return (
      <Shell id={s.id} tone={s.tone} density={density}>
        <div className="mx-auto max-w-3xl text-center">
          <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} center />
          <Reveal className="mt-10 md:mt-12">
            <Prose paragraphs={s.paragraphs} dark={dark} center className="[&>p]:max-w-none" />
            <Closing lines={s.closing} dark={dark} />
          </Reveal>
        </div>
        {s.images && (
          <div className={`${GAP} grid gap-6 md:grid-cols-2`}>
            {s.images.map((i) => <Frame key={i.slot} img={i} sizes="(min-width:768px) 600px, 100vw" />)}
          </div>
        )}
        {s.statement && (
          <Reveal className="mx-auto mt-16 max-w-3xl text-center md:mt-24">
            <Statement dark={dark} rule={false} className="mx-auto">{s.statement}</Statement>
          </Reveal>
        )}
      </Shell>
    );
  }

  if (s.layout === 'columns') {
    return (
      <Shell id={s.id} tone={s.tone} density={density}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} />
            </div>
          </div>
          <Reveal className="lg:col-span-7">
            <Prose paragraphs={s.paragraphs} dark={dark} />
            <Closing lines={s.closing} dark={dark} />
            {s.statement && <Statement dark={dark} className="mt-12">{s.statement}</Statement>}
          </Reveal>
        </div>
      </Shell>
    );
  }

  if (s.layout === 'split') {
    const img = s.images?.[0];
    return (
      <Shell id={s.id} tone={s.tone} density={density}>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-5 ${s.flip ? 'lg:order-2' : ''}`}>
            <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} />
            <Reveal className="mt-8">
              <Prose paragraphs={s.paragraphs} dark={dark} />
              <Closing lines={s.closing} dark={dark} />
              {s.statement && <Statement dark={dark} className="mt-10">{s.statement}</Statement>}
            </Reveal>
          </div>
          {img && (
            <Reveal className={`lg:col-span-7 ${s.flip ? 'lg:order-1' : ''}`}>
              <Frame img={img} sizes="(min-width:1024px) 700px, 100vw" />
            </Reveal>
          )}
        </div>
      </Shell>
    );
  }

  // stagger: text on the left, two photos staggered on the right
  const [first, second] = s.images ?? [];
  return (
    <Shell id={s.id} tone={s.tone} density={density}>
      <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} />
      <div className={`${GAP} grid gap-12 lg:grid-cols-12 lg:gap-16`}>
        <Reveal className="lg:col-span-5">
          <Prose paragraphs={s.paragraphs} dark={dark} />
        </Reveal>
        <div className="space-y-6 lg:col-span-7">
          {first && <Reveal><Frame img={first} sizes="(min-width:1024px) 700px, 100vw" /></Reveal>}
          {second && <Reveal className="sm:ml-auto sm:w-4/5"><Frame img={second} sizes="(min-width:1024px) 560px, 100vw" /></Reveal>}
        </div>
      </div>
      {s.statement && (
        <Reveal className="mt-16 border-t border-stone-light/60 pt-12 md:mt-24 md:pt-16">
          <Statement dark={dark}>{s.statement}</Statement>
        </Reveal>
      )}
    </Shell>
  );
}
