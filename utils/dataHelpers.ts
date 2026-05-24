import {
  scriptures,
  chapters,
  shlokas,
} from '@/lib/data';

import {
  EMPTY_CHAPTERS,
  EMPTY_SHLOKAS,
} from '@/constants/empty';

import {
  isValidScripture,
  doesChapterBelongToScripture,
} from './validators';

import type {
  Scripture,
  Chapter,
  Shloka,
} from '@/types';

// Get scripture by ID
export function getScriptureById(
  scripture_id: string
): Scripture | undefined {
  return scriptures.find(
    (s) => s.id === scripture_id
  );
}

// Get chapters for scripture
export function getChaptersByScripture(
  scripture_id: string
): ReadonlyArray<Chapter> {
  if (!isValidScripture(scripture_id)) {
    return EMPTY_CHAPTERS;
  }

  return chapters
    .filter(
      (c) => c.scripture_id === scripture_id
    )
    .slice()
    .sort(
      (a, b) =>
        a.chapter_number - b.chapter_number
    );
}

// Get shlokas for chapter
export function getShlokasByChapter(
  scripture_id: string,
  chapter_id: string
): ReadonlyArray<Shloka> {
  if (
    !doesChapterBelongToScripture(
      scripture_id,
      chapter_id
    )
  ) {
    return EMPTY_SHLOKAS;
  }

  return shlokas
    .filter(
      (s) =>
        s.scripture_id === scripture_id &&
        s.chapter_id === chapter_id
    )
    .slice()
    .sort(
      (a, b) =>
        a.shloka_number - b.shloka_number
    );
}

// Get single shloka safely
export function getShlokaById(
  scripture_id: string,
  chapter_id: string,
  shloka_id: string
): Shloka | undefined {
  if (
    !doesChapterBelongToScripture(
      scripture_id,
      chapter_id
    )
  ) {
    return undefined;
  }

  return shlokas.find(
    (s) =>
      s.id === shloka_id &&
      s.scripture_id === scripture_id &&
      s.chapter_id === chapter_id
  );
}