# BF Properties — Site V1

Next.js 15 (App Router) · TypeScript · Tailwind CSS. Advisory-first: **no public property catalogue**.

## Lancer le site

    npm install
    npm run dev      # http://localhost:3000

Node 20+ recommandé. Copiez `.env.example` en `.env.local` pour configurer CRM, calendrier et analytics.

## Pages

| URL | Contenu |
|---|---|
| `/` | Home |
| `/investir-a-dubai` | Guide d’investissement, coûts, off-plan vs ready, risques, FAQ (JSON-LD) |
| `/strategies`, `/strategies/entrepreneurs` | 7 modules de stratégie + page Entrepreneurs |
| `/quartiers`, `/quartiers/[slug]` | 8 quartiers + template |
| `/investor-stories`, `/investor-stories/[slug]` | Cas investisseurs + template |
| `/insights`, `/insights/[slug]` | Publication + template article |
| `/a-propos` · `/consultation` · `/lab` · `/legal/[slug]` | Reste du site |

## Où modifier quoi

- **Contenu** : `lib/data/*` (quartiers, stratégies, stories, articles, FAQ), lu uniquement via `lib/cms.ts`. Pour brancher un CMS headless, réécrivez `lib/cms.ts` ; les modèles de documents sont dans `cms/schemas.ts`. Le CMS n’est **pas encore connecté** en V1.
- **Images** : `lib/images.ts`. Déposez le fichier dans `public/images` et renseignez `src` (+ `focal`, `alt`). Tant que `src` est absent, un placeholder SVG neutre s’affiche. `next/image` fournit AVIF/WebP, lazy loading et tailles responsives.
- **Home** : `lib/content.ts` et `components/home/sections.tsx`.

## Règles de contenu

- Aucun chiffre de marché, rendement, témoignage ou prix inventé. Les valeurs `[X]` sont des espaces réservés.
- Les stories et articles de démonstration ont `placeholder: true` : ils sont en `noindex` et absents du sitemap. Passez-le à `false` seulement avec des données vérifiées et approuvées.
- Les textes de quartiers sont des premières versions qualitatives : **à relire et valider par BF Properties** avant mise en ligne.
- Les pages légales (`/legal/*`) sont des squelettes, sauf « Avertissements » : à faire rédiger par un conseil juridique.

## Formulaires, CRM, calendrier

- `POST /api/consultation` et `POST /api/lab` valident les champs, appliquent un honeypot anti-spam, puis envoient un JSON à `CRM_WEBHOOK_URL`. En production sans webhook configuré, la route renvoie une erreur volontairement (pas de lead perdu en silence).
- Capturé : `utm_source`, `utm_medium`, `utm_campaign`, `landing_page`, `referrer`, `timestamp`.
- Après envoi, `NEXT_PUBLIC_BOOKING_URL` s’affiche en iframe (Calendly/Cal.com). Sans lui, un message d’attente est montré.
- Pas encore de limitation de débit : à ajouter (par ex. au niveau de l’hébergeur) avant un fort trafic.

## Analytics

`lib/analytics.ts` expose `track()` (dataLayer, GA4, Meta Pixel). GA4 et Meta Pixel ne se chargent qu’après consentement (`components/Consent.tsx`) et uniquement si les IDs sont définis. Événements : `consultation_started`, `consultation_completed`, `cta_clicked`, `article_read`, `area_viewed`, `strategy_viewed`, `investor_story_viewed`, `lab_interest`, `calendar_opened`, `appointment_booked` (ce dernier écoute le message Calendly ; à vérifier avec l’outil retenu).

## SEO

Metadata dynamiques et canonicals par page, OpenGraph, `sitemap.xml`, `robots.txt`, fil d’Ariane (JSON-LD), Organization, Article, FAQ et Place en données structurées. Pages quartiers et insights générées statiquement.

## Pages quartier éditoriales : Creek Harbour, Dubai Hills Estate, Downtown Dubai, City Walk, Mina Rashid, Dubai Islands

`/quartiers/dubai-creek-harbour`, `/quartiers/dubai-hills-estate`, `/quartiers/downtown-dubai`, `/quartiers/city-walk`, `/quartiers/mina-rashid` et `/quartiers/dubai-islands` partagent un seul système (composants + échelle typographique) ; chaque quartier garde son propre récit et son propre rythme.

