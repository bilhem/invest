// Home content. Everything not yet verified is a structured placeholder: [X].
import { ARTICLES, categoryLabel, readingMinutes } from './data/articles';

export const METHOD = [
  { n: '01', t: 'Comprendre', d: 'Situation financière, objectifs, horizon et attentes.' },
  { n: '02', t: 'Analyser', d: 'Marché, quartiers, promoteurs, structures de paiement et opportunités.' },
  { n: '03', t: 'Sélectionner', d: 'BF Properties réduit le marché à une sélection ciblée d’opportunités.' },
  { n: '04', t: 'Accompagner', d: 'Comparaison, acquisition et suivi de l’investissement.' },
];
export const STRATEGIES = [
  { t: 'Capital Appreciation', d: 'Investir dans une perspective de valorisation à moyen et long terme.', img: 'strategy-capital-appreciation' },
  { t: 'Rental Income', d: 'Construire un projet orienté vers les revenus locatifs.', img: 'strategy-rental-income' },
  { t: 'Off-Plan', d: 'Comprendre les achats sur plan, leurs avantages et leurs risques.', img: 'strategy-off-plan' },
  { t: 'Payment Plans', d: 'Étaler l’engagement de capital selon un calendrier de paiement.', img: 'strategy-payment-plans' },
  { t: 'Financing', d: 'Explorer le recours au financement lorsqu’il est pertinent.', img: 'strategy-financing' },
  { t: 'Portfolio Diversification', d: 'Positionner l’immobilier dans un patrimoine plus large.', img: 'strategy-portfolio-diversification' },
  { t: 'Entrepreneurs & Companies', d: 'Aborder l’investissement dans un cadre patrimonial ou professionnel.', img: 'strategy-entrepreneurs-companies' },
] as const;
export const AREAS = [
  { slug: 'dubai-creek-harbour', name: 'Dubai Creek Harbour', tag: 'Waterfront · Master community' },
  { slug: 'dubai-hills-estate', name: 'Dubai Hills Estate', tag: 'Résidentiel · Golf' },
  { slug: 'downtown-dubai', name: 'Downtown Dubai', tag: 'Centre urbain' },
  { slug: 'city-walk', name: 'City Walk', tag: 'Centre · Mer · Lifestyle' },
  { slug: 'mina-rashid', name: 'Mina Rashid', tag: 'Marina · Héritage maritime' },
  { slug: 'dubai-islands', name: 'Dubai Islands', tag: 'Beachfront' },
  { slug: 'palm-jebel-ali', name: 'Palm Jebel Ali', tag: 'Projet insulaire' },
  { slug: 'the-oasis', name: 'The Oasis by Emaar', tag: 'Villas · Waterways' },
  { slug: 'nad-al-sheba-gardens', name: 'Nad Al Sheba Gardens', tag: 'Villas · Vie familiale' },
  { slug: 'sobha-hartland-ii', name: 'Sobha Hartland II', tag: 'Waterfront · Lagoons' },
] as const;
// The latest published BF Insights articles (up to three), one teaser each. The visual is the article's cover (an authorised image) or, without one, the existing tone placeholder.
// Empty while no article is published: the home then simply omits the block (see Insights() in components/home/sections.tsx).
export const INSIGHTS = [...ARTICLES]
  .sort((a, b) => b.published.localeCompare(a.published))
  .slice(0, 3)
  .map((a, i) => ({ slug: a.slug, img: a.image ?? `insight-${i + 1}`, cat: categoryLabel(a), title: a.title, desc: a.description, meta: `Lecture : ${readingMinutes(a)} min` }));
