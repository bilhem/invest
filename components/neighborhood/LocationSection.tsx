import ZoomImage from '@/components/area/ZoomImage';
import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import { getAspect, getImage } from '@/lib/images';
import MapMarkers from './MapMarkers';
import SituationDiagram from './SituationDiagram';
import { Body, Eyebrow, Heading, Prose, Quote, Section, fr, muted, type SectionProps } from './ui';
import type { LocationData } from '@/lib/data/neighborhood-types';

/**
 * Location chapter: the visitor must understand WHERE the district sits before reading anything else.
 * Title on columns 1–6, short text (and reading lines) on 8–12, then the map on the wide container (up to 1400px):
 * ALWAYS shown in full (object-contain, true ratio, never cropped), enlargeable, optionally annotated. Without an official graphic,
 * a schematic (`situation`: sea / district / centre, no map, no distances) takes its place.
 * Under the map: a chain of reference points, a caption, then (optional) two questions side by side, the text and the key statement.
 */
export default function LocationSection({ s, density, tone, join }: SectionProps<LocationData>) {
  const dark = tone === 'dark';
  const img = s.image ? getImage(s.image) : undefined;
  const hasText = Boolean(s.paragraphs?.length || s.lines?.length);
  const rule = dark ? 'border-ivory/25' : 'border-charcoal/15';

  return (
    <Section id={s.id} tone={tone} density={density} weight="major" join={join}>
      <div className="ed-wrap">
        <div className="ed-grid items-start gap-y-8">
          <Heading
            eyebrow={s.eyebrow}
            title={s.title}
            dark={dark}
            className={`col-span-12 ${hasText ? 'lg:col-span-6' : 'lg:col-span-9'}`}
            titleClass={hasText ? 'max-w-[34rem]' : 'max-w-[52rem]'}
          />
          {hasText && (
            <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-11">
              {s.paragraphs && s.paragraphs.length > 0 && <Body paragraphs={s.paragraphs} inserts={s.inserts} dark={dark} />}
              {s.lines && s.lines.length > 0 && (
                <ul className={`${s.paragraphs?.length ? 'mt-8' : ''} border-b ${rule}`}>
                  {s.lines.map((l) => (
                    <li key={l} className={`border-t py-3.5 font-serif text-[1.25rem] leading-snug md:text-[1.5rem] ${rule} ${muted(dark)}`}>
                      <span className={dark ? 'text-ivory' : 'text-charcoal'}>{l}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          )}
        </div>
      </div>

      {s.image && img ? (
        <div className="ed-wide mt-12 md:mt-16">
          <Reveal className={`mx-auto max-w-[1400px] ${dark ? 'shadow-[0_40px_90px_-50px_rgba(0,0,0,0.7)]' : 'shadow-[0_40px_90px_-50px_rgba(27,26,24,0.45)]'}`}>
            {img.src ? (
              <ZoomImage
                slot={s.image}
                unconstrained
                sizes="(min-width:1536px) 1400px, 100vw"
                overlay={s.markers && s.markers.length > 0 ? <MapMarkers markers={s.markers} /> : undefined}
              />
            ) : process.env.NODE_ENV !== 'production' ? (
              <div className="relative w-full overflow-hidden border border-dashed border-charcoal/30" style={{ aspectRatio: getAspect(s.image, '16 / 8') }}>
                <BFImage slot={s.image} sizes="100vw" />
              </div>
            ) : null}
          </Reveal>
        </div>
      ) : s.situation ? (
        <div className="ed-wrap mt-12 md:mt-16">
          <SituationDiagram d={s.situation} dark={dark} />
        </div>
      ) : null}

      <div className="ed-wrap">
        {s.caption && <p className={`ed-caption mt-4 max-w-[48rem] ${dark ? 'text-ivory/60' : 'text-stone'}`}>{s.caption}</p>}

        {s.path && s.path.length > 0 && (
          <Reveal className={`mt-10 flex flex-col gap-x-8 gap-y-3 border-t pt-6 md:flex-row md:items-baseline ${rule}`}>
            {s.pathLabel && <Eyebrow dark={dark} className="shrink-0">{s.pathLabel}</Eyebrow>}
            <ol className="flex flex-wrap items-baseline gap-x-3 gap-y-2 font-serif text-[1.25rem] md:text-[1.5rem]">
              {s.path.map((p, i) => (
                <li key={p} className="flex items-baseline gap-x-3">
                  <span>{p}</span>
                  {i < s.path!.length - 1 && <span aria-hidden className="text-champagne-dark">→</span>}
                </li>
              ))}
            </ol>
          </Reveal>
        )}

        {s.questions && s.questions.length > 0 && (
          <div className={`ed-grid mt-14 items-start gap-y-12 border-t pt-10 md:mt-20 md:pt-14 ${rule}`}>
            {s.questions.map((q, i) => {
              const last = i === s.questions!.length - 1;
              return (
                <Reveal key={q.text} className={`col-span-12 lg:col-span-6 ${i % 2 === 1 ? 'lg:col-start-7' : ''}`}>
                  <p className={`ed-body ${muted(dark)}`}>{fr(q.lead)}</p>
                  <Quote
                    dark={dark}
                    accent={last}
                    className={`mt-4 max-w-[34rem] !text-[1.75rem] md:!text-[2rem] ${last ? 'border-l-2 border-champagne pl-6 md:pl-8' : dark ? '!text-ivory/60' : '!text-charcoal/55'}`}
                  >
                    {q.text}
                  </Quote>
                </Reveal>
              );
            })}
          </div>
        )}

        {((s.after && s.after.length > 0) || s.statement) && (
          <div className="ed-grid mt-12 items-start gap-y-10 md:mt-16">
            {s.after && s.after.length > 0 && (
              <Reveal className="col-span-12 lg:col-span-5">
                <Prose paragraphs={s.after} dark={dark} />
              </Reveal>
            )}
            {s.statement && (
              <Reveal className={`col-span-12 ${s.after?.length ? 'lg:col-span-6 lg:col-start-7' : 'lg:col-span-9'}`}>
                <Quote dark={dark} accent className="border-l-2 border-champagne pl-6 md:pl-8">{s.statement}</Quote>
              </Reveal>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}
