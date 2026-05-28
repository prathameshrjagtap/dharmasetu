import Link from 'next/link';

import type { Chapter } from '@/types';

interface ChapterNavigationProps {
  scriptureId: string;
  chapters: readonly Chapter[];
  currentChapterNumber: number;
}

export default function ChapterNavigation({
  scriptureId,
  chapters,
  currentChapterNumber,
}: ChapterNavigationProps) {

  const previousChapter = chapters.find(
    (chapter) => chapter.chapter_number === currentChapterNumber - 1
  );

  const nextChapter = chapters.find(
    (chapter) => chapter.chapter_number === currentChapterNumber + 1
  );

  return (
    <nav
      aria-label="Chapter navigation"
      className="mt-12 flex flex-col gap-4 border-t border-stone-200 pt-6 sm:flex-row sm:items-center sm:justify-between"
    >

      {/* Previous Chapter */}
      <div className="min-h-[40px]">
        {previousChapter ? (
          <Link
            href={`/scriptures/${scriptureId}/${previousChapter.slug}`}
            className="text-sm font-medium text-amber-700 transition-colors hover:text-amber-800"
          >
            ← Chapter {previousChapter.chapter_number}
          </Link>
        ) : (
          <span className="text-sm text-stone-400">
            Beginning of scripture
          </span>
        )}
      </div>

      {/* Back to Scripture */}
      <div>
        <Link
          href={`/scriptures/${scriptureId}`}
          className="text-sm text-stone-500 transition-colors hover:text-stone-800"
        >
          Back to Chapters
        </Link>
      </div>

      {/* Next Chapter */}
      <div className="min-h-[40px] text-left sm:text-right">
        {nextChapter ? (
          <Link
            href={`/scriptures/${scriptureId}/${nextChapter.slug}`}
            className="text-sm font-medium text-amber-700 transition-colors hover:text-amber-800"
          >
            Chapter {nextChapter.chapter_number} →
          </Link>
        ) : (
          <span className="text-sm text-stone-400">
            End of scripture
          </span>
        )}
      </div>

    </nav>
  );
}