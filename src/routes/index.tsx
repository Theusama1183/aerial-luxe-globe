import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Reveal, Stagger } from "@/components/Reveal";
import { PlanetScene } from "@/components/PlanetScene";
import { HeroVideoBackground, HeroVideoPreview, VideoModal } from "@/components/HeroMedia";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Star,
  Truck,
  Plane,
  Check,
  Sparkles,
  Search,
  Target,
  Rocket,
  LineChart,
  Globe2,
  Warehouse,
  Package,
  Network,
  ChevronDown,
  Mail,
  TrendingUp,
  Zap,
  Database,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Logiframe — Digital Marketing Agency for Logistics & Supply Chain" },
      {
        name: "description",
        content:
          "Logiframe helps logistics, freight, 3PL and supply chain companies generate consistent B2B leads with SEO, high-conversion websites and digital marketing.",
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
  "FREIGHTMAX", "GLOBALSHIP", "TRUCKPRO", "WARENET", "CHAINLINK",
  "LOGIFLOW", "CARGOWISE", "SHIPFAST", "MAERSK", "DHL", "FEDEX", "UPS",
];

const problems = [
  {
    icon: Layers,
    title: "Outdated Websites",
    body: "90% of logistics websites fail to convert. They look dated, load slowly, and lack clear CTAs.",
  },
  {
    icon: Search,
    title: "No SEO Strategy",
    body: "Competitors rank for 'freight forwarding services' while you're invisible on Google.",
  },
  {
    icon: Target,
    title: "Weak Lead Funnels",
    body: "No capture forms, no nurture sequences, no way to turn visitors into qualified freight leads.",
  },
];

const testimonialsA = [
  {
    q: "Honestly wasn't sure about this whole digital thing at first. Been running trucks for 30 years the old way. But man, these guys get it. Phone's actually ringing now with real customers, not just brokers lowballing us.",
    name: "Dave Kowalski",
    role: "Owner, Kowalski Freight Lines",
  },
  {
    q: "We tried two other agencies before this and wasted like $15k. Finally found people who actually know what a 3PL does lol. Our site doesn't look like a generic template anymore and we're getting actual warehouse inquiries.",
    name: "Jennifer Patel",
    role: "Operations Manager, Summit 3PL",
  },
  {
    q: "First month I thought we made a mistake. Nothing happened. But then month 2-3 things started clicking. Now we're 6 months in and I'm eating my words. Lead quality is way better than the trade shows we used to do.",
    name: "Marcus Webb",
    role: "VP Sales, Midwest Distribution",
  },
  {
    q: "Finally, an agency that doesn't need me to explain what LTL means or why 'just run Facebook ads' won't work for us. The content they write actually sounds like it's from our industry.",
    name: "Rachel Nguyen",
    role: "Marketing Director, Pacific Cargo",
  },
];

const testimonialsB = [
  {
    q: "Been in this business since '92. Tried the Yellow Pages, cold calling, everything. This internet marketing stuff actually works if you got the right people. Wish I'd done this 5 years ago.",
    name: "Tom Berkowitz",
    role: "CEO, Berkowitz Logistics Group",
  },
  {
    q: "My husband was against spending money on a redesign. 'Nobody cares about websites' he said. Well, we just landed our biggest client yet and they told us they picked us because our site looked professional.",
    name: "Angela Morrison",
    role: "Co-Owner, Morrison & Sons Trucking",
  },
  {
    q: "Their proposal wasn't the cheapest. Went with them anyway because they actually asked good questions instead of just promising the moon. Three months later, best decision we made. ROI is there.",
    name: "Chris Delgado",
    role: "Founder, Velocity Freight Solutions",
  },
  {
    q: "We're in a super niche market — temperature controlled logistics. Most agencies have no clue. These folks took time to understand our world. The leads we get now actually know what reefer freight is.",
    name: "Karen Lindstrom",
    role: "BD Director, Nordic Cold Chain",
  },
];

