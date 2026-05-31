import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#cases", label: "Case Studies" },
    { href: "#industries", label: "Industries" },
    { href: "#process", label: "Process" },
    { href: "#resources", label: "Resources" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 text-[#111] backdrop-blur-xl border-b border-black/10"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div
            className={`grid h-9 w-9 place-items-center rounded-md font-bold transition ${
              scrolled ? "bg-[#111] text-white" : "bg-white text-[#111]"
            }`}
          >
            L
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            LOGIFRAME
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 transition hover:opacity-100">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={`hidden rounded-full px-5 py-2.5 text-sm font-medium transition md:inline-flex ${
            scrolled
              ? "bg-[#111] text-white hover:bg-[#222]"
              : "bg-white text-[#111] hover:bg-white/90"
          }`}
        >
          Get More Freight Leads
        </a>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-black/10 bg-white px-6 py-4 text-[#111] md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex rounded-full bg-[#111] px-5 py-2.5 text-sm font-medium text-white"
          >
            Get More Freight Leads
          </a>
        </div>
      )}
    </header>
  );
}
