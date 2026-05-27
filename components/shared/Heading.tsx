import { cn } from '@/lib/cn';

type Level = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  as?: Level;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<Level, string> = {

  h1: `
    font-semibold
    tracking-[-0.04em]
    leading-[0.98]
    text-stone-950
  `,

  h2: `
    font-semibold
    tracking-[-0.03em]
    leading-tight
    text-stone-900
  `,

  h3: `
    font-semibold
    tracking-[-0.02em]
    leading-snug
    text-stone-800
  `,

  h4: `
    font-medium
    leading-snug
    text-stone-700
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