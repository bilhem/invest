import type { SourceRef } from '@/lib/data/area-types';

/** Inline numbered references that jump to the sources list ("Sources et vérification"). */
export default function SourceRefs({ ids, sources, tone = 'light' }: { ids: string[]; sources: SourceRef[]; tone?: 'light' | 'dark' }) {
  const refs = ids
    .map((id) => ({ id, n: sources.findIndex((s) => s.id === id) + 1 }))
    .filter((r) => r.n > 0);
  if (!refs.length) return null;
  return (
    <span className="whitespace-nowrap">
      {refs.map((r) => (
        <a
          key={r.id}
          href={`#source-${r.id}`}
          aria-label={`Source ${r.n}`}
          className={`ml-0.5 align-super text-[0.65rem] font-medium hover:underline ${tone === 'dark' ? 'text-champagne-light' : 'text-champagne-dark'}`}
        >
          [{r.n}]
        </a>
      ))}
    </span>
  );
}
