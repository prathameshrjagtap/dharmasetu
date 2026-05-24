import { cn } from '@/lib/cn';

type Level = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  as?: Level;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<Level, string> = {
  h1: 'text-2xl sm:text-3xl font-semibold text-stone-800',
  h2: 'text-xl sm:text-2xl font-semibold text-stone-800',
  h3: 'text-lg font-medium text-stone-800',
  h4: 'text-base font-medium text-stone-700',
};

export default function Heading({
  as: Tag = 'h2',
  children,
  className,
}: HeadingProps) {
  return (
    <Tag className={cn(styles[Tag], className)}>
      {children}
    </Tag>
  );
}