const industries = [
  { icon: Globe2, title: "Freight Forwarding", body: "International & domestic freight" },
  { icon: Truck, title: "Trucking", body: "LTL, FTL, and fleet operators" },
  { icon: Network, title: "3PL Providers", body: "Third-party logistics operators" },
  { icon: Warehouse, title: "Warehousing", body: "Storage & distribution centers" },
  { icon: Package, title: "Supply Chain", body: "End-to-end supply chain companies" },
];

const methodology = [
  { icon: Database, title: "Data-First Approach", body: "Every decision backed by logistics data and analytics." },
  { icon: Target, title: "Industry-Specific", body: "We only work with logistics — no generalist guesswork." },
  { icon: Zap, title: "Speed to Results", body: "Proven frameworks that deliver leads in weeks, not months." },
];

const results = [
  { value: "3X", label: "Average Lead Increase" },
  { value: "120%", label: "Organic Traffic Growth" },
  { value: "2.5X", label: "Conversion Rate Boost" },
  { value: "50+", label: "Logistics Clients Served" },
];

const timeline = [
  { stage: "Month 1–2", title: "Foundation", body: "Website build, SEO audit, keyword strategy." },
  { stage: "Month 3–4", title: "Traction", body: "Rankings improve, first leads start coming in." },
  { stage: "Month 5–6", title: "Growth", body: "Consistent lead flow, expanding keyword presence." },
  { stage: "Month 7+", title: "Scale", body: "Compounding results, dominant market position." },
];

const services = [
  {
    n: "01",
    title: "High-Conversion Website Design",
    body: "Custom logistics websites engineered to convert visitors into freight leads. Mobile-first, fast-loading, built with conversion psychology.",
    bullets: ["Custom UI/UX for logistics", "Lead capture optimization", "Mobile-responsive design", "Fast load speeds"],
  },
  {
    n: "02",
    title: "Logistics SEO",
    body: "Rank for high-intent keywords like 'freight forwarding services' and '3PL providers' to capture ready-to-buy leads.",
    bullets: ["Keyword research for logistics", "On-page optimization", "Technical SEO audits", "Local SEO for trucking"],
  },
  {
    n: "03",
    title: "Lead Generation Funnels",
    body: "Multi-touch funnels that nurture cold traffic into qualified B2B freight leads. From first touch to signed contract.",
    bullets: ["Landing page design", "Email nurture sequences", "CRM integration", "Lead scoring"],
  },
  {
    n: "04",
    title: "Content Marketing",
    body: "Authority-building content that positions your company as the go-to expert in your logistics niche.",
    bullets: ["Industry blog posts", "Case study creation", "Whitepapers & guides", "Social media content"],
  },
  {
    n: "05",
    title: "Paid Advertising",
    body: "Google Ads and LinkedIn campaigns targeting logistics decision-makers actively searching for your services.",
    bullets: ["Google Ads management", "LinkedIn B2B targeting", "Retargeting campaigns", "ROI tracking"],
  },
];

const process = [
  { n: "01", title: "Audit & Research", body: "Deep-dive into your digital presence, competitors, and market opportunities." },
  { n: "02", title: "Strategy Development", body: "Custom marketing plan with target keywords, content calendar, and funnel architecture." },
  { n: "03", title: "Build Marketing System", body: "Design and build your high-conversion website, landing pages, and lead capture systems." },
  { n: "04", title: "Traffic Generation", body: "Launch SEO campaigns, content marketing, and paid ads to drive qualified logistics traffic." },
  { n: "05", title: "Conversion Optimization", body: "A/B test everything. Optimize forms, CTAs, and user flows to maximize lead generation." },
  { n: "06", title: "Scale Results", body: "Double down on what works. Expand into new keywords, markets, and channels." },
];

