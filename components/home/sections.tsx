import Link from 'next/link';
import Image from 'next/image';
import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import CtaLink from '@/components/CtaLink';
import { METHOD, STRATEGIES, AREAS, INSIGHTS } from '@/lib/content';
import { getStories } from '@/lib/cms';
import { STORY_NOTES } from '@/lib/data/stories';
import { getImage, type ImageKey } from '@/lib/images';

export function Hero() {
  return (
    <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-charcoal text-ivory">
      {/* Phones and tablets: the picture takes the top of the screen (wheel, island and waterfront stay in view above the text) and fades into the charcoal where the text starts.
          From 1024px: it fills the hero, shaded on the text side only (left) and along the bottom edge; the right of the picture is left untouched. The title is kept narrow
          so that it ends before the wheel. */}
      <div className="absolute inset-x-0 top-0 h-[52svh] lg:inset-0 lg:h-auto">
        <BFImage slot="hero" priority sizes="(min-width:3097px) 3097px, 100vw" />
      </div>
      <div aria-hidden className="absolute inset-x-0 top-0 h-[52svh] bg-gradient-to-t from-charcoal from-10% via-charcoal/55 via-35% to-transparent lg:hidden" />
      <div aria-hidden className="absolute inset-0 hidden lg:block lg:bg-[linear-gradient(90deg,rgba(27,26,24,0.88)_0%,rgba(27,26,24,0.66)_34%,rgba(27,26,24,0.26)_58%,rgba(27,26,24,0)_78%)]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 hidden h-[45%] bg-gradient-to-t from-charcoal/80 to-transparent lg:block" />
      <div className="wrap relative pb-14 pt-[32svh] md:pb-20 lg:pt-32">
        <p className="eyebrow">Dubai real estate investment advisory</p>
        <h1 className="h-display mt-5 max-w-3xl lg:max-w-[33rem]">L’investissement qui vous ressemble.</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg">
          À Dubai, chaque investisseur a des objectifs différents. BF Properties vous aide à comprendre le marché, définir votre stratégie et identifier les opportunités adaptées à votre situation.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/consultation" id="hero_project" className="btn btn-gold">Définir mon projet</CtaLink>
          <CtaLink href="/a-propos" id="hero_approach" className="btn btn-outline-light">Découvrir notre approche</CtaLink>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ivory/15 pt-6 text-xs text-ivory/70 md:grid-cols-4 md:text-sm">
          {['L’investisseur avant la propriété', 'Analyse du marché et des quartiers', 'Sélection ciblée, sur mesure', 'Accompagnement de A à Z'].map((t) => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section className="section">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
        <Reveal className="lg:col-span-5">
          <h2 className="h-section max-w-xl lg:leading-[1.1]">Nous ne commençons pas par vous montrer des propriétés.</h2>
          <p className="mt-8 font-serif text-2xl text-champagne-dark">Nous commençons par comprendre votre situation.</p>
          <p className="mt-5 max-w-md leading-relaxed text-charcoal/75">
            Votre capital, vos objectifs, votre horizon et vos contraintes déterminent les opportunités qui méritent réellement votre attention.
          </p>
          <CtaLink href="/a-propos" id="philosophy" className="btn btn-outline-dark mt-9">Notre approche</CtaLink>
        </Reveal>
        {/* Large editorial picture (5 columns of text / 7 of picture on desktop); edge to edge on phones and tablets so it never reads as a small card. */}
        <div className="relative -mx-6 aspect-[4/3] md:-mx-10 md:aspect-[16/10] lg:col-span-7 lg:mx-0 lg:aspect-[4/3]">
          <BFImage slot="home-philosophy" sizes="(min-width:1280px) 660px, (min-width:1024px) 58vw, 100vw" />
        </div>
      </div>
    </section>
  );
}

export function Method() {
  return (
    <section className="bg-ivory-200 section">
      <div className="wrap">
        <Reveal><h2 className="h-section max-w-2xl">Une sélection construite autour de vous.</h2></Reveal>
        <ol className="mt-14 grid gap-px bg-stone-light/50 sm:grid-cols-2 lg:grid-cols-4">
          {METHOD.map((m) => (
            <li key={m.n} className="bg-ivory-200 py-8 pr-6 sm:px-6 sm:first:pl-0">
              <span className="font-serif text-4xl text-champagne">{m.n}</span>
              <h3 className="mt-4 font-serif text-2xl">{m.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{m.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/**
 * Home: three of the four real case studies (Sonia stays on the Investor Stories page). Same card grid as before; the content comes from lib/data/stories.ts
 * (name — city, project · district, strategy, and one headline figure that carries its own label).
 */
export function Stories() {
  const stories = getStories().filter((s) => s.home);
  return (
    <section className="section">
      <div className="wrap">
        <Reveal><h2 className="h-section max-w-2xl">Des investisseurs. Des stratégies. Des résultats.</h2></Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stories.map((s) => (
            <article key={s.slug} className="group flex flex-col bg-white">
              <div className="relative aspect-[4/3]"><BFImage slot={s.img} sizes="(min-width:1240px) 400px, (min-width:768px) 33vw, 100vw" className="transition-transform duration-[1200ms] group-hover:scale-[1.03]" /></div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl">{s.name} — {s.city}</h3>
                <p className="text-sm text-stone">{s.project} · {s.area}</p>
                <dl className="mt-5 space-y-2 border-t border-stone-light/60 pt-4 text-sm">
                  {([['Stratégie', s.strategy], [s.home!.label, s.home!.value]] as const).map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4"><dt className="text-stone">{k}</dt><dd className={`text-right ${k === 'Stratégie' ? '' : 'whitespace-nowrap'}`}>{v}</dd></div>
                  ))}
                </dl>
                <Link href={`/investor-stories/${s.slug}`} className="mt-6 text-sm font-medium text-champagne-dark underline-offset-4 hover:underline">Découvrir le cas<span className="sr-only"> : {s.name}</span></Link>
              </div>
            </article>
          ))}
        </div>
        <Link href="/investor-stories" className="btn btn-outline-dark mt-10">Découvrir toutes les Investor Stories</Link>
        <p className="mt-6 max-w-4xl text-xs leading-relaxed text-stone">{STORY_NOTES.general}</p>
      </div>
    </section>
  );
}

/**
 * Small identity picture of a strategy (56 → 80 px): decorative (the title sits right beside it), shown whole in its own frame, never enlarged like a photograph.
 * The tile frames are part of the pictures (see lib/images.ts), hence `object-fill` on a box of the same shape: nothing is cropped, the seven frames line up.
 */
function StrategyIcon({ slot }: { slot: ImageKey }) {
  const img = getImage(slot);
  if (!('src' in img) || !img.src) return <span aria-hidden className="block h-14 w-14 shrink-0 sm:h-[4.5rem] sm:w-[4.5rem] lg:h-20 lg:w-20" />;
  return (
    <span className="block h-14 w-14 shrink-0 overflow-hidden rounded-[5px] transition-transform duration-500 group-hover:scale-[1.04] sm:h-[4.5rem] sm:w-[4.5rem] sm:rounded-md lg:h-20 lg:w-20">
      <Image src={img.src} alt="" width={img.width} height={img.height} sizes="(min-width:1024px) 80px, (min-width:640px) 72px, 56px" quality={85} className="h-full w-full object-fill" />
    </span>
  );
}

export function Strategies() {
  return (
    <section className="bg-charcoal section text-ivory">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <h2 className="h-section lg:leading-[1.1]">Plusieurs objectifs. Plusieurs façons d’investir.</h2>
          <CtaLink href="/strategies" id="strategies" className="btn btn-gold mt-9">Explorer les stratégies</CtaLink>
        </Reveal>
        <ul>
          {STRATEGIES.map((s) => (
            <li key={s.t} className="border-t border-ivory/[0.14] last:border-b">
              <Link href="/strategies" className="group -mx-3 flex items-center gap-4 px-3 py-5 transition-colors duration-500 hover:bg-ivory/[0.04] sm:-mx-4 sm:gap-6 sm:px-4 sm:py-6">
                <StrategyIcon slot={s.img as ImageKey} />
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-xl sm:text-2xl">{s.t}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ivory/60">{s.d}</span>
                </span>
                <span aria-hidden className="shrink-0 text-champagne/80 transition-all duration-500 group-hover:translate-x-1 group-hover:text-champagne">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * Home area grid on 6 columns: the first card is the big one (4 columns, 2 rows), the next two sit beside it, the rest follow in rows of three
 * (lg) or two (md). The last row is stretched so it never leaves a hole, whatever the number of districts.
 */
function areaCardClass(i: number, total: number): string {
  if (i === 0) return 'aspect-[16/10] md:col-span-4 md:row-span-2 md:aspect-auto md:min-h-[480px]';
  if (i < 3) return 'aspect-[4/3] md:col-span-2';
  const rest = total - 3;
  const k = i - 3;
  const last = k === rest - 1;
  // md: two per row (the last one takes the full row when the count is odd); lg: three per row (the last two share the row when 2 remain)
  const md = last && rest % 2 === 1 ? 'md:col-span-6' : 'md:col-span-3';
  const rem = rest % 3;
  const lg = rem === 1 && last ? 'lg:col-span-6' : rem === 2 && k >= rest - 2 ? 'lg:col-span-3' : 'lg:col-span-2';
  return `aspect-[4/3] ${md} ${lg}`;
}

export function Areas() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal><h2 className="h-section max-w-2xl">Comprendre Dubai, quartier par quartier.</h2></Reveal>
          <CtaLink href="/quartiers" id="areas" className="btn btn-outline-dark self-start">Explorer Dubai</CtaLink>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {AREAS.map((a, i) => (
            <Link key={a.slug} href={`/quartiers/${a.slug}`}
              className={`group relative block overflow-hidden text-ivory ${areaCardClass(i, AREAS.length)}`}>
              <BFImage slot={`area-${a.slug}` as ImageKey} overlay="soft" sizes="(min-width:768px) 50vw, 100vw" className="transition-transform duration-[1400ms] group-hover:scale-[1.04]" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <h3 className="font-serif text-2xl md:text-3xl">{a.name}</h3>
                <p className="mt-1 text-xs text-ivory/75">{a.tag}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LabTeaser() {
  return (
    <section className="relative overflow-hidden bg-charcoal section text-ivory">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Coming soon</p>
          <h2 className="h-section mt-4">BF Investment Lab</h2>
          <p className="mt-3 font-serif text-2xl text-champagne-light">Votre stratégie immobilière, modélisée.</p>
          <p className="mt-6 max-w-md leading-relaxed text-ivory/70">
            Un nouvel outil BF Properties conçu pour comparer différentes stratégies d’investissement, visualiser leurs besoins en capital et mieux préparer votre projet immobilier à Dubai.
          </p>
          <CtaLink href="/lab" id="lab_teaser" className="btn btn-gold mt-9">Découvrir le Lab</CtaLink>
        </Reveal>
        <div className="relative aspect-[4/3] border border-ivory/10"><BFImage slot="lab" overlay="strong" sizes="(min-width:1024px) 50vw, 100vw" /></div>
      </div>
    </section>
  );
}

export function Insights() {
  if (INSIGHTS.length === 0) return null;
  return (
    <section className="section">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <h2 className="h-section">BF Insights</h2>
            <p className="mt-3 font-serif text-2xl text-stone">Comprendre le marché. Mieux investir.</p>
          </Reveal>
          <CtaLink href="/insights" id="insights" className="btn btn-outline-dark self-start">Toutes les analyses</CtaLink>
        </div>
        {INSIGHTS.length === 1 ? (
          /* A single article: it is shown large rather than alone in a column of three. */
          <Link href={`/insights/${INSIGHTS[0].slug}`} className="group mt-14 grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-14">
            <div className="relative aspect-[3/2] overflow-hidden"><BFImage slot={INSIGHTS[0].img as ImageKey} sizes="(min-width:768px) 60vw, 100vw" className="transition-transform duration-[1200ms] group-hover:scale-[1.03]" /></div>
            <div>
              <p className="text-xs text-champagne-dark">{INSIGHTS[0].cat} · {INSIGHTS[0].meta}</p>
              <h3 className="mt-3 text-balance font-serif text-[1.75rem] leading-[1.15] transition-colors group-hover:text-champagne-dark md:text-[2.25rem]">{INSIGHTS[0].title}</h3>
              <p className="mt-5 leading-relaxed text-charcoal/70">{INSIGHTS[0].desc}</p>
              <span className="mt-6 inline-block text-sm font-medium text-champagne-dark">Lire l’analyse<span aria-hidden className="ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span></span>
            </div>
          </Link>
        ) : (
        <div className={`mt-14 grid gap-8 ${INSIGHTS.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {INSIGHTS.map((a) => (
            <Link key={a.slug} href={`/insights/${a.slug}`} className="group block">
              <div className="relative aspect-[3/2]"><BFImage slot={a.img as ImageKey} sizes="(min-width:768px) 33vw, 100vw" className="transition-transform duration-[1200ms] group-hover:scale-[1.03]" /></div>
              <p className="mt-5 text-xs text-champagne-dark">{a.cat} · {a.meta}</p>
              <h3 className="mt-2 font-serif text-2xl leading-snug group-hover:text-champagne-dark">{a.title}</h3>
            </Link>
          ))}
        </div>
        )}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative flex min-h-[70svh] items-center bg-charcoal text-ivory">
      <BFImage slot="cta" overlay="strong" />
      <div className="wrap relative py-24 text-center">
        <h2 className="h-section mx-auto max-w-2xl">Votre projet commence par une conversation.</h2>
        <CtaLink href="/consultation" id="final" className="btn btn-gold mt-10">Prendre rendez-vous</CtaLink>
      </div>
    </section>
  );
}
