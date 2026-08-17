import { MapPin, Phone, Mail, Clock, MessageCircle, type LucideIcon } from "lucide-react";
import { siteConfig, openingHours } from "@/data/config";
import { sanitizePhoneForLink } from "@/lib/validation";

export default function ContactInfo() {
  const waNumber = sanitizePhoneForLink(siteConfig.whatsapp);

  return (
    <div className="space-y-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
      <InfoRow icon={MapPin} label="Address" value={siteConfig.address} />
      <InfoRow
        icon={Phone}
        label="Phone"
        value={siteConfig.phone}
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
      />
      <InfoRow icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />

      <div className="flex items-start gap-4">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue)]/8 text-[var(--brand-blue)]">
          <Clock className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-slate-900">Opening Hours</p>
          {openingHours.map((oh) => (
            <p key={oh.day} className="text-sm text-slate-600">
              {oh.day}: {oh.hours}
            </p>
          ))}
        </div>
      </div>

      <a
        href={`https://wa.me/${waNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#1DA851]"
      >
        <MessageCircle className="h-5 w-5" />
        Chat on WhatsApp
      </a>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue)]/8 text-[var(--brand-blue)]">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        <p className="text-sm text-slate-600">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block hover:opacity-80">
        {content}
      </a>
    );
  }
  return content;
}
