import type { Area, AreaDeep, SourceRef } from './area-types';

/**
 * DUBAI CREEK HARBOUR — reference area page.
 * Fact-checked on 2026-10-04 against primary sources (Emaar, Dubai Media Office, RTA, Dubai Holding).
 * Press sources are used only where no primary source exists and are labelled as such.
 * Rule: a date, a figure or a status appears here only if a listed source states it. Everything else is "à confirmer".
 * When a source changes, update `sources`, the affected item, and `lastReviewed`.
 */

const sources: SourceRef[] = [
  {
    id: 'emaar-community',
    publisher: 'Emaar',
    title: 'Dubai Creek Harbour (page communauté)',
    url: 'https://www.emaar.com/en/our-communities/dubai-creek-harbour',
    date: '2026-10-04',
    type: 'primary',
    note: 'Page consultée le 4 octobre 2026 : description du quartier, distances, équipements.',
  },
  {
    id: 'emaar-square',
    publisher: 'Emaar',
    title: 'Emaar unveils Dubai Square',
    url: 'https://www.emaar.com/en/press-release-listing/emaar-unveils-dubai-square',
    date: '2025-12-05',
    type: 'primary',
    note: 'Communiqué daté du 5 décembre 2025.',
  },
  {
    id: 'dh-square',
    publisher: 'Dubai Holding',
    title: 'Dubai Holding and Emaar champion a new era of retail with Dubai Square',
    url: 'https://www.dubaiholding.com/en/media-hub/press-releases/dubai-holding-emaar-champion-new-era-retail-dubai-square-tech-driven-retail-destination-dubai-creek-harbour',
    date: '2018-07-24',
    type: 'primary',
    note: 'Communiqué historique (2018) : utile pour l’historique du projet, pas pour son état actuel.',
  },
  {
    id: 'dmo-blue-line',
    publisher: 'Dubai Media Office',
    title: 'Mohammed bin Rashid inaugurates tunnelling works for the Dubai Metro Blue Line',
    url: 'https://mediaoffice.ae/en/news/2026/may/03-05/mohammed-bin-rashid-inaugurates-tunneling-works-for-the-dubai-metro-blue-line-tunnels',
    date: '2026-05-03',
    type: 'primary',
    note: 'Communication officielle du gouvernement de Dubaï.',
  },
  {
    id: 'rta-blue-line',
    publisher: 'RTA Dubai',
    title: 'Mohammed bin Rashid approves Dubai Metro Blue Line project',
    url: 'https://www.rta.ae/wps/portal/rta/ae/home/news-and-media/all-news/NewsDetails/mohammed-bin-rashid-approves-dubai-metro-blue-line-project',
    date: '2023-11-24',
    type: 'primary',
    note: 'Annonce du projet par la RTA (2023).',
  },
  {
    id: 'kt-creek-tower',
    publisher: 'Khaleej Times',
    title: 'Emaar to launch tender for Dubai Creek Tower in three months, says Alabbar',
    url: 'https://www.khaleejtimes.com/business/property/emaar-tender-dubai-creek-tower',
    date: '2026-01-14',
    type: 'press',
    note: 'Article de presse rapportant une déclaration publique du fondateur d’Emaar (14 janvier 2026).',
  },
  {
    id: 'ap-creek-tower',
    publisher: 'The Arabian Post',
    title: 'Creek Tower tender pushed back as costs shift',
    url: 'https://thearabianpost.com/creek-tower-tender-pushed-back-as-costs-shift/',
    date: '2026-06-23',
    type: 'press',
    note: 'Information de presse : aucun communiqué Emaar correspondant n’a été identifié lors de la vérification.',
  },
];

