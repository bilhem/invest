import type { NeighborhoodStory } from '../neighborhood-types';

/**
 * NAD AL SHEBA GARDENS (Meraas) — a villa and townhouse community near the heart of Dubai. Not a Phase 10 page: Phase 10 only serves as visual material
 * (the community plan is captioned « plan de communauté / référence Phase 10 », never a technical masterplan).
 * Rhythm: intimate and connected to the city. The location map comes first (position is the rarity), then text beside a stack of two photos, the community plan
 * shown very large on a dark chapter, a pool band, a light typographic thesis.
 * Copy supplied by BF Properties: do not rewrite. No figure, price, yield, date or travel time is added; the developer's travel times that appear INSIDE the brochure map are captioned as such.
 * Visuals (see lib/images.ts): the hero is only 1 389 px wide: it stops at its native size (`native`), never stretched on large screens. 06 of the pack (971 px, a petal
 * texture, not a lagoon) is registered (`nad-petals`) but not placed: the brief allows it only as a small secondary picture and the page has no place for a decorative one.
 */
export const NAD_AL_SHEBA_GARDENS_STORY: NeighborhoodStory = {
  density: 'standard',
  seo: {
    title: 'Nad Al Sheba Gardens : investir dans une villa à Dubai',
    description:
      'Découvrez Nad Al Sheba Gardens : villas, verdure, vie familiale et proximité du centre de Dubai, analysées selon une approche d’investissement.',
  },
  hero: {
    eyebrow: 'NAD AL SHEBA GARDENS',
    title: 'L’espace d’une villa. Sans quitter le cœur de Dubai.',
    paragraphs: [
      'À quelques kilomètres des grandes centralités de Dubai, Nad Al Sheba Gardens propose une expérience résidentielle radicalement différente.',
      'Villas et townhouses, rues paysagées, parcs, équipements communautaires et davantage d’intimité.',
      'Sa force réside précisément dans cette combinaison : offrir l’espace et le calme d’une communauté résidentielle tout en restant connecté à la ville.',
    ],
    cta: 'Étudier Nad Al Sheba Gardens',
    image: 'nad-hero',
    size: 'standard',
    native: true,
    veil: true,
  },
  sections: [
    // 2 — Une position rare: the map first, whole, then the key idea.
    {
      type: 'location',
      tone: 'sand',
      eyebrow: 'UNE POSITION RARE',
      title: 'Plus d’espace. Sans construire sa vie loin de la ville.',
      paragraphs: [
        'De nombreuses communautés de villas de Dubai impliquent un compromis entre espace et centralité.',
        'Nad Al Sheba Gardens réduit ce compromis.',
        'Sa proximité avec Downtown, Meydan et les grands axes donne à la communauté une proposition particulière :',
        'sans renoncer à l’accès au cœur de Dubai.',
      ],
      inserts: [{ after: 2, as: 'rows', items: ['une vie plus résidentielle,', 'plus verte,', 'plus privée,'] }],
      image: 'nad-location',
      caption:
        'Carte de localisation issue de la brochure Meraas. Les temps de trajet éventuellement indiqués sont des indications du promoteur, non des temps garantis par BF Properties. Cliquez pour l’agrandir.',
      statement: 'La villa n’est pas la seule rareté. Sa localisation l’est aussi.',
    },
    // 3 — Family living: text on the left, two photos stacked on the right, the same top and bottom edges.
    {
      type: 'imageStatement',
      variant: 'stack',
      tone: 'light',
      eyebrow: 'FAMILY LIVING',
      title: 'Une communauté construite autour du quotidien.',
      paragraphs: [
        'Une communauté familiale ne se juge pas uniquement à l’architecture de ses villas.',
        'Elle se juge à ce qui se passe entre elles.',
        'Nad Al Sheba Gardens cherche à construire cette profondeur autour de ses résidences.',
        'Pour l’investisseur, cette dimension est importante parce qu’elle participe directement à l’attractivité résidentielle de long terme.',
      ],
      inserts: [
        {
          after: 1,
          as: 'flow',
          items: ['Parcs.', 'Chemins.', 'Piscines.', 'École.', 'Espaces communautaires.', 'Sport.', 'Mosquée.', 'Retail.'],
        },
      ],
      images: [{ slot: 'nad-community' }, { slot: 'nad-park' }],
    },
    // 4 — Communauté: the community plan very large, whole, on a dark chapter (the plan page is cream: it stands out like a document).
    {
      type: 'masterplan',
      tone: 'dark',
      eyebrow: 'COMMUNAUTÉ',
      title: 'L’intimité d’une villa. La profondeur d’un quartier.',
      paragraphs: [
        'Le plan de la communauté montre une organisation où les résidences s’insèrent dans un réseau de parcs, d’équipements et d’espaces partagés.',
        'C’est une distinction essentielle.',
        'Un ensemble de villas peut offrir de belles propriétés.',
        'Une véritable communauté doit aussi offrir une raison d’y rester.',
      ],
      image: 'nad-plan',
      caption:
        'Nad Al Sheba Gardens — plan de communauté / référence Phase 10. Page de la brochure Meraas : il ne s’agit pas d’un plan directeur technique complet. Cliquez pour l’agrandir.',
    },
    // 5 — Ville & nature: the family render on the left, the lines of the lifestyle on the right, then the pool as a band.
    {
      type: 'imageStatement',
      variant: 'side',
      imageCols: 7,
      tone: 'light',
      eyebrow: 'VILLE & NATURE',
      title: 'Créer de la respiration à proximité du centre.',
      paragraphs: [
        'Paysages, jardins, eau et espaces de loisirs permettent à Nad Al Sheba Gardens de proposer une expérience plus apaisée sans s’éloigner fortement de l’activité urbaine.',
        'Cette combinaison répond à une demande résidentielle différente de celle d’un appartement Downtown ou City Walk.',
        'Ici, le produit recherché est aussi un mode de vie :',
      ],
      inserts: [
        {
          after: 2,
          as: 'rows',
          items: ['plus d’espace,', 'davantage d’intimité,', 'des espaces extérieurs,', 'et un environnement adapté à une vie familiale de long terme.'],
        },
      ],
      images: [{ slot: 'nad-family' }],
    },
    { type: 'interlude', width: 'full', ratio: 'cinema', image: 'nad-pool' },
    // 6 — Le regard BF Properties.
    {
      type: 'thesis',
      tone: 'sand',
      eyebrow: 'LE REGARD BF PROPERTIES',
      title: 'Ici, nous investissons autant dans la localisation que dans la villa.',
      paragraphs: [
        'Nad Al Sheba Gardens possède une caractéristique difficile à reproduire :',
        'Notre analyse ne s’arrête donc pas au nombre de chambres ou à la surface du terrain.',
      ],
      inserts: [{ after: 0, as: 'flow', items: ['sa position.'] }],
      criteria: {
        style: 'plain',
        intro: 'Nous regardons :',
        items: [
          'la phase,',
          'la micro-localisation,',
          'la proximité des parcs et équipements,',
          'l’intimité,',
          'l’orientation,',
          'la typologie,',
          'la parcelle,',
          'le prix d’entrée',
          'et l’horizon de détention.',
        ],
      },
      final: 'L’espace crée le confort. La centralité protège la profondeur de la demande.',
    },
  ],
  cta: {
    title: 'Nad Al Sheba Gardens correspond-il à votre stratégie ?',
    text: 'Nous comparons les opportunités disponibles afin d’identifier les propriétés dont la localisation, la typologie et le prix d’entrée correspondent à votre projet.',
    label: 'Étudier Nad Al Sheba Gardens',
  },
  compare: ['the-oasis', 'dubai-hills-estate', 'sobha-hartland-ii'],
  strategies: ['rental-income', 'portfolio-diversification'],
};
