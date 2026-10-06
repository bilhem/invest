import type { NeighborhoodStory } from '../neighborhood-types';

/**
 * SOBHA HARTLAND II — an urban premium waterfront community near the centres of Dubai. Not a developer page: the execution quality of Sobha is an element of the
 * investment analysis, never an advertisement (no absolute quality claim).
 * Rhythm: contemporary and architectural. Full-bleed developer renders (every one captioned « Rendu du projet — illustration promoteur », none presented as a photograph
 * of a delivered district), a dark lagoon chapter, a dark location map, a light product chapter, a skyline band before the dark thesis.
 * Copy supplied by BF Properties: do not rewrite. « 8 millions de pieds carrés » is in the supplied copy (Sobha material); nothing else is added.
 * Visuals (see lib/images.ts): 06 of the pack is a generic lifestyle PHOTO of the brochure (a couple on a beach), not an image of the project: small, captioned as an ambiance image.
 * 07 carries the developer's own distances and travel times (captioned as such).
 */
export const SOBHA_HARTLAND_II_STORY: NeighborhoodStory = {
  density: 'standard',
  seo: {
    title: 'Sobha Hartland II : investir dans le waterfront de Dubai',
    description:
      'Découvrez Sobha Hartland II : communauté waterfront, lagoons, environnement premium et proximité du cœur de Dubai.',
  },
  hero: {
    eyebrow: 'SOBHA HARTLAND II',
    title: 'Le waterfront résidentiel, aux portes du cœur de Dubai.',
    paragraphs: [
      'À proximité des grandes centralités de Dubai, Sobha Hartland II développe une proposition particulière :',
      'une communauté premium structurée autour de l’eau, de la verdure et d’un environnement résidentiel pensé à grande échelle.',
      'Pour l’investisseur, sa thèse repose sur une combinaison rare : lifestyle waterfront, proximité de la ville et qualité d’exécution portée par Sobha.',
    ],
    cta: 'Étudier Sobha Hartland II',
    image: 'sobha-hero',
    size: 'tall',
    native: true,
    veil: true,
    overlay: 'soft',
  },
  sections: [
    // 2 — Une nouvelle communauté waterfront: the lagoon ring from above as a full-bleed band, then the text and the key idea.
    {
      type: 'imageStatement',
      variant: 'banner',
      ratio: 'wide',
      tone: 'light',
      eyebrow: 'UNE NOUVELLE COMMUNAUTÉ WATERFRONT',
      title: 'Créer une respiration résidentielle à proximité de la ville.',
      paragraphs: [
        'Sobha Hartland II prolonge la logique développée autour de Sobha Hartland avec une nouvelle communauté résidentielle organisée autour de paysages, d’eau et d’espaces de vie.',
        'Le matériel Sobha présente Hartland II comme une communauté waterfront de 8 millions de pieds carrés.',
        'Mais l’échelle seule n’est pas ce qui nous intéresse.',
        'Ce qui compte est la manière dont cette surface est utilisée pour créer une expérience résidentielle cohérente.',
      ],
      quote: 'La proximité crée l’accessibilité. L’environnement crée l’expérience.',
      images: [{ slot: 'sobha-waterfront' }],
    },
    // 3 — Eau & paysage: a dark chapter (the turquoise lagoon stands out), the key idea laid over the second render.
    {
      type: 'editorial',
      layout: 'stagger',
      tone: 'dark',
      eyebrow: 'EAU & PAYSAGE',
      title: 'Quand le waterfront devient l’intérieur de la communauté.',
      paragraphs: [
        'À Sobha Hartland II, l’eau n’est pas uniquement une vue lointaine.',
        'Lagoons, waterfront et espaces paysagers participent directement à l’identité résidentielle du projet.',
        'Cette présence de l’eau peut créer des expériences très différentes selon la position de l’actif.',
        'Chaque micro-localisation doit être analysée séparément.',
      ],
      inserts: [
        {
          after: 2,
          as: 'rows',
          items: ['Première ligne.', 'Vue lagoon.', 'Vue intérieure.', 'Proximité des espaces communautaires.', 'Orientation.', 'Étage.'],
        },
      ],
      statement: 'Être à Hartland II ne suffit pas. Il faut encore savoir où y être.',
      images: [{ slot: 'sobha-lagoon' }, { slot: 'sobha-lagoon-deck' }],
    },
    // 4 — Localisation: the developer's map, whole, on a dark ground (it is a dark graphic).
    {
      type: 'location',
      tone: 'dark',
      eyebrow: 'LOCALISATION',
      title: 'Le calme d’une communauté. La ville toujours en perspective.',
      paragraphs: [
        'L’un des principaux arguments de Sobha Hartland II réside dans sa relation avec le reste de Dubai.',
        'La communauté cherche à offrir un environnement résidentiel plus calme et paysager tout en restant proche des grandes centralités urbaines.',
        'Cette combinaison donne à Hartland II une thèse différente de communautés situées beaucoup plus loin du cœur de la ville.',
      ],
      image: 'sobha-location',
      caption:
        'Carte de localisation issue du matériel Sobha. Les distances et temps de trajet indiqués sont des indications du promoteur, non des temps garantis par BF Properties. Cliquez pour l’agrandir.',
    },
    // 5 — Le produit: text first, the execution quality as part of the analysis; the ambiance image stays small.
    {
      type: 'imageStatement',
      variant: 'side',
      imageCols: 5,
      sticky: true,
      tone: 'sand',
      eyebrow: 'LE PRODUIT',
      title: 'La qualité du quartier ne suffit pas. Celle du produit compte tout autant.',
      paragraphs: [
        'Dans un marché où de nombreux projets peuvent partager une localisation ou un positionnement similaire, la qualité d’exécution devient un élément important de la sélection.',
        'Ce sont ces éléments qui participent à la capacité d’un actif à rester désirable une fois l’effet du lancement passé.',
      ],
      inserts: [
        {
          after: 0,
          as: 'rows',
          items: ['Architecture.', 'Matériaux.', 'Espaces communs.', 'Paysage.', 'Relation entre bâtiments et environnement.', 'Qualité perçue à la livraison.'],
        },
      ],
      images: [{ slot: 'sobha-ambiance' }],
    },
    { type: 'interlude', width: 'full', ratio: 'wide', image: 'sobha-skyline' },
    // 6 — Le regard BF Properties.
    {
      type: 'thesis',
      tone: 'dark',
      eyebrow: 'LE REGARD BF PROPERTIES',
      title: 'Le waterfront attire. La sélection crée la différence.',
      paragraphs: [
        'Sobha Hartland II possède plusieurs caractéristiques attractives :',
        'Mais ces qualités ne rendent pas automatiquement chaque unité intéressante.',
      ],
      inserts: [{ after: 0, as: 'flow', items: ['eau,', 'paysage,', 'proximité de la ville', 'et environnement premium.'] }],
      criteria: {
        style: 'plain',
        intro: 'Nous analysons :',
        items: [
          'le bâtiment,',
          'la position dans la communauté,',
          'la vue,',
          'l’étage,',
          'la typologie,',
          'l’exposition,',
          'la relation au lagoon,',
          'le prix d’entrée,',
          'le calendrier',
          'et l’horizon de sortie.',
        ],
      },
      final: 'Le quartier crée l’envie. L’actif doit encore justifier son prix.',
    },
  ],
  cta: {
    title: 'Sobha Hartland II correspond-il à votre stratégie ?',
    text: 'Nous comparons les opportunités disponibles afin d’identifier les actifs dont la position, le produit et le prix d’entrée correspondent réellement à votre objectif.',
    label: 'Étudier Sobha Hartland II',
  },
  compare: ['dubai-creek-harbour', 'nad-al-sheba-gardens', 'downtown-dubai'],
  strategies: ['capital-appreciation', 'portfolio-diversification'],
};
