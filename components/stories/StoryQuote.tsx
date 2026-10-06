import { nb } from '@/components/neighborhood/ui';

/**
 * The case's supplied quote, one sentence per line like the key lines of the district pages. The closing « » stays on the last sentence's line
 * (the shared `Quote` splits after « . » even when only the guillemet follows). Display only: the text is unchanged.
 */
export default function StoryQuote({ children, dark = false, accent = false, className = '' }: { children: string; dark?: boolean; accent?: boolean; className?: string }) {
  const parts = children.split(/(?<=[.!?])\s+(?!»)/);
  const color = accent ? (dark ? 'text-champagne-light' : 'text-champagne-dark') : dark ? 'text-ivory' : 'text-charcoal';
  return (
    <p className={`ed-quote text-balance ${color} ${className}`}>
      {parts.map((p, i) => <span key={i} className="block">{nb(p)}</span>)}
    </p>
  );
}
