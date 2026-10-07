import type { Article } from '../articles';

/**
 * « Acheter un bien immobilier à Dubai en 2026 : le guide complet pour investir » (document « INSTRUCTION CLAUDE — ARTICLE PILIER SEO »).
 * FINAL COPY supplied by the editorial team: the text below is the supplied text, word for word. Nothing is summarised, shortened, reworded or added.
 * Only presentation is decided here: heading levels, blocks (figures, comparison, steps, FAQ), the BF method as a ten-step component, links, the closing
 * call to action. Headings and key sentences supplied in capitals are set in sentence case (proper names keep their capitals); a line cut after a colon
 * whose continuation starts in lower case is one sentence. The figure strips repeat figures that are written in the text next to them (nothing else).
 * The « Insérer / Créer ici un lien » lines of the copy are integration directives: they become the « À lire aussi » blocks (readMore), each leading to a
 * page that exists. Off-plan vs ready, financing, Golden Visa, risks, supply and resale have no page of their own yet: no link is made to them.
 * The supplied copy gives no category, date, cover or link targets: Guides / Investment, the day of integration, no cover picture, /consultation for
 * the primary button and /a-propos for the secondary one are used.
 */

export const ACHETER_BIEN_IMMOBILIER_DUBAI_2026: Article = {
  slug: 'acheter-bien-immobilier-dubai-2026',
  category: 'Guides',
  alsoIn: ['Investment'],
  title: 'Acheter un bien immobilier à Dubai en 2026 : le guide complet pour investir',
  seoTitle: 'Acheter un bien immobilier à Dubai en 2026 : le guide complet',
  description:
    'Comment acheter un appartement ou une villa à Dubai en 2026 ? Budget, frais DLD, off-plan, ready, financement, quartiers, rendement, risques et revente : le guide investisseur BF Properties.',
  published: '2026-10-07',

  body: [
    // ── Introduction (la copie n’a pas de titre avant la question finale : elle ouvre l’article) ───
    { type: 'p', lead: true, text: 'Acheter un bien immobilier à Dubai est relativement simple.' },
    { type: 'p', lead: true, text: 'Acheter le bon bien l’est beaucoup moins.' },
    {
      type: 'p',
      text: 'Un investisseur étranger peut accéder au marché, acheter dans les zones ouvertes à la propriété étrangère, investir sur un actif déjà livré ou sur plan, utiliser différents calendriers de paiement et, selon son profil et le bien concerné, recourir au financement.',
    },
    { type: 'p', text: 'Cette accessibilité est l’une des forces du marché.' },
    { type: 'p', text: 'Elle crée aussi son principal piège.' },
    { type: 'p', text: 'Parce qu’entre pouvoir acheter et savoir quoi acheter, il existe une différence considérable.' },
    {
      type: 'p',
      text: 'En 2026, Dubai n’est plus un marché où il suffit d’acheter « quelque part à Dubai » pour construire une stratégie.',
    },
    { type: 'p', text: 'Les quartiers n’évoluent pas au même rythme.' },
    { type: 'p', text: 'Les promoteurs n’exécutent pas de la même manière.' },
    { type: 'p', text: 'Deux projets voisins peuvent être valorisés différemment.' },
    {
      type: 'p',
      text: 'Et deux appartements situés dans le même projet peuvent produire des résultats très différents selon leur étage, leur vue, leur plan, leur prix d’entrée ou leur calendrier de paiement.',
    },
    { type: 'p', text: 'Ce guide ne cherche donc pas à vous montrer une liste de propriétés.' },
    { type: 'p', text: 'Il répond à une question plus importante :' },
    { type: 'statement', text: 'Comment acheter à Dubai comme un investisseur, et non simplement comme un acheteur ?' },

    // ── Peut-on acheter lorsque l’on est étranger ? ───────────────────────────
    {
      type: 'h2',
      text: 'Peut-on acheter un bien immobilier à Dubai lorsque l’on est étranger ?',
      short: 'Acheter lorsque l’on est étranger',
    },
    { type: 'p', text: 'Oui.' },
    {
      type: 'p',
      text: 'Dubai permet aux étrangers d’acquérir des biens dans les zones prévues pour la propriété étrangère, notamment les zones freehold.',
    },
    {
      type: 'p',
      text: 'Le Dubai Land Department accepte notamment un passeport valide pour l’identification d’un acheteur étranger non-résident dans le cadre de l’enregistrement d’une vente.',
    },
    { type: 'p', text: 'Il n’est donc pas nécessaire d’être citoyen émirati pour acheter un bien immobilier à Dubai.' },
    {
      type: 'p',
      text: 'Mais « pouvoir acheter à Dubai » ne signifie pas que chaque parcelle du territoire obéit exactement au même régime.',
    },
    {
      type: 'p',
      text: 'Avant toute acquisition, il faut vérifier le statut juridique du bien, le type de droit acquis et son enregistrement.',
    },

    // ── Freehold ──────────────────────────────────────────────────────────────
    { type: 'h2', text: 'Freehold : qu’achète-t-on exactement ?' },
    { type: 'p', text: 'Le terme freehold est omniprésent dans l’immobilier de Dubai.' },
    {
      type: 'p',
      text: 'Pour un investisseur, ce qui compte n’est pas simplement le mot utilisé dans une brochure commerciale.',
    },
    { type: 'p', text: 'Ce qui compte est ce qui sera juridiquement enregistré.' },
    { type: 'p', text: 'BF Properties recommande donc de vérifier :' },
    {
      type: 'list',
      items: [
        'l’identité exacte du propriétaire ou du promoteur ;',
        'la parcelle et le projet ;',
        'le statut du bien ;',
        'les documents contractuels ;',
        'l’enregistrement auprès du Dubai Land Department ;',
        'et, pour l’off-plan, l’enregistrement provisoire applicable.',
      ],
    },

    // ── Combien faut-il pour acheter à Dubai ? ────────────────────────────────
    { type: 'h2', text: 'Combien faut-il pour acheter à Dubai ?' },
    { type: 'p', text: 'Il n’existe pas un ticket d’entrée unique.' },
    { type: 'p', text: 'Le capital nécessaire dépend de quatre choses différentes :' },
    {
      type: 'list',
      ordered: true,
      items: [
        'le prix total du bien ;',
        'les frais liés à l’acquisition ;',
        'le montant exigé immédiatement ;',
        'le calendrier des paiements futurs.',
      ],
    },
    { type: 'p', text: 'C’est une distinction fondamentale.' },
    { type: 'statement', text: 'Prix du bien\n≠ capital immédiatement nécessaire\n≠ coût total de l’investissement.' },
    {
      type: 'p',
      text: 'Un investisseur disposant de 100 000 € ne raisonne pas comme un investisseur disposant de 500 000 €.',
    },
    { type: 'p', text: 'Mais le capital disponible ne détermine pas seulement la gamme de prix accessible.' },
    {
      type: 'p',
      text: 'Il influence aussi la stratégie : rendement, appréciation, ready, off-plan, concentration ou diversification.',
    },
    {
      type: 'readMore',
      items: [
        { title: 'Combien faut-il pour investir à Dubai en 2026 ?', href: '/insights/combien-faut-il-investir-dubai' },
      ],
    },

    // ── Les frais ─────────────────────────────────────────────────────────────
    { type: 'h2', text: 'Quels sont les frais pour acheter un bien à Dubai ?', short: 'Les frais pour acheter' },
    { type: 'p', text: 'Le prix affiché n’est jamais le seul chiffre à considérer.' },
    {
      type: 'p',
      text: 'Pour l’enregistrement d’une vente immobilière, le Dubai Land Department indique une commission correspondant à 4 % de la valeur de la transaction.',
    },
    { type: 'p', text: 'Le barème réglementaire prévoit une répartition de 2 % pour le vendeur et 2 % pour l’acheteur.' },
    {
      type: 'figures',
      items: [
        { value: '4', unit: '%', label: 'de la valeur de la transaction', note: 'Dubai Land Department' },
        { value: '2', unit: '%', label: 'pour le vendeur' },
        { value: '2', unit: '%', label: 'pour l’acheteur' },
      ],
      caption: 'Source : Dubai Land Department — Property Sale Registration',
    },
    {
      type: 'p',
      text: 'La répartition effectivement supportée doit néanmoins être vérifiée dans les documents contractuels de la transaction.',
    },
    { type: 'p', text: 'Le DLD indique également notamment :' },
    {
      type: 'list',
      items: [
        '250 AED pour l’émission du title deed ;',
        'certains frais de cartographie ;',
        '4 000 AED + TVA de frais de service partner lorsque la valeur de vente atteint au moins 500 000 AED ;',
        '2 000 AED + TVA lorsque la valeur est inférieure à 500 000 AED.',
      ],
    },
    { type: 'p', text: 'Selon la transaction, d’autres coûts peuvent également intervenir :' },
    {
      type: 'list',
      items: [
        'commission d’agence ;',
        'NOC ;',
        'frais bancaires ;',
        'valuation ;',
        'mortgage registration ;',
        'ameublement ;',
        'travaux ou fit-out ;',
        'service charges ;',
        'gestion locative.',
      ],
    },
    {
      type: 'p',
      text: 'Lorsqu’un mortgage est enregistré, le Dubai Land Department indique notamment des frais correspondant à 0,25 % de la valeur du financement.',
    },
    { type: 'p', text: 'L’investisseur doit donc calculer un coût d’acquisition all-in.' },
    { type: 'p', text: 'Pas simplement comparer deux prix affichés.' },

    // ── Ready ou off-plan ─────────────────────────────────────────────────────
    { type: 'h2', text: 'Ready ou off-plan : deux manières très différentes d’acheter', short: 'Ready ou off-plan' },
    { type: 'p', text: 'C’est l’un des arbitrages les plus importants du marché de Dubai.' },
    { type: 'h3', text: 'Acheter ready' },
    { type: 'p', text: 'Un bien ready existe déjà.' },
    { type: 'p', text: 'L’investisseur peut potentiellement :' },
    {
      type: 'list',
      items: [
        'visiter l’unité ;',
        'inspecter le bâtiment ;',
        'observer les parties communes ;',
        'analyser les transactions comparables ;',
        'étudier les loyers ;',
        'vérifier les charges ;',
        'et générer un revenu rapidement si l’actif est disponible à la location.',
      ],
    },
    { type: 'p', text: 'Le ready réduit une partie du risque d’exécution.' },
    { type: 'p', text: 'Mais il n’élimine pas le risque d’investissement.' },
    {
      type: 'p',
      text: 'Un immeuble vieillissant, un prix d’entrée excessif, des charges élevées ou une mauvaise micro-localisation peuvent transformer un actif livré en mauvais investissement.',
    },
    { type: 'h3', text: 'Acheter off-plan' },
    { type: 'p', text: 'L’off-plan consiste à acheter avant l’achèvement du bien.' },
    { type: 'p', text: 'Son intérêt peut être multiple :' },
    {
      type: 'list',
      items: [
        'accéder tôt à une nouvelle destination ;',
        'étaler les paiements ;',
        'sélectionner une unité avant que le stock ne se réduise ;',
        'se positionner sur une transformation urbaine future ;',
        'éventuellement bénéficier d’une appréciation avant ou après livraison.',
      ],
    },
    { type: 'p', text: 'Mais l’off-plan ajoute également plusieurs variables :' },
    {
      type: 'list',
      items: [
        'risque d’exécution ;',
        'calendrier de livraison ;',
        'future supply ;',
        'qualité finale ;',
        'prix payé par rapport au marché existant ;',
        'conditions de revente avant livraison ;',
        'capacité à honorer les échéances.',
      ],
    },
    { type: 'statement', text: 'Off-plan ne signifie pas automatiquement bonne affaire.' },
    { type: 'p', text: 'Le prix de la promesse doit rester cohérent avec la valeur que l’actif peut défendre.' },

    // ── Payment plan ──────────────────────────────────────────────────────────
    { type: 'h2', text: 'Comment fonctionne un payment plan ?' },
    { type: 'p', text: 'Un payment plan répartit le prix du bien dans le temps.' },
    {
      type: 'p',
      text: 'Une structure peut prévoir un dépôt initial puis plusieurs échéances liées au temps ou à l’avancement du projet.',
    },
    {
      type: 'p',
      text: 'L’avantage est évident : l’investisseur n’a pas nécessairement besoin de décaisser 100 % du prix au moment de la réservation.',
    },
    { type: 'p', text: 'Mais un payment plan n’est pas une remise.' },
    { type: 'p', text: 'Il modifie le timing du capital.' },
    { type: 'p', text: 'La vraie analyse consiste donc à regarder la courbe de décaissement :' },
    {
      type: 'list',
      items: [
        'Combien faut-il payer aujourd’hui ?',
        'Combien dans six mois ?',
        'Combien pendant la construction ?',
        'Combien à la livraison ?',
        'Et quelle part reste éventuellement après la livraison ?',
      ],
    },

    // ── Post-handover ─────────────────────────────────────────────────────────
    { type: 'h2', text: 'Post-handover : quand une partie du prix est payée après la livraison', short: 'Post-handover' },
    { type: 'p', text: 'Certains projets proposent un post-handover payment plan.' },
    { type: 'p', text: 'Une partie du prix continue alors à être payée après la remise des clés.' },
    { type: 'p', text: 'Prenons un exemple purement illustratif.' },
    {
      type: 'figures',
      columns: 2,
      items: [
        { value: '2 000 000', unit: 'AED', label: 'Prix du bien' },
        { value: '60/40', label: 'Structure' },
        { value: '1 200 000', unit: 'AED', label: 'sont payés jusqu’à la livraison' },
        { value: '800 000', unit: 'AED', label: 'restent à payer après le handover' },
      ],
    },
    {
      type: 'p',
      text: 'Si cette dernière partie est répartie sur quatre ans, cela représente environ 200 000 AED par an selon le calendrier contractuel exact.',
    },
    { type: 'p', text: 'L’intérêt est important.' },
    {
      type: 'p',
      text: 'Le bien peut potentiellement être exploité pendant que l’investisseur continue de payer le promoteur.',
    },
    { type: 'p', text: 'Les loyers peuvent donc contribuer au financement des échéances post-handover.' },
    { type: 'p', text: 'Mais il serait trompeur de dire :' },
    { type: 'quote', text: '« Le locataire paie votre appartement. »' },
    { type: 'p', text: 'Il faut intégrer :' },
    {
      type: 'list',
      items: [
        'le loyer réellement réalisable ;',
        'la vacance ;',
        'les service charges ;',
        'la gestion ;',
        'la maintenance ;',
        'l’ameublement éventuel ;',
        'et le calendrier exact des échéances.',
      ],
    },
    { type: 'p', text: 'Le post-handover améliore potentiellement la structure de trésorerie.' },
    { type: 'p', text: 'Il ne rend pas automatiquement le bien moins cher.' },
    {
      type: 'p',
      text: 'Si un appartement coûte 1,9 million AED avec un plan classique et qu’un actif comparable coûte 2,05 millions AED avec un post-handover très favorable, le second n’est pas automatiquement supérieur.',
    },
    {
      type: 'question',
      label: 'La question BF devient :',
      text: 'La valeur financière du paiement différé justifie-t-elle le premium payé à l’achat ?',
    },
    { type: 'p', text: 'Un excellent payment plan ne doit jamais servir à masquer un prix d’entrée excessif.' },

    // ── Financement bancaire et off-plan ──────────────────────────────────────
    {
      type: 'h2',
      text: 'Le financement bancaire commence aussi à s’étendre à l’off-plan',
      short: 'Le financement bancaire',
    },
    {
      type: 'p',
      text: 'Il faut également sortir d’une idée ancienne : acheter off-plan à Dubai ne signifie plus nécessairement que l’intégralité du prix doit être financée uniquement par les fonds propres de l’acheteur jusqu’à la livraison.',
    },
    {
      type: 'p',
      text: 'Dans certaines configurations, des projets off-plan peuvent être éligibles à un financement bancaire.',
    },
    {
      type: 'p',
      text: 'Le système du Dubai Land Department prévoit explicitement un mécanisme d’enregistrement d’une vente provisoire associée à un mortgage lorsque le financement est disponible pour l’acheteur.',
    },
    {
      type: 'p',
      text: 'Certains promoteurs travaillent également avec des établissements bancaires sur des projets ou des solutions de financement destinées à faciliter l’accès au crédit pour les acheteurs éligibles.',
    },
    { type: 'p', text: 'Cela peut modifier considérablement la manière de structurer un investissement.' },
    { type: 'p', text: 'L’investisseur peut, selon le projet et son profil, combiner :' },
    {
      type: 'list',
      items: [
        'son apport personnel ;',
        'les échéances prévues pendant la construction ;',
        'un financement bancaire ;',
        'et, sur certains projets, un payment plan continuant après la livraison.',
      ],
    },
    { type: 'p', text: 'Mais disponibilité du financement ne signifie pas obtention automatique.' },
    { type: 'p', text: 'L’éligibilité dépend notamment :' },
    {
      type: 'list',
      items: [
        'de la banque ;',
        'du projet ;',
        'du promoteur ;',
        'de l’avancement de la construction ;',
        'du profil de l’emprunteur ;',
        'de son statut de résidence ;',
        'de ses revenus ;',
        'des règles de crédit applicables.',
      ],
    },
    { type: 'p', text: 'Tous les projets off-plan ne sont donc pas finançables de la même manière.' },
    { type: 'p', text: 'Cette évolution ajoute une dimension importante à l’analyse BF :' },
    {
      type: 'quote',
      text: 'Il ne faut plus seulement comparer le prix des unités.\nIl faut aussi comparer la structure de financement disponible derrière chacune d’elles.',
    },
    {
      type: 'p',
      text: 'Un financement intéressant peut permettre de préserver davantage de liquidités ou de répartir différemment le capital.',
    },
    { type: 'p', text: 'Mais le principe reste le même :' },
    {
      type: 'statement',
      text: 'Le financement peut améliorer la structure d’un bon investissement.\nIl ne transforme pas un mauvais actif en bon investissement.',
    },

    // ── Achat d’un bien ready ─────────────────────────────────────────────────
    { type: 'h2', text: 'Comment se déroule l’achat d’un bien ready ?' },
    { type: 'p', text: 'Le processus exact dépend de la transaction, mais la logique générale est la suivante.' },
    { type: 'h3', text: '1. Définir la stratégie' },
    { type: 'p', text: 'Avant même de sélectionner une propriété :' },
    {
      type: 'list',
      items: [
        'capital ;',
        'horizon ;',
        'rendement recherché ;',
        'niveau de risque ;',
        'besoin de liquidité ;',
        'financement éventuel.',
      ],
    },
    { type: 'h3', text: '2. Sélectionner le marché puis l’unité' },
    { type: 'p', text: 'On descend progressivement :' },
    { type: 'p', text: 'Dubai → destination → micro-localisation → projet → bâtiment → unité.' },
    { type: 'p', text: 'Pas l’inverse.' },
    { type: 'h3', text: '3. Analyser les comparables' },
    {
      type: 'list',
      items: [
        'Prix réellement enregistrés.',
        'Loyers.',
        'Prix au sqft.',
        'Unités concurrentes.',
        'Historique du bâtiment.',
        'Charges.',
      ],
    },
    { type: 'h3', text: '4. Négocier et formaliser l’accord' },
    { type: 'p', text: 'Les conditions doivent être documentées et les parties correctement identifiées.' },
    { type: 'h3', text: '5. Réunir les éléments nécessaires au transfert' },
    {
      type: 'p',
      text: 'Pour une vente en zone freehold, le processus peut notamment nécessiter un e-NOC du développeur.',
    },
    { type: 'h3', text: '6. Enregistrer le transfert' },
    { type: 'p', text: 'Le transfert est enregistré auprès du Dubai Land Department via les canaux prévus.' },
    {
      type: 'p',
      text: 'Le DLD indique qu’un passeport valide peut être utilisé pour un acheteur étranger non-résident.',
    },
    { type: 'p', text: 'Le processus aboutit notamment à l’émission électronique du title deed.' },

    // ── Achat off-plan ────────────────────────────────────────────────────────
    { type: 'h2', text: 'Comment se déroule un achat off-plan ?' },
    { type: 'p', text: 'L’off-plan demande une logique différente.' },
    { type: 'h3', text: '1. Vérifier le promoteur et le projet' },
    {
      type: 'list',
      items: [
        'Qui développe ?',
        'Quel est son historique ?',
        'Quel est le statut du projet ?',
        'Comment les précédents projets ont-ils été exécutés ?',
      ],
    },
    { type: 'h3', text: '2. Comprendre précisément l’unité' },
    {
      type: 'list',
      items: [
        'Plan.',
        'Surface.',
        'Vue.',
        'Orientation.',
        'Étage.',
        'Position dans la tour.',
        'Parking.',
        'Spécifications.',
        'Date de livraison.',
      ],
    },
    { type: 'h3', text: '3. Comparer le prix' },
    { type: 'p', text: 'Le bon comparatif n’est pas simplement :' },
    { type: 'quote', text: '« Combien coûte le projet ? »' },
    { type: 'p', text: 'Il faut regarder :' },
    {
      type: 'list',
      items: [
        'prix au sqft ;',
        'marché ready voisin ;',
        'autres lancements ;',
        'premium demandé ;',
        'qualité attendue ;',
        'infrastructures futures.',
      ],
    },
    { type: 'h3', text: '4. Lire le payment plan comme un flux de trésorerie' },
    {
      type: 'p',
      text: 'Un 80/20, un 60/40 ou toute autre structure ne doit jamais être jugé uniquement parce qu’il paraît confortable.',
    },
    { type: 'p', text: 'Il faut mesurer quand chaque dirham sort du compte.' },
    { type: 'h3', text: '5. Comprendre les conditions de revente' },
    {
      type: 'p',
      text: 'La possibilité de céder un bien avant handover dépend notamment du contrat, du promoteur, de l’avancement des paiements et des procédures applicables.',
    },
    {
      type: 'p',
      text: 'Ne construisez jamais une stratégie qui suppose une revente rapide sans avoir compris ces conditions.',
    },

    // ── Où acheter à Dubai ? ──────────────────────────────────────────────────
    { type: 'h2', text: 'Où acheter à Dubai ?' },
    { type: 'p', text: 'C’est probablement la question la plus populaire.' },
    { type: 'p', text: 'Et celle à laquelle il faut le moins répondre par une simple liste.' },
    { type: 'p', text: 'Il n’existe pas de « meilleur quartier » universel.' },
    { type: 'p', text: 'Il existe des destinations adaptées à différentes thèses d’investissement.' },
    {
      type: 'list',
      items: [
        '[Dubai Creek Harbour](/quartiers/dubai-creek-harbour) peut être étudié sous l’angle de la transformation et de la future centralité.',
        '[Dubai Hills Estate](/quartiers/dubai-hills-estate) sous celui d’une master community déjà avancée, familiale et structurée.',
        '[Downtown Dubai](/quartiers/downtown-dubai) sous celui de la centralité, de l’iconicité et de la rareté.',
        '[City Walk](/quartiers/city-walk) sous celui du lifestyle, de la walkability et de la proximité du centre.',
        '[Mina Rashid](/quartiers/mina-rashid) sous celui de la transformation waterfront.',
        '[Palm Jebel Ali](/quartiers/palm-jebel-ali) sous celui de la création d’une nouvelle destination iconique.',
        '[Dubai Islands](/quartiers/dubai-islands) sous celui d’un nouvel écosystème beachfront.',
        '[The Oasis](/quartiers/the-oasis) sous celui de la villa ultra-premium, de l’eau, de la verdure et de la confidentialité.',
        '[Nad Al Sheba Gardens](/quartiers/nad-al-sheba-gardens) sous celui de la vie familiale, de la faible densité et de la proximité du centre.',
        '[Sobha Hartland II](/quartiers/sobha-hartland-ii) sous celui d’un produit résidentiel premium articulé autour de l’eau et d’une localisation centrale.',
      ],
    },
    { type: 'p', text: 'Mais ces histoires d’investissement ne remplacent jamais l’analyse du prix.' },
    { type: 'quote', text: 'Une excellente destination peut contenir un mauvais deal.' },
    {
      type: 'readMore',
      items: [
        { title: 'Quartiers de Dubai pour investir', href: '/quartiers' },
        { title: 'Où investir à Dubai en 2026 ? Les quartiers selon votre stratégie', href: '/insights/ou-investir-a-dubai' },
      ],
    },

    // ── Rendement locatif ─────────────────────────────────────────────────────
    { type: 'h2', text: 'Quel rendement locatif peut-on obtenir ?' },
    { type: 'p', text: 'La mauvaise réponse serait :' },
    { type: 'quote', text: '« Dubai rapporte 8 %. »' },
    { type: 'p', text: 'Dubai n’est pas un actif.' },
    { type: 'p', text: 'Le rendement dépend :' },
    {
      type: 'list',
      items: [
        'du quartier ;',
        'du bâtiment ;',
        'de l’unité ;',
        'du prix payé ;',
        'du loyer ;',
        'des charges ;',
        'de la vacance ;',
        'de la gestion.',
      ],
    },
    { type: 'p', text: 'Il faut distinguer trois choses.' },
    {
      type: 'compare',
      columns: [
        { title: 'Gross yield', points: ['Loyer annuel / prix d’achat.'] },
        { title: 'Net yield', points: ['Revenu restant après les coûts retenus dans le calcul.'] },
        { title: 'Total return', points: ['Revenus + évolution de la valeur du capital – coûts pertinents.'] },
      ],
    },
    { type: 'p', text: 'Un actif à 8 % brut n’est pas automatiquement supérieur à un actif à 6 %.' },
    { type: 'p', text: 'Le premier peut maximiser le cash-flow.' },
    { type: 'p', text: 'Le second peut offrir davantage de rareté, de liquidité ou d’appréciation.' },
    { type: 'p', text: 'Le rendement doit être cohérent avec la stratégie.' },
    {
      type: 'readMore',
      items: [
        { title: 'Rendement locatif à Dubai en 2026 : combien rapporte réellement un investissement ?', href: '/insights/rendement-locatif-dubai-2026' },
        { title: 'Les quartiers les plus demandés à la location à Dubai en 2026 : ce que les contrats Ejari révèlent sur l’économie de la ville', href: '/insights/quartiers-les-plus-demandes-location-dubai' },
      ],
    },

    // ── Un appartement trop cher ? ────────────────────────────────────────────
    { type: 'h2', text: 'Comment savoir si un appartement est trop cher ?' },
    { type: 'p', text: 'Le prix absolu ne suffit pas.' },
    { type: 'p', text: 'Un appartement à 3 millions AED peut être correctement valorisé.' },
    { type: 'p', text: 'Un appartement à 1 million AED peut être surpayé.' },
    { type: 'p', text: 'BF analyse notamment :' },
    {
      type: 'list',
      items: [
        'prix au sqft ;',
        'transactions comparables ;',
        'premium off-plan ;',
        'étage ;',
        'vue ;',
        'orientation ;',
        'efficacité du plan ;',
        'taille ;',
        'qualité du promoteur ;',
        'payment plan ;',
        'future supply ;',
        'marché locatif ;',
        'marché secondaire.',
      ],
    },
    { type: 'p', text: 'Le prix doit être analysé relativement à ce que l’on reçoit.' },
    {
      type: 'p',
      text: 'Un payment plan généreux, un lobby spectaculaire ou une campagne marketing internationale ne justifient pas n’importe quel premium.',
    },

    // ── Quel promoteur choisir ? ──────────────────────────────────────────────
    { type: 'h2', text: 'Quel promoteur choisir ?' },
    { type: 'p', text: 'Le nom du promoteur compte.' },
    { type: 'p', text: 'Mais il ne doit jamais remplacer l’analyse.' },
    { type: 'p', text: 'Un grand promoteur peut offrir :' },
    {
      type: 'list',
      items: [
        'historique d’exécution ;',
        'capacité financière ;',
        'qualité du master planning ;',
        'image de marque ;',
        'profondeur du marché secondaire.',
      ],
    },
    {
      type: 'p',
      text: 'Un acteur plus récent peut parfois proposer un produit intéressant ou une meilleure équation de prix.',
    },
    { type: 'p', text: 'La question BF n’est donc pas :' },
    { type: 'quote', text: '« Quel est le meilleur promoteur de Dubai ? »' },
    { type: 'p', text: 'Elle est :' },
    { type: 'quote', text: '« Qu’est-ce que j’achète lorsque j’achète ce projet précis chez ce développeur précis ? »' },
    { type: 'p', text: 'Deux projets du même développeur peuvent répondre à des stratégies totalement différentes.' },
    {
      type: 'p',
      text: 'Et au sein du même projet, deux unités peuvent également produire des résultats très différents.',
    },
    {
      type: 'readMore',
      items: [
        { title: 'Développeurs immobiliers à Dubai : comprendre les principaux acteurs', href: '/insights/developers' },
      ],
    },

    // ── Service charges ───────────────────────────────────────────────────────
    { type: 'h2', text: 'Les service charges : le coût qui peut transformer le rendement', short: 'Les service charges' },
    { type: 'p', text: 'Le propriétaire ne conserve pas l’intégralité du loyer.' },
    {
      type: 'p',
      text: 'Dans les jointly-owned properties, les service charges contribuent notamment à l’exploitation, la maintenance et la gestion des parties communes.',
    },
    {
      type: 'p',
      text: 'Le Dubai Land Department propose un Service Charge Index permettant de consulter les charges approuvées pour les projets concernés.',
    },
    { type: 'p', text: 'Avant d’acheter pour louer, il faut donc demander :' },
    {
      type: 'list',
      items: [
        'Quel est le loyer réaliste ?',
        'Quelles sont les charges ?',
        'Quelle maintenance prévoir ?',
        'Quelle vacance modéliser ?',
        'Quel coût de gestion ?',
      ],
    },
    {
      type: 'p',
      text: 'Un rendement brut séduisant peut devenir beaucoup moins impressionnant une fois les coûts d’exploitation intégrés.',
    },

    // ── Sur-offre ─────────────────────────────────────────────────────────────
    {
      type: 'h2',
      text: 'Dubai construit beaucoup : faut-il craindre la sur-offre ?',
      short: 'Faut-il craindre la sur-offre ?',
    },
    { type: 'p', text: 'Il faut la surveiller.' },
    { type: 'p', text: 'Mais il ne faut pas en tirer la conclusion simpliste que tout Dubai sera en sur-offre.' },
    { type: 'p', text: 'La supply doit être étudiée localement.' },
    {
      type: 'list',
      items: [
        'Combien de nouvelles unités arrivent dans la même zone ?',
        'Sur quelles typologies ?',
        'À quel prix ?',
        'Pour quelle clientèle ?',
        'Avec quelle qualité ?',
      ],
    },
    {
      type: 'p',
      text: 'Un marché peut connaître une forte livraison globale tout en maintenant une rareté sur certaines catégories d’actifs.',
    },
    {
      type: 'p',
      text: 'À l’inverse, un quartier populaire peut subir une concurrence importante si des milliers d’unités interchangeables arrivent simultanément.',
    },
    { type: 'p', text: 'La bonne question n’est donc pas :' },
    { type: 'quote', text: '« Combien Dubai construit-il ? »' },
    { type: 'p', text: 'Mais :' },
    {
      type: 'quote',
      text: '« Combien de concurrents directs mon unité aura-t-elle au moment où je voudrai louer ou vendre ? »',
    },

    // ── Revente ───────────────────────────────────────────────────────────────
    { type: 'h2', text: 'Comment penser la revente avant même d’acheter ?', short: 'Penser la revente avant d’acheter' },
    { type: 'p', text: 'C’est l’une des disciplines les plus importantes.' },
    { type: 'p', text: 'Avant d’acheter, BF pose une question :' },
    { type: 'statement', text: 'Qui sera l’acheteur suivant ?' },
    {
      type: 'list',
      items: [
        'Un investisseur recherchant du rendement ?',
        'Un résident ?',
        'Une famille ?',
        'Un acheteur international ?',
        'Un acquéreur prime ?',
        'Un propriétaire occupant ?',
      ],
    },
    {
      type: 'p',
      text: 'Plus l’actif possède plusieurs sources crédibles de demande, plus sa liquidité potentielle peut être intéressante.',
    },
    { type: 'p', text: 'La stratégie de sortie commence donc au moment de l’entrée.' },

    // ── Golden Visa ───────────────────────────────────────────────────────────
    { type: 'h2', text: 'Faut-il acheter pour obtenir un Golden Visa ?', short: 'Golden Visa' },
    {
      type: 'p',
      text: 'Le statut de résidence peut constituer un avantage associé à une stratégie immobilière éligible.',
    },
    { type: 'p', text: 'Mais il ne devrait pas transformer la logique de l’investissement.' },
    {
      type: 'p',
      text: 'Un investisseur ne devrait jamais surpayer un actif simplement pour atteindre un seuil administratif.',
    },
    { type: 'p', text: 'Le bien doit rester défendable comme investissement indépendamment de l’avantage de résidence.' },
    {
      type: 'p',
      text: 'Les critères de visa pouvant évoluer et dépendre de la situation du demandeur, les conditions officielles applicables doivent être vérifiées au moment de la demande.',
    },

    // ── Les 10 erreurs ────────────────────────────────────────────────────────
    { type: 'h2', text: 'Les 10 erreurs que nous voyons le plus souvent' },
    {
      type: 'method',
      steps: [
        { title: 'Acheter un quartier au lieu d’acheter une unité.' },
        { title: 'Confondre payment plan et réduction de prix.' },
        { title: 'Regarder le rendement brut sans les charges.' },
        { title: 'Acheter off-plan sans comparer le ready market voisin.' },
        { title: 'Supposer qu’un grand promoteur rend chaque projet intéressant.' },
        { title: 'Choisir uniquement selon le prix au sqft sans comprendre le produit.' },
        { title: 'Ignorer la future supply.' },
        { title: 'Construire un investissement sur une revente rapide non garantie.' },
        { title: 'Utiliser tout son cash pour le dépôt sans modéliser les échéances futures.' },
        { title: 'Réfléchir à la sortie après l’achat au lieu d’avant.' },
      ],
    },

    // ── Le marché en 2026 ─────────────────────────────────────────────────────
    { type: 'h2', text: 'Le marché de Dubai en 2026 : actif, mais plus exigeant', short: 'Le marché en 2026' },
    {
      type: 'p',
      text: 'Au premier trimestre 2026, le Dubai Land Department a enregistré 60 303 transactions immobilières.',
    },
    { type: 'p', text: 'Cela représente une progression de 6 % sur un an.' },
    {
      type: 'p',
      text: 'La valeur totale des transactions immobilières a atteint 252 milliards AED, en progression de 31 %.',
    },
    { type: 'p', text: 'Les investissements immobiliers ont représenté 173 milliards AED, en hausse de 22 %.' },
    {
      type: 'p',
      text: 'Le DLD a également recensé 48 448 investisseurs sur le trimestre, dont 29 312 nouveaux investisseurs.',
    },
    {
      type: 'figures',
      items: [
        { value: '60 303', label: 'transactions immobilières', note: 'progression de 6 % sur un an' },
        { value: '252', unit: 'milliards AED', label: 'valeur totale des transactions immobilières', note: 'en progression de 31 %' },
        { value: '173', unit: 'milliards AED', label: 'investissements immobiliers', note: 'en hausse de 22 %' },
        { value: '48 448', label: 'investisseurs', note: 'dont 29 312 nouveaux investisseurs' },
      ],
      caption: 'Source : Dubai Land Department — Q1 2026 Real Estate Market',
    },
    { type: 'p', text: 'Ces chiffres montrent l’ampleur du marché.' },
    { type: 'p', text: 'Ils ne garantissent pas la performance d’un actif individuel.' },
    { type: 'p', text: 'Plus un marché grandit, plus la capacité à distinguer les produits devient importante.' },
    { type: 'p', text: 'Le prochain cycle de création de valeur ne viendra probablement pas simplement de la phrase :' },
    { type: 'quote', text: '« J’ai acheté à Dubai. »' },
    { type: 'p', text: 'Il viendra davantage de :' },
    { type: 'statement', text: '« J’ai acheté le bon actif, au bon prix, pour la bonne demande. »' },

    // ── La méthode BF Properties ──────────────────────────────────────────────
    { type: 'h2', text: 'La méthode BF Properties' },
    {
      type: 'method',
      dark: true,
      steps: [
        { title: 'Investisseur', text: 'Capital, horizon, objectifs, contraintes et liquidité.' },
        { title: 'Marché', text: 'Cycle, demande, supply, infrastructures et activité économique.' },
        { title: 'Destination', text: 'Pourquoi les gens voudront-ils vivre, travailler ou investir ici ?' },
        { title: 'Micro-localisation', text: 'Accès, nuisances, vue et environnement immédiat.' },
        { title: 'Projet', text: 'Promoteur, produit, exécution, prix et concurrence.' },
        { title: 'Unité', text: 'Étage, orientation, plan, surface et rareté.' },
        { title: 'Prix', text: 'Comparables, prix au sqft, premium et coûts.' },
        { title: 'Financement', text: 'Cash, payment plan, mortgage et post-handover.' },
        { title: 'Exploitation', text: 'Loyer, charges, vacance et gestion.' },
        { title: 'Sortie', text: 'Qui rachètera cet actif et pourquoi ?' },
      ],
    },
    { type: 'p', text: 'C’est seulement après cette analyse que la sélection commence.' },

    // ── FAQ ───────────────────────────────────────────────────────────────────
    { type: 'h2', text: 'FAQ' },
    {
      type: 'faq',
      items: [
        {
          q: 'Un Français peut-il acheter un appartement à Dubai ?',
          a: [
            'Oui. Un étranger peut acheter dans les zones ouvertes à la propriété étrangère. Le DLD accepte notamment un passeport valide pour l’identification d’un acheteur étranger non-résident lors d’une vente.',
          ],
        },
        {
          q: 'Faut-il vivre aux Émirats pour acheter ?',
          a: [
            'Non pour l’enregistrement d’une vente. Le DLD prévoit explicitement le cas des acheteurs étrangers non-résidents.',
          ],
        },
        {
          q: 'Quel est le principal frais DLD lors d’une vente ?',
          a: [
            'Le barème du Dubai Land Department prévoit une commission d’enregistrement totale correspondant à 4 % de la valeur de vente, avec une répartition réglementaire de 2 % vendeur et 2 % acheteur. La répartition effectivement supportée doit être vérifiée contractuellement.',
          ],
        },
        {
          q: 'Peut-on acheter off-plan avec un crédit ?',
          a: [
            'Des mécanismes de financement existent dans certaines configurations. Le DLD prévoit notamment l’enregistrement d’une vente provisoire associée à un mortgage lorsque le financement est disponible. L’éligibilité reste spécifique au projet, à la banque et à l’emprunteur.',
          ],
        },
        {
          q: 'Un payment plan signifie-t-il que le bien coûte moins cher ?',
          a: [
            'Non.',
            'Il modifie principalement le calendrier des décaissements.',
            'Il faut toujours comparer le prix total du bien aux actifs concurrents.',
          ],
        },
        {
          q: 'Peut-on louer pendant un post-handover ?',
          a: [
            'Lorsque le bien est livré et peut légalement être exploité, il peut potentiellement générer des loyers alors que des échéances restent dues au promoteur, selon les conditions contractuelles.',
          ],
        },
        {
          q: 'Quel est le meilleur quartier pour investir ?',
          a: [
            'Il n’existe pas de réponse universelle.',
            'Le choix dépend notamment du budget, de l’horizon, du rendement recherché, du profil de risque et de la stratégie de sortie.',
          ],
        },
        {
          q: 'Faut-il privilégier le rendement ou l’appréciation ?',
          a: [
            'Cela dépend de l’objectif.',
            'BF analyse le rendement locatif, la préservation du capital, le potentiel d’appréciation et la liquidité comme différents moteurs de performance.',
          ],
        },
      ],
    },

    // ── Conclusion ────────────────────────────────────────────────────────────
    { type: 'h2', text: 'Conclusion' },
    { type: 'p', text: 'Acheter à Dubai est devenu accessible à une clientèle internationale.' },
    { type: 'p', text: 'C’est une force.' },
    {
      type: 'p',
      text: 'Mais l’accessibilité du marché ne doit pas être confondue avec la simplicité de l’investissement.',
    },
    { type: 'p', text: 'Un bon achat ne se résume pas à :' },
    {
      type: 'list',
      items: [
        'un beau projet ;',
        'un grand promoteur ;',
        'un rendement annoncé ;',
        'un payment plan confortable ;',
        'ou un quartier à la mode.',
      ],
    },
    { type: 'p', text: 'Il résulte d’une chaîne de décisions cohérentes.' },
    {
      type: 'list',
      items: [
        'Le bon marché.',
        'La bonne destination.',
        'La bonne micro-localisation.',
        'Le bon projet.',
        'La bonne unité.',
        'Le bon prix.',
        'La bonne structure de financement.',
        'Et une sortie pensée avant l’entrée.',
      ],
    },
    { type: 'p', text: 'Chez BF Properties, nous ne commençons donc pas par vous montrer des propriétés.' },
    { type: 'p', text: 'Nous commençons par comprendre ce que votre capital doit accomplir.' },

    // ── CTA (après la conclusion, avant les sources) ──────────────────────────
    {
      type: 'ctaPanel',
      id: 'article_acheter-bien-immobilier-dubai-2026_cta',
      eyebrow: 'Votre stratégie avant votre propriété',
      title: 'Vous envisagez d’acheter à Dubai ?',
      content: [
        { type: 'p', text: 'BF Properties construit votre stratégie avant de sélectionner les opportunités : budget, horizon, rendement, destination, projet, unité, financement et stratégie de sortie.' },
        { type: 'p', text: 'Notre rôle n’est pas de vous montrer le plus de propriétés possible.' },
        { type: 'p', text: 'Notre rôle est de réduire le nombre de propriétés qui méritent réellement votre attention.' },
      ],
      primary: { label: 'Définir mon projet', href: '/consultation' },
      secondary: { label: 'Découvrir notre approche', href: '/a-propos' },
    },
  ],

  sources: [
    {
      label: 'Dubai Land Department — Property Sale Registration',
      url: 'https://dubailand.gov.ae/en/eservices/property-sale-registration/',
    },
    {
      label: 'Dubai Land Department — Sale associated with an initial mortgage',
      url: 'https://dubailand.gov.ae/en/eservices/a-sale-registration-application-associated-with-an-initial-mortgage/',
    },
    {
      label: 'Dubai Land Department — Mortgage Registration',
      url: 'https://dubailand.gov.ae/en/eservices/request-for-mortgage-registration',
    },
    {
      label: 'Dubai Land Department — Real Estate Data',
      url: 'https://dubailand.gov.ae/en/open-data/real-estate-data/',
    },
    {
      label: 'Dubai Land Department — Q1 2026 Real Estate Market',
      url: 'https://dubailand.gov.ae/en/news-media/dubai-s-real-estate-transactions-surge-31-to-reach-aed-252-billion-in-q1-2026/',
    },
    {
      label: 'Dubai Land Department — Service Charge Index',
      url: 'https://dubailand.gov.ae/en/eservices/service-charge-index-overview/',
    },
  ],

  disclaimer: [
    'Les informations présentées dans cet article sont fournies à titre informatif et ne constituent ni un conseil financier, juridique ou fiscal, ni une garantie de rendement, de financement, de visa ou d’appréciation.',
    'Les règles, frais, conditions de financement, payment plans et procédures peuvent évoluer ou varier selon le projet, la banque, le promoteur et la situation de l’investisseur.',
    'Les performances passées ne préjugent pas des performances futures.',
    'Toute acquisition doit faire l’objet d’une vérification des documents contractuels, des données applicables au bien concerné et, lorsque nécessaire, d’un conseil juridique, fiscal ou financier adapté à la situation de l’investisseur.',
  ],

  // The closing call to action is the supplied one (ctaPanel above): no second, generic band under the page.
  cta: false,
  related: ['combien-faut-il-investir-dubai', 'rendement-locatif-dubai-2026', 'ou-investir-a-dubai', 'quartiers-les-plus-demandes-location-dubai'],
  links: [
    { label: 'Stratégies d’investissement', href: '/strategies' },
    { label: 'Quartiers', href: '/quartiers' },
    { label: 'Développeurs', href: '/insights/developers' },
    { label: 'Investir à Dubai', href: '/investir-a-dubai' },
  ],
};
