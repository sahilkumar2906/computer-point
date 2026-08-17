import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
}

export default function IconCard({ icon: Icon, title, description, href, ctaLabel = "Enquire Now" }: IconCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-blue)]/20 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--brand-blue)]/8 text-[var(--brand-blue)] transition-colors duration-300 group-hover:bg-[var(--brand-blue)] group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <h3 className="font-display mb-2 text-lg font-bold text-slate-900">{title}</h3>
      <p className="flex-1 text-sm text-slate-600 sm:text-[15px]">{description}</p>
      {href && (
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-blue)] hover:text-[var(--brand-blue-dark)]"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
