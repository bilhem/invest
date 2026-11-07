import type { ImageKey } from '@/lib/images';

/**
 * STRATEGY CONTENT — educational only. No promised return, no budget, no yield, no scenario.
 *
 * /strategies sets seven entries in two groups, which are not the same thing:
 *   · three investment OBJECTIVES (what the investor wants): capital-appreciation, rental-income, portfolio-diversification;
 *   · four ACQUISITION METHODS (how to buy and finance): off-plan, payment-plans, financing, entrepreneurs.
 * The slugs are the anchors of /strategies (district pages link to `/strategies#<slug>`): do not rename them.
 * `title` is the historical English label still used by the district pages; `label` is the French name shown on /strategies.
 * The former `scenario` and `capital` fields held only bracketed placeholders ([X]) and were removed (2026-11-08): nothing was invented to replace them.
 */
export type Strategy = {
  slug: string;
  /** Historical English label (district pages link to it). */
  title: string;
  /** French name shown on /strategies. */
  label: string;
  short: string;
  img: ImageKey;
  objective: string;
  suits: string;
  how: string;
  benefits: string[];
  considerations: string[];
  /** « Critères à considérer » (objectives only), taken from `suits` and `how`. */
  criteria?: string[];
  /** Where to read more: an existing page only. */
  more: { label: string; href: string };
  href?: string;
};

