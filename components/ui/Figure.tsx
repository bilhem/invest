import BFImage from '@/components/BFImage';
import { getAspect, getImage, type ImageKey } from '@/lib/images';
import type { InfraStatus } from '@/lib/data/area-types';
import { StatusBadge } from '@/components/area/Status';

const KIND_LABEL = { photo: null, render: 'Rendu conceptuel', plan: 'Extrait de plan' } as const;

type Props = {
  slot: ImageKey;
  caption?: string;
  /** Infrastructure status, shown whenever the image depicts something that is not (yet) built. */
  status?: InfraStatus;
  tone?: 'light' | 'dark';
  sizes?: string;
  fallbackAspect?: string;
  className?: string;
};

/**
 * Image with its true aspect ratio (never stretched) and an honest caption:
 * renders and plans are labelled as such, and future infrastructure carries its status.
 */
export default function Figure({ slot, caption, status, tone = 'light', sizes = '(min-width:1024px) 50vw, 100vw', fallbackAspect, className = '' }: Props) {
  const img = getImage(slot);
  const kind = img.kind && KIND_LABEL[img.kind];
  const dark = tone === 'dark';
  return (
    <figure className={className}>
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: getAspect(slot, fallbackAspect) }}>
        <BFImage slot={slot} sizes={sizes} />
      </div>
      {(kind || status || caption) && (
        <figcaption className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs leading-relaxed ${dark ? 'text-ivory/60' : 'text-stone'}`}>
          {status && <StatusBadge status={status} tone={dark ? 'dark' : 'light'} />}
          {kind && <span className={dark ? 'text-champagne-light' : 'text-champagne-dark'}>{kind}</span>}
          {caption && <span>{caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}