const longCases = [
  {
    vertical: "Freight Forwarding",
    brand: "GlobalFreight Solutions",
    headline: "312% increase in organic traffic in 8 months",
    body: "A mid-size freight forwarder struggling with zero online presence. We rebuilt their website, launched a targeted SEO campaign, and built lead capture funnels that generated 87 qualified leads per month.",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=70",
    stats: [
      { v: "+312%", l: "Organic Traffic" },
      { v: "87", l: "Qualified Leads/Mo" },
      { v: "$1.2M", l: "Revenue Impact" },
    ],
  },
  {
    vertical: "Trucking",
    brand: "MidWest Trucking Co.",
    headline: "From page 5 to #1 for 'trucking services' in their region",
    body: "A regional trucking company with an outdated website. We implemented local SEO, Google Business optimization, and a conversion-focused redesign that brought them to the top of search results.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=70",
    stats: [
      { v: "42 → #1", l: "Keyword Rankings" },
      { v: "120+", l: "Monthly Leads" },
      { v: "-64%", l: "Cost Per Lead" },
    ],
  },
  {
    vertical: "3PL",
    brand: "ChainLink 3PL",
    headline: "2.5X conversion rate with new lead generation funnels",
    body: "A 3PL provider with plenty of traffic but poor conversion. We redesigned their funnel, added lead scoring, and implemented email nurture sequences that transformed their pipeline.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=70",
    stats: [
      { v: "2.5X", l: "Conversion Rate" },
      { v: "+85%", l: "Lead Quality Score" },
      { v: "+$3.4M", l: "Sales Pipeline" },
    ],
  },
];

const resources = [
  {
    tag: "SEO",
    read: "8 min read",
    title: "The Complete Logistics SEO Guide",
    body: "How logistics companies rank on Google for freight keywords, generate organic leads, and dominate search results.",
  },
  {
    tag: "Marketing",
    read: "6 min read",
    title: "Freight Marketing Strategy Blueprint",
    body: "A step-by-step strategy used by successful logistics companies to generate consistent B2B leads.",
  },
  {
    tag: "Growth",
    read: "5 min read",
    title: "How Logistics Websites Generate B2B Leads",
    body: "Website structures and marketing funnels that convert visitors into long-term shipping clients.",
  },
];

const whyUsList = [
  { title: "Deep Logistics Industry Understanding", body: "We work exclusively with logistics, freight, and supply chain. We understand how your customers search and how to communicate your value.", tag: "Freight • 3PL • Warehousing • Transportation" },
  { title: "SEO Built for Freight Keywords", body: "Your website is optimized for freight forwarding, warehousing, trucking services, and supply chain solutions.", tag: "High-intent logistics search terms" },
  { title: "Designed to Generate Qualified Leads", body: "Every page is built with conversion psychology — strategic CTAs, trust signals, and lead capture forms.", tag: "More leads, not just more traffic" },
  { title: "Websites That Turn Visitors Into Customers", body: "Proven UX structures from high-growth companies. Clear messaging, strong CTAs, strategic layouts.", tag: "Conversion-focused layouts" },
  { title: "We Speak the Language of Logistics", body: "From freight forwarding to supply chain management, we communicate your services in a way that builds credibility with B2B buyers.", tag: "No generic marketing language" },
  { title: "Track Every Lead & Marketing Result", body: "Analytics and tracking systems so you know exactly where your leads come from and how marketing performs.", tag: "Clear performance insights" },
];

const faqs = [
  { q: "How long does logistics SEO take to show results?", a: "Most clients see early ranking movement in 60–90 days and meaningful lead flow by month 4–6. Logistics keywords are competitive but high-intent, so the compounding effect after month 6 is significant." },
  { q: "What does your pricing look like?", a: "Engagements typically start at $4.5K/mo for focused SEO and scale to full growth retainers ($12K–$25K/mo) covering website, SEO, content and paid. Every plan is scoped to your stage." },
  { q: "What kind of results can we expect?", a: "Our average client sees a 3X lift in qualified freight leads and 120% organic traffic growth in the first 12 months. We share real benchmarks during the strategy call." },
  { q: "Do you work with small logistics companies?", a: "Yes. We have a Startup track designed for owner-operators and emerging 3PLs. Focused scope, lean spend, fast launch." },
  { q: "How is Logiframe different from other marketing agencies?", a: "We only work in logistics. We don't take dentists, SaaS or e-commerce. That focus means our playbooks, content and keyword libraries are purpose-built for freight." },
];

