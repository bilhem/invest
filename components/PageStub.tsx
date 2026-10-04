export default function PageStub({ title }: { title: string }) {
  return (
    <section className="flex min-h-[70svh] items-end bg-charcoal pb-20 pt-40 text-ivory">
      <div className="wrap">
        <p className="eyebrow">Prochaine phase</p>
        <h1 className="h-section mt-4">{title}</h1>
        <p className="mt-4 text-ivory/60">Cette page sera construite en Phase 3.</p>
      </div>
    </section>
  );
}
