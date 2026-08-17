import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapEmbed from "@/components/contact/MapEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch by phone, WhatsApp, email, or our online contact form - we're here to help.",
};

interface ContactPageProps {
  searchParams: Promise<{ service?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const initialService = params?.service ?? "";

  return (
    <>
      <section className="bg-[var(--brand-gray)] py-14 sm:py-16">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">Get in Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Have a question about a service, scholarship application, or document? Reach out — we&apos;re here to
            help in person, by phone, or on WhatsApp.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm initialService={initialService} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--brand-gray)] pb-16 sm:pb-20">
        <Container>
          <MapEmbed />
        </Container>
      </section>
    </>
  );
}
