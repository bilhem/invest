import Link from 'next/link';
import { Heading, Shell, type Join } from '@/components/neighborhood/ui';
import type { Story, StoryTone } from '@/lib/data/stories';

/** The other cases, as a ruled list (name, city · strategy, project): a way on, not a card grid. */
export default function StoryNav({ stories, tone, join }: { stories: Story[]; tone: StoryTone; join: Join }) {
  return (
    <Shell tone={tone} density="standard" join={join}>
      <Heading title="Autres Investor Stories" />
      <ul className="mt-10 border-t border-charcoal/20 md:mt-12">
        {stories.map((s) => (
          <li key={s.slug} className="border-b border-charcoal/20">
            <Link href={`/investor-stories/${s.slug}`} className="group grid items-baseline gap-x-8 gap-y-1 py-6 md:grid-cols-12">
              <span className="font-serif text-[1.625rem] leading-tight md:col-span-4 md:text-[2rem]">{s.name}</span>
              <span className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-champagne-dark md:col-span-4">{s.city} · {s.strategy}</span>
              <span className="text-[0.9375rem] text-charcoal/70 md:col-span-3">{s.project} · {s.area}</span>
              <span aria-hidden className="hidden text-right text-xl text-champagne-dark transition-transform duration-300 group-hover:translate-x-1 md:col-span-1 md:block">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