const stages = [
  { tag: "STARTUP", title: "Agile & Fast", body: "For early carriers and 3PLs finding product-market fit. Launch lean and validate channels.", points: ["Website + brand", "Founder-led content", "Demand discovery"] },
  { tag: "MID-SIZE", title: "Scale What Works", body: "For growing freight brands ready to double down on what's actually moving pipeline.", points: ["Performance SEO", "Sales-led ABM", "Conversion engineering"] },
  { tag: "ENTERPRISE", title: "Sustain Global Dominance", body: "For multi-region logistics leaders defending share across regions, lanes and verticals.", points: ["Global SEO ops", "Account-based motion", "Brand authority systems"] },
];

const caseStudies = [
  { brand: "NorthFreight", metric: "+182%", label: "Qualified freight leads in 6 months" },
  { brand: "PortLine 3PL", metric: "+74%", label: "Organic traffic from shipper keywords" },
  { brand: "VeloCarrier", metric: "+1,400%", label: "ROI on paid LinkedIn campaigns" },
  { brand: "Cargonex", metric: "+58%", label: "RFQ form conversion uplift" },
  { brand: "Airbound", metric: "+91%", label: "Reduction in cost-per-lead" },
  { brand: "StackRoute", metric: "+46%", label: "Pipeline created in Q1 alone" },
];

/* -------------------- page -------------------- */

