'use client';
import { useRef } from 'react';
import Image from 'next/image';
import BFImage from '@/components/BFImage';
import { getAspect, getImage, type ImageKey } from '@/lib/images';

/**
 * Shows an image IN FULL (object-contain, never cropped) at its true aspect ratio,
 * and opens it full-screen on click (native <dialog>: Esc closes, focus is handled by the browser).
 */
export default function ZoomImage({
  slot, sizes = '100vw', unconstrained = false, className = '',
}: { slot: ImageKey; sizes?: string; /** Let the plan use the full width of its container (no viewport-height cap). */ unconstrained?: boolean; className?: string }) {
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
        <span className="relative block w-full" style={{ aspectRatio: aspect }}>
          <Image src={img.src} alt={img.alt} fill sizes={sizes} quality={90} style={{ objectFit: 'contain' }} />
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
        <div className="flex h-full w-full items-center justify-center p-4 md:p-10">
          <button
            type="button"
            onClick={() => ref.current?.close()}
            className="absolute right-4 top-4 border border-ivory/40 px-4 py-2 text-xs font-medium tracking-wide text-ivory hover:border-ivory md:right-8 md:top-8"
          >
            Fermer
          </button>
          <div className="relative w-full bg-ivory" style={{ aspectRatio: aspect, maxWidth: `min(100%, calc(92vh * ${ratio.toFixed(3)}))` }}>
            <Image src={img.src} alt={img.alt} fill sizes="100vw" quality={90} style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </dialog>
    </>
  );
}
