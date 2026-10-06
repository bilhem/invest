import Reveal from '@/components/Reveal';
import CtaLink from '@/components/CtaLink';
import { Section, nb, type Join } from '@/components/neighborhood/ui';
import { developerHref, type Developer } from '@/lib/data/developers';
import BfView from './BfView';
import DeveloperLogo from './DeveloperLogo';
import Paras from './Paras';

/**
 * One developer of /insights/developers. Not a card: a page of the magazine, with its own proportions (see `layout`).
 * The BF headline and the BF View carry the page; the developer is identified by its name and, when the file exists, its official logo (small, never dominant).
 */

const H_XL = 'font-serif font-medium tracking-tight text-balance text-[2.25rem] leading-[1.08] sm:text-[3rem] lg:text-[4rem]';
const H_L = 'font-serif font-medium tracking-tight text-balance text-[1.875rem] leading-[1.12] sm:text-[2.25rem] lg:text-[2.75rem]';
const H_M = 'font-serif font-medium tracking-tight text-balance text-[1.75rem] leading-[1.15] md:text-[2.125rem] lg:text-[2.375rem]';

/** Label + name on the left, official logo on the right, one hairline under both. */
function Head({ d, stacked = false }: { d: Developer; stacked?: boolean }) {
  const text = (
    <div>
      <p className="ed-eyebrow !text-champagne-dark">{d.label}</p>
      <h2 className="mt-3 font-serif text-[1.5rem] leading-tight tracking-tight md:text-[1.75rem]">{d.name}</h2>
    </div>
  );
  if (stacked) {
    return (
      <div>
        {text}
        <DeveloperLogo file={d.logo} name={d.name} size={d.logoSize} className="mt-5 !justify-start [&>img]:object-left" />
      </div>
    );
  }
  return (
    <div className="flex items-end justify-between gap-6 border-b border-charcoal/20 pb-5">
      {text}
      <DeveloperLogo file={d.logo} name={d.name} size={d.logoSize} />
    </div>
  );
}

/** Links that exist: the developer's own page once it is published, and the contextual link (Investor Story). Nothing when there is none: no link to a missing page. */
function Links({ d, className = '' }: { d: Developer; className?: string }) {
  if (!d.ready && !d.context) return null;
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {d.ready && (
        <CtaLink href={developerHref(d)} id={`developer_${d.slug}`} className="btn btn-outline-dark">
          {d.cta}<span aria-hidden>→</span>
        </CtaLink>
      )}
      {d.context && (
        <CtaLink href={d.context.href} id={`developer_${d.slug}_story`} className="btn btn-outline-dark">
          {d.context.label}<span aria-hidden>→</span>
        </CtaLink>
      )}
    </div>
  );
}

