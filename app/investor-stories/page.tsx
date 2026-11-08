import PageHero from '@/components/ui/PageHero';
import CtaLink from '@/components/CtaLink';
import Reveal from '@/components/Reveal';
import StoryCard, { storyStatus } from '@/components/stories/StoryCard';
import { buildMetadata } from '@/lib/seo';
import { getStories } from '@/lib/cms';
import { STORY_NOTES } from '@/lib/data/stories';

export const metadata = buildMetadata({
  title: 'Investor Stories : parcours d’investisseurs immobiliers à Dubai',
  description: 'Des cas réels pour montrer comment un objectif d’investissement devient une stratégie, puis le choix d’un quartier, d’un projet et d’une unité à Dubai.',
  path: '/investor-stories',
});

export default function Page() {
  const stories = getStories();
  const kinds = (['sold', 'held'] as const).filter((k) => stories.some((s) => s.outcome === k));
  const kindLabel = (k: 'sold' | 'held') => storyStatus(stories.find((s) => s.outcome === k)!);
  return (
    <>
      <PageHero
        image="hero-stories"
        eyebrow="Investor Stories"
        title={'Des stratégies réelles. Des parcours réels.'}
        subtitle="Il n’existe pas une seule façon d’investir à Dubai."
        crumbs={[{ label: 'Investor Stories' }]}
      />

      {/* The cases: one compact grid (2 columns from tablets up, 1 on phones) in place of four full-width spreads. */}
      <section className="bg-ivory pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="wrap">
          <Reveal>
            <span aria-hidden className="block h-px w-10 bg-champagne-dark" />
            <h2 className="mt-5 font-serif text-[1.875rem] font-medium leading-[1.1] tracking-tight md:text-[2.375rem]">
              Des décisions. <span className="text-champagne-dark">Des résultats.</span>
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-x-12 gap-y-14 md:mt-14 md:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
            {stories.map((s) => (
              <li key={s.slug} id={s.slug} className="min-w-0 scroll-mt-24">
                <Reveal className="h-full">
                  <StoryCard story={s} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Supplied notes, unchanged. Each specific note carries the label of the cards it applies to. */}
      <section aria-label="Notes" className="bg-ivory pb-12 md:pb-16">
        <div className="wrap">
          <div className="grid gap-x-12 gap-y-6 border-t border-charcoal/15 pt-8 md:grid-cols-2 lg:gap-x-16">
            <p className="max-w-[40rem] text-xs leading-relaxed text-charcoal/75 md:col-span-2">{STORY_NOTES.general}</p>
            {kinds.map((k) => (
              <p key={k} className="max-w-[40rem] text-xs leading-relaxed text-charcoal/75">
                <span className="mb-1 block font-medium uppercase tracking-[0.16em] text-[#7E6234]">{kindLabel(k)}</span>
                {STORY_NOTES[k]}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Discreet call to action. */}
      <section className="bg-ivory-200 py-10 md:py-12">
        <div className="wrap flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <p className="font-serif text-[1.5rem] leading-snug tracking-tight md:text-[1.75rem]">Construisons votre propre stratégie.</p>
          <CtaLink href="/consultation" id="stories_page" className="btn btn-outline-dark shrink-0">
            Prendre rendez-vous<span aria-hidden>→</span>
          </CtaLink>
        </div>
      </section>
    </>
  );
}
