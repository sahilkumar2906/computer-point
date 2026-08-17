import { CheckCircle2, type LucideIcon } from "lucide-react";

interface InfoChecklistProps {
  icon?: LucideIcon;
  title: string;
  items: string[];
}

export default function InfoChecklist({ icon: Icon, title, items }: InfoChecklistProps) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        {Icon && (
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--brand-blue)]/8 text-[var(--brand-blue)]">
            <Icon className="h-5 w-5" />
          </span>
        )}
        <h3 className="font-display text-xl font-bold text-slate-900">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[var(--brand-blue)]" />
            <span className="text-sm text-slate-600 sm:text-[15px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
