import {
  scriptures,
  chapters,
  shlokas,
} from '@/lib/data';

import type {
  Scripture,
  Chapter,
  Shloka,
} from '@/types';

// Normalize search text
function normalize(text: string): string {
  return text
    .toLowerCase()
    .trim();
}

// Search scriptures
export function searchScriptures(
  query: string
): ReadonlyArray<Scripture> {

  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return scriptures;
  }

  return scriptures.filter((scripture) =>
    normalize(scripture.name).includes(normalizedQuery)
  );
}

// Search chapters
export function searchChapters(
  query: string
): ReadonlyArray<Chapter> {

  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return chapters;
  }

  return chapters.filter((chapter) =>
    normalize(chapter.name).includes(normalizedQuery)
  );
}

// Search shlokas
export function searchShlokas(
  query: string
): ReadonlyArray<Shloka> {

  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return shlokas;
  }

  return shlokas.filter((shloka) => {

    return (
      normalize(shloka.sanskrit_text).includes(normalizedQuery) ||
      normalize(shloka.transliteration).includes(normalizedQuery) ||
      normalize(shloka.meaning).includes(normalizedQuery)
    );
  });
}