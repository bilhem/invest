import Link from 'next/link';
import PageHero from '@/components/ui/PageHero';
import CtaBand from '@/components/ui/CtaBand';
import BFImage from '@/components/BFImage';
import { buildMetadata } from '@/lib/seo';
import { getAreas } from '@/lib/cms';

export const metadata = buildMetadata({
  title: 'Quartiers de Dubai pour investir',
  description: 'Dubai n’est pas un seul marché. Découvrez la dynamique, l’offre et le profil d’investisseur de chaque quartier : Creek Harbour, Dubai Hills, Downtown, City Walk, Mina Rashid, Dubai Islands, Palm Jebel Ali, The Oasis, Nad Al Sheba Gardens, Sobha Hartland II.',
  path: '/quartiers',
});

export default function Page() {
  const areas = getAreas();
  return (
    <>
      <PageHero
        image="hero-areas"
        title="Dubai n’est pas un seul marché."
        subtitle="Chaque quartier possède sa propre dynamique, son offre et son profil d’investisseur."
        crumbs={[{ label: 'Quartiers' }]}
      />
      <section className="section">
        <div className="wrap space-y-6 md:space-y-10">
          {areas.map((a, i) => (
            <article key={a.slug} className={`group grid overflow-hidden bg-white md:grid-cols-2 ${i % 2 ? 'md:[&>div:first-child]:order-2' : ''}`}>
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
                <BFImage slot={a.img} sizes="(min-width:768px) 50vw, 100vw" className="transition-transform duration-[1400ms] group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h2 className="font-serif text-3xl md:text-4xl">{a.name}</h2>
                <p className="mt-4 max-w-md leading-relaxed text-charcoal/75">{a.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Profils d’investissement">
                  {a.tags.map((t) => (
                    <li key={t} className="border border-stone-light px-3 py-1 text-xs text-charcoal/70">{t}</li>
                  ))}
                </ul>
                <Link href={`/quartiers/${a.slug}`} className="btn btn-outline-dark mt-8 self-start" aria-label={`Explorer le quartier ${a.name}`}>Explorer le quartier</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand id="areas_page" title="Quel quartier correspond à votre projet ?" text="Le bon quartier dépend de votre capital, de votre horizon et de votre objectif." />
    </>
  );
}
