import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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

        <SectionWrapper className="py-10 md:py-14">
          <div className="opacity-80">
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
          </div>
          <div className="mt-6 max-w-3xl">
            <PageHeader
              title={`Shloka ${shloka.shloka_number}`}
              description={shloka.meaning}
            />
          </div>
          {/* Sanskrit */}
          <div className="sacred-card sacred-fade mt-12 p-10">

            <div className="mx-auto max-w-4xl">

              <p className="sanskrit-text text-3xl leading-[2.8rem] tracking-[0.02em] md:text-4xl md:leading-[4.5rem]">
                {shloka.sanskrit_text}
              </p>

              <Text className="mt-10 text-base italic leading-relaxed text-stone-600">
                {shloka.transliteration}
              </Text>

              <Text className="mt-12 text-xl leading-10 text-stone-800">
                {shloka.meaning}
              </Text>

              <div className="mt-14 pt-10">
                <div className="sacred-divider mb-10" />

                <h2 className="text-xl font-semibold tracking-wide text-stone-800">
                  Explanation
                </h2>

                <Text className="mt-5 text-lg leading-8 text-stone-700">
                  {shloka.explanation}
                </Text>

              </div>

              <div className="mt-16 flex flex-col gap-4 border-t border-stone-100 pt-10 sm:flex-row sm:items-center sm:justify-between">

                {/* Previous */}
                <div>
                  {previous && (
                    <Link
                      href={`/shlokas/${previous.slug}`}
                      className="group inline-flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 transition-all hover:border-stone-300 hover:bg-white"
                    >
                      <span className="mt-1 text-stone-400 transition-transform group-hover:-translate-x-1">
                        ←
                      </span>

                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                          Previous
                        </p>

                        <p className="mt-1 text-sm font-medium text-stone-700">
                          Shloka {previous.shloka_number}
                        </p>
                      </div>
                    </Link>
                  )}
                </div>

                {/* Next */}
                <div>
                  {next && (
                    <Link
                      href={`/shlokas/${next.slug}`}
                      className="group inline-flex items-start gap-3 rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 transition-all hover:border-stone-300 hover:bg-white"
                    >
                      <div className="text-right">
                        <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                          Next
                        </p>

                        <p className="mt-1 text-sm font-medium text-stone-700">
                          Shloka {next.shloka_number}
                        </p>
                      </div>

                      <span className="mt-1 text-stone-400 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  )}
                </div>

              </div>
            </div>
          </div>

        </SectionWrapper>
      
    </Container>
  );
}