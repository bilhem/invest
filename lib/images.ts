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
const CREEK = '/images/neighborhoods/dubai-creek-harbour';
// Hills and Downtown packs: drop the files in /public/images/neighborhoods/<slug>/ and set `src` (+ width/height) below.
// Until then the slots render the neutral placeholder (and are hidden for masterplans in production).
const HILLS = '/images/neighborhoods/dubai-hills-estate';
const DOWNTOWN = '/images/neighborhoods/downtown-dubai';
// Visual pack received 2026-10-04, rights declared cleared by the client. Source files were 710 px wide;
// they were smoothly upscaled 2x (no new detail). Replace with high-resolution originals when available, keep the path.
const creekHero: ImageSlot = {
  src: `${CREEK}/01-hero.webp`, width: 2124, height: 1194, kind: 'photo', rights: 'cleared',
  alt: 'Résidences waterfront de Dubai Creek Harbour, avec la skyline de Downtown Dubai en arrière-plan au coucher du soleil',
  tone: 'water', focal: '35% 55%', focalMobile: '40% 45%',
};
const creekWaterfront: ImageSlot = {
  src: `${CREEK}/02-waterfront-lifestyle.webp`, width: 2124, height: 1413, kind: 'photo', rights: 'cleared',
  alt: 'Promenade au bord de l’eau, restaurants et tours résidentielles à Dubai Creek Harbour',
  tone: 'water',
};

const hillsHero: ImageSlot = {
  src: `${HILLS}/01-dubai-hills-hero.webp`, width: 1656, height: 1568, rights: 'cleared',
  alt: 'Le parcours de golf de Dubai Hills Estate et la skyline de Dubai à l’horizon',
  kind: 'photo', tone: 'day', focal: '50% 42%', focalMobile: '50% 40%',
};
const downtownHero: ImageSlot = {
  src: `${DOWNTOWN}/01-downtown-dubai-hero.webp`, width: 2130, height: 1422, rights: 'cleared',
  alt: 'Vue panoramique de Downtown Dubai et du Burj Khalifa',
  kind: 'photo', tone: 'dusk', focal: '55% 40%', focalMobile: '52% 40%',
};

