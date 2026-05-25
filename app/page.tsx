import Link from 'next/link';
import type { Metadata } from 'next';

import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import Button from '@/components/shared/Button';
import Heading from '@/components/shared/Heading';
import Text from '@/components/shared/Text';
import { createMetadata } from '@/utils/metadata';

import { ROUTES } from '@/constants/routes';
import { SITE } from '@/config/site';

export const metadata: Metadata = createMetadata({
  title: 'Home',
  description:
    'DharmaSetu is a structured educational platform for exploring Sanatan Dharma through scriptures, shlokas, philosophy, and learning paths.',
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="pt-16 sm:pt-24">
        <Container size="wide">
          <div className="max-w-3xl">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
              Educational Platform
            </p>

            <Heading
              as="h1"
              className="mt-4 text-4xl font-bold leading-tight sm:text-5xl"
            >
              Sanatan Dharma —
              <br />
              A Way of Life, Not Just a Religion
            </Heading>

            <Text size="lg" className="mt-6 max-w-2xl">
              {SITE.name} is a structured educational platform designed to help
              learners explore scriptures, shlokas, philosophy, and teachings
              of Sanatan Dharma in an organized and respectful way.
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
      <SectionWrapper className="bg-stone-50/70 border-y border-stone-100">
        <Container>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
                Purpose
              </p>

              <Heading as="h2" className="mt-3">
                Why DharmaSetu Exists
              </Heading>

              <Text className="mt-5">
                Many people wish to learn Sanatan Dharma in a structured and
                respectful way but often struggle to find educational resources that
                are organized, beginner-friendly, and source-based.
              </Text>

              <Text className="mt-4">
                DharmaSetu aims to bridge that gap through carefully structured
                scripture exploration, learning paths, and contextual explanations.
              </Text>

            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">

              <Heading as="h3">
                Core Principles
              </Heading>

              <ul className="mt-6 space-y-5 text-sm text-stone-600">

                <li className="flex gap-3">
                  <span className="text-amber-700">•</span>
                  Educational and source-based learning
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-700">•</span>
                  Structured scripture exploration
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-700">•</span>
                  Respectful and inclusive presentation
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-700">•</span>
                  Beginner-friendly explanations
                </li>

                <li className="flex gap-3">
                  <span className="text-amber-700">•</span>
                  Preservation through learning and understanding
                </li>

              </ul>

            </div>

          </div>

        </Container>
      </SectionWrapper>

      {/* Quick Navigation */}
      <SectionWrapper>
        <Container>

          <Heading as="h2">
            Begin Your Journey
          </Heading>

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <Link
              href={ROUTES.SCRIPTURES}
              className="rounded-xl border border-stone-200 bg-white p-6 transition-colors hover:border-stone-300 hover:bg-stone-50"
            >
              <Heading as="h3">
                Scriptures
              </Heading>

              <Text size="sm" className="mt-2">
                Explore foundational texts like the Bhagavad Gita and Ramayana.
              </Text>
            </Link>

            <Link
              href={ROUTES.LEARN}
              className="rounded-xl border border-stone-200 bg-white p-6 transition-colors hover:border-stone-300 hover:bg-stone-50"
            >
              <Heading as="h3">
                Learn
              </Heading>

              <Text size="sm" className="mt-2">
                Follow structured learning paths for beginners and learners.
              </Text>
            </Link>

            <Link
              href={ROUTES.SUGGEST}
              className="rounded-xl border border-stone-200 bg-white p-6 transition-colors hover:border-stone-300 hover:bg-stone-50"
            >
              <Heading as="h3">
                Suggest & Improve
              </Heading>

              <Text size="sm" className="mt-2">
                Help improve DharmaSetu through respectful community feedback.
              </Text>
            </Link>

          </div>

        </Container>
      </SectionWrapper>
    </>
  );
}