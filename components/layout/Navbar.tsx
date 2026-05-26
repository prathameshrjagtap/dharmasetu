'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { NAV_ITEMS } from '@/config/navigation';
import { SITE } from '@/config/site';
import { ROUTES } from '@/constants/routes';

import Container from './Container';

import { cn } from '@/lib/cn';

// Active route helper
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
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-[rgba(248,245,241,0.92)] backdrop-blur-md">

      <Container className="max-w-[1400px]">

        <nav
          aria-label="Main navigation"
          className="flex h-20 items-center justify-between"
        >

          {/* LEFT SIDE */}
          <div className="flex items-center">

            {/* Brand */}
            <Link
              href={ROUTES.HOME}
              className="flex shrink-0 items-center gap-4"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-100 bg-gradient-to-b from-amber-50 to-amber-100/70 text-2xl text-amber-700 shadow-sm">
                ॐ
              </span>

              <span className="text-[2rem] font-semibold tracking-tight text-[var(--ds-text)]">
                {SITE.name}
              </span>
            </Link>

          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden flex-1 justify-center lg:flex">

            <ul className="flex items-center gap-2 xl:gap-3">

              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      `
                      rounded-full
                      px-5
                      py-2.5
                      text-sm
                      font-medium
                      tracking-[0.01em]
                      whitespace-nowrap
                      transition-all
                      duration-200
                    `,
                      isActive(item.href, pathname)
                        ? `
                          border
                          border-amber-200
                          bg-gradient-to-b
                          from-amber-50
                          to-amber-100/80
                          text-amber-800
                          shadow-[0_2px_12px_rgba(245,158,11,0.14)]
                        `
                        : `
                          text-stone-600
                          hover:bg-stone-100/80
                          hover:text-stone-900
                        `
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* RIGHT SPACER */}
          <div className="hidden lg:block w-[220px]" />

          {/* MOBILE TOGGLE */}
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() =>
              setOpen((prev) => !prev)
            }
            className="flex flex-col gap-1.5 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-stone-400 lg:hidden"
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

        {/* MOBILE MENU */}
        {open && (
          <ul className="flex flex-col gap-1 border-t border-stone-200/60 py-4 lg:hidden">

            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className={cn(
                    `
                    block
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-colors
                  `,
                    isActive(item.href, pathname)
                      ? `
                        bg-amber-50
                        text-amber-700
                      `
                      : `
                        text-stone-600
                        hover:bg-stone-50
                        hover:text-stone-900
                      `
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