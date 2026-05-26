import { cn } from '@/lib/cn';

type Level = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  as?: Level;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<Level, string> = {
  h1: `
    text-4xl
    sm:text-5xl
    lg:text-6xl
    font-bold
    leading-[1.05]
    tracking-tight
    text-stone-950
  `,

  h2: `
    text-3xl
    sm:text-4xl
    font-bold
    leading-tight
    tracking-tight
    text-stone-900
  `,

  h3: `
    text-xl
    sm:text-2xl
    font-semibold
    leading-snug
    tracking-tight
    text-stone-900
  `,

  h4: `
    text-lg
    font-semibold
    leading-snug
    text-stone-800
  `,
};

export default function Heading({
  as: Tag = 'h2',
  children,
  className,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        styles[Tag],
        className
      )}
    >
      {children}
    </Tag>
  );
}