const deep: AreaDeep = {
  seo: {
    title: 'Dubai Creek Harbour : investir, infrastructures et analyse',
    description:
      'Analyse de Dubai Creek Harbour par BF Properties : master community waterfront d’Emaar, Dubai Square, future Blue Line, atouts, risques et profils d’investisseurs.',
  },
  heroSubtitle: 'Une master community waterfront développée par Emaar, entre Dubai Creek et la skyline de Downtown Dubai.',
  editorial: {
    heroLine: 'Une master community waterfront développée par Emaar, entre Dubai Creek et la skyline de Downtown Dubai.',
    intro: {
      eyebrow: 'Pourquoi Creek Harbour',
      title: 'Un quartier entre waterfront et nouvelle centralité',
      intro:
        'Dubai Creek Harbour se développe sur les rives de Dubai Creek, face à la skyline de Downtown Dubai. Portée principalement par Emaar, cette master community associe résidences, promenades, espaces publics et nouvelles infrastructures. Une partie de ce qui peut faire sa force est déjà visible ; une autre reste à construire.',
      items: [
        {
          title: 'Waterfront',
          text: 'Promenades, résidences et espaces publics structurent déjà une partie du quartier autour de Dubai Creek.',
          slot: 'creek-lifestyle',
        },
        {
          title: 'Downtown à l’horizon',
          text: 'La skyline de Downtown et Burj Khalifa constitue l’un des repères visuels majeurs de Creek Harbour.',
          slot: 'creek-downtown-view',
        },
      ],
      statement:
        'Le quartier existe déjà. Une part déterminante de ce qui peut en faire une destination majeure est encore devant lui.',
    },
    masterplan: {
      eyebrow: 'Masterplan',
      title: 'Comprendre Creek Harbour à l’échelle du quartier',
      intro:
        'Creek Harbour n’est pas quelques tours résidentielles : c’est une master community de multiples districts, de waterfront, d’espaces verts, de retail, d’hospitality et de futurs pôles d’attractivité, à des stades de développement très différents.',
      caption:
        'Masterplan de référence. Certains éléments représentés correspondent à des visions ou projets dont la configuration finale peut évoluer.',
      insight:
        'Pour l’investisseur, la lecture du masterplan est essentielle : deux biens situés dans la même communauté peuvent présenter des perspectives différentes selon leur micro-localisation.',
    },
    catalysts: {
      eyebrow: 'Les catalyseurs',
      title: 'Ce qui peut accélérer la maturation du quartier',
      intro:
        'Trois développements structurants peuvent modifier progressivement l’accessibilité, la fréquentation et la centralité de Creek Harbour.',
      items: [
        {
          id: 'dubai-square',
          headline: 'Dubai Square : le futur cœur de vie de Creek Harbour.',
          paragraphs: [
            'Retail, restaurants, loisirs, hospitality et espaces de rencontre : Dubai Square doit apporter à Creek Harbour une dimension qui lui manque encore aujourd’hui.',
            'Son développement peut contribuer à transformer une communauté principalement résidentielle en véritable destination.',
            'Pour l’investisseur, c’est un élément essentiel : plus une destination développe ses propres raisons d’être fréquentée, plus elle gagne en profondeur urbaine.',
          ],
          figures: [
            { value: '2,6 M', unit: 'm²', label: 'de surfaces retail, hospitality et commerciales annoncées' },
            { value: '≈ 3', unit: 'ans', label: 'avant la fin de chantier annoncée par Emaar' },
          ],
          imageNote: 'Rendu conceptuel — programme et configuration finale susceptibles d’évoluer.',
        },
        {
          id: 'blue-line',
          headline: 'Connecter Creek Harbour au reste de Dubai.',
          paragraphs: [
            'L’arrivée programmée de la Dubai Metro Blue Line représente une nouvelle étape dans le développement de Creek Harbour.',
            'La future station doit intégrer la communauté au réseau métropolitain de Dubai et renforcer sa connexion avec plusieurs pôles majeurs de la ville.',
            'Pour un quartier encore en phase de maturation, cette nouvelle accessibilité constitue l’un des catalyseurs les plus importants de son développement.',
          ],
          figures: [
            { value: '30', unit: 'km', label: 'de ligne' },
            { value: '14', label: 'stations' },
            { value: '2029', label: 'ouverture ciblée' },
          ],
          insight:
            'La présence d’une station ne valorise pas uniformément tous les biens. La distance réelle à la station et la qualité de la micro-localisation resteront déterminantes.',
          imageNote: 'Rendu conceptuel — design et emplacement définitifs de la station susceptibles d’évoluer.',
        },
        {
          id: 'creek-tower',
          headline: 'Une ambition iconique au cœur du masterplan.',
          paragraphs: [
            'Creek Tower fait partie de l’ambition historique portée autour de Dubai Creek Harbour.',
            'Au-delà de son architecture ou de sa configuration finale, le projet illustre la volonté de donner à Creek Harbour un marqueur identifiable dans la skyline de Dubai.',
            'Pour BF Properties, l’intérêt n’est pas de spéculer sur une tour. Il est de comprendre l’ambition globale derrière la destination.',
          ],
          imageNote: 'Rendu conceptuel — design final et calendrier susceptibles d’évoluer.',
        },
      ],
    },
    thesisBreak: {
      eyebrow: 'La thèse BF Properties',
      title: 'Creek Harbour n’est pas encore une centralité mature de Dubai. C’est précisément ce qui rend son histoire intéressante.',
      paragraphs: [
        'Downtown Dubai est aujourd’hui une destination établie à l’échelle internationale.',
        'Creek Harbour raconte une histoire différente : celle d’une master community Emaar dont une partie importante de l’écosystème reste encore à se construire.',
        'Dubai Square, la Blue Line, les nouveaux districts et les futurs pôles d’attractivité peuvent progressivement changer l’échelle de la destination.',
        'Pour l’investisseur, l’enjeu consiste à comprendre cette transformation avant qu’elle ne soit totalement visible.',
      ],
      statement: [
        'Investir dans une destination mature, c’est acheter ce qu’elle est déjà.',
        'Investir dans une destination en transformation, c’est aussi analyser ce qu’elle peut devenir.',
      ],
    },
    approach: {
      eyebrow: 'Le regard de BF Properties',
      title: 'Se positionner pendant la transformation ?',
      intro:
        'La communauté existe déjà ; son écosystème, lui, n’a pas atteint sa pleine maturité. La question pour l’investisseur : se positionner pendant cette phase peut-il présenter un meilleur potentiel que d’attendre que la destination soit établie, et à quelles conditions ?',
      interestTitle: 'Ce qui nous attire',
      interest: [
        'Une master community portée principalement par Emaar',
        'Un environnement waterfront déjà identifiable',
        'Une proximité visuelle et géographique avec Downtown',
        'Des catalyseurs capables de renforcer progressivement la centralité du quartier',
        'La possibilité d’entrer avant la pleine maturation de certaines zones',
      ],
      analysisTitle: 'Ce que nous analysons',
      analysis: [
        'La micro-localisation, au sein d’une communauté composée de plusieurs districts',
        'Le projet et le bâtiment',
        'La vue et l’environnement immédiat',
        'Le prix d’entrée et le payment plan : une bonne histoire de quartier ne justifie pas n’importe quel prix',
        'Le développeur',
        'L’horizon d’investissement',
      ],
      conviction:
        'À Creek Harbour, notre conviction ne porte pas sur l’achat de n’importe quel bien dans la communauté. Elle porte sur la sélection des actifs les mieux positionnés pour bénéficier de sa maturation.',
    },
    location: {
      eyebrow: 'Localisation',
      title: 'Creek Harbour dans Dubai',
      landmarks: [
        { label: 'Dubai Creek', text: 'Le quartier s’étend en bordure de Dubai Creek.' },
        { label: 'Ras Al Khor', text: 'Réserve naturelle voisine, à environ 5 minutes selon Emaar.' },
        { label: 'Downtown Dubai', text: 'À environ 15 minutes de Downtown et du Burj Khalifa selon Emaar, hors circulation.' },
      ],
    },
    cta: {
      title: 'Creek Harbour correspond-il à votre stratégie ?',
      text: 'Prix d’entrée, horizon de détention, rendement recherché et potentiel de valorisation : nous comparons les opportunités avant de sélectionner un projet.',
      label: 'Définir mon projet',
    },
  },
  lastReviewed: '2026-10-04',
  masterplanImage: 'creek-masterplan',
  masterplanCaption:
    'Extrait de plan directeur servant de référence à la structure du quartier. La configuration finale peut évoluer ; un masterplan officiel récent sera intégré ici.',
  gallery: [
    { slot: 'creek-lifestyle', caption: 'Promenade, terrasses et tours résidentielles en bord d’eau.' },
    { slot: 'creek-downtown-view', caption: 'Downtown Dubai et le Burj Khalifa, de l’autre côté du Creek.' },
  ],
  atAGlance: [
    'Développement principalement porté par Emaar, en collaboration avec Dubai Holding sur certains volets, dont Dubai Square.',
    'Master community waterfront en bordure du Creek.',
    'À proximité de la réserve de Ras Al Khor : environ 5 minutes selon Emaar.',
    'À environ 15 minutes de Downtown Dubai et du Burj Khalifa selon Emaar, hors conditions de circulation.',
    'Développement réalisé par phases : le niveau de maturité varie selon les zones.',
    'Un mélange de résidentiel, de retail, d’hospitality et d’espaces publics.',
    'Un environnement encore en maturation.',
  ],

  catalystsIntro:
    'Trois éléments structurent la lecture de l’avenir du quartier. Chacun reçoit un statut explicite, et ce qui est confirmé est séparé de ce qui reste à confirmer.',
  catalysts: [
    {
      id: 'dubai-square',
      title: 'Dubai Square',
      kicker: 'Pôle retail, loisirs, hospitality et commercial',
      status: 'under-construction',
      statusNote: 'Construction en cours selon Emaar (communiqué du 5 décembre 2025)',
      images: [
        { slot: 'creek-dubai-square', caption: 'Concept d’une rue commerçante couverte. Le programme final et la composition de Dubai Square restent à confirmer.' },
        { slot: 'creek-dubai-square-masterplan', caption: 'Rendu conceptuel du cœur du quartier. Il peut correspondre à une étape antérieure du projet et ne doit pas être lu comme la configuration finale.' },
      ],
      body: [
        'Emaar présente Dubai Square comme l’ancre du développement de Dubai Creek Harbour : une destination de retail et de loisirs associée à des surfaces d’hospitality et de commerce.',
        'Pour un investisseur, la question n’est pas la promesse commerciale du centre, mais ce qu’il pourrait changer pour le quartier : fréquentation, services, emplois et vie de quartier, à mesure qu’il ouvre.',
      ],
      facts: [
        { label: 'Surface totale retail, hospitality et commercial (annonce Emaar, déc. 2025)', value: '2,6 millions de m²' },
      ],
      confirmed: [
        'Dans son communiqué du 5 décembre 2025, Emaar indique que la construction est en cours.',
        'Emaar annonce une fin de construction dans environ trois ans à compter de cette date.',
      ],
      toConfirm: [
        'Date d’ouverture effective, y compris une éventuelle ouverture par phases.',
        'Composition finale : enseignes, loisirs, hôtels.',
        'Le calendrier est une estimation du promoteur, pas un engagement.',
      ],
      history: [
        'Dubai Square a été présenté dès 2018 par Dubai Holding et Emaar, puis re-présenté par Emaar en décembre 2025. Les anciens chiffres et visuels ne doivent pas être confondus avec le programme actuel.',
      ],
      sourceIds: ['emaar-square', 'dh-square'],
    },
    {
      id: 'blue-line',
      title: 'Dubai Metro Blue Line',
      kicker: 'Future connectivité par le métro',
      status: 'under-construction',
      statusNote: 'Travaux en cours : percement des tunnels lancé le 3 mai 2026',
      images: [
        { slot: 'creek-blue-line', caption: 'Illustration d’une rame de métro et d’une station. Le design et l’emplacement définitifs des stations de Creek Harbour restent à confirmer.' },
      ],
      body: [
        'La Dubai Metro Blue Line doit desservir plusieurs quartiers de Dubai et passe par Dubai Creek Harbour. La station de Creek Harbour est un élément important de la future connectivité du quartier.',
        'Un métro ne valorise pas un bien à lui seul. L’effet dépend de l’emplacement exact du bien par rapport à la station et de l’ouverture effective de la ligne.',
      ],
      facts: [
        { label: 'Longueur de la ligne', value: '30 km' },
        { label: 'Nombre de stations', value: '14' },
        { label: 'Objectif d’ouverture annoncé', value: '9 septembre 2029' },
        { label: 'Avancement indiqué le 3 mai 2026', value: '20 % (30 % attendu fin 2026)' },
      ],
      confirmed: [
        'Le gouvernement de Dubaï indique, le 3 mai 2026, que la ligne passe par Dubai Creek Harbour et que le percement des tunnels est lancé.',
        'La RTA et le gouvernement communiquent 2029 comme horizon d’ouverture ; la communication de mai 2026 retient le 9 septembre 2029.',
        'La RTA décrit dès 2023 une station Creek Harbour à l’architecture distinctive, conçue par Skidmore, Owings & Merrill.',
      ],
      toConfirm: [
        'Nombre de stations desservant Creek Harbour : les sources consultées ne le précisent pas.',
        'Distance exacte entre la station et chaque projet résidentiel.',
        'Maintien du calendrier d’ouverture : une date cible n’est pas une garantie.',
      ],
      sourceIds: ['dmo-blue-line', 'rta-blue-line'],
    },
    {
      id: 'creek-tower',
      title: 'Dubai Creek Tower',
      kicker: 'Le futur cœur emblématique du quartier',
      status: 'planned',
      statusNote: 'Projet redessiné : configuration finale, appel d’offres et calendrier à confirmer',
      images: [
        { slot: 'creek-tower', caption: 'La conception ayant été modifiée selon Emaar (janvier 2026), ce visuel ne représente pas nécessairement le projet actuel.' },
      ],
      body: [
        'La Creek Tower est un projet emblématique associé depuis plusieurs années à Dubai Creek Harbour. Son parcours montre pourquoi il faut distinguer le projet historique, les confirmations récentes et ce qui reste ouvert.',
        'BF Properties l’analyse comme un facteur potentiel pour le cœur du quartier, et non comme un élément acquis.',
      ],
      confirmed: [
        'Le 14 janvier 2026, le fondateur d’Emaar, Mohamed Alabbar, a déclaré publiquement que la conception avait été modifiée par rapport à celle déjà annoncée, et qu’un appel d’offres serait lancé dans un délai de trois mois.',
        'À cette occasion, aucune hauteur ni date de livraison n’ont été communiquées.',
      ],
      toConfirm: [
        'Configuration finale : design, hauteur, programme.',
        'Appel d’offres : en juin 2026, la presse rapporte un report de trois à quatre mois, lié aux coûts des matériaux. Cette information n’a pas été retrouvée dans un communiqué d’Emaar.',
        'Date de démarrage des travaux et de livraison.',
      ],
      history: [
        'Projet historique : dévoilé avant la pandémie de Covid-19 et présenté comme destiné à dépasser le Burj Khalifa, puis suspendu pour révision de sa conception.',
        'Les anciens visuels, hauteurs et calendriers ne décrivent donc pas nécessairement le projet actuel.',
      ],
      sourceIds: ['kt-creek-tower', 'ap-creek-tower'],
    },
  ],

  infrastructure: [
    {
      name: 'Dubai Creek Marina',
      status: 'existing',
      summary: 'Marina présentée par Emaar comme l’une des composantes du quartier.',
      sourceIds: ['emaar-community'],
    },
    {
      name: 'Promenades en bord d’eau',
      status: 'existing',
      summary: 'Promenades en bordure de Dubai Creek dédiées aux loisirs et à la restauration, selon Emaar.',
      sourceIds: ['emaar-community'],
    },
    {
      name: 'Hôtels et résidences de service',
      status: 'existing',
      summary: 'Emaar cite notamment Vida Creek Harbour, Address Harbour Point et Palace Residences.',
      toConfirm: 'Statut d’exploitation de chaque établissement à vérifier.',
      sourceIds: ['emaar-community'],
    },
    {
      name: 'Accès à la réserve de Ras Al Khor',
      status: 'existing',
      summary: 'Réserve naturelle voisine (lagunes, observation des oiseaux), à environ 5 minutes selon Emaar.',
      sourceIds: ['emaar-community'],
    },
    {
      name: 'Écoles et établissements de santé',
      status: 'existing',
      summary: 'Emaar mentionne la présence d’écoles et d’établissements de santé dans l’environnement du quartier.',
      toConfirm: 'Liste et localisation précises non détaillées par la source : à vérifier.',
      sourceIds: ['emaar-community'],
    },
    {
      name: 'Dubai Square',
      status: 'under-construction',
      summary: 'Pôle retail, loisirs, hospitality et commercial. Construction en cours selon Emaar.',
      toConfirm: 'Date d’ouverture et composition finale.',
      sourceIds: ['emaar-square'],
    },
    {
      name: 'Dubai Metro Blue Line',
      status: 'under-construction',
      summary: 'Ligne de 30 km passant par Creek Harbour. Percement des tunnels lancé le 3 mai 2026. Objectif d’ouverture annoncé : 9 septembre 2029.',
      toConfirm: 'Nombre de stations à Creek Harbour et avancement propre à ce secteur.',
      sourceIds: ['dmo-blue-line', 'rta-blue-line'],
    },
    {
      name: 'Dubai Creek Tower',
      status: 'planned',
      summary: 'Projet redessiné par Emaar. Un appel d’offres a été annoncé en janvier 2026.',
      toConfirm: 'Design, hauteur, appel d’offres et calendrier.',
      sourceIds: ['kt-creek-tower', 'ap-creek-tower'],
    },
    {
      name: 'Compléments de la master community',
      status: 'planned',
      summary: 'Emaar décrit un quartier complet : résidentiel, retail, hospitality et espaces publics, livré progressivement.',
      toConfirm: 'Calendrier phase par phase.',
      sourceIds: ['emaar-community'],
    },
  ],

  maturation: {
    title: 'Une master community en construction',
    intro:
      'Creek Harbour ne s’analyse pas uniquement à travers les immeubles actuellement disponibles. L’investissement doit aussi être étudié dans le contexte de la maturation progressive d’un quartier qui se complète, couche après couche.',
    layers: [
      { title: 'Logements', text: 'Immeubles livrés, en cours de livraison et à venir : l’offre évolue par phases.' },
      { title: 'Waterfront', text: 'Marina, promenades en bord d’eau et vues sur Dubai Creek : un atout déjà visible, mais pas encore partout.' },
      { title: 'Espaces publics', text: 'Leur qualité et leur livraison conditionnent la vie de quartier.' },
      { title: 'Retail', text: 'Commerces de proximité aujourd’hui, Dubai Square à terme.' },
      { title: 'Hospitality', text: 'Hôtels et résidences de service qui animent le quartier.' },
      { title: 'Transport', text: 'Accès routier aujourd’hui, Blue Line à l’horizon annoncé.' },
      { title: 'Loisirs', text: 'Nature voisine, promenades et équipements encore à venir.' },
      { title: 'Services', text: 'Écoles, santé, services du quotidien : à vérifier bâtiment par bâtiment.' },
    ],
    potential: [
      'Un quartier plus complet peut gagner en attractivité résidentielle et locative.',
      'De nouvelles infrastructures de transport peuvent améliorer l’accessibilité.',
      'Un pôle de commerces et de loisirs peut renforcer la vie de quartier.',
    ],
    implications: [
      'Risque calendrier : une infrastructure annoncée peut être retardée ou modifiée.',
      'Nouvelles livraisons : l’arrivée de logements supplémentaires augmente l’offre.',
      'Évolution de l’offre : les futurs programmes peuvent concurrencer les immeubles existants.',
      'Dépendance à l’exécution : la perception du quartier repose sur des projets que l’investisseur ne contrôle pas.',
      'Aucune promesse de valorisation : un quartier qui se complète ne garantit pas une hausse des prix.',
    ],
  },

  thesis: {
    title: 'Pourquoi Creek Harbour mérite d’être étudié',
    intro:
      'Plusieurs facteurs justifient d’examiner le quartier avec sérieux. Ce sont des raisons d’étudier, pas des garanties de résultat.',
    forArgs: [
      { title: 'Un waterfront', text: 'Marina, promenades et vues sur l’eau offrent une identité que peu de quartiers peuvent reproduire.', status: 'existing' },
      { title: 'Une master community portée par Emaar', text: 'Un plan directeur cohérent, conduit par un promoteur majeur, limite la dispersion visible dans d’autres zones.' },
      { title: 'La proximité de Downtown', text: 'Emaar indique environ 15 minutes de Downtown Dubai, hors circulation.' },
      { title: 'Des infrastructures qui se déploient', text: 'Le quartier se complète progressivement, ce qui peut modifier son profil dans le temps.' },
      { title: 'Dubai Square', text: 'Un futur pôle de retail et de loisirs peut devenir un point d’ancrage de la vie locale.', status: 'under-construction' },
      { title: 'La future Blue Line', text: 'Une desserte par le métro, si elle ouvre comme annoncé, améliorerait l’accessibilité.', status: 'under-construction' },
      { title: 'L’évolution du cœur du quartier', text: 'La redéfinition de la Creek Tower est un élément à suivre, sans qu’elle soit acquise.', status: 'planned' },
    ],
    againstTitle: 'Et immédiatement, ce qui doit tempérer l’enthousiasme',
    againstArgs: [
      { title: 'Un quartier encore en développement', text: 'L’environnement évolue pendant des années, avec des chantiers et des équipements à venir.' },
      { title: 'Une offre future importante', text: 'De nouvelles livraisons peuvent peser sur les prix et les loyers.' },
      { title: 'Un calendrier incertain', text: 'Dates d’ouverture et de livraison sont des estimations qui peuvent glisser.' },
      { title: 'De fortes différences entre bâtiments et phases', text: 'Deux immeubles voisins peuvent se comporter très différemment.' },
      { title: 'Une analyse indispensable avant d’acheter', text: 'Prix d’entrée, plan de paiement et emplacement exact doivent être comparés aux zones concurrentes.' },
    ],
    closing:
      'Ces éléments sont des facteurs susceptibles d’influencer la valeur, pas des certitudes. BF Properties ne dit pas que Creek Harbour prendra nécessairement de la valeur : tout dépend du projet, du prix d’entrée et du moment.',
  },

  investorFit: [
    {
      profile: 'Horizon de plusieurs années, à l’aise avec un quartier qui se construit',
      fit: 'may-suit',
      text: 'La maturation du quartier prend du temps. Un horizon long permet d’absorber les aléas de calendrier.',
    },
    {
      profile: 'Investisseur qui compare projets, phases et plans de paiement',
      fit: 'may-suit',
      text: 'La performance dépend fortement du bâtiment et de son emplacement : une analyse fine est utile.',
    },
    {
      profile: 'Investisseur sensible à l’adresse waterfront et à la proximité de Downtown',
      fit: 'may-suit',
      text: 'Le cadre est un élément central du quartier, à mettre en regard du prix d’entrée.',
    },
    {
      profile: 'Recherche de revenus locatifs immédiats et stables',
      fit: 'caution',
      text: 'La demande locative se construit au rythme des livraisons ; elle doit être vérifiée phase par phase.',
    },
    {
      profile: 'Besoin de liquidité à court terme',
      fit: 'caution',
      text: 'La revente dépend du marché et de l’offre disponible dans le quartier à ce moment-là.',
    },
  ],

  bfView: [
    'L’intérêt de Dubai Creek Harbour ne repose pas uniquement sur les résidences actuellement commercialisées. La thèse d’investissement s’appuie aussi sur la maturation progressive d’une master community portée par Emaar : développement résidentiel, espaces publics, retail, loisirs et nouvelles infrastructures de transport.',
    'L’enjeu pour l’investisseur n’est donc pas de choisir Creek Harbour en tant que tel, mais de sélectionner le bon projet, au bon emplacement, au bon prix d’entrée et au bon stade de développement de la zone.',
    'C’est précisément le travail d’une consultation : confronter cette lecture du quartier à votre capital, votre horizon et vos contraintes, avant de regarder le moindre bien.',
  ],

  sources,
};

