import Link from 'next/link';

import Container from './Container';

import { SITE } from '@/config/site';
import { ROUTES } from '@/constants/routes';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200 bg-white py-8">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-medium text-stone-700">
              {SITE.name}
            </p>

            <p className="mt-0.5 text-xs text-stone-400">
              An independent educational resource focused on learning Sanatan Dharma.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={ROUTES.ABOUT}
              className="text-xs text-stone-500 transition-colors hover:text-stone-800"
            >
              About
            </Link>

            <Link
              href={ROUTES.SUGGEST}
              className="text-xs text-stone-500 transition-colors hover:text-stone-800"
            >
              Suggest & Improve
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}