import type { Article } from '../articles';

/**
 * « Rendement locatif à Dubai en 2026 : combien rapporte réellement un investissement ? » (document « ARTICLE 05 — RENDEMENT LOCATIF À DUBAI EN 2026 »)
 * FINAL COPY supplied by the editorial team (BF PROPERTIES — FINAL COPY / CLAUDE INTEGRATION): the text below is the supplied text, word for word.
 * Nothing is summarised, shortened, reworded or added. Only presentation is decided here: heading levels, blocks (figures, bar charts, comparison, steps),
 * charts built only from the figures written in the text, the closing call to action, links. A line cut after a colon whose continuation starts in
 * lower case is not present in this copy; headings and key sentences supplied in capitals are set in sentence case (proper names keep their capitals).
 * GROSS is always shown: every community yield of the two charts carries « brut » (unit « % brut »), as the copy and the instruction require.
 * No net yield per area is invented, no commercial project is added, no area average is turned into a promise of yield.
 * The supplied copy gives no category, date, cover or link targets: Investment / Market, the day of integration, no cover picture, /consultation for the
 * primary button and /a-propos (« Notre méthode ») for the secondary one are used. Every internal link points to a route that exists.
 */

export const RENDEMENT_LOCATIF_DUBAI_2026: Article = {
  slug: 'rendement-locatif-dubai-2026',
  category: 'Investment',
  alsoIn: ['Market'],
  title: 'Rendement locatif à Dubai en 2026 : combien rapporte réellement un investissement ?',
  seoTitle: 'Rendement locatif à Dubai en 2026 : combien rapporte réellement un investissement ?',
  description:
    'Quel rendement locatif peut réellement offrir Dubai en 2026 ? Rendement brut, charges, vacance, gestion, JVC, Business Bay, Marina, Downtown, Dubai Hills : BF Properties analyse les chiffres derrière le ROI.',
  published: '2026-10-07',

  body: [
    // ── Introduction (libellé « INTRODUCTION » de la copie : repère de structure, pas de titre affiché) ───
    { type: 'p', lead: true, text: '« Quel rendement peut-on obtenir à Dubai ? »' },
    { type: 'p', lead: true, text: 'C’est probablement l’une des premières questions posées par un investisseur.' },
    {
      type: 'figures',
      items: [
        { value: '6 % ?' },
        { value: '7 % ?' },
        { value: '8 % ?' },
        { value: 'Parfois davantage ?' },
      ],
    },
    { type: 'p', text: 'Ces chiffres peuvent être vrais.' },
    { type: 'p', text: 'Et pourtant être insuffisants pour prendre une décision.' },
    { type: 'p', text: 'Parce qu’un rendement locatif annoncé ne dit pas :' },
    {
      type: 'list',
      items: [
        'combien le propriétaire a réellement payé son appartement ;',
        'combien il paie de service charges ;',
        'combien lui coûte la gestion ;',
        'si le logement reste vacant entre deux locataires ;',
        'si le bien a dû être meublé ;',
        'si le loyer utilisé dans le calcul est réellement signé ou simplement affiché sur un portail ;',
        'ni ce que l’actif pourrait valoir au moment de la revente.',
      ],
    },
    { type: 'p', text: 'En immobilier, le rendement le plus facile à afficher est le rendement brut.' },
    { type: 'p', text: 'Le rendement le plus utile est celui que l’investisseur peut réellement conserver.' },
    {
      type: 'p',
      text: 'Et la performance la plus importante peut encore être ailleurs : dans la combinaison entre revenu locatif, appréciation du capital et liquidité.',
    },
    {
      type: 'p',
      text: 'Chez BF Properties, nous ne cherchons donc pas le quartier qui affiche le pourcentage le plus élevé.',
    },
    { type: 'p', text: 'Nous cherchons à comprendre ce qui produit ce pourcentage.' },
    {
      type: 'statement',
      text: 'Un rendement annoncé est un chiffre commercial.\nUn rendement calculé est une décision d’investissement.',
    },

    // ── Le marché locatif de Dubai reste profond ──────────────────────────────
    {
      type: 'h2',
      text: 'Commençons par les données : le marché locatif de Dubai reste profond',
      short: 'Le marché locatif de Dubai reste profond',
    },
    {
      type: 'p',
      text: 'Le Dubai Land Department a enregistré 1,38 million de contrats locatifs en 2025, pour une valeur totale de 126,4 milliards AED.',
    },
    { type: 'p', text: 'Le nombre de contrats a progressé de 6 % sur un an et leur valeur de 17 %.' },
    {
      type: 'p',
      text: 'Plus de 513 000 nouveaux contrats ont été enregistrés, en hausse de 10 %, tandis que plus de 514 000 contrats ont été renouvelés.',
    },
    {
      type: 'p',
      text: 'Au premier trimestre 2026, le DLD a ensuite enregistré 118 385 nouveaux contrats et 135 607 renouvellements, pour une valeur totale de 32,2 milliards AED.',
    },
    {
      type: 'figures',
      items: [
        { value: '1,38', unit: 'million', label: 'contrats locatifs en 2025', note: 'pour une valeur totale de 126,4 milliards AED' },
        { prefix: 'Plus de', value: '513 000', label: 'nouveaux contrats', note: 'en hausse de 10 %' },
        { value: '118 385', label: 'nouveaux contrats', note: 'premier trimestre 2026' },
        { value: '135 607', label: 'renouvellements', note: 'premier trimestre 2026' },
      ],
      caption: 'Source : Dubai Land Department, 2025 et premier trimestre 2026.',
    },
    { type: 'p', text: 'Ces chiffres ne disent pas qu’un appartement donné sera facile à louer.' },
    { type: 'p', text: 'Ils montrent autre chose : la profondeur du marché locatif de Dubai.' },
    { type: 'p', text: 'Pour l’investisseur, la question devient ensuite beaucoup plus locale.' },
    {
      type: 'list',
      items: [
        'Dans quelle zone se situe cette demande ?',
        'Pour quelle typologie ?',
        'À quel prix ?',
        'Et avec quelle profondeur de marché ?',
      ],
    },

    // ── Le rendement brut ─────────────────────────────────────────────────────
    { type: 'h2', text: 'Le rendement brut : utile, mais incomplet' },
    { type: 'p', text: 'La formule est simple :' },
    { type: 'statement', text: 'Rendement brut = loyer annuel / prix d’achat × 100' },
    { type: 'p', text: 'Exemple.' },
    {
      type: 'figures',
      items: [
        { value: '1 000 000', unit: 'AED', label: 'Prix d’achat' },
        { value: '80 000', unit: 'AED', label: 'Loyer annuel' },
        { value: '8', unit: '%', label: 'Rendement brut' },
      ],
    },
    { type: 'p', text: 'C’est clair.' },
    { type: 'p', text: 'Mais ce n’est pas le revenu réellement conservé par le propriétaire.' },
    { type: 'p', text: 'Supposons maintenant, à titre purement illustratif, que cet actif supporte :' },
    {
      type: 'list',
      items: [
        '15 000 AED de service charges ;',
        '4 000 AED de gestion ;',
        '3 000 AED de maintenance moyenne ;',
        '4 000 AED correspondant à une hypothèse de vacance ou de friction locative.',
      ],
    },
    {
      type: 'p',
      text: 'Le revenu restant avant financement, fiscalité éventuelle et autres coûts passe alors de 80 000 AED à 54 000 AED.',
    },
    { type: 'p', text: 'Dans cet exemple :' },
    { type: 'statement', text: '8 % brut devient 5,4 % sur le prix d’achat.' },
    { type: 'p', text: 'Ce n’est pas une estimation du marché de Dubai.' },
    { type: 'p', text: 'C’est une démonstration.' },
    { type: 'p', text: 'Deux actifs affichant exactement 8 % brut peuvent laisser des revenus nets très différents.' },

    // ── Les service charges ───────────────────────────────────────────────────
    {
      type: 'h2',
      text: 'Les service charges peuvent changer le classement d’un investissement',
      short: 'Les service charges',
    },
    { type: 'p', text: 'C’est l’un des postes les plus souvent sous-estimés.' },
    {
      type: 'p',
      text: 'À Dubai, les propriétaires de biens situés dans des jointly-owned properties paient des charges destinées notamment à couvrir la gestion, l’exploitation, la maintenance et la réparation des parties communes.',
    },
    {
      type: 'p',
      text: 'Le Dubai Land Department met à disposition un Service Charge Index permettant de consulter les frais approuvés par la Real Estate Regulatory Agency pour les projets concernés.',
    },
    { type: 'p', text: 'Ces charges peuvent notamment intégrer :' },
    {
      type: 'list',
      items: [
        'sécurité ;',
        'nettoyage ;',
        'maintenance ;',
        'consommations des parties communes ;',
        'administration ;',
        'assurance ;',
        'master community charges ;',
        'contributions aux réserves.',
      ],
    },
    { type: 'p', text: 'Cela signifie qu’un rendement ne devrait jamais être étudié uniquement au niveau du quartier.' },
    { type: 'p', text: 'Il faut descendre jusqu’au bâtiment.' },
    {
      type: 'p',
      text: 'Deux appartements de valeur comparable, loués au même prix dans la même zone, peuvent produire des rendements nets différents simplement parce que leurs coûts d’exploitation ne sont pas identiques.',
    },
    { type: 'statement', text: 'Le rendement appartient à l’unité.\nPas à la brochure du quartier.' },

    // ── Les rendements bruts par zone ─────────────────────────────────────────
    { type: 'h2', text: 'Que donnent les rendements bruts par zone en 2026 ?', short: 'Les rendements bruts par zone' },
    { type: 'p', text: 'Les données de marché disponibles en août 2026 donnent un ordre de grandeur intéressant.' },
    {
      type: 'p',
      text: 'Selon des données Property Monitor reprises par Engel & Völkers, les rendements locatifs bruts moyens des appartements étaient notamment estimés à :',
    },
    {
      type: 'ranking',
      numbered: false,
      caption: 'Rendements locatifs bruts moyens des appartements, août 2026 (Property Monitor, repris par Engel & Völkers)',
      items: [
        { name: 'International City', value: '8,93', unit: '% brut' },
        { name: 'Dubai Sports City', value: '7,76', unit: '% brut' },
        { name: 'Dubai South', value: '7,21', unit: '% brut' },
        { name: 'Al Furjan', value: '7,08', unit: '% brut' },
        { name: 'Arjan', value: '6,95', unit: '% brut' },
        { name: 'Dubai Silicon Oasis', value: '6,69', unit: '% brut' },
        { name: 'JLT', value: '6,58', unit: '% brut' },
        { name: 'JVC', value: '6,36', unit: '% brut' },
        { name: 'Business Bay', value: '5,92', unit: '% brut' },
        { name: 'Dubai Hills Estate', value: '5,82', unit: '% brut' },
        { name: 'Dubai Marina', value: '5,51', unit: '% brut' },
        { name: 'Dubai Creek Harbour', value: '5,12', unit: '% brut' },
        { name: 'Downtown Dubai', value: '5,10', unit: '% brut' },
        { name: 'Palm Jumeirah', value: '4,58', unit: '% brut' },
      ],
    },
    { type: 'p', text: 'Ces chiffres sont des moyennes de marché brutes.' },
    { type: 'p', text: 'Ils ne constituent ni une prévision ni le rendement attendu d’une unité particulière.' },
    { type: 'p', text: 'Mais ils révèlent une mécanique fondamentale.' },
    {
      type: 'p',
      text: 'Les zones les plus chères ne sont pas nécessairement celles qui affichent le rendement locatif brut le plus élevé.',
    },
    { type: 'p', text: 'Et ce n’est pas anormal.' },

    // ── International City et Downtown ────────────────────────────────────────
    {
      type: 'h2',
      text: 'Pourquoi International City peut afficher plus de rendement que Downtown',
      short: 'International City et Downtown',
    },
    { type: 'p', text: 'Prenons les deux extrêmes du tableau.' },
    {
      type: 'figures',
      items: [
        { prefix: 'environ', value: '8,93', unit: '% brut', label: 'International City' },
        { prefix: 'environ', value: '5,10', unit: '% brut', label: 'Downtown Dubai' },
      ],
    },
    { type: 'p', text: 'Faut-il en conclure qu’International City est systématiquement un meilleur investissement ?' },
    { type: 'p', text: 'Non.' },
    { type: 'p', text: 'Le rendement est une relation entre deux nombres :' },
    {
      type: 'list',
      items: [
        'le revenu ;',
        'et le prix payé pour obtenir ce revenu.',
      ],
    },
    {
      type: 'p',
      text: 'Un actif accessible peut générer un loyer relativement élevé par rapport à son prix d’acquisition et produire ainsi un fort rendement brut.',
    },
    { type: 'p', text: 'À l’inverse, un actif prime peut intégrer dans son prix :' },
    {
      type: 'list',
      items: [
        'une localisation rare ;',
        'une image internationale ;',
        'une profondeur d’acheteurs fortunés ;',
        'une qualité de vie particulière ;',
        'une rareté foncière ;',
        'une valeur patrimoniale.',
      ],
    },
    { type: 'p', text: 'Une partie de la valeur du bien n’est donc pas rémunérée uniquement par son loyer.' },
    {
      type: 'p',
      text: 'C’est pourquoi comparer deux investissements uniquement par leur rendement brut revient à comparer deux entreprises uniquement par leur dividende.',
    },
    {
      type: 'statement',
      text: 'Le prestige peut réduire le yield.\nL’accessibilité peut l’augmenter.\nNi l’un ni l’autre ne suffit à déterminer la performance.',
    },

    // ── Les loyers réels ──────────────────────────────────────────────────────
    {
      type: 'h2',
      text: 'Les loyers réels rappellent aussi que Dubai n’est pas un marché unique',
      short: 'Les loyers réels',
    },
    {
      type: 'p',
      text: 'Les données Knight Frank / REIDIN pour le quatrième trimestre 2025 donnent un autre angle : le loyer annuel moyen des appartements une chambre dans plusieurs communautés très actives.',
    },
    {
      type: 'ranking',
      numbered: false,
      caption: 'Loyer annuel moyen des appartements une chambre, quatrième trimestre 2025 (Knight Frank / REIDIN)',
      items: [
        { name: 'Downtown Dubai', value: '133 000', unit: 'AED par an' },
        { name: 'Dubai Marina', value: '108 000', unit: 'AED' },
        { name: 'Business Bay', value: '105 000', unit: 'AED' },
        { name: 'JVC', value: '78 000', unit: 'AED' },
        { name: 'Dubai Silicon Oasis', value: '60 000', unit: 'AED' },
        { name: 'International City', value: '47 000', unit: 'AED' },
      ],
    },
    {
      type: 'p',
      text: 'Les loyers peuvent donc être beaucoup plus élevés dans les localisations prime tout en produisant un rendement inférieur.',
    },
    { type: 'p', text: 'Pourquoi ?' },
    { type: 'p', text: 'Parce que le capital nécessaire pour acheter l’actif est également beaucoup plus élevé.' },
    { type: 'p', text: 'Cette distinction est fondamentale pour l’investisseur.' },
    { type: 'statement', text: 'Un loyer élevé n’est pas un rendement élevé.' },

    // ── Quatre histoires d’investissement différentes ─────────────────────────
    {
      type: 'h2',
      text: 'JVC, Business Bay, Marina, Downtown : quatre histoires d’investissement différentes',
      short: 'Quatre histoires d’investissement différentes',
    },
    { type: 'h3', text: 'JVC : rendement et profondeur du marché locatif' },
    {
      type: 'p',
      text: 'Avec un rendement brut moyen indicatif de 6,36 % dans la série Property Monitor d’août 2026, JVC reste une zone intéressante pour étudier la relation entre prix d’entrée et demande locative.',
    },
    {
      type: 'p',
      text: 'Mais JVC possède également une supply importante et des différences considérables entre bâtiments.',
    },
    { type: 'p', text: 'L’analyse doit donc porter sur :' },
    {
      type: 'list',
      items: [
        'le promoteur ;',
        'l’âge du bâtiment ;',
        'les charges ;',
        'le plan de l’unité ;',
        'la qualité réelle du produit ;',
        'l’environnement immédiat ;',
        'et la future concurrence locative.',
      ],
    },
    { type: 'p', text: 'Acheter « JVC » n’est pas une stratégie.' },
    { type: 'p', text: 'Acheter une unité capable de gagner contre les autres unités de JVC peut en être une.' },
    { type: 'h3', text: 'Business Bay : rendement urbain et centralité' },
    { type: 'p', text: 'Business Bay affichait environ 5,92 % de rendement brut moyen dans la même série.' },
    {
      type: 'p',
      text: 'Knight Frank observait par ailleurs un loyer annuel moyen de 105 000 AED pour un appartement une chambre au quatrième trimestre 2025, en hausse de 10 % sur un an.',
    },
    { type: 'p', text: 'Mais Business Bay est extrêmement hétérogène.' },
    {
      type: 'p',
      text: 'Un bâtiment vieillissant éloigné des principaux flux et un produit premium bénéficiant d’une bonne vue, d’un bon accès et d’un meilleur niveau de services ne répondent pas à la même demande.',
    },
    { type: 'p', text: 'Le nom du quartier ne suffit pas.' },
    { type: 'h3', text: 'Dubai Marina : rendement intermédiaire, profondeur et maturité' },
    { type: 'p', text: 'Dubai Marina affichait environ 5,51 % brut dans les données d’août 2026.' },
    {
      type: 'p',
      text: 'Le loyer annuel moyen d’un 1BR atteignait 108 000 AED au quatrième trimestre 2025 selon Knight Frank / REIDIN.',
    },
    {
      type: 'p',
      text: 'Marina présente un autre profil : communauté mature, importante base résidentielle, visibilité internationale et marché secondaire profond.',
    },
    { type: 'p', text: 'Le rendement brut n’est donc qu’une partie de son histoire.' },
    {
      type: 'p',
      text: 'Il faut aussi étudier l’âge du bâtiment, ses charges, sa qualité, la vue, l’accès et la concurrence entre les nombreuses tours.',
    },
    { type: 'h3', text: 'Downtown Dubai : faible yield relatif, capital plus cher' },
    { type: 'p', text: 'Downtown affichait environ 5,10 % brut dans la série d’août 2026.' },
    { type: 'p', text: 'Mais le loyer moyen d’un 1BR figurait à 133 000 AED au quatrième trimestre 2025.' },
    {
      type: 'p',
      text: 'L’investisseur paie davantage pour accéder à une localisation centrale et internationalement reconnue.',
    },
    { type: 'p', text: 'Le sujet devient donc moins :' },
    { type: 'quote', text: '« Comment obtenir le yield maximum ? »' },
    { type: 'p', text: 'Et davantage :' },
    {
      type: 'quote',
      text: '« Quel rendement suis-je prêt à accepter en échange de cette localisation, de cette liquidité potentielle et de cette exposition patrimoniale ? »',
    },

    // ── Dubai Hills et Creek Harbour ──────────────────────────────────────────
    {
      type: 'h2',
      text: 'Dubai Hills et Creek Harbour : quand le rendement ne raconte pas encore toute l’histoire',
      short: 'Dubai Hills et Creek Harbour',
    },
    { type: 'p', text: 'Dubai Hills Estate affichait environ 5,82 % brut dans la série d’août 2026.' },
    { type: 'p', text: 'Dubai Creek Harbour environ 5,12 %.' },
    {
      type: 'p',
      text: 'Pris isolément, ces chiffres peuvent sembler moins attractifs que JVC, Arjan ou Dubai Silicon Oasis.',
    },
    { type: 'p', text: 'Mais ces communautés peuvent être achetées pour une thèse différente.' },
    { type: 'p', text: 'Dans une master community, une partie de l’investissement peut reposer sur :' },
    {
      type: 'list',
      items: [
        'la maturation de la destination ;',
        'les infrastructures ;',
        'l’arrivée de commerces et services ;',
        'la création d’une communauté résidentielle ;',
        'la rareté de certaines unités ;',
        'l’évolution future du marché secondaire.',
      ],
    },
    { type: 'p', text: 'Cela ne garantit aucune appréciation.' },
    {
      type: 'p',
      text: 'Cela signifie simplement que le rendement locatif courant n’est pas nécessairement l’unique moteur recherché.',
    },

    // ── Brut, net et total return ─────────────────────────────────────────────
    {
      type: 'h2',
      text: 'Brut, net et total return : les trois niveaux à ne pas confondre',
      short: 'Brut, net et total return',
    },
    { type: 'h3', text: '1. Gross rental yield' },
    { type: 'p', text: 'Loyer annuel / prix d’achat.' },
    { type: 'p', text: 'C’est le chiffre le plus simple.' },
    { type: 'h3', text: '2. Net rental yield' },
    { type: 'p', text: 'Il faut retrancher les coûts réellement supportés par le propriétaire.' },
    { type: 'p', text: 'La formule peut être présentée ainsi :' },
    { type: 'statement', text: '(Loyer annuel – coûts d’exploitation) / capital investi' },
    { type: 'p', text: 'Mais même cette formule doit être définie précisément.' },
    {
      type: 'list',
      items: [
        'Inclut-on les coûts d’acquisition ?',
        'L’ameublement ?',
        'Les intérêts d’un financement ?',
        'La vacance ?',
        'La maintenance ?',
      ],
    },
    { type: 'p', text: 'Le résultat change selon la convention utilisée.' },
    { type: 'p', text: 'BF préfère donc afficher les hypothèses plutôt qu’un pourcentage artificiellement précis.' },
    { type: 'h3', text: '3. Total return' },
    { type: 'p', text: 'C’est la lecture la plus complète de la performance économique de l’actif.' },
    { type: 'p', text: 'Elle combine notamment :' },
    {
      type: 'list',
      items: [
        'revenus locatifs nets ;',
        'variation de valeur de l’actif ;',
        'coûts de détention ;',
        'coûts d’achat et de vente ;',
        'et, lorsqu’il existe, impact du financement.',
      ],
    },
    {
      type: 'p',
      text: 'Un actif offrant 8 % brut mais aucune appréciation n’est pas nécessairement supérieur à un actif offrant 6 % brut et une forte création de valeur.',
    },
    {
      type: 'p',
      text: 'Inversement, une promesse d’appréciation future ne justifie jamais de sacrifier toute discipline sur le revenu et le prix d’entrée.',
    },
    { type: 'p', text: 'L’investisseur doit savoir quel moteur de performance il achète.' },

    // ── 8 % brut contre 6 % brut ──────────────────────────────────────────────
    { type: 'h2', text: 'Exemple : 8 % brut contre 6 % brut' },
    { type: 'p', text: 'Prenons deux actifs fictifs de 1 000 000 AED.' },
    {
      type: 'compare',
      columns: [
        { title: 'Actif A', points: ['Loyer annuel : 80 000 AED.', 'Rendement brut : 8 %.'] },
        { title: 'Actif B', points: ['Loyer annuel : 60 000 AED.', 'Rendement brut : 6 %.'] },
      ],
    },
    { type: 'p', text: 'À première vue, A gagne.' },
    { type: 'p', text: 'Mais imaginons maintenant, uniquement pour comprendre la méthode, qu’après plusieurs années :' },
    {
      type: 'list',
      items: [
        'A ait produit davantage de cash-flow mais que sa valeur soit restée stable ;',
        'B ait produit moins de cash-flow mais que sa valeur de marché ait progressé significativement.',
      ],
    },
    { type: 'p', text: 'Le classement peut alors s’inverser.' },
    { type: 'p', text: 'Il peut également ne pas s’inverser.' },
    { type: 'p', text: 'Tout dépend des chiffres.' },
    { type: 'p', text: 'C’est précisément le point.' },
    {
      type: 'statement',
      text: 'On ne choisit pas entre 8 % et 6 %.\nOn choisit entre deux profils complets de performance.',
    },

    // ── Prix d’achat et valeur actuelle ───────────────────────────────────────
    {
      type: 'h2',
      text: 'Le rendement sur le prix d’achat et le rendement sur la valeur actuelle ne racontent pas la même chose',
    },
    { type: 'p', text: 'Supposons qu’un investisseur achète un appartement 1 000 000 AED.' },
    { type: 'p', text: 'Quelques années plus tard :' },
    {
      type: 'list',
      items: [
        'loyer annuel : 90 000 AED ;',
        'valeur de marché : 1 500 000 AED.',
      ],
    },
    { type: 'p', text: 'Son rendement brut sur coût d’acquisition est de :' },
    { type: 'statement', text: '90 000 / 1 000 000 = 9 %.' },
    { type: 'p', text: 'Mais son rendement brut sur valeur actuelle est de :' },
    { type: 'statement', text: '90 000 / 1 500 000 = 6 %.' },
    { type: 'p', text: 'Les deux chiffres sont corrects.' },
    { type: 'p', text: 'Ils répondent simplement à deux questions différentes.' },
    { type: 'p', text: 'Le premier mesure la performance locative du capital historiquement engagé.' },
    { type: 'p', text: 'Le second permet notamment de se demander :' },
    {
      type: 'quote',
      text: '« Si j’avais aujourd’hui 1,5 million AED en cash, rachèterais-je cet actif pour obtenir 90 000 AED de loyer ? »',
    },
    {
      type: 'p',
      text: 'Cette question est particulièrement importante pour décider s’il faut conserver ou arbitrer un bien ayant fortement pris de la valeur.',
    },

    // ── La vacance ────────────────────────────────────────────────────────────
    { type: 'h2', text: 'La vacance : le rendement théorique n’est pas le rendement encaissé', short: 'La vacance' },
    { type: 'p', text: 'Un appartement loué 100 000 AED pendant douze mois produit 100 000 AED de revenu brut.' },
    {
      type: 'p',
      text: 'Le même appartement vacant pendant un mois entre deux locataires ne produit plus l’équivalent de 100 000 AED sur l’année.',
    },
    { type: 'p', text: 'La qualité de la demande est donc aussi importante que le niveau du loyer.' },
    { type: 'p', text: 'C’est là que les données de contrats locatifs deviennent intéressantes.' },
    {
      type: 'p',
      text: 'Elles permettent d’étudier non seulement combien les gens paient, mais aussi où les contrats sont effectivement enregistrés.',
    },
    {
      type: 'p',
      text: 'Un marché profond peut parfois justifier un rendement facial légèrement inférieur s’il réduit certaines frictions d’exploitation.',
    },
    { type: 'p', text: 'Mais là encore, il faut le mesurer au niveau de l’actif.' },

    // ── Location longue durée ou courte durée ? ───────────────────────────────
    { type: 'h2', text: 'Location longue durée ou courte durée ?' },
    {
      type: 'p',
      text: 'Une rentabilité de location courte durée ne doit jamais être comparée directement à un loyer annuel longue durée.',
    },
    { type: 'p', text: 'Le chiffre d’affaires brut d’une activité short-term peut être supérieur.' },
    { type: 'p', text: 'Mais le propriétaire doit ensuite intégrer davantage de variables :' },
    {
      type: 'list',
      items: [
        'taux d’occupation ;',
        'saisonnalité ;',
        'management ;',
        'ménage ;',
        'utilities ;',
        'ameublement ;',
        'maintenance ;',
        'plateformes ;',
        'rotation des occupants.',
      ],
    },
    { type: 'p', text: 'Le bon indicateur n’est donc pas :' },
    { type: 'quote', text: '« Combien Airbnb peut générer ? »' },
    { type: 'p', text: 'Mais :' },
    {
      type: 'quote',
      text: '« Quel revenu net et quelle charge opérationnelle cette stratégie produit-elle par rapport à une location annuelle ? »',
    },
    { type: 'p', text: 'Pour certains actifs, le short-term peut être cohérent.' },
    {
      type: 'p',
      text: 'Pour d’autres, la simplicité et la visibilité d’un contrat annuel peuvent être économiquement supérieures.',
    },

    // ── Pourquoi nous refusons de dire « Dubai fait 8 % » ─────────────────────
    { type: 'h2', text: 'Pourquoi nous refusons de dire « Dubai fait 8 % »' },
    { type: 'p', text: 'Parce que Dubai n’est pas un actif.' },
    { type: 'p', text: 'JVC n’est même pas un actif.' },
    { type: 'p', text: 'Business Bay n’est pas un actif.' },
    { type: 'p', text: 'Un projet n’est pas encore un actif comparable à toutes ses unités.' },
    {
      type: 'p',
      text: 'La performance finale appartient à une unité précise achetée à un prix précis, exploitée avec des coûts précis et revendue à un moment précis.',
    },
    { type: 'p', text: 'C’est pourquoi un investisseur devrait demander, avant d’acheter :' },
    {
      type: 'list',
      items: [
        'Quel est le prix réel par sqft de cette unité ?',
        'Quels loyers ont réellement été enregistrés sur des unités comparables ?',
        'Quelles sont les service charges approuvées ?',
        'Combien d’unités concurrentes existent ?',
        'Quelle nouvelle supply arrive ?',
        'Quelle vacance dois-je modéliser ?',
        'Quel budget de maintenance dois-je retenir ?',
        'Quel est mon rendement brut ?',
        'Quel est mon rendement après coûts ?',
        'Qui pourrait racheter cette unité dans cinq ans ?',
        'Et quelle performance totale suis-je réellement en train de viser ?',
      ],
    },

    // ── Le rendement le plus élevé ────────────────────────────────────────────
    {
      type: 'h2',
      text: 'Le rendement le plus élevé n’est pas nécessairement le meilleur investissement',
      short: 'Le rendement le plus élevé',
    },
    { type: 'p', text: 'Le yield est extrêmement utile.' },
    { type: 'p', text: 'Mais il doit être replacé dans une stratégie.' },
    {
      type: 'p',
      text: 'Un investisseur cherchant un revenu régulier peut accepter moins de potentiel d’appréciation en échange d’un rendement supérieur.',
    },
    {
      type: 'p',
      text: 'Un investisseur disposant d’un horizon long peut accepter un rendement courant inférieur pour rechercher une meilleure exposition à la transformation d’une destination.',
    },
    { type: 'p', text: 'Un investisseur patrimonial peut privilégier la rareté et la liquidité.' },
    { type: 'p', text: 'Un investisseur plus opportuniste peut rechercher une inefficience de prix.' },
    { type: 'p', text: 'Il n’existe donc pas un rendement idéal pour Dubai.' },
    { type: 'p', text: 'Il existe un rendement cohérent avec un objectif.' },

    // ── La méthode BF Properties ──────────────────────────────────────────────
    { type: 'h2', text: 'La méthode BF Properties' },
    { type: 'p', text: 'Notre analyse locative suit plusieurs couches.' },
    {
      type: 'method',
      steps: [
        { title: 'Prix d’entrée', text: 'Combien payons-nous réellement l’unité et comment se situe-t-elle face aux comparables ?' },
        { title: 'Loyer réalisable', text: 'Pas le loyer le plus élevé affiché en ligne : le revenu que le marché peut raisonnablement absorber.' },
        { title: 'Coûts', text: 'Service charges, gestion, maintenance, vacance et coûts opérationnels pertinents.' },
        { title: 'Demande', text: 'Qui loue dans cette zone, pourquoi et avec quelle profondeur ?' },
        { title: 'Supply', text: 'Combien d’unités concurrentes existent aujourd’hui et combien arrivent demain ?' },
        { title: 'Qualité de l’unité', text: 'Vue, étage, orientation, plan, surface, bâtiment et micro-localisation.' },
        { title: 'Exit', text: 'À qui pourrons-nous raisonnablement revendre l’actif ?' },
        { title: 'Total return', text: 'Quel équilibre recherchons-nous entre cash-flow, appréciation et préservation du capital ?' },
      ],
    },
    { type: 'p', text: 'La question finale n’est donc jamais :' },
    { type: 'quote', text: '« Quel quartier donne le plus gros rendement ? »' },
    { type: 'p', text: 'Elle est :' },
    {
      type: 'quote',
      text: '« Quel actif produit le meilleur rendement ajusté à la stratégie et au risque de cet investisseur ? »',
    },

    // ── Conclusion ────────────────────────────────────────────────────────────
    { type: 'h2', text: 'Conclusion' },
    { type: 'p', text: 'Dubai peut offrir des rendements locatifs attractifs.' },
    { type: 'p', text: 'Les données 2026 montrent cependant des écarts importants entre les communautés.' },
    {
      type: 'p',
      text: 'Des zones accessibles comme International City, Sports City, Arjan ou JVC peuvent afficher des rendements bruts supérieurs à des destinations prime comme Downtown ou Palm Jumeirah.',
    },
    { type: 'p', text: 'Mais ce classement ne suffit pas à déterminer où investir.' },
    { type: 'p', text: 'Parce que le rendement brut n’est que le premier niveau de l’analyse.' },
    { type: 'p', text: 'Après lui viennent :' },
    {
      type: 'list',
      items: [
        'les charges ;',
        'la vacance ;',
        'la maintenance ;',
        'la gestion ;',
        'le prix d’entrée ;',
        'la future supply ;',
        'la qualité de l’unité ;',
        'la liquidité ;',
        'et l’évolution de la valeur du capital.',
      ],
    },
    {
      type: 'p',
      text: 'Le meilleur investissement n’est donc pas nécessairement celui qui affiche le yield le plus élevé aujourd’hui.',
    },
    {
      type: 'p',
      text: 'C’est celui dont les moteurs de performance correspondent le mieux à ce que l’investisseur cherche réellement à accomplir.',
    },

    // ── CTA (dans l’ordre de la copie fournie : après la conclusion, avant les sources) ───
    {
      type: 'ctaPanel',
      id: 'article_rendement-locatif-dubai-2026_cta',
      eyebrow: 'Analyser avant d’acheter',
      title: 'Quel rendement votre investissement peut-il réellement produire ?',
      content: [
        { type: 'p', text: 'BF Properties analyse le prix d’entrée, les loyers comparables, les charges, la demande, la supply et la stratégie de sortie avant de sélectionner une unité.' },
        { type: 'p', text: 'L’objectif n’est pas de vous présenter le rendement le plus séduisant.' },
        { type: 'p', text: 'L’objectif est de comprendre le rendement que l’actif peut réellement défendre.' },
      ],
      primary: { label: 'Définir mon projet', href: '/consultation' },
      secondary: { label: 'Découvrir notre approche', href: '/a-propos' },
    },
  ],

  sources: [
    {
      label: 'Dubai Land Department — Rental sector 2025',
      url: 'https://dubailand.gov.ae/en/news-media/dubai-s-rental-sector-records-strong-growth-in-2025-underscoring-market-stability-and-the-strength-of-the-emirate-s-real-estate-ecosystem',
    },
    {
      label: 'Dubai Land Department — Q1 2026 rental market',
      url: 'https://dubailand.gov.ae/en/news-media/dubai-s-rental-market-charts-stable-trajectory-reflecting-integrated-regulatory-environment-and-sustained-public-confidence/',
    },
    {
      label: 'Dubai Land Department — Real Estate Data',
      url: 'https://dubailand.gov.ae/en/open-data/real-estate-data/',
    },
    {
      label: 'Dubai Land Department — Rental Index',
      url: 'https://dubailand.gov.ae/en/eservices/rental-index/',
    },
    {
      label: 'Dubai Land Department — Service Charge Index',
      url: 'https://dubailand.gov.ae/en/eservices/service-charge-index-overview/',
    },
    {
      label: 'Engel & Völkers — Average Rental Yields in Dubai, 2026 Market Insights',
      url: 'https://www.engelvoelkers.com/ae/en/resources/rental-yield-dubai',
      note: 'Source figures attributed on page to Property Monitor.',
    },
    {
      label: 'Knight Frank — Dubai Residential Market Review Q4 2025',
      url: 'https://www.knightfrank.ae/newsroom/article/2026/2/dubai-residential-market-review-q4-2025',
    },
    {
      label: 'CBRE — UAE Real Estate Market Review Q2 2026',
      url: 'https://www.cbre.ae/insights/figures/uae-real-estate-market-review-q2-2026',
    },
  ],

  methodologyTitle: 'Méthodologie / note éditoriale',
  methodology: [
    'Les rendements communautaires cités dans cet article sont des rendements BRUTS moyens de marché issus des données Property Monitor publiées par Engel & Völkers en août 2026.',
    'Les loyers 1BR cités pour Downtown Dubai, Dubai Marina, Business Bay, JVC, Dubai Silicon Oasis et International City proviennent de Knight Frank / REIDIN pour Q4 2025.',
    'Les statistiques globales de contrats locatifs proviennent du Dubai Land Department.',
    'Les trois jeux de données ne doivent pas être confondus.',
    'Une moyenne de communauté ne permet pas d’estimer précisément le rendement d’une unité particulière.',
    'Le rendement net doit être recalculé actif par actif à partir du prix effectivement payé, du loyer réalisable et des coûts propres au bâtiment et à la stratégie d’exploitation.',
  ],

  disclaimer: [
    'Les performances passées ne préjugent pas des performances futures.',
    'Les valeurs, loyers, rendements et données présentés sont fournis à titre informatif et ne constituent ni une garantie de rendement, ni une projection, ni un conseil financier, juridique ou fiscal.',
    'Les rendements communautaires mentionnés sont bruts avant charges, frais, vacance, gestion, maintenance, financement et fiscalité éventuelle.',
    'Le rendement réel d’un investissement dépend notamment du prix d’acquisition, de l’unité, du bâtiment, des charges, du loyer obtenu, de l’occupation, des coûts d’exploitation et du prix de sortie.',
  ],

  // The closing call to action is the supplied one (ctaPanel above): no second, generic band under the page.
  cta: false,
  related: ['quartiers-les-plus-demandes-location-dubai', 'ou-investir-a-dubai'],
  links: [
    { label: 'Stratégies d’investissement', href: '/strategies' },
    { label: 'Quartiers', href: '/quartiers' },
    { label: 'Investir à Dubai', href: '/investir-a-dubai' },
  ],
};
