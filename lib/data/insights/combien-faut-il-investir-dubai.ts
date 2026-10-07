import type { Article } from '../articles';

/**
 * « Combien faut-il pour investir à Dubai en 2026 ? » (document « ARTICLE 04 — COMBIEN FAUT-IL POUR INVESTIR À DUBAI EN 2026 ? »)
 * FINAL COPY supplied by the editorial team (BF PROPERTIES — FINAL COPY / CLAUDE INTEGRATION): the text below is the supplied text, word for word.
 * Nothing is summarised, shortened, reworded or added. Only presentation is decided here: heading levels, blocks (figures, table, comparison, steps),
 * callouts that repeat figures already written in the text (fees, Q1 2026 transactions, price declines, the illustrative payment plan), the closing
 * call to action, links. A line cut after a colon whose continuation starts in lower case is set as one paragraph (same words, same punctuation).
 * Headings and key sentences supplied in capitals are set in sentence case (proper names and acronyms keep their capitals).
 * No project is offered and no budget is turned into a recommendation of an area or a developer.
 * The supplied copy gives no category, date, cover or link targets: Investment, the day of integration, no cover picture, /consultation for the
 * primary button and /a-propos (« Notre méthode ») for the secondary one are used. Every internal link points to a route that exists.
 */

export const COMBIEN_FAUT_IL_INVESTIR_DUBAI: Article = {
  slug: 'combien-faut-il-investir-dubai',
  category: 'Investment',
  title: 'Combien faut-il pour investir à Dubai en 2026 ?',
  seoTitle: 'Combien faut-il pour investir à Dubai en 2026 ? Budgets, frais et stratégies',
  description:
    '100 000 €, 250 000 €, 500 000 € ou 1 M€ : découvrez ce que chaque budget permet réellement d’envisager à Dubai, les frais à anticiper et la stratégie d’investissement à privilégier.',
  published: '2026-10-07',

  body: [
    // ── Introduction (libellé « INTRODUCTION » de la copie : repère de structure, pas de titre affiché) ───
    { type: 'p', lead: true, text: '« Combien faut-il pour investir à Dubai ? »' },
    { type: 'p', lead: true, text: 'La question paraît simple.' },
    { type: 'p', lead: true, text: 'La réponse l’est beaucoup moins.' },
    {
      type: 'p',
      text: 'Deux investisseurs disposant exactement du même capital peuvent avoir besoin de deux stratégies complètement différentes.',
    },
    { type: 'p', text: 'L’un cherche du rendement locatif immédiat.' },
    { type: 'p', text: 'L’autre veut maximiser son potentiel d’appréciation sur cinq ans.' },
    { type: 'p', text: 'Un troisième souhaite utiliser un payment plan pour répartir ses décaissements.' },
    {
      type: 'p',
      text: 'Un quatrième préfère un actif déjà livré, louable immédiatement et dont le marché secondaire peut être observé.',
    },
    { type: 'p', text: 'Le véritable sujet n’est donc pas seulement de savoir combien coûte un appartement à Dubai.' },
    {
      type: 'p',
      text: 'Il faut comprendre ce que votre capital permet d’acheter, quels frais viennent s’ajouter au prix affiché, quelle stratégie correspond à ce budget et, surtout, quelle qualité d’actif vous obtenez réellement.',
    },
    { type: 'p', text: 'Dans cette analyse, nous allons raisonner autour de quatre niveaux de capital :' },
    {
      type: 'figures',
      items: [
        { value: '100 000', unit: '€' },
        { value: '250 000', unit: '€' },
        { value: '500 000', unit: '€' },
        { value: '1 million', unit: 'd’euros' },
      ],
    },
    { type: 'p', text: 'Non pas pour établir quatre listes de propriétés.' },
    {
      type: 'p',
      text: 'Mais pour montrer comment la stratégie d’investissement change lorsque le capital disponible augmente.',
    },

    // ── Avant de parler de budget ─────────────────────────────────────────────
    {
      type: 'h2',
      text: 'Avant de parler de budget : le prix affiché n’est pas le coût total',
      short: 'Le prix affiché n’est pas le coût total',
    },
    { type: 'p', text: 'C’est la première erreur à éviter.' },
    {
      type: 'p',
      text: 'Un bien affiché à 1 million AED ne représente pas nécessairement un investissement total limité à 1 million AED.',
    },
    {
      type: 'p',
      text: 'À Dubai, l’enregistrement d’une vente immobilière auprès du Dubai Land Department est soumis à une commission d’enregistrement correspondant à 4 % de la valeur de la transaction.',
    },
    {
      type: 'p',
      text: 'La réglementation prévoit une répartition de 2 % pour le vendeur et 2 % pour l’acheteur, sauf accord différent entre les parties.',
    },
    {
      type: 'figures',
      items: [
        { value: '4', unit: '%', label: 'commission d’enregistrement', note: 'de la valeur de la transaction' },
        { value: '2', unit: '%', label: 'pour le vendeur' },
        { value: '2', unit: '%', label: 'pour l’acheteur', note: 'sauf accord différent entre les parties' },
      ],
      caption: 'Source : Dubai Land Department.',
    },
    {
      type: 'p',
      text: 'Dans la pratique commerciale, la répartition effectivement supportée doit donc être vérifiée dans chaque transaction et dans le SPA.',
    },
    {
      type: 'p',
      text: 'Pour une transaction enregistrée via un Real Estate Registration Trustee, d’autres frais administratifs existent également. Le DLD indique notamment des frais de partenaire de service de 4 000 AED + TVA pour une vente d’au moins 500 000 AED, ou 2 000 AED + TVA sous ce seuil, ainsi que certains frais de titre et de cartographie.',
    },
    {
      type: 'p',
      text: 'En cas de financement, l’enregistrement d’une hypothèque entraîne également des coûts spécifiques ; le DLD indique notamment 0,25 % de la valeur du prêt pour l’enregistrement du mortgage.',
    },
    { type: 'p', text: 'À cela peuvent s’ajouter, selon la transaction :' },
    {
      type: 'list',
      items: [
        'commission d’agence ;',
        'frais bancaires ;',
        'valuation ;',
        'NOC ;',
        'ameublement ;',
        'fit-out ;',
        'charges de copropriété ;',
        'frais de gestion locative ;',
        'coûts de mise en location.',
      ],
    },
    { type: 'p', text: 'Le premier principe BF est donc simple :' },
    { type: 'statement', text: 'Le budget d’achat n’est pas le budget total d’investissement.' },

    // ── 100 000 € ─────────────────────────────────────────────────────────────
    {
      type: 'h2',
      text: '100 000 € : le budget où la sélection compte plus que jamais',
      short: '100 000 € : la sélection compte plus que jamais',
    },
    { type: 'p', text: 'À ce niveau de capital, l’erreur classique consiste à rechercher simplement « le moins cher ».' },
    { type: 'p', text: 'C’est précisément ce qu’il faut éviter.' },
    { type: 'p', text: 'Un ticket d’entrée faible n’est intéressant que si une demande existe derrière l’actif.' },
    {
      type: 'p',
      text: 'Avec environ 100 000 €, l’investisseur se situe dans la partie accessible du marché et devra généralement arbitrer davantage entre :',
    },
    {
      type: 'list',
      items: [
        'localisation ;',
        'surface ;',
        'maturité du quartier ;',
        'qualité du promoteur ;',
        'qualité du bâtiment ;',
        'proximité des bassins d’emploi ;',
        'calendrier de paiement ;',
        'rendement potentiel ;',
        'liquidité future.',
      ],
    },
    {
      type: 'p',
      text: 'Selon le taux de change et les frais, 100 000 € ne doivent pas être traduits mécaniquement en un prix maximum de propriété.',
    },
    {
      type: 'p',
      text: 'Une partie du capital doit rester disponible pour les coûts de transaction et, dans le ready market, éventuellement l’ameublement ou la remise en état.',
    },
    { type: 'p', text: 'La stratégie peut prendre plusieurs formes.' },
    { type: 'h3', text: 'Option 1 : rechercher un actif ready accessible' },
    { type: 'p', text: 'L’intérêt est immédiat : le bien existe.' },
    {
      type: 'list',
      items: [
        'On peut observer le bâtiment.',
        'On peut étudier les transactions passées.',
        'On peut analyser les loyers réellement enregistrés.',
        'On peut voir l’offre concurrente.',
      ],
    },
    {
      type: 'p',
      text: 'Et si l’actif est vacant ou devient disponible, il peut potentiellement produire un revenu rapidement.',
    },
    { type: 'p', text: 'Mais « ready » ne signifie pas automatiquement « bon investissement ».' },
    {
      type: 'p',
      text: 'Un immeuble vieillissant, des charges élevées ou une micro-localisation médiocre peuvent détruire l’avantage d’un prix d’entrée attractif.',
    },
    { type: 'h3', text: 'Option 2 : utiliser l’off-plan pour étaler le capital' },
    {
      type: 'p',
      text: 'L’off-plan peut permettre d’accéder à un actif dont le prix total dépasse le cash immédiatement disponible grâce à un payment plan.',
    },
    { type: 'p', text: 'Mais attention :' },
    { type: 'statement', text: 'Un payment plan ne rend pas un bien moins cher.' },
    { type: 'p', text: 'Il modifie le calendrier des paiements.' },
    {
      type: 'p',
      text: 'Un investisseur disposant de 100 000 € aujourd’hui peut donc parfois signer pour un actif dont la valeur est supérieure à son capital actuel, à condition d’être capable d’honorer les échéances futures.',
    },
    { type: 'p', text: 'C’est un levier de trésorerie.' },
    { type: 'p', text: 'Pas une réduction du prix.' },
    { type: 'h3', text: 'Notre lecture BF à 100 000 €' },
    { type: 'p', text: 'À ce niveau, nous privilégierions la profondeur de la demande plutôt que le prestige.' },
    {
      type: 'question',
      label: 'La question centrale devient :',
      text: '« Qui louera ou rachètera cet actif ? »',
    },
    {
      type: 'p',
      text: 'Une petite unité située dans une zone connectée à un bassin d’emploi, à des infrastructures ou à une population active peut être plus cohérente qu’un produit plus spectaculaire mais mal positionné.',
    },

    // ── 250 000 € ─────────────────────────────────────────────────────────────
    {
      type: 'h2',
      text: '250 000 € : le budget où les options commencent à s’élargir',
      short: '250 000 € : les options commencent à s’élargir',
    },
    { type: 'p', text: 'Autour de 250 000 €, l’investisseur commence à disposer d’un univers beaucoup plus large.' },
    { type: 'p', text: 'Il peut potentiellement arbitrer entre :' },
    {
      type: 'list',
      items: [
        'une unité dans une communauté établie ;',
        'un projet off-plan de meilleure qualité ;',
        'une typologie plus grande ;',
        'une localisation plus centrale ;',
        'ou une stratégie combinant rendement et appréciation.',
      ],
    },
    {
      type: 'p',
      text: 'C’est aussi le niveau où il devient dangereux de raisonner uniquement en termes de « quartier ».',
    },
    {
      type: 'p',
      text: 'Deux appartements situés dans la même communauté peuvent avoir des performances très différentes.',
    },
    { type: 'p', text: 'Pourquoi ?' },
    { type: 'p', text: 'Parce que l’investissement se joue ensuite au niveau du projet et de l’unité.' },
    {
      type: 'list',
      items: [
        'Vue.',
        'Étage.',
        'Orientation.',
        'Plan.',
        'Distance des nuisances.',
        'Qualité des parties communes.',
        'Charges.',
        'Prix au sqft.',
        'Payment plan.',
        'Future supply autour du projet.',
      ],
    },
    { type: 'p', text: 'À 250 000 €, l’investisseur dispose de davantage de choix.' },
    { type: 'p', text: 'Et paradoxalement, davantage de choix signifie davantage de possibilités de se tromper.' },
    { type: 'h3', text: 'La question n’est plus seulement « où acheter ? »' },
    {
      type: 'question',
      label: 'Elle devient :',
      text: '« Quelle combinaison entre quartier, projet, unité et prix d’entrée correspond à ma stratégie ? »',
    },
    { type: 'p', text: 'C’est précisément à ce niveau que la comparaison entre ready et off-plan devient intéressante.' },
    { type: 'p', text: 'Le ready permet de mesurer une réalité existante.' },
    { type: 'p', text: 'L’off-plan permet parfois d’entrer dans une transformation future.' },
    { type: 'p', text: 'Mais la prime payée pour cette promesse doit être justifiable.' },

    // ── 500 000 € ─────────────────────────────────────────────────────────────
    {
      type: 'h2',
      text: '500 000 € : on passe de l’achat d’un bien à la construction d’une stratégie',
      short: '500 000 € : la construction d’une stratégie',
    },
    {
      type: 'p',
      text: 'Avec 500 000 €, l’investisseur ne devrait plus automatiquement chercher « le meilleur appartement possible ».',
    },
    { type: 'p', text: 'Il peut commencer à réfléchir en portefeuille.' },
    { type: 'p', text: 'Deux approches deviennent possibles.' },
    { type: 'h3', text: 'Concentrer le capital' },
    { type: 'p', text: 'Acheter un actif premium plus rare.' },
    { type: 'p', text: 'L’objectif peut être de rechercher :' },
    {
      type: 'list',
      items: [
        'une meilleure localisation ;',
        'une vue difficilement reproductible ;',
        'une grande typologie ;',
        'une communauté premium ;',
        'un actif avec une profondeur de demande end-user ;',
        'une meilleure capacité de préservation du capital.',
      ],
    },
    {
      type: 'p',
      text: 'Cette stratégie concentre le risque sur un seul actif, mais permet potentiellement d’accéder à une catégorie de produit différente.',
    },
    { type: 'h3', text: 'Diversifier le capital' },
    { type: 'p', text: 'Au lieu d’un actif unique, le même capital peut être réparti sur plusieurs expositions.' },
    { type: 'p', text: 'Par exemple :' },
    {
      type: 'list',
      items: [
        'différentes zones ;',
        'différentes dates de livraison ;',
        'différentes typologies ;',
        'ready + off-plan ;',
        'rendement + appréciation.',
      ],
    },
    { type: 'p', text: 'La diversification n’est cependant pas automatiquement supérieure.' },
    { type: 'p', text: 'Deux actifs moyens ne valent pas nécessairement mieux qu’un excellent actif.' },
    { type: 'p', text: 'La question reste celle de la qualité de la sélection.' },
    { type: 'h3', text: 'À ce niveau, la stratégie de sortie devient centrale' },
    { type: 'p', text: 'Plus le ticket augmente, plus il faut réfléchir avant l’achat à l’acheteur futur.' },
    { type: 'p', text: 'Qui rachètera cet actif ?' },
    {
      type: 'list',
      items: [
        'Un investisseur ?',
        'Une famille ?',
        'Un résident fortuné ?',
        'Un propriétaire occupant ?',
        'Un acheteur international ?',
      ],
    },
    { type: 'p', text: 'La liquidité ne dépend pas uniquement du prix.' },
    {
      type: 'p',
      text: 'Elle dépend du nombre de personnes pour lesquelles l’actif aura du sens au moment de la revente.',
    },

    // ── 1 million d’euros ─────────────────────────────────────────────────────
    {
      type: 'h2',
      text: '1 million d’euros : le capital permet de penser en portefeuille',
      short: '1 million d’euros : penser en portefeuille',
    },
    { type: 'p', text: 'À partir d’un capital de l’ordre d’un million d’euros, la question ne devrait plus être :' },
    { type: 'quote', text: '« Quel appartement acheter ? »' },
    { type: 'p', text: 'Elle devrait devenir :' },
    { type: 'quote', text: '« Comment allouer ce capital immobilier ? »' },
    { type: 'p', text: 'Une allocation peut chercher à combiner plusieurs moteurs de performance :' },
    {
      type: 'list',
      items: [
        'revenu locatif ;',
        'appréciation ;',
        'actif prime ;',
        'exposition à une nouvelle infrastructure ;',
        'différentes dates de livraison ;',
        'plusieurs typologies ;',
        'éventuellement résidentiel et commercial.',
      ],
    },
    { type: 'p', text: 'Le capital permet aussi de ne pas être obligé de choisir entre rendement et qualité.' },
    { type: 'p', text: 'Mais il crée un autre risque : surpayer des actifs simplement parce que le budget le permet.' },
    { type: 'p', text: 'Un bien à 4 millions AED n’est pas automatiquement meilleur qu’un bien à 2 millions AED.' },
    { type: 'p', text: 'À mesure que le prix augmente, BF cherche donc davantage la rareté défendable.' },
    {
      type: 'list',
      items: [
        'Une vue qui ne peut pas être recréée.',
        'Une véritable waterfront position.',
        'Une communauté difficilement reproductible.',
        'Une parcelle exceptionnelle.',
        'Une grande typologie dans un marché où elles sont rares.',
        'Un produit susceptible d’intéresser un end-user fortuné.',
      ],
    },
    {
      type: 'p',
      text: 'À ce niveau, l’investissement immobilier commence réellement à ressembler à une allocation de capital.',
    },

    // ── Tableau ───────────────────────────────────────────────────────────────
    {
      type: 'h2',
      text: 'Tableau : ce que change réellement votre budget',
      short: 'Ce que change réellement votre budget',
    },
    {
      type: 'table',
      first: 'label',
      head: ['Budget', 'Priorité', 'Question principale', 'Risque majeur'],
      rows: [
        ['100 000 €', 'Profondeur de demande et discipline sur le prix.', 'Qui louera cet actif ?', 'Acheter uniquement parce que le prix paraît faible.'],
        ['250 000 €', 'Arbitrage quartier / projet / unité.', 'Quelle combinaison offre le meilleur rapport qualité-prix ?', 'Payer trop cher une promesse off-plan.'],
        ['500 000 €', 'Concentration versus diversification.', 'Un actif premium ou plusieurs expositions ?', 'Confondre prix élevé et rareté.'],
        ['1 M€', 'Allocation de portefeuille.', 'Comment répartir le capital entre rendement, appréciation et préservation ?', 'Accumuler des actifs sans stratégie commune.'],
      ],
    },

    // ── Faut-il tout payer cash ? ─────────────────────────────────────────────
    { type: 'h2', text: 'Faut-il tout payer cash ?' },
    { type: 'p', text: 'Non.' },
    { type: 'p', text: 'Et c’est un point fondamental.' },
    {
      type: 'p',
      text: 'Le capital disponible et la valeur totale des actifs contrôlés ne sont pas nécessairement identiques.',
    },
    { type: 'p', text: 'Dans l’off-plan, un payment plan peut répartir le paiement sur plusieurs années.' },
    {
      type: 'p',
      text: 'Dans le ready market, un financement bancaire peut éventuellement modifier la structure du capital nécessaire, sous réserve d’éligibilité et des conditions proposées par la banque.',
    },
    {
      type: 'p',
      text: 'Mais dans les deux cas, il faut éviter une erreur : confondre capacité à signer et capacité à financer.',
    },
    { type: 'p', text: 'Un investisseur doit pouvoir supporter les échéances futures même si :' },
    {
      type: 'list',
      items: [
        'le marché ralentit ;',
        'la revente prend plus de temps ;',
        'le bien n’est pas immédiatement loué ;',
        'sa situation personnelle change.',
      ],
    },
    { type: 'p', text: 'BF ne considère donc pas le payment plan comme une raison d’acheter davantage.' },
    { type: 'p', text: 'Nous le considérons comme un outil de structuration du capital.' },

    // ── Le financement de l’off-plan ──────────────────────────────────────────
    { type: 'h2', text: 'Le financement commence aussi à s’étendre à l’off-plan' },
    {
      type: 'p',
      text: 'Il faut également sortir d’une idée ancienne : l’off-plan à Dubai ne signifie plus nécessairement que l’intégralité du prix doit être financée uniquement par les fonds propres de l’acheteur jusqu’à la livraison.',
    },
    {
      type: 'p',
      text: 'Certaines banques proposent des financements sur des projets off-plan éligibles, généralement sous conditions et sur une sélection de promoteurs et de projets approuvés. Dans certains cas, des promoteurs structurent également des partenariats avec des banques afin de faciliter l’accès au financement de leurs acheteurs.',
    },
    { type: 'p', text: 'Cela peut modifier considérablement la manière de structurer un investissement.' },
    { type: 'p', text: 'L’investisseur peut combiner :' },
    {
      type: 'list',
      items: [
        'son apport personnel ;',
        'les échéances prévues pendant la construction ;',
        'un financement bancaire lorsque le projet et son profil sont éligibles ;',
        'et, sur certains projets, un payment plan qui continue après la livraison.',
      ],
    },
    {
      type: 'p',
      text: 'Mais il ne faut pas confondre disponibilité du financement et facilité automatique d’obtention.',
    },
    {
      type: 'p',
      text: 'L’éligibilité dépend notamment de la banque, du projet, du promoteur, de l’avancement de la construction, du profil de l’emprunteur, de sa résidence, de ses revenus et des règles de financement applicables au moment de la demande.',
    },
    { type: 'p', text: 'Tous les projets off-plan ne sont donc pas finançables de la même manière.' },
    {
      type: 'p',
      text: 'Pour BF Properties, cette évolution ajoute une nouvelle dimension à l’analyse : il ne faut plus seulement comparer le prix des unités.',
    },
    { type: 'p', text: 'Il faut aussi comparer la structure de financement disponible derrière chacune d’elles.' },
    {
      type: 'p',
      text: 'Un projet offrant un financement bancaire intéressant peut permettre de préserver davantage de liquidités ou de répartir différemment le capital.',
    },
    {
      type: 'p',
      text: 'Mais, comme pour un post-handover payment plan, le financement ne transforme jamais un mauvais actif en bon investissement.',
    },
    {
      type: 'p',
      text: 'La qualité du projet, son prix d’entrée, sa demande future et sa capacité à générer ou préserver de la valeur restent prioritaires.',
    },

    // ── Le post-handover payment plan ─────────────────────────────────────────
    { type: 'h2', text: 'Et le post-handover payment plan ?' },
    {
      type: 'p',
      text: 'Il existe une autre structure particulièrement importante à comprendre lorsque l’on parle du capital nécessaire pour investir à Dubai : le post-handover payment plan.',
    },
    {
      type: 'p',
      text: 'Dans un payment plan classique, l’investisseur paie progressivement le bien pendant sa construction, puis une part importante du prix peut être due au moment de la livraison.',
    },
    {
      type: 'p',
      text: 'Dans un post-handover payment plan, une partie du prix reste au contraire à payer après la remise des clés.',
    },
    { type: 'p', text: 'Prenons un exemple purement illustratif.' },
    {
      type: 'figures',
      items: [
        { value: '2 000 000', unit: 'AED', label: 'Prix du bien' },
        { value: '60/40', unit: 'post-handover', label: 'Structure' },
        { value: '1 200 000', unit: 'AED', label: '60 % payés jusqu’à la livraison' },
        { value: '800 000', unit: 'AED', label: '40 % restant après la livraison' },
      ],
    },
    {
      type: 'p',
      text: 'Si ces 800 000 AED sont ensuite répartis sur quatre ans, cela représente environ 200 000 AED par an, selon le calendrier contractuel exact.',
    },
    { type: 'p', text: 'L’intérêt est évident.' },
    {
      type: 'p',
      text: 'L’investisseur peut potentiellement prendre possession du bien et commencer à l’exploiter alors qu’il n’a pas encore payé 100 % du prix au promoteur.',
    },
    {
      type: 'p',
      text: 'Si le bien est mis en location après sa livraison, les loyers encaissés peuvent donc contribuer au financement des échéances post-handover.',
    },
    { type: 'p', text: 'Mais il faut être extrêmement prudent avec la manière de présenter cet avantage.' },
    { type: 'p', text: 'Le locataire ne « paie » pas automatiquement le bien.' },
    { type: 'p', text: 'Il faut comparer :' },
    {
      type: 'list',
      items: [
        'le loyer réellement réalisable ;',
        'les périodes éventuelles de vacance ;',
        'les service charges ;',
        'les frais de gestion ;',
        'la maintenance ;',
        'l’ameublement ou le fit-out éventuel ;',
        'et surtout le montant et la fréquence des échéances restant dues au promoteur.',
      ],
    },
    {
      type: 'p',
      text: 'Le cash-flow doit donc être modélisé mois par mois ou trimestre par trimestre selon le contrat.',
    },
    { type: 'h3', text: 'Un post-handover n’est pas une réduction du prix' },
    { type: 'p', text: 'C’est probablement le point le plus important.' },
    { type: 'p', text: 'Un post-handover payment plan améliore potentiellement la structure de trésorerie.' },
    { type: 'p', text: 'Il ne rend pas automatiquement l’investissement moins cher.' },
    { type: 'p', text: 'Imaginons deux actifs comparables.' },
    {
      type: 'compare',
      columns: [
        { title: 'Projet A', points: ['1 900 000 AED avec un payment plan se terminant à la livraison.'] },
        { title: 'Projet B', points: ['2 050 000 AED avec un post-handover particulièrement confortable.'] },
      ],
    },
    { type: 'p', text: 'Le projet B offre davantage de temps pour payer.' },
    { type: 'p', text: 'Mais il coûte aussi 150 000 AED de plus.' },
    {
      type: 'question',
      label: 'La question BF devient alors :',
      text: '« La valeur financière du paiement différé justifie-t-elle le premium payé à l’achat ? »',
    },
    { type: 'p', text: 'Un payment plan très attractif ne doit jamais servir à masquer un prix au sqft trop élevé.' },
    { type: 'h3', text: 'Prix du bien, capital engagé et coût total : trois choses différentes' },
    { type: 'p', text: 'Le post-handover permet de comprendre une distinction essentielle.' },
    { type: 'statement', text: 'Prix du bien\n≠ capital immédiatement nécessaire\n≠ coût total de l’investissement.' },
    { type: 'p', text: 'Un appartement peut coûter 2 millions AED sans exiger 2 millions AED dès aujourd’hui.' },
    { type: 'p', text: 'Mais l’investisseur reste contractuellement responsable des échéances futures.' },
    {
      type: 'p',
      text: 'C’est pourquoi BF analyse non seulement le prix d’achat, mais aussi la courbe de décaissement du capital.',
    },
    {
      type: 'list',
      items: [
        'Combien faut-il payer aujourd’hui ?',
        'Combien avant la livraison ?',
        'Combien à la remise des clés ?',
        'Combien après la livraison ?',
        'Sur quelle durée ?',
        'Et quel revenu l’actif pourrait-il raisonnablement produire pendant cette période ?',
      ],
    },
    {
      type: 'p',
      text: 'C’est seulement après cette analyse que l’on peut déterminer si le payment plan constitue un véritable avantage financier.',
    },
    { type: 'h3', text: 'Le post-handover peut être puissant, mais il ne doit jamais fragiliser l’investisseur' },
    {
      type: 'p',
      text: 'La possibilité de louer un bien avant d’avoir payé l’intégralité du prix peut être intéressante.',
    },
    { type: 'p', text: 'Mais l’investissement ne doit pas dépendre d’un scénario parfait.' },
    { type: 'p', text: 'Le propriétaire doit être capable d’honorer ses échéances même si :' },
    {
      type: 'list',
      items: [
        'la location prend plusieurs mois ;',
        'le loyer obtenu est inférieur aux attentes ;',
        'des charges imprévues apparaissent ;',
        'le marché ralentit ;',
        'ou le bien reste vacant temporairement.',
      ],
    },
    { type: 'p', text: 'Le post-handover doit donc être considéré comme un outil de structuration du capital.' },
    {
      type: 'p',
      text: 'Pas comme une justification pour acheter un actif que l’investisseur ne pourrait pas financer autrement.',
    },

    // ── Le marché 2026 ────────────────────────────────────────────────────────
    {
      type: 'h2',
      text: 'Le marché 2026 rappelle pourquoi le prix d’entrée compte',
      short: 'Pourquoi le prix d’entrée compte',
    },
    { type: 'p', text: 'Le marché de Dubai reste extrêmement actif.' },
    {
      type: 'p',
      text: 'Au premier trimestre 2026, le Dubai Land Department a enregistré 60 303 transactions immobilières, soit 6 % de plus qu’un an auparavant, pour une valeur totale des transactions immobilières de 252 milliards AED, en hausse de 31 %.',
    },
    {
      type: 'figures',
      items: [
        { value: '60 303', label: 'transactions immobilières', note: 'soit 6 % de plus qu’un an auparavant' },
        { value: '252', unit: 'milliards AED', label: 'valeur totale des transactions immobilières', note: 'en hausse de 31 %' },
      ],
      caption: 'Source : Dubai Land Department, premier trimestre 2026.',
    },
    { type: 'p', text: 'Mais un marché actif ne signifie pas que tous les actifs progressent de la même manière.' },
    {
      type: 'p',
      text: 'Au deuxième trimestre 2026, CBRE constatait une modération du marché résidentiel de Dubai : la demande s’est assouplie, l’activité transactionnelle a reculé et l’arrivée de nouvelle supply a contribué à réduire les pressions sur les prix.',
    },
    {
      type: 'p',
      text: 'Knight Frank observait parallèlement au premier semestre 2026 des baisses de prix de 5 % à 20 % dans certaines parties du marché mainstream, selon les localisations, tandis que le segment prime montrait davantage de résilience.',
    },
    {
      type: 'figures',
      items: [
        { value: '5 % à 20', unit: '%', label: 'baisses de prix dans certaines parties du marché mainstream', note: 'selon les localisations' },
      ],
      caption: 'Source : Knight Frank, premier semestre 2026.',
    },
    { type: 'p', text: 'C’est une distinction essentielle.' },
    { type: 'p', text: 'Dubai n’est pas un seul marché.' },
    { type: 'p', text: 'C’est une collection de micro-marchés.' },
    { type: 'p', text: 'Le budget ne doit donc jamais déterminer seul l’investissement.' },

    // ── Le « meilleur » budget ────────────────────────────────────────────────
    {
      type: 'h2',
      text: '100 000 €, 250 000 €, 500 000 € ou 1 M€ : quel est le « meilleur » budget ?',
      short: 'Quel est le « meilleur » budget ?',
    },
    { type: 'p', text: 'Il n’existe pas.' },
    {
      type: 'p',
      text: 'Le meilleur budget est celui qui permet d’exécuter correctement votre stratégie sans fragiliser votre situation financière.',
    },
    {
      type: 'p',
      text: 'Un investisseur disposant de 100 000 € et achetant un actif parfaitement adapté à une demande réelle peut prendre une meilleure décision qu’un investisseur disposant d’un million d’euros mais achetant sans discipline.',
    },
    { type: 'p', text: 'Le capital ouvre des possibilités.' },
    { type: 'p', text: 'Il ne remplace pas l’analyse.' },

    // ── Notre méthode ─────────────────────────────────────────────────────────
    {
      type: 'h2',
      text: 'Notre méthode : partir de l’investisseur, pas du projet',
      short: 'Partir de l’investisseur, pas du projet',
    },
    { type: 'p', text: 'Chez BF Properties, nous ne commençons pas par ouvrir un catalogue.' },
    { type: 'p', text: 'Nous commençons par cinq questions.' },
    {
      type: 'method',
      steps: [
        { title: 'Quel capital souhaitez-vous réellement engager ?' },
        { title: 'Quel est votre horizon ?' },
        { title: 'Cherchez-vous du revenu, de l’appréciation ou les deux ?' },
        { title: 'Quel niveau de risque et d’illiquidité acceptez-vous ?' },
        { title: 'Quand aurez-vous besoin de récupérer votre capital ?' },
      ],
    },
    { type: 'p', text: 'Ensuite seulement viennent :' },
    {
      type: 'list',
      items: [
        'le marché ;',
        'le quartier ;',
        'la micro-localisation ;',
        'le projet ;',
        'l’unité ;',
        'le prix ;',
        'le payment plan ;',
        'et la stratégie de sortie.',
      ],
    },
    { type: 'p', text: 'Parce qu’un excellent projet peut être un mauvais investissement pour la mauvaise personne.' },

    // ── Combien devez-vous donc investir à Dubai ? ────────────────────────────
    { type: 'h2', text: 'Combien devez-vous donc investir à Dubai ?' },
    { type: 'p', text: 'La bonne réponse n’est pas un chiffre.' },
    { type: 'p', text: 'Elle est une allocation.' },
    { type: 'p', text: '100 000 € peuvent suffire pour commencer à construire une stratégie.' },
    { type: 'p', text: '250 000 € ouvrent davantage de choix.' },
    { type: 'p', text: '500 000 € permettent de réfléchir entre concentration et diversification.' },
    { type: 'p', text: '1 million d’euros permet de construire une véritable allocation immobilière.' },
    { type: 'p', text: 'Mais dans chaque cas, la même règle s’applique :' },
    {
      type: 'statement',
      text: 'Ne cherchez pas d’abord\nce que vous pouvez acheter.\nCherchez d’abord\nce que votre capital doit accomplir.',
    },

    // ── CTA (dans l’ordre de la copie fournie : après la conclusion, avant les sources) ───
    {
      type: 'ctaPanel',
      id: 'article_combien-faut-il-investir-dubai_cta',
      eyebrow: 'Votre stratégie',
      title: 'Quel investissement correspond réellement à votre capital ?',
      content: [
        { type: 'p', text: 'Deux investisseurs disposant du même budget ne devraient pas nécessairement acheter le même actif.' },
        { type: 'p', text: 'BF Properties analyse votre capital, votre horizon, votre objectif de rendement, votre besoin de liquidité et votre tolérance au risque avant de sélectionner les opportunités susceptibles de correspondre à votre stratégie.' },
      ],
      primary: { label: 'Définir mon projet', href: '/consultation' },
      secondary: { label: 'Découvrir notre approche', href: '/a-propos' },
    },
  ],

  sources: [
    {
      label: 'Dubai Land Department — Real Estate Data',
      url: 'https://dubailand.gov.ae/en/open-data/real-estate-data/',
    },
    {
      label: 'Dubai Land Department — Property Sale Registration',
      url: 'https://backoffice.dubailand.gov.ae/en/eservices/property-sale-registration/',
    },
    {
      label: 'Dubai Land Department — Table of Fees for Registration of Real Property Dispositions',
      url: 'https://dubailand.gov.ae/media/zrrd4qw4/en-legislation.pdf',
    },
    {
      label: 'Dubai Land Department — Q1 2026 real estate transactions',
      url: 'https://dubailand.gov.ae/en/news-media/dubai-s-real-estate-transactions-surge-31-to-reach-aed-252-billion-in-q1-2026/',
    },
    {
      label: 'CBRE — UAE Real Estate Market Review Q2 2026',
      url: 'https://www.cbre.ae/insights/figures/uae-real-estate-market-review-q2-2026',
    },
    {
      label: 'Knight Frank — Dubai US$10m+ Residential Sales Analysis Q2 2026',
      url: 'https://www.knightfrank.ae/newsroom/article/2026/7/dubai-us%24-10m-residential-sales-analysis-q2-2026',
    },
  ],

  disclaimer: [
    'Les informations présentées dans cet article sont fournies à titre informatif et ne constituent ni un conseil financier, juridique ou fiscal, ni une garantie de rendement ou d’appréciation.',
    'Les budgets en euros sont des catégories indicatives destinées à illustrer différentes stratégies d’allocation. Le montant effectivement disponible en AED dépend notamment du taux de change applicable au moment de l’investissement et des frais liés à la transaction.',
    'Les conditions de financement, payment plans, frais, charges, loyers, prix et performances varient selon le bien, le projet, le promoteur, la banque, la date et la situation de l’investisseur.',
    'Toute décision d’investissement doit être fondée sur l’analyse de l’actif concerné et de la situation de l’investisseur.',
  ],

  // The closing call to action is the supplied one (ctaPanel above): no second, generic band under the page.
  cta: false,
  related: ['investir-a-dubai', 'ou-investir-a-dubai'],
  links: [
    { label: 'Stratégies d’investissement', href: '/strategies' },
    { label: 'Investor Stories', href: '/investor-stories' },
    { label: 'Investir à Dubai', href: '/investir-a-dubai' },
  ],
};
