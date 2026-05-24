// Centralized immutable data layer.
// NEVER import raw JSON directly elsewhere in the app.

import scripturesRaw from '@/data/scriptures/scriptures.json';
import chaptersRaw from '@/data/chapters/chapters.json';
import shlokasRaw from '@/data/shlokas/shlokas.json';

import type { Scripture, Chapter, Shloka } from '@/types';

export const scriptures =
  scripturesRaw as ReadonlyArray<Scripture>;

export const chapters =
  chaptersRaw as ReadonlyArray<Chapter>;

export const shlokas =
  shlokasRaw as ReadonlyArray<Shloka>;