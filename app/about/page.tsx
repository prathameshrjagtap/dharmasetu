import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import Heading from '@/components/shared/Heading';
import Text from '@/components/shared/Text';

export default function AboutPage() {
  return (
    <Container>

      <SectionWrapper>

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-wide text-amber-700">
            About DharmaSetu
          </p>

          <Heading as="h1" className="mt-2">
            A Respectful Educational Initiative
          </Heading>

          <Text size="lg" className="mt-4">
            DharmaSetu is an independent educational platform created to help
            learners explore Sanatan Dharma through scriptures, shlokas,
            philosophy, and structured learning resources.
          </Text>

        </div>

      </SectionWrapper>

      <SectionWrapper>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-xl border border-stone-200 bg-white p-6">
            <Heading as="h3">
              Educational Purpose
            </Heading>

            <Text className="mt-3">
              DharmaSetu is designed purely for educational and learning
              purposes. The platform aims to make foundational knowledge
              more accessible in a respectful and structured format.
            </Text>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-6">
            <Heading as="h3">
              Source-Based Learning
            </Heading>

            <Text className="mt-3">
              Content is intended to be rooted in scriptures and traditional
              references wherever possible, while remaining approachable for
              modern learners.
            </Text>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-6">
            <Heading as="h3">
              Respectful Approach
            </Heading>

            <Text className="mt-3">
              DharmaSetu does not promote sectarian conflict, conversion,
              or disrespect toward any belief system. The goal is learning,
              preservation, and understanding.
            </Text>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-6">
            <Heading as="h3">
              Community Improvement
            </Heading>

            <Text className="mt-3">
              The platform may gradually evolve through carefully reviewed
              suggestions, corrections, and educational contributions from
              the community.
            </Text>
          </div>

        </div>

      </SectionWrapper>

    </Container>
  );
}