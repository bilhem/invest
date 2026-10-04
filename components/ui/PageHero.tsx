import BFImage from '@/components/BFImage';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';
import type { ImageKey } from '@/lib/images';

type Props = {
  image: ImageKey;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
};

/** Dark cinematic page header. Every page starts with one so the transparent site header stays legible. */
export default function PageHero({ image, title, subtitle, eyebrow, crumbs, children }: Props) {
  return (
    <section className="relative flex min-h-[58svh] items-end bg-charcoal text-ivory lg:min-h-[66svh]">
      <BFImage slot={image} priority overlay="strong" />
      <div className="wrap relative pb-14 pt-36 md:pb-20">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && <p className="eyebrow mt-6">{eyebrow}</p>}
        <h1 className="mt-4 max-w-4xl font-serif text-[2.25rem] font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.75rem]">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 md:text-lg">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{children}</div>}
      </div>
    </section>
  );
}
