import PageHero from '@/components/ui/PageHero';
import ConsultationForm from '@/components/ConsultationForm';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Prendre rendez-vous',
  description: 'Parlons de votre projet immobilier à Dubai. Quelques informations nous permettent de préparer notre échange avec BF Properties.',
  path: '/consultation',
});

export default function Page() {
  return (
    <>
      <PageHero
        image="hero-consult"
        title="Parlons de votre projet."
        subtitle="Quelques informations nous permettront de mieux préparer notre échange."
        crumbs={[{ label: 'Consultation' }]}
      />
      <section className="section">
        <div className="wrap">
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
