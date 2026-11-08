import BFImage from '@/components/BFImage';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CtaLink from '@/components/CtaLink';
import { buildMetadata } from '@/lib/seo';
import { ABOUT, type AboutBlock } from '@/lib/data/about';

export const metadata = buildMetadata({
  title: 'À propos : Bilel Hemissi, investisseur immobilier à Dubai',
  description: 'Bilel Hemissi, investisseur à Dubai depuis quatre ans : son parcours, sa manière d’investir, ses engagements et la raison d’être de BF Properties.',
  path: '/a-propos',
});

/**
 * One type scale for the whole page (serif for headings, sans for everything else, one weight per role):
 *   H1 32 → 40 → 48 px · H2 28 → 32 px · H3 20 → 22 px · text 16 px / 1.7 · notes 14 px.
 * One container (1100 px), one text measure (36 rem ≈ 70 characters), one vertical rhythm (48 → 64 px).
 */
const CONTAINER = 'mx-auto w-full max-w-[1100px] px-6 md:px-10';
const H1 = 'font-serif text-[2rem] font-medium leading-[1.15] tracking-tight sm:text-[2.5rem] lg:text-[3rem]';
const H2 = 'font-serif text-[1.75rem] font-medium leading-[1.2] tracking-tight text-charcoal md:text-[2rem]';
const H3 = 'font-serif text-[1.25rem] font-medium leading-snug text-charcoal md:text-[1.375rem]';
const TEXT = 'text-base leading-[1.7] text-charcoal/80';
/** Section = title on the left, text on the right (36 rem); stacked on tablets and phones. */
const ROW = 'grid gap-6 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] lg:gap-x-16';

/** `**…**` (the key sentence of a section, the founder's name) is set in one style. */
function Rich({ text }: { text: string }) {
  return <>{text.split('**').map((part, i) => (i % 2 ? <strong key={i} className="font-semibold text-charcoal">{part}</strong> : part))}</>;
}

function Block({ b }: { b: AboutBlock }) {
  if (b.type === 'h3') return <h3 className={H3}>{b.text}</h3>;
  if (b.type === 'list') {
    return (
      <ul className={`list-disc space-y-1.5 pl-5 marker:text-champagne-dark ${TEXT}`}>
        {b.items.map((t) => <li key={t}>{t}</li>)}
      </ul>
    );
  }
  return <p className={TEXT}><Rich text={b.text} /></p>;
}

export default function Page() {
  const [first, ...others] = ABOUT.sections;
  const section = (s: (typeof ABOUT.sections)[number], extra?: React.ReactNode, ruled = true) => (
    <section key={s.id} aria-labelledby={`${s.id}-title`} className={`${ROW} ${ruled ? 'border-t border-charcoal/15' : ''}`}>
      <h2 id={`${s.id}-title`} className={H2}>{s.title}</h2>
      <div className="space-y-5">
        {s.blocks.map((b, i) => <Block key={i} b={b} />)}
        {extra}
      </div>
    </section>
  );
  const last = others[others.length - 1];
  return (
    <>
      {/* HERO — the page's own: title and subtitle on charcoal (the transparent site header stays legible), then the photograph, full width */}
      <section className="bg-charcoal text-ivory">
        <div className={`${CONTAINER} pb-12 pt-32 md:pb-14 md:pt-40`}>
          <Breadcrumbs items={[{ label: 'À propos' }]} />
          <h1 className={`${H1} mt-10 max-w-[40rem] text-balance`}>{ABOUT.title}</h1>
          <p className="mt-5 max-w-[36rem] text-base leading-[1.7] text-ivory/80">{ABOUT.subtitle}</p>
        </div>
        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
          <BFImage slot="hero-about" priority sizes="100vw" />
        </div>
      </section>

      {/* CONTENT — one background, four sections with the same layout, one photograph */}
      <div className="bg-ivory">
        <div className={CONTAINER}>
          {section(first, undefined, false)}

          <div className="relative aspect-[4/3] md:aspect-[16/9]">
            <BFImage slot="philosophy" sizes="(min-width: 1100px) 1020px, 100vw" />
          </div>

          {/* the photograph is the divider between « Mon histoire » and the next section: no rule there */}
          {others.slice(0, -1).map((s, i) => section(s, undefined, i > 0))}

          {section(
            last,
            <div className="pt-4">
              <p className="text-sm leading-relaxed text-charcoal/80">
                <span className="font-semibold text-charcoal">{ABOUT.signature.name}</span>
                <span aria-hidden> · </span>
                <span className="sr-only">, </span>
                {ABOUT.signature.role}
              </p>
              <div className="mt-8 border-t border-charcoal/15 pt-8">
                <p className="text-base font-semibold leading-[1.7] text-charcoal">{ABOUT.cta.text}</p>
                <CtaLink href={ABOUT.cta.href} id="about_page" className="btn btn-outline-dark mt-5">
                  {ABOUT.cta.label}<span aria-hidden>→</span>
                </CtaLink>
                <p className="mt-6 text-sm leading-relaxed text-charcoal/75">{ABOUT.note}</p>
              </div>
            </div>,
          )}
        </div>
      </div>
    </>
  );
}
