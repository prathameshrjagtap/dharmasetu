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
      <SectionWrapper className="sacred-fade overflow-hidden py-16 sm:py-20 lg:py-24">
        <Container size="wide">

          <div className="mx-auto max-w-5xl text-center">

            {/* Badge */}
            <div
              className="
                sacred-surface
                inline-flex
                items-center
                gap-2
                rounded-full
                px-5
                py-2
                text-sm
                text-stone-600
              "
            >
              <span className="text-amber-700">
                ✦
              </span>

              <span>
                Structured Learning for Sanatan Dharma
              </span>
            </div>

            {/* Heading */}
            <Heading
              as="h1"
              className="
                scripture-heading
                mx-auto
                mt-8
                max-w-5xl
                text-4xl
                leading-[1.02]
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              <span className="block">
                Sanatan Dharma
              </span>

              <span className="block mt-2">
                A Way of Life,
              </span>

              <span className="block mt-2">
                Not Just a Religion
              </span>
            </Heading>

            {/* Description */}
            <Text
              size="lg"
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-base
                leading-8
                text-stone-600
                sm:text-lg
              "
            >
              {SITE.name} is a structured educational platform designed
              to help learners explore scriptures, shlokas, philosophy,
              and teachings of Sanatan Dharma in an organized,
              respectful, and beginner-friendly way.
            </Text>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <Link href={ROUTES.SCRIPTURES}>
                <Button className="min-w-[190px]">
                  Explore Scriptures
                </Button>
              </Link>

              <Link href={ROUTES.LEARN}>
                <Button
                  variant="outline"
                  className="min-w-[190px]"
                >
                  Start Learning
                </Button>
              </Link>

            </div>

          </div>

        </Container>
      </SectionWrapper>

      {/* Mission Section */}
      <SectionWrapper className="border-y border-stone-200/60 bg-stone-50/60">
        <Container size="wide">

          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

            {/* Left Content */}
            <div className="max-w-2xl">

              <p className="text-sm font-medium uppercase tracking-[0.22em] text-amber-700">
                Purpose
              </p>

              <Heading
                as="h2"
                className="mt-5 max-w-xl"
              >
                Why DharmaSetu Exists
              </Heading>

              <Text className="mt-6 text-lg leading-8 text-stone-600">
                Many people wish to learn Sanatan Dharma in a structured
                and respectful way, but often struggle to find educational
                resources that are organized, beginner-friendly,
                and rooted in authentic sources.
              </Text>

              <Text className="mt-5 text-lg leading-8 text-stone-600">
                DharmaSetu aims to bridge that gap through carefully
                structured scripture exploration, contextual explanations,
                and guided learning pathways.
              </Text>

            </div>

            {/* Right Card */}
            <div className="sacred-card p-8 lg:p-10">

              <Heading as="h3">
                Core Principles
              </Heading>

              <ul className="mt-8 space-y-6 text-sm leading-7 text-stone-600">

                <li className="flex gap-4">
                  <span className="mt-1 text-amber-700">
                    ✦
                  </span>

                  <span>
                    Educational and source-based learning
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-amber-700">
                    ✦
                  </span>

                  <span>
                    Structured scripture exploration
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-amber-700">
                    ✦
                  </span>

                  <span>
                    Respectful and inclusive presentation
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-amber-700">
                    ✦
                  </span>

                  <span>
                    Beginner-friendly explanations
                  </span>
                </li>

                <li className="flex gap-4">
                  <span className="mt-1 text-amber-700">
                    ✦
                  </span>

                  <span>
                    Preservation through learning and understanding
                  </span>
                </li>

              </ul>

            </div>

          </div>

        </Container>
      </SectionWrapper>

      {/* Quick Navigation */}
      <SectionWrapper>
        <Container size="wide">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-medium uppercase tracking-[0.22em] text-amber-700">
              Begin Exploring
            </p>

            <Heading
              as="h2"
              className="mt-5"
            >
              Begin Your Journey
            </Heading>

            <Text className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              Explore scriptures, follow learning paths,
              and contribute toward preserving timeless wisdom
              through structured understanding.
            </Text>

          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">

            {/* Scriptures */}
            <Link
              href={ROUTES.SCRIPTURES}
              className="
                sacred-card
                sacred-hover
                group
                p-8
                lg:p-10
              "
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-xl text-amber-700">
                📜
              </div>

              <Heading
                as="h3"
                className="mt-8"
              >
                Scriptures
              </Heading>

              <Text
                size="sm"
                className="mt-4 leading-7 text-stone-600"
              >
                Explore foundational texts like the Bhagavad Gita,
                Ramayana, and other sacred scriptures.
              </Text>

            </Link>

            {/* Learn */}
            <Link
              href={ROUTES.LEARN}
              className="
                sacred-card
                sacred-hover
                group
                p-8
                lg:p-10
              "
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-xl text-amber-700">
                🌿
              </div>

              <Heading
                as="h3"
                className="mt-8"
              >
                Learn
              </Heading>

              <Text
                size="sm"
                className="mt-4 leading-7 text-stone-600"
              >
                Follow structured learning paths designed
                for beginners and curious learners.
              </Text>

            </Link>

            {/* Suggest */}
            <Link
              href={ROUTES.SUGGEST}
              className="
                sacred-card
                sacred-hover
                group
                p-8
                lg:p-10
              "
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-xl text-amber-700">
                ✨
              </div>

              <Heading
                as="h3"
                className="mt-8"
              >
                Suggest & Improve
              </Heading>

              <Text
                size="sm"
                className="mt-4 leading-7 text-stone-600"
              >
                Help improve DharmaSetu through respectful
                suggestions and thoughtful feedback.
              </Text>

            </Link>

          </div>

        </Container>
      </SectionWrapper>
    </>
  );
}