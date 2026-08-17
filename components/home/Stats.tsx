import Container from "@/components/ui/Container";
import { stats } from "@/data/config";

export default function Stats() {
  return (
    <section className="bg-[var(--brand-navy)] py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <stat.icon className="h-7 w-7" />
              </span>
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
