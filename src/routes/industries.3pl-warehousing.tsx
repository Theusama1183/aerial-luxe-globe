import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/MarketingPage";
import { Warehouse, Building2, Truck, Boxes, FileSpreadsheet, Handshake } from "lucide-react";

export const Route = createFileRoute("/industries/3pl-warehousing")({
  head: () => ({
    meta: [
      { title: "Digital Marketing for 3PLs & Warehousing — Logiframe" },
      { name: "description", content: "Fill warehouse capacity and win contract logistics partnerships. Marketing built for 3PLs and warehousing providers." },
      { property: "og:title", content: "Marketing for 3PLs & Warehousing — Logiframe" },
      { property: "og:description", content: "Fill capacity. Win contract logistics. Built for 3PLs." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/industries/3pl-warehousing" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/industries/3pl-warehousing" }],
  }),
  component: () => (
    <MarketingPage
      eyebrow="3PL & Warehousing"
      title="Fill warehouse capacity. Win contract logistics. Keep shippers."
      subtitle="Empty pallet positions cost money every single day. We engineer marketing systems that bring qualified manufacturer, retailer and DTC shippers to your dock."
      heroImage="https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=1800&q=80"
      features={[
        { icon: Warehouse, title: "Capacity-fill campaigns", body: "Targeted ads to shippers in your service radius searching for new 3PL capacity." },
        { icon: Handshake, title: "Contract logistics SEO", body: "Rank for the high-intent terms procurement teams use: 'contract logistics provider [region]'." },
        { icon: Boxes, title: "Vertical-specific landing pages", body: "Dedicated pages for FMCG, e-commerce, automotive, cold-chain, hazmat and pharma shippers." },
        { icon: FileSpreadsheet, title: "WMS-integrated quote tools", body: "Instant rate cards and quote calculators wired into your WMS." },
        { icon: Building2, title: "Account-based outreach", body: "ABM targeting of named manufacturers and retailers in your geo." },
        { icon: Truck, title: "Drayage + cross-dock visibility", body: "Surface port drayage and cross-dock services to forwarders, BCOs and freight brokers." },
      ]}
    />
  ),
});
