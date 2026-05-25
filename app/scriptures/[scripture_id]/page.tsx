import type { Metadata } from 'next';

import { getScriptureById, getChaptersByScripture } from '@/utils/dataHelpers';

import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PageHeader from '@/components/ui/PageHeader';

import ChapterCard from '@/components/scripture/ChapterCard';

import EmptyState from '@/components/states/EmptyState';
import { notFound } from 'next/navigation';
import { createMetadata } from '@/utils/metadata';

import { getScriptureStats } from '@/lib/data';

interface Props {
  params: Promise<{ scripture_id: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { scripture_id } = await params;

  const scripture = getScriptureById(scripture_id);

  return createMetadata({
    title: scripture ? scripture.name : 'Scripture Not Found',
    description: 
      scripture?.description ?? 
      'Explore scriptures on DharmaSetu.',
  });
}

export default async function ScriptureDetailPage({
  params,
}: Props) {

  const { scripture_id } = await params;

  const scripture = getScriptureById(scripture_id);

  // Guard: invalid scripture_id
  if (!scripture) {
    notFound();
  }

  // Chapters validated to belong to this scripture only
  const chapters = getChaptersByScripture(scripture_id);

  // Dynamic scripture statistics
  const stats = getScriptureStats(scripture.id);

  return (
    <Container>

      <SectionWrapper>

        <PageHeader
          title={scripture.name}
          description={scripture.description}
        />

        {/* Statistics */}
        <div className="mt-6 flex flex-wrap gap-3">

          <div className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-700">
            Chapters: {stats.chapterCount}
          </div>

          <div className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-700">
            Shlokas: {stats.shlokaCount}
          </div>

        </div>

        {/* Chapter List */}
        {chapters.length === 0 ? (

          <EmptyState
            title="No chapters available"
            description="Chapters for this scripture are being added. Please check back soon."
          />

        ) : (

          <ul className="mt-8 flex flex-col gap-3" role="list">

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