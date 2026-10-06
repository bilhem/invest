import Reveal from '@/components/Reveal';
import CtaLink from '@/components/CtaLink';
import { Section, Eyebrow, nb, fr } from '@/components/neighborhood/ui';
import Paras from './Paras';
import KeyLine from './KeyLine';
import { getDevelopersPage } from '@/lib/cms';

/**
 * Conclusion of the page: dark, a lot of room, strong type, no card. The supplied copy as written; « Nous commençons par votre stratégie. » is simply set larger.
 * Primary CTA → the existing appointment flow; secondary → the existing page that sets out the BF approach.
 */
export default function DevelopersClosing() {
  const { closing } = getDevelopersPage();
  const body = closing.body;
  return (
    <Section id="approche" tone="dark" density="airy" weight="major" className="scroll-mt-16">
      <div className="ed-wrap">
        <Reveal>
          <Eyebrow dark>{closing.eyebrow}</Eyebrow>
          <h2 className="ed-h2 mt-6 max-w-[52rem] text-balance">{nb(closing.title)}</h2>
        </Reveal>

        <div className="ed-grid mt-14 gap-y-14 md:mt-20">
          <Reveal className="col-span-12 lg:col-span-6">
            <Paras paragraphs={body.slice(0, 3)} dark />
            <p className="mt-9 font-serif text-[1.75rem] font-medium leading-[1.2] tracking-tight text-champagne-light md:text-[2.125rem]">{fr(body[3])}</p>
            <p className="ed-body mt-5 text-ivory/75">{fr(body[4])}</p>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="border-l-2 border-champagne pl-6 md:pl-8">
              <KeyLine text={closing.statement} dark />
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <CtaLink href={closing.primary.href} id="developers_final_primary" className="btn btn-gold">{closing.primary.label}</CtaLink>
              <CtaLink href={closing.secondary.href} id="developers_final_secondary" className="btn btn-outline-light">{closing.secondary.label}</CtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
