import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage, jsonLdFaq } from "@/components/MarketingPage";
import { Bot, Brain, Search, Sparkles, FileSearch, Network } from "lucide-react";

const faq = [
  { q: "What is GEO and AIO?", a: "GEO (Generative Engine Optimization) and AIO (AI Optimization) are the new disciplines of getting cited by AI answer engines like ChatGPT, Gemini, Perplexity and Google AI Overviews — where logistics buyers now research vendors before ever clicking a link." },
  { q: "Is traditional SEO dead?", a: "No, but it's no longer enough. We run classic SEO in parallel with GEO/AIO so you win blue links AND become the cited authority in AI-generated answers." },
  { q: "How fast do GEO results show up?", a: "AI engines re-index faster than Google. Most clients see citations in Perplexity within 2–4 weeks and Gemini / AI Overviews within 6–10 weeks." },
];

export const Route = createFileRoute("/services/seo-geo-aio")({
  head: () => ({
    meta: [
      { title: "SEO · GEO · AIO for Logistics — Logiframe" },
      { name: "description", content: "From legacy SEO into the new AI era. We optimize logistics companies for Google, ChatGPT, Gemini, Perplexity and AI Overviews." },
      { property: "og:title", content: "SEO · GEO · AIO for Logistics — Logiframe" },
      { property: "og:description", content: "Win Google rankings AND get cited by ChatGPT, Gemini, Perplexity and AI Overviews." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/services/seo-geo-aio" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/services/seo-geo-aio" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLdFaq(faq)) }],
  }),
  component: () => (
    <MarketingPage
      eyebrow="SEO · GEO · AIO"
      title="From legacy SEO to the new era of AI discovery"
      subtitle="Get found when a manufacturer asks ChatGPT 'who is the most reliable 3PL in Antwerp?' — and when their procurement lead Googles it ten minutes later."
      heroImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1800&q=80"
      intro="Search has split. Buyers now research with AI engines first, then verify with Google. If you're invisible in either, you lose the deal."
      features={[
        { icon: Search, title: "Technical SEO", body: "Core Web Vitals, hreflang, structured data, internal linking and crawl budget — engineered for logistics catalogs." },
        { icon: Brain, title: "GEO — Generative Engine Optimization", body: "Be the cited source inside ChatGPT, Gemini, Perplexity and Claude when shippers ask procurement questions." },
        { icon: Bot, title: "AIO — AI Optimization", body: "Win placement inside Google AI Overviews, Bing Copilot and SGE answer boxes with structured, citable content." },
        { icon: FileSearch, title: "Entity & schema architecture", body: "Custom JSON-LD ProfessionalService, Service, Audience and FAQPage schemas mapped to your niche." },
        { icon: Network, title: "Content clusters", body: "Hub-and-spoke clusters around 3PL, freight broker, trucking and forwarder topics — the LSI Google rewards." },
        { icon: Sparkles, title: "E-E-A-T authorship", body: "Real logistics-expert authors, LinkedIn-verified bios, and citation networks that pass Google's Helpful Content reviews." },
      ]}
      metrics={[
        { label: "Avg. organic lift", value: "+182%" },
        { label: "AI citations / mo", value: "40+" },
        { label: "Top-3 keyword growth", value: "8×" },
        { label: "DA gained (12 mo)", value: "+22" },
      ]}
      faq={faq}
    />
  ),
});
