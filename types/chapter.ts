export interface Chapter {
  readonly id: string;
  readonly slug: string;
  readonly scripture_id: string;
  readonly name: string;
  readonly chapter_number: number;

  // Optional metadata
  readonly cover_image?: string;
  readonly summary?: string;
}