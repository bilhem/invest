import type { ImageKey } from '@/lib/images';
import type { InfraStatus } from './area-types';

/**
 * NEIGHBORHOOD STORY MODEL.
 * A district page is a hero + an ordered list of sections + a CTA. The section `type` picks the component,
 * `density` / `tone` / `layout` let each district keep its own rhythm inside one design system:
 *   Creek Harbour = progression (standard density, numbered catalysts)
 *   Dubai Hills   = breathing room (airy density, centred text, large images)
 *   Downtown      = dense, iconic, metropolitan (dense density, dark chapters, columns)
 * City Walk = geography (dark location chapter, annotated map), Mina Rashid = maritime heritage (airy, small-source photos kept at their true size),
 * Dubai Islands = scale (full-bleed bands, location chain, numbered selection criteria).
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

/** A discreet figure shown under a photo. Only figures published by the developer / official source, never estimates. */
export type StoryFigure = { value: string; label: string };

/**
 * Photo-led chapter.
 *  side    = image beside text (true ratio, never cropped); `flip` puts the image on the other side, `imageCols` sets its width on the 12-column grid
 *  overlay = text over a full-bleed image; `align` puts the text on the left (default) or on the right
 *  banner  = full-bleed photo band, then the text on the grid underneath
 *  duo     = two portrait images beside text
 * Optional text blocks (all rendered in the order of the supplied copy): `lead` (statement-size lines before the text),
 * `words` (a short run of keywords), `paragraphs`, `quote` (key idea), `figures` (+ `figuresNote`, under the photo).
 */
export type ImageStatementData = Head & {
  type: 'imageStatement';
  variant: 'side' | 'overlay' | 'duo' | 'banner';
  tone?: Tone;
  images: StoryImage[];
  paragraphs: string[];
  lead?: string[];
  words?: string[];
  quote?: string;
  /** Paragraphs that come AFTER the key idea (side only). */
  outro?: string[];
  flip?: boolean;
  imageCols?: 5 | 6 | 7;
  align?: 'left' | 'right';
  figures?: StoryFigure[];
  figuresNote?: string;
};

/** `title` is optional: a plan that follows its own chapter (City Walk → Crestlane) only carries a label and a caption. */
export type MasterplanData = Omit<Head, 'title'> & {
  type: 'masterplan';
  title?: string;
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

/** A short list of selection criteria (Dubai Islands): numbered, two rows of four on desktop, then an optional closing line. */
export type ThesisCriteria = { items: string[]; closing?: string };

export type ThesisData = Head & {
  type: 'thesis';
  tone?: Tone;
  /** Short lines at statement size, before the paragraphs. */
  lead?: string[];
  paragraphs: string[];
  criteria?: ThesisCriteria;
  quote?: string;
  final?: string;
  image?: ImageKey;
};

/**
 * A reference point drawn on a location map. `x` / `y` are percentages of the image (the overlay shares the image's exact box),
 * `focus` is the district itself, `poi` a landmark, `zone` a text-only area label (sea, coast…).
 * Positions are indicative: the caption of the section says so.
 */
export type MapMarker = {
  label: string;
  x: number;
  y: number;
  kind?: 'focus' | 'poi' | 'zone';
  /** Where the label sits relative to its dot. */
  side?: 'left' | 'right' | 'top' | 'bottom';
  /** Secondary reference: only shown once the map is wide enough (desktop, enlarged view), so the phone view stays readable. */
  secondary?: boolean;
  /** Draws a dashed link from the focus marker to this one. */
  link?: boolean;
  /** Long label on the right side: on a narrow map (phone) it moves to the left so it never leaves the image. */
  flipNarrow?: boolean;
};

/**
 * Location chapter: title + short text on the grid, then the map ALWAYS shown in full on the wide container (object-contain,
 * enlargeable), then the reading aids (`path`, `after`, `statement`). The first thing the visitor must understand is where the district sits.
 */
export type LocationData = Head & {
  type: 'location';
  tone?: Tone;
  image: ImageKey;
  /** Text beside the title (columns 8–12). */
  paragraphs?: string[];
  /** Short reading lines under the text, one per row (the reference points). */
  lines?: string[];
  /** Reference points drawn over the map (City Walk). */
  markers?: MapMarker[];
  /** A chain of reference points shown under the map (Dubai Islands). */
  path?: string[];
  pathLabel?: string;
  caption?: string;
  /** Text under the map, on the left. */
  after?: string[];
  statement?: string;
};

export type StorySection =
  | EditorialData
  | ImageStatementData
  | MasterplanData
  | FeaturesData
  | ComparisonData
  | CentralityData
  | LocationData
  | ThesisData;

export type NeighborhoodStory = {
  density: Density;
  seo: { title: string; description: string };
  hero: StoryHero;
  sections: StorySection[];
  cta: { title: string; text?: string | string[]; label: string };
  /** Contextual links: district slugs to compare with, and strategy slugs (anchors on /strategies). */
  compare: string[];
  strategies: string[];
};
