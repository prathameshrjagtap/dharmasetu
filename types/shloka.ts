export interface Shloka {
  readonly id: string;
  readonly scripture_id: string;
  readonly chapter_id: string;
  readonly shloka_number: number;
  readonly slug: string;

  readonly sanskrit_text: string;
  readonly transliteration: string;
  readonly meaning: string;
  readonly explanation: string;

  // Optional metadata
  readonly source?: string;
  readonly language?: string;
}