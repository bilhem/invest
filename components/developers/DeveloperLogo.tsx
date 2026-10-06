import { findDeveloperLogo } from '@/lib/developer-logos';

/**
 * Official logo of a developer, shown small next to its name (the BF headline stays the dominant element).
 * The supplied files are brochure crops: the logo sits on its own brand background (white wordmarks on a dark or coloured field),
 * so it is shown as a small plate: fixed height, width from the file's own ratio (`object-contain`, never stretched, cropped, recoloured or given an effect),
 * with a hairline edge so the plate reads on both the ivory and the sand sections.
 * The file is looked up at build time: without it nothing is drawn (no empty frame, no placeholder).
 * Plain <img> on purpose: the box is sized by the file itself (width/height attributes), so there is no layout shift.
 */
export default function DeveloperLogo({ file, name, size, className = '' }: { file: string; name: string; size?: 'large'; className?: string }) {
  const logo = findDeveloperLogo(file);
  if (!logo) return null;
  return (
    <span className={`flex shrink-0 items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt={`Logo ${name}`}
        loading="lazy"
        decoding="async"
        className={`block w-auto object-contain object-right ring-1 ring-charcoal/10 ${size === 'large' ? 'h-12 max-w-[9.5rem] md:h-[4.5rem] md:max-w-[11.5rem]' : 'h-9 max-w-[9rem] md:h-12 md:max-w-[11.5rem]'}`}
      />
    </span>
  );
}
