import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/MarketingPage";
import { Warehouse, Building2, Truck, Ship } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Who We Serve — Logistics Niches | Logiframe" },
      { name: "description", content: "Logiframe builds marketing engines exclusively for 3PLs, freight brokers, trucking fleets and international freight forwarders." },
      { property: "og:title", content: "Who We Serve — Logiframe" },
      { property: "og:description", content: "Marketing for 3PLs, freight brokers, trucking and forwarders." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/industries" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/industries" }],
  }),
  component: () => (
    <MarketingPage
      eyebrow="Industries"
      title="We only serve supply chain operators"
      subtitle="A freight broker chasing spot loads doesn't need the same marketing as an asset-based carrier recruiting drivers. We've built dedicated playbooks for each."
      heroImage="https://images.unsplash.com/photo-1581922814484-0b48460b7010?auto=format&fit=crop&w=1800&q=80"
      features={[
        { icon: Warehouse, title: "3PLs & Warehousing", body: "Fill capacity with contract logistics shippers and long-term manufacturer partners." },
        { icon: Building2, title: "Freight Brokers", body: "Replace cold calling with inbound shipper acquisition and load board visibility." },
        { icon: Truck, title: "Trucking & Fleets", body: "CDL/Class A driver recruitment funnels and asset utilization marketing." },
        { icon: Ship, title: "Freight Forwarders", body: "International trade visibility, customs authority and digital quote tools." },
      ]}
    />
  ),
});
