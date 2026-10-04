import type { InfraItem, InfraStatus, SourceRef } from '@/lib/data/area-types';
import SourceRefs from './SourceRefs';

/**
 * Status system for any infrastructure mentioned on BF Properties.
 * Rule: every future infrastructure shown on the site carries exactly one of these three statuses,
 * so readers never confuse what exists with what is announced.
 */
export const STATUS_META: Record<InfraStatus, { label: string; definition: string }> = {
  existing: { label: 'Existant', definition: 'En service ou livré, selon la source citée.' },
  'under-construction': { label: 'En construction', definition: 'Travaux engagés. Aucune garantie de calendrier.' },
  planned: { label: 'Planifié / annoncé', definition: 'Annoncé, mais travaux non engagés ou configuration finale à confirmer.' },
};

const ORDER: InfraStatus[] = ['existing', 'under-construction', 'planned'];

/** Shape + label (never colour alone): solid = existing, half = under construction, dashed ring = planned. */
function Mark({ status }: { status: InfraStatus }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden className="shrink-0">
      {status === 'existing' && <circle cx="6" cy="6" r="5" fill="currentColor" />}
      {status === 'under-construction' && (
        <>
          <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M6 1a5 5 0 0 1 0 10z" fill="currentColor" />
        </>
      )}
      {status === 'planned' && <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />}
    </svg>
  );
}

export function StatusBadge({ status, tone = 'light', className = '' }: { status: InfraStatus; tone?: 'light' | 'dark'; className?: string }) {
  const color =
    tone === 'dark'
      ? 'border-ivory/30 text-ivory/90'
      : status === 'existing'
        ? 'border-charcoal/40 text-charcoal'
        : 'border-champagne text-champagne-dark';
  return (
    <span className={`inline-flex items-center gap-2 border px-2.5 py-1 text-[0.7rem] font-medium tracking-wide ${color} ${className}`}>
      <Mark status={status} />
      {STATUS_META[status].label}
    </span>
  );
}

export function StatusLegend({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <dl className={`grid gap-4 sm:grid-cols-3 ${tone === 'dark' ? 'text-ivory/70' : 'text-charcoal/70'}`}>
      {ORDER.map((s) => (
        <div key={s}>
          <dt><StatusBadge status={s} tone={tone} /></dt>
          <dd className="mt-2 text-xs leading-relaxed">{STATUS_META[s].definition}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Infrastructure grouped by status, each item with its sources. */
export function InfraBoard({ items, sources }: { items: InfraItem[]; sources: SourceRef[] }) {
  return (
    <div className="space-y-12">
      {ORDER.map((status) => {
        const list = items.filter((i) => i.status === status);
        if (!list.length) return null;
        return (
          <div key={status}>
            <h3 className="sr-only">{STATUS_META[status].label}</h3>
            <StatusBadge status={status} />
            <ul className="mt-4">
              {list.map((i) => (
                <li key={i.name} className="grid gap-2 border-t border-stone-light/70 py-5 md:grid-cols-[0.45fr_1fr] md:gap-10">
                  <p className="font-serif text-xl">{i.name}</p>
                  <div>
                    <p className="text-sm leading-relaxed text-charcoal/80">
                      {i.summary} <SourceRefs ids={i.sourceIds} sources={sources} />
                    </p>
                    {i.toConfirm && <p className="mt-2 text-xs text-stone">À confirmer : {i.toConfirm}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