function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-white text-[#111111]">
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />

      {/* announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#111] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2 text-xs">
          <Sparkles className="h-3.5 w-3.5" />
          <span className="opacity-80">Free Logistics SEO Audit — Limited Spots Available</span>
          <a href="#contact" className="font-medium underline-offset-4 hover:underline">
            Claim Yours →
          </a>
        </div>
      </div>
      <div className="h-9" />

      <Nav />

      {/* ============ HERO ============ */}
      <section ref={heroRef} className="section-dark relative min-h-screen overflow-hidden">
        <HeroVideoBackground />
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.15fr_1fr]"
        >
          <div className="max-w-2xl">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                <span className="relative h-1.5 w-1.5 rounded-full bg-white pulse-ring" />
                Logistics Marketing Specialists
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[80px]">
                Digital Marketing for
                <span className="block text-white/60">Supply Chain Companies</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg text-white/70">
                We help logistics companies generate consistent B2B freight leads
                using SEO, high-conversion websites and digital marketing.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#111] transition hover:bg-white/90">
                  Book Strategy Call
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#111]">
                    <Play className="h-3.5 w-3.5 translate-x-px fill-current" />
                  </span>
                  Watch Showreel
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />
                    ))}
                  </div>
                  <span className="uppercase tracking-widest">4.9 client rating</span>
                </div>
                <span className="uppercase tracking-widest">Logistics specialists</span>
                <span className="uppercase tracking-widest">Proven growth</span>
              </div>
            </Reveal>
          </div>

          {/* Right side: custom video preview card */}
          <div className="relative">
            <HeroVideoPreview onOpen={() => setVideoOpen(true)} />
          </div>
        </motion.div>

        {/* scroll cue */}
        <div className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 md:flex">
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="h-6 w-px bg-white/30" />
        </div>

        {/* Logo marquee */}
        <div className="relative z-10 border-y border-white/10 bg-black/40 py-7 backdrop-blur">
          <p className="mb-5 text-center text-[10px] uppercase tracking-[0.35em] text-white/40">
            Trusted by Leading Logistics Companies
          </p>
          <div className="overflow-hidden">
            <div className="marquee flex w-max gap-16 px-8">
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <span key={i} className="font-display whitespace-nowrap text-xl font-semibold tracking-widest text-white/40 transition hover:text-white">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROBLEM ============ */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="absolute inset-0 grid-bg-light opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">The Problem</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Why Most Logistics Companies Struggle Online
            </h2>
            <p className="mt-5 max-w-2xl text-[#555]">
              The logistics industry is booming, but most companies are leaving
              millions on the table with ineffective digital marketing.
            </p>
          </Reveal>

          <Stagger className="mt-16 grid gap-5 md:grid-cols-3">
            {problems.map((p) => (
              <Reveal key={p.title}>
                <div className="group h-full rounded-2xl border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:border-black/40 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.2)]">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-[#111] text-white">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm text-[#555]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>

          {/* Cost of Inaction */}
          <Reveal>
            <div className="mt-16 rounded-3xl border border-black/10 bg-[#111] p-10 text-white sm:p-14">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">Cost of Inaction</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                    Every month you delay is revenue lost to competitors.
                  </h3>
                </div>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {[
                  { t: "Lost Leads", b: "Every day without SEO is leads going to competitors" },
                  { t: "Low Visibility", b: "Page 2 of Google means you don't exist" },
                  { t: "Competitors Win", b: "They're investing in digital while you wait" },
                ].map((x) => (
                  <div key={x.t} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="font-display text-lg font-semibold">{x.t}</div>
                    <p className="mt-2 text-sm text-white/60">{x.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TESTIMONIALS (2 marquees) ============ */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-white/50">Testimonials</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-center font-display text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
              What Our Clients Say
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-14 space-y-6">
          <MarqueeRow items={testimonialsA} />
          <MarqueeRow items={testimonialsB} reverse />
        </div>

        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />
      </section>

      {/* ============ WHY US / INDUSTRIES ============ */}
      <section id="industries" className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">Why Us</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              We Specialize Only in Logistics Marketing
            </h2>
            <p className="mt-5 max-w-lg text-[#555]">
              Unlike generic agencies, we live and breathe logistics. Our team
              understands freight terminology, shipping cycles, B2B sales
              processes, and what decision-makers in supply chain companies
              actually search for.
            </p>
            <p className="mt-4 max-w-lg text-[#555]">
              This deep industry knowledge means better keywords, better content,
              better conversions — and ultimately, more qualified freight leads.
            </p>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4">
            {industries.map((i) => (
              <Reveal key={i.title}>
                <div className="group h-full rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-black/40">
                  <i.icon className="h-6 w-6" />
                  <div className="mt-5 font-display text-lg font-semibold">{i.title}</div>
                  <p className="mt-1.5 text-sm text-[#666]">{i.body}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ PARALLAX IMAGE STRIP ============ */}
      <ParallaxStrip />



      {/* ============ METHODOLOGY + RESULTS ============ */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Our Methodology</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Built for Logistics Growth
            </h2>
            <p className="mt-5 max-w-2xl text-white/60">
              Our proprietary framework combines deep logistics knowledge with
              proven digital marketing strategies.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {methodology.map((m) => (
              <Reveal key={m.title}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-white/40">
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-white text-[#111]">
                    <m.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{m.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>

          {/* Results */}
          <div className="mt-24">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Results</p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
                Proven Growth for Logistics Companies
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {results.map((r) => (
                <Reveal key={r.label}>
                  <div className="h-full bg-[#111] p-8">
                    <div className="font-display text-5xl font-semibold text-white">{r.value}</div>
                    <div className="mt-3 text-sm text-white/60">{r.label}</div>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============ GROWTH TIMELINE ============ */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">Growth Timeline</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Your Path to More Freight Leads
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-black/10 md:block" />
            <Stagger className="grid gap-8 md:grid-cols-4">
              {timeline.map((t, i) => (
                <Reveal key={t.stage}>
                  <div className="relative">
                    <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-black/10 bg-white font-display font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-6 text-xs uppercase tracking-[0.25em] text-[#666]">{t.stage}</div>
                    <div className="mt-2 font-display text-2xl font-semibold">{t.title}</div>
                    <p className="mt-2 text-sm text-[#555]">{t.body}</p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Services</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Everything You Need to Dominate Online
            </h2>
            <p className="mt-5 max-w-2xl text-white/60">
              A full-stack digital marketing system designed specifically for
              logistics companies.
            </p>
          </Reveal>

          <div className="mt-16 space-y-6">
            {services.map((s) => (
              <Reveal key={s.n}>
                <div className="group grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-white/40 hover:bg-white/[0.05] md:grid-cols-[1fr_2fr] md:p-12">
                  <div>
                    <div className="font-mono text-xs tracking-[0.25em] text-white/40">SERVICE {s.n}</div>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">{s.title}</h3>
                    <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#111] transition hover:bg-white/90">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div>
                    <p className="text-white/70">{s.body}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-white/80">
                          <Check className="h-4 w-4 text-white/60" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS 6 STEPS ============ */}
      <section id="process" className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">Our Process</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              How We Grow Logistics Companies
            </h2>
            <p className="mt-5 max-w-2xl text-[#555]">
              A proven 6-step framework that consistently delivers qualified
              freight leads.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {process.map((p) => (
              <Reveal key={p.n}>
                <div className="group relative h-full bg-white p-8 transition hover:bg-[#111] hover:text-white">
                  <div className="font-display text-5xl font-semibold text-black/15 transition group-hover:text-white/30">{p.n}</div>
                  <div className="mt-4 font-display text-2xl font-semibold">{p.title}</div>
                  <p className="mt-3 text-sm text-[#555] transition group-hover:text-white/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ AWARDS / PLANET (kept) ============ */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <PlanetScene />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-center text-sm uppercase tracking-[0.3em] text-white/50">The Award-Winning</p>
            <h2 className="mx-auto mt-3 max-w-4xl text-center font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Logistics-First Digital Marketing Agency
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            <Reveal className="lg:col-span-1">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-7 backdrop-blur-xl transition hover:border-white/30">
                <div className="mb-5 inline-flex h-10 items-center rounded-md bg-white px-3 font-display text-sm font-bold tracking-tight text-black">ADWEEK</div>
                <h3 className="font-display text-2xl font-semibold text-white">Fastest Growing Agency</h3>
                <p className="mt-3 text-sm text-white/60">Logiframe was named one of ADWEEK's Fastest Growing Logistics Marketing Agencies — three years in a row.</p>
                <div className="mt-8 text-xs uppercase tracking-widest text-white/40 transition group-hover:text-white">2022 · 2023 · 2024</div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="group relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-black">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,#2a2a2a,#000)]" />
                  <div className="absolute inset-0 opacity-40 grid-bg" />
                  <motion.div initial={{ x: "-20%" }} animate={{ x: "120%" }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 -translate-y-1/2">
                    <Truck className="h-16 w-16 text-white/30" strokeWidth={1} />
                  </motion.div>
                  <motion.div initial={{ x: "120%" }} animate={{ x: "-20%" }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute top-1/3">
                    <Plane className="h-12 w-12 text-white/20" strokeWidth={1} />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="relative flex h-full min-h-[340px] flex-col items-center justify-center p-10 text-center">
                  <button className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-white text-[#111] transition hover:scale-110">
                    <Play className="h-7 w-7 translate-x-0.5 fill-current" />
                  </button>
                  <p className="font-display text-xl font-medium text-white sm:text-2xl">"A best-in-class logistics marketing agency"</p>
                  <p className="mt-2 text-sm uppercase tracking-widest text-white/50">— Featured on Bloomberg TV</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:col-span-1">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-7 backdrop-blur-xl transition hover:border-white/30">
                <div className="mb-5 inline-flex flex-col rounded-md bg-white px-3 py-2 font-display text-black">
                  <span className="text-[10px] font-bold leading-none tracking-widest">MMA</span>
                  <span className="text-sm font-extrabold leading-none tracking-tight">SMARTIES</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">B2B Agency of the Year</h3>
                <p className="mt-3 text-sm text-white/60">Logiframe won the prestigious SMARTIES X Global Award for category-defining work in freight and supply chain.</p>
                <div className="mt-8 text-xs uppercase tracking-widest text-white/40 transition group-hover:text-white">Global Winner · 2025</div>
              </div>
            </Reveal>
          </div>

          {/* CATEGORY LEADERSHIP / case grid */}
          <div id="cases" className="mt-32">
            <Reveal>
              <p className="text-center text-sm uppercase tracking-[0.3em] text-white/50">Category Leadership in Action</p>
              <h2 className="mx-auto mt-3 max-w-4xl text-center font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                From Carriers to Global 3PLs
              </h2>
            </Reveal>

            <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((c) => (
                <Reveal key={c.brand}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl transition hover:border-white/40 hover:bg-black/70">
                    <div className="flex items-start justify-between">
                      <span className="font-display text-sm tracking-wide text-white/60">{c.brand}</span>
                      <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                    </div>
                    <div className="mt-10 font-display text-5xl font-semibold text-white">{c.metric}</div>
                    <p className="mt-3 text-sm text-white/60">{c.label}</p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============ LONG-FORM CASE STUDIES ============ */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">Case Studies</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Real Growth Stories
            </h2>
            <p className="mt-5 max-w-2xl text-[#555]">
              See how we've helped logistics companies transform their digital
              presence.
            </p>
          </Reveal>

          <div className="mt-16 space-y-8">
            {longCases.map((c, idx) => (
              <Reveal key={c.brand}>
                <div className={`group grid gap-10 overflow-hidden rounded-3xl border border-black/10 bg-white p-8 transition hover:border-black/40 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] md:grid-cols-[1fr_1.1fr] md:p-12 ${idx % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl md:[direction:ltr]">
                    <motion.img
                      src={c.image}
                      alt={c.brand}
                      loading="lazy"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full min-h-[280px] w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#111]">
                      {c.vertical}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                      <span className="font-display text-lg font-semibold">{c.brand}</span>
                      <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="md:[direction:ltr]">
                    <h3 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">{c.headline}</h3>
                    <p className="mt-4 text-[#555]">{c.body}</p>
                    <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-black/10">
                      {c.stats.map((s) => (
                        <div key={s.l} className="bg-white p-5">
                          <div className="font-display text-2xl font-semibold sm:text-3xl">{s.v}</div>
                          <div className="mt-2 text-[11px] uppercase tracking-widest text-[#666]">{s.l}</div>
                        </div>
                      ))}
                    </div>
                    <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#222]">
                      Get Results Like This <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TAILORED STAGES (kept) ============ */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 -z-0 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-1/2 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-10 backdrop-blur-2xl sm:p-16">
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
                      <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">{s.tag}</span>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-white">{s.title}</h3>
                      <p className="mt-3 text-sm text-white/60">{s.body}</p>
                      <ul className="mt-6 space-y-2 text-sm text-white/70">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-white/70" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 overflow-hidden">
                        <a href="#contact" className="inline-flex translate-y-12 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#111] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          Explore Plan <ArrowRight className="h-4 w-4" />
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

      {/* ============ RESOURCES ============ */}
      <section id="resources" className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">Resources</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Free Logistics Marketing Guides
            </h2>
            <p className="mt-5 max-w-2xl text-[#555]">
              Learn how logistics companies generate more freight leads, improve
              SEO rankings, and grow their transportation business online.
            </p>
          </Reveal>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {resources.map((r) => (
              <Reveal key={r.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:border-black/40">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#666]">
                    <span className="rounded-full border border-black/15 px-2.5 py-1 font-medium">{r.tag}</span>
                    <span>{r.read}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug">{r.title}</h3>
                  <p className="mt-3 text-sm text-[#555]">{r.body}</p>
                  <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                    Read Guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ WHY CHOOSE US (split list) ============ */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Why Logistics Companies Choose Us</p>
            <h2 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Websites & Marketing Built Specifically for Logistics
            </h2>
            <p className="mt-5 max-w-2xl text-white/60">
              Most agencies design generic websites. We specialize in logistics,
              freight, and supply chain — building websites that generate
              qualified B2B leads.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {whyUsList.map((w) => (
              <Reveal key={w.title}>
                <div className="group h-full bg-[#111] p-8 transition hover:bg-[#181818]">
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-white">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{w.title}</h3>
                      <p className="mt-2 text-sm text-white/65">{w.body}</p>
                      <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/40">{w.tag}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 max-w-md text-[#555]">
              Everything you wanted to know about working with a logistics-only
              marketing partner.
            </p>
            <TrendingUp className="mt-10 h-12 w-12 text-[#111]" strokeWidth={1.2} />
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Get Started</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Ready to Generate More Freight Leads?
            </h2>
            <p className="mt-5 max-w-md text-white/60">
              Book a free strategy call and discover how we can help your
              logistics company dominate search results and generate qualified
              B2B leads consistently.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              {["Free 30-minute strategy call", "Custom growth plan for your company", "No obligation, no pressure"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <Check className="h-4 w-4" /> {x}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-3 text-xs text-white/50">
              <Mail className="h-4 w-4" /> hello@logiframe.com
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">
              <div className="font-display text-xl font-semibold text-white">Request Strategy Call</div>
              <p className="mt-1 text-sm text-white/50">We'll reach out within 24 hours.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" placeholder="John Smith" />
                <Field label="Work Email" placeholder="john@company.com" type="email" />
                <Field label="Company Name" placeholder="Your Logistics Company" />
                <Field label="Phone (optional)" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="mt-4">
                <label className="text-xs uppercase tracking-[0.2em] text-white/50">Service Interested In</label>
                <select className="mt-2 w-full appearance-none rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white">
                  <option>Select a service...</option>
                  {services.map((s) => (
                    <option key={s.n}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label className="text-xs uppercase tracking-[0.2em] text-white/50">Message (optional)</label>
                <textarea rows={4} placeholder="Tell us about your logistics company and goals..." className="mt-2 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white" />
              </div>
              <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#111] transition hover:bg-white/90">
                Request Strategy Call <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-4 text-center text-xs text-white/40">
                No spam. No obligation. Just growth strategies.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="section-dark border-t border-white/10 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="font-display text-lg font-semibold text-white">LOGIFRAME</div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              The digital marketing agency built exclusively for logistics,
              freight forwarding, trucking, 3PL and supply chain companies.
            </p>
            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.25em] text-white/40">Freight Corridors</div>
              <ul className="mt-3 grid grid-cols-2 gap-1 text-sm text-white/60">
                {["Laredo, TX", "El Paso, TX", "McAllen, TX", "Brownsville, TX", "Odessa, TX"].map((c) => (
                  <li key={c}><a href="#" className="hover:text-white">{c}</a></li>
                ))}
              </ul>
              <a href="#" className="mt-3 inline-flex text-xs uppercase tracking-widest text-white/50 hover:text-white">View All Service Areas →</a>
            </div>
          </div>
          {[
            { h: "Services", l: ["Logistics SEO", "Web Design", "Freight Broker Marketing", "3PL Lead Generation", "PPC Management", "Supply Chain SEO"] },
            { h: "Resources", l: ["Blog", "For AI", "Case Studies", "Our Process", "Contact"] },
            { h: "Legal", l: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"] },
          ].map((g) => (
            <div key={g.h}>
              <div className="font-display text-sm font-semibold text-white">{g.h}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {g.l.map((i) => (
                  <li key={i}><a href="#" className="hover:text-white">{i}</a></li>
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

/* -------------------- sub components -------------------- */

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: { q: string; name: string; role: string }[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-5 ${reverse ? "marquee-reverse" : "marquee-slow"}`}>
        {[...items, ...items].map((t, i) => (
          <div key={i} className="w-[380px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
            <Rocket className="h-4 w-4 text-white/30" />
            <p className="mt-4 text-sm leading-relaxed text-white/80">"{t.q}"</p>
            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="font-display text-sm font-semibold text-white">{t.name}</div>
              <div className="text-xs text-white/50">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:border-black/30">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold sm:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-sm leading-relaxed text-[#555]">{a}</div>
      </motion.div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-white/50">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
      />
    </div>
  );
}

/* Parallax marquee strip of logistics imagery */
function ParallaxStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const imgs = [
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1568138084810-d471a36c0a26?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=900&q=70",
  ];
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a0a0a] py-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">In Motion</p>
        <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
          Moving freight across every channel
        </h3>
      </div>
      <motion.div style={{ x: x1 }} className="flex gap-5 px-5">
        {imgs.slice(0, 4).concat(imgs.slice(0, 4)).map((src, i) => (
          <div key={`a${i}`} className="relative h-56 w-[28rem] shrink-0 overflow-hidden rounded-2xl">
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="mt-5 flex gap-5 px-5">
        {imgs.slice(4).concat(imgs.slice(4)).map((src, i) => (
          <div key={`b${i}`} className="relative h-56 w-[28rem] shrink-0 overflow-hidden rounded-2xl">
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

void LineChart;
