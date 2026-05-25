import type { Metadata } from 'next';
import { getScriptureById, getChaptersByScripture, getShlokasByChapter } from '@/utils/dataHelpers';
import { isValidHierarchy } from '@/utils/validators';
import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import ShlokaCard from '@/components/scripture/ShlokaCard';
import EmptyState from '@/components/states/EmptyState';
import { notFound } from 'next/navigation';
import ChapterNavigation from '@/components/scripture/ChapterNavigation';
import { createMetadata } from '@/utils/metadata';

interface Props {
  params: Promise<{ scripture_id: string; chapter_id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { scripture_id, chapter_id } = await params;

  if (!isValidHierarchy(scripture_id, chapter_id)) {
    return createMetadata({
      title: 'Invalid Chapter',
      description: 'The requested chapter could not be found.',
    });
  }

  const scripture = getScriptureById(scripture_id);
  const chapters = getChaptersByScripture(scripture_id);
  const chapter = chapters.find((c) => c.id === chapter_id);

  return createMetadata({
    title: chapter?.name ?? 'Chapter',
    description: `Read shlokas from ${chapter?.name} of ${scripture?.name}.`,
  });
}

export default async function ChapterDetailPage({ params }: Props) {
  const { scripture_id, chapter_id } = await params;

  // Guard: validate full hierarchy before rendering anything
  if (!isValidHierarchy(scripture_id, chapter_id)) {
    notFound();
  }

  const scripture = getScriptureById(scripture_id)!;
  const chapters = getChaptersByScripture(scripture_id);
  const chapter = chapters.find((c) => c.id === chapter_id)!;

  // Shlokas validated against BOTH scripture_id and chapter_id
  const shlokas = getShlokasByChapter(scripture_id, chapter_id);

  return (
    <Container>
      <SectionWrapper>
        {/* Breadcrumb context */}
        <p className="mb-1 text-xs text-stone-400 uppercase tracking-wide">
          {scripture.name} · Chapter {chapter.chapter_number}
        </p>

        <PageHeader
          title={chapter.name}
          description={`Shlokas from Chapter ${chapter.chapter_number} of ${scripture.name}.`}
        />

        {shlokas.length === 0 ? (
          <EmptyState
            title="No shlokas available"
            description="Shlokas for this chapter are being added. Please check back soon."
          />
        ) : (
          <ul className="flex flex-col gap-6" role="list">
            {shlokas.map((shloka) => (
              <li key={shloka.id}>
                <ShlokaCard shloka={shloka} />
              </li>
            ))}
          </ul>
        )}
        <ChapterNavigation
          scriptureId={scripture_id}
          chapters={chapters}
          currentChapterNumber={chapter.chapter_number}
        />
      </SectionWrapper>
    </Container>
  );
}