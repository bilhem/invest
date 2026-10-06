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
 * Dubai Islands = scale (full-bleed bands, location chain, numbered selection criteria), Palm Jebel Ali = monumental (wide aerials, the whole Palm in its true ratio, very large reference visual and map, a text-only pause, a typographic thesis),
 * The Oasis = calm and horizontal (framed wide pictures instead of full-bleed ones, a statement laid over still water, one scale figure published by Emaar, a dark closing thesis),
 * Nad Al Sheba Gardens = intimate and connected (the map first, text beside a stack of two photos, the community plan very large on a dark chapter, a pool band),
 * Sobha Hartland II = contemporary and architectural (full-bleed renders, a dark lagoon chapter, a dark location map, a skyline band before the dark thesis).
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
  /** The photo is never shown above its native pixel size (a source narrower than very wide or tall heroes): it stops at that width and height, its sides and bottom fade into the section. */
  native?: boolean;
  /** Extra text-side shading for a busy photo (a gradient on the side where the text sits, never a filter on the photo). */
  veil?: boolean;
  /** `soft` keeps the photo readable (a light gradient at the foot only, with `veil` carrying the text side); default `strong` darkens it from the bottom. */
  overlay?: 'soft' | 'strong';
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
  /** Lines slipped into `paragraphs` (see TextInsert): stagger only. */
  inserts?: TextInsert[];
};

/**
 * A short run of lines slipped into a text block, right after paragraph `after` (0-based), so the copy keeps its supplied order.
 *  rows = ruled serif list (`cols`: 1–3 columns on desktop), flow = the same lines set as one serif sentence.
 * Display only: the wording and the punctuation of the copy are untouched.
 */
export type TextInsert = { after: number; items: string[]; as?: 'rows' | 'flow'; cols?: 1 | 2 | 3 };

/** A discreet figure shown under a photo. Only figures published by the developer / official source, never estimates. */
export type StoryFigure = { value: string; label: string };

/**
 * Photo-led chapter.
 *  side    = image beside text (true ratio, never cropped); `flip` puts the image on the other side, `imageCols` sets its width on the 12-column grid
 *  overlay = text over a full-bleed image; `align` puts the text on the left (default) or on the right
 *  banner  = full-bleed photo band, then the text on the grid underneath (`textFirst`: the text, then the band; `ratio` sets the band);
 *            `contained`: the band is framed on the wide container (never wider than 1400px) instead of running edge to edge
 *  duo     = two portrait images beside text
 *  spread  = title across, then text on 4 columns + one large photo on 8 (`flip`: photo first), key idea and closing text under the pair
 *  atlas   = one very large photo in its true ratio with the title laid over its calm part (sea) on desktop, then text / list on two columns
 *  stack   = text on 5 columns (the title stays in view) + two photos stacked on 7, each in its true ratio (`flip`: photos first); the three edges stay aligned
 * Optional text blocks (all rendered in the order of the supplied copy): `lead` (statement-size lines before the text),
 * `words` (a short run of keywords), `paragraphs`, `quote` (key idea), `figures` (+ `figuresNote`, under the photo).
 */
export type ImageStatementData = Head & {
  type: 'imageStatement';
  variant: 'side' | 'overlay' | 'duo' | 'banner' | 'spread' | 'atlas' | 'stack';
  tone?: Tone;
  images: StoryImage[];
  paragraphs: string[];
  /** Lines slipped into `paragraphs` (see TextInsert). */
  inserts?: TextInsert[];
  /** banner: the text comes first and the band closes the chapter. */
  textFirst?: boolean;
  /** banner: height of the band on desktop (cinema = 21:9, wide = 16:9). */
  ratio?: 'cinema' | 'wide';
  /** banner: the band is framed on the wide container (≤ 1400px) instead of running edge to edge. */
  contained?: boolean;
  /** side: the photo is top-aligned and stays in view while a longer text scrolls (instead of floating at mid-height of the text). */
  sticky?: boolean;
  lead?: string[];
  words?: string[];
  quote?: string;
  /** Paragraphs that come AFTER the key idea (side, banner, spread). */
  outro?: string[];
  flip?: boolean;
  imageCols?: 5 | 6 | 7;
  align?: 'left' | 'right';
  figures?: StoryFigure[];
  figuresNote?: string;
  /** One figure on the full width of its column (a long value such as « 100 MILLION SQ FT »); by default the figures share two columns. */
  figuresFull?: boolean;
};

/**
 * A picture on its own, between two chapters (a pause, no text). `width: 'full'` = edge to edge, `'frame'` = framed on the wide container (≤ 1400px, tone around it).
 * `statement` (optional) is laid over the picture, bottom left, on a shade: the key idea of the chapter just read.
 */
export type InterludeData = {
  type: 'interlude';
  id?: string;
  image: ImageKey;
  width?: 'full' | 'frame';
  ratio?: 'cinema' | 'wide';
  tone?: Tone;
  statement?: string;
  /** With a statement: `light` (default) = ivory text on a shade; `dark` = charcoal text straight on a pale picture, no shade at all. */
  ink?: 'light' | 'dark';
  caption?: string;
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
export type ThesisCriteria = {
  items: string[];
  closing?: string;
  /** Lead-in line above the list (« Nous analysons : »). */
  intro?: string;
  /** numbered (default, four columns) or plain (the items as they are written, three columns). */
  style?: 'numbered' | 'plain';
};

export type ThesisData = Head & {
  type: 'thesis';
  tone?: Tone;
  /** Short lines at statement size, before the paragraphs. */
  lead?: string[];
  paragraphs: string[];
  inserts?: TextInsert[];
  criteria?: ThesisCriteria;
  quote?: string;
  final?: string;
  image?: ImageKey;
  /** With `image`: the photo is top-aligned and stays in view while the longer text scrolls. */
  sticky?: boolean;
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

/** Left side, the district, right side: a reading aid, not a map. */
export type SituationData = {
  left: { label: string; items: string[] };
  focus: string;
  right: { label: string; items: string[] };
};

/**
 * Location chapter: title + short text on the grid, then the map ALWAYS shown in full on the wide container (object-contain,
 * enlargeable), then the reading aids (`path`, `after`, `statement`). The first thing the visitor must understand is where the district sits.
 */
export type LocationData = Head & {
  type: 'location';
  tone?: Tone;
  /** The official location graphic (shown in full, enlargeable). Optional: without it, `situation` is drawn instead. */
  image?: ImageKey;
  /** Schematic of the position (no map, no scale, no distances), used while no official location graphic is available. */
  situation?: SituationData;
  /** Text beside the title (columns 8–12). */
  paragraphs?: string[];
  /** Lines slipped into `paragraphs` (see TextInsert). */
  inserts?: TextInsert[];
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
  /** Two questions under the map, side by side: what the investor asks first (muted) and what he should also ask (accent). */
  questions?: { lead: string; text: string }[];
};

export type StorySection =
  | EditorialData
  | ImageStatementData
  | MasterplanData
  | InterludeData
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
