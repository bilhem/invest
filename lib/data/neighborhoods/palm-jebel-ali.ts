import type { NeighborhoodStory } from '../neighborhood-types';

/**
 * PALM JEBEL ALI (Nakheel) — the birth of a new icon: beachfront rarity, a destination at the scale of a new piece of Dubai,
 * Dubai growing southwards, a long-horizon destination thesis. Palm Central is only an example of the destination taking shape, never the subject.
 * Rhythm: monumental. Wide aerials (a full-bleed band, one very large photo with the title laid over the sea), the Palm-wide reference visual and the
 * location map shown whole on the wide container, a dark spread with the dusk view, a dark text-only pause on Palm Jumeirah, a typographic thesis.
 * Copy supplied by BF Properties: do not rewrite. No figure, price, yield, date, count or distance is added to it (none is needed).
 * Visuals: Nakheel brochure (Palm Central / Palm Jebel Ali). 07 carries the developer's own travel times (captioned as such);
 * 08 is a Palm-wide reference visual, not a technical or legal masterplan (captioned as such).
 */
export const PALM_JEBEL_ALI_STORY: NeighborhoodStory = {
  density: 'airy',
  seo: {
    title: 'Palm Jebel Ali : investir dans la nouvelle Palm de Dubai',
    description:
      'Découvrez la thèse d’investissement de Palm Jebel Ali : beachfront, développement vers le sud de Dubai, micro-localisation et potentiel d’une nouvelle destination à long terme.',
  },
  hero: {
    eyebrow: 'Palm Jebel Ali',
    title: 'Investir dans la naissance d’une nouvelle icône de Dubai.',
    paragraphs: [
      'Palm Jumeirah appartient déjà à l’image mondiale de Dubai.',
      'Plus au sud, une nouvelle Palm est en train de prendre forme.',
      'Palm Jebel Ali porte une ambition qui dépasse largement la création d’une nouvelle communauté résidentielle : faire émerger une nouvelle destination internationale sur la côte de Dubai.',
    ],
    cta: 'Étudier Palm Jebel Ali',
    image: 'palm-hero',
    size: 'tall',
    veil: true,
  },
  sections: [
    // 2 — L’ambition: text, the key idea, then the fronds as a full-bleed band (geography first).
    {
      type: 'imageStatement',
      variant: 'banner',
      textFirst: true,
      ratio: 'wide',
      tone: 'light',
      eyebrow: 'Une nouvelle Palm',
      title: 'Dubai ne construit pas simplement une nouvelle communauté. Elle prépare une nouvelle destination.',
      paragraphs: [
        'Palm Jebel Ali s’inscrit dans une Dubai très différente de celle qui a vu naître Palm Jumeirah.',
        'Ici, l’ambition dépasse la construction de résidences face à la mer.',
        'La Palm doit progressivement réunir habitat, beachfront, espaces publics, hospitality, loisirs et services afin de créer une destination capable de développer sa propre identité.',
      ],
      inserts: [
        {
          after: 0,
          as: 'rows',
          items: ['Une ville plus grande.', 'Plus internationale.', 'Et dont le développement continue progressivement vers le sud.'],
        },
      ],
      quote: 'La Palm est la forme. La destination est la véritable histoire d’investissement.',
      images: [{ slot: 'palm-fronds' }],
    },
    // 3 — Beachfront: the whole Palm in its true ratio, the title over the open sea.
    {
      type: 'imageStatement',
      variant: 'atlas',
      tone: 'light',
      eyebrow: 'La rareté',
      title: 'Ici, la rareté se mesure en mètres de plage.',
      paragraphs: [
        'La forme même de Palm Jebel Ali multiplie les relations entre les résidences et l’eau.',
        'Mais être situé sur la Palm ne signifie pas automatiquement posséder le même actif.',
      ],
      words: [
        'Un frond.',
        'Une résidence sur la spine.',
        'Un accès direct à la plage.',
        'Une orientation particulière.',
        'Une vue ouverte sur le Golfe.',
        'Une proximité avec les futurs pôles de vie.',
      ],
      outro: ['À mesure que la destination se développera, ces différences de micro-localisation deviendront de plus en plus importantes.'],
      quote: 'Posséder sur la Palm est une chose. Posséder la bonne position sur la Palm en est une autre.',
      images: [{ slot: 'palm-aerial' }],
    },
    // 4 — Vision d’ensemble: the Palm-wide reference visual, very large, whole, enlargeable.
    {
      type: 'masterplan',
      tone: 'sand',
      eyebrow: 'Vision d’ensemble',
      title: 'Une destination à l’échelle d’un nouveau morceau de Dubai.',
      paragraphs: [
        'Palm Jebel Ali ne doit pas être analysée comme une simple collection de projets immobiliers.',
        'La vision de la destination associe résidences, waterfront, hospitality, espaces paysagers, services et expériences de loisirs.',
        'C’est la profondeur progressive de cet écosystème qui déterminera la manière dont la Palm sera vécue demain.',
      ],
      image: 'palm-reference',
      caption:
        'Palm Jebel Ali — vision d’ensemble. Visuel de référence issu de la brochure Nakheel : il ne s’agit pas d’un plan directeur technique ou réglementaire. Cliquez pour l’agrandir.',
    },
    // 5 — Le sud de Dubai: the official location page, whole, then the two questions.
    {
      type: 'location',
      tone: 'light',
      eyebrow: 'Nouveau corridor de croissance',
      title: 'Et si le prochain chapitre de Dubai s’écrivait plus au sud ?',
      paragraphs: [
        'Palm Jebel Ali ne doit pas être étudiée uniquement à travers sa forme iconique.',
        'Sa localisation fait partie intégrante de sa thèse d’investissement.',
        'Dubai continue d’étendre sa géographie urbaine vers le sud, autour de nouveaux pôles résidentiels, économiques, logistiques et touristiques.',
        'Palm Jebel Ali s’inscrit dans cette évolution.',
      ],
      image: 'palm-location',
      caption:
        'Carte de localisation issue de la brochure Nakheel. Les temps de trajet éventuellement indiqués sont des indications publiées par le promoteur, non des temps garantis par BF Properties. Cliquez pour l’agrandir.',
      questions: [
        {
          lead: 'Pour l’investisseur, la question n’est donc pas uniquement :',
          text: '“Palm Jebel Ali deviendra-t-elle une destination attractive ?”',
        },
        {
          lead: 'Elle est aussi :',
          text: '“Quelle place cette nouvelle destination peut-elle prendre dans le Dubai de demain ?”',
        },
      ],
    },
    // 6 — La destination prend forme: one dominant dusk view beside the text; Palm Central stays an example.
    {
      type: 'imageStatement',
      variant: 'spread',
      flip: true,
      tone: 'dark',
      eyebrow: 'De la vision à la destination',
      title: 'La Palm commence progressivement à prendre vie.',
      paragraphs: [
        'Une destination ne devient réelle que lorsque son masterplan commence à produire des lieux où l’on peut réellement vivre.',
        'Les premiers développements résidentiels permettent désormais de mieux comprendre comment Palm Jebel Ali pourrait fonctionner à l’échelle du quotidien.',
        'Palm Central en constitue l’une des expressions résidentielles.',
      ],
      inserts: [
        {
          after: 1,
          as: 'flow',
          items: ['Résidences.', 'Beachfront.', 'Paysages.', 'Espaces communautaires.', 'Bien-être.', 'Hospitality.', 'Loisirs.'],
        },
      ],
      quote: 'Mais pour BF Properties, Palm Central n’est pas la thèse. Palm Jebel Ali est la thèse.',
      outro: ['Les différents projets sont les différentes manières de prendre position à l’intérieur de cette destination.'],
      images: [{ slot: 'palm-evening' }],
    },
    // 7 — Lifestyle: a horizon view as a band, text underneath, no amenity cards.
    {
      type: 'imageStatement',
      variant: 'banner',
      ratio: 'wide',
      tone: 'light',
      eyebrow: 'Une destination, pas uniquement des résidences',
      title: 'Pour devenir iconique, une adresse doit donner une raison d’y vivre — et d’y venir.',
      paragraphs: [
        'Le beachfront crée l’attraction.',
        'Mais il ne suffit pas, à lui seul, à créer une destination internationale.',
        'La profondeur de Palm Jebel Ali dépendra progressivement de ce qui se développera autour de ses résidences :',
        'C’est cette combinaison qui peut transformer une géographie spectaculaire en véritable destination.',
      ],
      inserts: [
        {
          after: 2,
          as: 'flow',
          items: ['hospitality,', 'restauration,', 'loisirs,', 'espaces publics,', 'bien-être,', 'services', 'et expériences waterfront.'],
        },
      ],
      images: [{ slot: 'palm-waterfront' }],
    },
    // 8 — Palm Jumeirah: a text-only pause. Maturation logics, no chart, no figure, no promise.
    {
      type: 'editorial',
      layout: 'centered',
      tone: 'dark',
      eyebrow: 'Un précédent, pas une promesse',
      title: 'Palm Jumeirah montre ce qu’une adresse iconique peut devenir.',
      paragraphs: [
        'Palm Jumeirah permet aujourd’hui d’observer ce qui se produit lorsqu’une adresse waterfront devient à la fois un lieu de résidence, une destination touristique, une marque internationale et une géographie immédiatement identifiable.',
        'Palm Jebel Ali part d’un autre contexte, d’une autre échelle et d’un autre moment dans l’histoire de Dubai.',
        'Il serait donc incorrect de supposer qu’elle reproduira automatiquement la trajectoire de Palm Jumeirah.',
        'Mais le précédent pose une question particulièrement intéressante pour l’investisseur :',
      ],
      statement: 'À quel moment faut-il entrer dans l’histoire d’une destination avant qu’elle ne devienne mature ?',
    },
    // 9 — Le regard BF Properties.
    {
      type: 'thesis',
      tone: 'light',
      eyebrow: 'Le regard BF Properties',
      title: 'Nous n’achetons pas simplement une Palm. Nous achetons une position dans son histoire.',
      paragraphs: [
        'Palm Jebel Ali est probablement l’une des thèses les plus longues de notre sélection.',
        'Une partie importante de la destination reste encore à construire.',
        'Cette immaturité constitue précisément une partie de son intérêt — mais également de son risque.',
        'Notre rôle n’est donc pas de considérer que tout actif situé sur Palm Jebel Ali constitue automatiquement un bon investissement.',
      ],
      inserts: [
        {
          after: 1,
          as: 'rows',
          items: ['Son infrastructure.', 'Son hospitality.', 'Ses commerces.', 'Ses espaces publics.', 'Ses différentes communautés.'],
        },
      ],
      criteria: {
        style: 'plain',
        intro: 'Nous analysons :',
        items: [
          'la position dans la destination,',
          'le district ou le frond,',
          'l’accès réel au beachfront,',
          'l’orientation et la vue,',
          'la typologie,',
          'le développeur,',
          'le prix d’entrée,',
          'le calendrier de livraison',
          'et l’horizon de sortie.',
        ],
        closing: 'Parce qu’entre acheter une adresse iconique et acheter correctement cette adresse, il existe une différence considérable.',
      },
      final: 'L’icône peut appartenir à Dubai. La performance appartient toujours à l’actif.',
    },
  ],
  cta: {
    title: 'À quel moment entrer dans l’histoire de Palm Jebel Ali ?',
    text: [
      'Palm Jebel Ali est une stratégie de destination et de long terme.',
      'Nous comparons les opportunités disponibles afin d’identifier les actifs dont la position, le prix d’entrée et l’horizon de détention sont cohérents avec votre stratégie.',
    ],
    label: 'Étudier Palm Jebel Ali',
  },
  compare: ['dubai-islands', 'dubai-creek-harbour', 'dubai-hills-estate', 'downtown-dubai', 'city-walk', 'mina-rashid'],
  strategies: ['off-plan', 'capital-appreciation'],
};
