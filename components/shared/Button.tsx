import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

const VARIANTS = {

  primary: `
    bg-[var(--ds-text)]
    text-white

    hover:-translate-y-[1px]
    hover:bg-black
    hover:shadow-[0_10px_24px_rgba(30,20,10,0.12)]
  `,

  secondary: `
    bg-stone-100
    text-stone-800

    hover:-translate-y-[1px]
    hover:bg-stone-200
  `,

  outline: `
    border
    border-stone-300
    bg-white/80
    text-stone-700

    hover:-translate-y-[1px]
    hover:border-stone-400
    hover:bg-stone-50
  `,
} as const;

type Variant = keyof typeof VARIANTS;

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {

  return (
    <button
      className={cn(
        `
        inline-flex
        items-center
        justify-center

        rounded-full

        px-6
        py-3

        text-sm
        font-medium
        tracking-[0.01em]

        transition-all
        duration-300

        focus:outline-none
        focus:ring-2
        focus:ring-amber-200
        focus:ring-offset-2

        disabled:cursor-not-allowed
        disabled:opacity-50
      `,
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}