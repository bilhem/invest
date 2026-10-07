import Link from 'next/link';
import BFImage from '@/components/BFImage';
import { nb } from '@/components/neighborhood/ui';
import type { Block } from '@/lib/data/articles';
import { keepNumbers, renderInline } from './inline';

/**
 * Renders an article as a flow of independent blocks (see `Block` in lib/data/articles.ts), so two articles can have very different shapes.
 * Reading measure: running text stays at ~38 rem; figures, tables, comparisons, methods and BF Analysis use the full column.
 * Display only: the supplied wording is never changed.
 */

const MEASURE = 'max-w-[38rem]';

function Figures({ b }: { b: Extract<Block, { type: 'figures' }> }) {
  const n = b.items.length;
  // Up to three figures sit on one row (thin vertical rules between them); four or more form a grid without inner rules.
  const oneRow = n <= 3;
  const cols = n === 1 ? '' : n === 2 ? 'sm:grid-cols-2' : n === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2 lg:grid-cols-4';
  return (
    <figure className="my-16 md:my-24">
      <dl className={`grid gap-y-10 border-y border-charcoal/15 py-10 md:py-14 ${cols} ${oneRow ? '' : 'gap-x-8'}`}>
        {b.items.map((f, i) => (
          <div key={i} className={`flex flex-col ${oneRow ? 'sm:border-l sm:border-charcoal/15 sm:pl-8 sm:first:border-l-0 sm:first:pl-0' : ''}`}>
            <dt className="order-2 mt-3 text-sm leading-snug text-charcoal/70">{renderInline(f.label)}</dt>
            <dd className="order-1 block text-balance font-serif text-[2.25rem] leading-[1.05] tracking-tight text-champagne-dark md:text-[2.75rem]">
              {keepNumbers(f.value)}{f.unit && <>{' '}<span className="inline-block whitespace-nowrap font-sans text-[0.8125rem] font-normal tracking-wide text-champagne-dark/90 md:text-[0.9375rem]">{f.unit}</span></>}
            </dd>
            {f.note && <dd className="order-3 mt-1.5 text-xs leading-snug text-stone">{renderInline(f.note)}</dd>}
          </div>
        ))}
      </dl>
      {b.caption && <figcaption className="mt-4 text-xs leading-relaxed text-stone">{renderInline(b.caption)}</figcaption>}
    </figure>
  );
}

