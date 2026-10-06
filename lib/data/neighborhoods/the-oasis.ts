import type { NeighborhoodStory } from '../neighborhood-types';

/**
 * THE OASIS BY EMAAR — a villa community, not a Mirage page: space, water and tranquillity as the product, read lot by lot.
 * Mirage is a development inside the community: its render only illustrates the residential universe (captioned as such), it is never the subject.
 * Rhythm: calm and horizontal. Airy density, light and sand grounds, pictures FRAMED on the wide container (never edge to edge, the sources are ~1 920 px),
 * a statement laid over still water, one scale figure published by Emaar, the official location graphic shown whole, a dark closing thesis with a quiet water picture.
 * Copy supplied by BF Properties: do not rewrite. The only figure is « 100 MILLION SQ FT » (published in the Emaar material); nothing else is added.
 * Visuals (see lib/images.ts): 02, 03, 04 and 06 of the pack are decorative textures (palm shadow, light on water), not views of the community: empty alt, no caption
 * that would claim otherwise. 07 carries the developer's own travel times (captioned as such).
 */
export const THE_OASIS_STORY: NeighborhoodStory = {
  density: 'airy',
  seo: {
    title: 'The Oasis by Emaar : investir dans les villas premium de Dubai',
    description:
      'Découvrez The Oasis by Emaar : villas, waterways, environnement premium et analyse des micro-localisations pour investir dans cette nouvelle communauté de Dubai.',
  },
  hero: {
    eyebrow: 'THE OASIS BY EMAAR',
    title: 'Le luxe de l’espace, de l’eau et de la tranquillité.',
    paragraphs: [
      'À Dubai, le luxe se mesure souvent à la hauteur d’une skyline.',
      'The Oasis propose une autre définition.',
      'Des villas. De l’espace. Des paysages. Des waterways. Et une communauté pensée pour offrir davantage d’intimité au sein d’une ville qui continue de grandir.',
      'Pour l’investisseur, The Oasis représente une thèse différente : celle d’un résidentiel premium où la rareté ne repose pas uniquement sur l’adresse, mais sur la qualité de l’environnement que l’on peut offrir autour de la propriété.',
    ],
    cta: 'Étudier The Oasis',
    image: 'oasis-hero',
    size: 'tall',
    native: true,
    veil: true,
    overlay: 'soft',
  },
  sections: [
    // 2 — Une autre idée du luxe: a slim, tall palm shadow on the right, the text and its short lines on the left.
    {
      type: 'imageStatement',
      variant: 'side',
      flip: true,
      imageCols: 5,
      sticky: true,
      tone: 'light',
      eyebrow: 'UNE AUTRE IDÉE DU LUXE',
      title: 'Quand l’espace devient le véritable produit.',
      paragraphs: [
        'The Oasis ne cherche pas à reproduire l’expérience des quartiers verticaux de Dubai.',
        'La communauté est pensée autour d’une logique résidentielle plus horizontale : villas, paysages, eau et espaces de respiration.',
        'Dans ce type de marché, l’investissement ne se résume donc plus au nombre de mètres carrés à l’intérieur du logement.',
        'Il faut aussi regarder ce qui existe autour.',
      ],
      inserts: [
        {
          after: 3,
          as: 'rows',
          items: [
            'La distance entre les résidences.',
            'La relation avec l’eau.',
            'La végétation.',
            'La circulation.',
            'L’intimité.',
            'Et la manière dont la communauté sera vécue au quotidien.',
          ],
        },
      ],
      quote: 'On n’achète pas seulement une villa. On achète l’environnement qui l’entoure.',
      images: [{ slot: 'oasis-palm' }],
    },
    // 3 — Eau & paysage: the water as a framed horizontal, the text, then the key idea laid over the same still water.
    {
      type: 'imageStatement',
      variant: 'banner',
      contained: true,
      ratio: 'cinema',
      tone: 'sand',
      eyebrow: 'EAU & PAYSAGE',
      title: 'Ici, l’eau ne borde pas la communauté. Elle la traverse.',
      paragraphs: [
        'Les waterways constituent l’un des éléments les plus identifiables de The Oasis.',
        'Ils structurent le paysage, accompagnent les espaces résidentiels et participent à créer une expérience très différente d’une communauté de villas traditionnelle.',
        'Pour l’investisseur, cette relation à l’eau mérite cependant d’être analysée à l’échelle de chaque actif.',
        'Ce ne sont pas les mêmes produits.',
      ],
      inserts: [
        {
          after: 2,
          as: 'rows',
          items: [
            'Une propriété réellement positionnée sur l’eau.',
            'Une vue ouverte.',
            'Une parcelle intérieure.',
            'Une proximité avec un espace paysager.',
          ],
        },
      ],
      images: [{ slot: 'oasis-water' }],
    },
    {
      type: 'interlude',
      width: 'frame',
      ratio: 'cinema',
      tone: 'sand',
      image: 'oasis-ripples',
      ink: 'dark',
      statement: 'La communauté crée le cadre. La micro-localisation crée la différence.',
    },
    // 4 — Échelle: the Mirage render (illustration of the residential universe) large on the left, the one published figure under it.
    {
      type: 'imageStatement',
      variant: 'side',
      imageCols: 7,
      tone: 'light',
      eyebrow: 'ÉCHELLE',
      title: 'Une communauté pensée à l’échelle d’une destination résidentielle.',
      paragraphs: [
        'The Oasis est présenté par Emaar comme un développement résidentiel de grande ampleur, organisé autour de quartiers, de paysages et de waterways.',
        'Cette échelle est importante.',
        'Elle permet de penser la communauté non pas comme une simple collection de villas, mais comme un environnement résidentiel capable de développer progressivement sa propre identité.',
        'Pour BF Properties, la taille seule n’est cependant jamais une thèse d’investissement.',
        'La question reste :',
      ],
      quote: 'où se situera la valeur à l’intérieur de cette destination ?',
      figures: [{ value: '100 MILLION SQ FT', label: 'Chiffre publié dans le matériel Emaar' }],
      figuresFull: true,
      images: [{ slot: 'oasis-villas' }],
    },
    // 5 — Localisation: the official graphic, whole.
    {
      type: 'location',
      tone: 'sand',
      eyebrow: 'LOCALISATION',
      title: 'Un refuge résidentiel qui reste connecté à Dubai.',
      paragraphs: [
        'La proposition de The Oasis repose sur un équilibre.',
        'Créer une expérience résidentielle plus calme et plus privée, sans rompre avec les principaux pôles de Dubai.',
        'Pour l’investisseur, cette localisation doit être lue avec l’évolution de la ville.',
        'À mesure que Dubai continue de se développer, les grandes communautés de villas capables d’offrir espace, environnement et accessibilité constituent une catégorie résidentielle à part entière.',
      ],
      image: 'oasis-location',
      caption:
        'Carte de localisation officielle Emaar. Les temps de trajet indiqués sont des indications publiées par le promoteur, non des temps garantis par BF Properties. Cliquez pour l’agrandir.',
    },
    // 6 — Le regard BF Properties: the plot is where the investment is played. Dark, quiet water picture.
    {
      type: 'thesis',
      tone: 'dark',
      eyebrow: 'LE REGARD BF PROPERTIES',
      title: 'Toutes les villas de The Oasis ne raconteront pas la même histoire.',
      paragraphs: [
        'Dans une communauté de cette taille, le nom du quartier ne suffit pas.',
        'Nous regardons :',
        'Parce qu’un environnement premium peut créer l’attractivité.',
        'Mais la performance d’un investissement dépend toujours de l’actif acheté à l’intérieur de cet environnement.',
      ],
      inserts: [
        {
          after: 1,
          as: 'rows',
          items: [
            'la position dans la communauté,',
            'la relation réelle avec l’eau,',
            'la parcelle,',
            'l’orientation,',
            'l’intimité,',
            'la typologie,',
            'la proximité des futurs pôles de vie,',
            'le prix d’entrée',
            'et l’horizon de détention.',
          ],
        },
      ],
      quote: 'The Oasis crée le cadre. L’investissement se joue à la parcelle.',
      image: 'oasis-shore',
      sticky: true,
    },
  ],
  cta: {
    title: 'The Oasis correspond-il à votre stratégie ?',
    text: 'Nous comparons les opportunités disponibles afin d’identifier les villas dont la position, le produit et le prix d’entrée correspondent réellement à votre projet.',
    label: 'Étudier The Oasis',
  },
  compare: ['dubai-hills-estate', 'nad-al-sheba-gardens', 'palm-jebel-ali'],
  strategies: ['portfolio-diversification', 'capital-appreciation'],
};
