"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed right-5 bottom-24 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[var(--brand-blue)] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:right-6"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
