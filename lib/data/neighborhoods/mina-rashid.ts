import type { NeighborhoodStory } from '../neighborhood-types';

/**
 * MINA RASHID (Rashid Yachts & Marina, Emaar) — a historic maritime address becoming a premium marina destination.
 * Rhythm: airy and calm, photos kept at the width their pixels support, two large maps (masterplan, location), a typographic thesis.
 * Not a Creek Harbour page (future centrality) and not a Seascape sales page.
 * Copy supplied by BF Properties: do not rewrite. No berth count anywhere: Emaar's own documents disagree and the thesis does not need it.
 * The travel times on the location graphic are the developer's marketing indications, never restated in the text.
 */
export const MINA_RASHID_STORY: NeighborhoodStory = {
  density: 'airy',
  seo: {
    title: 'Investir à Mina Rashid Dubai : marina et waterfront',
    description:
      'Mina Rashid (Rashid Yachts & Marina) : l’ancien port de Dubai devient une destination waterfront signée Emaar. Comprendre l’adresse avec BF Properties.',
  },
  hero: {
    eyebrow: 'Mina Rashid · Rashid Yachts & Marina',
    title: 'Là où le port historique de Dubai rencontre sa nouvelle waterfront.',
    paragraphs: [
      'Pendant des décennies, Mina Rashid a fait partie de l’histoire maritime de Dubai.',
      'Aujourd’hui, Emaar transforme cette adresse en une nouvelle destination résidentielle organisée autour de la marina, de promenades waterfront, de résidences contemporaines, de restaurants, de retail et d’espaces paysagers.',
      'Une nouvelle façon d’investir sur la côte de Dubai, sans s’éloigner de la ville.',
    ],
    cta: 'Définir mon projet',
    image: 'mina-hero',
    size: 'standard',
    native: true, // 1 665 × 838 px source: never enlarged
    veil: true,
  },
  sections: [
    {
      type: 'imageStatement',
      variant: 'side',
      tone: 'light',
      eyebrow: 'Une adresse maritime',
      title: 'Une histoire que l’on ne peut pas recréer.',
      lead: [
        'Toutes les nouvelles communautés de Dubai peuvent construire des immeubles.',
        'Elles ne peuvent pas toutes construire une histoire.',
        'Mina Rashid possède déjà la sienne.',
      ],
      paragraphs: [
        'Le port, la mer et sa position entre le Dubai historique et la ville moderne donnent à la destination une identité immédiatement reconnaissable.',
        'Aujourd’hui, une nouvelle couche vient se construire autour de cet héritage :',
      ],
      quote: 'celle d’une destination résidentielle waterfront.',
      images: [{ slot: 'mina-heritage' }],
      imageCols: 5, // 990 px source: never wider than 5 columns
    },
    {
      type: 'imageStatement',
      variant: 'side',
      tone: 'dark',
      flip: true,
      eyebrow: 'Destination nautique',
      title: 'De port à destination.',
      paragraphs: [
        'La transformation ne consiste pas simplement à construire des appartements face à l’eau.',
        'Emaar développe un véritable environnement de marina avec promenades, restauration, retail, espaces verts et infrastructures nautiques.',
        'La marina constitue le cœur de l’identité de Rashid Yachts & Marina.',
      ],
      quote: 'La marina n’est pas un décor du quartier. Elle est le cœur de son identité.',
      images: [{ slot: 'mina-marina' }],
      imageCols: 7,
      figures: [{ value: '100 m', label: 'longueur maximale des yachts' }],
      figuresNote: 'Longueur maximale annoncée par Emaar.',
    },
    {
      type: 'masterplan',
      tone: 'sand',
      eyebrow: 'Masterplan',
      title: 'Une destination construite autour de l’eau.',
      image: 'mina-masterplan',
      caption: 'Plan directeur officiel Emaar de Rashid Yachts & Marina.',
    },
    {
      type: 'location',
      tone: 'light',
      eyebrow: 'Connexion',
      title: 'Le waterfront, mais connecté à Dubai.',
      paragraphs: [
        'Rashid Yachts & Marina n’est pas une destination côtière isolée.',
        'Sa position crée une proposition particulière :',
      ],
      lines: ['la tranquillité d’une marina et de la côte,', 'sans renoncer à la proximité du centre de Dubai.'],
      image: 'mina-location',
      caption: 'Plan de localisation officiel Emaar. Les temps de trajet indiqués sont ceux communiqués par le promoteur.',
      statement: 'Entre le vieux Dubai et le nouveau Dubai.',
    },
    {
      type: 'imageStatement',
      variant: 'side',
      tone: 'sand',
      flip: true,
      eyebrow: 'Vie waterfront',
      title: 'Une destination qui commence à prendre de la profondeur.',
      words: ['Résidences', 'Promenade', 'Marina', 'Restaurants', 'Retail', 'Parcs', 'Hospitality'],
      paragraphs: [
        'Au fur et à mesure des développements, Rashid Yachts & Marina doit progressivement passer d’un ensemble de projets waterfront à une véritable destination.',
        'Pour l’investisseur, c’est là que l’histoire devient intéressante :',
      ],
      quote: 'une partie de la valeur d’usage de la destination reste encore à se construire.',
      images: [{ slot: 'mina-promenade' }],
      imageCols: 7,
    },
    {
      type: 'thesis',
      tone: 'light',
      eyebrow: 'Le regard BF Properties',
      title: 'Ici, nous n’achetons pas seulement une vue sur la marina.',
      paragraphs: [
        'Nous regardons ce que cette marina peut devenir autour de l’investissement.',
        'Rashid Yachts & Marina réunit plusieurs caractéristiques difficiles à recréer : une véritable façade maritime, une marina structurante, une histoire, une proximité avec le centre de Dubai et un environnement résidentiel encore en développement.',
        'C’est précisément cette combinaison qui mérite d’être étudiée.',
      ],
      quote: 'Le waterfront existe déjà. La destination continue de se construire.',
      final:
        'La question n’est donc pas simplement de savoir s’il faut acheter à Mina Rashid. La vraie question est : où se positionner à l’intérieur de Mina Rashid pour bénéficier au mieux de sa maturation ?',
    },
  ],
  cta: {
    title: 'Mina Rashid correspond-il à votre stratégie ?',
    text: 'Nous analysons les projets, les vues, les micro-localisations et les prix d’entrée afin d’identifier les opportunités réellement cohérentes avec votre horizon d’investissement.',
    label: 'Analyser les opportunités',
  },
  compare: ['dubai-creek-harbour', 'dubai-marina'],
  strategies: ['capital-appreciation', 'off-plan'],
};
