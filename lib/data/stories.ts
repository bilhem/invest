import type { ImageKey } from '@/lib/images';

/**
 * INVESTOR STORIES — four real case studies supplied by BF Properties (texts, figures and dates are reproduced as supplied: do not round, reformat or reword).
 * They are investment case studies, not testimonials: the investor's situation and goal → strategy → destination → project → unit.
 * Rules of the brief: sold assets say « plus-value brute » (before costs); assets still held say « valeur comparable observée / appréciation latente / écart de valeur »,
 * never « plus-value réalisée »; the 74 % return on committed capital of the Franck case is deliberately NOT shown for now.
 */
export type StoryFigure = { label: string; value: string; note?: string };
export type TimelineNode = { when: string; label: string; value: string };
export type StoryTone = 'light' | 'sand' | 'dark';

export type Story = {
  slug: string;
  /** `true` = demonstration content: noindex, left out of the sitemap, flagged on the pages. All four real cases are `false`. */
  placeholder: boolean;
  img: ImageKey;
  /** Heading name, e.g. « Julia & Guillaume ». */
  name: string;
  /** Used in sentences (« Julia et Guillaume »), meta description. */
  spokenName: string;
  city: string;
  strategy: string;
  /** The strong sentence of the case. */
  headline: string;
  project: string;
  area: string;
  unit: string;
  developer?: string;
  /** Key figures, in the supplied order. `note` = the supplied date. */
  figures: StoryFigure[];
  /** Labels of `figures` repeated on the list page. */
  highlights: string[];
  /** The supplied « Situation » (ACTIF CONSERVÉ / REVENDU), when there is one. */
  situation?: string;
  /** `sold`: the asset was resold. `held`: the asset is kept (value variation only). Drives the legal notes. */
  outcome: 'sold' | 'held';
  /** Home page card: the headline figure (the label is the figure's own label). */
  home?: { label: string; value: string };
  start: string[];
  selection: string[];
  /** Indexes of `selection` paragraphs set as a serif statement (the idea of the section). Display only. */
  selectionStress?: number[];
  regard: { headline?: string; paragraphs: string[] };
  timeline: { from: TimelineNode; between?: string; to: TimelineNode };
  quote: string;
  /** District page to link to. Only used when that page exists (checked at render time). */
  areaSlug?: string;
  seo: { title: string; description: string };
  /** Editorial rhythm: the four pages share one skeleton but not one clone. */
  layout: {
    figures: StoryTone;
    /** Timeline straight after the figures (before the narrative) instead of after the selection. */
    timelineFirst: boolean;
    regard: 'dark' | 'sand';
    /** `band`: the quote gets its own full-width band after « Le regard BF Properties »; `inline`: pull-quote inside that section. */
    quote: 'band' | 'inline';
    /** Narrative sections: heading on the right, text on the left. */
    flip: boolean;
  };
};

/** Notes shown on the pages (supplied wording). */
export const STORY_NOTES = {
  general: 'Les performances passées ne préjugent pas des performances futures. Les valeurs, loyers et performances présentés correspondent au cas spécifique décrit et ne constituent ni une garantie de rendement ni une projection. Les rendements locatifs indiqués sont bruts avant charges, frais et fiscalité éventuelle.',
  sold: 'La plus-value présentée correspond à la différence brute entre le prix d’acquisition et le prix de revente, avant frais et coûts éventuels.',
  held: 'La variation de valeur présentée repose sur la donnée comparable fournie et ne constitue pas un prix de cession réalisé.',
} as const;

