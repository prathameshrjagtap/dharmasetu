'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { NAV_ITEMS } from '@/config/navigation';
import { SITE } from '@/config/site';
import { ROUTES } from '@/constants/routes';

import Container from './Container';

import { cn } from '@/lib/cn';

// Handles active route detection
function isActive(
  href: string,
  pathname: string
): boolean {
  if (href === ROUTES.HOME) {
    return pathname === ROUTES.HOME;
  }

  return (
    pathname === href ||
    pathname.startsWith(href + '/')
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] =
    useState(false);

  return (
    <header className="border-b border-stone-200 bg-white">
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex h-16 items-center justify-between"
        >
          {/* Brand */}
          <Link
            href={ROUTES.HOME}
            className="text-lg font-semibold tracking-tight text-stone-800"
          >
            {SITE.name}
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm transition-colors',
                    isActive(
                      item.href,
                      pathname
                    )
                      ? 'font-medium text-amber-700'
                      : 'text-stone-600 hover:text-stone-900'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() =>
              setOpen((prev) => !prev)
            }
            className="flex flex-col gap-1.5 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-stone-400 md:hidden"
          >
            <span
              className={cn(
                'block h-0.5 w-5 bg-stone-700 transition-transform',
                open &&
                  'translate-y-2 rotate-45'
              )}
            />

            <span
              className={cn(
                'block h-0.5 w-5 bg-stone-700 transition-opacity',
                open && 'opacity-0'
              )}
            />

            <span
              className={cn(
                'block h-0.5 w-5 bg-stone-700 transition-transform',
                open &&
                  '-translate-y-2 -rotate-45'
              )}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <ul className="flex flex-col gap-1 pb-4 md:hidden">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm transition-colors',
                    isActive(
                      item.href,
                      pathname
                    )
                      ? 'bg-amber-50 font-medium text-amber-700'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </header>
  );
}