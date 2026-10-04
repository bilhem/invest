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
  image: ImageKey;
  body: string[];
  facts?: { label: string; value: string }[]; // every fact must be backed by sourceIds
  confirmed: string[];
  toConfirm: string[];
  history?: string[];
  sourceIds: string[];
};

export type AreaDeep = {
  seo: { title: string; description: string };
  heroSubtitle: string;
  lastReviewed: string; // ISO date of the last fact-check
  atAGlance: string[];
  masterplanImage: ImageKey;
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
