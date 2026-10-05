import type { NeighborhoodStory } from '../neighborhood-types';

/**
 * CITY WALK — geography as the thesis: central Dubai + the sea + a premium urban lifestyle + greenery.
 * Rhythm: a dark location chapter (the annotated map is the first thing to understand), then alternating photo/text compositions,
 * the Crestlane masterplan on its own (it is NOT the full City Walk masterplan), a typographic thesis.
 * Copy supplied by BF Properties: do not rewrite. No distances, no returns, no prices.
 */
export const CITY_WALK_STORY: NeighborhoodStory = {
  density: 'standard',
  seo: {
    title: 'Investir à City Walk Dubai : le centre et la mer',
    description:
      'City Walk, Central Park, Crestlane : une adresse entre Downtown, le DIFC et la côte de Jumeirah. Comprendre la localisation avec BF Properties.',
  },
  hero: {
    eyebrow: 'City Walk',
    title: 'Entre le cœur de Dubai et la mer.',
    paragraphs: [
      'À proximité immédiate de Downtown et du DIFC, tout en restant à quelques minutes de la côte de Jumeirah, City Walk occupe une position rare dans Dubai.',
      'Une adresse où centralité, lifestyle, espaces verts et proximité de la mer se rencontrent dans un environnement pensé à l’échelle du piéton.',
    ],
    cta: 'Définir mon projet',
    image: 'citywalk-hero',
  },
  sections: [
    {
      type: 'location',
      tone: 'dark',
      eyebrow: 'Une position rare',
      title: 'Le centre d’un côté. La mer de l’autre.',
      lines: [
        'Downtown et Burj Khalifa.',
        'DIFC et le cœur financier de Dubai.',
        'Jumeirah et ses plages.',
        'Sheikh Zayed Road et les grands axes de la ville.',
      ],
      image: 'citywalk-location',
      // Positions in % of the map (4203 × 1984): indicative, placed on the map's own landmarks (The Green Planet for City Walk,
      // Museum of the Future for the DIFC, Sheikh Zayed Road, the Jumeirah shoreline). The caption says so.
      markers: [
        { label: 'City Walk', x: 63.1, y: 38.3, kind: 'focus', side: 'top' },
        { label: 'Jumeirah · la côte', x: 57.3, y: 37.5, kind: 'poi', side: 'left', link: true },
        { label: 'DIFC', x: 70.8, y: 34.3, kind: 'poi', side: 'right', link: true },
        { label: 'Downtown · Burj Khalifa', x: 68.2, y: 48.1, kind: 'poi', side: 'right', link: true, flipNarrow: true },
        { label: 'Sheikh Zayed Road', x: 64.2, y: 52.4, kind: 'poi', side: 'left', link: true, secondary: true },
        { label: 'Le Golfe', x: 46, y: 28, kind: 'zone', secondary: true },
      ],
      caption: 'Carte de localisation de City Walk. Repères placés par BF Properties : positions indicatives, sans distances ni temps de trajet.',
      after: [
        'City Walk se trouve à l’intersection de plusieurs des environnements les plus recherchés de Dubai.',
        'Et c’est probablement sa caractéristique la plus difficile à reproduire.',
      ],
      statement: 'Assez proche du centre pour vivre Dubai pleinement. Assez proche de la mer pour ne pas vivre uniquement dans la ville.',
    },
    {
      type: 'imageStatement',
      variant: 'side',
      tone: 'light',
      eyebrow: 'Vie urbaine',
      title: 'Une centralité que l’on peut réellement vivre.',
      paragraphs: [
        'La localisation ne serait rien sans l’expérience du quartier.',
        'City Walk associe résidences, restaurants, cafés, retail, hospitality, espaces paysagers et lieux de divertissement dans un environnement où une partie importante de la vie quotidienne peut se faire à pied.',
        'C’est ce qui distingue City Walk d’une simple adresse centrale.',
      ],
      quote: 'On ne fait pas que rejoindre la ville depuis City Walk. On vit déjà dedans.',
      images: [{ slot: 'citywalk-urban' }],
    },
    {
      type: 'imageStatement',
      variant: 'side',
      tone: 'sand',
      flip: true,
      eyebrow: 'Ville & nature',
      title: 'Au cœur de Dubai, sans vivre au milieu du béton.',
      paragraphs: [
        'Central Park ajoute une autre dimension à cette proposition.',
        'Des résidences intégrées à un environnement paysager, des espaces verts, des installations sportives et des lieux de détente permettent de conserver l’avantage de la centralité tout en créant une expérience résidentielle beaucoup plus apaisée.',
        'Et c’est là que l’équilibre de City Walk devient particulièrement intéressant :',
      ],
      quote: 'le centre, la mer et la verdure dans un même environnement résidentiel.',
      images: [{ slot: 'citywalk-park' }],
    },
    {
      type: 'imageStatement',
      variant: 'side',
      tone: 'light',
      eyebrow: 'Nouvelle génération',
      title: 'Une adresse établie qui continue d’évoluer.',
      lead: ['City Walk existe déjà.', 'Mais son histoire résidentielle continue de s’écrire.'],
      paragraphs: [
        'Avec Crestlane et les nouvelles phases de développement, Meraas poursuit la transformation du quartier tout en conservant ce qui fait sa force : sa localisation, son caractère urbain et son lifestyle.',
        'Pour l’investisseur, cette combinaison est intéressante :',
      ],
      quote: 'entrer dans de nouveaux actifs au sein d’une destination qui, elle, n’a plus besoin d’être inventée.',
      images: [{ slot: 'citywalk-crestlane' }],
      imageCols: 6,
    },
    {
      type: 'masterplan',
      tone: 'light',
      eyebrow: 'Masterplan Crestlane',
      image: 'citywalk-crestlane-masterplan',
      caption: 'Masterplan de Crestlane. Il ne représente pas le masterplan complet de City Walk.',
    },
    {
      type: 'thesis',
      tone: 'dark',
      eyebrow: 'Le regard BF Properties',
      title: 'Certaines localisations sont difficiles à reproduire.',
      lead: [
        'On peut construire une nouvelle tour.',
        'On peut créer un nouveau masterplan.',
        'Mais on ne peut pas déplacer Downtown, le DIFC, Jumeirah et la côte.',
      ],
      paragraphs: [
        'C’est cette géographie qui constitue, selon nous, l’un des principaux fondamentaux de City Walk.',
        'La question devient alors de sélectionner le projet, la micro-localisation et le prix d’entrée capables de réellement en profiter.',
      ],
      quote: 'City Walk n’est pas seulement central. Il est placé entre ce que Dubai a de plus urbain et ce qu’il a de plus lifestyle.',
    },
  ],
  cta: {
    title: 'City Walk correspond-il à votre stratégie ?',
    text: 'Nous comparons les opportunités disponibles pour identifier les actifs capables de tirer parti de cette combinaison rare entre centralité, proximité de la mer et qualité de vie.',
    label: 'Définir mon projet',
  },
  compare: ['downtown-dubai', 'dubai-hills-estate'],
  strategies: ['off-plan', 'portfolio-diversification'],
};
