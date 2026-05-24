import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import Heading from '@/components/shared/Heading';
import Text from '@/components/shared/Text';

export default function LearnPage() {
  return (
    <Container>
      <SectionWrapper>

        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-amber-700">
            Learning Paths
          </p>

          <Heading as="h1" className="mt-2">
            Learn Sanatan Dharma Step by Step
          </Heading>

          <Text size="lg" className="mt-4">
            DharmaSetu is designed to help learners gradually explore the
            philosophy, scriptures, values, and traditions of Sanatan Dharma
            through structured educational paths.
          </Text>
        </div>

      </SectionWrapper>

      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-3">

          {/* Beginner */}
          <div className="rounded-xl border border-stone-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              Beginner
            </p>

            <Heading as="h3" className="mt-3">
              Foundations of Dharma
            </Heading>

            <Text className="mt-3">
              Learn core concepts such as Dharma, Karma, Yoga, basic scriptures,
              and important values in everyday life.
            </Text>
          </div>

          {/* Intermediate */}
          <div className="rounded-xl border border-stone-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              Intermediate
            </p>

            <Heading as="h3" className="mt-3">
              Scriptures & Philosophy
            </Heading>

            <Text className="mt-3">
              Explore the Bhagavad Gita, Upanishads, Ramayana, Mahabharata,
              and philosophical schools of Sanatan Dharma.
            </Text>
          </div>

          {/* Advanced */}
          <div className="rounded-xl border border-stone-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
              Advanced
            </p>

            <Heading as="h3" className="mt-3">
              Deep Study & Interpretation
            </Heading>

            <Text className="mt-3">
              Study deeper interpretations, Sanskrit references, comparative
              philosophies, and advanced spiritual concepts.
            </Text>
          </div>

        </div>
      </SectionWrapper>
    </Container>
  );
}