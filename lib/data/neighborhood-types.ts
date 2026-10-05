import type { ImageKey } from '@/lib/images';
import type { InfraStatus } from './area-types';

/**
 * NEIGHBORHOOD STORY MODEL.
 * A district page is a hero + an ordered list of sections + a CTA. The section `type` picks the component,
 * `density` / `tone` / `layout` let each district keep its own rhythm inside one design system:
 *   Creek Harbour = progression (standard density, numbered catalysts)
 *   Dubai Hills   = breathing room (airy density, centred text, large images)
 *   Downtown      = dense, iconic, metropolitan (dense density, dark chapters, columns)
 * Copy is supplied by BF Properties and must not be rewritten in code.
 */
export type Tone = 'light' | 'sand' | 'dark';
export type Density = 'airy' | 'standard' | 'dense';

export type StoryImage = { slot: ImageKey; caption?: string };

export type StoryHero = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  cta: string;
  image: ImageKey;
  size?: 'tall' | 'standard';
};

type Head = { id?: string; eyebrow?: string; title: string };

/** Text chapter. `columns` = sticky title + text, `centered` = airy centred block, `split` = text + one image, `stagger` = text + two images. */
export type EditorialData = Head & {
  type: 'editorial';
  layout: 'columns' | 'centered' | 'split' | 'stagger';
  tone?: Tone;
  paragraphs: string[];
  /** Short lines rendered at statement size, after the paragraphs. */
  closing?: string[];
  statement?: string;
  images?: StoryImage[];
  flip?: boolean;
};

/** Photo-led chapter. `side` = image beside text, `overlay` = text over a full-bleed image, `duo` = two portrait images beside text. */
export type ImageStatementData = Head & {
  type: 'imageStatement';
  variant: 'side' | 'overlay' | 'duo';
  tone?: Tone;
  images: StoryImage[];
  paragraphs: string[];
  quote?: string;
  flip?: boolean;
};

export type MasterplanData = Head & {
  type: 'masterplan';
  tone?: Tone;
  image: ImageKey;
  paragraphs?: string[];
  /** Where the text sits relative to the plan. */
  textPosition?: 'before' | 'after';
  caption?: string;
  statement?: string;
};

export type FeatureItem = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  status: InfraStatus;
  image: ImageKey;
  /** Honest caption: renders and concepts are labelled as such. */
  imageNote: string;
  /** Secondary visual elements: the figure serves the story. Each must be backed by an official source. */
  figures?: { value: string; unit?: string; label: string }[];
  insight?: string;
};
/** A dark chapter made of numbered features (Creek Harbour's three catalysts). */
export type FeaturesData = { type: 'features'; id?: string; items: FeatureItem[] };

export type ComparisonSide = { label: string; lines: string[]; image: ImageKey };
export type ComparisonData = Head & { type: 'comparison'; tone?: Tone; left: ComparisonSide; right: ComparisonSide };

export type CentralityData = Head & {
  type: 'centrality';
  intro?: string;
  image: ImageKey;
  items: { label: string; note?: string }[];
};

export type ThesisData = Head & {
  type: 'thesis';
  tone?: Tone;
  /** Short lines at statement size, before the paragraphs. */
  lead?: string[];
  paragraphs: string[];
  quote?: string;
  final?: string;
  image?: ImageKey;
};

export type StorySection =
  | EditorialData
  | ImageStatementData
  | MasterplanData
  | FeaturesData
  | ComparisonData
  | CentralityData
  | ThesisData;

export type NeighborhoodStory = {
  density: Density;
  seo: { title: string; description: string };
  hero: StoryHero;
  sections: StorySection[];
  cta: { title: string; text?: string; label: string };
  /** Contextual links: district slugs to compare with, and strategy slugs (anchors on /strategies). */
  compare: string[];
  strategies: string[];
};
