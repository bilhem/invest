import { buildMetadata, abs } from '@/lib/seo';
import { SITE } from '@/lib/site';
import { getDevelopers, getDevelopersPage } from '@/lib/cms';
import { DEVELOPERS_PATH } from '@/lib/data/developers';
import JsonLd from '@/components/ui/JsonLd';
import Reveal from '@/components/Reveal';
import { Section, nb } from '@/components/neighborhood/ui';
import Paras from '@/components/developers/Paras';
import KeyLine from '@/components/developers/KeyLine';
import DevelopersHero from '@/components/developers/DevelopersHero';
import DeveloperEntry from '@/components/developers/DeveloperEntry';
import DevelopersClosing from '@/components/developers/DevelopersClosing';

const page = getDevelopersPage();

// Title as supplied: « Développeurs immobiliers à Dubai : comprendre les principaux acteurs | BF Properties » (the site template appends « | BF Properties »).
export const metadata = buildMetadata({ title: page.title, description: page.description, path: DEVELOPERS_PATH });

export default function Page() {
  const developers = getDevelopers();
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${page.title} | ${SITE.name}`,
    description: page.description,
    url: abs(DEVELOPERS_PATH),
    inLanguage: 'fr-FR',
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
  };
  return (
    <>
      <JsonLd data={ld} />
      <DevelopersHero />

      <Section tone="sand" density="standard" weight="major">
        <div className="ed-wrap">
          <div className="ed-grid gap-y-12">
            <Reveal className="col-span-12 lg:col-span-6">
              <h2 className="ed-h2 text-balance">{nb(page.intro.title)}</h2>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8">
              <Paras paragraphs={page.intro.body} />
            </Reveal>
          </div>
          <Reveal className="mt-14 md:mt-20 lg:max-w-[62rem]">
            <div className="border-l-2 border-champagne pl-6 md:pl-10"><KeyLine text={page.intro.statement} /></div>
          </Reveal>
        </div>
      </Section>

      {developers.map((d) => <DeveloperEntry key={d.slug} d={d} />)}

      <DevelopersClosing />
    </>
  );
}
