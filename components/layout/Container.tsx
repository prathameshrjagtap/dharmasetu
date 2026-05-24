import { cn } from '@/lib/cn';

type Size = 'narrow' | 'default' | 'wide';

interface ContainerProps {
  children: React.ReactNode;
  size?: Size;
  className?: string;
}

const sizes: Record<Size, string> = {
  narrow: 'max-w-2xl',
  default: 'max-w-4xl',
  wide: 'max-w-6xl',
};

export default function Container({
  children,
  size = 'default',
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}