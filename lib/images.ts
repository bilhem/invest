/**
 * IMAGE REGISTRY — single place to swap placeholders for approved assets.
 * To replace: drop the file in /public/images and set `src` (e.g. '/images/hero.jpg').
 * While `src` is undefined, a neutral architectural placeholder is rendered.
 */
export type ImageSlot = {
  src?: string;
  alt: string;
  focal?: string;
  /** Focal point on phones (object-position). Defaults to `focal`. */
  focalMobile?: string;
  tone?: 'dusk' | 'day' | 'water';
  /** Intrinsic size of `src`. Lets components reserve the exact aspect ratio (no stretch, no layout shift). */
  width?: number;
  height?: number;
  /** photo | render (concept / architectural render) | plan (masterplan extract). Drives caption labels. */
  kind?: 'photo' | 'render' | 'plan';
  /** Commercial republication rights. 'unconfirmed' assets must be replaced by licensed originals before production. */
  rights?: 'cleared' | 'unconfirmed';
};

/**
 * Dubai Creek Harbour slots (reference area page). Real photographs are selected separately.
 * To fill a slot: save the licensed file as /public/images/creek/<slot>.jpg and set `src: '/images/creek/<slot>.jpg'`.
 * `creekHero` is shared by the area page, the area listing and the home page card: set `src` once.
 */
const CREEK = '/images/areas/dubai-creek-harbour';
// Visual pack received 2026-10-04, rights declared cleared by the client. Source files were 710 px wide;
// they were smoothly upscaled 2x (no new detail). Replace with high-resolution originals when available, keep the path.
const creekHero: ImageSlot = {
  src: `${CREEK}/01-hero.webp`, width: 1420, height: 796, kind: 'photo', rights: 'cleared',
  alt: 'Résidences waterfront de Dubai Creek Harbour, avec la skyline de Downtown Dubai en arrière-plan au coucher du soleil',
  tone: 'water', focal: '35% 55%', focalMobile: '40% 45%',
};
const creekWaterfront: ImageSlot = {
  src: `${CREEK}/02-waterfront-lifestyle.webp`, width: 1420, height: 942, kind: 'photo', rights: 'cleared',
  alt: 'Promenade au bord de l’eau, restaurants et tours résidentielles à Dubai Creek Harbour',
  tone: 'water',
};

export const IMAGES = {
  'creek-hero': creekHero,
  'area-dubai-creek-harbour': creekHero,
  'creek-waterfront': creekWaterfront,
  'creek-lifestyle': creekWaterfront,
  'creek-downtown-view': {
    src: `${CREEK}/03-downtown-view.webp`, width: 1420, height: 948, kind: 'photo', rights: 'cleared',
    alt: 'Skyline de Downtown Dubai et Burj Khalifa vus de l’autre côté du Creek', tone: 'dusk',
  },
  'creek-masterplan': {
    src: `${CREEK}/04-masterplan.webp`, width: 1420, height: 312, kind: 'plan', rights: 'cleared',
    alt: 'Extrait de plan directeur de Dubai Creek Harbour : The Sanctuary, Dubai Creek Boulevard et un district voisin', tone: 'day',
  },
  'creek-dubai-square': {
    src: `${CREEK}/06-dubai-square-architecture.webp`, width: 1420, height: 1062, kind: 'render', rights: 'cleared',
    alt: 'Rendu d’une rue commerçante couverte, illustrant l’expérience retail envisagée pour Dubai Square', tone: 'day', focal: '50% 55%',
  },
  'creek-dubai-square-masterplan': {
    src: `${CREEK}/05-dubai-square-masterplan.webp`, width: 1420, height: 1000, kind: 'render', rights: 'cleared',
    alt: 'Rendu conceptuel à vol d’oiseau du cœur de Dubai Creek Harbour et de Dubai Square', tone: 'dusk',
  },
  'creek-blue-line': {
    src: `${CREEK}/07-blue-line-station.webp`, width: 1420, height: 348, kind: 'render', rights: 'cleared',
    alt: 'Rendu architectural d’une rame de métro sur viaduc à proximité d’une station', tone: 'day', focal: '45% 50%',
  },
  'creek-tower': {
    src: `${CREEK}/08-creek-tower.webp`, width: 1420, height: 550, kind: 'render', rights: 'cleared',
    alt: 'Rendu conceptuel d’une tour dominant une skyline, au bord de l’eau et de zones de mangrove', tone: 'dusk', focal: '48% 35%',
  },
  hero: { alt: 'Skyline de Dubai au crépuscule', tone: 'dusk', focal: '50% 60%' },
  philosophy: { alt: 'Architecture contemporaine à Dubai', tone: 'day', focal: '50% 50%' },
  lab: { alt: 'Interface de modélisation BF Investment Lab', tone: 'dusk' },
  cta: { alt: 'Dubai Marina de nuit', tone: 'water', focal: '50% 70%' },
  'story-1': { alt: 'Dubai Creek Harbour', tone: 'water' },
  'story-2': { alt: 'Quartier résidentiel de Dubai', tone: 'day' },
  'story-3': { alt: 'Skyline de Downtown Dubai', tone: 'dusk' },
  'area-dubai-hills-estate': { alt: 'Dubai Hills Estate', tone: 'day' },
  'area-downtown-dubai': { alt: 'Downtown Dubai', tone: 'dusk' },
  'area-business-bay': { alt: 'Business Bay', tone: 'dusk' },
  'area-dubai-marina': { alt: 'Dubai Marina', tone: 'water' },
  'area-dubai-south': { alt: 'Dubai South', tone: 'day' },
  'area-palm-jebel-ali': { alt: 'Palm Jebel Ali', tone: 'water' },
  'insight-1': { alt: 'Analyse de marché', tone: 'dusk' },
  'insight-2': { alt: 'Guide investisseur', tone: 'day' },
  'insight-3': { alt: 'Analyse de quartier', tone: 'water' },
  // Page heroes
  'hero-invest': { alt: 'Vue architecturale de Dubai', tone: 'dusk', focal: '50% 60%' },
  'hero-strategies': { alt: 'Architecture contemporaine', tone: 'day' },
  'hero-entrepreneurs': { alt: 'Quartier d’affaires de Dubai', tone: 'dusk' },
  'hero-areas': { alt: 'Dubai, vue d’ensemble des quartiers', tone: 'water' },
  'hero-stories': { alt: 'Résidence contemporaine à Dubai', tone: 'day' },
  'hero-insights': { alt: 'Dubai, lumière du matin', tone: 'dusk' },
  'hero-about': { alt: 'Skyline de Dubai', tone: 'dusk' },
  'hero-consult': { alt: 'Dubai la nuit', tone: 'water' },
  'hero-lab': { alt: 'BF Investment Lab', tone: 'dusk' },
  'hero-legal': { alt: 'BF Properties', tone: 'dusk' },
} satisfies Record<string, ImageSlot>;
export type ImageKey = keyof typeof IMAGES;
export const getImage = (k: ImageKey): ImageSlot => IMAGES[k];

/** CSS aspect-ratio for a slot (e.g. "710 / 398"); falls back to the given default while a placeholder is shown. */
export const getAspect = (k: ImageKey, fallback = '16 / 10'): string => {
  const i = getImage(k);
  return i.src && i.width && i.height ? `${i.width} / ${i.height}` : fallback;
};
