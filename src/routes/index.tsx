import { createFileRoute } from "@tanstack/react-router";
import { Hero3D } from "@/components/Hero3D";
import { Nav } from "@/components/Nav";
import { ArrowRight, Truck, Search, Megaphone, Palette, Share2, Target, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Logiframe — Digital Marketing Agency Built for Logistics" },
      {
        name: "description",
        content:
          "Websites, SEO, and digital marketing for trucking companies, freight brokers, 3PLs, and supply chain businesses. Results in 90 days or less.",
      },
      { property: "og:title", content: "Logiframe — Logistics Marketing Agency" },
      {
        property: "og:description",
        content: "Built exclusively for logistics. Websites, SEO, and ads that move freight.",
      },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Truck, title: "Website Design", desc: "Fast, mobile-first sites that turn shippers into clients." },
  { icon: Search, title: "SEO", desc: "Rank for the lanes, services, and cities your buyers search." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Google Ads, LinkedIn, email — all tuned for freight." },
  { icon: Palette, title: "Branding", desc: "Identity systems that make you look like the operator you are." },
  { icon: Share2, title: "Social Media", desc: "LinkedIn-first content while you focus on moving freight." },
  { icon: Target, title: "Google Ads / PPC", desc: "Targeted campaigns in front of active shippers." },
];

const whyUs = [
  { title: "We speak logistics", desc: "Brokers, 3PLs, asset carriers — we know the difference and the language that converts." },
  { title: "Results, not reports", desc: "Every strategy ties back to one outcome: qualified leads for your business." },
  { title: "You own everything", desc: "Your site, domain, accounts, content. No lock-in, no hostage." },
  { title: "We move fast", desc: "Websites in 4–6 weeks. SEO movement in 60–90 days." },
];

const testimonials = [
  { quote: "Within 90 days we were getting 4–6 inbound shipper inquiries per month. That had never happened in 12 years.", who: "Owner, Regional Trucking Co." },
  { quote: "The only agency we found that actually understands freight. The site looks better than companies 10× our size.", who: "CEO, Freight Brokerage" },
  { quote: "We ranked page one for three target keywords in 60 days. Our phone started ringing.", who: "Operations Director, 3PL" },
];

function Home() {
  return (
    <main className="bg-white text-[#111]">
      {/* HERO */}
      <section className="section-dark relative min-h-screen overflow-hidden">
        <Nav />
        <div className="absolute inset-0 grain text-white pointer-events-none" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-32 pb-16 lg:grid-cols-2 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-widest text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Built exclusively for logistics
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              The agency that
              <br />
              moves freight
              <br />
              <span className="italic text-white/60">online.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/70">
              Websites, SEO, and digital marketing for trucking companies, freight brokers, 3PLs, and supply chain businesses. No generalists. Just proven results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#111] transition hover:translate-y-[-2px]"
              >
                Get your free audit <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                See our work
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-white/50">
              <span>Logistics specialists</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>No long-term contracts</span>
              <span className="h-1 w-1 rounded-full bg-white/30" />
              <span>Results in 90 days</span>
            </div>
          </div>

          <div className="relative h-[520px] lg:h-[640px]">
            <div className="absolute inset-0">
              <Hero3D />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_55%,#111_85%)]" />
          </div>
        </div>

        {/* marquee */}
        <div className="relative border-t border-white/10 bg-black py-5 overflow-hidden">
          <div className="marquee flex w-max gap-12 whitespace-nowrap text-sm uppercase tracking-[0.3em] text-white/40">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12">
                <span>Trucking</span><span>·</span>
                <span>Freight Brokers</span><span>·</span>
                <span>3PL</span><span>·</span>
                <span>Freight Forwarders</span><span>·</span>
                <span>Customs</span><span>·</span>
                <span>Warehousing</span><span>·</span>
                <span>Supply Chain</span><span>·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-black/50">The problem</p>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                Your competitors are winning online. Here is why.
              </h2>
            </div>
            <div className="space-y-5 text-lg text-black/70">
              <p>
                Shippers vet carriers and brokers online before they call. Freight managers Google your company before they sign. If your site is slow, outdated, or missing from Google — you are losing business right now.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "A website that was built 5+ years ago and never updated",
                  "Zero Google rankings for keywords your buyers actually search",
                  "No leads ever coming from your website",
                  "Agencies that have no idea what a freight broker or 3PL does",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-black">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-black" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-white/50">What we do</p>
              <h2 className="font-display max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                Everything your logistics business needs to dominate online.
              </h2>
            </div>
            <p className="max-w-sm text-white/60">
              A complete suite of digital marketing — designed from the ground up for freight, trucking, 3PL, and supply chain.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-[#111] p-8 transition hover:bg-[#1a1a1a]">
                <Icon className="h-7 w-7 text-white" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 transition group-hover:text-white">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <p className="mb-3 text-xs uppercase tracking-widest text-black/50">Why us</p>
            <h2 className="font-display max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              100+ logistics companies trust Logiframe to grow their pipeline.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => (
              <div key={w.title} className="border-t-2 border-black pt-6">
                <div className="font-display text-sm text-black/40">0{i + 1}</div>
                <h3 className="mt-4 font-display text-xl font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-6 border-y border-black/10 py-12 sm:grid-cols-3">
            {[
              { k: "340%", v: "Avg organic traffic lift in 6 months" },
              { k: "4–6 wk", v: "Website launch turnaround" },
              { k: "95%", v: "Client retention after year one" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-5xl font-bold tracking-tight">{s.k}</div>
                <div className="mt-2 text-sm text-black/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="work" className="section-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <p className="mb-3 text-xs uppercase tracking-widest text-white/50">Proof</p>
            <h2 className="font-display max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              What logistics companies say.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-[#161616] p-8">
                <blockquote className="font-display text-lg leading-snug text-white">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 text-xs uppercase tracking-widest text-white/50">
                  — {t.who}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-white py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-5xl font-bold leading-tight sm:text-6xl">
            Ready to grow your logistics business online?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-black/60">
            Start with a free, no-obligation audit of your website and online presence. We will show you exactly where you stand and what it takes to fix it.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:hello@logiframe.com"
              className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:translate-y-[-2px]"
            >
              Get my free audit <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@logiframe.com"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-7 py-4 text-sm font-medium text-black transition hover:bg-black/5"
            >
              Book a call
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-black/40">
            {["No cost", "No commitment", "Delivered in 3 days"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <Check className="h-3 w-3" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section-dark border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-white/50">
          <div className="font-display font-semibold text-white">LOGIFRAME</div>
          <div>© {new Date().getFullYear()} Logiframe. Built for logistics.</div>
        </div>
      </footer>
    </main>
  );
}
