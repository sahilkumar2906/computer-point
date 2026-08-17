import type { Metadata } from "next";
import { ShieldCheck, FileText } from "lucide-react";
import ScholarshipHero from "@/components/scholarship/ScholarshipHero";
import ScholarshipForm from "@/components/scholarship/ScholarshipForm";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCard from "@/components/ui/IconCard";
import InfoChecklist from "@/components/ui/InfoChecklist";
import StepTimeline from "@/components/ui/StepTimeline";
import FAQAccordion from "@/components/shared/FAQAccordion";
import {
  scholarshipCategories,
  eligibilityCriteria,
  requiredDocuments,
  applicationProcessSteps,
  importantDatePhases,
  scholarshipFAQs,
} from "@/data/config";

export const metadata: Metadata = {
  title: "Scholarship",
  description:
    "Get help applying for pre-matric, post-matric, and government scholarship schemes - eligibility, documents, process, and an online application form.",
};

export default function ScholarshipPage() {
  return (
    <>
      <ScholarshipHero />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Scholarship Categories"
            title="Scholarships We Help You Apply For"
            align="left"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scholarshipCategories.map((c) => (
              <IconCard key={c.title} icon={c.icon} title={c.title} description={c.description} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-gray)] py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Before You Apply" title="Eligibility & Required Documents" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InfoChecklist icon={ShieldCheck} title="Eligibility Criteria" items={eligibilityCriteria} />
            <InfoChecklist icon={FileText} title="Required Documents" items={requiredDocuments} />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="How It Works" title="Application Process" />
          <StepTimeline steps={applicationProcessSteps} />
        </Container>
      </section>

      <section className="bg-[var(--brand-navy)] py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Timeline"
            title="Important Dates to Know"
            light
            subtitle="Exact dates change every academic year and vary by scheme — contact us for the current deadline that applies to you."
          />
          <StepTimeline steps={importantDatePhases} light />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <FAQAccordion items={scholarshipFAQs} />
        </Container>
      </section>

      <section id="apply" className="scroll-mt-24 bg-[var(--brand-gray)] py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Apply Now"
            title="Scholarship Application Form"
            subtitle="Fill in your details below — our team will verify your documents and guide you through submission."
          />
          <ScholarshipForm />
        </Container>
      </section>
    </>
  );
}
