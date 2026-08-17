import Link from "next/link";
import { Monitor, MapPin, Phone, Mail, Globe, Camera, Play, type LucideIcon } from "lucide-react";
import { siteConfig, navLinks, services, openingHours, socialLinks } from "@/data/config";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--brand-navy)] text-slate-300">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--brand-blue)] text-white">
                <Monitor className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold text-white">{siteConfig.businessName}</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">{siteConfig.description}</p>
            <div className="mt-5 flex gap-3">
              <SocialIcon href={socialLinks.facebook} icon={Globe} label="Facebook" />
              <SocialIcon href={socialLinks.instagram} icon={Camera} label="Instagram" />
              <SocialIcon href={socialLinks.youtube} icon={Play} label="YouTube" />
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white uppercase">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white uppercase">Our Services</h3>
            <ul className="space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="text-sm text-slate-400 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wide text-white uppercase">Contact Info</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-2.5">
                <MapPin className="h-5 w-5 flex-shrink-0 text-[var(--brand-blue)]" aria-hidden="true" />
                {siteConfig.address}
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-5 w-5 flex-shrink-0 text-[var(--brand-blue)]" aria-hidden="true" />
                {siteConfig.phone}
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-5 w-5 flex-shrink-0 text-[var(--brand-blue)]" aria-hidden="true" />
                {siteConfig.email}
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              {openingHours.map((oh) => `${oh.day}: ${oh.hours}`).join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            © {year} {siteConfig.businessName}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">Serving students and families with trusted digital assistance.</p>
        </div>
      </Container>
    </footer>
  );
}

function SocialIcon({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-[var(--brand-blue)]"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
