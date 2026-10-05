import NeighborhoodHero from './NeighborhoodHero';
import EditorialSection from './EditorialSection';
import ImageStatement from './ImageStatement';
import MasterplanSection from './MasterplanSection';
import FeaturesSection from './FeaturesSection';
import ComparisonSection from './ComparisonSection';
import CentralitySection from './CentralitySection';
import InvestmentThesis from './InvestmentThesis';
import RelatedNeighborhoods from './RelatedNeighborhoods';
import NeighborhoodCTA from './NeighborhoodCTA';
import { getArea, getStrategies } from '@/lib/cms';
import type { Area } from '@/lib/data/area-types';
import type { NeighborhoodStory, StorySection } from '@/lib/data/neighborhood-types';

function renderSection(s: StorySection, i: number, density: NeighborhoodStory['density']) {
  switch (s.type) {
    case 'editorial': return <EditorialSection key={i} s={s} density={density} />;
    case 'imageStatement': return <ImageStatement key={i} s={s} density={density} />;
    case 'masterplan': return <MasterplanSection key={i} s={s} density={density} />;
    case 'features': return <FeaturesSection key={i} s={s} density={density} />;
    case 'comparison': return <ComparisonSection key={i} s={s} density={density} />;
    case 'centrality': return <CentralitySection key={i} s={s} density={density} />;
    case 'thesis': return <InvestmentThesis key={i} s={s} density={density} />;
  }
}

/** One design system, three stories: the story's `density`, section types, tones and layouts set the rhythm. */
export default function NeighborhoodPage({ area, story }: { area: Area; story: NeighborhoodStory }) {
  const compare = story.compare.map((slug) => getArea(slug)).filter((a): a is Area => Boolean(a));
  const strategies = getStrategies().filter((s) => story.strategies.includes(s.slug));
  return (
    <>
      <NeighborhoodHero slug={area.slug} name={area.name} hero={story.hero} />
      {story.sections.map((s, i) => renderSection(s, i, story.density))}
      <RelatedNeighborhoods compare={compare} strategies={strategies} />
      <NeighborhoodCTA slug={area.slug} title={story.cta.title} text={story.cta.text} label={story.cta.label} density={story.density} />
    </>
  );
}
