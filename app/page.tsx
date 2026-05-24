import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';

export default function HomePage() {
  return (
    <Container>
      <SectionWrapper>
        <h1 className="text-4xl font-bold text-stone-900">
          Sanatan Dharma — A Way of Life, Not Just a Religion
        </h1>

        <p className="mt-4 max-w-2xl text-stone-600 leading-relaxed">
          DharmaSetu is an educational platform created to help people
          learn about Sanatan Dharma through scriptures, shlokas,
          philosophy, and structured learning paths.
        </p>
      </SectionWrapper>
    </Container>
  );
}