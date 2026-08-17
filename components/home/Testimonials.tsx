import { Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/config";

export default function Testimonials() {
  return (
    <section className="bg-[var(--brand-gray)] py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          subtitle="Real experiences from students and families we've helped."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <Quote className="mb-4 h-8 w-8 text-[var(--brand-blue)]/20" />
              <p className="flex-1 text-sm leading-relaxed text-slate-600">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating ? "fill-[var(--brand-gold)] text-[var(--brand-gold)]" : "text-slate-200"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-3 border-t border-slate-100 pt-3">
                <p className="text-sm font-bold text-slate-900">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
