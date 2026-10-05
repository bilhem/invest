import CtaLink from '@/components/CtaLink';
import Reveal from '@/components/Reveal';
import { nb } from './ui';
import type { Density } from '@/lib/data/neighborhood-types';

/**
 * Final conclusion of the page: the dominant element of the end of the page.
 * Title on columns 1–7, text + button on columns 9–12, a fine gold rule above and below (it must stay distinct from the footer).
 */
export default function NeighborhoodCTA({
  slug, title, text, label, density,
}: { slug: string; title: string; text?: string | string[]; label: string; density: Density }) {
  return (
    <section data-w="major" data-d={density} className="ed-sec border-b border-champagne/40 bg-charcoal-800 text-ivory">
      <div className="ed-wrap">
        <div className="border-t border-champagne/50 pt-12 md:pt-16">
          <div className="ed-grid items-end gap-y-10">
            <Reveal className="col-span-12 lg:col-span-7">
              <h2 className="ed-h2 max-w-[40rem] text-balance">{nb(title)}</h2>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9">
              {text && (
                <div className="space-y-4">
                  {(Array.isArray(text) ? text : [text]).map((t) => <p key={t} className="ed-body text-ivory/75">{t}</p>)}
                </div>
              )}
              <CtaLink href="/consultation" id={`area_${slug}`} className={`btn btn-gold ${text ? 'mt-8' : ''}`}>{label}</CtaLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
