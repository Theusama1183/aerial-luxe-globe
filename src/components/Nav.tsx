import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LocaleSwitcher } from "./LocaleSwitcher";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: { to: string; label: string }[] = [
    { to: "/services", label: t("nav.services") },
    { to: "/industries", label: t("nav.industries") },
    { to: "/locations", label: t("nav.locations") },
    { to: "/case-studies", label: t("nav.cases") },
    { to: "/tech-integrations", label: t("nav.tech") },
    { to: "/blog", label: t("nav.blog") },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 text-[#111] backdrop-blur-xl border-b border-black/10"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div
            className={`grid h-9 w-9 place-items-center rounded-md font-bold transition ${
              scrolled ? "bg-[#111] text-white" : "bg-white text-[#111]"
            }`}
          >
            L
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">LOGIFRAME</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="opacity-80 transition hover:opacity-100"
              activeProps={{ className: "opacity-100 font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LocaleSwitcher dark={!scrolled} />
          </div>
          <Link
            to="/contact"
            className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition md:inline-flex ${
              scrolled ? "bg-[#111] text-white hover:bg-[#222]" : "bg-white text-[#111] hover:bg-white/90"
            }`}
          >
            {t("nav.cta")}
          </Link>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-black/10 bg-white px-6 py-4 text-[#111] lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <LocaleSwitcher />
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex rounded-full bg-[#111] px-5 py-2.5 text-sm font-medium text-white"
            >
              {t("nav.cta")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
