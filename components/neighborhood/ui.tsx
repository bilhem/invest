import Reveal from '@/components/Reveal';
import type { Density, Tone } from '@/lib/data/neighborhood-types';

/** Shared building blocks of the district pages: one vertical rhythm, one type scale, one grid. */
export const PAD: Record<Density, string> = {
  airy: 'py-24 md:py-40',
  standard: 'py-20 md:py-32',
  dense: 'py-14 md:py-24',
};
export const TONE: Record<Tone, string> = {
  light: 'bg-ivory text-charcoal',
  sand: 'bg-ivory-200 text-charcoal',
  dark: 'bg-charcoal text-ivory',
};
/** Gap between a chapter header and its content. */
export const GAP = 'mt-12 md:mt-16';

export const muted = (dark: boolean) => (dark ? 'text-ivory/75' : 'text-charcoal/75');

export function Shell({
  id, tone = 'light', density, className = '', children,
}: { id?: string; tone?: Tone; density: Density; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`${TONE[tone]} ${PAD[density]} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, dark = false, className = '' }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return <p className={`ed-eyebrow ${dark ? '!text-champagne-light' : '!text-champagne-dark'} ${className}`}>{children}</p>;
}

/** eyebrow → H2. Used at the top of every chapter. */
export function Heading({
  eyebrow, title, dark = false, center = false, className = '',
}: { eyebrow?: string; title: string; dark?: boolean; center?: boolean; className?: string }) {
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className={`ed-h2 ${eyebrow ? 'mt-5' : ''} max-w-4xl text-balance ${center ? 'mx-auto' : ''}`}>{title}</h2>
    </Reveal>
  );
}

export function Prose({ paragraphs, dark = false, center = false, className = '' }: { paragraphs: string[]; dark?: boolean; center?: boolean; className?: string }) {
  return (
    <div className={`space-y-5 ${className}`}>
      {paragraphs.map((p) => (
        <p key={p} className={`ed-body ${muted(dark)} ${center ? 'mx-auto' : ''}`}>{p}</p>
      ))}
    </div>
  );
}

/** Statement / quote at 24–30px. */
export function Statement({
  children, dark = false, rule = true, className = '',
}: { children: React.ReactNode; dark?: boolean; rule?: boolean; className?: string }) {
  return (
    <p className={`ed-statement text-balance ${rule ? 'border-l-2 border-champagne pl-6 md:pl-8' : ''} ${dark ? 'text-ivory' : 'text-charcoal'} ${className}`}>
      {children}
    </p>
  );
}
