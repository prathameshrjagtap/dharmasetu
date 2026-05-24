import type { Metadata } from 'next';
import { getScriptureById, getChaptersByScripture } from '@/utils/dataHelpers';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import ChapterCard from '@/components/scripture/ChapterCard';
import EmptyState from '@/components/states/EmptyState';
import ErrorState from '@/components/states/ErrorState';

interface Props {
  params: Promise<{ scripture_id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scripture_id } = await params;

  const scripture = getScriptureById(scripture_id);
  return {
    title:       scripture?.name       ?? 'Scripture Not Found',
    description: scripture?.description ?? undefined,
  };
}

export default async function ScriptureDetailPage({ params }: Props) {
  const { scripture_id } = await params;

  const scripture = getScriptureById(scripture_id);

  // Guard: invalid scripture_id
  if (!scripture) {
    return (
      <Container>
        <SectionWrapper>
          <ErrorState
            title="Scripture not found"
            description="The scripture you are looking for does not exist or may have been moved."
          />
        </SectionWrapper>
      </Container>
    );
  }

  // Chapters validated to belong to this scripture only
  const chapters = getChaptersByScripture(scripture_id);

  return (
    <Container>
      <SectionWrapper>
        <PageHeader
          title={scripture.name}
          description={scripture.description}
        />

        {chapters.length === 0 ? (
          <EmptyState
            title="No chapters available"
            description="Chapters for this scripture are being added. Please check back soon."
          />
        ) : (
          <ul className="flex flex-col gap-3" role="list">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <ChapterCard
                  chapter={chapter}
                  scripture_id={scripture_id}
                />
              </li>
            ))}
          </ul>
        )}
      </SectionWrapper>
    </Container>
  );
}