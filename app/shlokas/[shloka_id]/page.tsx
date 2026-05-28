import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import Text from '@/components/shared/Text';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

import { createMetadata } from '@/utils/metadata';

import {
  getShlokaBySlug,
  getScriptureById,
  getChaptersByScripture,
  getAdjacentShlokas,
} from '@/utils/dataHelpers';

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
    (c) => c.slug === chapterId
  );

  const { previous, next } = getAdjacentShlokas(
    scriptureId,
    chapterId,
    shloka.shloka_number
  );

  return (
    <Container>

      <SectionWrapper className="py-10 md:py-14">

        {/* Breadcrumbs */}
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
                href: `/scriptures/${scriptureId}/${chapter?.slug}`,
              },
              {
                label: `Shloka ${shloka.shloka_number}`,
              },
            ]}
          />
        </div>

        {/* Header */}
        <div className="mt-6 max-w-3xl">
          <PageHeader
            title={`Shloka ${shloka.shloka_number}`}
            description={shloka.meaning}
          />
        </div>

        {/* Reading Panel */}
        <div className="sacred-fade mt-12">

          <div
            className="
              sacred-reading-panel
              mx-auto
              max-w-5xl
              rounded-[40px]
              px-8
              py-12
              sm:px-12
              sm:py-14
              lg:px-16
              lg:py-16
            "
          >

            {/* Sanskrit */}
            <p
              className="
                sanskrit-text
                text-4xl
                leading-[4rem]
                tracking-[0.02em]
                text-stone-950
                md:text-5xl
                md:leading-[5.8rem]
              "
            >
              {shloka.sanskrit_text}
            </p>

            {/* Transliteration */}
            <Text
              className="
                mt-12
                text-lg
                italic
                leading-9
                text-stone-500
              "
            >
              {shloka.transliteration}
            </Text>

            {/* Meaning */}
            <Text
              className="
                mt-12
                max-w-4xl
                text-2xl
                leading-[3.2rem]
                text-stone-800
              "
            >
              {shloka.meaning}
            </Text>

            {/* Explanation */}
            <div className="mt-14">

              <div className="sacred-divider mb-10" />

              <h2
                className="
                  text-2xl
                  font-semibold
                  tracking-wide
                  text-stone-800
                "
              >
                Explanation
              </h2>

              <Text
                className="
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-9
                  text-stone-700
                "
              >
                {shloka.explanation}
              </Text>

            </div>

            {/* Navigation */}
            <div
              className="
                mt-12
                border-t
                border-stone-100
                pt-8
              "
            >

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                {/* Previous */}
                <div>
                  {previous && (
                    <Link
                      href={`/shlokas/${previous.slug}`}
                      className="
                        group
                        inline-flex
                        items-start
                        gap-3
                        rounded-2xl
                        border
                        border-stone-200
                        bg-stone-50
                        px-5
                        py-4
                        transition-all
                        hover:border-stone-300
                        hover:bg-white
                      "
                    >

                      <span
                        className="
                          mt-1
                          text-stone-400
                          transition-transform
                          group-hover:-translate-x-1
                        "
                      >
                        ←
                      </span>

                      <div>
                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-stone-400
                          "
                        >
                          Previous
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-medium
                            text-stone-700
                          "
                        >
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
                      className="
                        group
                        inline-flex
                        items-start
                        gap-3
                        rounded-2xl
                        border
                        border-stone-200
                        bg-stone-50
                        px-5
                        py-4
                        transition-all
                        hover:border-stone-300
                        hover:bg-white
                      "
                    >

                      <div className="text-right">

                        <p
                          className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-stone-400
                          "
                        >
                          Next
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-medium
                            text-stone-700
                          "
                        >
                          Shloka {next.shloka_number}
                        </p>

                      </div>

                      <span
                        className="
                          mt-1
                          text-stone-400
                          transition-transform
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>

                    </Link>
                  )}
                </div>

              </div>
            </div>

          </div>
        </div>

      </SectionWrapper>

    </Container>
  );
}