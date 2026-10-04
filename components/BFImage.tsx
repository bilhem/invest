import Image from 'next/image';
import { getImage, type ImageKey } from '@/lib/images';

const TONES = {
  dusk: ['#2A2320', '#6B4A3A', '#C28A55'],
  day: ['#8E8A82', '#C9C2B5', '#EFE9DD'],
  water: ['#161B22', '#2B3A46', '#B7915F'],
} as const;

function Placeholder({ tone, seed }: { tone: keyof typeof TONES; seed: number }) {
  let s = seed * 9301 + 49297;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  const [a, b, c] = TONES[tone];
  const bars = Array.from({ length: 26 }, (_, i) => {
    const w = 28 + rnd() * 34;
    const h = 90 + rnd() * (i === 12 ? 330 : 190);
    return { x: i * 46 + rnd() * 6, w, h };
  });
  return (
    <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full" aria-hidden>
      <defs>
        <linearGradient id={`sky-${tone}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={a} /><stop offset=".62" stopColor={b} /><stop offset="1" stopColor={c} />
        </linearGradient>
      </defs>
      <rect width="1200" height="600" fill={`url(#sky-${tone})`} />
      {bars.map((r, i) => (
        <rect key={i} x={r.x} y={470 - r.h} width={r.w} height={r.h} fill="#14110F" opacity={0.55 + (i % 3) * 0.15} />
      ))}
      <rect y="470" width="1200" height="130" fill="#14110F" opacity=".85" />
    </svg>
  );
}

/** Placeholders show their slot name in development, or when NEXT_PUBLIC_SHOW_IMAGE_SLOTS=1 (e.g. on a preview deploy). Never in production. */
const SHOW_SLOTS = process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_SHOW_IMAGE_SLOTS === '1';

type Props = { slot: ImageKey; className?: string; priority?: boolean; sizes?: string; overlay?: 'none' | 'soft' | 'strong' };

/** Fills its (relative) parent. Swap placeholders via lib/images.ts only. */
export default function BFImage({ slot, className = '', priority, sizes = '100vw', overlay = 'none' }: Props) {
  const img = getImage(slot);
  const seed = slot.length * 7 + slot.charCodeAt(slot.length - 1);
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {'src' in img && img.src ? (
        <Image src={img.src} alt={img.alt} fill priority={priority} sizes={sizes}
          style={{ objectFit: 'cover', objectPosition: ('focal' in img && img.focal) || '50% 50%' }} />
      ) : (
        <>
          <Placeholder tone={('tone' in img && img.tone) || 'dusk'} seed={seed} />
          {SHOW_SLOTS && (
            <span className="absolute left-3 top-3 z-10 rounded-sm bg-charcoal/80 px-2 py-1 font-sans text-[0.65rem] tracking-wide text-ivory/90">
              Image à fournir : {slot}
            </span>
          )}
        </>
      )}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${overlay === 'strong'
          ? 'bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/30'
          : 'bg-gradient-to-t from-charcoal/70 via-transparent to-transparent'}`} />
      )}
    </div>
  );
}