export const CREEK_HARBOUR: Area = {
  slug: 'dubai-creek-harbour',
  name: 'Dubai Creek Harbour',
  img: 'creek-hero',
  tagline: 'Une master community waterfront en pleine maturation.',
  summary: 'Une master community waterfront développée par Emaar, entre le Creek, la réserve de Ras Al Khor et Downtown Dubai.',
  tags: ['Master community', 'Waterfront', 'Valorisation'],
  coords: { lat: 25.2, lng: 55.345 },
  overview:
    'Dubai Creek Harbour est une master community waterfront développée principalement par Emaar, en bordure du Creek. Elle combine résidentiel, retail, hospitality et espaces publics, et se construit par phases : l’environnement continue de mûrir.',
  masterplan:
    'Le plan directeur prévoit un quartier mixte livré progressivement. Le niveau de maturité diffère d’une zone à l’autre, et plusieurs éléments structurants (Dubai Square, Blue Line, Creek Tower) sont en construction ou encore à l’état de projet.',
  location:
    'En bordure du Creek, à proximité de la réserve de Ras Al Khor (environ 5 minutes selon Emaar) et à environ 15 minutes de Downtown Dubai et du Burj Khalifa selon Emaar, hors conditions de circulation.',
  connectivity:
    'Aujourd’hui, l’accès repose surtout sur le réseau routier. La Dubai Metro Blue Line, en construction, doit desservir le quartier, avec un objectif d’ouverture annoncé en 2029.',
  lifestyle:
    'Marina, promenades en bord d’eau, vues sur Dubai Creek et accès à la réserve naturelle voisine. L’offre de commerces et de loisirs est appelée à s’étoffer, notamment avec Dubai Square.',
  market:
    'Marché composé majoritairement de projets récents ou en cours de livraison, avec une part importante d’offre sur plan. Les écarts entre bâtiments, phases et emplacements sont importants.',
  profiles: ['Appartements de 1 à 3 chambres', 'Résidences waterfront'],
  rental:
    'Le marché locatif se construit au rythme des livraisons ; la profondeur de la demande doit être analysée phase par phase, sans extrapolation.',
  pipeline:
    'Plusieurs phases et projets restent à livrer. Le calendrier de chacun doit être confirmé auprès du promoteur au moment de l’étude.',
  developers: ['Emaar', 'Dubai Holding (collaboration sur certains volets, dont Dubai Square)'],
  strengths: [
    'Cadre waterfront',
    'Master community structurée',
    'Promoteur majeur : Emaar',
    'Proximité de Downtown',
    'Nouvelles infrastructures en cours',
    'Dubai Square, en construction',
    'Future connectivité par le métro',
    'Potentiel lié à la maturation du quartier',
  ],
  considerations: [
    'Offre future importante',
    'Calendrier des infrastructures incertain',
    'Quartier encore en développement',
    'Prix d’entrée à comparer avec les zones concurrentes',
    'Performance très dépendante du projet et de son emplacement dans la master community',
  ],
  bfView: deep.bfView[0],
  storySlug: 'franck',
  deep,
};
