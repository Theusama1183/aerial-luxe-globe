import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero, CTABand, PageShell } from "@/components/PageShell";
import { Reveal, Stagger } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    client: "Baltic Carrier Group",
    location: "Gdańsk, Poland",
    challenge: "Polish asset-based fleet of 220 trucks losing drivers monthly to faster-recruiting competitors.",
    solution: "Driver recruitment funnel + Polish landing pages + TikTok / Facebook geo-targeted ads.",
    result: "+412 qualified driver applications in 90 days. Cost-per-hire down 38%.",
    metric: "+412 driver apps",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    client: "Rotterdam Forwarding Co.",
    location: "Rotterdam, Netherlands",
    challenge: "Legacy WordPress site loading in 7.2s, zero AI citations, leaking PPC budget.",
    solution: "Full redesign on modern stack, Dutch + English subfolders, GEO content cluster.",
    result: "LCP 1.6s, +182% organic, cited in 14 AI Overviews. CAC down 41%.",
    metric: "+182% organic",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=80",
  },
  {
    client: "Hamburg Customs Brokers",
    location: "Hamburg, Germany",
    challenge: "Strong reputation offline, invisible online to younger procurement teams.",
    solution: "German entity SEO, FAQPage schema, Hamburg port hub page, LinkedIn ABM.",
    result: "+86 booked discovery calls in 6 months, 9 retained shipper accounts.",
    metric: "9 new shippers",
    image: "https://images.unsplash.com/photo-1565017228812-09e9d0fa5d9b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    client: "Iberia 3PL Network",
    location: "Valencia, Spain",
    challenge: "Empty warehouse capacity across 4 facilities in Spain after a major client churn.",
    solution: "Vertical-specific capacity-fill pages (FMCG, cold-chain, e-commerce) in Spanish.",
    result: "3 contract logistics deals signed in 5 months. 100% capacity by Q3.",
    metric: "100% filled",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1400&q=80",
  },
  {
    client: "Felixstowe Drayage Partners",
    location: "Felixstowe, UK",
    challenge: "Post-Brexit customs chaos creating opportunity but no inbound demand capture.",
    solution: "Brexit-customs authority content cluster, schema, and Google Ads for HMRC keywords.",
    result: "Ranked #1 for 'Felixstowe customs broker', 6× inbound RFQs.",
    metric: "6× RFQs",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    client: "Antwerp Chem Logistics",
    location: "Antwerp, Belgium",
    challenge: "Hazmat 3PL with deep expertise but a website that didn't convey it.",
    solution: "Brand + redesign + compliance-first landing pages with AEO / IATA schema.",
    result: "2 multi-year chemical shipper contracts won in first 6 months.",
    metric: "€4.2M pipeline",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?auto=format&fit=crop&w=1400&q=80",
  },
];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Logistics Marketing Case Studies — Logiframe" },
      { name: "description", content: "Real logistics, 3PL, freight broker and forwarder marketing results. Driver apps, organic growth, shipper acquisition and AI citations." },
      { property: "og:title", content: "Case Studies — Logiframe" },
      { property: "og:description", content: "Real logistics marketing results: driver apps, shipper acquisition, AI citations." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/case-studies" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/case-studies" }],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <PageShell>
      <Nav />
      <PageHero
        eyebrow="Case Studies"
        title="Hard results across European trade lanes"
        subtitle="No vanity metrics. Just driver apps, booked calls, shipper contracts and AI citations from operators we've worked with."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Stagger className="grid gap-8 md:grid-cols-2">
            {cases.map((c) => (
              <article key={c.client} className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={c.image} alt={c.client} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-black/50">
                    <span>{c.location}</span>
                    <span className="rounded-full bg-[#111] px-3 py-1 text-white">{c.metric}</span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">{c.client}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/70"><strong>Challenge:</strong> {c.challenge}</p>
                  <p className="mt-2 text-sm leading-relaxed text-black/70"><strong>Solution:</strong> {c.solution}</p>
                  <p className="mt-2 text-sm leading-relaxed text-black/70"><strong>Result:</strong> {c.result}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#111]">
                    Get a similar plan <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </Stagger>
          <div className="mt-12 text-center">
            <Reveal>
              <p className="text-sm text-black/60">Want the full case study deck with ad creative, search queries and revenue numbers?</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#111] px-6 py-3 text-sm font-medium text-white">
                Request the deck <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
      <CTABand />
      <Footer />
    </PageShell>
  );
}
