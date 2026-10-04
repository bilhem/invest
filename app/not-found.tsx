import PageHero from '@/components/ui/PageHero';
import CtaLink from '@/components/CtaLink';

export default function NotFound() {
  return (
    <PageHero image="hero-about" title="Cette page est introuvable." subtitle="Elle a peut-être été déplacée. Reprenez depuis l’accueil ou parlons de votre projet.">
      <CtaLink href="/" id="404_home" className="btn btn-outline-light">Retour à l’accueil</CtaLink>
      <CtaLink href="/consultation" id="404_consult" className="btn btn-gold">Prendre rendez-vous</CtaLink>
    </PageHero>
  );
}
