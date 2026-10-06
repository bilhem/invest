import { Shell, type Join } from '@/components/neighborhood/ui';
import type { Story, StoryTone } from '@/lib/data/stories';
import { splitFigure } from './format';

/** Key investment figures: large serif numbers on fine rules, no cards, no dashboard colours. Values are shown exactly as supplied. */
export default function StoryFigures({ story, tone, join }: { story: Story; tone: StoryTone; join: Join }) {
  const dark = tone === 'dark';
  const five = story.figures.length === 5;
  const cols = five ? 'lg:grid-cols-5' : 'lg:grid-cols-3';
  const size = five
    ? 'text-[2.25rem] lg:text-[1.875rem] xl:text-[2.5rem] min-[1400px]:text-[2.75rem]'
    : 'text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]';
  const rule = dark ? 'border-ivory/25' : 'border-charcoal/20';
  const sub = dark ? 'text-ivory/65' : 'text-charcoal/65';
  return (
    <Shell id="chiffres" tone={tone} density="standard" join={join}>
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <h2 className={`ed-eyebrow ${dark ? '!text-champagne-light' : '!text-champagne-dark'}`}>Chiffres clés de l’investissement</h2>
        {story.situation && (
          <p className={`border px-4 py-2 text-[0.75rem] font-medium uppercase tracking-[0.2em] ${dark ? 'border-champagne-light/50 text-champagne-light' : 'border-champagne-dark/50 text-champagne-dark'}`}>
            <span className={`mr-3 font-normal ${sub}`}>Situation</span>{story.situation}
          </p>
        )}
      </div>
      <dl className={`mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-12 ${cols}`}>
        {story.figures.map((f) => {
          const { num, unit } = splitFigure(f.value);
          return (
            <div key={f.label} className={`border-t pt-5 ${rule}`}>
              <dt className={`text-[0.875rem] leading-snug ${sub}`}>{f.label}</dt>
              <dd className="mt-4">
                <span className={`block font-serif leading-none tracking-tight ${size} ${dark ? 'text-champagne-light' : 'text-charcoal'}`}>{num}</span>
                {unit && <span className={`mt-2 block text-[0.75rem] uppercase tracking-[0.2em] ${sub}`}>{unit}</span>}
                {f.note && <span className={`mt-3 block text-[0.9375rem] ${sub}`}>{f.note}</span>}
              </dd>
            </div>
          );
        })}
      </dl>
    </Shell>
  );
}
