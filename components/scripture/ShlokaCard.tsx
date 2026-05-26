import Link from 'next/link';

import type { Shloka } from '@/types';

interface ShlokaCardProps {
  shloka: Shloka;
}

export default function ShlokaCard({
  shloka,
}: ShlokaCardProps) {

  return (
    <Link
      href={`/shlokas/${shloka.id}`}
      className="block"
    >

      <article
        className="
    sacred-card
    sacred-hover
    space-y-8
    p-8
  "
      >

        {/* Header */}
        <div className="flex items-center justify-between">

          <div
            className="
        sacred-surface
        rounded-full
        px-4
        py-1.5
        text-xs
        font-medium
        uppercase
        tracking-[0.18em]
        text-stone-500
      "
          >
            Shloka {shloka.shloka_number}
          </div>

          <div
            className="
        text-sm
        text-amber-700
        opacity-0
        transition-all
        duration-200
        group-hover:translate-x-1
        group-hover:opacity-100
      "
          >
            Read →
          </div>

        </div>

        {/* Sanskrit */}
        <div>

          <p
            className="
        sanskrit-text
        text-2xl
        leading-[2.8rem]
        text-stone-900
        md:text-3xl
        md:leading-[3.8rem]
      "
          >
            {shloka.sanskrit_text}
          </p>

        </div>

        {/* Transliteration */}
        <div>

          <p
            className="
        text-base
        italic
        leading-relaxed
        text-stone-500
      "
          >
            {shloka.transliteration}
          </p>

        </div>

        {/* Meaning */}
        <div
          className="
      border-t
      border-stone-100
      pt-6
    "
        >

          <p
            className="
        text-lg
        leading-8
        text-stone-700
      "
          >
            {shloka.meaning}
          </p>

        </div>

        {/* Explanation Preview */}
        <div>

          <p
            className="
        line-clamp-3
        text-sm
        leading-7
        text-stone-500
      "
          >
            {shloka.explanation}
          </p>

        </div>

      </article>

    </Link>
  );
}