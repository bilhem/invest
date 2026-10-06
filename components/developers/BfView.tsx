import { nb } from '@/components/neighborhood/ui';
import KeyLine from './KeyLine';

/**
 * « BF View »: the supplied sentence(s) of BF Properties on the developer. Display only: the text is unchanged.
 * `big` sets it as a key line (one sentence per line); `statement` is the quieter 24–30px version with a champagne rule.
 */
export default function BfView({ text, size = 'statement', className = '' }: { text: string; size?: 'big' | 'statement'; className?: string }) {
  return (
    <figure className={className}>
      <figcaption className="ed-eyebrow !text-champagne-dark">BF View</figcaption>
      <blockquote className="mt-4">
        {size === 'big'
          ? <KeyLine text={text} />
          : <p className="ed-statement text-balance border-l-2 border-champagne pl-6 text-charcoal md:pl-8">{nb(text)}</p>}
      </blockquote>
    </figure>
  );
}
