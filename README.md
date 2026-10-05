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
| `/quartiers`, `/quartiers/[slug]` | 7 quartiers + template |
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

## Pages quartier éditoriales : Creek Harbour, Dubai Hills Estate, Downtown Dubai

`/quartiers/dubai-creek-harbour`, `/quartiers/dubai-hills-estate` et `/quartiers/downtown-dubai` partagent un seul système (composants + échelle typographique) ; chaque quartier garde son propre récit et son propre rythme.

- **Données** : un quartier porte un `story` (type `NeighborhoodStory`, `lib/data/neighborhood-types.ts`) : `density` (airy / standard / dense), `seo`, `hero`, `sections[]`, `cta`, `compare` (quartiers à comparer) et `strategies` (ancres de `/strategies`). Les textes fournis par BF Properties sont dans `lib/data/neighborhoods/<slug>.ts`, à ne pas réécrire dans le code. Sans `story`, le template standard s’applique.
- **Composants** (`components/neighborhood/`) : `NeighborhoodPage` (assemblage), `NeighborhoodHero`, `EditorialSection`, `ImageStatement`, `MasterplanSection`, `FeaturesSection`, `ComparisonSection`, `CentralitySection`, `InvestmentThesis`, `RelatedNeighborhoods`, `NeighborhoodCTA`. Ajouter un quartier = écrire un `story`, sans toucher aux composants.
- **Grille et rythme** (`app/globals.css`) : un seul conteneur `.ed-wrap` (contenu 1280 px à partir de 1360 px), une grille 12 colonnes `.ed-grid`, un conteneur large `.ed-wide` (masterplans et grandes images, jusqu’à 1400 px). Chaque composition choisit son nombre de colonnes (texte 4 / image 8, titre 7 / texte 5, texte 4 / photo 5 / photo 3…). Le rythme vertical `.ed-sec` suit la largeur d’écran (≈ 120–160 px « major », 100–140 px « narrative » à 1440 px) et la `density` du quartier ; deux sections voisines de même fond réduisent de moitié leur marge commune (`join`, calculé dans `NeighborhoodPage`). Le fond sombre est réservé aux moments clés (catalyseurs, thèse, centralité, CTA).
- **Échelle typographique** : `.ed-eyebrow` (13 px, majuscules, doré), `.ed-h2` (identique sur toute la page, jusqu’à 52 px), `.ed-h3`, `.ed-lead`, `.ed-body`, `.ed-quote` (idée clé, 28 → 40 px, toujours sous le H2), `.ed-statement` (24 → 30 px), `.ed-caption`, `.ed-figure`. Un seul H1, dans le hero. Les citations passent à la ligne à chaque phrase et les mots à trait d’union (« correspond-il ») ne sont jamais coupés (affichage uniquement, texte inchangé).
- **Masterplans** : toujours affichés en entier (`object-contain`, ratio réel, agrandissables) via `components/area/ZoomImage.tsx`. Si le fichier manque, un emplacement est visible en développement et rien n’apparaît en production.
- **SEO** : titre et description uniques par page (`story.seo`), canonical, Open Graph + carte Twitter avec l’image du hero (`buildMetadata` accepte une `image` optionnelle ; les autres pages sont inchangées), fil d’Ariane (JSON-LD), Place et WebPage, liens internes vers les autres quartiers et les stratégies, CTA vers `/consultation`.
- **Données du quartier Creek** : `lib/data/creek-harbour.ts` (bloc `deep` : catalyseurs, infrastructures, sources internes ; aucune section « sources » publique).
- **Composants réutilisables** : `components/area/` — `Status` (badges et légende **Existant / En construction / Planifié ou annoncé**, `InfraBoard`), `Catalysts`, `Editorial` (maturation, thèse et contre-arguments, profils), `Sources`, `SourceRefs`.
- **Règle de contenu** : un chiffre, une date ou un statut n’apparaît que si une source listée dans `sources` le dit. Sinon : « à confirmer ». Chaque source est marquée officielle ou presse. À chaque mise à jour, changer `lastReviewed`.
- **Images** : le pack visuel reçu est intégré dans `public/images/neighborhoods/<slug>/` (`dubai-creek-harbour`, `dubai-hills-estate`, `downtown-dubai` ; WebP, barres noires et légendes incrustées retirées, jamais étirés). Chaque image est déclarée dans `lib/images.ts` avec sa taille, son `alt`, son type (photo, rendu ou plan) et son statut de droits. Pour remplacer un fichier : gardez le même chemin, ou changez `src`. Les rendus et plans sont toujours légendés comme tels ; les infrastructures futures portent leur statut.
- **Droits des images** : déclarés libres de droits par le client (statut `rights: 'cleared'` dans `lib/images.ts`). Conservez la preuve de licence ou d’autorisation. `npm run images:check` signale toute image repassée en `unconfirmed`.
- **Dubai Hills et Downtown** : les visuels Dubai Hills sont de petite taille (de 300 à 750 px de large à l’origine, visuels marketing/illustratifs) et paraîtront doux sur grand écran ; le masterplan Downtown est une capture Google Earth (watermark et fil d’Ariane retirés), à remplacer par un plan dont les droits sont confirmés. À remplacer par des originaux HD en gardant le chemin et en ajustant `width`/`height` dans `lib/images.ts`.
- **Résolution (Creek)** : les fichiers du pack font 710 px de large. Ils ont été retraités à partir des originaux (rognage des barres noires, débruitage léger, agrandissement ×3 en Lanczos, netteté contrôlée, grain fin) : l’image est plus propre et plus nette à l’écran, mais aucun détail n’est ajouté. Remplacez-les par des originaux haute définition dès que possible, en gardant le même chemin et en ajustant `width`/`height` dans `lib/images.ts`. Cadrage : `focal` (desktop) et `focalMobile` (téléphone).
- **Emplacements encore sans image** : en développement, chaque placeholder affiche son nom (`NEXT_PUBLIC_SHOW_IMAGE_SLOTS=1` pour une preview).

## Non inclus en V1

CMS connecté, espace client (`/client`, prévu par l’architecture), BF Investment Lab réel, vidéo hero, vraies photographies, carte interactive avancée (une carte OpenStreetMap indicative est utilisée), transitions de page.

## État de vérification

Ce code a été écrit sans pouvoir exécuter `npm install` ni `next build` dans l’environnement de création. Au premier lancement, signalez toute erreur de build.
