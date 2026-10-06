import { Shell, type Join } from '@/components/neighborhood/ui';
import type { Story, StoryTone, TimelineNode } from '@/lib/data/stories';
import { oneLine } from './format';

function Node({ node, end = false }: { node: TimelineNode; end?: boolean }) {
  return (
    <div className={end ? 'lg:text-right' : ''}>
      <p className="font-serif text-[2.25rem] leading-none tracking-tight text-champagne-dark md:text-[3rem]">{node.when}</p>
      <p className="mt-4 text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-charcoal/60">{node.label}</p>
      <p className="mt-2 font-serif text-[1.5rem] leading-tight md:text-[1.875rem]">{oneLine(node.value)}</p>
    </div>
  );
}

/** Two dated milestones joined by an arrow; the middle caption is only drawn when the supplied copy has one. Horizontal from 1024px, vertical below. */
export default function StoryTimeline({ story, tone, join }: { story: Story; tone: StoryTone; join: Join }) {
  const { from, between, to } = story.timeline;
  return (
    <Shell id="chronologie" tone={tone} density="standard" join={join}>
      <h2 className="ed-eyebrow !text-champagne-dark">Chronologie de l’investissement</h2>
      <div className="mt-10 flex flex-col lg:mt-14 lg:flex-row lg:items-start">
        <Node node={from} />
        <div aria-hidden className="relative my-8 ml-1 h-20 w-px shrink-0 bg-champagne lg:mx-10 lg:my-0 lg:mt-[1.375rem] lg:h-px lg:w-auto lg:flex-1">
          <span className="absolute -bottom-px left-1/2 hidden -translate-x-1/2 border-x-[5px] border-t-[8px] border-x-transparent border-t-champagne max-lg:block" />
          <span className="absolute -right-px top-1/2 hidden -translate-y-1/2 border-y-[5px] border-l-[8px] border-y-transparent border-l-champagne lg:block" />
          {between && (
            <span className="absolute left-6 top-1/2 w-max max-w-[16rem] -translate-y-1/2 text-[0.9375rem] leading-snug tracking-wide text-charcoal/70 lg:left-1/2 lg:top-auto lg:-translate-x-1/2 lg:-translate-y-0 lg:bottom-4 lg:max-w-none lg:whitespace-nowrap">{between}</span>
          )}
        </div>
        <Node node={to} end />
      </div>
    </Shell>
  );
}
