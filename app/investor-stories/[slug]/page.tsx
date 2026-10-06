import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CtaBand from '@/components/ui/CtaBand';
import TrackEvent from '@/components/TrackEvent';
import StoryHero from '@/components/stories/StoryHero';
import StoryFigures from '@/components/stories/StoryFigures';
import StoryTimeline from '@/components/stories/StoryTimeline';
import StoryNarrative, { ProjectFacts } from '@/components/stories/StoryNarrative';
import StoryNotes from '@/components/stories/StoryNotes';
import StoryNav from '@/components/stories/StoryNav';
import StoryQuote from '@/components/stories/StoryQuote';
import { Shell } from '@/components/neighborhood/ui';
import { buildMetadata } from '@/lib/seo';
import { getImage } from '@/lib/images';
import { getStories, getStory, getArea } from '@/lib/cms';
import type { StoryTone } from '@/lib/data/stories';

type Params = { slug: string };

export function generateStaticParams() {
  return getStories().map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) return {};
  const img = getImage(s.img);
  // Share image only when the project picture exists (Franck and Sonia have none yet).
  const image = img.src ? { src: img.src, width: img.width, height: img.height, alt: img.alt } : undefined;
  return buildMetadata({
    title: s.seo.title,
    description: s.seo.description,
    path: `/investor-stories/${s.slug}`,
    noindex: s.placeholder,
    image,
  });
}

type Key = 'figures' | 'timeline' | 'start' | 'selection' | 'regard' | 'quote' | 'notes' | 'nav';

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) notFound();
  const L = s.layout;
  const area = s.areaSlug ? getArea(s.areaSlug) : undefined; // the link only exists if the district page does
  const others = getStories().filter((o) => o.slug !== s.slug);

  // Section order, then backgrounds: forced tones where the design asks for them, otherwise light / sand alternate (after the dark hero or a dark band, start light).
  const order: { key: Key; tone?: StoryTone }[] = [{ key: 'figures', tone: L.figures }];
  if (L.timelineFirst) order.push({ key: 'timeline' });
  order.push({ key: 'start' }, { key: 'selection' });
  if (!L.timelineFirst) order.push({ key: 'timeline' });
  order.push({ key: 'regard', tone: L.regard === 'dark' ? 'dark' : 'sand' });
  if (L.quote === 'band') order.push({ key: 'quote' });
  order.push({ key: 'notes' }, { key: 'nav' });
  let prev: StoryTone = 'dark'; // the hero
  const tones = order.map((o) => {
    const t: StoryTone = o.tone ?? (prev === 'light' ? 'sand' : 'light');
    prev = t;
    return t;
  });
  const join = (i: number) => ({ prev: (i === 0 ? 'dark' : tones[i - 1]) === tones[i], next: i < tones.length - 1 ? tones[i + 1] === tones[i] : false });

  const render = (key: Key, i: number) => {
    const tone = tones[i];
    const j = join(i);
    switch (key) {
      case 'figures':
        return <StoryFigures key={key} story={s} tone={tone} join={j} />;
      case 'timeline':
        return <StoryTimeline key={key} story={s} tone={tone} join={j} />;
      case 'start':
        return <StoryNarrative key={key} id="point-de-depart" title="Le point de départ" paragraphs={s.start} tone={tone} join={j} flip={L.flip} />;
      case 'selection':
        return (
          <StoryNarrative
            key={key} id="selection" title="La sélection" paragraphs={s.selection} stress={s.selectionStress} tone={tone} join={j} flip={L.flip}
            aside={<ProjectFacts project={s.project} area={s.area} unit={s.unit} developer={s.developer} areaLink={area ? { href: `/quartiers/${area.slug}`, name: area.name } : undefined} dark={tone === 'dark'} />}
          />
        );
      case 'regard':
        return (
          <StoryNarrative
            key={key} id="regard-bf" title="Le regard BF Properties" head={s.regard.headline} paragraphs={s.regard.paragraphs}
            quote={L.quote === 'inline' ? s.quote : undefined} tone={tone} join={j} flip={L.flip}
          />
        );
      case 'quote':
        return (
          <Shell key={key} tone={tone} density="standard" join={j}>
            <blockquote className="mx-auto max-w-[56rem] text-center">
              <span aria-hidden className="mx-auto mb-8 block h-px w-16 bg-champagne" />
              <StoryQuote>{s.quote}</StoryQuote>
            </blockquote>
          </Shell>
        );
      case 'notes':
        return <StoryNotes key={key} kinds={[s.outcome]} tone={tone} join={j} />;
      case 'nav':
        return <StoryNav key={key} stories={others} tone={tone} join={j} />;
    }
  };

  return (
    <>
      <TrackEvent event="investor_story_viewed" params={{ story: s.slug }} />
      <StoryHero story={s} />
      {order.map((o, i) => render(o.key, i))}
      <CtaBand id={`story_${s.slug}`} title="Construisons votre propre stratégie." />
    </>
  );
}
