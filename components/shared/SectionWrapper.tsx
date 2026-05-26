interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <section className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}