export const STRATEGIES: Strategy[] = [
  {
    slug: 'capital-appreciation',
    title: 'Capital Appreciation',
    label: 'Développer votre capital',
    short: 'Viser une valorisation du capital à moyen et long terme.',
    img: 'story-1',
    objective: 'Rechercher une valorisation du capital sur un horizon moyen à long terme, plutôt que des revenus immédiats.',
    suits: 'Investisseurs capables d’immobiliser un capital sans besoin de revenus à court terme.',
    how: 'La sélection s’appuie sur l’analyse des quartiers, des promoteurs et de la phase du projet, ainsi que sur le rapport entre offre et demande. La valorisation n’est ni linéaire ni garantie.',
    benefits: ['Cohérence avec un horizon long', 'Possibilité de profiter de la maturation d’un quartier', 'Moins de gestion au quotidien'],
    considerations: ['Aucune valorisation n’est garantie', 'Capital immobilisé : liquidité limitée', 'Dépendance aux cycles de marché'],
    criteria: [
      'Un horizon moyen à long terme',
      'Un capital que vous pouvez immobiliser, sans besoin de revenus à court terme',
      'Le quartier, le promoteur et la phase du projet',
      'Le rapport entre offre et demande',
    ],
    more: { label: 'Où investir selon votre stratégie', href: '/insights/ou-investir-a-dubai' },
  },
  {
    slug: 'rental-income',
    title: 'Rental Income',
    label: 'Générer des revenus locatifs',
    short: 'Construire un projet orienté vers les revenus locatifs.',
    img: 'story-2',
    objective: 'Générer des revenus locatifs réguliers à partir d’un bien loué.',
    suits: 'Investisseurs souhaitant un complément de revenus et acceptant la gestion locative.',
    how: 'L’analyse porte sur la demande locative du quartier, le type de bien, les charges de service et les frais de gestion. Le rendement net dépend de tous ces éléments.',
    benefits: ['Flux de revenus potentiel', 'Quartiers matures offrant plus de recul', 'Diversification des sources de revenus'],
    considerations: ['Vacance locative possible', 'Charges de service et frais de gestion à intégrer', 'Rendements variables, jamais garantis'],
    criteria: [
      'Un complément de revenus plutôt qu’une valorisation immédiate',
      'La demande locative du quartier',
      'Le type de bien',
      'La gestion locative, que vous acceptez d’assumer',
    ],
    more: { label: 'Comprendre le rendement locatif', href: '/insights/rendement-locatif-dubai-2026' },
  },
  {
    slug: 'off-plan',
    title: 'Off-Plan Strategy',
    label: 'Achat sur plan',
    short: 'Comprendre l’achat sur plan, ses avantages et ses risques.',
    img: 'story-3',
    objective: 'Acquérir un bien avant sa livraison, généralement avec un échéancier de paiement.',
    suits: 'Investisseurs acceptant un délai avant livraison et une exposition à l’exécution du promoteur.',
    how: 'Le bien est réservé puis payé par étapes jusqu’à la livraison. L’analyse du promoteur, de son historique de livraison et du calendrier est essentielle.',
    benefits: ['Engagement de capital étalé dans le temps', 'Accès à des produits récents', 'Choix plus large d’emplacements'],
    considerations: ['Risque d’exécution et de retard de livraison', 'Pas de revenus avant la livraison', 'Engagements de paiement à honorer'],
    more: { label: 'Le guide d’achat', href: '/insights/acheter-bien-immobilier-dubai-2026' },
  },
  {
    slug: 'payment-plans',
    title: 'Payment Plan Strategy',
    label: 'Plans de paiement',
    short: 'Étaler l’engagement de capital selon un calendrier de paiement.',
    img: 'insight-1',
    objective: 'Répartir l’effort financier dans le temps grâce à un échéancier fixé par le promoteur.',
    suits: 'Investisseurs souhaitant lisser leur trésorerie, avec une visibilité sur leurs flux futurs.',
    how: 'Le plan de paiement fixe les montants et les dates. Il convient de l’aligner sur la capacité de financement réelle, y compris en cas de retard de revenus.',
    benefits: ['Meilleure visibilité sur les décaissements', 'Capital non mobilisé en une seule fois', 'Possibilité de planifier sa trésorerie'],
    considerations: ['Engagement ferme sur chaque échéance', 'Risque en cas de tension de trésorerie', 'Conditions variables selon les promoteurs'],
    more: { label: 'Budgets et plans de paiement', href: '/insights/combien-faut-il-investir-dubai' },
  },
  {
    slug: 'financing',
    title: 'Financing Strategy',
    label: 'Financement',
    short: 'Explorer le recours au financement lorsqu’il est pertinent.',
    img: 'insight-2',
    objective: 'Utiliser un financement bancaire pour compléter un apport personnel.',
    suits: 'Investisseurs éligibles à un financement et à l’aise avec un effet de levier.',
    how: 'L’éligibilité, le taux et les conditions dépendent de la situation de chaque investisseur et de chaque établissement. Le financement augmente aussi l’exposition au risque.',
    benefits: ['Capacité d’investissement accrue', 'Capital personnel préservé en partie', 'Possibilité de structurer plusieurs acquisitions'],
    considerations: ['Coût du financement et variabilité des taux', 'Effet de levier : il amplifie aussi les pertes', 'Conditions d’éligibilité à confirmer auprès des établissements'],
    more: { label: 'Budgets et financement', href: '/insights/combien-faut-il-investir-dubai' },
  },
  {
    slug: 'portfolio-diversification',
    title: 'Portfolio Diversification',
    label: 'Diversifier votre patrimoine',
    short: 'Positionner l’immobilier dans un patrimoine plus large.',
    img: 'insight-3',
    objective: 'Intégrer l’immobilier à Dubai dans un patrimoine déjà investi ailleurs.',
    suits: 'Investisseurs souhaitant répartir leurs actifs entre classes d’actifs et zones géographiques.',
    how: 'L’allocation se réfléchit au niveau du patrimoine : part de l’immobilier, devise, liquidité, fiscalité de résidence. Elle se définit avec des conseillers qualifiés.',
    benefits: ['Répartition géographique du patrimoine', 'Exposition à un marché différent', 'Complémentarité avec d’autres actifs'],
    considerations: ['Risque de change éventuel', 'Fiscalité de résidence à examiner', 'Liquidité plus faible qu’un actif financier coté'],
    criteria: [
      'La part de l’immobilier dans l’ensemble du patrimoine',
      'La répartition entre classes d’actifs et zones géographiques',
      'Une allocation définie avec des conseillers qualifiés',
    ],
    more: { label: 'Le guide de l’investisseur', href: '/insights/investir-a-dubai' },
  },
  {
    slug: 'entrepreneurs',
    title: 'Entrepreneurs & Companies',
    label: 'Investissement via société',
    short: 'Aborder l’investissement dans un cadre patrimonial ou professionnel.',
    img: 'area-downtown-dubai',
    objective: 'Étudier comment un entrepreneur peut explorer l’immobilier à Dubai dans une logique patrimoniale.',
    suits: 'Dirigeants et entrepreneurs disposant de capacités de trésorerie, personnelles ou professionnelles.',
    how: 'La structure (personnelle ou sociétaire) dépend de la situation juridique et fiscale de chacun et doit être validée par des conseillers qualifiés dans les juridictions concernées.',
    benefits: ['Réflexion globale sur le patrimoine', 'Options de financement et d’étalement', 'Accompagnement coordonné avec vos conseillers'],
    considerations: ['Aucun conseil fiscal ou juridique ici', 'Les flux entre juridictions ne sont pas automatiques', 'Validation indispensable par des professionnels'],
    more: { label: 'Voir la page dédiée', href: '/strategies/entrepreneurs' },
    href: '/strategies/entrepreneurs',
  },
];
