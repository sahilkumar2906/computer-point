import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-100 bg-white shadow-sm">
      {items.map((item) => (
        <details key={item.question} className="group p-5 sm:p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
            {item.question}
            <ChevronDown className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
