import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
import { sanitizePhoneForLink } from "@/lib/validation";

export default function WhatsAppButton() {
  const number = sanitizePhoneForLink(siteConfig.whatsapp);
  const message = encodeURIComponent(
    `Hi ${siteConfig.businessName}, I'd like to know more about your services.`
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl sm:right-6"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}
