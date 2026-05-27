import { cn } from '@/lib/cn';

type Size =
  | 'sm'
  | 'base'
  | 'lg';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  size?: Size;
}

const styles: Record<Size, string> = {

  sm: `
    text-sm
    leading-7
    text-stone-600
  `,

  base: `
    text-[1.02rem]
    leading-8
    text-stone-700
  `,

  lg: `
    text-lg
    leading-9
    text-stone-600
  `,
};

export default function Text({
  children,
  className,
  size = 'base',
}: TextProps) {

  return (
    <p
      className={cn(
        `
        text-pretty
        antialiased
      `,
        styles[size],
        className
      )}
    >
      {children}
    </p>
  );
}