import BFImage from '@/components/BFImage';
import Reveal from '@/components/Reveal';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import CtaBand from '@/components/ui/CtaBand';
import { buildMetadata } from '@/lib/seo';
import { ABOUT } from '@/lib/data/about';

export const metadata = buildMetadata({
  title: 'À propos de BF Properties',
  description: 'BF Properties accompagne les investisseurs internationaux dans la compréhension, la sélection et l’acquisition d’opportunités immobilières à Dubai, en commençant par l’investisseur.',
  path: '/a-propos',
});

/** The supplied copy marks its bold passages with `**…**`. `tone` sets the colour of the bold part (the lines are display-only: no word is added, removed or reordered). */
function Rich({ text, strong = 'font-semibold text-charcoal' }: { text: string; strong?: string }) {
  return <>{text.split('**').map((part, i) => (i % 2 ? <strong key={i} className={strong}>{part}</strong> : part))}</>;
}
const plain = (t: string) => t.replace(/\*\*/g, '');

// Text on ivory: body 85 % charcoal (≈ 11:1), secondary 75 % (≈ 8:1). On charcoal: ivory 85 % / 75 %. The previous page used 75 / 65 / 60 %.
const BODY = 'max-w-[34rem] text-[1.0625rem] leading-[1.75] text-charcoal/85 md:text-[1.125rem]';
const BODY_DARK = 'text-[1.0625rem] leading-[1.7] text-ivory/85';
// The site's champagne-dark (#9A7A47) is 3.6:1 on ivory: too pale for a 13px label. Same hue, darker (#7E6234): 5:1.
const EYEBROW = 'ed-eyebrow !text-[#7E6234]';
const H2 = 'font-serif font-medium leading-[1.08] tracking-tight text-balance text-[2.25rem] md:text-[3rem] lg:text-[3.5rem]';

// The story of the supplied copy, in the order of the copy:
//   intro   = « Je m’appelle… », « Il y a quatre ans… », « À l’époque, je me posais… » (its questions are set as a list)
//   journey = the five paragraphs that follow, the idea (« Et progressivement… ») being the key sentence of the page.
const [name, since, questionsPara, ...journey] = ABOUT.story;
const [asked, ...questions] = questionsPara.match(/\S[^.?]*[.?]/g) ?? [questionsPara]; // « À l’époque… aujourd’hui. » then each question
const [journeyA, journeyB, journeyC, idea, born] = journey;
const subtitle = ABOUT.subtitle.match(/\S[^.]*\./g) ?? [ABOUT.subtitle];
// Philosophy: the last paragraph is its key sentence, set large.
const philoText = ABOUT.investor.paragraphs.slice(0, -1);
const philoQuote = ABOUT.investor.paragraphs[ABOUT.investor.paragraphs.length - 1];
// Commitment: three short columns.
const [capitalA, capitalB, capitalC] = ABOUT.capital.paragraphs;
// Conclusion: the all-bold paragraph is the key sentence.
const isStatement = (t: string) => t.startsWith('**') && t.endsWith('**') && t.indexOf('**', 2) === t.length - 2;

