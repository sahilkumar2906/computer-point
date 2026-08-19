import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import IconCard from "@/components/ui/IconCard";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";
import { featuredServices, whyChooseUs } from "@/data/config";
import {Analytics} from "@vercel/analytics/react"; 

export const metadata: Metadata = {
  title: "Home",
  description:
    "Computer, online, documentation, scholarship, and digital services for students and families — fast, accurate, and affordable.",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            subtitle="A quick look at how we can help — explore our full range of services."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((s) => (
              <IconCard key={s.slug} icon={s.icon} title={s.title} description={s.description} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href="/services" variant="outline" icon={<ArrowRight className="h-4 w-4" />} iconPosition="right">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-gray)] py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built on Trust & Reliability"
            subtitle="Here's what makes us the preferred digital service center in the area."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((f) => (
              <IconCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </Container>
      </section>

      <Stats />
      <Testimonials />

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Whether it's a scholarship application, a government form, or a quick printout — we're just a visit or a message away."
        primary={{ label: "Contact Us", href: "/contact" }}
        secondary={{ label: "Apply for Scholarship", href: "/scholarship#apply" }}
      />
      <Analytics />
    </>
  );
}
