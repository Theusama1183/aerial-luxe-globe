import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/MarketingPage";
import { Globe2, FileSearch, Calculator, ShieldCheck, Plane, Anchor } from "lucide-react";

export const Route = createFileRoute("/industries/freight-forwarders")({
  head: () => ({
    meta: [
      { title: "Web Design & SEO for Freight Forwarders — Logiframe" },
      { name: "description", content: "Modern websites, instant quote tools, customs authority content and international SEO for global freight forwarders." },
      { property: "og:title", content: "Web Design & SEO for Freight Forwarders — Logiframe" },
      { property: "og:description", content: "Modern web + SEO for international freight forwarders." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/industries/freight-forwarders" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/industries/freight-forwarders" }],
  }),
  component: () => (
    <MarketingPage
      eyebrow="Freight Forwarders"
      title="Win international shippers with a modern forwarder platform"
      subtitle="Instant quote engines, live tracking portals, trade-lane SEO and customs authority content — the digital toolkit your forwarder brand has been missing."
      heroImage="https://images.unsplash.com/photo-1577416412292-747c6607f055?auto=format&fit=crop&w=1800&q=80"
      features={[
        { icon: Calculator, title: "Instant rate calculators", body: "Air, ocean and road quote tools wired to your TMS / CargoWise instance." },
        { icon: Globe2, title: "Multilingual trade lane SEO", body: "Dutch, German, Spanish, Italian, Polish, French, Greek, Portuguese — native subfolder architecture." },
        { icon: FileSearch, title: "Customs authority content", body: "Rank as the trusted source on HS codes, post-Brexit clearance, IOSS, and EU customs reform." },
        { icon: ShieldCheck, title: "Compliance trust stack", body: "AEO, ISO 9001, IATA, FIATA badges + structured data signaling trust to AI engines and procurement teams." },
        { icon: Plane, title: "Air cargo + ocean playbooks", body: "Mode-specific landing pages targeting BCOs and procurement managers." },
        { icon: Anchor, title: "Port-city presence", body: "Native-language city pages for every European port we target." },
      ]}
    />
  ),
});
