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
// Creek Harbour: PRODUCTION V2 pack (extracts of the official Emaar Creek Bay / Dubai Creek Harbour brochure, ~1920 px wide, no upscaling,
// received 2026-10-05) for hero, waterfront, Downtown view and Blue Line. The full masterplan, Dubai Square and Creek Tower visuals come from
// the earlier pack (05-dubai-square-masterplan, 06-dubai-square-architecture, 08-creek-tower, 04-masterplan): replace them when authorised originals arrive.
// The Creek Bay reference map of the V2 pack is NOT the Creek Harbour masterplan and is deliberately not used.
// Rights declared cleared by the client. Do not sharpen or filter these files; keep the path when replacing and adjust width/height.
const creekHero: ImageSlot = {
  src: `${CREEK}/01-creek-harbour-hero.webp`, width: 1923, height: 1201, kind: 'photo', rights: 'cleared',
  alt: 'Skyline de Downtown Dubai et Burj Khalifa au crépuscule, vus depuis une piscine à débordement face au Creek',
  tone: 'water', focal: '55% 45%', focalMobile: '72% 50%',
};
const creekWaterfront: ImageSlot = {
  src: `${CREEK}/02-creek-harbour-waterfront.webp`, width: 1923, height: 1202, kind: 'photo', rights: 'cleared',
  alt: 'Promenade en bord d’eau au coucher du soleil, terrasses et résidences au premier plan, skyline de Downtown à l’horizon',
  tone: 'water',
};

// Dubai Hills Estate: PRODUCTION V2 pack (extracts of the official Emaar / Meraas Park Ridge brochure, 3841 px wide, native resolution,
// no upscaling, received 2026-10-05) for hero, boulevard, mall, residential and lifestyle. Files are kept untouched (no sharpening, no filter):
// next/image serves the right size. The brochure shows Park Ridge renders: they are declared `render`.
// The pack has NO golf photograph and NO Dubai Hills masterplan: 03-dubai-hills-golf and 05-dubai-hills-masterplan come from the earlier
// pack (small, temporary). Replace them when an authorised HD source is supplied; do not invent either.
// 02-dubai-hills-park of the pack is the same file as 01 (it is not duplicated here).
// The three files that replace earlier ones carry a `-v2` suffix on purpose: a new URL forces next/image and the browser to drop the old cached version.
const hillsHero: ImageSlot = {
  src: `${HILLS}/01-dubai-hills-hero-v2.webp`, width: 3841, height: 2161, rights: 'cleared',
  alt: 'Parc central de Dubai Hills Estate et résidences environnantes, vus en hauteur',
  kind: 'render', tone: 'day', focal: '50% 60%', focalMobile: '58% 55%',
};
// Downtown Dubai: PRODUCTION V2 pack (extracts of the official Emaar IL PRIMO / The Opera District brochure, native resolution, no upscaling,
// received 2026-10-05). Used here: 01 (hero, 1797 px) and 05 (centrality, 5869 px). The pack has NO Dubai Mall / Fashion Avenue photograph and NO
// Downtown masterplan (its map is a project location map and must not be labelled as a masterplan): `downtown-fashion-avenue`, `downtown-masterplan`
// and `downtown-fountain` come from the earlier pack: replace them when authorised HD sources arrive. The other pack visuals (Opera, skyline,
// residential view, pool, night, interior) are IL PRIMO project images: not used, so the page stays about the neighbourhood.
// 01 carries a `-v2` suffix: a new URL forces next/image and the browser to drop the previous cached hero.
const downtownHero: ImageSlot = {
  src: `${DOWNTOWN}/01-downtown-dubai-hero-v2.webp`, width: 1797, height: 1467, rights: 'cleared',
  alt: 'Le Burj Khalifa illuminé de nuit, la Dubai Fountain et le Dubai Mall vus du ciel',
  kind: 'photo', tone: 'dusk', focal: '50% 55%', focalMobile: '49% 50%',
};

