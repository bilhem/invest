import type { Block } from '@/lib/data/articles';

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 text-[1.05rem] leading-[1.8] text-charcoal/85">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return <h2 key={i} className="pt-8 font-serif text-3xl leading-tight text-charcoal">{b.text}</h2>;
          case 'p':
            return <p key={i}>{b.text}</p>;
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