export default function DeveloperEntry({ d, join }: { d: Developer; join?: Join }) {
  const major = d.layout === 'narrow' || d.layout === 'rail' ? 'narrative' : 'major';
  const density = d.layout === 'lead' ? 'airy' : d.layout === 'narrow' || d.layout === 'rail' ? 'dense' : 'standard';

  let inner: React.ReactNode;
  switch (d.layout) {
    case 'lead':
      inner = (
        <>
          <Reveal><Head d={d} /></Reveal>
          <Reveal className="mt-12 md:mt-16"><h3 className={`max-w-[58rem] ${H_XL}`}>{nb(d.headline)}</h3></Reveal>
          <div className="ed-grid mt-10 md:mt-14">
            <Reveal className="col-span-12 md:col-span-10 lg:col-span-6 lg:col-start-7"><Paras paragraphs={d.body} /></Reveal>
          </div>
          <Reveal className="mt-14 md:mt-20 lg:max-w-[62rem]"><BfView text={d.bfView} size="big" /></Reveal>
          <Reveal><Links d={d} className="mt-12" /></Reveal>
        </>
      );
      break;

    case 'split':
      inner = (
        <>
          <Reveal><Head d={d} /></Reveal>
          <div className="ed-grid mt-12 gap-y-10 md:mt-16">
            <Reveal className="col-span-12 lg:col-span-5"><h3 className={H_L}>{nb(d.headline)}</h3></Reveal>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7">
              <Paras paragraphs={d.body} />
              <BfView text={d.bfView} className="mt-10 md:mt-12" />
              <Links d={d} className="mt-10" />
            </Reveal>
          </div>
        </>
      );
      break;

    case 'splitReverse':
      inner = (
        <>
          <Reveal><Head d={d} /></Reveal>
          <div className="ed-grid mt-12 gap-y-10 md:mt-16">
            <Reveal className="col-span-12 lg:order-2 lg:col-span-5 lg:col-start-8"><h3 className={H_L}>{nb(d.headline)}</h3></Reveal>
            <Reveal className="col-span-12 lg:order-1 lg:col-span-6">
              <Paras paragraphs={d.body} />
              <BfView text={d.bfView} className="mt-10 md:mt-12" />
              <Links d={d} className="mt-10" />
            </Reveal>
          </div>
        </>
      );
      break;

    case 'quoteFirst':
      inner = (
        <>
          <Reveal><Head d={d} /></Reveal>
          <Reveal className="mt-12 md:mt-16 lg:max-w-[62rem]"><BfView text={d.bfView} size="big" /></Reveal>
          <div className="ed-grid mt-14 gap-y-8 border-t border-charcoal/15 pt-10 md:mt-20 md:pt-14">
            <Reveal className="col-span-12 lg:col-span-5"><h3 className={H_M}>{nb(d.headline)}</h3></Reveal>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7">
              <Paras paragraphs={d.body} />
              <Links d={d} className="mt-10" />
            </Reveal>
          </div>
        </>
      );
      break;

    case 'narrow':
      inner = (
        <div className="ed-grid">
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <Reveal><Head d={d} /></Reveal>
            <Reveal className="mt-10 md:mt-12"><h3 className={H_M}>{nb(d.headline)}</h3></Reveal>
            <Reveal className="mt-8"><Paras paragraphs={d.body} /></Reveal>
            <Reveal className="mt-10"><BfView text={d.bfView} /></Reveal>
            <Reveal><Links d={d} className="mt-10" /></Reveal>
          </div>
        </div>
      );
      break;

    case 'rail':
      inner = (
        <Reveal>
          <div className="ed-grid gap-y-10 border-t border-charcoal/25 pt-8 md:pt-10">
            <div className="col-span-12 md:col-span-4 lg:col-span-3"><Head d={d} stacked /></div>
            <div className="col-span-12 md:col-span-8 lg:col-span-5">
              <h3 className={H_M}>{nb(d.headline)}</h3>
              <Paras paragraphs={d.body} className="mt-7" />
              <Links d={d} className="mt-9" />
            </div>
            <div className="col-span-12 md:col-start-5 md:col-span-8 lg:col-span-4 lg:col-start-9"><BfView text={d.bfView} /></div>
          </div>
        </Reveal>
      );
      break;

    case 'wide':
      inner = (
        <>
          <Reveal><Head d={d} /></Reveal>
          <Reveal className="mt-12 md:mt-16"><h3 className={`max-w-[62rem] ${H_XL}`}>{nb(d.headline)}</h3></Reveal>
          <div className="ed-grid mt-12 gap-y-12 md:mt-16">
            <Reveal className="col-span-12 lg:col-span-5"><BfView text={d.bfView} size="big" className="lg:pr-6" /></Reveal>
            <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7">
              <Paras paragraphs={d.body} />
              <Links d={d} className="mt-10" />
            </Reveal>
          </div>
        </>
      );
      break;
  }

  return (
    <Section id={d.slug} tone={d.tone} density={density} weight={major} join={join} className="scroll-mt-16">
      <div className="ed-wrap">{inner}</div>
    </Section>
  );
}
