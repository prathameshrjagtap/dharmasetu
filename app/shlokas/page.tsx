import Link from 'next/link';
import type { Metadata } from 'next';

import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import Heading from '@/components/shared/Heading';
import Text from '@/components/shared/Text';
import { createMetadata } from '@/utils/metadata';
import ShlokasSearchClient from './ShlokasSearchClient';

import EmptyState from '@/components/states/EmptyState';

import { shlokas, chapters, scriptures } from '@/lib/data';

export const metadata: Metadata = createMetadata({
  title: 'Shlokas',
  description:
    'Browse Sanskrit shlokas across scriptures and chapters on DharmaSetu.',
});

export default function ShlokasPage() {

  if (shlokas.length === 0) {
    return (
      <Container>
        <SectionWrapper>
          <EmptyState
            title="No shlokas available"
            description="Shlokas are being added gradually. Please check back soon."
          />
        </SectionWrapper>
      </Container>
    );
  }

  return (
    <Container>

      <SectionWrapper>

        <PageHeader
          title="Shlokas"
          description="Browse shlokas across scriptures and chapters."
        />

        {/* Stats */}
        <div className="mt-6 flex flex-wrap gap-3">

          <div className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700">
            Total Shlokas: {shlokas.length}
          </div>

          <div className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700">
            Scriptures: {scriptures.length}
          </div>

          <div className="rounded-lg border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700">
            Chapters: {chapters.length}
          </div>

        </div>

        {/* Shloka List */}
        <ShlokasSearchClient
          shlokas={shlokas}
          chapters={chapters}
          scriptures={scriptures}
        />

      </SectionWrapper>

    </Container>
  );
}