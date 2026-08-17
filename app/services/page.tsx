import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import IconCard from "@/components/ui/IconCard";
import CTABanner from "@/components/ui/CTABanner";
import { services } from "@/data/config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore every computer, documentation, scholarship, and digital service we offer, from PAN card and Aadhaar assistance to printing and resume creation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--brand-gray)] py-14 sm:py-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Complete digital and documentation services under one roof — from scholarship and government forms to
            printing and computer support.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <IconCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                description={s.description}
                href={`/contact?service=${encodeURIComponent(s.title)}`}
                ctaLabel="Enquire Now"
              />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Can't Find the Service You Need?"
        subtitle="We handle all kinds of documentation and digital tasks — if it's not listed here, just ask."
        primary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
