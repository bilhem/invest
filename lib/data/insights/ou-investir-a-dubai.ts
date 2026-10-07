import type { Article } from '../articles';

/**
 * ARTICLE 02 — « Où investir à Dubai en 2026 ? Les quartiers selon votre stratégie »
 * FINAL COPY supplied by the editorial team (BF-Properties-Article-02): the text below is the supplied text, word for word.
 * Nothing is summarised, shortened, reworded or added. Only presentation is decided here: heading levels, blocks, images, links.
 * Headings supplied in capitals are set in sentence case (proper names keep their capitals); section numbers are drawn from `num`.
 * Every internal link points to a route that exists.
 */

const Q = 'La question BF';

export const OU_INVESTIR_A_DUBAI: Article = {
  slug: 'ou-investir-a-dubai',
  category: 'Investment',
  alsoIn: ['Areas'],
  title: 'Où investir à Dubai en 2026 ? Les quartiers selon votre stratégie',
  description:
    'Downtown, Dubai Hills, Creek Harbour, City Walk, Palm Jebel Ali ou zones émergentes : comment choisir un quartier à Dubai selon votre stratégie d’investissement.',
  published: '2026-10-07',
  image: 'area-downtown-dubai',

  body: [
    // ── Introduction ─────────────────────────────────────────────────────────────
    { type: 'h2', kicker: 'Introduction', text: 'Le « meilleur quartier » n’existe pas', short: 'Introduction' },
    { type: 'p', lead: true, text: 'Quel est le meilleur quartier pour investir à Dubai ?' },
    { type: 'p', lead: true, text: 'La question paraît logique. Elle est pourtant mal posée.' },
    {
      type: 'p',
      text: 'Un quartier peut être excellent pour un investisseur qui recherche une appréciation du capital sur cinq à sept ans et beaucoup moins adapté à quelqu’un qui souhaite produire immédiatement du revenu locatif.',
    },
    {
      type: 'p',
      text: 'Une communauté familiale peut disposer d’une demande résidentielle profonde mais offrir une dynamique différente d’un marché d’appartements urbains. Une destination en construction peut offrir davantage de potentiel de transformation mais également davantage d’incertitude. Une adresse iconique peut offrir une excellente profondeur de marché, tout en étant déjà valorisée à un niveau qui réduit le potentiel d’appréciation de certaines unités.',
    },
    { type: 'statement', text: 'Et surtout : un bon quartier n’empêche jamais d’acheter un mauvais actif.' },
    { type: 'p', text: 'Chez BF Properties, nous ne cherchons donc pas à produire un classement de Dubai de 1 à 10.' },
    { type: 'p', text: 'Nous cherchons à répondre à une autre question :' },
    {
      type: 'statement',
      text: '« Quelle destination possède les caractéristiques les plus cohérentes avec la stratégie de cet investisseur — et à quel prix peut-on y entrer ? »',
    },
    {
      type: 'p',
      text: 'Choisir un quartier, c’est choisir une combinaison de demande, maturité, rareté, supply, connectivité, produit, prix et horizon.',
    },

    // ── Le marché ────────────────────────────────────────────────────────────────
    { type: 'h2', text: 'Le marché est assez profond pour exiger une vraie sélection' },
    {
      type: 'p',
      text: 'Au premier trimestre 2026, le Dubai Land Department a enregistré 60 303 transactions immobilières, pour une valeur totale de 252 milliards AED. Le nombre de transactions progressait de 6 % sur un an et leur valeur de 31 %.',
    },
    {
      type: 'p',
      text: 'Le DLD recensait 48 448 investisseurs sur le trimestre, dont 29 312 nouveaux investisseurs. Les investissements étrangers représentaient 148,35 milliards AED.',
    },
    {
      type: 'p',
      text: 'Le marché locatif est lui aussi profond : sur l’ensemble de 2025, 1,38 million de contrats locatifs ont été enregistrés pour 126,4 milliards AED.',
    },
    {
      type: 'figures',
      items: [
        { value: '60 303', label: 'transactions immobilières au premier trimestre 2026', note: '+ 6 % sur un an' },
        { value: '252', unit: 'milliards AED', label: 'valeur totale des transactions', note: '+ 31 % sur un an' },
        { value: '1,38', unit: 'million', label: 'contrats locatifs enregistrés sur l’ensemble de 2025', note: '126,4 milliards AED' },
      ],
      caption: 'Source : Dubai Land Department.',
    },
    { type: 'p', text: 'Mais un chiffre à l’échelle de Dubai ne dit presque rien sur la performance future d’un appartement précis.' },
    {
      type: 'p',
      text: 'À mesure que le marché grandit, l’investisseur doit raisonner de moins en moins en « Dubai » et de plus en plus en sous-marché, puis communauté, micro-localisation, projet et unité.',
    },

    // ── 1 — Commencer par la stratégie ───────────────────────────────────────────
    { type: 'h2', num: 1, text: 'Commencer par la stratégie, pas par le quartier' },
    { type: 'h3', text: 'Capital appreciation' },
    {
      type: 'p',
      text: 'L’investisseur cherche principalement une augmentation de valeur. Il accepte parfois plusieurs années sans revenu locatif, une destination encore en transformation, davantage d’incertitude et un horizon de détention plus long.',
    },
    {
      type: 'p',
      text: 'En échange, il recherche un point d’entrée lui permettant de bénéficier de la maturation d’une destination, d’un changement d’infrastructure, d’une amélioration de la demande ou d’une rareté future.',
    },
    { type: 'h3', text: 'Rental income' },
    { type: 'p', text: 'L’investisseur veut que son capital produise du revenu.' },
    {
      type: 'p',
      text: 'Il s’intéresse davantage aux loyers réellement atteignables, à la demande locative, aux charges, à la vacance, au ticket d’entrée et au rapport entre prix d’achat et revenu.',
    },
    { type: 'h3', text: 'Liquidité et flexibilité' },
    {
      type: 'p',
      text: 'L’investisseur ne recherche pas nécessairement le rendement maximal. Il veut un actif compréhensible, situé dans un marché suffisamment profond, avec une base potentielle d’acheteurs et de locataires importante.',
    },
    { type: 'h3', text: 'Villa / family living' },
    {
      type: 'p',
      text: 'La surface, les écoles, la verdure, l’intimité, les équipements, les temps de trajet et la qualité de vie prennent davantage de poids.',
    },
    { type: 'h3', text: 'Transformation / emerging area' },
    {
      type: 'p',
      text: 'L’investisseur accepte d’entrer dans un marché moins mature parce qu’il pense qu’un changement structurel peut modifier sa perception et sa valeur.',
    },
    { type: 'statement', text: 'Mais « émergent » ne signifie jamais automatiquement « sous-évalué ».' },

    // ── 2 — Downtown Dubai ───────────────────────────────────────────────────────
    { type: 'h2', num: 2, text: 'Downtown Dubai : acheter une centralité déjà établie', short: 'Downtown Dubai' },
    { type: 'image', slot: 'area-downtown-dubai', ratio: 'wide' },
    {
      type: 'p',
      text: '[Downtown](/quartiers/downtown-dubai) est probablement l’exemple parfait d’un marché que l’on ne devrait pas analyser uniquement à travers la question : « Est-ce que le quartier va se développer ? »',
    },
    { type: 'p', text: 'Le quartier existe déjà. Son identité est mondiale.' },
    {
      type: 'p',
      text: 'Burj Khalifa, Dubai Mall, hospitality, bureaux, résidences, tourisme et proximité avec Business Bay et DIFC lui donnent une profondeur difficile à reproduire.',
    },
    {
      type: 'p',
      text: 'Knight Frank indiquait au premier trimestre 2026 un prix résidentiel moyen d’environ 3 010 AED/sqft pour Downtown Dubai, en progression de 4 % sur un an.',
    },
    { type: 'statement', text: 'Downtown n’est pas une histoire de découverte. C’est une histoire de sélection.' },
    {
      type: 'p',
      text: 'Dans un quartier déjà reconnu, l’investisseur doit davantage se demander : quel bâtiment ? Quelle partie de Downtown ? Quelle vue ? Quel étage ? Quel âge du bâtiment ? Quelle qualité de gestion ? Quel prix au sqft ? Quel niveau de service charges ? Quel produit concurrent existe autour ? Quelle prime paie-t-on pour du neuf ?',
    },
    { type: 'p', text: 'Le simple fait d’acheter « Downtown » n’est pas une stratégie.' },
    { type: 'p', text: 'À Downtown, quelques centaines de mètres peuvent profondément modifier l’expérience résidentielle et l’investissement.' },
    {
      type: 'question',
      label: Q,
      text: '« Est-ce que l’actif mérite son prix dans un quartier où la valeur de l’adresse est déjà largement reconnue ? »',
    },

    // ── 3 — Dubai Hills Estate ───────────────────────────────────────────────────
    { type: 'h2', num: 3, text: 'Dubai Hills Estate : la force d’une communauté qui fonctionne déjà', short: 'Dubai Hills Estate' },
    { type: 'image', slot: 'area-dubai-hills-estate', ratio: 'wide' },
    { type: 'p', text: '[Dubai Hills](/quartiers/dubai-hills-estate) raconte une histoire différente.' },
    { type: 'p', text: 'C’est une communauté pensée autour de la vie résidentielle : parc, golf, retail, écoles, résidences, villas et appartements.' },
    { type: 'p', text: 'Cette diversité crée plusieurs moteurs de demande.' },
    {
      type: 'p',
      text: 'Une famille qui souhaite s’installer à Dubai regarde aussi les écoles, les espaces verts, le nombre de chambres, le temps de trajet, les commerces et la qualité du quotidien.',
    },
    { type: 'p', text: 'Mais la maturité apporte un autre problème : les écarts de valorisation internes deviennent importants.' },
    {
      type: 'p',
      text: 'Un appartement près du parc, un produit face au golf, une villa et un actif situé à la périphérie de la communauté ne racontent pas la même histoire.',
    },
    { type: 'p', text: 'La question n’est donc plus : « Dubai Hills est-il un bon quartier ? »' },
    {
      type: 'p',
      text: 'Elle devient : « Quel produit, dans quelle partie de Dubai Hills, conserve encore un rapport intéressant entre qualité, demande et prix ? »',
    },
    {
      type: 'p',
      text: 'Le segment haut de gamme illustre aussi la profondeur de la demande premium à Dubai. Knight Frank recensait 296 ventes résidentielles supérieures à 10 millions de dollars sur l’ensemble de Dubai au premier semestre 2026, pour 5,1 milliards de dollars.',
    },
    {
      type: 'p',
      text: 'Cela ne signifie évidemment pas que tout produit premium est un bon investissement. Cela montre qu’il existe une profondeur réelle sur le haut du marché.',
    },
    { type: 'question', label: Q, text: '« Dans une communauté déjà désirable, où reste-t-il suffisamment de valeur pour l’investisseur ? »' },

    // ── 4 — Dubai Creek Harbour ──────────────────────────────────────────────────
    { type: 'h2', num: 4, text: 'Dubai Creek Harbour : une destination réelle dont l’histoire n’est pas terminée', short: 'Dubai Creek Harbour' },
    { type: 'image', slot: 'area-dubai-creek-harbour', ratio: 'wide' },
    { type: 'p', text: '[Creek Harbour](/quartiers/dubai-creek-harbour) occupe une position intéressante entre deux mondes.' },
    {
      type: 'p',
      text: 'Ce n’est plus uniquement un masterplan sur une brochure. Des immeubles sont livrés, des habitants vivent déjà dans la communauté, le waterfront existe et des espaces publics fonctionnent.',
    },
    { type: 'p', text: 'Mais la destination n’a pas encore atteint sa forme définitive.' },
    { type: 'p', text: 'Cette combinaison peut intéresser un investisseur en capital appreciation.' },
    {
      type: 'p',
      text: 'Il ne parie pas uniquement sur quelque chose qui n’existe pas. Il achète dans une destination déjà observable, tout en acceptant que plusieurs éléments futurs puissent modifier son niveau de centralité, sa fréquentation et sa perception.',
    },
    { type: 'p', text: 'Mais transformation ne veut pas dire appréciation automatique.' },
    {
      type: 'p',
      text: 'Si un projet est lancé avec une prime trop importante par rapport au marché existant, l’investisseur peut payer aujourd’hui une partie importante de la croissance qu’il espère obtenir demain.',
    },
    {
      type: 'p',
      text: 'Il faut donc comparer le prix du lancement, les transactions du ready, les projets récents, la vue, la proximité du waterfront, la qualité du produit, le payment plan, la date de livraison et l’offre qui arrivera au même moment.',
    },
    { type: 'statement', text: '« Le potentiel est dans le quartier. La performance se joue à l’adresse. »' },
    { type: 'question', label: Q, text: '« Combien de la transformation future est déjà intégrée dans le prix que l’on nous demande aujourd’hui ? »' },

    // ── 5 — City Walk ────────────────────────────────────────────────────────────
    { type: 'h2', num: 5, text: 'City Walk : quand la localisation devient la rareté', short: 'City Walk' },
    { type: 'image', slot: 'area-city-walk', ratio: 'wide' },
    { type: 'p', text: 'Certaines destinations peuvent être reproduites plus facilement que d’autres.' },
    {
      type: 'p',
      text: 'On peut créer de nouveaux immeubles, malls et communautés. Mais on ne peut pas facilement recréer une parcelle située entre plusieurs centralités majeures de Dubai et relativement proche de la côte.',
    },
    { type: 'p', text: 'C’est ce qui rend [City Walk](/quartiers/city-walk) intéressant.' },
    {
      type: 'p',
      text: 'Sa thèse repose moins sur l’idée de devenir un jour une destination connue que sur la rareté de sa localisation : Downtown, DIFC, Jumeirah, la côte et les grands axes.',
    },
    { type: 'p', text: 'Central Park ajoute une autre dimension : davantage de verdure dans un environnement très central.' },
    { type: 'p', text: 'Mais la rareté géographique ne permet pas d’acheter à n’importe quel prix.' },
    {
      type: 'question',
      label: Q,
      text: '« Combien sommes-nous prêts à payer pour une localisation difficile à reproduire — et cette prime restera-t-elle compréhensible pour le prochain acheteur ? »',
    },

    // ── 6 — Mina Rashid ──────────────────────────────────────────────────────────
    { type: 'h2', num: 6, text: 'Mina Rashid : une thèse waterfront fondée sur la transformation', short: 'Mina Rashid' },
    { type: 'image', slot: 'area-mina-rashid', ratio: 'wide' },
    { type: 'p', text: '[Mina Rashid](/quartiers/mina-rashid) possède quelque chose que de nombreuses nouvelles communautés ne peuvent pas inventer : une histoire maritime.' },
    {
      type: 'p',
      text: 'Pour l’investisseur, la thèse consiste à accompagner la transformation d’un ancien espace portuaire en destination résidentielle et lifestyle plus complète.',
    },
    { type: 'p', text: 'La marina devient un élément structurel de l’identité du lieu.' },
    { type: 'p', text: 'Mais il faut éviter une erreur fréquente avec le waterfront : considérer toutes les vues sur l’eau comme équivalentes.' },
    {
      type: 'p',
      text: 'Vue ouverte, vue partielle, orientation sur la marina, future construction devant l’unité ou distance avec les principaux espaces publics peuvent produire des dynamiques différentes.',
    },
    {
      type: 'question',
      label: Q,
      text: '« Achetons-nous simplement une vue sur l’eau, ou une position réellement forte dans une future destination waterfront ? »',
    },

    // ── 7 — Dubai Islands ────────────────────────────────────────────────────────
    { type: 'h2', num: 7, text: 'Dubai Islands : le beachfront avant la maturité', short: 'Dubai Islands' },
    { type: 'image', slot: 'area-dubai-islands', ratio: 'wide' },
    { type: 'p', text: 'La thèse est simple à comprendre : le beachfront est une ressource limitée.' },
    { type: 'p', text: 'Mais la présence de la mer ne suffit pas à créer un bon investissement.' },
    {
      type: 'p',
      text: 'Une destination beachfront doit aussi devenir un écosystème : hospitality, retail, restaurants, accès, espaces publics, résidentiel, plages et vie quotidienne.',
    },
    { type: 'p', text: 'Plus le quartier est jeune, plus le choix de la micro-localisation devient important.' },
    {
      type: 'p',
      text: 'Où seront les plages les plus désirables ? Quels accès seront les plus simples ? Quels secteurs concentreront hospitality et retail ? Quelles parcelles auront une vue durable ? Quelle quantité de supply comparable arrivera ?',
    },
    { type: 'p', text: '[Dubai Islands](/quartiers/dubai-islands) peut convenir à un investisseur dont l’horizon permet de laisser la destination se construire.' },
    {
      type: 'question',
      label: Q,
      text: '« Sommes-nous suffisamment bien positionnés dans le masterplan pour bénéficier de la maturation de la destination ? »',
    },

    // ── 8 — Palm Jebel Ali ───────────────────────────────────────────────────────
    { type: 'h2', num: 8, text: 'Palm Jebel Ali : entrer dans l’histoire d’une nouvelle destination iconique', short: 'Palm Jebel Ali' },
    { type: 'image', slot: 'area-palm-jebel-ali', ratio: 'wide' },
    { type: 'p', text: '[Palm Jebel Ali](/quartiers/palm-jebel-ali) ne doit pas être analysée comme un simple quartier résidentiel supplémentaire.' },
    { type: 'p', text: 'Il s’agit de la création d’une nouvelle destination côtière majeure.' },
    {
      type: 'p',
      text: 'La comparaison avec Palm Jumeirah peut aider à comprendre ce qu’une destination iconique mature peut devenir, mais elle ne garantit pas le parcours de Palm Jebel Ali.',
    },
    {
      type: 'p',
      text: 'L’investisseur doit accepter une temporalité différente : infrastructures, services, hospitality, retail, occupation résidentielle et maturation de la zone sud de Dubai.',
    },
    { type: 'p', text: 'Pour certains investisseurs, cette durée est précisément l’intérêt. Pour d’autres, elle est incompatible avec leur horizon.' },
    {
      type: 'question',
      label: Q,
      text: '« Sommes-nous prêts à immobiliser du capital suffisamment longtemps pour laisser la destination devenir ce que le masterplan cherche à construire ? »',
    },

    // ── 9 — The Oasis ────────────────────────────────────────────────────────────
    { type: 'h2', num: 9, text: 'The Oasis : quand la rareté se déplace vers l’espace', short: 'The Oasis' },
    { type: 'image', slot: 'area-the-oasis', ratio: 'wide' },
    {
      type: 'p',
      text: 'Dans le segment villa, la rareté prend une autre forme : terrain, intimité, surface, eau, verdure et nombre limité de produits réellement comparables.',
    },
    { type: 'p', text: '[The Oasis](/quartiers/the-oasis) s’inscrit dans cette logique.' },
    {
      type: 'p',
      text: 'L’investisseur ne cherche pas nécessairement le rendement locatif maximal. Il peut rechercher une exposition à la demande pour des villas haut de gamme dans une ville où une partie de la clientèle internationale souhaite s’installer durablement.',
    },
    {
      type: 'p',
      text: 'Mais dans ce segment, l’analyse à la parcelle devient essentielle : orientation, proximité de l’eau, vis-à-vis, accès, taille du terrain, layout et position dans la communauté.',
    },
    { type: 'question', label: Q, text: '« La parcelle possède-t-elle une rareté suffisamment forte pour justifier la prime demandée ? »' },

    // ── 10 — Nad Al Sheba Gardens ────────────────────────────────────────────────
    { type: 'h2', num: 10, text: 'Nad Al Sheba Gardens : l’espace sans s’éloigner autant du cœur de Dubai', short: 'Nad Al Sheba Gardens' },
    { type: 'image', slot: 'area-nad-al-sheba-gardens', ratio: 'wide' },
    { type: 'p', text: 'Le marché villa ne se résume pas au luxe extrême.' },
    {
      type: 'p',
      text: 'Il existe aussi une demande pour des communautés familiales offrant davantage d’espace tout en restant relativement connectées aux principales centralités.',
    },
    {
      type: 'p',
      text: '[Nad Al Sheba Gardens](/quartiers/nad-al-sheba-gardens) combine habitat familial, maisons et villas, espaces verts, davantage d’intimité et proximité relative avec le cœur de Dubai.',
    },
    {
      type: 'p',
      text: 'Une famille n’évalue pas uniquement le prix au sqft. Elle évalue son quotidien : école, travail, trajets, surface, jardin, chambres et communauté.',
    },
    { type: 'p', text: 'Il faut néanmoins comparer le prix aux alternatives villa disponibles ailleurs dans Dubai.' },
    {
      type: 'question',
      label: Q,
      text: '« Combien vaut la combinaison espace + communauté + proximité des centralités par rapport aux alternatives ? »',
    },

    // ── 11 — Sobha Hartland II ───────────────────────────────────────────────────
    { type: 'h2', num: 11, text: 'Sobha Hartland II : le produit premium comme partie de la thèse', short: 'Sobha Hartland II' },
    { type: 'image', slot: 'area-sobha-hartland-ii', ratio: 'wide' },
    { type: 'p', text: 'Certaines stratégies commencent par la destination. D’autres accordent davantage de poids à la qualité du produit et à l’exécution.' },
    { type: 'p', text: '[Sobha Hartland II](/quartiers/sobha-hartland-ii) se situe à l’intersection des deux.' },
    {
      type: 'p',
      text: 'Le positionnement associe environnement résidentiel premium, eau, lagons, villas et appartements, avec une proximité relative des grandes centralités.',
    },
    { type: 'p', text: 'Mais la réputation d’un développeur ne doit pas devenir un raccourci d’investissement.' },
    { type: 'p', text: 'Un excellent niveau d’exécution peut justifier une prime. Il ne justifie pas n’importe quelle prime.' },
    {
      type: 'question',
      label: Q,
      text: '« Payons-nous une prime rationnelle pour un produit supérieur, ou achetons-nous simplement le nom du développeur ? »',
    },

    // ── 12 — Et les zones émergentes ? ───────────────────────────────────────────
    { type: 'h2', num: 12, text: 'Et les zones émergentes ?' },
    { type: 'p', lead: true, text: '« Next hotspot. » « Hidden gem. » « Buy before everyone else. »' },
    { type: 'p', text: 'Nous préférons une approche plus froide.' },
    {
      type: 'p',
      text: 'Une zone émergente mérite l’attention lorsqu’il existe des changements observables capables de modifier sa demande ou sa valorisation : changement réglementaire, infrastructure, développement économique, nouveaux employeurs, changement du régime de propriété, arrivée de développeurs crédibles, amélioration de la connectivité ou écart de prix difficile à expliquer avec une zone voisine.',
    },
    { type: 'p', text: 'Al Jaddaf fournit un exemple concret.' },
    {
      type: 'p',
      text: 'En janvier 2025, le Dubai Land Department a annoncé que 329 parcelles de la zone étaient éligibles à une conversion vers le freehold ouvert à toutes les nationalités.',
    },
    { type: 'p', text: 'Ce n’est pas une promesse de performance. C’est un changement structurel à intégrer dans l’analyse.' },
    { type: 'p', text: 'Jumeirah Garden City mérite également d’être étudié pour sa localisation et son évolution immobilière.' },
    {
      type: 'p',
      text: 'Dubai Science Park pose une autre question : un écosystème économique et d’emploi peut-il soutenir progressivement un véritable marché résidentiel ?',
    },
    { type: 'p', text: 'Ces marchés feront l’objet d’analyses BF dédiées.' },
    {
      type: 'statement',
      text: '« Une zone émergente n’est intéressante que si le prix permet encore à l’investisseur d’être rémunéré pour l’incertitude qu’il accepte. »',
    },

    // ── 13 — Rendement ───────────────────────────────────────────────────────────
    {
      type: 'h2',
      num: 13,
      text: 'Rendement : le quartier au meilleur loyer n’est pas nécessairement le meilleur investissement',
      short: 'Rendement',
    },
    { type: 'p', text: 'Supposons deux appartements.' },
    {
      type: 'compare',
      columns: [
        { title: 'Actif A', points: ['Prix : 1 000 000 AED', 'Loyer : 80 000 AED', 'Rendement brut : 8 %'] },
        { title: 'Actif B', points: ['Prix : 2 000 000 AED', 'Loyer : 120 000 AED', 'Rendement brut : 6 %'] },
      ],
    },
    { type: 'p', text: 'Il serait facile de conclure que A est supérieur.' },
    {
      type: 'p',
      text: 'Mais il manque presque toute l’analyse : charges, vacance, maintenance, qualité du locataire, croissance du loyer, liquidité à la revente, supply future, appréciation du capital et qualité du bâtiment.',
    },
    { type: 'p', text: 'L’investisseur ne doit donc pas chercher « le quartier avec le meilleur rendement ».' },
    { type: 'statement', text: 'Il doit chercher le meilleur rendement ajusté à la qualité et au risque de l’actif.' },
    {
      type: 'p',
      text: 'Le marché locatif de Dubai reste profond : le DLD a enregistré 1,38 million de contrats en 2025 pour 126,4 milliards AED. Au premier trimestre 2026, la valeur des contrats locatifs atteignait 32,2 milliards AED.',
    },
    { type: 'p', text: 'Mais cette demande agrégée ne garantit pas le rendement de chaque unité.' },

    // ── 14 — Liquidité ───────────────────────────────────────────────────────────
    { type: 'h2', num: 14, text: 'Liquidité : qui achètera après vous ?', short: 'Liquidité' },
    { type: 'p', text: 'La liquidité immobilière ne se résume pas au nombre de transactions dans une ville.' },
    { type: 'p', text: 'Elle dépend du nombre de personnes susceptibles de vouloir votre actif au prix demandé.' },
    {
      type: 'p',
      text: 'Un produit peut être extrêmement rare mais viser une clientèle minuscule. Un autre peut être plus standardisé mais intéresser énormément d’acheteurs.',
    },
    { type: 'p', text: 'Pour chaque quartier, BF cherche donc à comprendre la profondeur de la demande.' },
    { type: 'p', text: 'La question est toujours :' },
    { type: 'statement', text: '« Si nous devions vendre dans trois ans, qui serait naturellement intéressé par cet actif ? »' },

    // ── 15 — Supply ──────────────────────────────────────────────────────────────
    { type: 'h2', num: 15, text: 'Supply : le risque n’est pas le même partout', short: 'Supply' },
    { type: 'p', text: 'C’est l’un des sujets majeurs de 2026.' },
    {
      type: 'p',
      text: 'Knight Frank estimait au premier trimestre 2026 qu’environ 350 000 logements résidentiels étaient projetés à Dubai d’ici 2030.',
    },
    { type: 'p', text: 'Mais ce chiffre brut doit être interprété avec prudence.' },
    {
      type: 'p',
      text: 'Le cabinet souligne également que le taux de matérialisation des livraisons entre 2021 et 2025 a été d’environ 60 %, et estimait que 95 649 unités pourraient effectivement être achevées en 2026 contre 144 888 précédemment annoncées.',
    },
    {
      type: 'figures',
      items: [
        { value: '≈ 350 000', label: 'logements résidentiels projetés à Dubai d’ici 2030' },
        { value: '≈ 60 %', label: 'taux de matérialisation des livraisons entre 2021 et 2025' },
        { value: '95 649', unit: 'unités', label: 'pourraient effectivement être achevées en 2026', note: 'contre 144 888 précédemment annoncées' },
      ],
      caption: 'Source : Knight Frank, premier trimestre 2026.',
    },
    {
      type: 'p',
      text: 'Il existe donc un pipeline considérable, mais toutes les unités annoncées ne sont pas livrées à la date initialement prévue.',
    },
    { type: 'p', text: 'Surtout, toutes les unités ne sont pas concurrentes entre elles.' },
    {
      type: 'p',
      text: 'Un studio n’est pas une villa. Une villa de The Oasis n’est pas un appartement de Downtown. Un 2BR waterfront à Creek Harbour n’est pas nécessairement en concurrence directe avec un 2BR situé dans une communauté éloignée.',
    },
    { type: 'p', text: 'L’analyse correcte n’est donc pas :' },
    { type: 'p', lead: true, text: '« Combien de logements Dubai va-t-il livrer ? »' },
    { type: 'p', text: 'Mais :' },
    {
      type: 'p',
      lead: true,
      text: '« Combien de logements réellement comparables à notre actif seront disponibles au même moment, dans la même zone, pour la même clientèle ? »',
    },
    { type: 'p', text: 'C’est cette supply concurrentielle qui nous intéresse.' },

    // ── 16 — Notre carte de lecture ──────────────────────────────────────────────
    { type: 'h2', num: 16, text: 'Notre carte de lecture des destinations BF' },
    {
      type: 'profiles',
      items: [
        {
          title: 'Downtown Dubai',
          href: '/quartiers/downtown-dubai',
          rows: [
            { label: 'Histoire', text: 'Centralité mature et iconique.' },
            { label: 'Question', text: 'Qualité de l’actif et prix payé dans un marché déjà reconnu.' },
          ],
        },
        {
          title: 'Dubai Hills Estate',
          href: '/quartiers/dubai-hills-estate',
          rows: [
            { label: 'Histoire', text: 'Communauté mature, qualité de vie et profondeur résidentielle.' },
            { label: 'Question', text: 'Où reste-t-il de la valeur dans une destination déjà désirable ?' },
          ],
        },
        {
          title: 'Dubai Creek Harbour',
          href: '/quartiers/dubai-creek-harbour',
          rows: [
            { label: 'Histoire', text: 'Transformation future d’une destination déjà réelle.' },
            { label: 'Question', text: 'Combien de la croissance future est déjà intégrée au prix ?' },
          ],
        },
        {
          title: 'City Walk',
          href: '/quartiers/city-walk',
          rows: [
            { label: 'Histoire', text: 'Rareté géographique, centralité et lifestyle.' },
            { label: 'Question', text: 'La prime de localisation est-elle justifiée ?' },
          ],
        },
        {
          title: 'Mina Rashid',
          href: '/quartiers/mina-rashid',
          rows: [
            { label: 'Histoire', text: 'Transformation waterfront d’un lieu maritime historique.' },
            { label: 'Question', text: 'Quelle micro-localisation bénéficiera réellement de la maturation du quartier ?' },
          ],
        },
        {
          title: 'Dubai Islands',
          href: '/quartiers/dubai-islands',
          rows: [
            { label: 'Histoire', text: 'Création d’un nouvel écosystème beachfront.' },
            { label: 'Question', text: 'Sommes-nous positionnés au bon endroit avant la maturité ?' },
          ],
        },
        {
          title: 'Palm Jebel Ali',
          href: '/quartiers/palm-jebel-ali',
          rows: [
            { label: 'Histoire', text: 'Naissance d’une nouvelle destination iconique.' },
            { label: 'Question', text: 'L’horizon de l’investisseur est-il suffisamment long ?' },
          ],
        },
        {
          title: 'The Oasis',
          href: '/quartiers/the-oasis',
          rows: [
            { label: 'Histoire', text: 'Rareté villa, espace, eau et intimité.' },
            { label: 'Question', text: 'La parcelle justifie-t-elle sa prime ?' },
          ],
        },
        {
          title: 'Nad Al Sheba Gardens',
          href: '/quartiers/nad-al-sheba-gardens',
          rows: [
            { label: 'Histoire', text: 'Vie familiale et espace relativement proches des centralités.' },
            { label: 'Question', text: 'Le rapport localisation / espace / prix est-il supérieur aux alternatives ?' },
          ],
        },
        {
          title: 'Sobha Hartland II',
          href: '/quartiers/sobha-hartland-ii',
          rows: [
            { label: 'Histoire', text: 'Produit premium, waterfront résidentiel et qualité d’exécution.' },
            { label: 'Question', text: 'La prime produit est-elle rationnelle ?' },
          ],
        },
      ],
    },

    // ── 17 — Comment BF choisit ──────────────────────────────────────────────────
    { type: 'h2', num: 17, text: 'Comment BF choisit un quartier pour un investisseur' },
    { type: 'p', text: 'Notre ordre de décision est volontairement différent d’une recherche immobilière classique.' },
    { type: 'p', text: 'Nous ne commençons pas par demander : « Quel quartier aimez-vous ? »' },
    { type: 'p', text: 'Nous commençons par :' },
    {
      type: 'list',
      ordered: true,
      items: [
        'Quel est le capital disponible ?',
        'Quel est l’horizon ?',
        'Faut-il produire du revenu immédiatement ?',
        'Quelle liquidité faut-il conserver ?',
        'Quel niveau d’incertitude est acceptable ?',
        'Appartement ou villa ?',
        'Quelle clientèle voulons-nous viser à la location ou à la revente ?',
        'Quel marché correspond à ces contraintes ?',
        'Quelle micro-localisation possède le meilleur rapport potentiel / prix ?',
        'Quel projet ?',
        'Quelle unité ?',
        'Quelle stratégie de sortie ?',
      ],
    },
    { type: 'p', lead: true, text: 'Le quartier arrive donc après la stratégie.' },
    { type: 'p', lead: true, text: 'Et l’unité arrive après le quartier.' },

    // ── Conclusion ───────────────────────────────────────────────────────────────
    {
      type: 'h2',
      kicker: 'Conclusion',
      text: 'N’achetez pas un quartier. Achetez une thèse d’investissement.',
      short: 'Conclusion',
    },
    { type: 'p', text: 'Downtown n’est pas Creek Harbour.' },
    { type: 'p', text: 'Creek Harbour n’est pas Dubai Hills.' },
    { type: 'p', text: 'Dubai Hills n’est pas Palm Jebel Ali.' },
    { type: 'p', text: 'Et Palm Jebel Ali n’est pas The Oasis.' },
    { type: 'p', text: 'Ce ne sont pas simplement différentes adresses.' },
    { type: 'statement', text: 'Ce sont différentes manières d’exposer son capital au marché immobilier de Dubai.' },
    { type: 'p', text: 'L’investisseur doit être capable d’expliquer en une phrase pourquoi il achète.' },
    { type: 'statement', text: '« J’achète cette unité parce que… »' },
    {
      type: 'p',
      text: 'Si la réponse est uniquement « parce que le quartier est bien » ou « parce que le développeur est connu », l’analyse n’est probablement pas terminée.',
    },
    { type: 'p', text: 'Chez BF Properties, nous voulons arriver à une réponse beaucoup plus précise :' },
    {
      type: 'quote',
      text: '« J’achète cet actif, dans cette partie de cette destination, à ce prix, avec cette structure de paiement, parce qu’il correspond à cet objectif et que je pense que telle clientèle aura une raison rationnelle de le vouloir après moi. »',
    },
    { type: 'p', text: 'À ce moment-là, nous ne sommes plus simplement en train d’acheter à Dubai.' },
    { type: 'statement', text: 'Nous construisons une stratégie d’investissement.' },
  ],

  cta: {
    title: 'Commençons par votre stratégie.',
    text: 'Capital appreciation, revenu locatif, villa familiale, waterfront, destination émergente ou diversification : le quartier vient après l’objectif.',
    label: 'Définir mon projet',
  },

  sources: [
    {
      label: 'Dubai Land Department — Q1 2026 real-estate market',
      url: 'https://dubailand.gov.ae/en/news-media/dubai-s-real-estate-transactions-surge-31-to-reach-aed-252-billion-in-q1-2026',
    },
    {
      label: 'Dubai Land Department — Rental sector 2025',
      url: 'https://dubailand.gov.ae/en/news-media/dubai-s-rental-sector-records-strong-growth-in-2025-underscoring-market-stability-and-the-strength-of-the-emirate-s-real-estate-ecosystem',
    },
    {
      label: 'Dubai Land Department — Real Estate Data',
      url: 'https://dubailand.gov.ae/en/open-data/real-estate-data/',
    },
    {
      label: 'Dubai Land Department — Al Jaddaf freehold conversion',
      url: 'https://dubailand.gov.ae/en/news-media/dubai-land-department-enables-private-property-owners-on-sheikh-zayed-road-and-al-jaddaf-to-convert-to-freehold-ownership/',
    },
    {
      label: 'Knight Frank — Dubai Residential Market Review Q1 2026',
      url: 'https://www.knightfrank.ae/research/reports/dubai-residential-market-review-2365',
    },
    {
      label: 'Knight Frank — US$10m+ residential sales analysis H1 2026',
      url: 'https://www.knightfrank.ae/newsroom/article/2026/7/dubai-us%24-10m-residential-sales-analysis-q2-2026',
    },
  ],

  methodologyTitle: 'Note éditoriale',
  methodology: [
    'Les données de marché sont datées et doivent être présentées comme telles. Les moyennes à l’échelle d’un quartier ne permettent pas d’évaluer seules un actif individuel. Les analyses BF constituent une grille de lecture et non une garantie de performance.',
  ],

  disclaimer:
    'Les performances passées ne préjugent pas des performances futures. Les valeurs, rendements, exemples et analyses présentés sont fournis à titre informatif. Ils ne constituent ni une garantie de rendement, ni une projection de performance, ni un conseil fiscal ou juridique personnalisé.',

  related: ['investir-a-dubai'],
  // « Pour aller plus loin »: the ten destinations are already linked from the reading map above.
  links: [
    { label: 'Stratégies d’investissement', href: '/strategies' },
    { label: 'Developers', href: '/insights/developers' },
    { label: 'Investor Stories', href: '/investor-stories' },
    { label: 'Tous les quartiers', href: '/quartiers' },
  ],
};
