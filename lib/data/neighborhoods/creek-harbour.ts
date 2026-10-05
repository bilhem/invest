import type { NeighborhoodStory } from '../neighborhood-types';

/**
 * DUBAI CREEK HARBOUR — transformation / future centrality.
 * Copy supplied by BF Properties: do not rewrite. Waterfront = bord de Dubai Creek.
 * Figures: Dubai Square (Emaar, 5 Dec 2025), Blue Line (Dubai Media Office 3 May 2026; RTA). Sources are kept in creek-harbour.ts (`deep.sources`).
 */
export const CREEK_HARBOUR_STORY: NeighborhoodStory = {
  density: 'standard',
  seo: {
    title: 'Dubai Creek Harbour : investir dans le quartier',
    description:
      'Dubai Creek Harbour, destination waterfront d’Emaar face à Downtown : masterplan, Dubai Square, Blue Line, Creek Tower et regard d’investissement de BF Properties.',
  },
  hero: {
    eyebrow: 'Dubai Creek Harbour',
    title: 'Investir dans ce que Dubai est en train de devenir.',
    paragraphs: [
      'Face à Downtown Dubai, Emaar développe une destination waterfront d’une toute autre échelle. Creek Harbour est déjà une adresse résidentielle attractive. Mais l’essentiel de sa thèse d’investissement réside peut-être encore devant elle.',
    ],
    cta: 'Définir mon projet',
    image: 'creek-hero',
    size: 'standard',
  },
  sections: [
    {
      type: 'editorial',
      layout: 'stagger',
      title: 'Une destination déjà réelle. Une histoire encore loin d’être terminée.',
      paragraphs: [
        'Dubai Creek Harbour possède déjà les éléments d’une destination résidentielle attractive : des promenades en bordure de Dubai Creek, des résidences contemporaines, des espaces publics et des vues ouvertes sur l’eau et la skyline de Downtown.',
        'Mais le quartier ne doit pas être analysé uniquement à travers ce qui existe aujourd’hui.',
        'Son masterplan, Dubai Square, l’arrivée programmée du métro et l’ambition portée autour de Creek Tower racontent une destination encore en transformation.',
      ],
      statement: 'Le potentiel de Creek Harbour n’est pas seulement dans ce qu’il est aujourd’hui. Il est dans ce qu’il est en train de devenir.',
      images: [{ slot: 'creek-lifestyle' }, { slot: 'creek-downtown-view' }],
    },
    {
      type: 'masterplan',
      tone: 'sand',
      eyebrow: 'Masterplan',
      title: 'Bien plus qu’un quartier résidentiel.',
      textPosition: 'before',
      paragraphs: [
        'Creek Harbour a été pensé à l’échelle d’une destination complète : quartiers résidentiels, waterfront, espaces verts, retail, hospitality, nouveaux pôles urbains et infrastructures.',
        'Pour l’investisseur, cette échelle change la lecture du quartier.',
        'On n’achète pas seulement un appartement. On choisit sa position à l’intérieur d’une destination qui continue de se construire.',
      ],
      image: 'creek-masterplan',
      caption: 'Masterplan de référence. Certains éléments représentés correspondent à des visions ou projets dont la configuration finale peut évoluer.',
    },
    {
      type: 'features',
      items: [
        {
          id: 'dubai-square',
          eyebrow: 'Catalyseur',
          title: 'Dubai Square : le futur cœur de vie de Creek Harbour.',
          paragraphs: [
            'Retail, restaurants, loisirs, hospitality et espaces de rencontre : Dubai Square doit apporter à Creek Harbour une dimension qui lui manque encore aujourd’hui.',
            'Son développement peut contribuer à transformer une communauté principalement résidentielle en véritable destination.',
            'Pour l’investisseur, c’est un élément essentiel : plus une destination développe ses propres raisons d’être fréquentée, plus elle gagne en profondeur urbaine.',
          ],
          status: 'under-construction',
          image: 'creek-dubai-square',
          imageNote: 'Rendu conceptuel — programme et configuration finale susceptibles d’évoluer.',
          figures: [
            { value: '2,6 M', unit: 'm²', label: 'de surfaces retail, hospitality et commerciales annoncées par Emaar' },
          ],
        },
        {
          id: 'blue-line',
          eyebrow: 'Connectivité',
          title: 'Connecter Creek Harbour au reste de Dubai.',
          paragraphs: [
            'L’arrivée programmée de la Dubai Metro Blue Line représente une nouvelle étape dans le développement de Creek Harbour.',
            'La future station doit intégrer la communauté au réseau métropolitain de Dubai et renforcer sa connexion avec plusieurs pôles majeurs de la ville.',
            'Pour un quartier encore en phase de maturation, cette nouvelle accessibilité constitue l’un des catalyseurs les plus importants de son développement.',
          ],
          status: 'under-construction',
          image: 'creek-blue-line',
          imageNote: 'Rendu conceptuel — design et emplacement définitifs de la station susceptibles d’évoluer.',
          figures: [
            { value: '30', unit: 'km', label: 'de ligne' },
            { value: '14', label: 'stations' },
            { value: '2029', label: 'ouverture ciblée' },
          ],
        },
        {
          id: 'creek-tower',
          eyebrow: 'Ambition',
          title: 'Une ambition iconique au cœur du masterplan.',
          paragraphs: [
            'Creek Tower fait partie de l’ambition historique portée autour de Dubai Creek Harbour.',
            'Au-delà de son architecture ou de sa configuration finale, le projet illustre la volonté de donner à Creek Harbour un marqueur identifiable dans la skyline de Dubai.',
            'Pour BF Properties, l’intérêt n’est pas de spéculer sur une tour. Il est de comprendre l’ambition globale derrière la destination.',
          ],
          status: 'planned',
          image: 'creek-tower',
          imageNote: 'Rendu conceptuel — design final et calendrier susceptibles d’évoluer.',
        },
      ],
    },
    {
      type: 'thesis',
      tone: 'light',
      eyebrow: 'Le regard BF Properties',
      title: 'Et si le meilleur de Creek Harbour était encore devant lui ?',
      paragraphs: [
        'Downtown Dubai permet aujourd’hui d’observer ce qu’une destination mature peut devenir lorsqu’elle concentre résidences, retail, hospitality, infrastructures et attractivité internationale.',
        'Creek Harbour se trouve à une étape différente de son histoire.',
        'C’est précisément cette différence qui nous intéresse.',
      ],
      quote:
        'Investir dans une destination mature, c’est acheter ce qu’elle est déjà. Investir dans une destination en transformation, c’est aussi analyser ce qu’elle peut devenir.',
      final: 'Le potentiel est dans le quartier. La performance se joue à l’adresse.',
    },
  ],
  cta: {
    title: 'Creek Harbour correspond-il à votre stratégie ?',
    text: 'Nous comparons les opportunités disponibles pour identifier celles dont le prix, l’emplacement et l’horizon de détention correspondent réellement à votre projet.',
    label: 'Définir mon projet',
  },
  compare: ['downtown-dubai'],
  strategies: ['off-plan', 'capital-appreciation', 'payment-plans'],
};
