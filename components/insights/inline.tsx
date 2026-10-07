import { Fragment } from 'react';
import Link from 'next/link';
import { nb } from '@/components/neighborhood/ui';
import { plainText, type Block } from '@/lib/data/articles';

const TOKEN = /(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*)/g;
export const LINK_CLASS = 'underline decoration-champagne/70 decoration-1 underline-offset-[5px] transition-colors hover:text-champagne-dark';

/** Display only: keeps a figure with its unit on one line (« 60 303 », « 6 % », « 100 000 € », « 252 milliards AED »); only the kind of space changes, never a word. */
export const keepNumbers = (text: string) =>
  text
    .replace(/(\d) (?=\d{3}(?!\d))/g, '$1\u00a0')
    .replace(/(\d) (?=(?:%|€|M€|AED\b|sqft\b|milliards?\b|millions?\b))/g, '$1\u00a0')
    .replace(/(milliards?|millions?) (?=AED\b|d’euros)/g, '$1\u00a0');

/**
 * Inline markup of the article texts, display only: [label](/route) internal link, [label](https://…) external link, **bold**.
 * French typography is applied (non-breaking space before « : ; ? ! », short hyphenated words kept whole); the wording is never changed.
 */
export function renderInline(text: string): React.ReactNode {
  return text.split(TOKEN).map((part, i) => {
    const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      return href.startsWith('/')
        ? <Link key={i} href={href} className={LINK_CLASS}>{label}</Link>
        : <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>{label}</a>;
    }
    const bold = /^\*\*([^*]+)\*\*$/.exec(part);
    if (bold) return <strong key={i} className="font-medium text-charcoal">{nb(bold[1] ?? '')}</strong>;
    return <Fragment key={i}>{nb(keepNumbers(part))}</Fragment>;
  });
}

/** Anchor from a heading: accents removed, lower case, hyphens. */
export const slugify = (text: string) =>
  plainText(text).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

/** Gives every H2 a unique anchor (the block's own `id`, else generated from its text). */
export function withHeadingIds(blocks: Block[]): Block[] {
  const used = new Set<string>(['sources']);
  return blocks.map((b) => {
    if (b.type !== 'h2') return b;
    const base = b.id ?? (slugify(b.text) || 'section');
    let id = base;
    for (let n = 2; used.has(id); n += 1) id = `${base}-${n}`;
    used.add(id);
    return { ...b, id };
  });
}

/** Table of contents: the H2 blocks (with ids) that have not opted out, labelled with their `short` title when they have one. */
export function tocFrom(blocks: Block[]): { id: string; label: string }[] {
  return blocks.flatMap((b) => (b.type === 'h2' && b.toc !== false && b.id ? [{ id: b.id, label: plainText(b.short ?? b.text) }] : []));
}
