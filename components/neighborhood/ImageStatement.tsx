import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { getImage } from '@/lib/images';
import { GAP, Eyebrow, Heading, PAD, Prose, Shell, Statement, muted } from './ui';
import type { Density, ImageStatementData } from '@/lib/data/neighborhood-types';

/** Photo-led chapter. Visuals are woven into the text (no card gallery). */
export default function ImageStatement({ s, density }: { s: ImageStatementData; density: Density }) {
  const dark = s.tone === 'dark';

  if (s.variant === 'overlay') {
    const img = s.images[0];
    return (
      <section id={s.id} className={`relative flex min-h-[78svh] items-end overflow-hidden bg-charcoal text-ivory ${PAD[density]}`}>
        <BFImage slot={img.slot} overlay="strong" sizes="100vw" />
        <div className="wrap relative">
          <Reveal>
            {s.eyebrow && <Eyebrow dark>{s.eyebrow}</Eyebrow>}
            <h2 className={`ed-h2 ${s.eyebrow ? 'mt-5' : ''} max-w-3xl text-balance`}>{s.title}</h2>
            <div className="mt-8 max-w-xl space-y-5">
              {s.paragraphs.map((p) => <p key={p} className={`ed-body ${muted(true)}`}>{p}</p>)}
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (s.variant === 'duo') {
    const [a, b] = s.images;
    return (
      <Shell id={s.id} tone={s.tone} density={density}>
        <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} />
        <div className={`${GAP} grid items-start gap-10 lg:grid-cols-12 lg:gap-16`}>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:col-span-7">
            <Reveal>
              <div className="relative aspect-[3/4] w-full overflow-hidden"><BFImage slot={a.slot} sizes="(min-width:1024px) 340px, 45vw" /></div>
            </Reveal>
            {b && (
              <Reveal className="mt-10 md:mt-16">
                <div className="relative aspect-[3/4] w-full overflow-hidden"><BFImage slot={b.slot} sizes="(min-width:1024px) 340px, 45vw" /></div>
              </Reveal>
            )}
          </div>
          <Reveal className="lg:col-span-5 lg:pt-6">
            <Prose paragraphs={s.paragraphs} dark={dark} />
          </Reveal>
        </div>
        {s.quote && (
          <Reveal className="mt-16 border-t border-stone-light/60 pt-12 md:mt-24 md:pt-16">
            <Statement dark={dark}>{s.quote}</Statement>
          </Reveal>
        )}
      </Shell>
    );
  }

  // side: image beside text. Portrait images take less width so they are never cropped hard.
  const img = s.images[0];
  const meta = getImage(img.slot);
  const portrait = Boolean(meta.width && meta.height && meta.width < meta.height);
  const ratio = meta.width && meta.height ? `${meta.width} / ${meta.height}` : '4 / 3';
  return (
    <Shell id={s.id} tone={s.tone} density={density}>
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className={`${portrait ? 'lg:col-span-5' : 'lg:col-span-7'} ${s.flip ? 'lg:order-2' : ''}`}>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: ratio }}>
            <BFImage slot={img.slot} sizes={portrait ? '(min-width:1024px) 480px, 100vw' : '(min-width:1024px) 700px, 100vw'} />
          </div>
        </Reveal>
        <div className={`${portrait ? 'lg:col-span-6 lg:col-start-7' : 'lg:col-span-5'} ${s.flip ? 'lg:order-1' : ''}`}>
          <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} />
          <Reveal className="mt-8">
            <Prose paragraphs={s.paragraphs} dark={dark} />
            {s.quote && <Statement dark={dark} className="mt-10">{s.quote}</Statement>}
          </Reveal>
        </div>
      </div>
    </Shell>
  );
}
