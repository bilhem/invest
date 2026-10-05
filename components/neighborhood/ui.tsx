import Reveal from '@/components/Reveal';
import type { Density, Tone } from '@/lib/data/neighborhood-types';

/**
 * Shared building blocks of the district pages: one container, one 12-column grid (.ed-grid), one vertical rhythm (.ed-sec),
 * one type scale (.ed-*). Components only choose how many columns each block takes.
 */
export type Weight = 'major' | 'narrative';
/** Which neighbours share this section's background (their padding is halved so gaps never double). */
export type Join = { prev?: boolean; next?: boolean };
export type SectionProps<T> = { s: T; density: Density; tone: Tone; join: Join };

export const TONE: Record<Tone, string> = {
  light: 'bg-ivory text-charcoal',
  sand: 'bg-ivory-200 text-charcoal',
  dark: 'bg-charcoal text-ivory',
};

/**
 * French typography, display only: a non-breaking space before « : ; ? ! » and inside « … », so a colon never starts a line.
 * The wording is untouched; only the kind of space changes.
 */
export function fr(text: string): string {
  return text.replace(/ ([:;?!»])/g, ' $1').replace(/(«) /g, '$1 ');
}

/** Keeps short hyphenated words such as « correspond-il » on one line; long ones may break after the hyphen (display only, the text is unchanged). */
export function nb(text: string): React.ReactNode {
  return fr(text).split(' ').map((w, i, a) => (
    <span key={i} className={w.includes('-') && w.length <= 14 ? 'whitespace-nowrap' : undefined}>{w}{i < a.length - 1 ? ' ' : ''}</span>
  ));
}

/** One sentence per line for key statements (display only, the text is unchanged). */
function sentences(text: string): React.ReactNode {
  const parts = text.split(/(?<=[.!?])\s+/);
  if (parts.length < 2) return nb(text);
  return parts.map((p, i) => <span key={i} className="block">{nb(p)}</span>);
}

export const muted = (dark: boolean) => (dark ? 'text-ivory/75' : 'text-charcoal/75');

/** A full-width band with the shared vertical rhythm. Children decide their own container. */
export function Section({
  id, tone = 'light', density, weight = 'narrative', join, className = '', children,
}: { id?: string; tone?: Tone; density: Density; weight?: Weight; join?: Join; className?: string; children: React.ReactNode }) {
  return (
    <section
      id={id}
      data-w={weight}
      data-d={density}
      data-jp={join?.prev ? '1' : undefined}
      data-jn={join?.next ? '1' : undefined}
      className={`ed-sec ${TONE[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

/** Section + the standard container. */
export function Shell(props: Parameters<typeof Section>[0]) {
  const { children, ...rest } = props;
  return (
    <Section {...rest}>
      <div className="ed-wrap">{children}</div>
    </Section>
  );
}

export function Eyebrow({ children, dark = false, className = '' }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return <p className={`ed-eyebrow ${dark ? '!text-champagne-light' : '!text-champagne-dark'} ${className}`}>{children}</p>;
}

/** eyebrow → H2. Used at the top of every chapter. `className` positions the block in the grid, `titleClass` sets the title measure. */
export function Heading({
  eyebrow, title, dark = false, center = false, className = '', titleClass = 'max-w-[56rem]',
}: { eyebrow?: string; title: string; dark?: boolean; center?: boolean; className?: string; titleClass?: string }) {
  return (
    <Reveal className={`${center ? 'md:text-center' : ''} ${className}`}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className={`ed-h2 ${eyebrow ? 'mt-5' : ''} text-balance ${titleClass} ${center ? 'md:mx-auto' : ''}`}>{nb(title)}</h2>
    </Reveal>
  );
}

export function Prose({ paragraphs, dark = false, center = false, className = '' }: { paragraphs: string[]; dark?: boolean; center?: boolean; className?: string }) {
  return (
    <div className={`space-y-5 ${className}`}>
      {paragraphs.map((p) => (
        <p key={p} className={`ed-body ${muted(dark)} ${center ? 'mx-auto' : ''}`}>{fr(p)}</p>
      ))}
    </div>
  );
}

/** Secondary statement, 24–30px. */
export function Statement({
  children, dark = false, rule = true, className = '',
}: { children: React.ReactNode; dark?: boolean; rule?: boolean; className?: string }) {
  return (
    <p className={`ed-statement text-balance ${rule ? 'border-l-2 border-champagne pl-6 md:pl-8' : ''} ${dark ? 'text-ivory' : 'text-charcoal'} ${className}`}>
      {children}
    </p>
  );
}

/** Key idea of the page: 28 → 40px, never larger than the H2, with its own breathing room. */
export function Quote({
  children, dark = false, accent = false, className = '',
}: { children: React.ReactNode; dark?: boolean; accent?: boolean; className?: string }) {
  const content = typeof children === 'string' ? sentences(children) : children;
  const color = accent ? (dark ? 'text-champagne-light' : 'text-champagne-dark') : dark ? 'text-ivory' : 'text-charcoal';
  return <p className={`ed-quote text-balance ${color} ${className}`}>{content}</p>;
}

/** Photo that fills a box of a fixed aspect ratio (decorative/editorial photos only: plans never use this). */
export function Photo({ children, className = '', ratio }: { children: React.ReactNode; className?: string; ratio?: string }) {
  return (
    <div className={`relative w-full overflow-hidden bg-charcoal/10 ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
      {children}
    </div>
  );
}
