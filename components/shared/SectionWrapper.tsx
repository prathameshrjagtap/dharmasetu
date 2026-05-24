interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <section className={`py-10 md:py-14 ${className}`}>
      {children}
    </section>
  );
}