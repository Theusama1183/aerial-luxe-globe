import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage, jsonLdFaq } from "@/components/MarketingPage";
import { Target, LineChart, Linkedin, Youtube, Search, RefreshCcw } from "lucide-react";

const faq = [
  { q: "Which platforms do you run?", a: "Google Search & PMax, LinkedIn Ads, Microsoft Ads, YouTube and Meta retargeting. We pick the stack that matches your buyer." },
  { q: "What's a typical monthly ad spend?", a: "Most logistics PPC programs run €5–25k / month in ad spend. We're transparent on margins and never lock you into long contracts." },
];

export const Route = createFileRoute("/services/ppc-ads")({
  head: () => ({
    meta: [
      { title: "Logistics PPC Ads (Google + LinkedIn) — Logiframe" },
      { name: "description", content: "Performance PPC for 3PLs, freight brokers, trucking firms and forwarders. Google, LinkedIn ABM, YouTube and Meta — built for high-LTV B2B logistics buyers." },
      { property: "og:title", content: "Logistics PPC Ads — Logiframe" },
      { property: "og:description", content: "High-intent Google & LinkedIn ads for logistics B2B buyers." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/services/ppc-ads" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/services/ppc-ads" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLdFaq(faq)) }],
  }),
  component: () => (
    <MarketingPage
      eyebrow="PPC Ads"
      title="Performance PPC built for high-LTV logistics buyers"
      subtitle="Google Search, LinkedIn ABM, YouTube and Meta retargeting — tuned for the seven-figure shipping contracts and asset-based carrier deals that actually move your P&L."
      heroImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1800&q=80"
      features={[
        { icon: Search, title: "Google Search & PMax", body: "Capture in-market shippers and procurement leads at the moment of intent." },
        { icon: Linkedin, title: "LinkedIn ABM", body: "Run ads only to your top-100 target accounts — VP Supply Chain, Director of Logistics, Head of Procurement." },
        { icon: Youtube, title: "YouTube prospecting", body: "Brand + offer videos served to logistics executives between operational research videos." },
        { icon: Target, title: "Conversion modeling", body: "Server-side conversions, GA4 + offline import — feed the algorithm real revenue, not form fills." },
        { icon: LineChart, title: "Margin-aware bidding", body: "Bid strategies built around contract LTV, not first-click leads." },
        { icon: RefreshCcw, title: "Always-on optimization", body: "Weekly review, monthly creative refresh, quarterly strategy reset." },
      ]}
      faq={faq}
    />
  ),
});
