import type { SourceRef } from '@/lib/data/area-types';

const fmt = (iso: string) => new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Sources({ sources, lastReviewed }: { sources: SourceRef[]; lastReviewed: string }) {
  return (
    <section id="sources" className="section border-t border-stone-light/60 bg-ivory-200">
      <div className="wrap max-w-4xl">
        <h2 className="h-section">Sources et vérification</h2>
        <p className="mt-4 text-sm text-stone">
          Informations vérifiées le {fmt(lastReviewed)}. Nous privilégions les sources primaires (promoteur, RTA, gouvernement de Dubaï). Une information de presse est signalée comme telle. Ce qui n’est pas établi est indiqué « à confirmer ».
        </p>
        <ol className="mt-8">
          {sources.map((s, i) => (
            <li key={s.id} id={`source-${s.id}`} className="scroll-mt-28 grid gap-1 border-t border-stone-light/70 py-4 text-sm md:grid-cols-[2.5rem_1fr]">
              <span className="font-serif text-lg text-champagne-dark">{i + 1}</span>
              <div>
                <p>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-champagne-dark">{s.title}</a>
                </p>
                <p className="mt-1 text-xs text-stone">
                  {s.publisher} — {fmt(s.date)} — {s.type === 'primary' ? 'Source officielle' : 'Presse'}
                </p>
                {s.note && <p className="mt-1 text-xs text-charcoal/60">{s.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
