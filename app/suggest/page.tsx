import Container from '@/components/layout/Container';
import SectionWrapper from '@/components/shared/SectionWrapper';
import Heading from '@/components/shared/Heading';
import Text from '@/components/shared/Text';
import Button from '@/components/shared/Button';

export default function SuggestPage() {
  return (
    <Container>

      <SectionWrapper>

        <div className="max-w-3xl">

          <p className="text-sm font-medium uppercase tracking-wide text-amber-700">
            Suggest & Improve
          </p>

          <Heading as="h1" className="mt-2">
            Help Improve DharmaSetu
          </Heading>

          <Text size="lg" className="mt-4">
            DharmaSetu is intended to grow carefully through educational
            suggestions, respectful feedback, and community-supported
            improvements.
          </Text>

        </div>

      </SectionWrapper>

      <SectionWrapper>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-xl border border-stone-200 bg-white p-6">
            <Heading as="h3">
              What You Can Suggest
            </Heading>

            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li>• Scripture corrections</li>
              <li>• Typographical fixes</li>
              <li>• Explanation improvements</li>
              <li>• Educational enhancements</li>
              <li>• Learning structure suggestions</li>
            </ul>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-6">
            <Heading as="h3">
              Contribution Philosophy
            </Heading>

            <Text className="mt-3">
              DharmaSetu follows a carefully reviewed contribution approach.
              Suggestions may be evaluated before being included to maintain
              educational quality and respectful presentation.
            </Text>
          </div>

        </div>

      </SectionWrapper>

      <SectionWrapper>

        <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center">

          <Heading as="h2">
            Community Contribution System
          </Heading>

          <Text className="mt-4 max-w-2xl mx-auto">
            A structured feedback and contribution workflow may be added in
            future versions of DharmaSetu.
          </Text>

          <div className="mt-6">
            <Button disabled>
              Contribution System Coming Soon
            </Button>
          </div>

        </div>

      </SectionWrapper>

    </Container>
  );
}