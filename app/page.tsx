import { Hero, Philosophy, Method, Stories, Strategies, Areas, LabTeaser, Insights, FinalCta } from '@/components/home/sections';
import { buildMetadata } from '@/lib/seo';

export const metadata = {
  ...buildMetadata({
    title: 'BF Properties',
    description: 'BF Properties accompagne les investisseurs internationaux à Dubai : comprendre le marché, définir une stratégie et identifier les opportunités adaptées à votre situation.',
    path: '/',
  }),
  title: { absolute: 'BF Properties — L’investissement qui vous ressemble' },
};

export default function Home() {
  return (<><Hero /><Philosophy /><Method /><Stories /><Strategies /><Areas /><LabTeaser /><Insights /><FinalCta /></>);
}
