import { nb } from '@/components/neighborhood/ui';

/**
 * A supplied key sentence set as the page's big serif line, one sentence per line. The closing « » stays on the last sentence's line
 * (the shared `Quote` would split it off). Display only: the text is unchanged.
 */
export default function KeyLine({ text, dark = false, className = '' }: { text: string; dark?: boolean; className?: string }) {
  const parts = text.split(/(?<=[.!?])\s+(?!»)/);
  return (
    <p className={`ed-quote text-balance ${dark ? 'text-ivory' : 'text-charcoal'} ${className}`}>
      {parts.map((p, i) => <span key={i} className="block">{nb(p)}</span>)}
    </p>
  );
}
