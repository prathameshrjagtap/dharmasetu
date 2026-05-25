import type { Metadata } from 'next';

import { SITE } from '@/config/site';

interface MetadataParams {
  title: string;
  description: string;
}

export function createMetadata({
  title,
  description,
}: MetadataParams): Metadata {

  const fullTitle = `${title} | ${SITE.name}`;

  return {
    title: fullTitle,

    description,

    openGraph: {
      title: fullTitle,
      description,
      siteName: SITE.name,
      type: 'website',
    },

    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}