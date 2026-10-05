import type { ImageKey } from '@/lib/images';

/**
 * STRATEGY CONTENT — educational and illustrative only. No promised return.
 * Bracketed values [X] are placeholders to be filled with BF-validated data.
 */
export type Strategy = {
  slug: string;
  title: string;
  short: string;
  img: ImageKey;
  objective: string;
  suits: string;
  how: string;
  scenario: string;
  capital: string;
  benefits: string[];
  considerations: string[];
  href?: string;
};

export const STRATEGIES: Strategy[] = [
  {
    slug: 'capital-appreciation',
    title: 'Capital Appreciation',
    short: 'Viser une valorisation du capital à moyen et long terme.',
    img: 'story-1',
    objective: 'Rechercher une valorisation du capital sur un horizon moyen à long terme, plutôt que des revenus immédiats.',
    suits: 'Investisseurs capables d’immobiliser un capital sans besoin de revenus à court terme.',
    how: 'La sélection s’appuie sur l’analyse des quartiers, des promoteurs et de la phase du projet, ainsi que sur le rapport entre offre et demande. La valorisation n’est ni linéaire ni garantie.',
    scenario: 'Exemple illustratif : un investisseur disposant de [X] avec un horizon de [X] ans compare un projet en développement et un bien dans un quartier établi, avant de décider.',
    capital: 'À définir selon le projet : de [X] à [X].',
    benefits: ['Cohérence avec un horizon long', 'Possibilité de profiter de la maturation d’un quartier', 'Moins de gestion au quotidien'],
    considerations: ['Aucune valorisation n’est garantie', 'Capital immobilisé : liquidité limitée', 'Dépendance aux cycles de marché'],
  },
  {
    slug: 'rental-income',
    title: 'Rental Income',
    short: 'Construire un projet orienté vers les revenus locatifs.',
    img: 'story-2',
    objective: 'Générer des revenus locatifs réguliers à partir d’un bien loué.',
    suits: 'Investisseurs souhaitant un complément de revenus et acceptant la gestion locative.',
    how: 'L’analyse porte sur la demande locative du quartier, le type de bien, les charges de service et les frais de gestion. Le rendement net dépend de tous ces éléments.',
    scenario: 'Exemple illustratif : comparaison de deux biens à budget équivalent, l’un en quartier mature, l’autre en développement, en intégrant charges et vacance locative potentielle.',
    capital: 'À définir selon le projet : de [X] à [X].',
    benefits: ['Flux de revenus potentiel', 'Quartiers matures offrant plus de recul', 'Diversification des sources de revenus'],
    considerations: ['Vacance locative possible', 'Charges de service et frais de gestion à intégrer', 'Rendements variables, jamais garantis'],
  },
  {
    slug: 'off-plan',
    title: 'Off-Plan Strategy',
    short: 'Comprendre l’achat sur plan, ses avantages et ses risques.',
    img: 'story-3',
    objective: 'Acquérir un bien avant sa livraison, généralement avec un échéancier de paiement.',
    suits: 'Investisseurs acceptant un délai avant livraison et une exposition à l’exécution du promoteur.',
    how: 'Le bien est réservé puis payé par étapes jusqu’à la livraison. L’analyse du promoteur, de son historique de livraison et du calendrier est essentielle.',
    scenario: 'Exemple illustratif : un investisseur compare un projet sur plan et un bien livré, en pesant délai, flexibilité et engagement de capital.',
    capital: 'Acompte initial puis versements échelonnés : [X] au démarrage.',
    benefits: ['Engagement de capital étalé dans le temps', 'Accès à des produits récents', 'Choix plus large d’emplacements'],
    considerations: ['Risque d’exécution et de retard de livraison', 'Pas de revenus avant la livraison', 'Engagements de paiement à honorer'],
  },
  {
    slug: 'payment-plans',
    title: 'Payment Plan Strategy',
    short: 'Étaler l’engagement de capital selon un calendrier de paiement.',
    img: 'insight-1',
    objective: 'Répartir l’effort financier dans le temps grâce à un échéancier fixé par le promoteur.',
    suits: 'Investisseurs souhaitant lisser leur trésorerie, avec une visibilité sur leurs flux futurs.',
    how: 'Le plan de paiement fixe les montants et les dates. Il convient de l’aligner sur la capacité de financement réelle, y compris en cas de retard de revenus.',
    scenario: 'Exemple illustratif : un plan en [X] versements, avec [X %] à la réservation et le solde jusqu’à la livraison.',
    capital: 'Variable selon l’échéancier : [X] par échéance.',
    benefits: ['Meilleure visibilité sur les décaissements', 'Capital non mobilisé en une seule fois', 'Possibilité de planifier sa trésorerie'],
    considerations: ['Engagement ferme sur chaque échéance', 'Risque en cas de tension de trésorerie', 'Conditions variables selon les promoteurs'],
  },
  {
    slug: 'financing',
    title: 'Financing Strategy',
    short: 'Explorer le recours au financement lorsqu’il est pertinent.',
    img: 'insight-2',
    objective: 'Utiliser un financement bancaire pour compléter un apport personnel.',
    suits: 'Investisseurs éligibles à un financement et à l’aise avec un effet de levier.',
    how: 'L’éligibilité, le taux et les conditions dépendent de la situation de chaque investisseur et de chaque établissement. Le financement augmente aussi l’exposition au risque.',
    scenario: 'Exemple illustratif : un investisseur évalue le même projet avec et sans financement, en comparant coût du crédit et flux de trésorerie.',
    capital: 'Apport personnel à définir : [X %] du prix.',
    benefits: ['Capacité d’investissement accrue', 'Capital personnel préservé en partie', 'Possibilité de structurer plusieurs acquisitions'],
    considerations: ['Coût du financement et variabilité des taux', 'Effet de levier : il amplifie aussi les pertes', 'Conditions d’éligibilité à confirmer auprès des établissements'],
  },
  {
    slug: 'portfolio-diversification',
    title: 'Portfolio Diversification',
    short: 'Positionner l’immobilier dans un patrimoine plus large.',
    img: 'insight-3',
    objective: 'Intégrer l’immobilier à Dubai dans un patrimoine déjà investi ailleurs.',
    suits: 'Investisseurs souhaitant répartir leurs actifs entre classes d’actifs et zones géographiques.',
    how: 'L’allocation se réfléchit au niveau du patrimoine : part de l’immobilier, devise, liquidité, fiscalité de résidence. Elle se définit avec des conseillers qualifiés.',
    scenario: 'Exemple illustratif : un investisseur dont le patrimoine est concentré dans un seul pays étudie une allocation partielle vers Dubai.',
    capital: 'Part du patrimoine à définir : [X %].',
    benefits: ['Répartition géographique du patrimoine', 'Exposition à un marché différent', 'Complémentarité avec d’autres actifs'],
    considerations: ['Risque de change éventuel', 'Fiscalité de résidence à examiner', 'Liquidité plus faible qu’un actif financier coté'],
  },
  {
    slug: 'entrepreneurs',
    title: 'Entrepreneurs & Companies',
    short: 'Aborder l’investissement dans un cadre patrimonial ou professionnel.',
    img: 'area-downtown-dubai',
    objective: 'Étudier comment un entrepreneur peut explorer l’immobilier à Dubai dans une logique patrimoniale.',
    suits: 'Dirigeants et entrepreneurs disposant de capacités de trésorerie, personnelles ou professionnelles.',
    how: 'La structure (personnelle ou sociétaire) dépend de la situation juridique et fiscale de chacun et doit être validée par des conseillers qualifiés dans les juridictions concernées.',
    scenario: 'Voir la page dédiée pour un exemple illustratif détaillé.',
    capital: 'À définir avec vos conseillers : [X].',
    benefits: ['Réflexion globale sur le patrimoine', 'Options de financement et d’étalement', 'Accompagnement coordonné avec vos conseillers'],
    considerations: ['Aucun conseil fiscal ou juridique ici', 'Les flux entre juridictions ne sont pas automatiques', 'Validation indispensable par des professionnels'],
    href: '/strategies/entrepreneurs',
  },
];
