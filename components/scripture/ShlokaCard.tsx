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

      <article className="rounded-lg border border-stone-200 bg-white p-6 space-y-4 transition-colors hover:border-stone-300 hover:bg-stone-50">

        {/* Shloka number */}
        <p className="text-xs font-medium text-stone-400 uppercase tracking-wide">
          Shloka {shloka.shloka_number}
        </p>

        {/* Sanskrit */}
        <div>
          <p className="text-sm font-medium text-stone-500 mb-1">
            Sanskrit
          </p>

          <p className="sanskrit-text text-base leading-loose text-stone-800">
            {shloka.sanskrit_text}
          </p>
        </div>

        {/* Transliteration */}
        <div>
          <p className="text-sm font-medium text-stone-500 mb-1">
            Transliteration
          </p>

          <p className="text-sm text-stone-600 italic leading-relaxed">
            {shloka.transliteration}
          </p>
        </div>

        {/* Meaning */}
        <div>
          <p className="text-sm font-medium text-stone-500 mb-1">
            Meaning
          </p>

          <p className="text-sm text-stone-700 leading-relaxed">
            {shloka.meaning}
          </p>
        </div>

        {/* Explanation */}
        <div className="border-t border-stone-100 pt-4">
          <p className="text-sm font-medium text-stone-500 mb-1">
            Explanation
          </p>

          <p className="text-sm text-stone-600 leading-relaxed">
            {shloka.explanation}
          </p>
        </div>

      </article>

    </Link>
  );
}