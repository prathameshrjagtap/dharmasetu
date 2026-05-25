import type { Metadata } from 'next';
import { scriptures } from '@/lib/data';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import ScriptureCard from '@/components/scripture/ScriptureCard';
import EmptyState from '@/components/states/EmptyState';
import { createMetadata } from '@/utils/metadata';

export const metadata: Metadata = createMetadata({
  title:       'Scriptures',
  description: 'Browse the sacred scriptures of Sanatan Dharma.',
});

export default function ScripturesPage() {
  return (
    <Container>
      <SectionWrapper>
        <PageHeader
          title="Scriptures"
          description="Explore foundational texts of Sanatan Dharma. Select a scripture to browse its chapters and shlokas."
        />

        {scriptures.length === 0 ? (
          <EmptyState
            title="No scriptures available"
            description="Content is being added. Please check back soon."
          />
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2" role="list">
            {scriptures.map((scripture) => (
              <li key={scripture.id}>
                <ScriptureCard scripture={scripture} />
              </li>
            ))}
          </ul>
        )}
      </SectionWrapper>
    </Container>
  );
}