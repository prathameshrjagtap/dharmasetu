import Link from 'next/link';
import type { Metadata } from 'next';

import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import PageHeader from '@/components/ui/PageHeader';
import Heading from '@/components/shared/Heading';
import Text from '@/components/shared/Text';
import { createMetadata } from '@/utils/metadata';

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
        <ul className="mt-8 flex flex-col gap-4" role="list">

          {shlokas.map((shloka) => {

            const scripture = scriptures.find(
              (item) => item.id === shloka.scripture_id
            );

            const chapter = chapters.find(
              (item) => item.id === shloka.chapter_id
            );

            return (
              <li key={shloka.id}>

                <Link
                  href={`/scriptures/${shloka.scripture_id}/${shloka.chapter_id}`}
                  className="block rounded-xl border border-stone-200 bg-white p-6 transition-colors hover:border-stone-300 hover:bg-stone-50"
                >

                  <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-stone-500">

                    <span>
                      {scripture?.name}
                    </span>

                    <span>•</span>

                    <span>
                      Chapter {chapter?.chapter_number}
                    </span>

                    <span>•</span>

                    <span>
                      Shloka {shloka.shloka_number}
                    </span>

                  </div>

                  {/* Sanskrit */}
                  <p className="mt-4 text-lg leading-relaxed text-stone-900 font-devanagari">
                    {shloka.sanskrit_text}
                  </p>

                  {/* Transliteration */}
                  <p className="mt-4 italic leading-relaxed text-stone-600">
                    {shloka.transliteration}
                  </p>

                  {/* Meaning */}
                  <p className="mt-4 font-medium leading-relaxed text-stone-800">
                    {shloka.meaning}
                  </p>

                </Link>

              </li>
            );
          })}

        </ul>

      </SectionWrapper>

    </Container>
  );
}