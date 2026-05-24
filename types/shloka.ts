export interface Shloka {
  readonly id: string;
  readonly scripture_id: string;
  readonly chapter_id: string;
  readonly shloka_number: number;

  readonly sanskrit_text: string;
  readonly transliteration: string;
  readonly meaning: string;
  readonly explanation: string;

  // Optional metadata
  readonly source?: string;
  readonly language?: string;
}