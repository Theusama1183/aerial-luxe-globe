import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="bg-white text-[#111]">{children}</main>;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-40 pb-28 text-white">
      {image && (
        <div className="absolute inset-0 opacity-30">
          <img src={image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        </div>
      )}
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
          {eyebrow}
        </div>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">{subtitle}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#111] transition hover:bg-white/90"
          >
            Book Strategy Call <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
          >
            See Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="bg-[#111] py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
          Ready to dominate your trade lane?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Book a 30-minute strategy call. Walk away with a custom plan to grow shipper, carrier, or driver pipeline.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-[#111] transition hover:bg-white/90"
        >
          Speak with a Strategist <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
