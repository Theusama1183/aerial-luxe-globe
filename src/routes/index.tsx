import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Reveal, Stagger } from "@/components/Reveal";
import { PlanetScene } from "@/components/PlanetScene";
import { HeroBackground } from "@/components/HeroBackground";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Star,
  Plus,
  Minus,
  Truck,
  Plane,
  Ship,
  Warehouse,
  Package,
  Search,
  Target,
  Megaphone,
  FileText,
  Check,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Logiframe — Digital Marketing Agency for Logistics & Supply Chain" },
      {
        name: "description",
        content:
          "Logiframe is the award-winning logistics-first digital marketing agency. We help freight, 3PL and supply chain brands win more B2B leads.",
      },
      { property: "og:title", content: "Logiframe — Logistics Marketing Specialists" },
      {
        property: "og:description",
        content:
          "Built exclusively for logistics. Websites, SEO and lead funnels that move freight.",
      },
    ],
  }),
  component: Home,
});

/* -------------------- data -------------------- */

const partnerLogos = [
  "MAERSK", "DHL", "FEDEX", "UPS", "KUEHNE+NAGEL", "DB SCHENKER",
  "C.H. ROBINSON", "XPO", "EXPEDITORS", "GEODIS", "NIPPON EXPRESS", "YUSEN",
];

const caseStudies = [
  { brand: "NorthFreight", metric: "+182%", label: "Qualified freight leads in 6 months" },
  { brand: "PortLine 3PL", metric: "+74%", label: "Organic traffic from shipper keywords" },
  { brand: "VeloCarrier", metric: "+1,400%", label: "ROI on paid LinkedIn campaigns" },
  { brand: "Cargonex", metric: "+58%", label: "RFQ form conversion uplift" },
  { brand: "Airbound Logistics", metric: "+91%", label: "Reduction in cost-per-lead" },
  { brand: "StackRoute", metric: "+46%", label: "Pipeline created in Q1 alone" },
];

const stages = [
  {
    tag: "STARTUP",
    title: "Agile & Fast",
    body: "For early carriers and 3PLs finding product-market fit. Launch lean and validate channels.",
    points: ["Website + brand", "Founder-led content", "Demand discovery"],
  },
  {
    tag: "MID-SIZE",
    title: "Scale What Works",
    body: "For growing freight brands ready to double down on what's actually moving pipeline.",
    points: ["Performance SEO", "Sales-led ABM", "Conversion engineering"],
  },
  {
    tag: "ENTERPRISE",
    title: "Sustain Global Dominance",
    body: "For multi-region logistics leaders defending share across regions, lanes and verticals.",
    points: ["Global SEO ops", "Account-based motion", "Brand authority systems"],
  },
];

/* -------------------- page -------------------- */

