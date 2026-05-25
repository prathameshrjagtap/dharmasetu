'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

import EmptyState from '@/components/states/EmptyState';
import SearchBar from '@/components/shared/SearchBar';

import { searchShlokas } from '@/utils/search';

import type {
  Shloka,
  Chapter,
  Scripture,
} from '@/types';

interface Props {
  shlokas: ReadonlyArray<Shloka>;
  chapters: ReadonlyArray<Chapter>;
  scriptures: ReadonlyArray<Scripture>;
}

export default function ShlokasSearchClient({
  shlokas,
  chapters,
  scriptures,
}: Props) {

  const [query, setQuery] = useState('');

  const filteredShlokas = useMemo(
    () => searchShlokas(query),
    [query]
  );

  return (
    <>

      {/* Search Input */}
      <div className="mt-6">

        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Search shlokas, meanings, or Sanskrit..."
        />

      </div>

      {/* Empty Search Result */}
      {filteredShlokas.length === 0 ? (

        <EmptyState
          title="No matching shlokas found"
          description="Try searching with different keywords or phrases."
        />

      ) : (

        <ul className="mt-8 flex flex-col gap-4" role="list">

          {filteredShlokas.map((shloka) => {

            const scripture = scriptures.find(
              (item) => item.id === shloka.scripture_id
            );

            const chapter = chapters.find(
              (item) => item.id === shloka.chapter_id
            );

            return (
              <li key={shloka.id}>

                <Link
                  href={`/scriptures/${shloka.scripture_id}/${shloka.chapter_id}`}
                  className="block rounded-xl border border-stone-200 bg-white p-6 transition-colors hover:border-stone-300 hover:bg-stone-50"
                >

                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-stone-500">

                    <span>
                      {scripture?.name}
                    </span>

                    <span>•</span>

                    <span>
                      Chapter {chapter?.chapter_number}
                    </span>

                    <span>•</span>

                    <span>
                      Shloka {shloka.shloka_number}
                    </span>

                  </div>

                  {/* Sanskrit */}
                  <p className="mt-4 text-lg leading-relaxed text-stone-900 font-devanagari">
                    {shloka.sanskrit_text}
                  </p>

                  {/* Transliteration */}
                  <p className="mt-4 italic leading-relaxed text-stone-600">
                    {shloka.transliteration}
                  </p>

                  {/* Meaning */}
                  <p className="mt-4 font-medium leading-relaxed text-stone-800">
                    {shloka.meaning}
                  </p>

                </Link>

              </li>
            );
          })}

        </ul>

      )}

    </>
  );
}