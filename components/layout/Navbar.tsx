"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Monitor, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/config";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between sm:h-20" aria-label="Main navigation">
          <Link href="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--brand-blue)] text-white sm:h-10 sm:w-10">
              <Monitor className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="font-display truncate text-base font-bold text-slate-900 sm:text-lg">
              {siteConfig.businessName}
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    active ? "text-[var(--brand-blue)]" : "text-slate-600 hover:text-[var(--brand-blue)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <a
              href={telHref}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-[var(--brand-blue)]"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <Button href="/contact">Contact Us</Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-slate-100 pb-6 pt-2 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                      active ? "bg-[var(--brand-blue)]/8 text-[var(--brand-blue)]" : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 flex flex-col gap-3 px-3">
              <a href={telHref} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <Button href="/contact" className="w-full justify-center" onClick={() => setOpen(false)}>
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
