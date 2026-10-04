'use client';
import Link from 'next/link';
import { track } from '@/lib/analytics';
export default function CtaLink({ href, id, className = '', children }: { href: string; id: string; className?: string; children: React.ReactNode }) {
  return <Link href={href} className={className} onClick={() => track('cta_clicked', { cta_id: id, href })}>{children}</Link>;
}
