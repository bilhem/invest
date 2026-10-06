import { nb } from '@/components/neighborhood/ui';
import type { Block } from '@/lib/data/articles';

/**
 * Article text, display only: the supplied wording is never changed (non-breaking spaces before « : ; ? ! » and short hyphenated words kept whole).
 * Variants: `bf` = « Le regard BF Properties » as a pull statement; `note` = tax caveat as a call-out; `flow` = a chain written with arrows.
 */
export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="max-w-[40rem] space-y-6 text-[1.0625rem] leading-[1.75] text-charcoal/80 md:text-[1.125rem]">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i} className="text-balance pt-8 font-serif text-[1.625rem] font-medium leading-[1.2] tracking-tight text-charcoal md:text-[2rem]">{nb(b.text)}</h2>;
          case 'p':
            if (b.variant === 'bf') {
              return <p key={i} className="ed-statement text-balance border-l-2 border-champagne pl-6 text-charcoal md:pl-8">{nb(b.text)}</p>;
            }
            if (b.variant === 'note') {
              return <p key={i} className="border border-charcoal/15 bg-ivory-200 p-5 text-[1rem] leading-[1.7] md:p-6">{nb(b.text)}</p>;
            }
            return <p key={i}>{nb(b.text)}</p>;
          case 'flow': {
            const steps = b.text.split(' → ');
            return (
              <ol key={i} className="flex flex-wrap items-baseline gap-x-3 gap-y-2 font-serif text-[1.375rem] leading-snug text-charcoal md:text-[1.625rem]">
                {steps.map((s, si) => (
                  <li key={si} className="flex items-baseline gap-3">
                    <span>{s}</span>
                    {si < steps.length - 1 && <span aria-hidden className="text-champagne-dark">→</span>}
                  </li>
                ))}
              </ol>
            );
          }
          case 'quote':
            return (
              <blockquote key={i} className="my-10 border-l-2 border-champagne pl-6">
                <p className="font-serif text-2xl leading-snug text-charcoal">{b.text}</p>
                <footer className="mt-3 text-sm text-stone">{b.by}</footer>
              </blockquote>
            );
          case 'figures':
            return (
              <dl key={i} className="my-10 grid gap-px bg-stone-light/50 sm:grid-cols-3">
                {b.items.map((f) => (
                  <div key={f.label} className="bg-ivory p-5">
                    <dt className="text-sm text-stone">{f.label}</dt>
                    <dd className="mt-1 font-serif text-4xl text-champagne-dark">{f.value}</dd>
                  </div>
                ))}
              </dl>
            );
          case 'table':
            return (
              <div key={i} className="my-10 overflow-x-auto">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-charcoal/30">{b.head.map((h) => <th key={h} scope="col" className="py-3 pr-4 font-medium">{h}</th>)}</tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, ri) => (
                      <tr key={ri} className="border-b border-stone-light/60">{r.map((c, ci) => <td key={ci} className="py-3 pr-4 text-charcoal/75">{c}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
