import { createFileRoute } from "@tanstack/react-router";
import { Hero3D } from "@/components/Hero3D";
import { Nav } from "@/components/Nav";
import { Reveal, Stagger } from "@/components/Reveal";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Truck,
  Search,
  Target,
  Palette,
  Megaphone,
  FileText,
  Check,
  Star,
  TrendingUp,
  Zap,
  BarChart3,
  Plus,
  Minus,
  Building2,
  Warehouse,
  Package,
  Plane,
  Ship,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Logiframe — Digital Marketing Agency for Logistics & Supply Chain" },
      {
        name: "description",
        content:
          "We help logistics companies generate consistent B2B freight leads using SEO, high-conversion websites, and digital marketing.",
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
const logos = [
  "FreightMax","GlobalShip","TruckPro","WareNet",
  "ChainLink","LogiFlow","CargoWise","ShipFast",
];

const problems = [
  { t: "Outdated Websites", d: "90% of logistics sites fail to convert visitors into leads. Slow, dated, no clear CTAs." },
  { t: "No SEO Strategy", d: "Competitors rank for 'freight forwarding services' while you're invisible on Google." },
  { t: "Weak Lead Funnels", d: "No capture forms, no nurture sequences, no way to turn visitors into qualified leads." },
];

const testimonials = [
  { q: "Honestly wasn't sure about this whole digital thing at first. Been running trucks for 30 years the old way. But man, these guys get it. Phone's actually ringing now with real customers, not just brokers lowballing us.", n: "Dave Kowalski", r: "Owner, Kowalski Freight Lines" },
  { q: "We tried two other agencies before this and wasted like $15k. Finally found people who actually know what a 3PL does. Our site doesn't look like a generic template anymore and we're getting actual warehouse inquiries.", n: "Jennifer Patel", r: "Operations Manager, Summit 3PL" },
  { q: "First month I thought we made a mistake. Nothing happened. Then month 2-3 things started clicking. Now we're 6 months in and I'm eating my words. Lead quality is way better than the trade shows we used to do.", n: "Marcus Webb", r: "VP Sales, Midwest Distribution Co" },
  { q: "Finally, an agency that doesn't need me to explain what LTL means or why 'just run Facebook ads' won't work for us. The content they write actually sounds like it's from our industry.", n: "Rachel Nguyen", r: "Marketing Director, Pacific Cargo Services" },
  { q: "Been in this business since '92. Tried Yellow Pages, cold calling, everything. This internet marketing stuff actually works if you got the right people. Wish I'd done this 5 years ago.", n: "Tom Berkowitz", r: "CEO, Berkowitz Logistics Group" },
  { q: "My husband was against spending money on a website redesign. Well, we just landed our biggest client yet and they told us they picked us because our site looked professional.", n: "Angela Morrison", r: "Co-Owner, Morrison & Sons Trucking" },
];

const industries = [
  { icon: Plane, t: "Freight Forwarding", d: "International & domestic freight" },
  { icon: Truck, t: "Trucking", d: "LTL, FTL and fleet operators" },
  { icon: Package, t: "3PL Providers", d: "Third-party logistics operators" },
  { icon: Warehouse, t: "Warehousing", d: "Storage & distribution centers" },
  { icon: Ship, t: "Supply Chain", d: "End-to-end supply chain companies" },
];

const services = [
  { n: "01", icon: Palette, t: "High-Conversion Website Design", d: "Custom logistics websites engineered to convert visitors into freight leads. Mobile-first, fast-loading, built with conversion psychology.", b: ["Custom UI/UX for logistics","Lead capture optimization","Mobile-responsive design","Fast load speeds"] },
  { n: "02", icon: Search, t: "Logistics SEO", d: "Rank for high-intent keywords like 'freight forwarding services', 'trucking company near me' and '3PL providers' to capture ready-to-buy leads.", b: ["Keyword research for logistics","On-page optimization","Technical SEO audits","Local SEO for trucking"] },
  { n: "03", icon: Target, t: "Lead Generation Funnels", d: "Multi-touch funnels that nurture cold traffic into qualified B2B freight leads. From first touch to signed contract.", b: ["Landing page design","Email nurture sequences","CRM integration","Lead scoring"] },
  { n: "04", icon: FileText, t: "Content Marketing", d: "Authority-building content that positions your company as the go-to expert in your logistics niche.", b: ["Industry blog posts","Case study creation","Whitepapers & guides","Social media content"] },
  { n: "05", icon: Megaphone, t: "Paid Advertising", d: "Google Ads and LinkedIn campaigns targeting logistics decision-makers actively searching for your services.", b: ["Google Ads management","LinkedIn B2B targeting","Retargeting campaigns","ROI tracking"] },
];

const process = [
  { n: "01", t: "Audit & Research", d: "Deep-dive into your current digital presence, competitors, and market opportunities in your logistics niche." },
  { n: "02", t: "Strategy Development", d: "Custom marketing plan with target keywords, content calendar, and conversion funnel architecture." },
  { n: "03", t: "Build Marketing System", d: "Design and build your high-conversion website, landing pages, and lead capture systems." },
  { n: "04", t: "Traffic Generation", d: "Launch SEO campaigns, content marketing, and paid ads to drive qualified logistics traffic." },
  { n: "05", t: "Conversion Optimization", d: "A/B test everything. Optimize forms, CTAs and user flows to maximize lead generation." },
  { n: "06", t: "Scale Results", d: "Double down on what works. Expand into new keywords, markets, and channels for compounding growth." },
];

const cases = [
  { tag: "Freight Forwarding", c: "GlobalFreight Solutions", h: "312% increase in organic traffic in 8 months",
    d: "A mid-size freight forwarder struggling with zero online presence. We rebuilt their website, launched targeted SEO, and built lead capture funnels generating 87 qualified leads per month.",
    s: [["+312%","Organic Traffic"],["87","Qualified Leads/Mo"],["$1.2M","Revenue Impact"]] },
  { tag: "Trucking", c: "MidWest Trucking Co.", h: "From page 5 to #1 for 'trucking services' in their region",
    d: "A regional trucking company with an outdated website. We implemented local SEO, Google My Business optimization, and a conversion-focused redesign.",
    s: [["#1","Keyword Ranking"],["120+","Monthly Leads"],["-64%","Cost Per Lead"]] },
  { tag: "3PL", c: "ChainLink 3PL", h: "2.5× conversion rate with new lead generation funnels",
    d: "A 3PL provider with plenty of traffic but poor conversion rates. We redesigned their funnel, added lead scoring, and implemented email nurture sequences.",
    s: [["2.5×","Conversion Rate"],["+85%","Lead Quality"],["+$3.4M","Pipeline"]] },
];

const timeline = [
  { m: "Month 1–2", t: "Foundation", d: "Website build, SEO audit, keyword strategy" },
  { m: "Month 3–4", t: "Traction", d: "Rankings improve, first leads start coming in" },
  { m: "Month 5–6", t: "Growth", d: "Consistent lead flow, expanding keyword presence" },
  { m: "Month 7+", t: "Scale", d: "Compounding results, dominant market position" },
];

const guides = [
  { c: "SEO", r: "8 min read", t: "The Complete Logistics SEO Guide", d: "How logistics companies rank on Google for freight keywords and dominate transportation search results." },
  { c: "Marketing", r: "6 min read", t: "Freight Marketing Strategy Blueprint", d: "A step-by-step strategy used by successful logistics companies to generate consistent B2B leads." },
  { c: "Growth", r: "5 min read", t: "How Logistics Websites Generate B2B Leads", d: "The website structures and marketing funnels that convert visitors into long-term shipping clients." },
];

const faqs = [
  { q: "How long does logistics SEO take to show results?", a: "Most clients see meaningful keyword movement in 60–90 days and consistent lead flow by month 4–6. SEO compounds — once you rank, leads keep coming without ongoing ad spend." },
  { q: "What does your pricing look like?", a: "We work on monthly retainers tailored to your goals. Most engagements start at $4–8k/month depending on scope (SEO, website, ads). We share custom pricing on the strategy call." },
  { q: "What kind of results can we expect?", a: "Our average client sees a 3× lead increase and 120% organic traffic lift within 6 months. Results vary by market, but we only take on clients we're confident we can grow." },
  { q: "Do you work with small logistics companies?", a: "Yes. We work with everyone from owner-operators to enterprise 3PLs. We'll tell you upfront whether your budget and goals are a fit." },
  { q: "How is Logiframe different from other marketing agencies?", a: "We only work with logistics companies. No restaurants, no dentists, no SaaS. That focus means better keywords, better content, faster results." },
];

/* -------------------- helpers -------------------- */
function SectionLabel({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] ${dark ? "text-white/50" : "text-black/50"}`}>
      <span className={`h-px w-8 ${dark ? "bg-white/40" : "bg-black/40"}`} />
      {children}
    </div>
  );
}

/* -------------------- page -------------------- */
function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-white text-[#111]">
      <Nav />

      {/* ===== HERO ===== */}
      <section className="section-dark relative min-h-screen overflow-hidden pt-28">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 grain text-white pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                <span className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                Logistics Marketing Specialists
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-bold leading-[1.02] text-white text-balance">
                Digital Marketing<br />
                Agency for{" "}
                <span className="italic text-white/60">Logistics</span><br />
                & Supply Chain
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                We help logistics companies generate consistent B2B freight leads using SEO, high-conversion websites, and digital marketing.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium text-[#111] transition hover:translate-y-[-2px] hover:shadow-2xl">
                  Book Strategy Call
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a href="#cases" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10">
                  See Case Studies
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-white/60">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />
                  ))}
                  <span className="ml-1 font-medium text-white">4.9</span>
                  <span>client rating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5" /> Logistics industry specialists
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5" /> Proven growth strategies
                </div>
              </div>
            </Reveal>
          </div>

          {/* 3D scene */}
          <div className="relative h-[460px] sm:h-[540px] lg:h-[640px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Hero3D />
            </motion.div>

            {/* floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="absolute bottom-6 left-2 z-10 w-[240px] rounded-2xl border border-white/15 bg-[#111]/80 p-5 backdrop-blur-xl glow-ring float-slow"
            >
              <div className="text-xs uppercase tracking-widest text-white/50">Monthly Leads</div>
              <div className="mt-2 font-display text-4xl font-bold text-white">+247%</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-white/60">
                <TrendingUp className="h-3 w-3" /> vs last quarter
              </div>
              {/* fake chart */}
              <div className="mt-4 flex h-10 items-end gap-1">
                {[20,35,28,50,42,68,55,82,70,95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 1 + i * 0.05, duration: 0.6 }}
                    className="flex-1 rounded-sm bg-white/80"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* marquee logos */}
        <div className="relative border-y border-white/10 bg-black/40 py-6 overflow-hidden">
          <div className="mb-3 text-center text-[10px] uppercase tracking-[0.3em] text-white/40">
            Trusted by leading logistics companies
          </div>
          <div className="marquee flex w-max gap-14 whitespace-nowrap text-base font-display font-semibold text-white/40">
            {[...logos, ...logos, ...logos].map((l, i) => (
              <span key={i} className="transition hover:text-white">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl text-balance">
              Why most logistics companies struggle online.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-black/60">
              The logistics industry is booming, but most companies are leaving millions on the table with ineffective digital marketing.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.t} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 transition hover:border-black hover:shadow-xl">
                <div className="font-display text-5xl font-bold text-black/10 transition group-hover:text-black/20">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60">{p.d}</p>
                <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 -translate-y-1 translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              </Reveal>
            ))}
          </Stagger>

          <Reveal className="mt-16 rounded-3xl bg-[#111] p-10 text-white sm:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <SectionLabel dark>The Cost of Inaction</SectionLabel>
                <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                  Every month you delay digital marketing is revenue lost to competitors.
                </h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { t: "Lost Leads", d: "Every day without SEO is leads going to competitors" },
                  { t: "Low Visibility", d: "Page 2 of Google means you don't exist" },
                  { t: "Competitors Win", d: "They're investing in digital while you wait" },
                ].map((x) => (
                  <div key={x.t} className="rounded-xl border border-white/15 bg-white/5 p-5">
                    <div className="font-display font-semibold">{x.t}</div>
                    <div className="mt-2 text-sm text-white/60">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== TESTIMONIALS marquee ===== */}
      <section className="section-dark py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel dark>Testimonials</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              What our clients say.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 space-y-6 overflow-hidden">
          {[testimonials, [...testimonials].reverse()].map((row, ri) => (
            <div key={ri} className="overflow-hidden">
              <div className={`${ri === 0 ? "marquee" : "marquee-reverse"} flex w-max gap-6`}>
                {[...row, ...row].map((t, i) => (
                  <figure
                    key={`${ri}-${i}`}
                    className="w-[380px] flex-shrink-0 rounded-2xl border border-white/10 bg-[#161616] p-7 sm:w-[440px]"
                  >
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-white text-white" />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-[15px] leading-relaxed text-white/85">
                      "{t.q}"
                    </blockquote>
                    <figcaption className="mt-6 border-t border-white/10 pt-4">
                      <div className="font-display text-sm font-semibold text-white">{t.n}</div>
                      <div className="text-xs text-white/50">{t.r}</div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY US + INDUSTRIES ===== */}
      <section id="industries" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
            <Reveal>
              <SectionLabel>Why Us</SectionLabel>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl text-balance">
                We specialize only in logistics marketing.
              </h2>
              <p className="mt-5 text-lg text-black/60">
                Unlike generic agencies, we live and breathe logistics. Our team understands freight terminology, shipping cycles and what decision-makers in supply chain companies actually search for.
              </p>
              <p className="mt-4 text-lg text-black/60">
                That deep knowledge means better keywords, better content, better conversions — and more qualified freight leads for your business.
              </p>
            </Reveal>

            <Stagger className="grid gap-3 sm:grid-cols-2">
              {industries.map(({ icon: Icon, t, d }) => (
                <Reveal key={t} className="group flex items-start gap-4 rounded-xl border border-black/10 p-5 transition hover:border-black hover:bg-[#111] hover:text-white">
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg bg-[#111] text-white transition group-hover:bg-white group-hover:text-[#111]">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{t}</div>
                    <div className="mt-1 text-sm opacity-60">{d}</div>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel dark>Results</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl text-balance">
              Proven growth for logistics companies.
            </h2>
          </Reveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "3×", v: "Average Lead Increase" },
              { k: "120%", v: "Organic Traffic Growth" },
              { k: "2.5×", v: "Conversion Rate Boost" },
              { k: "50+", v: "Logistics Clients Served" },
            ].map((s) => (
              <Reveal key={s.k} className="bg-[#111] p-8 sm:p-10">
                <div className="font-display text-6xl font-bold tracking-tight text-white">{s.k}</div>
                <div className="mt-3 text-sm uppercase tracking-widest text-white/50">{s.v}</div>
              </Reveal>
            ))}
          </Stagger>

          {/* Timeline */}
          <div className="mt-24">
            <Reveal>
              <SectionLabel dark>Growth Timeline</SectionLabel>
              <h3 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                Your path to more freight leads.
              </h3>
            </Reveal>

            <Stagger className="relative mt-12 grid gap-8 md:grid-cols-4">
              <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-white/0 via-white/30 to-white/0 md:block" />
              {timeline.map((s, i) => (
                <Reveal key={s.m} className="relative">
                  <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-[#111] font-display font-semibold text-white">
                    {i + 1}
                  </div>
                  <div className="mt-5 text-center">
                    <div className="text-xs uppercase tracking-widest text-white/40">{s.m}</div>
                    <div className="mt-2 font-display text-xl font-semibold text-white">{s.t}</div>
                    <div className="mt-2 text-sm text-white/60">{s.d}</div>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl text-balance">
              Everything you need to dominate online.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-black/60">
              A full-stack digital marketing system designed specifically for logistics companies.
            </p>
          </Reveal>

          <div className="mt-16 space-y-6">
            {services.map(({ n, icon: Icon, t, d, b }, i) => (
              <Reveal key={n}>
                <div className={`group grid items-center gap-10 rounded-3xl border border-black/10 p-8 transition hover:shadow-2xl sm:p-12 lg:grid-cols-2 ${
                  i % 2 === 1 ? "bg-[#111] text-white" : "bg-white"
                }`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`text-xs uppercase tracking-[0.3em] ${i % 2 === 1 ? "text-white/40" : "text-black/40"}`}>
                      Service {n}
                    </div>
                    <h3 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{t}</h3>
                    <p className={`mt-4 text-base leading-relaxed ${i % 2 === 1 ? "text-white/70" : "text-black/60"}`}>
                      {d}
                    </p>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {b.map((bi) => (
                        <li key={bi} className="flex items-center gap-2 text-sm">
                          <Check className={`h-4 w-4 ${i % 2 === 1 ? "text-white" : "text-black"}`} />
                          {bi}
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className={`mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
                      i % 2 === 1
                        ? "bg-white text-[#111] hover:translate-y-[-2px]"
                        : "bg-[#111] text-white hover:translate-y-[-2px]"
                    }`}>
                      Get Started <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl border ${
                      i % 2 === 1 ? "border-white/10 bg-[#1a1a1a]" : "border-black/10 bg-[#f5f5f5]"
                    }`}>
                      <div className={`absolute inset-0 ${i % 2 === 1 ? "grid-bg" : "grid-bg-light"}`} />
                      <div className="absolute inset-0 grid place-items-center">
                        <div className={`relative grid h-32 w-32 place-items-center rounded-2xl ${
                          i % 2 === 1 ? "bg-white text-[#111]" : "bg-[#111] text-white"
                        } transition group-hover:rotate-6 group-hover:scale-110`}>
                          <Icon className="h-14 w-14" strokeWidth={1.2} />
                        </div>
                      </div>
                      <div className={`absolute bottom-4 left-4 font-display text-7xl font-bold opacity-10 ${
                        i % 2 === 1 ? "text-white" : "text-black"
                      }`}>
                        {n}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section id="process" className="section-dark py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel dark>Our Process</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl text-balance">
              How we grow logistics companies.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-white/60">
              A proven 6-step framework that consistently delivers qualified freight leads.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p) => (
              <Reveal key={p.n} className="group bg-[#111] p-8 transition hover:bg-[#1a1a1a]">
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-5xl font-bold text-white">{p.n}</div>
                  <Zap className="h-5 w-5 text-white/30 transition group-hover:text-white" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.d}</p>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section id="cases" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl text-balance">
              Real growth stories.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-black/60">
              See how we've helped logistics companies transform their digital presence.
            </p>
          </Reveal>

          <div className="mt-14 space-y-6">
            {cases.map((c, i) => (
              <Reveal key={c.c}>
                <div className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:shadow-2xl">
                  <div className="grid items-center gap-0 lg:grid-cols-[1fr_1.2fr]">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#111] lg:aspect-auto lg:h-full">
                      <div className="absolute inset-0 grid-bg" />
                      <div className="absolute inset-0 flex flex-col justify-between p-8">
                        <div className="text-xs uppercase tracking-[0.3em] text-white/40">
                          0{i + 1} / {c.tag}
                        </div>
                        <div>
                          <div className="font-display text-5xl font-bold text-white sm:text-6xl">
                            {c.s[0][0]}
                          </div>
                          <div className="mt-1 text-sm text-white/60">{c.s[0][1]}</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 sm:p-12">
                      <div className="text-xs uppercase tracking-[0.3em] text-black/40">— {c.c}</div>
                      <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl text-balance">{c.h}</h3>
                      <p className="mt-4 text-black/60">{c.d}</p>
                      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-black/10 pt-6">
                        {c.s.map(([k, v]) => (
                          <div key={k}>
                            <div className="font-display text-2xl font-bold sm:text-3xl">{k}</div>
                            <div className="mt-1 text-xs text-black/50">{v}</div>
                          </div>
                        ))}
                      </div>
                      <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-sm font-medium text-white transition hover:translate-y-[-2px]">
                        Get Results Like This <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RESOURCES ===== */}
      <section id="resources" className="bg-[#f6f6f6] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Resources</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl text-balance">
              Free logistics marketing guides.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-black/60">
              Learn how logistics companies generate more freight leads, improve SEO rankings, and grow their transportation business online.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {guides.map((g) => (
              <Reveal key={g.t}>
                <a href="#" className="group block h-full overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="aspect-[5/3] overflow-hidden bg-[#111]">
                    <div className="relative h-full w-full grid-bg">
                      <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white backdrop-blur">
                        {g.c}
                      </div>
                      <BarChart3 className="absolute right-6 top-6 h-8 w-8 text-white/40" strokeWidth={1.4} />
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="text-xs uppercase tracking-widest text-black/40">
                      {g.r} • {g.c}
                    </div>
                    <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{g.t}</h3>
                    <p className="mt-3 text-sm text-black/60">{g.d}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                      Read Guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== WHY CHOOSE US (long) ===== */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <SectionLabel>Why Logistics Companies Choose Us</SectionLabel>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl text-balance">
              Websites & marketing built specifically for logistics.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-black/60">
              Most agencies design generic websites. We specialize in logistics, freight, and supply chain companies — building websites that generate qualified B2B leads.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Deep Logistics Industry Understanding", d: "We work exclusively with logistics, freight and supply chain companies. We understand how your customers search and how to communicate your value clearly." , tag: "Freight • 3PL • Warehousing"},
              { t: "SEO Built for Freight Keywords", d: "Optimized for logistics-specific keywords like freight forwarding, warehousing, trucking and supply chain solutions.", tag: "High-intent search terms" },
              { t: "Designed to Generate Qualified Leads", d: "Every page is built with conversion psychology. Strategic CTAs, trust signals and lead capture forms convert visitors into inquiries.", tag: "More leads, not just traffic" },
              { t: "Websites That Convert Visitors", d: "Our designs follow proven UX structures used by high-growth companies. Clear messaging and strategic layouts.", tag: "Conversion-focused layouts" },
              { t: "We Speak the Language of Logistics", d: "From freight forwarding to supply chain management, we understand the terminology that builds credibility with B2B buyers.", tag: "No generic marketing copy" },
              { t: "Track Every Lead & Result", d: "We implement analytics and tracking systems so you know exactly where leads come from and how marketing performs.", tag: "Clear performance insights" },
            ].map((x, i) => (
              <Reveal key={x.t} className="group bg-white p-8 transition hover:bg-[#111] hover:text-white">
                <div className="font-display text-sm text-black/30 transition group-hover:text-white/40">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold leading-snug">{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60 transition group-hover:text-white/70">
                  {x.d}
                </p>
                <div className="mt-6 text-xs uppercase tracking-widest text-black/40 transition group-hover:text-white/40">
                  {x.tag}
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-[#f6f6f6] py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl text-balance">
              Frequently asked questions.
            </h2>
            <p className="mt-5 text-black/60">
              Still curious? Book a strategy call and we'll answer anything specific to your logistics company.
            </p>
          </Reveal>
          <div className="divide-y divide-black/10 border-y border-black/10">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-semibold sm:text-xl">{f.q}</span>
                    <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-black/20">
                      {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pr-12 text-black/60">{f.a}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CTA / CONTACT ===== */}
      <section id="contact" className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <SectionLabel dark>Get Started</SectionLabel>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl text-balance">
              Ready to generate more freight leads?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/60">
              Book a free strategy call and discover how we can help your logistics company dominate search results and generate qualified B2B leads consistently.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Free 30-minute strategy call",
                "Custom growth plan for your company",
                "No obligation, no pressure",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-white/85">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[#111]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-white/10 bg-white p-8 text-[#111] sm:p-10"
            >
              <div className="font-display text-2xl font-bold">Request Strategy Call</div>
              <p className="mt-2 text-sm text-black/50">
                Fill out the form and we'll reach out within 24 hours.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { l: "Full Name", p: "John Smith", type: "text" },
                  { l: "Work Email", p: "john@company.com", type: "email" },
                  { l: "Company Name", p: "Your Logistics Company", type: "text" },
                ].map((f) => (
                  <div key={f.l}>
                    <label className="text-xs font-medium uppercase tracking-widest text-black/50">
                      {f.l}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.p}
                      className="mt-2 w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-black"
                    />
                  </div>
                ))}
              </div>
              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-4 text-sm font-medium text-white transition hover:translate-y-[-2px]">
                Request Strategy Call <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-4 text-center text-xs text-black/40">
                No spam. No obligation. Just growth strategies.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="section-dark border-t border-white/10 pb-10 pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-md bg-white font-bold text-[#111]">L</div>
                <span className="font-display text-lg font-semibold text-white">LOGIFRAME</span>
              </div>
              <p className="mt-5 max-w-sm text-sm text-white/60">
                The digital marketing agency built exclusively for logistics, freight forwarding, trucking, 3PL and supply chain companies.
              </p>
            </div>
            {[
              { h: "Services", l: ["Website Design","Logistics SEO","Lead Generation","Content Marketing","Paid Advertising"] },
              { h: "Company", l: ["Case Studies","Our Process","Resources","Contact"] },
              { h: "Legal", l: ["Privacy Policy","Terms of Service","Cookie Policy","Disclaimer"] },
            ].map((c) => (
              <div key={c.h}>
                <div className="font-display text-sm font-semibold text-white">{c.h}</div>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {c.l.map((x) => (
                    <li key={x}>
                      <a href="#" className="transition hover:text-white">{x}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40">
            <div className="flex items-center gap-2">
              <Building2 className="h-3.5 w-3.5" />
              © {new Date().getFullYear()} Logiframe. Built for logistics.
            </div>
            <div>Made with precision · Black & white by design</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