export const IMAGES = {
  'creek-hero': creekHero,
  'area-dubai-creek-harbour': creekHero,
  'creek-waterfront': creekWaterfront,
  'creek-lifestyle': creekWaterfront,
  'creek-downtown-view': {
    src: `${CREEK}/03-downtown-view.webp`, width: 2130, height: 1422, kind: 'photo', rights: 'cleared',
    alt: 'Skyline de Downtown Dubai et Burj Khalifa vus de l’autre côté du Creek', tone: 'dusk',
  },
  'creek-masterplan': {
    src: `${CREEK}/04-masterplan.webp`, width: 1728, height: 1551, kind: 'plan', rights: 'cleared',
    alt: 'Plan directeur de Dubai Creek Harbour : The Island, The Sanctuary, The Tower, les districts Retail, Financial, Central, North et South, Dubai Creek Boulevard, Urban River, Green Parks et le métro', tone: 'day',
  },
  'creek-dubai-square': {
    src: `${CREEK}/06-dubai-square-architecture.webp`, width: 2124, height: 1593, kind: 'render', rights: 'cleared',
    alt: 'Rendu d’une rue commerçante couverte, illustrant l’expérience retail envisagée pour Dubai Square', tone: 'day', focal: '50% 55%',
  },
  'creek-dubai-square-masterplan': {
    src: `${CREEK}/05-dubai-square-masterplan.webp`, width: 2124, height: 1500, kind: 'render', rights: 'cleared',
    alt: 'Rendu conceptuel à vol d’oiseau du cœur de Dubai Creek Harbour et de Dubai Square', tone: 'dusk',
  },
  'creek-blue-line': {
    src: `${CREEK}/07-blue-line-station.webp`, width: 2124, height: 522, kind: 'render', rights: 'cleared',
    alt: 'Rendu architectural d’une rame de métro sur viaduc à proximité d’une station', tone: 'day', focal: '45% 50%',
  },
  'creek-tower': {
    src: `${CREEK}/08-creek-tower.webp`, width: 2124, height: 825, kind: 'render', rights: 'cleared',
    alt: 'Rendu conceptuel d’une tour dominant une skyline, au bord de l’eau et de zones de mangrove', tone: 'dusk', focal: '48% 35%',
  },
  // Dubai Hills Estate — visual pack received 2026-10-05 (small originals: 418–752 px; cleaned of baked-in captions, smooth upscale). Replace with HD originals.
  'hills-hero': hillsHero,
  'hills-park': {
    src: `${HILLS}/02-dubai-hills-park.webp`, width: 1245, height: 1176, rights: 'cleared',
    alt: 'Vue aérienne de Dubai Hills Park et de ses résidences',
    kind: 'photo', tone: 'day',
  },
  'hills-golf': {
    src: `${HILLS}/03-dubai-hills-golf.webp`, width: 1248, height: 1176, rights: 'cleared',
    alt: 'Golf, plan d’eau et villas de Dubai Hills Estate, avec la skyline de Downtown à l’horizon',
    kind: 'photo', tone: 'day',
  },
  'hills-mall': {
    src: `${HILLS}/04-dubai-hills-mall.webp`, width: 1254, height: 1176, rights: 'cleared',
    alt: 'Façade de Dubai Hills Mall et ses fontaines',
    kind: 'photo', tone: 'day',
  },
  'hills-masterplan': {
    src: `${HILLS}/05-dubai-hills-masterplan.webp`, width: 2235, height: 1425, rights: 'cleared',
    alt: 'Plan directeur de Dubai Hills Estate : parc, golf, mall, écoles et hôpital',
    kind: 'plan', tone: 'day',
  },
  'hills-lifestyle': {
    src: `${HILLS}/06-dubai-hills-lifestyle.webp`, width: 933, height: 1203, rights: 'cleared',
    alt: 'Famille se promenant dans un parc de Dubai Hills Estate',
    kind: 'photo', tone: 'day',
  },
  'hills-urban': {
    src: `${HILLS}/07-dubai-hills-urban.webp`, width: 867, height: 1203, rights: 'cleared',
    alt: 'Boulevard et terrasses de restaurants à Dubai Hills Estate',
    kind: 'photo', tone: 'day',
  },
  'hills-signature': {
    src: `${HILLS}/08-dubai-hills-signature.webp`, width: 903, height: 1203, rights: 'cleared',
    alt: 'Coucher de soleil sur le golf de Dubai Hills Estate et la skyline de Dubai',
    kind: 'photo', tone: 'dusk', focal: '50% 35%',
  },
  // Downtown Dubai — visual pack received 2026-10-05.
  'downtown-hero': downtownHero,
  'downtown-fountain': {
    src: `${DOWNTOWN}/02-downtown-dubai-lifestyle.webp`, width: 2340, height: 1336, rights: 'cleared',
    alt: 'Burj Khalifa et Dubai Fountain au coucher du soleil',
    kind: 'photo', tone: 'dusk', focal: '50% 45%', focalMobile: '48% 40%',
  },
  'downtown-fashion-avenue': {
    src: `${DOWNTOWN}/03-downtown-dubai-mall.webp`, width: 1420, height: 1756, rights: 'cleared',
    alt: 'Fashion Avenue du Dubai Mall et skyline de Downtown Dubai',
    kind: 'photo', tone: 'dusk',
  },
  'downtown-masterplan': {
    src: `${DOWNTOWN}/04-downtown-dubai-masterplan.webp`, width: 2130, height: 1368, rights: 'cleared',
    alt: 'Masterplan et principales zones de Downtown Dubai',
    kind: 'plan', tone: 'day',
  },
  'downtown-centrality': {
    src: `${DOWNTOWN}/01-downtown-dubai-hero.webp`, width: 2130, height: 1422, rights: 'cleared',
    alt: 'Skyline de Downtown Dubai au cœur de Dubai',
    kind: 'photo', tone: 'dusk', focal: '78% 45%', focalMobile: '75% 45%',
  },
  hero: { alt: 'Skyline de Dubai au crépuscule', tone: 'dusk', focal: '50% 60%' },
  philosophy: { alt: 'Architecture contemporaine à Dubai', tone: 'day', focal: '50% 50%' },
  lab: { alt: 'Interface de modélisation BF Investment Lab', tone: 'dusk' },
  cta: { alt: 'Dubai Marina de nuit', tone: 'water', focal: '50% 70%' },
  'story-1': { alt: 'Dubai Creek Harbour', tone: 'water' },
  'story-2': { alt: 'Quartier résidentiel de Dubai', tone: 'day' },
  'story-3': { alt: 'Skyline de Downtown Dubai', tone: 'dusk' },
  'area-dubai-hills-estate': hillsHero,
  'area-downtown-dubai': downtownHero,
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
