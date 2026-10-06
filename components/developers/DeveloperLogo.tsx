import { findDeveloperLogo } from '@/lib/developer-logos';

/**
 * Official logo of a developer, shown small next to its name (the BF headline stays the dominant element).
 * The file is looked up at build time: without it nothing is drawn (no empty frame, no placeholder). The logo is never recoloured, cropped or given an effect.
 * Plain <img> on purpose: SVG is not optimised by next/image, and the box has a fixed height, so no layout shift.
 */
export default function DeveloperLogo({ file, name, className = '' }: { file: string; name: string; className?: string }) {
  const src = findDeveloperLogo(file);
  if (!src) return null;
  return (
    <span className={`flex h-8 shrink-0 items-center md:h-10 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`Logo ${name}`} loading="lazy" decoding="async" className="h-full w-auto max-w-[8.5rem] object-contain object-right md:max-w-[10.5rem]" />
    </span>
  );
}
