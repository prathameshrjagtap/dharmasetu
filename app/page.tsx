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
      <SectionWrapper className="sacred-fade overflow-hidden pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12">
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
                max-w-2xl
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

      {/* Featured Scriptures */}
      <SectionWrapper className="border-y border-stone-200/50 bg-stone-50/70">

        <Container>

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
              Scriptures
            </p>

            <Heading
              as="h2"
              className="mt-4 text-3xl sm:text-4xl"
            >
              Explore Sacred Knowledge
            </Heading>

            <Text
              className="mt-5 text-lg leading-8 text-stone-600"
            >
              Begin exploring some of the most influential scriptures
              and philosophical texts of Sanatan Dharma through
              structured learning and contextual understanding.
            </Text>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {/* Bhagavad Gita */}
            <div className="sacred-card sacred-hover p-8 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-white hover:shadow-xl">

              <div className="space-y-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-2xl text-amber-700">
                  ॐ
                </div>

                <Heading as="h3">
                  Bhagavad Gita
                </Heading>

                <Text
                  size="sm"
                  className="leading-7"
                >
                  Timeless teachings on duty,
                  self-realization, discipline,
                  and spiritual wisdom.
                </Text>

              </div>

            </div>

            {/* Ramayana */}
            <div className="sacred-card sacred-hover p-8 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-white hover:shadow-xl">

              <div className="space-y-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl text-orange-700">
                  ✦
                </div>

                <Heading as="h3">
                  Ramayana
                </Heading>

                <Text
                  size="sm"
                  className="leading-7"
                >
                  Learn the journey of Shri Rama,
                  devotion, dharma, sacrifice,
                  and righteous living.
                </Text>

              </div>

            </div>

            {/* Upanishads */}
            <div className="sacred-card sacred-hover p-8 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-white hover:shadow-xl">

              <div className="space-y-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 text-2xl text-stone-700">
                  ☸
                </div>

                <Heading as="h3">
                  Upanishads
                </Heading>

                <Text
                  size="sm"
                  className="leading-7"
                >
                  Explore deep philosophical inquiry
                  into consciousness, reality,
                  and the nature of the self.
                </Text>

              </div>

            </div>

            {/* Mahabharata */}
            <div className="sacred-card sacred-hover p-8 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-white hover:shadow-xl">

              <div className="space-y-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-2xl text-yellow-700">
                  ⚔
                </div>

                <Heading as="h3">
                  Mahabharata
                </Heading>

                <Text
                  size="sm"
                  className="leading-7"
                >
                  Understand ethics, conflict,
                  governance, and human nature
                  through epic narratives.
                </Text>

              </div>

            </div>

          </div>

        </Container>

      </SectionWrapper>

      {/* Featured Shloka */}
      <SectionWrapper className="sacred-fade border-y border-stone-200/50">

        <Container size="wide">

          <div className="sacred-reading-panel mx-auto max-w-5xl rounded-[36px] px-8 py-14 sm:px-14 sm:py-20">

            <div className="text-center">

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
                Featured Shloka
              </p>

              <Heading
                as="h2"
                className="mt-5"
              >
                Bhagavad Gita 2.47
              </Heading>

            </div>

            {/* Sanskrit */}
            <div className="mx-auto mt-14 max-w-4xl text-center">

              <p className="reading-sanskrit">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।
                <br />
                मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥
              </p>

            </div>

            {/* Transliteration */}
            <div className="mx-auto max-w-3xl">

              <p className="reading-transliteration text-center">
                karmaṇy-evādhikāras te
                mā phaleṣu kadācana
                <br />
                mā karma-phala-hetur bhūr
                mā te saṅgo ’stv akarmaṇi
              </p>

            </div>

            {/* Meaning */}
            <div className="mx-auto mt-14 max-w-3xl text-center">

              <Text
                size="lg"
                className="text-stone-700"
              >
                You have a right to perform your prescribed duties,
                but you are not entitled to the fruits of your actions.
                Never consider yourself the cause of the results,
                and never be attached to inaction.
              </Text>

            </div>

            {/* CTA */}
            <div className="mt-14 flex justify-center">

              <Link href={ROUTES.SCRIPTURES}>
                <Button>
                  Explore More Shlokas
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

      {/* Learning Paths */}
      <SectionWrapper className="bg-stone-50/60 border-y border-stone-100">

        <Container>

          <div className="text-center">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
              Learning Paths
            </p>

            <Heading
              as="h2"
              className="mt-4"
            >
              Learn Step-by-Step
            </Heading>

            <Text
              className="mx-auto mt-5 max-w-2xl"
            >
              DharmaSetu is designed to help learners
              progress gradually through structured,
              beginner-friendly educational journeys.
            </Text>

          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">

            {/* Beginner */}
            <div className="sacred-card p-7">

              <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
                Level 1
              </p>

              <Heading
                as="h3"
                className="mt-4"
              >
                Beginner Foundations
              </Heading>

              <Text
                size="sm"
                className="mt-4"
              >
                Understand the core concepts,
                values, and structure of
                Sanatan Dharma.
              </Text>

            </div>

            {/* Scriptures */}
            <div className="sacred-card p-7">

              <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
                Level 2
              </p>

              <Heading
                as="h3"
                className="mt-4"
              >
                Scripture Exploration
              </Heading>

              <Text
                size="sm"
                className="mt-4"
              >
                Study shlokas, chapters,
                and teachings from important
                scriptures.
              </Text>

            </div>

            {/* Philosophy */}
            <div className="sacred-card p-7">

              <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
                Level 3
              </p>

              <Heading
                as="h3"
                className="mt-4"
              >
                Philosophy & Thought
              </Heading>

              <Text
                size="sm"
                className="mt-4"
              >
                Explore karma, dharma,
                consciousness, yoga,
                and spiritual philosophy.
              </Text>

            </div>

            {/* Sanskrit */}
            <div className="sacred-card p-7">

              <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
                Level 4
              </p>

              <Heading
                as="h3"
                className="mt-4"
              >
                Sanskrit & Interpretation
              </Heading>

              <Text
                size="sm"
                className="mt-4"
              >
                Learn pronunciation,
                transliteration, and
                contextual understanding.
              </Text>

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