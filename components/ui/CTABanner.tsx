import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

interface CTAButtonSpec {
  label: string;
  href: string;
  external?: boolean;
}

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primary: CTAButtonSpec;
  secondary?: CTAButtonSpec;
}

export default function CTABanner({ title, subtitle, primary, secondary }: CTABannerProps) {
  return (
    <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-navy)]">
      <Container className="flex flex-col items-center gap-6 py-14 text-center sm:py-16">
        <h2 className="font-display max-w-2xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        {subtitle && <p className="max-w-xl text-slate-300">{subtitle}</p>}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={primary.href} external={primary.external} variant="white" size="lg">
            {primary.label}
          </Button>
          {secondary && (
            <Button href={secondary.href} external={secondary.external} variant="outlineWhite" size="lg">
              {secondary.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
