import Link from 'next/link';
import BFImage from '@/components/BFImage';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { nb } from '@/components/neighborhood/ui';
import { minutesLabel, type HubVisual } from '@/lib/data/insights-hub';

type Cover = { slug: string; title: string; description: string; category: string; readingMinutes: number; visual: HubVisual };

/**
 * Top of /insights: a typographic masthead (title + one line of subtitle) and the cover story with one large photograph.
 * Dark like every page header, so the transparent site header stays legible. The H1 is the page's historical title.
 */
export default function HubCover({ cover }: { cover?: Cover }) {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="wrap pb-16 pt-32 md:pb-24 md:pt-40">
        <Breadcrumbs items={[{ label: 'Insights' }]} />

        <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <p className="eyebrow">BF Insights</p>
            <h1 className="mt-6 text-balance font-serif text-[2.75rem] font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]">
              <span className="block">Comprendre le marché.</span>{' '}
              <span className="block text-champagne-light">Mieux investir.</span>
            </h1>
          </div>
          <p className="max-w-md text-base leading-relaxed text-ivory/70 md:text-lg lg:col-span-4 lg:pb-3">
            Analyses de marché, stratégies, quartiers et guides pour investir à Dubai en connaissance de cause.
          </p>
        </div>

        {cover && (
          <Link href={`/insights/${cover.slug}`} className="group mt-14 block md:mt-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-800 sm:aspect-[16/9] lg:aspect-[2/1]">
              <BFImage slot={cover.visual.image} alt={cover.visual.alt} focal={cover.visual.focal} priority sizes="(min-width: 1280px) 1160px, 100vw" />
            </div>
            <div className="mt-8 grid gap-6 md:mt-10 xl:grid-cols-12 xl:items-end xl:gap-12">
              <div className="xl:col-span-6">
                <p className="flex items-center gap-3 text-xs">
                  <span className="font-medium uppercase tracking-[0.18em] text-champagne-light">À la une</span>
                  <span aria-hidden className="h-px w-4 bg-ivory/30" />
                  <span className="text-ivory/60">{cover.category} · {minutesLabel(cover.readingMinutes)}</span>
                </p>
                <h2 className="mt-5 max-w-[40rem] text-balance font-serif text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-4xl lg:text-[3rem]">{nb(cover.title)}</h2>
              </div>
              <div className="xl:col-span-6 xl:pb-1">
                <p className="line-clamp-2 max-w-xl leading-relaxed text-ivory/65">{cover.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 border-b border-champagne-light/40 pb-1 text-sm font-medium text-champagne-light transition-colors group-hover:border-champagne-light">
                  Lire l’analyse<span aria-hidden>→</span>
                </span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </section>
  );
}
