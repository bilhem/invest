import type { NeighborhoodStory } from '../neighborhood-types';

/**
 * DUBAI ISLANDS (Nakheel) — large-scale beachfront destination creation, connected to Dubai.
 * Rhythm: scale. Full-bleed photo bands and an overlay, one very large location map with its chain of reference points,
 * a numbered list of selection criteria, a dark thesis. Bay Grove / Island B is evidence of execution, never the thesis.
 * Copy supplied by BF Properties: do not rewrite. The English criteria of the brief are translated into French without changing their meaning.
 * Facts used (Nakheel brochure): five islands, 20 km+ of beaches, off Deira, access via the Infinity Bridge.
 */
export const DUBAI_ISLANDS_STORY: NeighborhoodStory = {
  density: 'standard',
  seo: {
    title: 'Investir à Dubai Islands : le beachfront de demain',
    description:
      'Dubai Islands : cinq îles et plus de 20 km de plages au large de Deira. Comprendre la destination Nakheel et se positionner avec BF Properties.',
  },
  hero: {
    eyebrow: 'Dubai Islands',
    title: 'Le prochain grand chapitre beachfront de Dubai.',
    paragraphs: [
      'Cinq îles. Plus de 20 kilomètres de plages. Des résidences, resorts, marinas, parcs, promenades et futurs pôles de loisirs face au Golfe.',
      'Dubai Islands porte une ambition considérable : créer une nouvelle destination côtière complète, tout en restant connectée à la ville.',
      'Le beachfront de demain, sans quitter Dubai.',
    ],
    cta: 'Découvrir les opportunités',
    image: 'islands-hero',
  },
  sections: [
    {
      type: 'editorial',
      layout: 'columns',
      tone: 'light',
      eyebrow: 'Une nouvelle destination',
      title: 'Dubai ne crée pas simplement de nouvelles résidences. Elle crée un nouveau morceau de ville face à la mer.',
      paragraphs: [
        'Dubai Islands s’étend sur cinq îles au large de Deira.',
        'Le masterplan prévoit plus de 20 kilomètres de plages, des espaces verts, des parcours de golf, des marinas et promenades, des communautés résidentielles ainsi qu’une importante composante hospitality et loisirs.',
      ],
      closing: [
        'L’ambition dépasse donc largement celle d’un ensemble de projets immobiliers.',
        'L’objectif est de construire une destination.',
        'Et pour l’investisseur, c’est précisément cette différence qui compte.',
      ],
    },
    {
      type: 'imageStatement',
      variant: 'banner',
      tone: 'light',
      eyebrow: 'Beachfront',
      title: 'Plus de 20 kilomètres de plage pour construire une nouvelle adresse.',
      paragraphs: [
        'À Dubai, le beachfront est une ressource limitée.',
        'Dubai Islands ajoute une nouvelle façade résidentielle à la ville avec des plages, des promenades, des marinas et des communautés directement tournées vers le Golfe.',
        'Mais toute cette côte n’aura pas la même valeur.',
        'La proximité réelle de la plage, l’orientation, la vue, l’accessibilité et la position à l’intérieur du masterplan feront progressivement apparaître des micro-localisations plus désirables que d’autres.',
      ],
      quote: 'Le beachfront crée la rareté. La micro-localisation détermine comment en profiter.',
      images: [{ slot: 'islands-beachfront' }],
    },
    {
      type: 'location',
      tone: 'sand',
      eyebrow: 'Localisation',
      title: 'Une île, sans être isolé de Dubai.',
      paragraphs: [
        'Dubai Islands se trouve au nord de Dubai, au large de Deira.',
        'Sa proximité avec le Dubai historique et ses connexions vers le reste de la ville constituent une partie essentielle de sa thèse.',
        'Le projet ne cherche donc pas uniquement à offrir une expérience insulaire.',
        'Il cherche à combiner le beachfront avec l’accès à Dubai.',
      ],
      image: 'islands-location',
      path: ['Dubai Islands', 'Deira', 'Dubai Creek', 'DXB', 'Downtown'],
      pathLabel: 'Repères de la carte',
      caption: 'Carte de localisation officielle Nakheel (brochure Bay Grove Residences). Cliquez pour l’agrandir.',
      statement: 'Vivre face à la mer sans construire sa vie à l’écart de la ville.',
    },
    {
      type: 'masterplan',
      tone: 'sand',
      eyebrow: 'Masterplan',
      title: 'Les premières pièces de la destination prennent forme.',
      image: 'islands-island-b',
      caption:
        'Island B — contexte de développement. Vue de référence d’Island B (Bay Grove) : elle ne représente pas le masterplan complet des cinq îles.',
    },
    {
      type: 'imageStatement',
      variant: 'side',
      tone: 'light',
      eyebrow: 'La transformation',
      title: 'Le masterplan commence à devenir un quartier.',
      paragraphs: [
        'Dubai Islands n’est plus uniquement une vision sur une carte.',
        'Les premiers développements résidentiels permettent progressivement de comprendre comment cette nouvelle façade maritime peut fonctionner à l’échelle du quotidien.',
        'Bay Grove en constitue l’une des premières expressions : beachfront, espaces paysagers, promenades, parcours piétons et cyclables, résidences et équipements communautaires.',
      ],
      quote: 'Mais pour BF Properties, Bay Grove n’est pas la thèse. Dubai Islands est la thèse.',
      outro: ['Les projets sont les différentes manières de prendre position à l’intérieur de cette transformation.'],
      images: [{ slot: 'islands-waterfront' }],
    },
    {
      type: 'imageStatement',
      variant: 'overlay',
      align: 'right',
      eyebrow: 'Lifestyle',
      title: 'Pour devenir une destination, il faut donner une raison d’y venir.',
      paragraphs: [
        'Le résidentiel seul ne suffit pas à créer une destination internationale.',
        'L’ambition de Dubai Islands repose également sur ses plages, ses espaces publics, ses loisirs, son hospitality et les différentes expériences qui doivent progressivement donner de la profondeur au quartier.',
        'Les futurs visiteurs ne doivent pas seulement y habiter.',
        'Ils doivent avoir une raison d’y séjourner, d’y sortir et d’y revenir.',
        'C’est cette profondeur d’usage qui peut progressivement transformer un ensemble d’îles en véritable destination.',
      ],
      images: [{ slot: 'islands-pool' }],
    },
    {
      type: 'thesis',
      tone: 'dark',
      eyebrow: 'Le regard BF Properties',
      title: 'Acheter du beachfront avant que la destination soit mature.',
      paragraphs: [
        'Dubai Islands raconte une histoire très différente de Dubai Marina.',
        'Dubai Marina permet d’acheter dans une destination waterfront déjà mature.',
        'Dubai Islands permet d’étudier une destination dont une grande partie de l’écosystème reste encore à construire.',
        'C’est à la fois son intérêt et la raison pour laquelle la sélection doit être rigoureuse.',
      ],
      criteria: {
        items: [
          'Le promoteur',
          'L’île',
          'La position à l’intérieur du masterplan',
          'La distance réelle à la plage',
          'La vue',
          'Le produit',
          'Le prix au pied carré',
          'Le calendrier de livraison',
        ],
        closing: 'Et surtout : à quoi pourrait ressembler l’environnement autour de l’actif à l’horizon de sortie de l’investisseur.',
      },
      quote: 'Le beachfront existe. La destination est en train de se construire.',
    },
  ],
  cta: {
    title: 'Où se positionner à Dubai Islands ?',
    text: [
      'Toutes les résidences de Dubai Islands ne profiteront pas de la transformation de la même manière.',
      'Nous analysons les projets, les micro-localisations et les prix d’entrée pour identifier les actifs cohérents avec votre stratégie et votre horizon d’investissement.',
    ],
    label: 'Découvrir notre sélection',
  },
  compare: ['dubai-marina', 'mina-rashid'],
  strategies: ['off-plan', 'capital-appreciation'],
};
