export interface Scripture {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly description: string;

  // Optional metadata
  readonly cover_image?: string;
  readonly featured?: boolean;
  readonly summary?: string;
}