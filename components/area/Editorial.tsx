import type { AreaDeep } from '@/lib/data/area-types';
import { StatusBadge } from './Status';
import { Disclaimer } from '@/components/ui/Bits';

/** "Une master community en construction" */
export function Maturation({ data }: { data: AreaDeep['maturation'] }) {
  return (
    <section id="maturation" className="section bg-ivory-200">
      <div className="wrap">
        <h2 className="h-section max-w-3xl">{data.title}</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-charcoal/75">{data.intro}</p>

        <ul className="mt-12 grid gap-px bg-stone-light/50 sm:grid-cols-2 lg:grid-cols-4">
          {data.layers.map((l) => (
            <li key={l.title} className="bg-ivory-200 p-6 lg:first:pl-0">
              <h3 className="font-serif text-xl">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{l.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h3 className="font-serif text-2xl text-champagne-dark">Ce que cette maturation peut apporter</h3>
            <ul className="mt-5 space-y-3 text-charcoal/80">
              {data.potential.map((t) => (
                <li key={t} className="flex gap-3"><span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-champagne" />{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl">Ce qu’elle implique</h3>
            <ul className="mt-5 space-y-3 text-charcoal/80">
              {data.implications.map((t) => (
                <li key={t} className="flex gap-3"><span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-charcoal/40" />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Investment thesis, always followed immediately by the counter-arguments. */
export function Thesis({ data }: { data: AreaDeep['thesis'] }) {
  return (
    <section id="these" className="section">
      <div className="wrap">
        <h2 className="h-section max-w-3xl">{data.title}</h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-charcoal/75">{data.intro}</p>

        <ul className="mt-12">
          {data.forArgs.map((a) => (
            <li key={a.title} className="grid gap-3 border-t border-stone-light/70 py-6 md:grid-cols-[0.45fr_1fr] md:gap-10">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-2xl">{a.title}</h3>
                {a.status && <StatusBadge status={a.status} />}
              </div>
              <p className="leading-relaxed text-charcoal/75">{a.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 bg-charcoal p-8 text-ivory md:p-12">
          <h3 className="font-serif text-3xl leading-tight">{data.againstTitle}</h3>
          <ul className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2">
            {data.againstArgs.map((a) => (
              <li key={a.title} className="border-t border-ivory/15 pt-4">
                <h4 className="font-serif text-xl">{a.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug">{data.closing}</p>
        <Disclaimer>Analyse qualitative à visée informative. Elle ne constitue ni un conseil financier, ni une promesse de valorisation.</Disclaimer>
      </div>
    </section>
  );
}

/** Which investor profiles the district may suit — and where caution applies. */
export function InvestorFit({ items }: { items: AreaDeep['investorFit'] }) {
  return (
    <section id="profils" className="section">
      <div className="wrap">
        <h2 className="h-section max-w-3xl">À quel profil d’investisseur ce quartier peut correspondre</h2>
        <ul className="mt-12">
          {items.map((i) => (
            <li key={i.profile} className="grid gap-3 border-t border-stone-light/70 py-6 md:grid-cols-[0.6fr_0.3fr_1fr] md:items-baseline md:gap-8">
              <p className="font-serif text-xl">{i.profile}</p>
              <p className={`text-xs font-medium ${i.fit === 'may-suit' ? 'text-champagne-dark' : 'text-charcoal/60'}`}>
                {i.fit === 'may-suit' ? 'Peut convenir' : 'À examiner avec prudence'}
              </p>
              <p className="text-sm leading-relaxed text-charcoal/75">{i.text}</p>
            </li>
          ))}
        </ul>
        <Disclaimer>Ces profils sont indicatifs. Seule une consultation permet d’évaluer l’adéquation avec votre situation.</Disclaimer>
      </div>
    </section>
  );
}
