import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import Text from '@/components/shared/Text';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

import { createMetadata } from '@/utils/metadata';
import { getShlokaBySlug, getScriptureById, getChaptersByScripture, getAdjacentShlokas, } from '@/utils/dataHelpers';

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

  const { previous, next } = getAdjacentShlokas(
    scriptureId,
    chapterId,
    shloka.shloka_number
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

          <div className="mt-10 border-t border-stone-200 pt-8">

            <h2 className="text-xl font-semibold text-stone-900">
              Explanation
            </h2>

            <Text className="mt-4 leading-relaxed text-stone-700">
              {shloka.explanation}
            </Text>
            
          </div>
          
          <div className="mt-10 flex flex-wrap gap-4 border-t border-stone-200 pt-8">

  {previous && (
    <a
      href={`/shlokas/${previous.slug}`}
      className="rounded-xl border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-50"
    >
      ← Previous Shloka
    </a>
  )}

  {next && (
    <a
      href={`/shlokas/${next.slug}`}
      className="rounded-xl border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-50"
    >
      Next Shloka →
    </a>
  )}

</div>

        </div>

      </SectionWrapper>

    </Container>
  );
}