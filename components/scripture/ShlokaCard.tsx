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

      <article className="sacred-card sacred-hover overflow-hidden p-8 sm:p-10 lg:p-12">

        {/* Header */}
        <div className="flex items-center justify-between">

          <div className="sacred-surface rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500">
            Shloka {shloka.shloka_number}
          </div>

          <div className="text-sm text-amber-700 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
            Read →
          </div>

        </div>

        {/* Sanskrit */}
        <div className="mt-10">

          <p className="sanskrit-text text-3xl leading-[3.8rem text-stone-900 md:text-4xl md:leading-[5rem]">
            {shloka.sanskrit_text}
          </p>

        </div>

        {/* Transliteration */}
        <div className="mt-10">

          <p className="text-base italic leading-8 text-stone-500">
            {shloka.transliteration}
          </p>

        </div>

        {/* Sacred Divider */}
        <div className="sacred-divider mt-10" />

        {/* Meaning */}
        <div className="mt-10">

          <p className="text-xl leading-10 text-stone-700">
            {shloka.meaning}
          </p>

        </div>

        {/* Explanation */}
        <div className="mt-12">

          <h3 className="text-lg font-semibold text-stone-800">
            Explanation
          </h3>

          <p className="mt-5 line-clamp-4 text-base leading-8 text-stone-500">
            {shloka.explanation}
          </p>

        </div>

      </article>

    </Link>
  );
}