import type { ImageKey } from '@/lib/images';

/**
 * INVESTOR STORIES — every entry is DEMONSTRATION CONTENT (placeholder: true).
 * Do not publish figures until verified, approved by the client, and `placeholder` is set to false.
 * Placeholder stories are marked noindex and left out of the sitemap.
 */
export type Story = {
  slug: string;
  placeholder: boolean;
  img: ImageKey;
  name: string;
  country: string;
  strategy: string;
  areaSlug: string;
  areaName: string;
  situation: { capital: string; objectives: string; horizon: string; constraints: string };
  options: { title: string; text: string }[];
  decision: string;
  acquisition: { area: string; developer: string; price: string; structure: string; date: string };
  evolution: { label: string; value: string }[];
  contribution: { title: string; text: string }[];
  quote?: { text: string; by: string };
};

const NA = '[À renseigner]';

const baseOptions = [
  { title: 'Approche A', text: '[Description de la première option étudiée]' },
  { title: 'Approche B', text: '[Description de la deuxième option étudiée]' },
  { title: 'Approche C', text: '[Description de la troisième option étudiée]' },
];
const baseContribution = [
  { title: 'Recherche', text: 'Analyse du marché et des quartiers pertinents.' },
  { title: 'Comparaison', text: 'Mise en regard de plusieurs options selon le profil.' },
  { title: 'Sélection', text: 'Réduction à une sélection ciblée d’opportunités.' },
  { title: 'Accompagnement', text: 'Appui lors de l’acquisition et suivi ensuite.' },
];
const baseEvolution = [
  { label: 'Évolution de la valeur', value: '[X %]' },
  { label: 'Revenus locatifs', value: '[X AED / an]' },
  { label: 'Capital investi', value: '[X AED]' },
  { label: 'Fonds propres', value: '[X AED]' },
];

export const STORIES: Story[] = [
  {
    slug: 'franck',
    placeholder: true,
    img: 'story-1',
    name: 'Franck',
    country: 'Suisse',
    strategy: 'Capital appreciation',
    areaSlug: 'dubai-creek-harbour',
    areaName: 'Dubai Creek Harbour',
    situation: { capital: '[X AED]', objectives: 'Valorisation du capital', horizon: '[X ans]', constraints: '[À renseigner]' },
    options: baseOptions,
    decision: '[Expliquer pourquoi la stratégie et le projet retenus correspondaient à la situation de l’investisseur.]',
    acquisition: { area: 'Dubai Creek Harbour', developer: NA, price: '[X AED]', structure: NA, date: NA },
    evolution: baseEvolution,
    contribution: baseContribution,
  },
  {
    slug: 'investisseur-2',
    placeholder: true,
    img: 'story-2',
    name: '[Prénom]',
    country: '[Pays]',
    strategy: '[Stratégie]',
    areaSlug: 'dubai-hills-estate',
    areaName: '[Quartier]',
    situation: { capital: '[X AED]', objectives: '[Objectifs]', horizon: '[X ans]', constraints: '[À renseigner]' },
    options: baseOptions,
    decision: '[À rédiger à partir d’un cas réel validé.]',
    acquisition: { area: '[Quartier]', developer: NA, price: '[X AED]', structure: NA, date: NA },
    evolution: baseEvolution,
    contribution: baseContribution,
  },
  {
    slug: 'investisseur-3',
    placeholder: true,
    img: 'story-3',
    name: '[Prénom]',
    country: '[Pays]',
    strategy: '[Stratégie]',
    areaSlug: 'downtown-dubai',
    areaName: '[Quartier]',
    situation: { capital: '[X AED]', objectives: '[Objectifs]', horizon: '[X ans]', constraints: '[À renseigner]' },
    options: baseOptions,
    decision: '[À rédiger à partir d’un cas réel validé.]',
    acquisition: { area: '[Quartier]', developer: NA, price: '[X AED]', structure: NA, date: NA },
    evolution: baseEvolution,
    contribution: baseContribution,
  },
];
