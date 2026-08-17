import { GraduationCap, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ScholarshipHero() {
  return (
    <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-navy)]">
      <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
          <GraduationCap className="h-8 w-8" />
        </span>
        <h1 className="font-display max-w-2xl text-4xl font-bold text-white sm:text-5xl">
          Scholarship Application Assistance
        </h1>
        <p className="max-w-xl text-lg text-slate-300">
          We help students find the right scholarship scheme and guide you through every step — from eligibility to
          final submission.
        </p>
        <Button href="#apply" variant="white" size="lg" icon={<ArrowRight className="h-5 w-5" />} iconPosition="right">
          Apply Now
        </Button>
      </Container>
    </section>
  );
}
