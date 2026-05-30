import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-sm bg-white text-[#111] font-bold">
            L
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            LOGIFRAME
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#why" className="hover:text-white">Why us</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-white/30 bg-white px-4 py-2 text-sm font-medium text-[#111] transition hover:bg-white/90"
        >
          Free audit
        </a>
      </div>
    </header>
  );
}
