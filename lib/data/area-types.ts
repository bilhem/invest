import type { ImageKey } from '@/lib/images';

/**
 * AREA MODEL.
 * `Area` is the base model used by every district page.
 * `deep` is the optional enriched layer (catalysts, infrastructure status, thesis, sources).
 * A district without `deep` keeps the standard template; adding `deep` upgrades it with no code change.
 */
export type InfraStatus = 'existing' | 'under-construction' | 'planned';

export type SourceType = 'primary' | 'press';

export type SourceRef = {
  id: string;
  publisher: string;
  title: string;
  url: string;
  date: string; // ISO date of the document (or access date for a living page)
  type: SourceType; // primary = Emaar, RTA, Dubai Government; press = media report
  note?: string;
};

export type InfraItem = {
  name: string;
  status: InfraStatus;
  summary: string;
  toConfirm?: string; // what is not yet confirmed about this item
  sourceIds: string[];
};

export type Catalyst = {
  id: string;
  title: string;
  kicker: string;
  status: InfraStatus;
  statusNote?: string; // wording as used by the source
  images: { slot: ImageKey; caption: string }[]; // first = main; captions must state render/concept status honestly
  body: string[];
  facts?: { label: string; value: string }[]; // every fact must be backed by sourceIds
  confirmed: string[];
  toConfirm: string[];
  history?: string[];
  sourceIds: string[];
};

/**
 * Editorial layout for an enriched area page. When `deep.editorial` is present, the area page renders AreaEditorial
 * (hero, intro, masterplan, 3 catalysts, thesis, location, CTA) instead of the dense standard template.
 * Catalyst titles, statuses and images come from `deep.catalysts` (matched by id).
 */
export type EditorialHead = { eyebrow: string; title: string; intro?: string };

export type AreaEditorial = {
  heroLine: string;
  /** 1 · Discover */
  intro: EditorialHead & {
    items: { title: string; text: string; slot: ImageKey }[];
    statement: string;
  };
  /** 2 · Understand the scale */
  masterplan: EditorialHead & {
    /** Shown before the caption while the image is only an extract of the plan. Remove once the full plan is supplied. */
    extractLabel?: string;
    caption: string;
    insight: string;
  };
  /** 3 · Understand what is coming */
  catalysts: EditorialHead & {
    items: {
      id: string;
      headline: string;
      paragraphs: string[];
      /** Secondary visual elements: the figure serves the story, not the reverse. Each must be backed by a source. */
      figures?: { value: string; unit?: string; label: string }[];
      insight?: string;
      imageNote: string;
    }[];
  };
  /** 4 · The BF Properties thesis (dark editorial break) */
  thesisBreak: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    statement: [string, string];
  };
  /** 5 · BF Properties: how we select */
  approach: EditorialHead & {
    interestTitle: string;
    interest: string[];
    analysisTitle: string;
    analysis: string[];
    conviction: string;
  };
  location: EditorialHead & { landmarks: { label: string; text: string }[] };
  cta: { title: string; text: string; label: string };
};

export type AreaDeep = {
  editorial?: AreaEditorial;
  seo: { title: string; description: string };
  heroSubtitle: string;
  lastReviewed: string; // ISO date of the last fact-check
  atAGlance: string[];
  masterplanImage: ImageKey;
  masterplanCaption: string;
  gallery?: { slot: ImageKey; caption: string }[]; // overview figures (location, lifestyle)
  catalystsIntro: string;
  catalysts: Catalyst[];
  infrastructure: InfraItem[];
  maturation: {
    title: string;
    intro: string;
    layers: { title: string; text: string }[];
    potential: string[];
    implications: string[];
  };
  thesis: {
    title: string;
    intro: string;
    forArgs: { title: string; text: string; status?: InfraStatus }[];
    againstTitle: string;
    againstArgs: { title: string; text: string }[];
    closing: string;
  };
  investorFit: { profile: string; fit: 'may-suit' | 'caution'; text: string }[];
  bfView: string[];
  sources: SourceRef[];
};

export type Area = {
  slug: string;
  name: string;
  img: ImageKey;
  tagline: string;
  summary: string;
  tags: string[];
  coords: { lat: number; lng: number }; // indicative centre point
  overview: string;
  masterplan: string;
  location: string;
  connectivity: string;
  lifestyle: string;
  market: string;
  profiles: string[];
  rental: string;
  pipeline: string;
  developers: string[];
  strengths: string[];
  considerations: string[];
  bfView: string;
  storySlug?: string;
  deep?: AreaDeep;
};
