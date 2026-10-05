import Reveal from '@/components/Reveal';
import ZoomImage from '@/components/area/ZoomImage';
import { getImage } from '@/lib/images';
import { GAP, Heading, Prose, Shell, Statement } from './ui';
import type { Density, MasterplanData } from '@/lib/data/neighborhood-types';

const SHOW_SLOTS = process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_SHOW_IMAGE_SLOTS === '1';

/**
 * Masterplan chapter. The plan is ALWAYS shown in full (object-contain, never cropped, ratio preserved)
 * and opens full-screen on click. A missing file never shows a fake plan in production.
 */
export default function MasterplanSection({ s, density }: { s: MasterplanData; density: Density }) {
  const dark = s.tone === 'dark';
  const hasImage = Boolean(getImage(s.image).src);
  const after = s.textPosition === 'after';
  const text = s.paragraphs?.length ? <Prose paragraphs={s.paragraphs} dark={dark} /> : null;

  return (
    <Shell id={s.id ?? 'masterplan'} tone={s.tone} density={density}>
      <Heading eyebrow={s.eyebrow} title={s.title} dark={dark} />
      {!after && text && <Reveal className="mt-8">{text}</Reveal>}
      <Reveal className={GAP}>
        {hasImage ? (
          <ZoomImage slot={s.image} sizes="(min-width:1280px) 1200px, 100vw" />
        ) : (
          SHOW_SLOTS && (
            <div className="grid aspect-[16/9] place-items-center border border-dashed border-champagne/60 text-sm text-stone">
              Masterplan à fournir : {s.image}
            </div>
          )
        )}
        {s.caption && <p className="ed-caption mt-3 text-center text-stone">{s.caption}</p>}
      </Reveal>
      {after && (text || s.statement) && (
        <div className="mt-14 grid gap-10 md:mt-20 lg:grid-cols-12 lg:gap-16">
          {text && <Reveal className="lg:col-span-6">{text}</Reveal>}
          {s.statement && (
            <Reveal className="lg:col-span-6">
              <Statement dark={dark}>{s.statement}</Statement>
            </Reveal>
          )}
        </div>
      )}
      {!after && s.statement && (
        <Reveal className="mt-14 md:mt-20"><Statement dark={dark}>{s.statement}</Statement></Reveal>
      )}
    </Shell>
  );
}
