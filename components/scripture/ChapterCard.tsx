import Link from 'next/link';
import type { Chapter } from '@/types';

interface ChapterCardProps {
  chapter:     Chapter;
  scripture_id: string;
}

export default function ChapterCard({ chapter, scripture_id }: ChapterCardProps) {
  const href = `/scriptures/${scripture_id}/${chapter.id}`;

  return (
    <Link
      href={href}
      className="group flex items-start gap-4 rounded-lg border border-stone-200 bg-white p-5 transition-colors hover:border-stone-300 hover:bg-stone-50"
    >
      {/* Chapter number indicator */}
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-semibold text-stone-600 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors">
        {chapter.chapter_number}
      </span>

      <div>
        <h3 className="text-sm font-semibold text-stone-800 group-hover:text-amber-700 transition-colors">
          {chapter.name}
        </h3>
        <span className="mt-1 inline-block text-xs text-stone-400">
          Chapter {chapter.chapter_number} · View shlokas →
        </span>
      </div>
    </Link>
  );
}