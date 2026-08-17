import { MapPin, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function MapEmbed() {
  const hasMap = siteConfig.mapsEmbedUrl && !siteConfig.mapsEmbedUrl.includes("[YOUR");
  const hasLink = siteConfig.mapsLink && !siteConfig.mapsLink.includes("[YOUR");

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
      {hasMap ? (
        <iframe
          src={siteConfig.mapsEmbedUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${siteConfig.businessName} location on Google Maps`}
          className="h-[320px] w-full sm:h-[400px]"
        />
      ) : (
        <div className="flex h-[320px] w-full flex-col items-center justify-center gap-3 bg-[var(--brand-gray)] px-6 text-center sm:h-[400px]">
          <MapPin className="h-10 w-10 text-[var(--brand-blue)]" />
          <p className="max-w-sm text-sm text-slate-500">
            Add your Google Maps embed link in <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">data/config.ts</code> to
            show your live location here.
          </p>
        </div>
      )}
      {hasLink && (
        <a
          href={siteConfig.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 border-t border-slate-100 bg-white py-3 text-sm font-semibold text-[var(--brand-blue)] hover:bg-[var(--brand-gray)]"
        >
          Get Directions <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
