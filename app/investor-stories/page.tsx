import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import StoryFeature from '@/components/stories/StoryFeature';
import StoryNotes from '@/components/stories/StoryNotes';
import { fr } from '@/components/neighborhood/ui';
import { buildMetadata } from '@/lib/seo';
import { getStories } from '@/lib/cms';
import type { StoryTone } from '@/lib/data/stories';

export const metadata = buildMetadata({
  title: 'Investor Stories',
  description: 'Investor Stories présente des cas réels pour montrer comment un objectif d’investissement peut se traduire en stratégie, puis en sélection d’un quartier, d’un projet et finalement d’une unité.',
  path: '/investor-stories',
});

const INTRO = [
  'Certains investisseurs recherchent la valorisation du capital. D’autres privilégient le revenu, la liquidité ou la construction patrimoniale.',
  'Investor Stories présente des cas réels pour montrer comment un objectif d’investissement peut se traduire en stratégie, puis en sélection d’un quartier, d’un projet et finalement d’une unité.',
];

export default function Page() {
  const stories = getStories();
  // Light / sand alternate from the intro on (the notes follow the last case on the opposite background).
  const tones: StoryTone[] = stories.map((_, i) => (i % 2 === 0 ? 'sand' : 'light'));
  const notesTone: StoryTone = tones.length && tones[tones.length - 1] === 'light' ? 'sand' : 'light';
  const kinds = (['sold', 'held'] as const).filter((k) => stories.some((s) => s.outcome === k));
  return (
    <>
      <PageHero
        image="hero-stories"
        eyebrow="Investor Stories"
        title={'Des stratégies réelles. Des\u00A0parcours\u00A0réels.'}
        subtitle="Il n’existe pas une seule façon d’investir à Dubai."
        crumbs={[{ label: 'Investor Stories' }]}
      />

      <section className="bg-ivory py-14 md:py-20">
        <div className="wrap grid gap-6 md:grid-cols-2 md:gap-14">
          {INTRO.map((p) => (
            <p key={p} className="ed-body text-charcoal/75">{fr(p)}</p>
          ))}
        </div>
      </section>

      {stories.map((s, i) => (
        <StoryFeature
          key={s.slug}
          story={s}
          index={i}
          tone={tones[i]}
          flip={i % 2 === 1}
          join={{ prev: i === 0 ? false : tones[i - 1] === tones[i], next: i < tones.length - 1 ? tones[i + 1] === tones[i] : false }}
        />
      ))}

      <StoryNotes kinds={[...kinds]} tone={notesTone} join={{ prev: tones.length > 0 && tones[tones.length - 1] === notesTone }} />
      <CtaBand id="stories_page" title="Construisons votre propre stratégie." />
    </>
  );
}
