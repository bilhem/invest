import { Hero, Philosophy, Method, Stories, Strategies, Areas, LabTeaser, Insights, FinalCta } from '@/components/home/sections';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'BF Properties : accompagnement à l’investissement immobilier à Dubai',
  description: 'BF Properties accompagne les investisseurs internationaux à Dubai : comprendre le marché, définir une stratégie, identifier les opportunités adaptées.',
  path: '/',
  absoluteTitle: true,
});

export default function Home() {
  return (<><Hero /><Philosophy /><Method /><Stories /><Strategies /><Areas /><LabTeaser /><Insights /><FinalCta /></>);
}
