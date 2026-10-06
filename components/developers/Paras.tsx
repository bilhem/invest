import { nb } from '@/components/neighborhood/ui';

/** Supplied paragraphs, display only: short hyphenated words (« lui-même », « au-delà ») and « : » never split across lines. The text is unchanged. */
export default function Paras({ paragraphs, dark = false, className = '' }: { paragraphs: readonly string[]; dark?: boolean; className?: string }) {
  return (
    <div className={`space-y-5 ${className}`}>
      {paragraphs.map((p) => <p key={p} className={`ed-body ${dark ? 'text-ivory/75' : 'text-charcoal/75'}`}>{nb(p)}</p>)}
    </div>
  );
}
