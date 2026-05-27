import Link from 'next/link';

import Container from './Container';

import { SITE } from '@/config/site';
import { ROUTES } from '@/constants/routes';

export default function Footer() {
  return (
    <footer
      className="
        mt-auto
        border-t border-stone-200/60
        bg-[rgba(248,245,241,0.82)]
        backdrop-blur-md
      "
    >
      <Container className="max-w-7xl">

        <div
          className="
            grid gap-12
            py-14
            md:grid-cols-3
          "
        >

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3">

              <span
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  bg-amber-50
                  text-xl
                  text-amber-700
                  shadow-sm
                "
              >
                ॐ
              </span>

              <span className="text-2xl font-semibold tracking-tight text-[var(--ds-text)]">
                {SITE.name}
              </span>

            </div>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-7
                text-stone-600
              "
            >
              A structured educational platform dedicated
              to learning and understanding Sanatan Dharma
              through respectful and source-based exploration.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-amber-700
              "
            >
              Navigation
            </p>

            <div className="mt-5 flex flex-col gap-4">

              <Link
                href={ROUTES.SCRIPTURES}
                className="text-sm text-stone-600 transition-colors hover:text-stone-950"
              >
                Scriptures
              </Link>

              <Link
                href={ROUTES.LEARN}
                className="text-sm text-stone-600 transition-colors hover:text-stone-950"
              >
                Learn
              </Link>

              <Link
                href={ROUTES.ABOUT}
                className="text-sm text-stone-600 transition-colors hover:text-stone-950"
              >
                About
              </Link>

              <Link
                href={ROUTES.SUGGEST}
                className="text-sm text-stone-600 transition-colors hover:text-stone-950"
              >
                Suggest & Improve
              </Link>

            </div>

          </div>

          {/* Closing Philosophy */}
          <div>

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-amber-700
              "
            >
              DharmaSetu
            </p>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-7
                text-stone-600
              "
            >
              Ancient wisdom,
              presented through structured
              understanding for modern learners.
            </p>

          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className="
            sacred-divider
          "
        />

        <div
          className="
            flex flex-col gap-3
            py-6
            text-xs
            text-stone-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            © 2026 {SITE.name}. Educational and non-commercial.
          </p>

          <p>
            Built with respect for Sanatan Dharma.
          </p>

        </div>

      </Container>
    </footer>
  );
}