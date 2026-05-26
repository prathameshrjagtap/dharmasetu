import Link from 'next/link';
import type { Chapter } from '@/types';

interface ChapterCardProps {
  chapter: Chapter;
  scripture_id: string;
}

export default function ChapterCard({ chapter, scripture_id }: ChapterCardProps) {
  const href = `/scriptures/${scripture_id}/${chapter.id}`;

  return (
    <Link
      href={href}
      className="
      sacred-card
      sacred-hover
      group
      flex
      items-start
      gap-5
      p-6
    "
    >
      {/* Chapter Number */}
      <div
        className="
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        rounded-full
        border
        border-amber-200/40
        bg-gradient-to-b
        from-amber-50
        to-orange-50
        text-sm
        font-semibold
        text-amber-800
        shadow-sm
      "
      >
        {chapter.chapter_number}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">

        <h3
          className="
          text-lg
          font-semibold
          tracking-tight
          text-stone-900
          transition-colors
          group-hover:text-amber-700
        "
        >
          {chapter.name}
        </h3>

        <p
          className="
          mt-2
          text-sm
          leading-relaxed
          text-stone-500
        "
        >
          Explore chapter teachings, meanings, and verse flow.
        </p>

        <div
          className="
          mt-4
          inline-flex
          items-center
          gap-2
          text-sm
          font-medium
          text-amber-700
        "
        >
          Enter Chapter

          <span
            className="
            transition-transform
            duration-200
            group-hover:translate-x-1
          "
          >
            →
          </span>
        </div>

      </div>
    </Link>
  );
}