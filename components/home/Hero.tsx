import { ArrowRight, CheckCircle2, BadgeCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/config";

const trustPoints = ["Quick Turnaround", "Verified Process", "Affordable Pricing"];

export default function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="grid grid-cols-1 items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[var(--brand-blue)]/8 px-4 py-1.5 text-xs font-semibold text-[var(--brand-blue)]">
            Trusted by 1000+ Local Families &amp; Students
          </span>
          <h1 className="font-display text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
            Your Trusted <span className="text-[var(--brand-blue)]">Digital &amp; Computer</span> Service Center
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600">{siteConfig.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/scholarship#apply" size="lg" icon={<ArrowRight className="h-5 w-5" />} iconPosition="right">
              Apply for Scholarship
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-[var(--brand-blue)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="bg-dot-grid relative w-full max-w-sm overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-navy)] p-10 shadow-2xl sm:p-14">
            {/* Signature element: a service token / receipt, like the one handed to a
                customer at the counter — grounded in what this business actually does. */}
            <div className="relative mx-auto w-full max-w-[280px] rotate-[-2deg] rounded-2xl bg-white shadow-xl">
              <div className="flex items-center justify-between rounded-t-2xl bg-[var(--brand-navy)] px-5 py-3">
                <span className="text-[10px] font-semibold tracking-wider text-white/60 uppercase">
                  Service Token
                </span>
                <span className="font-display text-lg font-bold text-white">A-108</span>
              </div>

              <div className="space-y-3 px-5 py-5">
                <div>
                  <p className="text-[11px] text-slate-400">Service</p>
                  <p className="text-sm font-semibold text-slate-900">Scholarship Application</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-medium text-emerald-700">Documents Verified</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Est. completion</span>
                  <span className="font-semibold text-slate-600">Same Day</span>
                </div>
              </div>

              <div className="relative border-t border-dashed border-slate-200">
                <span className="absolute top-1/2 -left-2.5 h-5 w-5 -translate-y-1/2 rounded-full bg-[var(--brand-blue)]" />
                <span className="absolute top-1/2 -right-2.5 h-5 w-5 -translate-y-1/2 rounded-full bg-[var(--brand-blue)]" />
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <span className="max-w-[130px] truncate text-[11px] text-slate-400">{siteConfig.businessName}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-[var(--brand-gold)]/15 px-2.5 py-1 text-[11px] font-bold text-[var(--brand-gold-dark)]">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
