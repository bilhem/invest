import ZoomImage from '@/components/area/ZoomImage';
import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { getAspect, getImage } from '@/lib/images';
import { Eyebrow, Heading, Prose, Quote, Section, type SectionProps } from './ui';
import type { MasterplanData } from '@/lib/data/neighborhood-types';

/**
 * Masterplan chapter: a reading moment. Title (+ intro) on the grid, then the plan on the wide container (up to 1400px),
 * ALWAYS shown in full (object-contain, true ratio, never cropped) and enlargeable.
 * Text can sit before the plan (title 7 / intro 5) or after it (text 6 / statement 5).
 * Without a title (a plan that follows its own chapter, e.g. City Walk → Crestlane) only the label (eyebrow) and the caption frame the plan.
 */
export default function MasterplanSection({ s, density, tone, join }: SectionProps<MasterplanData>) {
  const dark = tone === 'dark';
  const img = getImage(s.image);
  const before = s.textPosition !== 'after';
  const intro = before ? s.paragraphs : undefined;
  const after = !before ? s.paragraphs : undefined;

  return (
    <Section id={s.id} tone={tone} density={density} weight="major" join={join}>
      {s.title ? (
        <div className="ed-wrap">
          <div className="ed-grid items-start gap-y-8">
            <Heading
              eyebrow={s.eyebrow}
              title={s.title}
              dark={dark}
              className={`col-span-12 ${intro ? 'lg:col-span-6' : 'lg:col-span-9'}`}
              titleClass={intro ? 'max-w-[34rem]' : 'max-w-[52rem]'}
            />
            {intro && (
              <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-11">
                <Prose paragraphs={intro} dark={dark} />
              </Reveal>
            )}
          </div>
        </div>
      ) : (
        s.eyebrow && (
          <div className="ed-wrap">
            <Reveal><Eyebrow dark={dark}>{s.eyebrow}</Eyebrow></Reveal>
          </div>
        )
      )}

      <div className={`ed-wide ${s.title ? 'mt-12 md:mt-16' : 'mt-6 md:mt-8'}`}>
        <Reveal className="mx-auto max-w-[1400px] shadow-[0_40px_90px_-50px_rgba(27,26,24,0.45)]">
          {img.src ? (
            <ZoomImage slot={s.image} unconstrained sizes="(min-width:1536px) 1400px, 100vw" />
          ) : process.env.NODE_ENV !== 'production' ? (
            <div className="relative w-full overflow-hidden border border-dashed border-charcoal/30" style={{ aspectRatio: getAspect(s.image, '16 / 10') }}>
              <BFImage slot={s.image} sizes="100vw" />
            </div>
          ) : null}
        </Reveal>
      </div>

      {(s.caption || after || s.statement) && (
        <div className="ed-wrap">
          {s.caption && <p className="ed-caption mt-4 max-w-[44rem] text-stone">{s.caption}</p>}
          {(after || s.statement) && (
            <div className="ed-grid mt-12 items-start gap-y-10 md:mt-16">
              {after && (
                <Reveal className="col-span-12 lg:col-span-6">
                  <Prose paragraphs={after} dark={dark} />
                </Reveal>
              )}
              {s.statement && (
                <Reveal className={`col-span-12 ${after ? 'lg:col-span-5 lg:col-start-8' : 'lg:col-span-8'}`}>
                  <Quote dark={dark} accent className="border-l-2 border-champagne pl-6 md:pl-8">{s.statement}</Quote>
                </Reveal>
              )}
            </div>
          )}
        </div>
      )}
    </Section>
  );
}