export const STORIES: Story[] = [
  {
    slug: 'franck-peninsula-five',
    placeholder: false,
    img: 'story-franck',
    name: 'Franck',
    spokenName: 'Franck',
    city: 'Genève',
    strategy: 'Capital appreciation',
    headline: 'Une plus-value ne commence pas à la revente. Elle commence au choix de l’unité.',
    project: 'Peninsula Five',
    area: 'Business Bay',
    unit: '3 bedrooms · 168 m²',
    figures: [
      { label: 'Acquisition', value: '3 284 900 AED', note: '26 décembre 2022' },
      { label: 'Revente', value: '4 500 000 AED', note: '11 mars 2026' },
      { label: 'Plus-value brute', value: '+1 215 100 AED' },
      { label: 'Appréciation de l’actif', value: '+37 %' },
      { label: 'Payment plan', value: '50 / 50' },
    ],
    highlights: ['Acquisition', 'Revente', 'Appréciation de l’actif'],
    outcome: 'sold',
    home: { label: 'Appréciation de l’actif', value: '+37 %' },
    start: [
      'Franck est un investisseur immobilier basé à Genève.',
      'Son objectif était de se positionner sur un actif off-plan présentant un potentiel de valorisation pendant sa période de construction, avec une stratégie de revente plutôt qu’une logique de rendement locatif.',
    ],
    selection: [
      'Le choix s’est porté sur Peninsula Five à Business Bay.',
      'Mais la conviction n’était pas simplement d’acheter à Business Bay ou dans Peninsula Five.',
      'Elle était de sélectionner une unité capable de se distinguer du reste de l’offre.',
      'Un appartement 3 bedrooms de 168 m², situé en étage élevé, bénéficiant d’une vue particulièrement attractive.',
      'Le positionnement suffisamment tôt dans la commercialisation permettait également de rechercher les meilleures configurations avant qu’elles ne deviennent moins disponibles.',
    ],
    selectionStress: [2],
    regard: {
      headline: 'Entrer tôt. Choisir rare. Limiter le capital immobilisé.',
      paragraphs: [
        'La logique de l’opération reposait sur trois éléments complémentaires : un positionnement suffisamment précoce, une sélection précise de l’unité — étage, vue et configuration — et un payment plan 50/50 cohérent avec une stratégie de revente pendant la construction.',
      ],
    },
    timeline: {
      from: { when: 'DEC 2022', label: 'Acquisition', value: '3.285M AED' },
      between: 'construction / payment plan 50/50',
      to: { when: 'MAR 2026', label: 'Revente', value: '4.500M AED' },
    },
    quote: '« La performance ne venait pas uniquement du projet. Elle venait aussi de l’unité choisie à l’intérieur du projet. »',
    seo: {
      title: 'Franck — Peninsula Five, Business Bay',
      description: 'Franck, investisseur basé à Genève : Peninsula Five, Business Bay. Une plus-value ne commence pas à la revente. Elle commence au choix de l’unité.',
    },
    layout: { figures: 'dark', timelineFirst: false, regard: 'dark', quote: 'band', flip: false },
  },
  {
    slug: 'julia-guillaume-city-walk',
    placeholder: false,
    img: 'story-julia-guillaume',
    name: 'Julia & Guillaume',
    spokenName: 'Julia et Guillaume',
    city: 'Paris',
    strategy: 'Capital Appreciation + Rental Income',
    headline: 'Quand l’appréciation du capital rencontre le revenu locatif.',
    project: 'Erin',
    area: 'Central Park at City Walk',
    unit: '2 bedrooms · 107 m²',
    figures: [
      { label: 'Acquisition', value: '2 331 000 AED', note: '8 mars 2022' },
      { label: 'Valeur comparable observée', value: '3 700 000 AED' },
      { label: 'Appréciation latente', value: '+58,7 %' },
      { label: 'Écart de valeur', value: '+1 369 000 AED' },
      { label: 'Loyer actuel', value: '220 000 AED / an' },
      { label: 'Rendement locatif brut sur prix d’acquisition', value: '≈ 9,4 %' },
    ],
    highlights: ['Acquisition', 'Appréciation latente', 'Loyer actuel'],
    situation: 'ACTIF CONSERVÉ',
    outcome: 'held',
    home: { label: 'Loyer actuel', value: '220K AED / an' },
    start: [
      'Julia et Guillaume, couple d’investisseurs originaires de Paris, recherchaient un actif capable de combiner valorisation patrimoniale et génération de revenus locatifs.',
    ],
    selection: [
      'Le choix s’est porté sur un 2 bedrooms à Erin, Central Park at City Walk.',
      'Là encore, la différence ne reposait pas uniquement sur le choix du projet.',
      'La sélection de l’unité faisait partie intégrante de la stratégie.',
      'L’appartement combine une vue sur le parc et la skyline avec la localisation particulière de City Walk : proximité du centre de Dubai et environnement résidentiel fortement paysager.',
    ],
    selectionStress: [2],
    regard: {
      paragraphs: [
        'La stratégie consistait à rechercher un actif capable de conserver une dimension patrimoniale tout en développant une véritable capacité locative.',
        'Aujourd’hui, Julia et Guillaume ont choisi de conserver leur appartement.',
        'Il génère actuellement 220 000 AED de loyer brut annuel.',
      ],
    },
    timeline: {
      from: { when: 'MAR 2022', label: 'Acquisition', value: '2 331 000 AED' },
      between: 'Actif conservé',
      to: { when: 'AUJOURD’HUI', label: 'Valeur comparable observée', value: '3 700 000 AED' },
    },
    quote: '« Une belle performance ne nécessite pas toujours une sortie. »',
    areaSlug: 'city-walk',
    seo: {
      title: 'Julia & Guillaume — Erin, Central Park at City Walk',
      description: 'Julia et Guillaume, investisseurs à Paris : Erin, Central Park at City Walk. Quand l’appréciation du capital rencontre le revenu locatif.',
    },
    layout: { figures: 'sand', timelineFirst: true, regard: 'dark', quote: 'inline', flip: true },
  },
  {
    slug: 'sonia-oxford-212',
    placeholder: false,
    img: 'story-sonia',
    name: 'Sonia',
    spokenName: 'Sonia',
    city: 'Lyon',
    strategy: 'Rental Income + Value Creation',
    headline: 'Parfois, la performance commence simplement par un excellent prix d’entrée.',
    project: 'Oxford 212',
    area: 'Jumeirah Village Circle',
    unit: '1 bedroom · 80 m²',
    developer: 'Iman Developers',
    figures: [
      { label: 'Acquisition', value: '770 000 AED', note: '26 avril 2022' },
      { label: 'Valeur comparable observée', value: '1 375 000 AED' },
      { label: 'Appréciation latente', value: '+78,6 %' },
      { label: 'Écart de valeur', value: '+605 000 AED' },
      { label: 'Loyer actuel', value: '80 000 AED / an' },
      { label: 'Rendement locatif brut sur prix d’acquisition', value: '≈ 10,4 %' },
    ],
    highlights: ['Acquisition', 'Appréciation latente', 'Loyer actuel'],
    situation: 'ACTIF CONSERVÉ',
    outcome: 'held',
    start: [
      'Sonia, originaire de Lyon, recherchait un investissement accessible capable de générer un revenu locatif attractif tout en conservant un potentiel de valorisation.',
    ],
    selection: [
      'En 2022, le choix s’est porté sur un 1 bedroom de 80 m² à Oxford 212, Jumeirah Village Circle, développé par Iman Developers.',
      'L’opportunité reposait sur une logique différente des investissements prime de plusieurs millions de dirhams :',
      'identifier un produit de qualité à un prix d’entrée attractif dans une zone disposant d’une demande résidentielle profonde.',
    ],
    selectionStress: [2],
    regard: {
      paragraphs: [
        'La stratégie reposait sur l’équilibre entre prix d’entrée, qualité du produit et potentiel locatif.',
        'L’actif est aujourd’hui conservé et loué 80 000 AED par an.',
      ],
    },
    timeline: {
      from: { when: 'AVR 2022', label: 'Acquisition', value: '770 000 AED' },
      between: 'Actif conservé',
      to: { when: 'AUJOURD’HUI', label: 'Valeur comparable observée', value: '1 375 000 AED' },
    },
    quote: '« Toutes les opportunités ne se trouvent pas dans les quartiers les plus chers de Dubai. »',
    seo: {
      title: 'Sonia — Oxford 212, Jumeirah Village Circle',
      description: 'Sonia, investisseuse à Lyon : Oxford 212, Jumeirah Village Circle. Parfois, la performance commence simplement par un excellent prix d’entrée.',
    },
    layout: { figures: 'dark', timelineFirst: false, regard: 'sand', quote: 'inline', flip: false },
  },
  {
    slug: 'nawal-creek-palace',
    placeholder: false,
    img: 'story-nawal',
    name: 'Nawal',
    spokenName: 'Nawal',
    city: 'Lausanne',
    strategy: 'Liquidity + Capital Appreciation',
    headline: 'Investir avec une priorité : pouvoir rester flexible.',
    project: 'Creek Palace',
    area: 'Dubai Creek Harbour',
    unit: '2 bedrooms · 98 m²',
    figures: [
      { label: 'Acquisition', value: '2 021 888 AED', note: '25 mai 2022' },
      { label: 'Revente', value: '2 980 000 AED', note: '3 septembre 2026' },
      { label: 'Plus-value brute', value: '+958 112 AED' },
      { label: 'Appréciation', value: '+47,4 %' },
      { label: 'Dernier loyer indiqué', value: '155 000 AED / an' },
    ],
    highlights: ['Acquisition', 'Revente', 'Appréciation'],
    situation: 'REVENDU',
    outcome: 'sold',
    home: { label: 'Appréciation', value: '+47,4 %' },
    start: [
      'Lorsque Nawal, investisseuse basée à Lausanne, a défini son projet, sa priorité n’était pas de rechercher l’investissement le plus spéculatif.',
      'Elle souhaitait avant tout privilégier la liquidité, la qualité de la destination et la flexibilité de sortie.',
    ],
    selection: [
      'Le choix s’est porté sur un 2 bedrooms à Creek Palace, Dubai Creek Harbour.',
      'La stratégie reposait sur une typologie recherchée au sein d’une destination susceptible de s’adresser aussi bien aux investisseurs qu’aux utilisateurs finaux.',
    ],
    regard: {
      paragraphs: [
        'L’objectif initial était la flexibilité.',
        'L’appréciation importante de l’actif est venue s’ajouter à cette logique initiale.',
        'Nawal a finalement revendu le bien 2 980 000 AED, contre 2 021 888 AED à l’acquisition.',
      ],
    },
    timeline: {
      from: { when: 'MAI 2022', label: 'Acquisition', value: '2 021 888 AED' },
      to: { when: 'SEP 2026', label: 'Revente', value: '2 980 000 AED' },
    },
    quote: '« La liquidité n’empêche pas la performance. Elle faisait partie de la stratégie dès le départ. »',
    areaSlug: 'dubai-creek-harbour',
    seo: {
      title: 'Nawal — Creek Palace, Dubai Creek Harbour',
      description: 'Nawal, investisseuse à Lausanne : Creek Palace, Dubai Creek Harbour. Investir avec une priorité : pouvoir rester flexible.',
    },
    layout: { figures: 'sand', timelineFirst: false, regard: 'dark', quote: 'band', flip: true },
  },
];
