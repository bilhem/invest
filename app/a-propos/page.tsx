import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import Reveal from '@/components/Reveal';
import BFImage from '@/components/BFImage';
import { buildMetadata } from '@/lib/seo';
import { ABOUT } from '@/lib/data/about';

export const metadata = buildMetadata({
  title: 'À propos de BF Properties',
  description: 'BF Properties accompagne les investisseurs internationaux dans la compréhension, la sélection et l’acquisition d’opportunités immobilières à Dubai, en commençant par l’investisseur.',
  path: '/a-propos',
});

const METHOD = [
  { t: 'Comprendre', d: 'Votre situation financière, vos objectifs, votre horizon et vos contraintes.' },
  { t: 'Analyser', d: 'Le marché, les quartiers, les promoteurs et les structures de paiement.' },
  { t: 'Sélectionner', d: 'Une sélection ciblée d’opportunités, plutôt qu’un catalogue.' },
  { t: 'Accompagner', d: 'La comparaison et l’acquisition, étape par étape.' },
  { t: 'Suivre', d: 'Le suivi de votre investissement après l’achat.' },
];

/** The supplied copy marks its bold passages with `**…**`. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) => (i % 2 ? <strong key={i} className="font-semibold text-charcoal">{part}</strong> : part))}
    </>
  );
}
/** A paragraph that is entirely bold in the source is the key sentence of its section: set in serif, like the other statements of the site. */
const isStatement = (t: string) => t.startsWith('**') && t.endsWith('**') && t.indexOf('**', 2) === t.length - 2;

const BODY = 'leading-relaxed text-charcoal/75';
const STATEMENT = 'font-serif text-2xl leading-snug text-charcoal md:text-[1.75rem]';

export default function Page() {
  return (
    <>
      <PageHero image="hero-about" title={ABOUT.title} subtitle={ABOUT.subtitle} crumbs={[{ label: 'À propos' }]} />

      {/* « Je m’appelle Bilel Hemissi. » — the story, with the second render beside it */}
      <section className="section">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <div className={`max-w-xl space-y-5 ${BODY}`}>
              {ABOUT.story.map((t, i) => (
                <p key={i} className={i === 0 ? 'font-serif text-3xl leading-tight text-charcoal md:text-4xl' : undefined}><Rich text={t} /></p>
              ))}
            </div>
          </Reveal>
          <div className="relative aspect-[4/5] lg:sticky lg:top-28"><BFImage slot="philosophy" tag sizes="(min-width:1024px) 40vw, 100vw" /></div>
        </div>
      </section>

      <section className="section bg-ivory-200">
        <div className="wrap max-w-3xl">
          <Reveal>
            <h2 className="h-section">{ABOUT.investor.title}</h2>
            <div className={`mt-8 space-y-5 ${BODY}`}>
              {ABOUT.investor.paragraphs.map((t, i) => (
                <p key={i} className={i === 1 ? STATEMENT : undefined}><Rich text={t} /></p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="wrap max-w-3xl">
          <Reveal>
            <h2 className="h-section">{ABOUT.capital.title}</h2>
            <div className={`mt-8 space-y-5 ${BODY}`}>
              {ABOUT.capital.paragraphs.map((t, i) => (
                <p key={i} className={i === 0 ? STATEMENT : undefined}><Rich text={t} /></p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ivory-200">
        <div className="wrap max-w-3xl">
          <Reveal>
            <h2 className="h-section">{ABOUT.why.title}</h2>
            <div className={`mt-8 space-y-5 ${BODY}`}>
              {ABOUT.why.paragraphs.map((t, i) => (
                <p key={i} className={isStatement(t) ? `${STATEMENT} py-2` : undefined}><Rich text={isStatement(t) ? t.slice(2, -2) : t} /></p>
              ))}
            </div>
            <p className="hairline mt-10 pt-8">
              <span className="block font-serif text-2xl text-charcoal">{ABOUT.why.signature.name}</span>
              <span className="mt-1 block text-sm text-charcoal/65">{ABOUT.why.signature.role}</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Existing method band, kept as it was */}
      <section className="section">
        <div className="wrap">
          <h2 className="h-section max-w-2xl">Notre méthode</h2>
          <ol className="mt-12 grid gap-px bg-stone-light/50 sm:grid-cols-2 lg:grid-cols-5">
            {METHOD.map((m, i) => (
              <li key={m.t} className="bg-ivory p-6 lg:first:pl-0">
                <span className="font-serif text-3xl text-champagne">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-serif text-2xl">{m.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{m.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-charcoal/60">Nous vous recommandons de faire valider les aspects juridiques, fiscaux et financiers de votre projet par des conseillers qualifiés.</p>
        </div>
      </section>

      <CtaBand id="about_page" title={ABOUT.cta.title} text={ABOUT.cta.text} label={ABOUT.cta.label} href={ABOUT.cta.href} />
    </>
  );
}
