import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage, jsonLdFaq } from "@/components/MarketingPage";
import { Globe2, Search, Megaphone, MousePointerClick, LayoutTemplate, Bot } from "lucide-react";

const faq = [
  {
    q: "What makes Logiframe different from a generalist agency?",
    a: "We work exclusively with logistics and supply chain companies. Our team understands TMS systems, freight lanes, driver recruitment, and shipper acquisition — so every page, ad, and campaign is built in your operators' language.",
  },
  {
    q: "Do you offer the full stack — website, SEO, ads and lead gen?",
    a: "Yes. We are a full-stack partner. We rebuild outdated websites, modernize legacy SEO into AI-era GEO/AIO, run high-intent PPC, and operate the inbound lead pipeline end-to-end.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Logistics Marketing Services — Logiframe" },
      {
        name: "description",
        content:
          "Full-stack services for logistics and supply chain companies: website redesign, SEO + GEO/AIO, PPC ads, and lead generation built for 3PLs, brokers, carriers and forwarders.",
      },
      { property: "og:title", content: "Logistics Marketing Services — Logiframe" },
      { property: "og:description", content: "Website redesign, AI-era SEO (GEO/AIO), PPC and lead generation for logistics companies." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/services" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLdFaq(faq)) }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <MarketingPage
      eyebrow="Services"
      title="A full-stack growth engine for logistics & supply chain"
      subtitle="From rebuilding broken legacy websites to dominating AI-era search and pumping qualified shipper, carrier and driver leads into your pipeline."
      heroImage="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1800&q=80"
      intro="No generalists. Every service we ship is calibrated for freight, 3PL, trucking and forwarding operators — the people who actually run the supply chain."
      features={[
        {
          icon: LayoutTemplate,
          title: "Website Redesign",
          body: "Replace outdated, broken or slow logistics websites with fast, conversion-engineered platforms that match the credibility of your operation.",
        },
        {
          icon: Search,
          title: "SEO",
          body: "Classic technical and content SEO designed around how shippers, manufacturers and brokers actually search for capacity in 2026.",
        },
        {
          icon: Bot,
          title: "GEO & AIO",
          body: "Generative Engine Optimization and AI Optimization — get cited by ChatGPT, Gemini, Perplexity and Google AI Overviews when buyers ask for solutions.",
        },
        {
          icon: Megaphone,
          title: "Lead Generation",
          body: "Inbound funnels and outbound systems that book strategy calls with shipping managers, supply chain directors and carrier ops leads.",
        },
        {
          icon: MousePointerClick,
          title: "PPC Ads",
          body: "Google Search, LinkedIn ABM and YouTube campaigns tuned for B2B logistics buyers with high lifetime value.",
        },
        {
          icon: Globe2,
          title: "Multilingual SEO",
          body: "Native-language landing pages and hreflang for every European port city — Dutch, German, Spanish, Italian, Polish, French, Greek, Portuguese.",
        },
      ]}
      metrics={[
        { label: "Qualified leads / mo", value: "120+" },
        { label: "Avg. page LCP", value: "1.8s" },
        { label: "AI citation lift", value: "5×" },
        { label: "Languages shipped", value: "9" },
      ]}
      faq={faq}
    />
  );
}
