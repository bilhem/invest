import NeighborhoodHero from './NeighborhoodHero';
import EditorialSection from './EditorialSection';
import ImageStatement from './ImageStatement';
import MasterplanSection from './MasterplanSection';
import Interlude from './Interlude';
import FeaturesSection from './FeaturesSection';
import ComparisonSection from './ComparisonSection';
import CentralitySection from './CentralitySection';
import LocationSection from './LocationSection';
import InvestmentThesis from './InvestmentThesis';
import RelatedNeighborhoods from './RelatedNeighborhoods';
import NeighborhoodCTA from './NeighborhoodCTA';
import { getArea, getStrategies } from '@/lib/cms';
import type { Area } from '@/lib/data/area-types';
import type { NeighborhoodStory, StorySection, Tone } from '@/lib/data/neighborhood-types';
import type { Join } from './ui';

/** Dark is kept for the big moments (catalysts, centrality, investment thesis when the story asks for it, CTA): light/sand otherwise. */
const DEFAULT_TONE: Record<StorySection['type'], Tone> = {
  editorial: 'light',
  imageStatement: 'light',
  masterplan: 'sand',
  interlude: 'light',
  features: 'dark',
  comparison: 'light',
  centrality: 'dark',
  location: 'sand',
  thesis: 'light',
};

type Edge = Tone | 'image';
const toneOf = (s: StorySection): Tone => ('tone' in s && s.tone) || DEFAULT_TONE[s.type];

/** Which background a section starts and ends on. Full-bleed photos never "join" their neighbours. */
function edges(s: StorySection): { start: Edge; end: Edge } {
  const tone = toneOf(s);
  if (s.type === 'imageStatement' && s.variant === 'overlay') return { start: 'image', end: 'image' };
  if (s.type === 'imageStatement' && s.variant === 'banner' && s.contained) return { start: tone, end: tone };
  if (s.type === 'imageStatement' && s.variant === 'banner') return s.textFirst ? { start: tone, end: 'image' } : { start: 'image', end: tone };
  if (s.type === 'centrality') return { start: 'image', end: 'image' };
  if (s.type === 'interlude') return s.width === 'frame' ? { start: tone, end: tone } : { start: 'image', end: 'image' };
  if (s.type === 'editorial' && s.layout === 'stagger') return { start: tone, end: 'image' };
  return { start: tone, end: tone };
}

function renderSection(s: StorySection, i: number, density: NeighborhoodStory['density'], join: Join) {
  const tone = toneOf(s);
  const p = { density, tone, join };
  switch (s.type) {
    case 'editorial': return <EditorialSection key={i} s={s} {...p} />;
    case 'imageStatement': return <ImageStatement key={i} s={s} {...p} />;
    case 'masterplan': return <MasterplanSection key={i} s={s} {...p} />;
    case 'interlude': return <Interlude key={i} s={s} {...p} />;
    case 'features': return <FeaturesSection key={i} s={s} {...p} />;
    case 'comparison': return <ComparisonSection key={i} s={s} {...p} />;
    case 'centrality': return <CentralitySection key={i} s={s} {...p} />;
    case 'location': return <LocationSection key={i} s={s} {...p} />;
    case 'thesis': return <InvestmentThesis key={i} s={s} {...p} />;
  }
}

/** One design system, nine stories: the story's `density`, section types, tones and layouts set the rhythm. */
export default function NeighborhoodPage({ area, story }: { area: Area; story: NeighborhoodStory }) {
  const compare = story.compare.map((slug) => getArea(slug)).filter((a): a is Area => Boolean(a));
  const strategies = getStrategies().filter((s) => story.strategies.includes(s.slug));
  const e = story.sections.map(edges);
  return (
    <>
      <NeighborhoodHero slug={area.slug} name={area.name} hero={story.hero} />
      {story.sections.map((s, i) => {
        const prev = i > 0 ? e[i - 1].end : 'image';
        // the closing link band is on the light background: a light last section joins it
        const next: Edge = i < story.sections.length - 1 ? e[i + 1].start : 'light';
        const join: Join = {
          prev: e[i].start !== 'image' && prev === e[i].start,
          next: e[i].end !== 'image' && next === e[i].end,
        };
        return renderSection(s, i, story.density, join);
      })}
      <RelatedNeighborhoods compare={compare} strategies={strategies} />
      <NeighborhoodCTA slug={area.slug} title={story.cta.title} text={story.cta.text} label={story.cta.label} density={story.density} />
    </>
  );
}
