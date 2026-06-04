import { useTranslation } from "react-i18next";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/config";
import { useState, useEffect } from "react";
import { ChevronDown, Globe } from "lucide-react";

export function LocaleSwitcher({ dark = false }: { dark?: boolean }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Locale>("en");

  useEffect(() => {
    setCurrent((i18n.language as Locale) || "en");
  }, [i18n.language]);

  const handleSelect = (loc: Locale) => {
    i18n.changeLanguage(loc);
    setCurrent(loc);
    setOpen(false);
    if (typeof window !== "undefined") {
      const path = window.location.pathname.replace(/^\/(en|nl|de|es|it|pl|fr|el|pt)(\/|$)/, "/");
      const next = loc === "en" ? path : `/${loc}${path === "/" ? "" : path}`;
      window.history.replaceState({}, "", next || "/");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition ${
          dark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/5 text-[#111] hover:bg-black/10"
        }`}
      >
        <Globe className="h-3.5 w-3.5" />
        {current.toUpperCase()}
        <ChevronDown className="h-3 w-3" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-black/10 bg-white py-1 text-[#111] shadow-2xl">
          {LOCALES.map((loc) => (
            <button
              key={loc}
              onClick={() => handleSelect(loc)}
              className={`block w-full px-4 py-2 text-left text-sm transition hover:bg-black/5 ${
                current === loc ? "font-semibold" : ""
              }`}
            >
              <span className="mr-2 inline-block w-6 text-xs text-black/40">{loc.toUpperCase()}</span>
              {LOCALE_LABELS[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
