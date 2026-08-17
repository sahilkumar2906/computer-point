import type { ProcessStep } from "@/types";

interface StepTimelineProps {
  steps: ProcessStep[];
  light?: boolean;
}

export default function StepTimeline({ steps, light = false }: StepTimelineProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <div key={step.title} className="flex flex-col items-start">
          <div
            className={`font-display mb-4 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-base font-bold ${
              light ? "bg-white text-[var(--brand-navy)]" : "bg-[var(--brand-blue)] text-white"
            }`}
          >
            {index + 1}
          </div>
          <h4 className={`mb-1.5 text-base font-bold ${light ? "text-white" : "text-slate-900"}`}>{step.title}</h4>
          <p className={`text-sm ${light ? "text-slate-300" : "text-slate-600"}`}>{step.description}</p>
        </div>
      ))}
    </div>
  );
}
