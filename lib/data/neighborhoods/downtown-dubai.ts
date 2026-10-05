import type { NeighborhoodStory } from '../neighborhood-types';

/**
 * DOWNTOWN DUBAI — iconic centrality / rarity / world destination. Denser, more metropolitan rhythm.
 * Copy supplied by BF Properties: do not rewrite. The centrality section names landmarks only: no travel times.
 */
export const DOWNTOWN_STORY: NeighborhoodStory = {
  density: 'dense',
  seo: {
    title: 'Downtown Dubai : investir au cœur de Dubai',
    description:
      'Downtown Dubai : Burj Khalifa, Dubai Mall et Mohammed Bin Rashid Boulevard. Comprendre la micro-localisation et sélectionner le bon actif avec BF Properties.',
  },
  hero: {
    eyebrow: 'Downtown Dubai',
    title: 'Investir au centre de l’icône.',
    paragraphs: [
      'Il existe des quartiers qui cherchent encore à devenir des destinations.',
      'Downtown Dubai en est déjà une.',
      'Autour du Burj Khalifa, du Dubai Mall et de Mohammed Bin Rashid Boulevard s’est constitué l’un des environnements urbains les plus identifiables de Dubai.',
    ],
    cta: 'Définir mon projet',
    image: 'downtown-hero',
    size: 'standard',
  },
  sections: [
    {
      type: 'editorial',
      layout: 'columns',
      tone: 'light',
      eyebrow: 'L’adresse',
      title: 'Quand l’adresse devient une destination.',
      paragraphs: [
        'Downtown concentre ce que peu de quartiers peuvent réunir à cette échelle : architecture iconique, retail international, hospitality, restauration, culture, résidences et attractivité touristique.',
        'Pour l’investisseur, cette maturité change complètement la thèse.',
      ],
      closing: ['On n’achète pas l’espoir qu’une destination apparaisse.', 'On achète une adresse dont la place dans Dubai est déjà établie.'],
    },
    {
      type: 'imageStatement',
      variant: 'overlay',
      title: 'Ici, le quartier commence au pied des icônes.',
      paragraphs: [
        'Burj Khalifa, Dubai Fountain, promenades, restaurants et hôtels composent un environnement où les principales attractions ne sont pas accessibles après vingt minutes de voiture.',
        'Elles font partie du quartier.',
        'C’est cette concentration qui donne à Downtown une profondeur difficile à reproduire ailleurs.',
      ],
      images: [{ slot: 'downtown-fountain' }],
    },
    {
      type: 'imageStatement',
      variant: 'side',
      tone: 'light',
      flip: true,
      eyebrow: 'Destination mondiale',
      title: 'Bien plus qu’un centre commercial.',
      paragraphs: [
        'Dubai Mall et Fashion Avenue participent directement à l’attractivité internationale de Downtown.',
        'Retail, luxe, restauration, entertainment et flux touristiques créent une destination fréquentée bien au-delà de sa seule population résidentielle.',
        'Pour l’investisseur, cette attractivité contribue à distinguer Downtown d’un simple quartier résidentiel premium.',
      ],
      images: [{ slot: 'downtown-fashion-avenue' }],
    },
    {
      type: 'masterplan',
      tone: 'sand',
      eyebrow: 'Micro-localisation',
      title: 'À Downtown, quelques centaines de mètres peuvent changer l’investissement.',
      image: 'downtown-masterplan',
      textPosition: 'after',
      paragraphs: [
        'Burj Khalifa, Opera District, Boulevard, Old Town, Dubai Mall et les différentes poches résidentielles ne proposent ni la même expérience, ni les mêmes vues, ni les mêmes dynamiques locatives.',
        'À Downtown, le nom du quartier ne suffit donc jamais à sélectionner un actif.',
      ],
      statement: 'La rareté est dans Downtown. La valeur se joue à l’adresse.',
    },
    {
      type: 'centrality',
      eyebrow: 'Centralité',
      title: 'Au centre de la ville que le monde vient voir.',
      intro: 'À proximité de plusieurs repères majeurs de Dubai.',
      image: 'downtown-centrality',
      items: [
        { label: 'DIFC', note: 'Centre financier' },
        { label: 'Business Bay', note: 'Quartier d’affaires' },
        { label: 'Sheikh Zayed Road', note: 'Axe majeur' },
        { label: 'Dubai International Airport', note: 'Aéroport international' },
      ],
    },
    {
      type: 'thesis',
      tone: 'light',
      eyebrow: 'Le regard BF Properties',
      title: 'Une destination mature exige une sélection plus exigeante.',
      paragraphs: [
        'À Downtown, la question n’est plus de savoir si le quartier deviendra une destination.',
        'Il l’est déjà.',
        'La question est de savoir quel actif possède encore les caractéristiques capables de justifier son prix : emplacement précis, vue, étage, qualité de l’immeuble, typologie, demande locative et rareté.',
      ],
      quote: 'Dans un quartier iconique, acheter l’adresse ne suffit pas. Il faut encore acheter le bon actif.',
    },
  ],
  cta: {
    title: 'Downtown correspond-il à votre stratégie ?',
    text: 'Nous comparons les opportunités disponibles pour identifier les actifs dont la micro-localisation, le produit et le prix correspondent réellement à votre objectif.',
    label: 'Définir mon projet',
  },
  compare: ['dubai-creek-harbour', 'dubai-hills-estate'],
  strategies: ['portfolio-diversification', 'rental-income'],
};
