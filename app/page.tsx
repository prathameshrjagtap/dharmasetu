import Link from 'next/link';

import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import Heading from '@/components/shared/Heading';
import Text from '@/components/shared/Text';
import Button from '@/components/shared/Button';

import { ROUTES } from '@/constants/routes';
import { SITE } from '@/config/site';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="py-16 sm:py-24">
        <Container size="wide">
          <div className="max-w-3xl">

            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-amber-700">
              Educational • Source-Based • Respectful
            </p>

            <Heading as="h1" className="text-4xl sm:text-5xl leading-tight">
              Sanatan Dharma — A Way of Life, Not Just a Religion
            </Heading>

            <Text size="lg" className="mt-6 max-w-2xl">
              {SITE.name} is an educational platform designed to help learners
              explore Sanatan Dharma through scriptures, shlokas, structured
              learning paths, and respectful study.
            </Text>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={ROUTES.SCRIPTURES}>
                <Button>
                  Explore Scriptures
                </Button>
              </Link>

              <Link href={ROUTES.LEARN}>
                <Button variant="outline">
                  Start Learning
                </Button>
              </Link>
            </div>

          </div>
        </Container>
      </SectionWrapper>

      {/* Mission Section */}
      <SectionWrapper>
        <Container>

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-lg border border-stone-200 bg-white p-6">
              <Heading as="h3">Structured Learning</Heading>

              <Text className="mt-3">
                Learn through beginner, intermediate, and advanced study paths
                designed for gradual understanding.
              </Text>
            </div>

            <div className="rounded-lg border border-stone-200 bg-white p-6">
              <Heading as="h3">Scripture Exploration</Heading>

              <Text className="mt-3">
                Browse scriptures, chapters, and shlokas with explanations and
                contextual understanding.
              </Text>
            </div>

            <div className="rounded-lg border border-stone-200 bg-white p-6">
              <Heading as="h3">Respectful & Educational</Heading>

              <Text className="mt-3">
                DharmaSetu is built for learning and preservation — not debate,
                conversion, or sectarian division.
              </Text>
            </div>

          </div>

        </Container>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <Container>

          <div className="rounded-2xl border border-stone-200 bg-white p-8 sm:p-10 text-center">

            <Heading as="h2">
              Help Improve DharmaSetu
            </Heading>

            <Text className="mt-4 max-w-2xl mx-auto">
              Suggestions, corrections, and educational improvements are welcome.
              DharmaSetu is intended to grow carefully with community guidance.
            </Text>

            <div className="mt-6">
              <Link href={ROUTES.SUGGEST}>
                <Button>
                  Suggest & Improve
                </Button>
              </Link>
            </div>

          </div>

        </Container>
      </SectionWrapper>
    </>
  );
}