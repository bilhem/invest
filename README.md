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

## Page quartier de référence : Dubai Creek Harbour

`/quartiers/dubai-creek-harbour` est le modèle des futures pages quartier.

- **Données** : `lib/data/creek-harbour.ts`. Une page quartier devient « enrichie » dès qu’elle porte un bloc `deep` (type `AreaDeep` dans `lib/data/area-types.ts`) : catalyseurs, infrastructures, maturation, thèse, profils, sources. Sans `deep`, le template standard s’applique.
- **Mise en page éditoriale** : si `deep.editorial` existe, la page utilise `components/area/AreaEditorial.tsx` (hero, introduction, masterplan, 3 catalyseurs, analyse, localisation, CTA) avec une échelle typographique unique (`.eyebrow`, `.h-section`, `.ed-h3`, `.ed-sub`, `.ed-lead`, `.ed-body`, `.ed-statement` dans `app/globals.css`). Le masterplan s’affiche en entier (`object-contain`, agrandissable) via `ZoomImage`. Le fichier `04-masterplan.webp` fourni n’est qu’un **extrait** du plan : remplacez-le par le plan complet (même chemin, ajuster `width`/`height`) et retirez `extractLabel` dans les données.
- **Composants réutilisables** : `components/area/` — `Status` (badges et légende **Existant / En construction / Planifié ou annoncé**, `InfraBoard`), `Catalysts`, `Editorial` (maturation, thèse et contre-arguments, profils), `Sources`, `SourceRefs`.
- **Règle de contenu** : un chiffre, une date ou un statut n’apparaît que si une source listée dans `sources` le dit. Sinon : « à confirmer ». Chaque source est marquée officielle ou presse. À chaque mise à jour, changer `lastReviewed`.
- **Images** : le pack visuel reçu est intégré dans `public/images/areas/dubai-creek-harbour/` (8 fichiers WebP, barres noires rognées, jamais étirés). Chaque image est déclarée dans `lib/images.ts` avec sa taille, son `alt`, son type (photo, rendu ou plan) et son statut de droits. Pour remplacer un fichier : gardez le même chemin, ou changez `src`. Les rendus et plans sont toujours légendés comme tels ; les infrastructures futures portent leur statut.
- **Droits des images** : déclarés libres de droits par le client (statut `rights: 'cleared'` dans `lib/images.ts`). Conservez la preuve de licence ou d’autorisation. `npm run images:check` signale toute image repassée en `unconfirmed`.
- **Résolution** : les 8 fichiers du pack faisaient 710 px de large. Ils ont été agrandis à 1420 px avec un lissage (cela adoucit l’image mais n’ajoute aucun détail). Remplacez-les par des originaux haute définition dès que possible, en gardant le même chemin et en ajustant `width`/`height`. Cadrage : `focal` (desktop) et `focalMobile` (téléphone) dans `lib/images.ts`.
- **Emplacements encore sans image** : en développement, chaque placeholder affiche son nom (`NEXT_PUBLIC_SHOW_IMAGE_SLOTS=1` pour une preview).

## Non inclus en V1

CMS connecté, espace client (`/client`, prévu par l’architecture), BF Investment Lab réel, vidéo hero, vraies photographies, carte interactive avancée (une carte OpenStreetMap indicative est utilisée), transitions de page.

## État de vérification

Ce code a été écrit sans pouvoir exécuter `npm install` ni `next build` dans l’environnement de création. Au premier lancement, signalez toute erreur de build.
