/**
 * DEVELOPERS — editorial vertical of Insights (/insights/developers).
 * Copy is the supplied copy, word for word: never rewritten, rounded or completed. No comparison, ranking, score or « best developer » anywhere.
 *
 * FUTURE PAGES  /insights/developers/<slug>  (emaar, sobha, meraas, nakheel, damac, imtiaz, ellington, select-group, beyond)
 * `ready: false` until the final content of that page exists: its « Comprendre … → » link is then NOT rendered (no public link to a page that does not exist)
 * and the page is not in the sitemap. When a page is published: add app/insights/developers/[slug]/page.tsx (or one folder per developer), set `ready: true`.
 *
 * LOGOS  public/images/developers/logos/<logo>.svg — official files only (SVG first, then PNG/WebP). They are picked up automatically at build time
 * (lib/developer-logos.ts): no code change to show a logo, and no empty frame while a file is missing.
 */
export type DeveloperLayout = 'lead' | 'split' | 'splitReverse' | 'quoteFirst' | 'narrow' | 'rail' | 'wide';

export type Developer = {
  /** URL segment of the future page and anchor on /insights/developers. */
  slug: string;
  name: string;
  /** Small caps label above the name. */
  label: string;
  headline: string;
  body: string[];
  /** « BF View »: the supplied sentence(s), guillemets included. */
  bfView: string;
  /** Wording of the link to the developer's own page (arrow is added by the component). Shown only when `ready`. */
  cta: string;
  /** True once /insights/developers/<slug> has its final content. */
  ready: boolean;
  /** Logo file name (without folder). */
  logo: string;
  /** Extra link that already exists (never to a future page). */
  context?: { label: string; href: string };
  layout: DeveloperLayout;
  tone: 'light' | 'sand';
};

export const DEVELOPERS_PATH = '/insights/developers';
export const developerHref = (d: Pick<Developer, 'slug'>) => `${DEVELOPERS_PATH}/${d.slug}`;

export const DEVELOPERS_PAGE = {
  title: 'Développeurs immobiliers à Dubai : comprendre les principaux acteurs',
  description: 'À Dubai, choisir un bien signifie aussi choisir un développeur. Comprendre l’ADN et le positionnement des principaux acteurs, avant de regarder le projet.',
  hero: {
    eyebrow: 'Developers',
    title: 'Tous les développeurs ne construisent pas la même histoire.',
    intro: [
      'À Dubai, choisir un bien signifie aussi choisir un développeur.',
      'Certains construisent des destinations entières. D’autres font du design, de la qualité d’exécution, du waterfront ou du lifestyle une partie centrale de leur proposition.',
      'Comprendre leur ADN permet de mieux comprendre ce que l’on achète.',
    ],
  },
  intro: {
    title: 'Le développeur compte. Mais il ne suffit jamais.',
    body: [
      'La réputation d’un développeur peut influencer l’attractivité d’un projet, sa perception sur le marché et l’intérêt qu’il suscite auprès des investisseurs.',
      'Mais chez BF Properties, nous ne sélectionnons jamais un investissement uniquement sur un nom.',
      'Nous analysons également la destination, la micro-localisation, le produit, l’unité, le prix d’entrée, le payment plan, l’offre concurrente et la stratégie de sortie.',
    ],
    statement: '« Un excellent développeur peut créer un excellent projet. Cela ne signifie pas que chaque unité constitue un excellent investissement. »',
  },
  closing: {
    eyebrow: 'Notre approche',
    title: 'Le développeur compte. L’investissement se joue dans la sélection.',
    body: [
      'Deux projets du même développeur peuvent répondre à des stratégies totalement différentes.',
      'Et au sein d’un même projet, l’étage, la vue, l’orientation, la typologie, le prix d’entrée ou le payment plan peuvent profondément modifier l’intérêt d’une unité.',
      'Chez BF Properties, nous ne commençons donc pas par choisir un développeur.',
      'Nous commençons par votre stratégie.',
      'Ensuite seulement viennent la destination, le développeur, le projet et l’unité.',
    ],
    statement: '« Un nom peut attirer l’attention. La sélection doit justifier l’investissement. »',
    /** Existing BF routes only: the appointment / qualification flow, and the page that sets out the BF approach. */
    primary: { label: 'Définir mon projet', href: '/consultation' },
    secondary: { label: 'Découvrir notre approche', href: '/a-propos' },
  },
} as const;

