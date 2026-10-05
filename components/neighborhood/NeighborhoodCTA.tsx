import CtaLink from '@/components/CtaLink';
import { PAD } from './ui';
import type { Density } from '@/lib/data/neighborhood-types';

export default function NeighborhoodCTA({
  slug, title, text, label, density,
}: { slug: string; title: string; text?: string; label: string; density: Density }) {
  return (
    <section className={`bg-charcoal text-ivory ${PAD[density]}`}>
      <div className="wrap grid items-end gap-10 lg:grid-cols-12 lg:gap-16">
        <h2 className="ed-h2 max-w-3xl text-balance lg:col-span-7">{title}</h2>
        <div className="lg:col-span-5">
          {text && <p className="ed-body text-ivory/75">{text}</p>}
          <CtaLink href="/consultation" id={`area_${slug}`} className={`btn btn-gold ${text ? 'mt-8' : ''}`}>{label}</CtaLink>
        </div>
      </div>
    </section>
  );
}
