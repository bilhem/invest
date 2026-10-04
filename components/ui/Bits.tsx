/** Small shared presentational pieces. */

export function SectionHead({ title, intro, className = '' }: { title: string; intro?: string; className?: string }) {
  return (
    <div className={className}>
      <h2 className="h-section max-w-3xl">{title}</h2>
      {intro && <p className="mt-5 max-w-2xl leading-relaxed text-charcoal/70">{intro}</p>}
    </div>
  );
}

export function Disclaimer({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`mt-8 border-l-2 border-champagne pl-4 text-xs leading-relaxed ${dark ? 'text-ivory/60' : 'text-stone'}`}>{children}</p>
  );
}

export function Placeholder({ children }: { children: React.ReactNode }) {
  return <span className="rounded-sm bg-champagne/15 px-1.5 py-0.5 text-champagne-dark">{children}</span>;
}

/** Banner shown on pages whose content is still demonstration copy. */
export function DraftNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-champagne/30 bg-champagne/10">
      <p className="wrap py-3 text-xs leading-relaxed text-charcoal/80">{children}</p>
    </div>
  );
}
