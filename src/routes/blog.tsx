import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero, CTABand, PageShell } from "@/components/PageShell";
import { Stagger } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "GEO vs SEO: how logistics companies get cited by ChatGPT in 2026",
    excerpt: "The new discipline of Generative Engine Optimization explained for freight brokers and 3PLs.",
    category: "AI Search",
    read: "8 min",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Why your TMS landing page is killing your PPC ROI",
    excerpt: "Five conversion patterns we've tested across 40+ freight broker accounts.",
    category: "Conversion",
    read: "6 min",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "The CDL driver recruitment funnel that books 100+ applications a month",
    excerpt: "TikTok creative, geo targeting and 60-second mobile applications.",
    category: "Trucking",
    read: "7 min",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Post-Brexit customs SEO: the keywords UK forwarders are still missing",
    excerpt: "Lessons from 18 months ranking British 3PLs and customs brokers for HMRC queries.",
    category: "Forwarding",
    read: "9 min",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Multilingual logistics SEO: why a Google Translate widget kills your rankings",
    excerpt: "How to ship Dutch, German, Polish and Italian variants the right way.",
    category: "International",
    read: "10 min",
    image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "How to fill empty warehouse capacity with paid search in 60 days",
    excerpt: "A capacity-fill playbook for 3PLs after a major client churn.",
    category: "3PL",
    read: "7 min",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1400&q=80",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Logistics Marketing Insights — Logiframe" },
      { name: "description", content: "Tactical insights for freight brokers, 3PLs, trucking firms and forwarders. SEO, GEO, AIO, PPC, driver recruitment and TMS-integrated marketing." },
      { property: "og:title", content: "Insights — Logiframe" },
      { property: "og:description", content: "Tactical marketing insights for logistics operators." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/blog" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <PageShell>
      <Nav />
      <PageHero
        eyebrow="Insights"
        title="Tactical playbooks for logistics operators"
        subtitle="Long-form articles solving real problems for freight brokers, 3PLs, trucking firms and international forwarders."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article key={p.title} className="group overflow-hidden rounded-3xl border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-xl">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-widest text-black/50">
                    <span>{p.category}</span>
                    <span>{p.read}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65">{p.excerpt}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#111]">
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </section>
      <CTABand />
      <Footer />
    </PageShell>
  );
}
