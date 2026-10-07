import type { Article } from '../articles';

/**
 * ARTICLE 04 — « Investir dans des bureaux à Dubai en 2026 : pourquoi le Grade A devient stratégique »
 * FINAL COPY supplied by the editorial team (BF PROPERTIES — FINAL COPY / CLAUDE INTEGRATION): the text below is the supplied text, word for word.
 * Nothing is summarised, shortened, reworded or added. Only presentation is decided here: heading levels, blocks, figure strips and bar charts
 * (built only from the figures given in the text), the pre-launch call to action, links.
 * Headings supplied in capitals are set in sentence case (proper names and acronyms keep their capitals).
 * The future Ellington project is never named, located, priced or described beyond what the copy says, and is never presented as Grade A.
 * The supplied copy gives no category, date, cover or national link target: Market / Investment, the day of integration, no cover picture and the
 * existing consultation route for both buttons of the pre-launch panel (there is no private-list form on the site yet) are used.
 * Every internal link points to a route that exists.
 */

export const INVESTIR_BUREAUX_DUBAI_2026: Article = {
  slug: 'investir-bureaux-dubai-2026',
  category: 'Market',
  alsoIn: ['Investment'],
  title: 'Investir dans des bureaux à Dubai en 2026 : pourquoi le Grade A devient stratégique',
  description:
    'Occupation, loyers, demande des entreprises, Grade A et nouvelles livraisons : BF Properties analyse le marché des bureaux à Dubai en 2026 et les critères à étudier avant d’investir.',
  published: '2026-10-07',

  body: [
    // ── Introduction (libellé « INTRODUCTION » de la copie : repère de structure, pas de titre affiché) ───
    {
      type: 'p',
      lead: true,
      text: 'Pendant des années, l’investissement immobilier à Dubai a surtout été raconté à travers le résidentiel.',
    },
    { type: 'p', lead: true, text: 'Mais derrière la croissance de la ville existe une autre histoire.' },
    { type: 'p', text: 'Celle des entreprises qui s’y installent.' },
    {
      type: 'p',
      text: 'Des banques, sociétés financières, entreprises technologiques, cabinets de conseil, family offices, PME et groupes internationaux ouvrent ou développent leurs activités à Dubai.',
    },
    { type: 'p', text: 'Et toutes ont besoin d’un endroit où travailler.' },
    {
      type: 'p',
      text: 'Au deuxième trimestre 2026, le taux d’occupation moyen des bureaux à Dubai atteignait environ 94 %, selon CBRE.',
    },
    { type: 'p', text: 'Les loyers progressaient encore de 13 % sur un an.' },
    { type: 'p', text: 'Sur le segment prime, la hausse atteignait 16 %.' },
    {
      type: 'p',
      text: 'Savills recensait parallèlement 38 082 transactions locatives de bureaux au deuxième trimestre 2026, en hausse de 4 % sur le trimestre, avec un loyer moyen de 238 AED par sqft et par an.',
    },
    {
      type: 'figures',
      items: [
        { prefix: 'Environ', value: '94', unit: '%', label: 'taux d’occupation moyen des bureaux à Dubai au deuxième trimestre 2026', note: 'CBRE' },
        { value: '13', unit: '%', label: 'progression des loyers sur un an', note: 'CBRE' },
        { value: '16', unit: '%', label: 'progression des loyers sur le segment prime', note: 'CBRE' },
        { value: '38 082', label: 'transactions locatives de bureaux au deuxième trimestre 2026', note: 'Savills, + 4 % sur le trimestre' },
      ],
      caption: 'Sources : CBRE, Savills.',
    },
    { type: 'p', text: 'Mais derrière ces chiffres se cache une distinction essentielle.' },
    { type: 'p', text: 'Le marché ne manque pas nécessairement de n’importe quel bureau.' },
    { type: 'p', text: 'La tension est particulièrement visible sur les bureaux de qualité.' },
    {
      type: 'p',
      text: 'Et c’est probablement l’un des éléments les plus importants à comprendre avant d’investir aujourd’hui dans l’immobilier commercial à Dubai.',
    },
    { type: 'p', text: 'La question n’est donc plus simplement :' },
    { type: 'statement', text: '« Faut-il acheter un bureau à Dubai ? »' },
    { type: 'p', text: 'Elle devient :' },
    {
      type: 'statement',
      text: '« Quel type de bureau les entreprises voudront-elles réellement occuper lorsque davantage d’offre arrivera sur le marché ? »',
    },

    // ── 94 % des bureaux sont occupés ─────────────────────────────────────────
    {
      type: 'h2',
      text: '94 % des bureaux sont occupés : un marché encore très tendu',
      short: '94 % des bureaux sont occupés',
    },
    { type: 'p', text: 'Les chiffres donnent immédiatement une idée de la situation.' },
    { type: 'p', text: 'Selon CBRE, au deuxième trimestre 2026 :' },
    {
      type: 'list',
      items: [
        'l’occupation moyenne des bureaux à Dubai était d’environ 94 % ;',
        'les loyers avaient progressé de 13 % sur un an ;',
        'les loyers prime avaient progressé de 16 %.',
      ],
    },
    { type: 'p', text: 'Un trimestre auparavant, l’occupation se situait même autour de 95 %.' },
    { type: 'p', text: 'Cette situation n’est pas apparue en quelques mois.' },
    {
      type: 'p',
      text: 'Knight Frank indiquait déjà qu’à la fin de 2024, les niveaux d’occupation prime dépassaient 95 % dans des districts majeurs comme DIFC et Business Bay.',
    },
    {
      type: 'p',
      text: 'Les 17 actifs Grade A suivis par Knight Frank sur Sheikh Zayed Road affichaient alors une occupation moyenne de 95,4 %.',
    },
    { type: 'p', text: 'DIFC approchait quant à lui les 100 %.' },
    {
      type: 'p',
      text: 'Le marché des bureaux de Dubai est donc entré dans 2026 avec très peu de vacance sur une partie de son meilleur stock.',
    },

    // ── Le vrai sujet : le Grade A ────────────────────────────────────────────
    { type: 'h2', text: 'Le vrai sujet : le Grade A' },
    { type: 'p', text: 'Il faut ici clarifier un terme souvent utilisé dans l’immobilier commercial.' },
    {
      type: 'statement',
      text: '« Grade A » n’est pas un label gouvernemental unique attribué de manière identique à chaque immeuble.',
    },
    { type: 'p', text: 'Il s’agit d’une classification de marché.' },
    {
      type: 'p',
      text: 'Dans la pratique, les meilleurs immeubles de bureaux combinent généralement plusieurs qualités :',
    },
    {
      type: 'list',
      items: [
        'une localisation forte ;',
        'une bonne accessibilité ;',
        'des plateaux efficaces ;',
        'une infrastructure technique adaptée aux entreprises ;',
        'des ascenseurs performants ;',
        'un parking suffisant ;',
        'des parties communes et une réception de qualité ;',
        'une gestion professionnelle ;',
        'des services et une offre F&B à proximité ;',
        'une bonne connectivité numérique ;',
        'et, de plus en plus, des standards environnementaux correspondant aux exigences des grands occupants.',
      ],
    },
    { type: 'p', text: 'Ce qui est important pour l’investisseur n’est donc pas l’étiquette elle-même.' },
    {
      type: 'p',
      text: 'C’est la capacité du bâtiment à répondre aux attentes des entreprises susceptibles de payer pour l’occuper.',
    },
    {
      type: 'p',
      text: 'CBRE constatait encore au premier trimestre 2026 que les pénuries persistantes de Grade A dans les principaux business districts soutenaient les performances locatives.',
    },
    {
      type: 'p',
      text: 'Savills évoquait également au deuxième trimestre une disponibilité limitée du Grade A et un pipeline restreint de bureaux prime.',
    },
    { type: 'p', text: 'Autrement dit :' },
    { type: 'p', lead: true, text: 'Dubai ne manque pas simplement de mètres carrés.' },
    {
      type: 'statement',
      text: 'Dubai manque encore de certains mètres carrés que les entreprises veulent réellement occuper.',
    },

    // ── Pourquoi les entreprises paient davantage pour la qualité ─────────────
    { type: 'h2', text: 'Pourquoi les entreprises paient davantage pour la qualité' },
    { type: 'p', text: 'La fonction du bureau a changé.' },
    {
      type: 'p',
      text: 'Pour certaines entreprises, il n’est plus seulement un endroit où installer des bureaux et des ordinateurs.',
    },
    {
      type: 'list',
      items: [
        'Il participe à l’image de l’entreprise.',
        'Il sert à recevoir des clients.',
        'Il contribue au recrutement.',
        'Il aide à retenir les talents.',
      ],
    },
    {
      type: 'p',
      text: 'Knight Frank observe que les entreprises sont disposées à payer davantage pour des espaces de qualité et efficaces.',
    },
    {
      type: 'p',
      text: 'La proximité du métro et la présence de restaurants et services autour de l’immeuble peuvent également créer une prime.',
    },
    { type: 'p', text: 'Le bureau devient, dans certains cas, une sorte de vitrine de l’entreprise.' },
    {
      type: 'p',
      text: 'Et lorsque l’on regarde les secteurs qui génèrent les nouveaux besoins, cette recherche de qualité devient logique.',
    },
    { type: 'p', text: 'Au second semestre 2025, Knight Frank indiquait que :' },
    {
      type: 'list',
      items: [
        'Banking & Finance représentait 32,5 % des nouveaux besoins de bureaux ;',
        'Technology représentait 23,1 %.',
      ],
    },
    {
      type: 'p',
      text: 'À eux deux, ces secteurs représentaient donc 55,6 % des nouveaux besoins suivis par Knight Frank.',
    },
    {
      type: 'ranking',
      numbered: false,
      scale: 100,
      caption: 'Part des nouveaux besoins de bureaux suivis par Knight Frank, second semestre 2025',
      items: [
        { name: 'Banking & Finance', value: '32,5', unit: '%' },
        { name: 'Technology', value: '23,1', unit: '%' },
      ],
    },
    {
      type: 'p',
      text: 'Et ces occupants montraient une forte préférence pour les bureaux Grade A situés dans des localisations premium.',
    },
    { type: 'p', text: 'Pour l’investisseur, la conséquence est importante :' },
    { type: 'statement', text: '1 000 sqft de bureaux ne valent pas nécessairement 1 000 autres sqft.' },
    {
      type: 'list',
      items: [
        'L’adresse compte.',
        'Le bâtiment compte.',
        'L’accès compte.',
        'Le parking compte.',
        'Le floorplate compte.',
        'Les ascenseurs comptent.',
        'Les services comptent.',
      ],
    },
    { type: 'p', text: 'Et surtout, l’expérience proposée à l’entreprise locataire compte.' },

    // ── DIFC Square ───────────────────────────────────────────────────────────
    { type: 'h2', text: 'DIFC Square : 600 000 sqft loués avant même la livraison', short: 'DIFC Square' },
    { type: 'p', text: 'L’exemple de DIFC est particulièrement révélateur.' },
    { type: 'p', text: 'Au premier semestre 2026, DIFC a dépassé pour la première fois 10 000 entreprises actives.' },
    {
      type: 'p',
      text: 'Le centre comptait exactement 10 018 entreprises actives, soit une croissance de 30 % sur un an.',
    },
    { type: 'p', text: 'Parmi elles :' },
    {
      type: 'list',
      items: [
        '1 134 sociétés de services financiers régulées, +16 % ;',
        '1 933 entreprises liées à l’AI, la FinTech et l’innovation, +39 %.',
      ],
    },
    {
      type: 'figures',
      items: [
        { value: '10 018', label: 'entreprises actives au premier semestre 2026', note: '+ 30 % sur un an' },
        { value: '1 134', label: 'sociétés de services financiers régulées', note: '+ 16 %' },
        { value: '1 933', label: 'entreprises liées à l’AI, la FinTech et l’innovation', note: '+ 39 %' },
      ],
      caption: 'Source : DIFC.',
    },
    { type: 'p', text: 'Cette croissance crée directement un besoin immobilier.' },
    { type: 'p', text: 'Le meilleur exemple est DIFC Square.' },
    { type: 'p', text: 'Le projet représente 600 000 sqft de bureaux Grade A.' },
    { type: 'p', text: 'Avant même sa livraison, 100 % du développement avait été pré-loué.' },
    {
      type: 'p',
      text: 'Parmi les entreprises ayant sécurisé des espaces figuraient notamment Bank of Singapore, Deutsche Bank, Gallagher Insurance, Herbert Smith Freehills Kramer, Moody’s et TP ICAP.',
    },
    { type: 'p', text: 'Ce chiffre résume une grande partie de la situation actuelle :' },
    { type: 'statement', text: '600 000 sqft.\nGrade A.\n100 % pré-loués avant livraison.' },
    {
      type: 'p',
      text: 'Le problème n’est donc plus de savoir si des entreprises veulent s’installer ou se développer à Dubai.',
    },
    {
      type: 'p',
      text: 'La question est de savoir où elles pourront trouver les bureaux correspondant à leurs exigences.',
    },

    // ── Les petites surfaces ──────────────────────────────────────────────────
    { type: 'h2', text: 'Les petites surfaces ont aussi une vraie profondeur de marché', short: 'Les petites surfaces' },
    {
      type: 'p',
      text: 'L’immobilier de bureaux n’est pourtant pas réservé aux grandes multinationales recherchant des plateaux de plusieurs milliers de mètres carrés.',
    },
    {
      type: 'p',
      text: 'Au deuxième trimestre 2026, Savills rapporte que les transactions locatives portant sur des bureaux de moins de 500 sqft ont progressé de 17 % sur le trimestre.',
    },
    { type: 'p', text: 'Elles représentaient 66 % de l’activité locative totale.' },
    {
      type: 'figures',
      items: [
        { value: '+ 17', unit: '%', label: 'transactions locatives portant sur des bureaux de moins de 500 sqft, sur le trimestre' },
        { value: '66', unit: '%', label: 'de l’activité locative totale' },
      ],
      caption: 'Source : Savills, deuxième trimestre 2026.',
    },
    {
      type: 'p',
      text: 'Savills associe notamment cette demande aux PME, startups et nouveaux entrants sur le marché de Dubai.',
    },
    { type: 'p', text: 'Cette donnée est particulièrement intéressante pour un investisseur privé.' },
    { type: 'p', text: 'Elle montre qu’il existe également une profondeur de marché sur les petites unités.' },
    {
      type: 'p',
      text: 'Mais là encore, il serait dangereux d’en tirer la conclusion que « plus petit = meilleur investissement ».',
    },
    {
      type: 'p',
      text: 'La bonne taille dépend du quartier, du profil des entreprises présentes, de l’offre concurrente, de la configuration du bureau et du prix payé.',
    },
    { type: 'p', text: 'La donnée nous dit simplement qu’il existe une demande significative sur ce segment.' },

    // ── Une vague de nouvelle supply ──────────────────────────────────────────
    { type: 'h2', text: 'Mais une vague de nouvelle supply arrive', short: 'Une vague de nouvelle supply' },
    { type: 'p', text: 'C’est probablement la partie la plus importante de l’analyse.' },
    { type: 'p', text: 'Le marché actuel est tendu.' },
    { type: 'p', text: 'Mais il ne restera pas figé.' },
    {
      type: 'p',
      text: 'Selon Knight Frank, environ 24,2 millions sqft de nouveaux bureaux étaient programmés à Dubai entre 2026 et 2030.',
    },
    {
      type: 'figures',
      items: [
        { prefix: 'Environ', value: '24,2', unit: 'millions sqft', label: 'de nouveaux bureaux programmés à Dubai entre 2026 et 2030', note: 'Knight Frank' },
      ],
    },
    { type: 'p', text: 'Parmi les principaux pipelines identifiés :' },
    {
      type: 'ranking',
      numbered: false,
      items: [
        { name: 'Business Bay', prefix: 'environ', value: '4,6', unit: 'millions sqft' },
        { name: 'Meydan City', prefix: 'environ', value: '3,8', unit: 'millions sqft' },
        { name: 'DIFC', prefix: 'environ', value: '3,4', unit: 'millions sqft' },
        { name: 'Jumeirah Lake Towers', prefix: 'environ', value: '2,6', unit: 'millions sqft' },
      ],
    },
    { type: 'p', text: 'Savills estimait de son côté environ 1,9 million sqft de livraisons pour 2026.' },
    {
      type: 'p',
      text: 'Une partie de cette nouvelle offre Grade A pourrait être pré-louée ou rapidement absorbée par la demande existante.',
    },
    {
      type: 'p',
      text: 'Mais à moyen terme, l’arrivée de nouvelles surfaces devrait progressivement offrir davantage de choix aux entreprises.',
    },
    { type: 'p', text: 'Et c’est précisément là que notre lecture du marché change.' },

    // ── Flight to quality ─────────────────────────────────────────────────────
    {
      type: 'h2',
      text: 'La prochaine phase du marché pourrait être une flight to quality',
      short: 'Une flight to quality',
    },
    {
      type: 'p',
      text: 'Lorsque les entreprises disposent de très peu d’alternatives, même certains actifs moyens peuvent bénéficier d’un marché très tendu.',
    },
    { type: 'p', text: 'Mais lorsque l’offre augmente, le locataire retrouve du choix.' },
    { type: 'p', text: 'Et lorsqu’il retrouve du choix, il peut comparer.' },
    {
      type: 'list',
      items: [
        'Deux immeubles.',
        'Deux localisations.',
        'Deux halls.',
        'Deux niveaux de service.',
        'Deux ratios de parking.',
        'Deux floorplates.',
        'Deux niveaux de charges.',
        'Deux expériences totalement différentes.',
      ],
    },
    {
      type: 'p',
      text: 'Knight Frank anticipe justement une divergence croissante entre les actifs Grade A bien localisés et le stock secondaire plus ancien à mesure que le marché évolue.',
    },
    {
      type: 'p',
      text: 'C’est une notion fondamentale pour un investisseur qui achète aujourd’hui un bureau destiné à être livré dans plusieurs années.',
    },
    { type: 'p', text: 'Il n’achète pas pour le marché de 2026.' },
    { type: 'p', text: 'Il achète pour le marché qui existera au moment de la livraison.' },
    { type: 'p', text: 'La question n’est donc pas uniquement :' },
    { type: 'statement', text: '« Y a-t-il une pénurie de bureaux aujourd’hui ? »' },
    { type: 'p', text: 'La meilleure question est :' },
    {
      type: 'statement',
      text: '« Mon bureau restera-t-il compétitif lorsque les entreprises auront davantage de choix ? »',
    },

    // ── 2026 et 2030 ──────────────────────────────────────────────────────────
    { type: 'h2', text: '2026 et 2030 ne sont pas le même marché', short: '2026 et 2030' },
    { type: 'p', text: 'C’est probablement la distinction la plus importante de cet article.' },
    {
      type: 'p',
      text: 'Entre 2024 et 2026, une grande partie de la performance du marché a été soutenue par une combinaison exceptionnelle :',
    },
    {
      type: 'statement',
      text: 'forte croissance des entreprises + occupation très élevée + faible disponibilité du Grade A + nouvelles livraisons limitées.',
    },
    { type: 'p', text: 'Entre 2027 et 2030, la situation pourrait évoluer.' },
    { type: 'p', text: 'La demande peut continuer à progresser.' },
    { type: 'p', text: 'Mais davantage de projets seront livrés.' },
    {
      type: 'p',
      text: 'Le simple fait de posséder un bureau pourrait donc devenir moins important que le fait de posséder le bon bureau.',
    },
    { type: 'p', text: 'Autrement dit :' },
    {
      type: 'compare',
      columns: [
        { title: '2024–2026', points: ['profiter d’un marché en pénurie.'] },
        { title: '2027–2030', points: ['sélectionner les actifs capables de gagner lorsque la concurrence augmente.'] },
      ],
    },
    { type: 'statement', text: 'C’est là que la qualité du produit devient stratégique.' },

    // ── Comment BF Properties analyse un investissement de bureaux ────────────
    { type: 'h2', text: 'Comment BF Properties analyse un investissement de bureaux' },
    { type: 'p', text: 'Nous ne considérons pas qu’un projet est intéressant simplement parce qu’il est commercial.' },
    {
      type: 'p',
      text: 'Nous ne considérons pas non plus qu’un immeuble est attractif simplement parce que sa brochure utilise le terme « Grade A ».',
    },
    {
      type: 'p',
      text: 'Nous cherchons à comprendre si le produit répond réellement aux besoins des entreprises susceptibles de l’occuper.',
    },
    { type: 'p', text: 'Notre analyse commence donc par plusieurs questions.' },
    { type: 'h3', text: '1. Où sont les entreprises ?' },
    { type: 'p', text: 'Un bureau doit être connecté à un véritable bassin économique.' },
    {
      type: 'p',
      text: 'Nous regardons les entreprises déjà présentes, les secteurs représentés, les créations d’entreprises et les futurs développements économiques autour de la zone.',
    },
    { type: 'h3', text: '2. Quelle entreprise pourrait louer cette unité ?' },
    { type: 'p', text: 'Une unité de 400 sqft ne répond pas au même marché qu’un plateau de 5 000 sqft.' },
    { type: 'p', text: 'Nous voulons comprendre le locataire potentiel avant d’acheter l’actif.' },
    { type: 'h3', text: '3. Le bâtiment peut-il réellement prétendre au segment premium ?' },
    { type: 'p', text: 'Nous analysons notamment :' },
    {
      type: 'list',
      items: [
        'localisation ;',
        'accessibilité ;',
        'proximité du métro et des grands axes ;',
        'parking ;',
        'efficacité des floorplates ;',
        'hauteur sous plafond ;',
        'nombre et capacité des ascenseurs ;',
        'lobby et parties communes ;',
        'F&B et services ;',
        'infrastructure IT et connectivité ;',
        'HVAC ;',
        'certifications environnementales éventuelles ;',
        'gestion de l’immeuble ;',
        'niveau de finition.',
      ],
    },
    { type: 'h3', text: '4. Shell & Core, fitted ou furnished ?' },
    { type: 'p', text: 'Le rendement théorique ne suffit pas.' },
    { type: 'p', text: 'Le coût nécessaire pour rendre le bureau exploitable doit être intégré à l’investissement.' },
    { type: 'p', text: 'Un prix d’achat attractif peut devenir beaucoup moins intéressant après fit-out.' },
    { type: 'h3', text: '5. Combien coûtera réellement l’actif chaque année ?' },
    {
      type: 'p',
      text: 'Nous regardons les service charges, les frais de gestion éventuels, la maintenance et les périodes de vacance potentielles.',
    },
    {
      type: 'p',
      text: 'Le rendement qui nous intéresse est celui que l’investisseur peut réellement défendre, pas celui imprimé sur une brochure.',
    },
    { type: 'h3', text: '6. Quelle supply sera livrée en même temps ?' },
    { type: 'p', text: 'C’est probablement l’une des questions les plus sous-estimées.' },
    { type: 'p', text: 'Un bureau livré en 2028 ou 2029 ne sera pas en concurrence avec le marché de 2026.' },
    { type: 'p', text: 'Il sera en concurrence avec les autres bâtiments disponibles à cette date.' },
    { type: 'p', text: 'Nous voulons donc connaître le pipeline avant d’acheter.' },
    { type: 'h3', text: '7. Pourquoi une entreprise choisirait-elle notre bureau ?' },
    { type: 'p', text: 'C’est la question finale.' },
    {
      type: 'p',
      text: 'Si nous ne sommes pas capables d’y répondre clairement avant l’achat, nous ne devrions probablement pas acheter.',
    },

    // ── Le Grade A doit être démontré ─────────────────────────────────────────
    {
      type: 'h2',
      text: 'Le Grade A ne doit pas être un argument marketing. Il doit être démontré.',
      short: 'Il doit être démontré',
    },
    { type: 'p', text: 'Le marché actuel rend le terme « Grade A » particulièrement séduisant.' },
    { type: 'p', text: 'Mais pour BF Properties, le mot seul ne vaut rien.' },
    {
      type: 'list',
      items: [
        'Nous voulons voir les spécifications.',
        'Nous voulons comprendre la localisation.',
        'Nous voulons connaître le ratio de parking.',
        'Nous voulons étudier les surfaces.',
        'Nous voulons comprendre la circulation verticale.',
        'Nous voulons connaître le niveau de finition.',
        'Nous voulons comparer le produit à la future concurrence.',
      ],
    },
    { type: 'p', text: 'Et surtout :' },
    { type: 'statement', text: 'nous voulons savoir quelle entreprise aura une raison de payer pour l’occuper.' },
    {
      type: 'p',
      text: 'C’est seulement après cette analyse que la qualité immobilière devient une véritable thèse d’investissement.',
    },

    // ── Une nouvelle opportunité commerciale ──────────────────────────────────
    {
      type: 'h2',
      text: 'Une nouvelle opportunité commerciale que BF Properties étudie actuellement',
      short: 'Une nouvelle opportunité commerciale',
    },
    {
      type: 'p',
      text: 'C’est précisément dans ce contexte que BF Properties suit actuellement un nouveau développement commercial d’Ellington Properties.',
    },
    { type: 'p', text: 'Notre intérêt ne vient pas uniquement du nom du développeur.' },
    { type: 'p', text: 'Il vient d’une question beaucoup plus importante :' },
    {
      type: 'p',
      lead: true,
      text: 'Le produit proposé peut-il répondre à la demande de bureaux de qualité que nous observons actuellement à Dubai et rester compétitif face à la nouvelle supply attendue dans les prochaines années ?',
    },
    { type: 'p', text: 'Nous analyserons le projet selon la même méthode que celle présentée dans cet article :' },
    {
      type: 'p',
      text: 'localisation, accessibilité, qualité du bâtiment, surfaces, spécifications techniques, parking, prix d’entrée, coûts, marché locatif, future concurrence et stratégie de sortie.',
    },
    { type: 'p', text: 'Nous ne publierons notre sélection qu’une fois ces éléments analysés.' },

    // ── CTA — Accès prioritaire (dans l’ordre de la copie fournie) ────────────
    {
      type: 'ctaPanel',
      id: 'article_investir-bureaux-dubai-2026_preview',
      eyebrow: 'Accès privé',
      title: 'Recevoir le projet Ellington en avant-première',
      content: [
        { type: 'p', text: 'BF Properties constitue actuellement une liste privée d’investisseurs intéressés par cette nouvelle opportunité commerciale.' },
        { type: 'p', text: 'Les investisseurs inscrits recevront en priorité, dès leur disponibilité :' },
        {
          type: 'list',
          items: [
            'les informations officielles du projet ;',
            'les prix de lancement ;',
            'les plans et surfaces ;',
            'le payment plan ;',
            'notre analyse du marché local ;',
            'et notre sélection des unités que nous considérons les plus intéressantes.',
          ],
        },
        { type: 'p', text: 'Nous ne sélectionnerons pas une unité uniquement sur son rendement annoncé.' },
        { type: 'p', text: 'Nous chercherons les bureaux que nous estimons les mieux positionnés pour répondre à la demande réelle des entreprises.' },
      ],
      primary: { label: 'Recevoir le dossier en avant-première', href: '/consultation' },
      secondary: { label: 'Parler à un conseiller', href: '/consultation' },
    },

    // ── Conclusion ────────────────────────────────────────────────────────────
    { type: 'h2', text: 'Conclusion' },
    { type: 'p', text: 'Le marché des bureaux de Dubai présente aujourd’hui une situation rare.' },
    { type: 'p', text: 'Une occupation proche de la saturation.' },
    { type: 'p', text: 'Une demande soutenue par la croissance des entreprises.' },
    { type: 'p', text: 'Une disponibilité limitée sur le Grade A.' },
    { type: 'p', text: 'Et, en parallèle, une importante vague de nouveaux développements qui se prépare.' },
    { type: 'p', text: 'Ces deux réalités ne se contredisent pas.' },
    { type: 'p', text: 'Elles définissent simplement deux phases du marché.' },
    { type: 'p', text: 'Aujourd’hui, la rareté soutient une grande partie des actifs.' },
    { type: 'p', text: 'Demain, l’augmentation du choix pourrait davantage récompenser les meilleurs.' },
    {
      type: 'p',
      text: 'Pour l’investisseur, la question n’est donc plus simplement de savoir s’il faut acheter des bureaux à Dubai.',
    },
    { type: 'p', text: 'La vraie question est :' },
    {
      type: 'statement',
      text: 'Quel bureau une entreprise voudra-t-elle encore louer lorsque davantage de choix sera disponible ?',
    },
    { type: 'p', text: 'C’est cette question qui guidera notre analyse du prochain projet commercial Ellington.' },
    { type: 'p', text: 'Et c’est cette question qui devrait précéder toute décision d’investissement.' },
  ],

  sources: [
    {
      label: 'CBRE — UAE Real Estate Market Review Q2 2026',
      url: 'https://www.cbre.ae/insights/figures/uae-real-estate-market-review-q2-2026',
    },
    {
      label: 'CBRE — UAE Real Estate Market Review Q1 2026',
      url: 'https://www.cbre.ae/press-releases/uae-real-estate-market-review-q1-2026',
    },
    {
      label: 'Savills — Dubai Office Market Report Q2 2026',
      url: 'https://www.savills.com/research_articles/255800/392667-0',
    },
    {
      label: 'Savills — Dubai office market enters more balanced phase as Grade A demand remains resilient in Q2 2026',
      url: 'https://www.savills.com/insight-and-opinion/savills-news/393010/dubai-office-market-enters-more-balanced-phase-as-grade-a-demand-remains-resilient-in-q2-2026',
    },
    {
      label: 'Knight Frank — Dubai Office Market Review H2 2025',
      url: 'https://www.knightfrank.ae/newsroom/article/2026/4/dubai-office-market-review-h2-2025',
    },
    {
      label: 'Knight Frank — Dubai’s office rents climb 9.1% in H2 2024 amid rising demand',
      url: 'https://www.knightfrank.ae/newsroom/article/2025/3/dubai-office-market-review---h2-2024',
    },
    {
      label: 'DIFC — H1 2026 results',
      url: 'https://www.difc.com/whats-on/news/industry-leading-achievements-h1-2026',
    },
    {
      label: 'DIFC — DIFC Square opens ahead of schedule',
      url: 'https://www.difc.com/whats-on/news/difc-square-opens-ahead-of-schedule',
    },
  ],

  disclaimer: [
    'Les données historiques, taux d’occupation, loyers, transactions et projections de supply présentés dans cette analyse proviennent de sources de marché citées et correspondent aux périodes indiquées. Ils ne constituent ni une garantie de rendement, ni une projection de performance future.',
    'Le terme Grade A est une classification de marché dont les critères peuvent varier selon les acteurs. La mention d’un projet ou d’un développeur ne constitue pas, à elle seule, une qualification Grade A.',
    'Tout investissement doit être analysé en fonction notamment du prix d’acquisition, des caractéristiques de l’unité, des coûts de fit-out, des charges, du marché locatif, de la future supply et de la stratégie de sortie.',
  ],

  related: ['quartiers-les-plus-demandes-location-dubai', 'investir-a-dubai'],
  links: [
    { label: 'Stratégies d’investissement', href: '/strategies' },
    { label: 'Developers', href: '/insights/developers' },
    { label: 'Investir à Dubai', href: '/investir-a-dubai' },
  ],
};