function Home() {
  return (
    <div className="bg-white text-[#111111]">
      <Nav />

      {/* ============ HERO ============ */}
      <section className="section-dark relative min-h-screen overflow-hidden">
        <HeroBackground />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-white pulse-ring relative" />
                Logistics Marketing Specialists
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
                Build Your Freight Growth Engine.
                <span className="block text-white/60">Become the Logistics Leader.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg text-white/70">
                We're a specialist B2B marketing partner for freight forwarders,
                3PLs, carriers and supply chain platforms. We help logistics
                companies move from invisible to inevitable.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#111] transition hover:bg-white/90"
                >
                  Talk to a Growth Strategist
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#cases"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
                >
                  See Case Studies
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-14 flex items-center gap-6 text-xs text-white/50">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />
                  ))}
                </div>
                <span className="uppercase tracking-widest">
                  Rated 4.9 by 120+ logistics founders
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Logo marquee */}
        <div className="relative z-10 border-y border-white/10 bg-black/40 py-7 backdrop-blur">
          <div className="overflow-hidden">
            <div className="marquee flex w-max gap-16 px-8">
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <span
                  key={i}
                  className="font-display whitespace-nowrap text-xl font-semibold tracking-widest text-white/40 transition hover:text-white"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ AWARDS / PLANET SECTION ============ */}
      <section className="section-dark relative overflow-hidden py-28">
        {/* planet background */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <PlanetScene />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-center text-sm uppercase tracking-[0.3em] text-white/50">
              The Award-Winning
            </p>
            <h2 className="mx-auto mt-3 max-w-4xl text-center font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Logistics-First Digital Marketing Agency
            </h2>
          </Reveal>

          {/* 3 columns: 1 - 2 - 1 */}
          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            {/* LEFT: ADWEEK */}
            <Reveal className="lg:col-span-1">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-7 backdrop-blur-xl transition hover:border-white/30">
                <div className="mb-5 inline-flex h-10 items-center rounded-md bg-white px-3 font-display text-sm font-bold tracking-tight text-black">
                  ADWEEK
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  Fastest Growing Agency
                </h3>
                <p className="mt-3 text-sm text-white/60">
                  Logiframe was named one of ADWEEK's Fastest Growing Logistics
                  Marketing Agencies — three years in a row.
                </p>
                <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 transition group-hover:text-white">
                  2022 · 2023 · 2024
                </div>
              </div>
            </Reveal>

            {/* CENTER: VIDEO */}
            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="group relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-black">
                {/* poster / animated gradient stand-in for video */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,#2a2a2a,#000)]" />
                  <div className="absolute inset-0 opacity-40 grid-bg" />
                  <motion.div
                    initial={{ x: "-20%" }}
                    animate={{ x: "120%" }}
                    transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2"
                  >
                    <Truck className="h-16 w-16 text-white/30" strokeWidth={1} />
                  </motion.div>
                  <motion.div
                    initial={{ x: "120%" }}
                    animate={{ x: "-20%" }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/3"
                  >
                    <Plane className="h-12 w-12 text-white/20" strokeWidth={1} />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="relative flex h-full min-h-[340px] flex-col items-center justify-center p-10 text-center">
                  <button className="group/play mb-6 grid h-20 w-20 place-items-center rounded-full bg-white text-[#111] transition hover:scale-110">
                    <Play className="h-7 w-7 translate-x-0.5 fill-current" />
                  </button>
                  <p className="font-display text-xl font-medium text-white sm:text-2xl">
                    "A best-in-class logistics marketing agency"
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-widest text-white/50">
                    — Featured on Bloomberg TV
                  </p>
                </div>
              </div>
            </Reveal>

            {/* RIGHT: MMA */}
            <Reveal delay={0.2} className="lg:col-span-1">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-7 backdrop-blur-xl transition hover:border-white/30">
                <div className="mb-5 inline-flex flex-col rounded-md bg-white px-3 py-2 font-display text-black">
                  <span className="text-[10px] font-bold leading-none tracking-widest">MMA</span>
                  <span className="text-sm font-extrabold leading-none tracking-tight">SMARTIES</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  B2B Agency of the Year
                </h3>
                <p className="mt-3 text-sm text-white/60">
                  Logiframe won the prestigious SMARTIES X Global Award by the
                  Mobile Marketing Association for category-defining work in
                  freight and supply chain.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 transition group-hover:text-white">
                  Global Winner · 2025
                </div>
              </div>
            </Reveal>
          </div>

          {/* CATEGORY LEADERSHIP */}
          <div id="cases" className="mt-32">
            <Reveal>
              <p className="text-center text-sm uppercase tracking-[0.3em] text-white/50">
                Category Leadership in Action:
              </p>
              <h2 className="mx-auto mt-3 max-w-4xl text-center font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                From Carriers to Global 3PLs
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-center text-white/60">
                Expert takes on the shifting freight marketing landscape — real
                results from the people driving logistics forward.
              </p>
            </Reveal>

            <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((c) => (
                <Reveal key={c.brand}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl transition hover:border-white/40 hover:bg-black/70">
                    <div className="flex items-start justify-between">
                      <span className="font-display text-sm tracking-wide text-white/60">
                        {c.brand}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                    </div>
                    <div className="mt-10 font-display text-5xl font-semibold text-white">
                      {c.metric}
                    </div>
                    <p className="mt-3 text-sm text-white/60">{c.label}</p>
                  </div>
                </Reveal>
              ))}
            </Stagger>

            <div className="mt-12 flex justify-center">
              <a
                href="#all-cases"
                className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-white"
              >
                <span className="transition group-hover:text-[#111]">
                  All Case Studies
                </span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:text-[#111]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TAILORED GROWTH STAGES ============ */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 -z-0 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-1/2 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-10 backdrop-blur-2xl sm:p-16">
              {/* glow */}
              <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

              <div className="relative text-center">
                <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  Tailored Growth Strategies,
                  <span className="block text-white/60">For Your Business Stage</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-white/60">
                  We don't run a one-size-fits-all playbook. Here's how we work
                  with you at every stage.
                </p>
              </div>

              <Stagger className="relative mt-14 grid gap-5 md:grid-cols-3">
                {stages.map((s) => (
                  <Reveal key={s.tag}>
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-7 backdrop-blur transition hover:border-white/40 hover:bg-black/80">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">
                        {s.tag}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/60">{s.body}</p>
                      <ul className="mt-6 space-y-2 text-sm text-white/70">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-white/70" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      {/* hover button */}
                      <div className="mt-8 overflow-hidden">
                        <a
                          href="#contact"
                          className="inline-flex translate-y-12 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#111] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          Explore Plan
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CONTACT / CTA ============ */}
      <section id="contact" className="relative overflow-hidden bg-white py-28">
        <div className="absolute inset-0 grid-bg-light opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Ready to move your freight pipeline?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[#555]">
              Book a no-obligation strategy call. We'll show you what's working
              for logistics brands in your category right now.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#111] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#222]"
            >
              Talk to a Growth Strategist
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="section-dark border-t border-white/10 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="font-display text-lg font-semibold text-white">LOGIFRAME</div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              The digital marketing agency built exclusively for logistics,
              freight forwarding, trucking, 3PL and supply chain.
            </p>
          </div>
          {[
            { h: "Services", l: ["Website Design", "Logistics SEO", "Lead Generation", "Content Marketing"] },
            { h: "Company", l: ["Case Studies", "Our Process", "Resources", "Contact"] },
            { h: "Legal", l: ["Privacy", "Terms", "Cookies", "Disclaimer"] },
          ].map((g) => (
            <div key={g.h}>
              <div className="font-display text-sm font-semibold text-white">{g.h}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {g.l.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-6 text-xs text-white/40">
          © 2026 Logiframe. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
