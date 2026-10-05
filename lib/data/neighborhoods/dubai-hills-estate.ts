import type { NeighborhoodStory } from '../neighborhood-types';

/**
 * DUBAI HILLS ESTATE — quality of life / maturity / depth of demand. The page breathes: airy rhythm, centred text, large images.
 * Copy supplied by BF Properties: do not rewrite.
 */
export const DUBAI_HILLS_STORY: NeighborhoodStory = {
  density: 'airy',
  seo: {
    title: 'Dubai Hills Estate : investir à Dubai',
    description:
      'Dubai Hills Estate : parc, golf, mall et qualité de vie entre Downtown et Dubai Marina. Comprendre la communauté et choisir son adresse avec BF Properties.',
  },
  hero: {
    eyebrow: 'Dubai Hills Estate',
    title: 'Le Dubai que l’on choisit pour y vivre.',
    paragraphs: [
      'Entre Downtown et Dubai Marina, Dubai Hills Estate réunit ce que peu de communautés parviennent à combiner : espace, verdure, services, centralité et qualité de vie.',
      'Pour l’investisseur, c’est une proposition différente : investir là où la demande résidentielle trouve déjà ses raisons de rester.',
    ],
    cta: 'Définir mon projet',
    image: 'hills-hero',
  },
  sections: [
    {
      type: 'editorial',
      layout: 'centered',
      tone: 'sand',
      title: 'Une adresse pensée pour durer.',
      paragraphs: [
        'À Dubai, certains quartiers attirent pour leur spectaculaire.',
        'Dubai Hills attire pour quelque chose de plus difficile à reproduire : la qualité de vie quotidienne.',
        'Parc, golf, mall, écoles, santé, restaurants, pistes cyclables, villas et résidences composent un environnement qui fonctionne déjà.',
      ],
      statement: 'Dubai Hills ne cherche plus à prouver qu’une communauté va apparaître. Elle fonctionne déjà.',
    },
    {
      type: 'imageStatement',
      variant: 'duo',
      tone: 'light',
      eyebrow: 'Qualité de vie',
      title: 'Le luxe de l’espace, au cœur de Dubai.',
      paragraphs: [
        'Dubai Hills a été conçu autour de grands espaces verts, de son parc central et de son golf.',
        'Cette respiration change profondément l’expérience résidentielle du quartier.',
      ],
      quote: 'On ne vient pas seulement dormir à Dubai Hills. On y construit son quotidien.',
      images: [{ slot: 'hills-lifestyle' }, { slot: 'hills-urban' }],
    },
    {
      type: 'imageStatement',
      variant: 'side',
      tone: 'sand',
      eyebrow: 'Destination',
      title: 'Une communauté qui n’a pas besoin de sortir d’elle-même.',
      paragraphs: [
        'Dubai Hills Mall renforce une caractéristique essentielle du quartier : la capacité à répondre à une grande partie des besoins quotidiens sans quitter la communauté.',
        'Shopping, restauration, loisirs et services participent à créer une véritable ville dans la ville.',
      ],
      images: [{ slot: 'hills-mall' }],
    },
    {
      type: 'comparison',
      tone: 'light',
      eyebrow: 'Micro-localisation',
      title: 'Deux adresses. Deux façons d’investir.',
      left: {
        label: 'Park',
        lines: ['Plus urbain.', 'Proximité des équipements.', 'Vie familiale.', 'Résidences et appartements.'],
        image: 'hills-park',
      },
      right: {
        label: 'Golf',
        lines: ['Plus résidentiel.', 'Plus exclusif.', 'Vues ouvertes.', 'Villas et environnement premium.'],
        image: 'hills-golf',
      },
    },
    {
      type: 'masterplan',
      tone: 'sand',
      eyebrow: 'Masterplan',
      title: 'Comprendre Dubai Hills avant de choisir son adresse.',
      image: 'hills-masterplan',
      caption: 'Masterplan illustratif de référence.',
    },
    {
      type: 'thesis',
      tone: 'light',
      eyebrow: 'Le regard BF Properties',
      title: 'Ici, l’investissement repose moins sur une promesse que sur une réalité.',
      lead: ['Creek Harbour est une histoire de transformation.', 'Dubai Hills est une histoire de qualité.'],
      paragraphs: [
        'La communauté existe déjà, ses équipements fonctionnent et son identité résidentielle est installée.',
        'L’enjeu n’est donc pas simplement d’acheter à Dubai Hills.',
        'Il est d’éviter de surpayer cette qualité et de sélectionner l’adresse dont le produit, la vue, la micro-localisation et le prix correspondent réellement à la stratégie de l’investisseur.',
      ],
      image: 'hills-signature',
    },
  ],
  cta: {
    title: 'Dubai Hills correspond-il à votre stratégie ?',
    label: 'Définir mon projet',
  },
  compare: ['downtown-dubai', 'dubai-creek-harbour'],
  strategies: ['rental-income', 'capital-appreciation'],
};
