import CtaLink from '@/components/CtaLink';

type Props = { title: string; text?: string; label?: string; href?: string; id: string };

export default function CtaBand({ title, text, label = 'Prendre rendez-vous', href = '/consultation', id }: Props) {
  return (
    <section className="section bg-charcoal text-ivory">
      <div className="wrap flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="h-section max-w-2xl">{title}</h2>
          {text && <p className="mt-4 max-w-xl leading-relaxed text-ivory/70">{text}</p>}
        </div>
        <CtaLink href={href} id={id} className="btn btn-gold shrink-0">{label}</CtaLink>
      </div>
    </section>
  );
}