export default function Page() {
  const lastWords = ABOUT.capital.title.split(' ');
  const quoteHead = lastWords.slice(0, -2).join(' ');
  const quoteTail = lastWords.slice(-2).join(' ');
  return (
    <>
      {/* 1 · INTRODUCTION — title on charcoal (the transparent site header stays legible), then the photograph, full width and unobstructed */}
      <section className="bg-charcoal text-ivory">
        <div className="wrap pb-12 pt-32 md:pb-16 md:pt-40">
          <Breadcrumbs items={[{ label: 'À propos' }]} />
          <h1 className="mt-12 max-w-[60rem] text-balance font-serif text-[2.75rem] font-medium leading-[1.04] tracking-tight sm:text-6xl md:mt-16 lg:text-[5rem]">
            {ABOUT.title.replace(' j’ai commencé par investir.', '')}{' '}
            <span className="text-champagne-light">j’ai commencé par investir.</span>
          </h1>
          <p className="mt-8 flex flex-col gap-1 font-serif text-[1.5rem] leading-snug text-ivory/85 md:text-[1.875rem]">
            {subtitle.map((l) => <span key={l}>{l}</span>)}
          </p>
        </div>
        <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
          <BFImage slot="hero-about" priority sizes="100vw" />
        </div>
      </section>

      {/* 1 · INTRODUCTION — my story begins: the name set large across the page, then two short paragraphs beside the questions I was asking */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="wrap">
          <Reveal>
            <p className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-[4rem]">
              <Rich text={name} strong="font-medium text-champagne-dark" />
            </p>
          </Reveal>
          <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12 lg:gap-x-16">
            <Reveal className="space-y-5 lg:col-span-5">
              <p className={BODY}><Rich text={since} /></p>
              <p className={BODY}>{asked}</p>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7">
              <ul className="max-w-[34rem] divide-y divide-charcoal/15 border-y border-charcoal/15 font-serif text-[1.375rem] leading-snug text-charcoal md:text-[1.5rem]">
                {questions.map((q) => <li key={q} className="py-3">{q}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 · MON PARCOURS — three short paragraphs on the left, the idea that became BF Properties set large on the right */}
      <section className="bg-ivory-200 py-16 md:py-24">
        <div className="wrap">
          <h2 className={EYEBROW}>Mon parcours</h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-x-16">
            <Reveal className="space-y-5 lg:col-span-5">
              <p className={BODY}>{journeyA}</p>
              <p className={BODY}>{journeyB}</p>
              <p className={BODY}>{journeyC}</p>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-7">
              <span aria-hidden className="block h-px w-14 bg-champagne-dark" />
              <p className="mt-6 text-balance font-serif text-[1.75rem] font-medium leading-[1.2] tracking-tight text-charcoal/80 md:text-[2.25rem] lg:text-[2.5rem]">
                <Rich text={idea} strong="font-medium text-charcoal" />
              </p>
              <p className="mt-6 font-serif text-[1.375rem] text-charcoal md:text-[1.625rem]"><Rich text={born} strong="font-medium text-champagne-dark" /></p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 · MA PHILOSOPHIE — asymmetric: the picture and the key sentence stacked on the left, the text offset on the right */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16">
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:col-span-5 lg:row-start-1 lg:aspect-[4/5]">
            <BFImage slot="philosophy" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
          <Reveal className="lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
            <p className={EYEBROW}>Ma philosophie</p>
            <h2 className={`${H2} mt-5`}>{ABOUT.investor.title}</h2>
            <div className="mt-8 space-y-5">
              <p className={BODY}>{philoText[0]}</p>
              <p className="max-w-[34rem] font-serif text-[1.5rem] leading-[1.35] text-charcoal md:text-[1.75rem]">{philoText[1]}</p>
              <p className={BODY}>{philoText[2]}</p>
            </div>
          </Reveal>
          <blockquote className="border-l-2 border-champagne-dark pl-6 md:pl-8 lg:col-span-5 lg:row-start-2 lg:self-end">
            <p className="text-balance font-serif text-[1.75rem] font-medium leading-[1.2] tracking-tight text-charcoal md:text-[2.125rem]">{philoQuote}</p>
          </blockquote>
        </div>
      </section>

      {/* 4 · MON ENGAGEMENT — the large quotation, then my three criteria side by side */}
      <section className="bg-charcoal py-16 text-ivory md:py-24">
        <div className="wrap">
          <h2 className="ed-eyebrow !text-champagne-light">Mon engagement</h2>
          <Reveal>
            <blockquote className="mt-8 max-w-[62rem] text-balance font-serif text-[2.25rem] font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[4.5rem]">
              {quoteHead} <span className="text-champagne-light">{quoteTail}</span>
            </blockquote>
          </Reveal>
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-14">
            {[capitalA, capitalB, capitalC].map((t, i) => (
              <div key={i}>
                <span aria-hidden className="block h-px w-10 bg-champagne-light" />
                <p className={i === 0 ? 'mt-5 font-serif text-[1.5rem] leading-[1.3] text-ivory md:text-[1.75rem]' : `${BODY_DARK} mt-5`}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · CONCLUSION — why I created BF Properties: title and signature on the left, the text on the right; the call to action follows */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="wrap grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-16">
          <h2 className={`${H2} lg:col-span-5 lg:row-start-1`}>{ABOUT.why.title}</h2>
          <Reveal className="space-y-5 lg:col-span-6 lg:col-start-7 lg:row-span-2 lg:row-start-1">
            {ABOUT.why.paragraphs.map((t, i) => isStatement(t)
              ? <p key={i} className="max-w-[36rem] py-2 font-serif text-[1.5rem] font-medium leading-[1.3] text-charcoal md:text-[1.875rem]">{plain(t)}</p>
              : <p key={i} className={BODY}>{t}</p>)}
          </Reveal>
          <div className="lg:col-span-5 lg:row-start-2 lg:self-end">
            <p className="border-t border-charcoal/20 pt-6">
              <span className="block font-serif text-[2rem] font-medium leading-none text-charcoal">{ABOUT.why.signature.name}</span>
              <span className="mt-2 block text-sm text-charcoal/75">{ABOUT.why.signature.role}</span>
            </p>
            <p className="mt-8 max-w-[26rem] text-sm leading-relaxed text-charcoal/75">Nous vous recommandons de faire valider les aspects juridiques, fiscaux et financiers de votre projet par des conseillers qualifiés.</p>
          </div>
        </div>
      </section>

      <CtaBand id="about_page" title={ABOUT.cta.title} label={ABOUT.cta.label} href={ABOUT.cta.href} />
    </>
  );
}
