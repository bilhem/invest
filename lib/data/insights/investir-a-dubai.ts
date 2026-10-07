import type { Article } from '../articles';

/**
 * ARTICLE 01 — « Investir à Dubai en 2026 : le guide de l’investisseur »
 * FINAL COPY supplied by the editorial team (BF-Article-01-Investir-a-Dubai-2026-FINAL): the text below is the supplied text, word for word.
 * Nothing is summarised, shortened, reworded or added. Only presentation is decided here: heading levels, blocks, figures, links.
 * Headings supplied in capitals are set in sentence case; section numbers are drawn from `num`; the method's « titre — texte » lines are
 * set as a numbered method (the dash becomes the separation between the two parts).
 * Every internal link points to a route that exists.
 */

export const INVESTIR_A_DUBAI: Article = {
  slug: 'investir-a-dubai',
  category: 'Investment',
  title: 'Investir à Dubai en 2026 : le guide de l’investisseur',
  description:
    'Prix, rendement, off-plan, quartiers, risques et stratégie : notre méthode pour analyser un investissement immobilier à Dubai en 2026.',
  published: '2026-10-07',
  image: 'area-dubai-creek-harbour',

  body: [
    // ── Introduction ─────────────────────────────────────────────────────────────
    { type: 'h2', text: 'Investir à Dubai n’est plus une stratégie' },
    { type: 'statement', text: '« Je veux investir à Dubai. »' },
    { type: 'p', lead: true, text: 'C’est souvent le point de départ. Mais ce n’est pas encore une stratégie.' },
    {
      type: 'p',
      text: 'Dubai est aujourd’hui un marché suffisamment vaste pour que deux investisseurs puissent acheter le même mois, dans la même ville, avec le même budget, et obtenir quelques années plus tard des résultats très différents.',
    },
    {
      type: 'p',
      text: 'L’un peut acheter un appartement déjà livré pour générer immédiatement du revenu locatif. L’autre peut entrer sur un projet off-plan dans une destination encore en développement et accepter plusieurs années sans revenu pour rechercher davantage d’appréciation du capital. Un troisième peut acheter une villa familiale dans une communauté établie avec un horizon de détention de dix ans.',
    },
    { type: 'p', text: 'Et même lorsque deux investisseurs choisissent le même projet, leur résultat peut différer.' },
    {
      type: 'p',
      text: 'Parce que l’unité, l’étage, la vue, le layout, le prix d’entrée et le payment plan ne sont pas les mêmes. Et surtout, la stratégie n’est pas la même.',
    },
    { type: 'p', text: 'Chez BF Properties, la question « Faut-il investir à Dubai ? » est donc beaucoup trop générale.' },
    {
      type: 'statement',
      text: 'La question intéressante est : « Quel actif faut-il acheter à Dubai, à quel prix, avec quel capital et pour atteindre quel objectif ? »',
    },

    // ── Le marché ────────────────────────────────────────────────────────────────
    { type: 'h2', text: 'Le marché immobilier de Dubai en 2026' },
    {
      type: 'p',
      text: 'Au premier trimestre 2026, le Dubai Land Department a enregistré 60 303 transactions immobilières, en hausse de 6 % par rapport au premier trimestre 2025. Leur valeur totale a atteint 252 milliards AED, soit +31 % sur un an.',
    },
    {
      type: 'p',
      text: 'Le DLD comptabilise également 48 448 investisseurs sur le trimestre, dont 29 312 nouveaux investisseurs. Les investissements étrangers ont représenté 148,35 milliards AED.',
    },
    {
      type: 'figures',
      items: [
        { value: '60 303', label: 'transactions immobilières au premier trimestre 2026', note: '+ 6 % par rapport au premier trimestre 2025' },
        { value: '252', unit: 'milliards AED', label: 'valeur totale', note: '+ 31 % sur un an' },
        { value: '48 448', label: 'investisseurs sur le trimestre', note: 'dont 29 312 nouveaux investisseurs' },
        { value: '148,35', unit: 'milliards AED', label: 'investissements étrangers' },
      ],
      caption: 'Source : Dubai Land Department, premier trimestre 2026.',
    },
    {
      type: 'p',
      text: 'Sur l’ensemble de 2025, 1,38 million de contrats locatifs ont été enregistrés à Dubai pour 126,4 milliards AED. Le volume a progressé de 6 % et la valeur des contrats de 17 % sur un an.',
    },
    {
      type: 'p',
      text: 'Ces chiffres mesurent l’ampleur du marché. Ils ne constituent pas une recommandation d’investissement. Un marché peut progresser fortement tout en contenant des actifs excellents, correctement valorisés, trop chers ou dont la rentabilité future ne justifie pas le risque.',
    },
    { type: 'statement', text: 'La croissance du marché ne dispense jamais de sélectionner l’actif.' },

    // ── 1 ────────────────────────────────────────────────────────────────────────
    {
      type: 'h2',
      num: 1,
      text: 'Avant de chercher un appartement, définir ce que le capital doit accomplir',
      short: 'Définir ce que le capital doit accomplir',
    },
    { type: 'p', text: 'L’investisseur commence souvent par regarder des projets. Nous préférons commencer par l’investisseur.' },
    { type: 'p', text: 'Prenons deux personnes disposant chacune de 250 000 €.' },
    {
      type: 'p',
      text: 'L’investisseur A souhaite générer du revenu. Son horizon est long. Son objectif pourrait être d’acquérir un actif livré, dans une zone disposant d’une demande locative profonde, à un prix permettant un rendement cohérent après charges.',
    },
    {
      type: 'p',
      text: 'L’investisseur B gagne déjà très bien sa vie et n’a pas besoin de revenus immobiliers aujourd’hui. Il souhaite rechercher une appréciation sur cinq à sept ans. Une stratégie off-plan dans une destination encore en transformation pourrait davantage lui correspondre.',
    },
    { type: 'statement', text: 'Même capital. Deux investissements potentiellement totalement différents.' },
    {
      type: 'p',
      text: 'BF cherche donc à déterminer : capital disponible, capacité à effectuer de futurs paiements, horizon de détention, besoin de revenu, besoin de liquidité, tolérance au risque, objectif d’appréciation et exposition immobilière existante.',
    },
    { type: 'p', text: 'Ce travail élimine déjà énormément de projets. C’est précisément le but.' },

    // ── 2 ────────────────────────────────────────────────────────────────────────
    { type: 'h2', num: 2, text: 'Capital appreciation ou rental income ?' },
    {
      type: 'p',
      text: 'Pour du rental income, on examine le prix d’acquisition, le loyer réellement atteignable, les charges, la vacance, la gestion, la maintenance, la concurrence locative et la profondeur de la demande.',
    },
    {
      type: 'p',
      text: 'Un appartement à 1 500 000 AED loué 120 000 AED/an affiche 8 % brut. Avec 45 000 AED de coûts annuels cumulés entre charges, gestion, maintenance et vacance, le revenu devient 75 000 AED : 5 % avant d’autres coûts éventuels.',
    },
    {
      type: 'figures',
      items: [
        { value: '8 %', label: 'brut', note: '1 500 000 AED loué 120 000 AED/an' },
        { value: '75 000', unit: 'AED', label: 'revenu, après 45 000 AED de coûts annuels cumulés' },
        { value: '5 %', label: 'avant d’autres coûts éventuels' },
      ],
    },
    { type: 'p', text: 'Ce n’est pas nécessairement mauvais. Mais ce n’est plus le même investissement.' },
    {
      type: 'p',
      text: 'BF distingue donc systématiquement rendement brut et rendement net. Le DLD fournit d’ailleurs un [Service Charge Index](https://dubailand.gov.ae/en/eservices/service-charge-index-overview/service-charge-index) permettant de consulter les frais approuvés pour les propriétés en copropriété.',
    },
    {
      type: 'p',
      text: 'Pour la capital appreciation, le raisonnement change. L’investisseur accepte parfois un rendement inférieur, voire aucune location pendant la construction, parce qu’il recherche une augmentation de valeur.',
    },
    {
      type: 'p',
      text: 'Elle peut provenir du développement de la destination, d’une infrastructure, de la maturation du quartier, de la rareté, de la connectivité, de la demande ou simplement d’un excellent prix d’entrée.',
    },
    { type: 'statement', text: 'Règle fondamentale : un excellent quartier acheté trop cher peut rester un mauvais investissement.' },
    {
      type: 'p',
      text: 'Si le comparable se négocie à 2 000 AED/sqft et qu’un nouveau projet arrive à 2 800 AED/sqft, il faut expliquer pourquoi 40 % de prime est justifiée. Elle peut l’être, mais elle doit être démontrée.',
    },

    // ── 3 ────────────────────────────────────────────────────────────────────────
    { type: 'h2', num: 3, text: 'Le prix d’entrée' },
    { type: 'p', text: 'Deux investisseurs achètent la même typologie dans le même projet.' },
    { type: 'p', text: 'A paie 2 000 000 AED. B paie 2 300 000 AED. Quelques années plus tard, les deux appartements valent 2 700 000 AED.' },
    { type: 'p', text: 'A réalise +35 % brut. B réalise +17,4 %.' },
    {
      type: 'figures',
      items: [
        { value: '+ 35 %', label: 'A paie 2 000 000 AED' },
        { value: '+ 17,4 %', label: 'B paie 2 300 000 AED' },
      ],
      caption: 'Les deux appartements valent 2 700 000 AED.',
    },
    { type: 'statement', text: 'Même projet. Même marché. Même valeur finale. Performance relative très différente.' },
    {
      type: 'p',
      text: 'BF compare donc le prix du projet aux transactions environnantes, au ready comparable, aux autres lancements et à l’historique de la zone.',
    },
    { type: 'p', text: 'La question n’est pas seulement : « Est-ce un beau projet ? »' },
    { type: 'statement', text: 'C’est : « À ce prix, est-ce encore un bon investissement ? »' },

    // ── 4 ────────────────────────────────────────────────────────────────────────
    { type: 'h2', num: 4, text: 'Off-plan ou ready ?' },
    {
      type: 'p',
      text: 'L’off-plan permet potentiellement d’entrer tôt, d’utiliser un payment plan, de choisir davantage d’unités et de s’exposer à la maturation d’une destination. Mais il ajoute risque d’exécution, retard, absence de revenu pendant la construction, incertitude au handover et parfois une prime importante face au ready.',
    },
    {
      type: 'p',
      text: 'Avec le ready, l’actif existe. On peut observer bâtiment, vue réelle, qualité, communauté, transactions, loyers, charges et vacance. Certaines inconnues diminuent, mais une partie de l’appréciation de la destination peut déjà avoir eu lieu.',
    },
    {
      type: 'p',
      lead: true,
      text: 'Nous ne demandons donc pas « off-plan ou ready ? », mais « quelle combinaison risque / rendement / capital engagé correspond à l’investisseur ? »',
    },

    // ── 5 ────────────────────────────────────────────────────────────────────────
    { type: 'h2', num: 5, text: 'Le payment plan' },
    { type: 'p', text: 'Deux appartements coûtent 3 000 000 AED.' },
    { type: 'p', text: 'Avec un 80/20, l’investisseur verse 2 400 000 AED avant livraison. Avec un 50/50, il verse 1 500 000 AED.' },
    {
      type: 'p',
      text: 'Si les deux actifs valent 3 500 000 AED avant le handover, l’appréciation brute est identique : 500 000 AED. Mais le capital mobilisé ne l’est pas.',
    },
    { type: 'p', text: 'Un payment plan peut donc avoir une valeur stratégique.' },
    { type: 'p', text: 'Mais un excellent payment plan ne transforme jamais un prix excessif en bonne affaire.' },
    { type: 'statement', text: 'Payable ≠ correctement valorisé.' },

    // ── 6 ────────────────────────────────────────────────────────────────────────
    { type: 'h2', num: 6, text: 'Quel quartier choisir ?' },
    {
      type: 'p',
      text: '[Downtown Dubai](/quartiers/downtown-dubai) repose notamment sur centralité, notoriété internationale, tourisme, maturité et rareté de certaines micro-localisations. Dans une destination mature, sélectionner l’actif devient encore plus important.',
    },
    {
      type: 'p',
      text: '[Dubai Hills Estate](/quartiers/dubai-hills-estate) raconte davantage une histoire de qualité de vie et de communauté établie : parc, golf, retail, résidentiel, écoles. La question devient : quelle partie de Dubai Hills et quel actif peuvent encore justifier leur prix ?',
    },
    {
      type: 'p',
      text: '[Dubai Creek Harbour](/quartiers/dubai-creek-harbour) existe déjà mais son développement continue. L’investisseur peut rechercher une exposition à une transformation future dans une communauté déjà réelle.',
    },
    {
      type: 'p',
      text: '[City Walk](/quartiers/city-walk) possède une localisation difficile à reproduire entre plusieurs centralités majeures et la côte. On peut construire de nouveaux appartements ; on ne peut pas déplacer Downtown, DIFC, Jumeirah et la mer.',
    },
    {
      type: 'p',
      text: '[Palm Jebel Ali](/quartiers/palm-jebel-ali) correspond à une histoire plus longue : la création d’une nouvelle destination majeure. Cela implique davantage d’incertitude, un horizon différent et une analyse précise du masterplan.',
    },

    // ── 7 ────────────────────────────────────────────────────────────────────────
    { type: 'h2', num: 7, text: 'Les quartiers moins connus' },
    { type: 'p', text: '« Hidden gem », « next Dubai Hills » et « prochain Downtown » sont séduisants mais rarement suffisants.' },
    { type: 'p', text: 'Une zone moins connue n’est pas automatiquement sous-évaluée.' },
    {
      type: 'p',
      text: 'BF regarde prix actuel, transactions, supply, masterplan, emploi, infrastructure, accessibilité, développeurs entrants et écart avec les zones voisines.',
    },
    { type: 'p', text: 'C’est ce qui rend Jumeirah Garden City, Al Jaddaf ou Dubai Science Park intéressants à analyser.' },
    {
      type: 'p',
      text: 'En janvier 2025, le Dubai Land Department a annoncé que 329 parcelles d’Al Jaddaf pouvaient convertir leur statut en freehold ouvert à toutes les nationalités.',
    },
    { type: 'p', text: 'Cela ne signifie pas « Al Jaddaf va monter ».' },
    {
      type: 'p',
      text: 'Cela signifie : une variable structurelle du marché a changé. Il faut maintenant analyser son impact sur l’offre, la demande et les prix.',
    },

    // ── 8 ────────────────────────────────────────────────────────────────────────
    { type: 'h2', num: 8, text: 'Le développeur compte, mais il ne suffit pas' },
    {
      type: 'p',
      text: 'Emaar, Sobha, Meraas, Nakheel, DAMAC, Ellington ou Select Group possèdent chacun un historique, un positionnement, une stratégie et une image.',
    },
    {
      type: 'p',
      text: 'Mais acheter Emaar à Downtown, Dubai Hills, Creek Harbour ou The Oasis ne signifie pas acheter le même investissement.',
    },
    { type: 'p', text: 'Chez BF, l’ordre n’est jamais « bon développeur → acheter ».' },
    { type: 'statement', text: 'C’est : développeur → projet → unité → prix → stratégie.' },

    // ── 9 ────────────────────────────────────────────────────────────────────────
    { type: 'h2', num: 9, text: 'Le vrai travail commence après avoir choisi le projet', short: 'Après avoir choisi le projet' },
    { type: 'p', text: 'Un excellent projet peut encore contenir des unités très différentes.' },
    {
      type: 'p',
      text: 'Unité A : étage bas, vue parking. Unité B : étage moyen, vue intérieure. Unité C : étage élevé, vue skyline. Unité D : étage élevé, même vue que C mais 15 % plus chère.',
    },
    { type: 'p', text: 'La meilleure n’est pas automatiquement C ou D.' },
    {
      type: 'p',
      text: 'Si C coûte 3 % de plus que B pour une vue nettement supérieure, la prime peut être intéressante. Si elle coûte 30 % de plus, le raisonnement change.',
    },
    { type: 'statement', text: 'Le plus bel appartement peut être le moins bon investissement.' },
    { type: 'p', text: 'C’est pourquoi BF analyse étage + vue + orientation + layout + prix + payment plan.' },

    // ── 10 ───────────────────────────────────────────────────────────────────────
    { type: 'h2', num: 10, text: 'Penser à la revente avant d’acheter' },
    { type: 'statement', text: 'Une question BF revient constamment : « Qui achètera cet appartement après vous ? »' },
    {
      type: 'list',
      items: [
        'Pour un studio : jeune professionnel, investisseur de rendement, autre profil ?',
        'Pour un 2BR : couple, famille, expatrié, investisseur ?',
        'Pour une villa : résident long terme, famille internationale, HNW buyer ?',
      ],
    },
    { type: 'p', text: 'Puis : pourquoi cet acheteur choisirait-il votre unité plutôt que les vingt autres disponibles ?' },
    { type: 'p', text: 'Vue, layout, étage, prix, rareté et destination reprennent toute leur importance.' },
    { type: 'statement', text: 'La stratégie de sortie commence le jour de l’achat.' },

    // ── 11 ───────────────────────────────────────────────────────────────────────
    {
      type: 'h2',
      num: 11,
      text: 'Dubai construit beaucoup : faut-il craindre la supply ?',
      short: 'Faut-il craindre la supply ?',
    },
    { type: 'p', text: 'Dire « Dubai construit trop » est presque aussi simpliste que « tout va continuer à monter ».' },
    { type: 'p', text: 'Il faut segmenter.' },
    {
      type: 'p',
      text: 'Un studio dans une zone contenant des milliers de nouvelles petites unités n’a pas le même risque qu’une villa rare. Un 2BR waterfront n’est pas en concurrence avec chaque appartement de Dubai.',
    },
    { type: 'statement', text: 'La vraie question est : « Combien d’actifs réellement comparables au mien vont arriver sur le marché au même moment ? »' },
    { type: 'p', text: 'Il faut regarder zone, micro-zone, typologie, ticket, livraison, loyer, qualité et population cible.' },
    {
      type: 'p',
      text: 'Le marché locatif 2025 montre une demande considérable, avec 1,38 million de contrats enregistrés, mais cette profondeur globale ne garantit pas l’absorption de chaque sous-marché au prix souhaité.',
    },
    { type: 'statement', text: 'L’analyse de la supply doit être micro, pas seulement macro.' },

    // ── 12 ───────────────────────────────────────────────────────────────────────
    { type: 'h2', num: 12, text: 'La méthode BF Properties' },
    {
      type: 'method',
      steps: [
        { title: 'L’investisseur', text: 'Que doit accomplir son capital ?' },
        { title: 'La stratégie', text: 'Income, capital appreciation, diversification ou combinaison ?' },
        { title: 'Le marché', text: 'Que disent transactions, loyers, supply et demande ?' },
        { title: 'La destination', text: 'Pourquoi les gens veulent-ils vivre ou investir ici ?' },
        { title: 'La micro-localisation', text: 'Parcelle, accessibilité, vue, environnement futur.' },
        { title: 'Le développeur', text: 'Exécution, produit, historique.' },
        { title: 'Le projet', text: 'Comment se positionne-t-il face aux alternatives ?' },
        { title: 'L’unité', text: 'Étage, vue, orientation, layout, surface, rareté.' },
        { title: 'Le prix', text: 'Quelle prime payons-nous ?' },
        { title: 'Le capital', text: 'Quand devons-nous payer ?' },
        { title: 'La sortie', text: 'Qui sera le prochain acheteur ou locataire ?' },
      ],
    },

    // ── La propriété n'est pas le point de départ ────────────────────────────────
    { type: 'h2', text: 'La propriété n’est pas le point de départ' },
    { type: 'p', lead: true, text: 'Elle est presque le point d’arrivée.' },
    { type: 'p', text: 'BF Properties ne veut pas commencer par : « Voici nos projets disponibles. »' },
    { type: 'statement', text: 'Nous préférons : « Qu’attendez-vous de votre capital ? »' },
    {
      type: 'p',
      text: 'Une fois cette réponse obtenue, nous pouvons éliminer progressivement les mauvaises stratégies, destinations, projets, unités et prix jusqu’à arriver à un actif réellement cohérent avec l’investisseur.',
    },
  ],

  cta: {
    title: 'Commençons par votre stratégie.',
    text: 'Capital appreciation, revenu locatif, off-plan, diversification ou construction d’un portefeuille : avant de sélectionner une propriété, définissons ce que votre investissement doit accomplir.',
    label: 'Définir mon projet',
  },

  sources: [
    {
      label: 'Dubai Land Department — Q1 2026 real-estate market',
      url: 'https://dubailand.gov.ae/en/news-media/dubai-s-real-estate-transactions-surge-31-to-reach-aed-252-billion-in-q1-2026/',
    },
    {
      label: 'Dubai Land Department — Rental sector 2025',
      url: 'https://dubailand.gov.ae/en/news-media/dubai-s-rental-sector-records-strong-growth-in-2025-underscoring-market-stability-and-the-strength-of-the-emirate-s-real-estate-ecosystem',
    },
    {
      label: 'Dubai Land Department — Service Charge Index',
      url: 'https://dubailand.gov.ae/en/eservices/service-charge-index-overview/service-charge-index',
    },
    {
      label: 'Dubai Land Department — Al Jaddaf freehold conversion',
      url: 'https://dubailand.gov.ae/en/news-media/dubai-land-department-enables-private-property-owners-on-sheikh-zayed-road-and-al-jaddaf-to-convert-to-freehold-ownership',
    },
  ],

  disclaimer:
    'Les performances passées ne préjugent pas des performances futures. Les informations présentées sont générales et ne constituent pas une garantie de rendement, un conseil fiscal ou un conseil juridique personnalisé.',

  related: ['ou-investir-a-dubai'],
  // « Pour aller plus loin »: the five districts discussed are already linked in the text.
  links: [
    { label: 'Stratégies d’investissement', href: '/strategies' },
    { label: 'Developers', href: '/insights/developers' },
    { label: 'Investor Stories', href: '/investor-stories' },
    { label: 'Tous les quartiers', href: '/quartiers' },
  ],
};