/** Desktop: a classic table. Phones: each row becomes a labelled block, so nothing scrolls sideways. */
function DataTable({ b }: { b: Extract<Block, { type: 'table' }> }) {
  return (
    <figure className="my-14 md:my-20">
      {b.caption && <figcaption className="mb-5 font-serif text-[1.25rem] leading-snug text-charcoal md:text-[1.5rem]">{renderInline(b.caption)}</figcaption>}
      <table className="block w-full border-collapse text-left text-[0.95rem] leading-snug md:table">
        <thead className="sr-only md:not-sr-only md:table-header-group">
          <tr className="md:border-b md:border-charcoal/40">
            {b.head.map((h, i) => (
              <th key={i} scope="col" className="pb-3 pr-6 align-bottom text-[0.7rem] font-medium uppercase tracking-[0.16em] text-charcoal/65">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {b.rows.map((r, ri) => (
            <tr key={ri} className="block border-t border-charcoal/15 py-4 first:border-t-0 md:table-row md:border-t-0 md:py-0 md:[&>*]:border-b md:[&>*]:border-charcoal/15">
              {r.map((c, ci) => {
                const label = b.first === 'label' && ci === 0;
                const cls = `block py-1 md:table-cell md:py-4 md:pr-6 md:align-top ${ci > 0 ? "before:mb-0.5 before:block before:text-[0.68rem] before:uppercase before:tracking-[0.16em] before:text-stone before:content-[attr(data-label)] md:before:hidden" : 'md:before:hidden'}`;
                return label
                  ? <th key={ci} scope="row" data-label={b.head[ci]} className={`${cls} font-serif text-[1.125rem] font-medium text-charcoal`}>{renderInline(c)}</th>
                  : <td key={ci} data-label={b.head[ci]} className={`${cls} text-charcoal/80`}>{renderInline(c)}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {b.note && <p className="mt-4 text-xs leading-relaxed text-stone">{renderInline(b.note)}</p>}
    </figure>
  );
}

function Compare({ b }: { b: Extract<Block, { type: 'compare' }> }) {
  const cols = b.columns.length >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
  return (
    <figure className="my-14 md:my-20">
      {b.caption && <figcaption className="mb-5 font-serif text-[1.25rem] leading-snug text-charcoal md:text-[1.5rem]">{renderInline(b.caption)}</figcaption>}
      <div className={`grid divide-y divide-charcoal/15 border-y border-charcoal/15 md:divide-x md:divide-y-0 ${cols}`}>
        {b.columns.map((c, i) => (
          <div key={i} className="py-7 md:px-7 md:py-9 md:first:pl-0 md:last:pr-0">
            <h3 className="font-serif text-[1.375rem] leading-snug text-charcoal">{nb(c.title)}</h3>
            <ul className="mt-5 space-y-3 text-[0.95rem] leading-[1.65] text-charcoal/80">
              {c.points.map((p, pi) => (
                <li key={pi} className="flex gap-3"><span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-champagne" /><span>{renderInline(p)}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </figure>
  );
}

function Method({ b }: { b: Extract<Block, { type: 'method' }> }) {
  return (
    <section className="my-14 md:my-20">
      {b.title && <h3 className="mb-6 font-serif text-[1.5rem] leading-snug text-charcoal md:text-[1.75rem]">{nb(b.title)}</h3>}
      <ol className="border-t border-charcoal/15">
        {b.steps.map((s, i) => (
          <li key={i} className="grid grid-cols-[2.75rem_1fr] gap-x-3 border-b border-charcoal/15 py-5 md:grid-cols-[4rem_1fr] md:py-6">
            <span aria-hidden className="font-serif text-[1.125rem] text-champagne-dark">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <p className="font-serif text-[1.25rem] leading-snug text-charcoal">{renderInline(s.title)}</p>
              {s.text && <p className={`mt-2 text-[0.98rem] leading-[1.7] text-charcoal/75 ${MEASURE}`}>{renderInline(s.text)}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** « La question BF »: the recurring question that closes a section, set apart in serif. */
function Question({ b }: { b: Extract<Block, { type: 'question' }> }) {
  return (
    <div className="mt-12 max-w-[42rem] border-t border-charcoal/15 pt-6 md:mt-14">
      <p className="ed-eyebrow !text-champagne-dark">{nb(b.label)}</p>
      <p className="mt-3 text-balance font-serif text-[1.3125rem] leading-[1.4] text-charcoal md:text-[1.625rem]">{renderInline(b.text)}</p>
    </div>
  );
}

/** A reading map: one entry per line (title, then labelled lines). Entry titles link to the pages that exist. */
function Profiles({ b }: { b: Extract<Block, { type: 'profiles' }> }) {
  return (
    <figure className="my-14 md:my-20">
      {b.caption && <figcaption className="mb-5 font-serif text-[1.25rem] leading-snug text-charcoal md:text-[1.5rem]">{renderInline(b.caption)}</figcaption>}
      <ul className="border-t border-charcoal/40">
        {b.items.map((it, i) => (
          <li key={i} className="grid gap-x-8 gap-y-3 border-b border-charcoal/15 py-6 md:grid-cols-[14rem_1fr] md:py-7 lg:grid-cols-[16rem_1fr]">
            <h3 className="font-serif text-[1.25rem] font-medium leading-snug text-charcoal md:text-[1.375rem]">
              {it.href
                ? <Link href={it.href} className="group inline-flex items-baseline gap-2 transition-colors hover:text-champagne-dark"><span>{nb(it.title)}</span><span aria-hidden className="text-base text-champagne-dark transition-transform duration-300 group-hover:translate-x-1">→</span></Link>
                : nb(it.title)}
            </h3>
            <dl className="space-y-3 text-[0.95rem] leading-[1.65] text-charcoal/80">
              {it.rows.map((r, ri) => (
                <div key={ri} className="sm:grid sm:grid-cols-[5.5rem_1fr] sm:gap-x-4">
                  <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-stone sm:pt-[0.4rem]">{r.label}</dt>
                  <dd className="mt-0.5 sm:mt-0">{renderInline(r.text)}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </figure>
  );
}

/** « BF Analysis »: the point of view of BF Properties, set apart from the running text. */
function Analysis({ b }: { b: Extract<Block, { type: 'analysis' }> }) {
  return (
    <aside aria-label="BF Analysis" className="my-16 border-t-2 border-champagne bg-ivory-200 px-6 py-9 md:my-24 md:px-12 md:py-14">
      <p className="ed-eyebrow !text-champagne-dark">BF Analysis</p>
      {b.title && <h3 className="mt-4 max-w-[40rem] text-balance font-serif text-[1.5rem] leading-[1.2] tracking-tight text-charcoal md:text-[1.875rem]">{nb(b.title)}</h3>}
      <div className={`mt-6 space-y-5 text-[1.0625rem] leading-[1.75] text-charcoal/85 ${MEASURE}`}>
        {b.paragraphs.map((p, i) => <p key={i}>{renderInline(p)}</p>)}
      </div>
    </aside>
  );
}

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="text-[1.0625rem] leading-[1.8] text-charcoal/85 md:text-[1.125rem] [&>:first-child]:mt-0 [&_.h2w+p]:mt-8 [&_.h2w+figure]:mb-10 [&_.h2w+figure]:mt-8 [&_h3+p]:mt-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2': {
            const label = b.kicker ?? (b.num !== undefined ? String(b.num).padStart(2, '0') : null);
            return (
              <div key={i} id={b.id} className="h2w mt-20 scroll-mt-28 border-t border-charcoal/15 pt-8 md:mt-28 md:pt-10">
                {label && <p aria-hidden className="mb-4 font-serif text-[1.0625rem] tracking-[0.14em] text-champagne-dark md:mb-5 md:text-[1.1875rem]">{label}</p>}
                <h2 className="max-w-[42rem] text-balance font-serif text-[1.875rem] font-medium leading-[1.15] tracking-tight text-charcoal md:text-[2.5rem]">{nb(b.text)}</h2>
              </div>
            );
          }
          case 'h3':
            return <h3 key={i} className="mt-12 max-w-[40rem] text-balance font-serif text-[1.375rem] font-medium leading-[1.25] text-charcoal md:mt-14 md:text-[1.625rem]">{nb(b.text)}</h3>;
          case 'p':
            return b.lead
              ? <p key={i} className={`mt-6 font-serif text-[1.375rem] leading-[1.55] text-charcoal md:text-[1.5rem] ${MEASURE} md:max-w-[42rem]`}>{renderInline(b.text)}</p>
              : <p key={i} className={`mt-6 ${MEASURE}`}>{renderInline(b.text)}</p>;
          case 'list': {
            const Tag = b.ordered ? 'ol' : 'ul';
            return (
              <Tag key={i} className={`mt-6 space-y-3 ${MEASURE}`}>
                {b.items.map((it, ii) => (
                  <li key={ii} className="flex gap-4">
                    {b.ordered
                      ? <span aria-hidden className="w-6 shrink-0 font-serif text-champagne-dark">{ii + 1}.</span>
                      : <span aria-hidden className="mt-[0.85em] h-px w-4 shrink-0 bg-champagne" />}
                    <span>{renderInline(it)}</span>
                  </li>
                ))}
              </Tag>
            );
          }
          case 'statement':
            return (
              <p key={i} className="my-14 max-w-[46rem] text-balance border-t border-champagne pt-8 font-serif text-[1.75rem] leading-[1.25] tracking-tight text-charcoal sm:text-[2rem] md:my-20 md:text-[2.5rem]">
                {renderInline(b.text)}
              </p>
            );
          case 'quote':
            return (
              <figure key={i} className="my-14 max-w-[44rem] md:my-20">
                <blockquote className="border-l-2 border-champagne pl-6 md:pl-8">
                  <p className="text-balance font-serif text-[1.5rem] leading-[1.35] text-charcoal md:text-[1.875rem]">{renderInline(b.text)}</p>
                </blockquote>
                {b.by && <figcaption className="mt-4 pl-6 text-sm text-stone md:pl-8">{b.by}{b.source ? `, ${b.source}` : ''}</figcaption>}
              </figure>
            );
          case 'figures':
            return <Figures key={i} b={b} />;
          case 'question':
            return <Question key={i} b={b} />;
          case 'profiles':
            return <Profiles key={i} b={b} />;
          case 'table':
            return <DataTable key={i} b={b} />;
          case 'compare':
            return <Compare key={i} b={b} />;
          case 'method':
            return <Method key={i} b={b} />;
          case 'analysis':
            return <Analysis key={i} b={b} />;
          case 'note':
            return <p key={i} className={`mt-8 border-l border-charcoal/25 pl-4 text-[0.9rem] leading-[1.7] text-charcoal/70 ${MEASURE}`}>{renderInline(b.text)}</p>;
          case 'image':
            return (
              <figure key={i} className="my-14 md:my-20">
                <div className={`relative overflow-hidden ${b.ratio === 'wide' ? 'aspect-[16/8]' : 'aspect-[3/2]'}`}>
                  <BFImage slot={b.slot} sizes="(min-width:1024px) 800px, 100vw" tag />
                </div>
                {b.caption && <figcaption className="mt-3 text-xs leading-relaxed text-stone">{renderInline(b.caption)}</figcaption>}
              </figure>
            );
          case 'divider':
            return <div key={i} aria-hidden className="my-16 h-px w-16 bg-champagne md:my-20" />;
        }
      })}
    </div>
  );
}
