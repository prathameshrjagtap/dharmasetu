import type { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

const VARIANTS = {
  primary:
    'bg-stone-800 text-white hover:bg-stone-900',

  secondary:
    'bg-stone-100 text-stone-800 hover:bg-stone-200',

  outline:
    'border border-stone-300 text-stone-700 hover:bg-stone-50',
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
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}