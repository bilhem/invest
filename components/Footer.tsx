import Link from 'next/link';
import { NAV, LEGAL, SITE, SOCIAL } from '@/lib/site';
import Logo from './Logo';
export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* the « Suivre » column only exists when there is at least one real profile (lib/site.ts, SOCIAL); the grid keeps its four tracks so nothing else moves */}
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs font-serif text-xl leading-snug text-ivory/80">{SITE.tagline}</p>
        </div>
        <FooterCol title="Navigation" items={[...NAV.map((n) => [n.label, n.href] as const), ['Consultation', '/consultation'] as const]} />
        <FooterCol title="Légal" items={LEGAL.map((l) => [l, `/legal/${l.toLowerCase().replace(/\s+/g, '-')}`] as const)} />
        {SOCIAL.length > 0 && <FooterCol title="Suivre" items={SOCIAL.map((s) => [s.label, s.href] as const)} />}
      </div>
      <div className="wrap hairline border-ivory/10 py-6 text-xs leading-relaxed text-ivory/50">
        © {new Date().getFullYear()} BF Properties. Les informations présentées sont à but informatif et ne constituent pas un conseil juridique, fiscal ou financier. Les performances passées ne garantissent pas les performances futures.
      </div>
    </footer>
  );
}
function FooterCol({ title, items }: { title: string; items: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-champagne">{title}</p>
      <ul className="space-y-2.5 text-sm text-ivory/75">
        {items.map(([l, h]) => <li key={l}><Link href={h} className="hover:text-champagne-light">{l}</Link></li>)}
      </ul>
    </div>
  );
}
