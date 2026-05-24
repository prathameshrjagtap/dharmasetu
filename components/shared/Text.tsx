import { cn } from '@/lib/cn';

type Size = 'sm' | 'base' | 'lg';

interface TextProps {
  children: React.ReactNode;
  size?: Size;
  muted?: boolean;
  className?: string;
}

const sizes: Record<Size, string> = {
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
};

export default function Text({
  children,
  size = 'base',
  muted = false,
  className,
}: TextProps) {
  return (
    <p
      className={cn(
        sizes[size],
        'leading-relaxed',
        muted
          ? 'text-stone-500'
          : 'text-stone-700',
        className
      )}
    >
      {children}
    </p>
  );
}