// City Walk (V1 pack), Mina Rashid and Dubai Islands (PRODUCTION V2 packs, received 2026-10-06, replacing V1): extracts of the official Meraas, Emaar and
// Nakheel brochures at native resolution, no upscaling. Rights declared cleared by the client. Files are kept untouched (no sharpening, no filter).
// V2 files carry a `-v2` suffix so no browser or image-optimizer cache can serve a V1 file.
// City Walk: `citywalk-crestlane-masterplan` is the CRESTLANE masterplan, never the full City Walk plan. 04 (skyline, 1 089 px) and 07 (green lifestyle) are not used.
//   The pack's 02 "location" file is a screenshot of a third-party web map (interface buttons visible): it is NOT used. The location chapter shows a schematic
//   (components/neighborhood/LocationSection.tsx, `situation`) until the official Meraas location graphic is supplied: add it as `citywalk-location` and set `image`.
// Mina Rashid: all eight V2 files are real. Photos are 990–1 666 px wide: shown no wider than their pixels support (5–7 columns); the hero (1 665 px) stops at its
//   native width on very wide screens. 05 (park lifestyle) and 06 (balcony view) are registered but not placed: the page keeps its validated structure.
//   The location graphic carries the developer's own travel times: always captioned as such. No berth count (400 or 430) appears anywhere on the page.
// Dubai Islands: 08 is Island B / Bay Grove context (6 934 px page render of the Nakheel brochure, Bay Grove mark and page number included), NOT the five-island
//   masterplan: its caption says so. 04 and 06 are registered but not placed.
const CITYWALK = '/images/neighborhoods/city-walk';
const MINA = '/images/neighborhoods/mina-rashid';
const ISLANDS = '/images/neighborhoods/dubai-islands';
// Palm Jebel Ali: PRODUCTION V1 pack (extracts of the Nakheel Palm Central / Palm Jebel Ali brochure, received 2026-10-06), rights declared cleared.
//   01 hero, 02 fronds, 03 aerial, 04 evening, 05 waterfront, 06 beachfront are renders (no upscaling, no filters).
//   07 is the full brochure location page (5 760 px, shown whole, never cropped): the developer's own travel times are captioned as such.
//   08 is a Palm-wide REFERENCE visual (brochure page), NOT a technical or legal masterplan: it is captioned "plan de référence / vision d’ensemble".
//   Palm Central appears in the brochure pages (logo, English text): it is only an example of the destination taking shape, never the subject of the page.
const PALM = '/images/neighborhoods/palm-jebel-ali';
const cityWalkHero: ImageSlot = {
  src: `${CITYWALK}/01-city-walk-hero.webp`, width: 2386, height: 1689, rights: 'cleared',
  alt: 'Résidences de Crestlane à City Walk : jardins paysagers, bassins et allées entre les immeubles',
  kind: 'render', tone: 'day', focal: '50% 55%', focalMobile: '42% 55%',
};
const minaHero: ImageSlot = {
  src: `${MINA}/01-mina-rashid-hero-v2.webp`, width: 1665, height: 838, rights: 'cleared',
  alt: 'Vue aérienne de la marina de Rashid Yachts & Marina : yachts amarrés le long d’une promenade bordée de palmiers, au pied d’un immeuble résidentiel',
  kind: 'render', tone: 'water', focal: '55% 55%', focalMobile: '72% 55%',
};
const islandsHero: ImageSlot = {
  src: `${ISLANDS}/01-dubai-islands-hero-v2.webp`, width: 3500, height: 1973, rights: 'cleared',
  alt: 'Vue aérienne d’un front de plage de Dubai Islands : lagon turquoise, plage de sable et résidences',
  kind: 'render', tone: 'water', focal: '50% 55%', focalMobile: '30% 50%',
};
const palmHero: ImageSlot = {
  src: `${PALM}/01-palm-jebel-ali-hero.webp`, width: 3416, height: 2434, rights: 'cleared',
  alt: 'Vue aérienne de Palm Jebel Ali : une plage de sable en arc de cercle au pied de résidences et de jardins, un frond et le Golfe au loin',
  kind: 'render', tone: 'water', focal: '50% 28%', focalMobile: '40% 45%',
};

