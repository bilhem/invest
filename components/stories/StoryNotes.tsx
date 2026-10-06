import { Shell, type Join } from '@/components/neighborhood/ui';
import { STORY_NOTES, type StoryTone } from '@/lib/data/stories';

/** Discreet legal notes (supplied wording). `kinds` = the specific notes that apply to what the page shows. */
export default function StoryNotes({ kinds, tone, join }: { kinds: ('sold' | 'held')[]; tone: StoryTone; join: Join }) {
  return (
    <Shell tone={tone} density="dense" join={join} className="!py-10 md:!py-14">
      <div className="max-w-[52rem] space-y-2 ed-caption text-charcoal/60">
        <p>{STORY_NOTES.general}</p>
        {kinds.map((k) => <p key={k}>{STORY_NOTES[k]}</p>)}
      </div>
    </Shell>
  );
}