- **Données** : un quartier porte un `story` (type `NeighborhoodStory`, `lib/data/neighborhood-types.ts`) : `density` (airy / standard / dense), `seo`, `hero`, `sections[]`, `cta`, `compare` (quartiers à comparer) et `strategies` (ancres de `/strategies`). Les textes fournis par BF Properties sont dans `lib/data/neighborhoods/<slug>.ts`, à ne pas réécrire dans le code. Sans `story`, le template standard s’applique.
- **Composants** (`components/neighborhood/`) : `NeighborhoodPage` (assemblage), `NeighborhoodHero`, `EditorialSection`, `ImageStatement`, `MasterplanSection`, `LocationSection` (carte de localisation agrandie + repères `MapMarkers`), `FeaturesSection`, `ComparisonSection`, `CentralitySection`, `InvestmentThesis`, `RelatedNeighborhoods`, `NeighborhoodCTA`. Ajouter un quartier = écrire un `story`, sans toucher aux composants.
- **Grille et rythme** (`app/globals.css`) : un seul conteneur `.ed-wrap` (contenu 1280 px à partir de 1360 px), une grille 12 colonnes `.ed-grid`, un conteneur large `.ed-wide` (masterplans et grandes images, jusqu’à 1400 px). Chaque composition choisit son nombre de colonnes (texte 4 / image 8, titre 7 / texte 5, texte 4 / photo 5 / photo 3…). Le rythme vertical `.ed-sec` suit la largeur d’écran (≈ 120–160 px « major », 100–140 px « narrative » à 1440 px) et la `density` du quartier ; deux sections voisines de même fond réduisent de moitié leur marge commune (`join`, calculé dans `NeighborhoodPage`). Le fond sombre est réservé aux moments clés (catalyseurs, thèse, centralité, CTA).
- **Échelle typographique** : `.ed-eyebrow` (13 px, majuscules, doré), `.ed-h2` (identique sur toute la page, jusqu’à 52 px), `.ed-h3`, `.ed-lead`, `.ed-body`, `.ed-quote` (idée clé, 28 → 40 px, toujours sous le H2), `.ed-statement` (24 → 30 px), `.ed-caption`, `.ed-figure`. Un seul H1, dans le hero. Les citations passent à la ligne à chaque phrase et les mots à trait d’union (« correspond-il ») ne sont jamais coupés (affichage uniquement, texte inchangé).
- **Masterplans** : toujours affichés en entier (`object-contain`, ratio réel, agrandissables) via `components/area/ZoomImage.tsx`. Si le fichier manque, un emplacement est visible en développement et rien n’apparaît en production.
- **SEO** : titre et description uniques par page (`story.seo`), canonical, Open Graph + carte Twitter avec l’image du hero (`buildMetadata` accepte une `image` optionnelle ; les autres pages sont inchangées), fil d’Ariane (JSON-LD), Place et WebPage, liens internes vers les autres quartiers et les stratégies, CTA vers `/consultation`.
- **Données du quartier Creek** : `lib/data/creek-harbour.ts` (bloc `deep` : catalyseurs, infrastructures, sources internes ; aucune section « sources » publique).
- **Composants réutilisables** : `components/area/` — `Status` (badges et légende **Existant / En construction / Planifié ou annoncé**, `InfraBoard`), `Catalysts`, `Editorial` (maturation, thèse et contre-arguments, profils), `Sources`, `SourceRefs`.
- **Règle de contenu** : un chiffre, une date ou un statut n’apparaît que si une source listée dans `sources` le dit. Sinon : « à confirmer ». Chaque source est marquée officielle ou presse. À chaque mise à jour, changer `lastReviewed`.
- **Images** : le pack visuel reçu est intégré dans `public/images/neighborhoods/<slug>/` (`dubai-creek-harbour`, `dubai-hills-estate`, `downtown-dubai` ; WebP, barres noires et légendes incrustées retirées, jamais étirés). Chaque image est déclarée dans `lib/images.ts` avec sa taille, son `alt`, son type (photo, rendu ou plan) et son statut de droits. Pour remplacer un fichier : gardez le même chemin, ou changez `src`. Les rendus et plans sont toujours légendés comme tels ; les infrastructures futures portent leur statut.
- **Droits des images** : déclarés libres de droits par le client (statut `rights: 'cleared'` dans `lib/images.ts`). Conservez la preuve de licence ou d’autorisation. `npm run images:check` signale toute image repassée en `unconfirmed`.
- **Dubai Hills** : le hero, le boulevard, le mall, les résidences et l’ambiance viennent du pack « PRODUCTION V2 » (extraits de la brochure officielle Emaar / Meraas Park Ridge, 3 841 px de large, résolution native, fichiers non retouchés ; ce sont des rendus, déclarés `render`). Le pack ne contient ni photo de golf ni masterplan de Dubai Hills : le golf (`03-dubai-hills-golf`, comparaison Park / Golf) et le masterplan (`05-dubai-hills-masterplan`) viennent encore de l’ancien pack, petits et temporaires, à remplacer par une source HD autorisée (ne rien inventer). La piscine et l’espace bien-être du pack sont enregistrés (`hills-pool`, `hills-amenities`) mais pas affichés. `02-dubai-hills-park` du pack est identique au hero : il n’est pas dupliqué. Les fichiers de 2 Mo sont servis redimensionnés par `next/image`.
- **Downtown** : le hero (Burj Khalifa de nuit, 1 797 px) et l’image de la section Centralité (5 869 px) viennent du pack « PRODUCTION V2 » (extraits de la brochure officielle Emaar IL PRIMO / The Opera District, résolution native, fichiers non retouchés). Les autres visuels du pack (Opéra, skyline, vue résidentielle, piscine, nuit, intérieur) sont des images du projet IL PRIMO : non utilisés, pour que la page reste centrée sur le quartier. Le pack ne contient ni photo du Dubai Mall / Fashion Avenue ni masterplan de Downtown (sa carte est une carte de localisation du projet, à ne pas présenter comme un masterplan) : ces visuels, ainsi que la Dubai Fountain, viennent encore de l’ancien pack. Le masterplan est une capture Google Earth (watermark et fil d’Ariane retirés), à remplacer par un plan dont les droits sont confirmés ; remplacez les fichiers en gardant le chemin et en ajustant `width`/`height` dans `lib/images.ts`.
- **Résolution (Creek)** : le hero, la vue waterfront, la vue Downtown et la bannière Blue Line viennent du pack « PRODUCTION V2 » (visuels issus de la brochure Emaar, environ 1 920 px de large, convertis en WebP) : ils tiennent le plein écran. Le pack contient aussi trois visuels enregistrés mais non utilisés pour l’instant (`creek-green-terrace`, `creek-pool-view`, `creek-marina`). La carte « Creek Bay » du pack n’est volontairement pas utilisée : ce n’est pas le masterplan de Creek Harbour. Le masterplan, Dubai Square et Creek Tower viennent encore de l’ancien pack (710 px de large, retraités : rognage, débruitage léger, ×3 Lanczos, netteté contrôlée) : plus propres à l’écran, mais sans détail ajouté. Remplacez-les par des originaux haute définition dès que possible, en gardant le même chemin et en ajustant `width`/`height` dans `lib/images.ts`. Cadrage : `focal` (desktop) et `focalMobile` (téléphone).
- **City Walk, Mina Rashid, Dubai Islands** (packs « Visual Pack PRODUCTION V1 », dossiers `public/images/neighborhoods/{city-walk,mina-rashid,dubai-islands}/`) : textes fournis intégrés tels quels dans `lib/data/neighborhoods/<slug>.ts`. Nouvelles options de sections : `location` (carte pleine largeur, repères `markers` en % de l’image, chaîne `path`), `imageStatement` en `banner` / `overlay` (`align: 'right'`) / `side` avec `lead`, `words`, `figures`, `outro`, `imageCols`, `thesis` avec `criteria` numérotés, CTA multi-paragraphes. Le « 08 » de City Walk est le masterplan de **Crestlane** (légendé comme tel, jamais « masterplan de City Walk ») ; le « 08 » de Dubai Islands est une vue d’**Island B / Bay Grove** (jamais « Dubai Islands Masterplan »). Les plans et cartes sont affichés en entier, agrandissables et déplaçables au doigt sur téléphone.
- **Limites connues de ces trois packs** : (1) Mina Rashid `02` est un fichier vide : remplacé par la vue `06` (à substituer quand le fichier arrive) ; (2) la carte City Walk est une capture de carte en ligne dont l’interface a été retirée par recadrage, les repères sont posés par BF Properties et indicatifs (droits de la carte à confirmer) ; (3) la carte de localisation Mina Rashid porte les temps de trajet du promoteur, et la marina est donnée à 400 postes à quai selon la page Emaar (la couverture de 2019 parlait de 430) ; (4) plusieurs sources font 910–1 666 px de large : elles restent sur 5–6 colonnes pour ne pas être agrandies, le hero Mina Rashid (1 666 px) est légèrement agrandi au-delà de 1 667 px d’écran ; (5) le plan Island B n’existe qu’en 1 920 px.
- **Univers des quartiers** : Dubai Creek Harbour, Dubai Hills Estate, Downtown Dubai, City Walk, Mina Rashid, Dubai Marina, Palm Jebel Ali, Dubai Islands. Business Bay et Dubai South ont été retirés (cartes, listes, liens, stratégies) ; leurs anciennes URL redirigent vers `/quartiers` (`next.config.mjs`). Pour réintroduire Dubai South : rétablir sa fiche dans `lib/data/areas.ts` et retirer la redirection.
- **Emplacements encore sans image** : en développement, chaque placeholder affiche son nom (`NEXT_PUBLIC_SHOW_IMAGE_SLOTS=1` pour une preview).

## Non inclus en V1

CMS connecté, espace client (`/client`, prévu par l’architecture), BF Investment Lab réel, vidéo hero, vraies photographies, carte interactive avancée (une carte OpenStreetMap indicative est utilisée), transitions de page.

## État de vérification

Ce code a été écrit sans pouvoir exécuter `npm install` ni `next build` dans l’environnement de création. Au premier lancement, signalez toute erreur de build.