export const DEVELOPERS: Developer[] = [
  {
    slug: 'emaar',
    name: 'Emaar',
    label: 'Master Communities',
    headline: 'Le développeur de destinations.',
    body: [
      'Emaar ne construit pas uniquement des immeubles. Une partie essentielle de son modèle repose sur la création de communautés à grande échelle.',
      'Downtown Dubai, Dubai Hills Estate, Dubai Creek Harbour, The Oasis ou Rashid Yachts & Marina illustrent cette logique : créer une destination avant de multiplier les actifs qui la composent.',
      'Pour l’investisseur, le nom Emaar constitue donc un premier niveau de lecture. Mais le véritable travail commence ensuite : comprendre la communauté, sa maturité, la micro-localisation, le projet et enfin l’unité.',
    ],
    bfView: '« Chez Emaar, acheter le bon masterplan ne dispense jamais de choisir la bonne adresse à l’intérieur du masterplan. »',
    cta: 'Comprendre Emaar',
    ready: false,
    logo: 'emaar',
    layout: 'lead',
    tone: 'light',
  },
  {
    slug: 'sobha',
    name: 'Sobha Realty',
    label: 'Product & Execution',
    headline: 'Quand l’exécution du produit fait partie de la proposition.',
    body: [
      'Sobha a construit une partie de son positionnement autour de la maîtrise du produit résidentiel, de son architecture à ses finitions et à l’environnement dans lequel il s’inscrit.',
      'Des communautés comme Sobha Hartland et Sobha Hartland II permettent d’observer cette approche à une échelle plus large : résidences, espaces paysagers, eau et environnement communautaire participent ensemble à la perception du produit.',
      'Pour BF Properties, cette qualité doit toujours être mise en perspective avec le prix demandé et les alternatives disponibles au même moment.',
    ],
    bfView: '« La qualité crée de la désirabilité. Le prix d’entrée détermine si cette désirabilité devient une opportunité d’investissement. »',
    cta: 'Comprendre Sobha',
    ready: false,
    logo: 'sobha-realty',
    layout: 'split',
    tone: 'sand',
  },
  {
    slug: 'meraas',
    name: 'Meraas',
    label: 'Lifestyle Destinations',
    headline: 'Créer des destinations difficiles à reproduire.',
    body: [
      'Meraas développe une approche fortement liée au lifestyle, au design et au placemaking.',
      'City Walk et Bluewaters illustrent cette capacité à transformer une localisation en véritable destination, où résidences, espaces publics, retail, restauration et expérience urbaine participent à la même identité.',
      'Pour l’investisseur, l’intérêt se trouve souvent autant dans la localisation et la rareté de l’environnement que dans le bâtiment lui-même.',
    ],
    bfView: '« On peut reproduire un appartement. Il est beaucoup plus difficile de reproduire une localisation. »',
    cta: 'Comprendre Meraas',
    ready: false,
    logo: 'meraas',
    layout: 'quoteFirst',
    tone: 'light',
  },
  {
    slug: 'nakheel',
    name: 'Nakheel',
    label: 'Waterfront & Master Development',
    headline: 'Quand l’immobilier transforme la géographie de Dubai.',
    body: [
      'Peu de développeurs sont aussi directement associés à la transformation physique de Dubai.',
      'Palm Jumeirah a profondément modifié la perception internationale du waterfront de l’émirat. Palm Jebel Ali et Dubai Islands prolongent aujourd’hui cette logique à une nouvelle échelle.',
      'Ici, l’analyse ne porte donc pas seulement sur un bâtiment : elle porte sur la naissance et la maturation de nouvelles destinations.',
    ],
    bfView: '« Dans une nouvelle destination waterfront, le timing compte. La position à l’intérieur du masterplan compte encore davantage. »',
    cta: 'Comprendre Nakheel',
    ready: false,
    logo: 'nakheel',
    layout: 'splitReverse',
    tone: 'sand',
  },
  {
    slug: 'damac',
    name: 'DAMAC',
    label: 'Brand & Scale',
    headline: 'Une stratégie de marque et de produit à grande échelle.',
    body: [
      'DAMAC occupe une place importante dans le marché immobilier de Dubai avec une offre couvrant différentes communautés, typologies résidentielles et collaborations de marque.',
      'Cette diversité impose justement de ne pas analyser DAMAC comme un seul produit.',
      'La destination, le positionnement du projet, le prix et la profondeur de la demande doivent être étudiés individuellement.',
    ],
    bfView: '« Plus le portefeuille d’un développeur est large, plus l’analyse doit revenir au projet et à l’unité. »',
    cta: 'Comprendre DAMAC',
    ready: false,
    logo: 'damac',
    layout: 'narrow',
    tone: 'light',
  },
  {
    slug: 'imtiaz',
    name: 'Imtiaz Developments',
    label: 'Emerging Developer',
    headline: 'Un acteur à analyser projet par projet.',
    body: [
      'Imtiaz fait partie des développeurs dont la présence sur le marché de Dubai s’est développée avec une proposition orientée vers le produit, le design et les amenities.',
      'Pour un investisseur, une marque en développement nécessite une lecture particulièrement rigoureuse du projet : localisation, prix au square foot, concurrence, payment plan et profondeur de la demande.',
    ],
    bfView: '« Une marque émergente peut créer une opportunité. Elle ne remplace jamais l’analyse de l’actif. »',
    cta: 'Comprendre Imtiaz',
    ready: false,
    logo: 'imtiaz',
    layout: 'rail',
    tone: 'sand',
  },
  {
    slug: 'ellington',
    name: 'Ellington Properties',
    label: 'Design-Led Development',
    headline: 'Le design comme élément central du produit résidentiel.',
    body: [
      'Ellington s’est positionné autour d’une approche résidentielle fortement orientée design, avec une attention particulière portée aux intérieurs, aux espaces communs et à l’expérience quotidienne du résident.',
      'Cette approche peut créer une différenciation importante dans des marchés où plusieurs projets se trouvent en concurrence directe.',
      'Mais cette différenciation doit toujours être confrontée au prix auquel l’investisseur entre.',
    ],
    bfView: '« Un produit différenciant peut mieux défendre sa désirabilité. Encore faut-il l’acheter au bon prix. »',
    cta: 'Comprendre Ellington',
    ready: false,
    logo: 'ellington',
    layout: 'wide',
    tone: 'light',
  },
  {
    slug: 'select-group',
    name: 'Select Group',
    label: 'Urban & Waterfront',
    headline: 'Des actifs premium dans des localisations urbaines et waterfront.',
    body: [
      'Select Group a développé plusieurs actifs résidentiels dans des localisations majeures de Dubai, notamment sur des environnements urbains et waterfront.',
      'Peninsula, à Business Bay, illustre parfaitement l’intérêt de regarder au-delà du nom du projet : étage, vue, orientation, typologie et moment d’entrée peuvent profondément modifier le résultat d’un investissement.',
      'C’est précisément ce que montre l’une de nos Investor Stories.',
    ],
    bfView: '« La performance ne venait pas seulement du projet. Elle venait de l’unité choisie à l’intérieur du projet. »',
    cta: 'Comprendre Select Group',
    ready: false,
    logo: 'select-group',
    context: { label: 'Voir l’Investor Story de Franck', href: '/investor-stories/franck-peninsula-five' },
    layout: 'split',
    tone: 'sand',
  },
  {
    slug: 'beyond',
    name: 'BEYOND',
    label: 'New Premium Generation',
    headline: 'Une nouvelle génération de développement premium.',
    body: [
      'BEYOND est une marque immobilière premium développée au sein d’OMNIYAT Group.',
      'Son développement récent s’appuie notamment sur une approche associant architecture, environnement, nature et nouvelles destinations résidentielles.',
      'Son historique étant naturellement plus récent que celui des acteurs établis depuis plusieurs décennies, son analyse doit rester attachée aux fondamentaux : emplacement, produit, prix, exécution et potentiel de la destination.',
    ],
    bfView: '« Une nouvelle marque peut apporter une nouvelle proposition. L’investisseur doit déterminer à quel prix cette proposition devient intéressante. »',
    cta: 'Comprendre BEYOND',
    ready: false,
    logo: 'beyond',
    layout: 'lead',
    tone: 'light',
  },
];
