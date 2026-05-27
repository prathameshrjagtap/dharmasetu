import { scriptures, chapters, shlokas } from '@/lib/data';

// Check if scripture exists
export function isValidScripture(
  scripture_id: string
): boolean {
  return scriptures.some(
    (s) => s.id === scripture_id
  );
}

// Check if chapter belongs to scripture
export function doesChapterBelongToScripture(
  scripture_id: string,
  chapter_id: string
): boolean {
  return chapters.some(
    (c) =>
      c.slug === chapter_id &&
      c.scripture_id === scripture_id
  );
}

// Check if shloka belongs to full hierarchy
export function doesShlokaBelongToHierarchy(
  scripture_id: string,
  chapter_id: string,
  shloka_id: string
): boolean {
  return shlokas.some(
    (s) =>
      s.id === shloka_id &&
      s.scripture_id === scripture_id &&
      s.chapter_id === chapter_id
  );
}

// Validate entire hierarchy
export function isValidHierarchy(
  scripture_id: string,
  chapter_id: string,
  shloka_id?: string
): boolean {
  if (!isValidScripture(scripture_id)) {
    return false;
  }

  if (
    !doesChapterBelongToScripture(
      scripture_id,
      chapter_id
    )
  ) {
    return false;
  }

  if (
    shloka_id &&
    !doesShlokaBelongToHierarchy(
      scripture_id,
      chapter_id,
      shloka_id
    )
  ) {
    return false;
  }

  return true;
}