export const IMAGES = {
  'creek-hero': creekHero,
  'area-dubai-creek-harbour': creekHero,
  'creek-waterfront': creekWaterfront,
  'creek-lifestyle': creekWaterfront,
  'creek-downtown-view': {
    src: `${CREEK}/03-creek-harbour-downtown-view.webp`, width: 1923, height: 1202, kind: 'photo', rights: 'cleared',
    alt: 'Vue depuis les balcons d’une résidence sur le Creek, avec la skyline de Downtown Dubai et le Burj Khalifa à l’horizon', tone: 'day', focal: '50% 45%',
  },
  // Supporting visuals of the V2 pack (available, not used on the page yet).
  'creek-green-terrace': {
    src: `${CREEK}/04-creek-harbour-lifestyle.webp`, width: 1922, height: 1203, kind: 'photo', rights: 'cleared',
    alt: 'Famille sur une pelouse en bord d’eau, avec la skyline de Downtown Dubai à l’horizon', tone: 'day',
  },
  'creek-pool-view': {
    src: `${CREEK}/05-creek-harbour-pool-view.webp`, width: 1923, height: 1202, kind: 'photo', rights: 'cleared',
    alt: 'Piscine à débordement face au Creek et à la skyline de Downtown Dubai', tone: 'water',
  },
  'creek-marina': {
    src: `${CREEK}/06-creek-harbour-marina.webp`, width: 1923, height: 1200, kind: 'photo', rights: 'cleared',
    alt: 'Canal et promenade au pied de tours résidentielles, au crépuscule', tone: 'dusk',
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
    src: `${CREEK}/07-creek-harbour-blue-line.webp`, width: 1923, height: 1200, kind: 'render', rights: 'cleared',
    alt: 'Rendu d’une rame de métro sur viaduc au pied d’une tour aux sommets effilés, dans un quartier de tours', tone: 'dusk', focal: '50% 62%',
  },
  'creek-tower': {
    src: `${CREEK}/08-creek-tower.webp`, width: 2124, height: 825, kind: 'render', rights: 'cleared',
    alt: 'Rendu conceptuel d’une tour dominant une skyline, au bord de l’eau et de zones de mangrove', tone: 'dusk', focal: '48% 35%',
  },
  // Dubai Hills Estate (see the V2 pack note above).
  'hills-hero': hillsHero,
  'hills-boulevard': {
    src: `${HILLS}/03-dubai-hills-boulevard.webp`, width: 3840, height: 2161, rights: 'cleared',
    alt: 'Boulevard piéton de Dubai Hills, terrasses de cafés et commerces en rez-de-chaussée des résidences',
    kind: 'render', tone: 'day', focal: '55% 50%',
  },
  // Temporary (earlier pack, small): the V2 pack has no golf photograph.
  'hills-golf': {
    src: `${HILLS}/03-dubai-hills-golf.webp`, width: 1238, height: 1176, rights: 'cleared',
    alt: 'Golf, plan d’eau et villas de Dubai Hills Estate, avec la skyline de Downtown à l’horizon',
    kind: 'photo', tone: 'day',
  },
  'hills-mall': {
    src: `${HILLS}/04-dubai-hills-mall-v2.webp`, width: 3841, height: 2161, rights: 'cleared',
    alt: 'Dubai Hills Mall vu de nuit : parvis, terrasses et enseigne lumineuse le long de l’avenue',
    kind: 'render', tone: 'dusk', focal: '60% 45%', focalMobile: '80% 45%',
  },
  // Temporary (earlier pack): the V2 pack has no Dubai Hills masterplan.
  'hills-masterplan': {
    src: `${HILLS}/05-dubai-hills-masterplan.webp`, width: 2235, height: 1425, rights: 'cleared',
    alt: 'Plan directeur de Dubai Hills Estate : parc, golf, mall, écoles et hôpital',
    kind: 'plan', tone: 'day',
  },
  'hills-lifestyle': {
    src: `${HILLS}/06-dubai-hills-lifestyle-v2.webp`, width: 3841, height: 2161, rights: 'cleared',
    alt: 'Cheminement piéton paysager et terrasse de café au pied des résidences de Dubai Hills',
    kind: 'render', tone: 'day', focal: '60% 50%',
  },
  'hills-residential': {
    src: `${HILLS}/05-dubai-hills-residential.webp`, width: 3841, height: 2160, rights: 'cleared',
    alt: 'Résidences de Dubai Hills au crépuscule, palmiers et fenêtres éclairées',
    kind: 'render', tone: 'dusk', focal: '40% 50%',
  },
  // Supporting visuals of the V2 pack (available, not used on the page yet).
  'hills-pool': {
    src: `${HILLS}/07-dubai-hills-pool.webp`, width: 2057, height: 1194, rights: 'cleared',
    alt: 'Piscine à débordement et terrasse en bois au pied d’une résidence, entourées d’arbres',
    kind: 'render', tone: 'day',
  },
  'hills-amenities': {
    src: `${HILLS}/08-dubai-hills-amenities.webp`, width: 2342, height: 975, rights: 'cleared',
    alt: 'Espace bien-être ouvert sur la terrasse et la piscine d’une résidence',
    kind: 'render', tone: 'day',
  },
  // Downtown Dubai (see the V2 pack note above).
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
    src: `${DOWNTOWN}/05-downtown-dubai-architecture.webp`, width: 5869, height: 3308, rights: 'cleared',
    alt: 'Façade d’une tour de Downtown Dubai face au Burj Khalifa, avec la skyline de la ville à l’horizon',
    kind: 'render', tone: 'day', focal: '60% 45%', focalMobile: '78% 45%',
  },
  // City Walk (see the PRODUCTION V1 note above).
  'citywalk-hero': cityWalkHero,
  'citywalk-urban': {
    src: `${CITYWALK}/03-city-walk-urban-lifestyle.webp`, width: 1777, height: 1777, rights: 'cleared',
    alt: 'Rue piétonne de City Walk au crépuscule : pergolas en bois, commerces et passants, avec le Burj Khalifa à l’horizon',
    kind: 'render', tone: 'dusk', focal: '55% 50%',
  },
  'citywalk-park': {
    src: `${CITYWALK}/05-city-walk-central-park-aerial.webp`, width: 1173, height: 830, rights: 'cleared',
    alt: 'Vue aérienne de Central Park à City Walk : résidences au milieu de jardins paysagers, avec le littoral de Dubai à l’horizon',
    kind: 'render', tone: 'day', focal: '50% 50%',
  },
  'citywalk-crestlane': {
    src: `${CITYWALK}/06-city-walk-crestlane-waterfront.webp`, width: 1541, height: 1437, rights: 'cleared',
    alt: 'Résidences de Crestlane face à un jardin paysager et à des bassins d’eau, à City Walk',
    kind: 'render', tone: 'day', focal: '50% 50%',
  },
  'citywalk-crestlane-masterplan': {
    src: `${CITYWALK}/08-city-walk-crestlane-masterplan.webp`, width: 4800, height: 3261, rights: 'cleared',
    alt: 'Masterplan de Crestlane à City Walk, vue aérienne : les phases Crestlane 2 et Crestlane 3 et leur environnement urbain',
    kind: 'plan', tone: 'day',
  },
  // Mina Rashid / Rashid Yachts & Marina (PRODUCTION V2).
  'mina-hero': minaHero,
  'mina-heritage': {
    src: `${MINA}/03-mina-rashid-heritage-waterfront-v2.webp`, width: 990, height: 925, rights: 'cleared',
    alt: 'Tour à vent traditionnelle en bois sculpté, sous des palmes de palmier, sur un ciel bleu clair',
    kind: 'photo', tone: 'day', focal: '50% 50%',
  },
  'mina-marina': {
    src: `${MINA}/02-mina-rashid-marina-v2.webp`, width: 1666, height: 836, rights: 'cleared',
    alt: 'Yachts amarrés aux pontons de la marina, avec les immeubles du bord de l’eau et un voilier à l’horizon',
    kind: 'render', tone: 'water', focal: '50% 55%',
  },
  'mina-masterplan': {
    src: `${MINA}/08-mina-rashid-masterplan-v2.webp`, width: 4607, height: 2457, rights: 'cleared',
    alt: 'Plan directeur officiel Emaar de Rashid Yachts & Marina : la marina et la promenade, le canal, l’hôtellerie sur l’eau, le musée, la station de ferry et le club de plage, numérotés de 1 à 13',
    kind: 'plan', tone: 'water',
  },
  'mina-location': {
    src: `${MINA}/07-mina-rashid-location-v2.webp`, width: 4607, height: 2457, rights: 'cleared',
    alt: 'Carte de localisation officielle Emaar : Rashid Yachts & Marina sur le littoral de Dubai, avec Downtown Dubai, Dubai Creek Harbour et l’aéroport international, et les temps de trajet indiqués par le promoteur',
    kind: 'plan', tone: 'water',
  },
  'mina-promenade': {
    src: `${MINA}/04-mina-rashid-promenade-v2.webp`, width: 1664, height: 838, rights: 'cleared',
    alt: 'Promenade en bord de marina : immeubles résidentiels, palmiers, piétons et poussettes, yachts amarrés à droite',
    kind: 'render', tone: 'day', focal: '50% 50%',
  },
  // Registered, not placed on the page (see the notes above).
  'mina-lifestyle': {
    src: `${MINA}/05-mina-rashid-lifestyle-v2.webp`, width: 1666, height: 837, rights: 'cleared',
    alt: 'Parc paysager au pied des résidences : pelouse, palmiers, promeneurs et cycliste',
    kind: 'render', tone: 'day', focal: '50% 50%',
  },
  'mina-living': {
    src: `${MINA}/06-mina-rashid-waterfront-living-v2.webp`, width: 1563, height: 785, rights: 'cleared',
    alt: 'Salon et chambre ouverts sur un balcon face à la marina, avec la skyline de Dubai au loin',
    kind: 'render', tone: 'day', focal: '50% 50%',
  },
  // Dubai Islands (PRODUCTION V2).
  'islands-hero': islandsHero,
  'islands-beachfront': {
    src: `${ISLANDS}/02-dubai-islands-beachfront-v2.webp`, width: 3500, height: 1974, rights: 'cleared',
    alt: 'Plage de sable et lagon aux eaux claires au pied de résidences, parasols et palmiers',
    kind: 'render', tone: 'water', focal: '50% 55%', focalMobile: '45% 55%',
  },
  'islands-waterfront': {
    src: `${ISLANDS}/03-dubai-islands-waterfront-v2.webp`, width: 3500, height: 1971, rights: 'cleared',
    alt: 'Hors-bord sur une eau turquoise devant des résidences en bord de mer, plage et digue de pierre',
    kind: 'render', tone: 'water', focal: '60% 55%',
  },
  'islands-pool': {
    src: `${ISLANDS}/05-dubai-islands-pool-lifestyle-v2.webp`, width: 4000, height: 2255, rights: 'cleared',
    alt: 'Piscine à débordement face à la mer au crépuscule, au pied d’une résidence et de ses palmiers',
    kind: 'render', tone: 'dusk', focal: '60% 55%', focalMobile: '35% 55%',
  },
  'islands-location': {
    src: `${ISLANDS}/07-dubai-islands-location-v2.webp`, width: 6934, height: 3900, rights: 'cleared',
    alt: 'Carte de localisation officielle Nakheel : Dubai Islands et Island B au large de Deira, avec Port Rashid, l’Infinity Bridge, Dubai Creek, l’aéroport international de Dubai, Dubai Mall, Downtown Dubai et Jumeirah',
    kind: 'plan', tone: 'water',
  },
  'islands-island-b': {
    src: `${ISLANDS}/08-dubai-islands-island-b-context-v2.webp`, width: 6934, height: 3900, rights: 'cleared',
    alt: 'Vue aérienne d’Island B (Bay Grove) à Dubai Islands, page de la brochure Nakheel : îlots résidentiels, plans d’eau et marinas au coucher du soleil',
    kind: 'render', tone: 'water',
  },
  // Registered, not placed on the page (see the notes above).
  'islands-lifestyle': {
    src: `${ISLANDS}/04-dubai-islands-lifestyle-v2.webp`, width: 3496, height: 1968, rights: 'cleared',
    alt: 'Plan d’eau turquoise, chemin piéton et pelouse au pied de résidences en bord de plage, palmiers au premier plan',
    kind: 'render', tone: 'water', focal: '50% 55%',
  },
  'islands-residential': {
    src: `${ISLANDS}/06-dubai-islands-residential-view-v2.webp`, width: 3956, height: 2222, rights: 'cleared',
    alt: 'Salon lumineux ouvert par de grandes baies vitrées sur un balcon face à l’eau',
    kind: 'render', tone: 'day', focal: '50% 50%',
  },
  // Palm Jebel Ali (PRODUCTION V1).
  'palm-hero': palmHero,
  'palm-fronds': {
    src: `${PALM}/02-palm-jebel-ali-fronds.webp`, width: 3706, height: 2626, rights: 'cleared',
    alt: 'Vue aérienne de plusieurs fronds de Palm Jebel Ali : plages de sable, eau claire entre les fronds et skyline de Dubai à l’horizon',
    kind: 'render', tone: 'water', focal: '50% 50%',
  },
  'palm-aerial': {
    src: `${PALM}/03-palm-jebel-ali-aerial.webp`, width: 2932, height: 2046, rights: 'cleared',
    alt: 'Vue aérienne de l’ensemble de Palm Jebel Ali : le tronc central, les fronds et le croissant, dans les eaux du Golfe, avec la côte au premier plan',
    kind: 'render', tone: 'water', focal: '45% 55%',
  },
  'palm-evening': {
    src: `${PALM}/04-palm-jebel-ali-evening.webp`, width: 3302, height: 1847, rights: 'cleared',
    alt: 'Résidences éclairées au crépuscule sur un frond de Palm Jebel Ali, avec la skyline de Dubai au loin',
    kind: 'render', tone: 'dusk', focal: '50% 55%', focalMobile: '40% 55%',
  },
  'palm-waterfront': {
    src: `${PALM}/05-palm-jebel-ali-waterfront.webp`, width: 3480, height: 2276, rights: 'cleared',
    alt: 'Terrasse face à une baie : salons extérieurs, végétation, plage et fronds voisins avec la skyline de Dubai à l’horizon',
    kind: 'render', tone: 'day', focal: '50% 55%',
  },
  'palm-beachfront': {
    src: `${PALM}/06-palm-jebel-ali-beachfront.webp`, width: 3707, height: 2400, rights: 'cleared',
    alt: 'Plage de sable au pied de résidences, avec baigneurs, cabanons et véliplanchiste sur une eau turquoise',
    kind: 'render', tone: 'water', focal: '50% 60%',
  },
  'palm-location': {
    src: `${PALM}/07-palm-jebel-ali-location.webp`, width: 5760, height: 4140, rights: 'cleared',
    alt: 'Carte de localisation de la brochure Nakheel : Palm Jebel Ali sur le littoral de Dubai, au sud de Palm Jumeirah, avec le Burj Al Arab, les grands axes routiers, l’aéroport Al Maktoum et les temps de trajet indiqués par le promoteur',
    kind: 'plan', tone: 'water',
  },
  'palm-reference': {
    src: `${PALM}/08-palm-jebel-ali-masterplan-reference.webp`, width: 5760, height: 4140, rights: 'cleared',
    alt: 'Plan de référence de Palm Jebel Ali : vue aérienne de l’ensemble de la Palm, avec trois repères numérotés (centre communautaire et mosquée, centre sportif et de bien-être, parc), page de la brochure Nakheel',
    kind: 'plan', tone: 'water',
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
  'area-city-walk': cityWalkHero,
  'area-mina-rashid': minaHero,
  'area-dubai-marina': { alt: 'Dubai Marina', tone: 'water' },
  'area-palm-jebel-ali': palmHero,
  'area-dubai-islands': islandsHero,
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
