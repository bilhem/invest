'use client';
import { useRef } from 'react';
import Image from 'next/image';
import BFImage from '@/components/BFImage';
import { getAspect, getImage, type ImageKey } from '@/lib/images';

/**
 * Shows an image IN FULL (object-contain, never cropped) at its true aspect ratio,
 * and opens it full-screen on click (native <dialog>: Esc closes, focus is handled by the browser).
 * `overlay` (optional) is drawn in the image's exact box, in the page AND in the enlarged view: positions in % stay true,
 * and the box is a size container (`cqw` units) so annotations scale with the map.
 * On phones the enlarged view is wider than the screen and can be panned, so small map labels stay readable.
 */
export default function ZoomImage({
  slot, sizes = '100vw', unconstrained = false, className = '', overlay,
}: {
  slot: ImageKey;
  sizes?: string;
  /** Let the plan use the full width of its container (no viewport-height cap). */
  unconstrained?: boolean;
  className?: string;
  overlay?: React.ReactNode;
}) {
  const img = getImage(slot);
  const ref = useRef<HTMLDialogElement>(null);
  const aspect = getAspect(slot, '16 / 7');
  const ratio = img.width && img.height ? img.width / img.height : 16 / 7;
  // Default: never taller than ~80% of the viewport. `unconstrained` plans take the whole container width (never cropped either way).
  const maxW = unconstrained ? '100%' : `min(100%, calc(80vh * ${ratio.toFixed(3)}))`;

  if (!img.src) {
    return (
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: aspect }}>
        <BFImage slot={slot} sizes={sizes} />
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        aria-label="Agrandir le plan"
        className={`group relative mx-auto block w-full cursor-zoom-in border border-charcoal/10 bg-ivory ${className}`}
        style={{ maxWidth: maxW }}
      >
        <span className="relative block w-full" style={{ aspectRatio: aspect, containerType: 'inline-size' }}>
          <Image src={img.src} alt={img.alt} fill sizes={sizes} quality={90} style={{ objectFit: 'contain' }} />
          {overlay}
        </span>
        <span className="absolute bottom-3 right-3 bg-charcoal/80 px-3 py-1.5 text-[0.7rem] font-medium tracking-wide text-ivory transition-colors group-hover:bg-charcoal">
          Agrandir
        </span>
      </button>
      <dialog
        ref={ref}
        aria-label="Plan agrandi"
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-charcoal/95"
        onClick={() => ref.current?.close()}
      >
        <div className="flex h-full w-full overflow-auto p-4 md:p-10">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="fixed right-4 top-4 z-10 border border-ivory/40 bg-charcoal/60 px-4 py-2 text-xs font-medium tracking-wide text-ivory hover:border-ivory md:right-8 md:top-8"
          >
            Fermer
          </button>
          <div
            className="relative m-auto w-full min-w-[860px] bg-ivory md:min-w-0"
            style={{ aspectRatio: aspect, maxWidth: `min(100%, calc(92vh * ${ratio.toFixed(3)}))`, containerType: 'inline-size' }}
          >
            <Image src={img.src} alt={img.alt} fill sizes="100vw" quality={90} style={{ objectFit: 'contain' }} />
            {overlay}
          </div>
        </div>
      </dialog>
    </>
  );
}
