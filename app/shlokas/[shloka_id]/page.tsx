import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import Text from '@/components/shared/Text';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

import { createMetadata } from '@/utils/metadata';
import { getShlokaBySlug, getScriptureById, getChaptersByScripture } from '@/utils/dataHelpers';

interface Props {
  params: Promise<{ shloka_id: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { shloka_id } = await params;

  const shloka = getShlokaBySlug(shloka_id);

  

  if (!shloka) {
    return createMetadata({
      title: 'Shloka Not Found',
      description: 'The requested shloka could not be found.',
    });
  }

  return createMetadata({
    title: `Shloka ${shloka.shloka_number}`,
    description: shloka.meaning,
  });
}

export default async function ShlokaDetailPage({
  params,
}: Props) {

  const { shloka_id } = await params;

  const shloka = getShlokaBySlug(shloka_id);

  if (!shloka) {
    notFound();
  }

  const scriptureId = shloka.scripture_id;
  const chapterId = shloka.chapter_id;

  const scripture = getScriptureById(scriptureId);
  const chapters = getChaptersByScripture(scriptureId);
  const chapter = chapters.find(
    (c) => c.id === chapterId
  );

  return (
    <Container>

      <SectionWrapper>
        <Breadcrumbs
          items={[
            {
              label: 'Scriptures',
              href: '/scriptures',
            },
            {
              label: scripture?.name ?? 'Scripture',
              href: `/scriptures/${scriptureId}`,
            },
            {
              label: chapter?.name ?? 'Chapter',
              href: `/scriptures/${scriptureId}/${chapterId}`,
            },
            {
              label: `Shloka ${shloka.shloka_number}`,
            },
          ]}
        />
        <PageHeader
          title={`Shloka ${shloka.shloka_number}`}
          description={shloka.meaning}
        />

        {/* Sanskrit */}
        <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-8">

          <p className="text-2xl leading-loose text-stone-900 font-devanagari">
            {shloka.sanskrit_text}
          </p>

          <Text className="mt-8 italic text-stone-600">
            {shloka.transliteration}
          </Text>

          <Text className="mt-8 text-lg leading-relaxed">
            {shloka.meaning}
          </Text>

        </div>

      </SectionWrapper>

    </Container>
  );
}