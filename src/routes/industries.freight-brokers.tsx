import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/MarketingPage";
import { Magnet, Network, MessageCircle, BarChart3, Layers, Phone } from "lucide-react";

export const Route = createFileRoute("/industries/freight-brokers")({
  head: () => ({
    meta: [
      { title: "Lead Generation for Freight Brokers — Logiframe" },
      { name: "description", content: "Inbound shipper acquisition for freight brokers. Stop cold-calling. Build a predictable book of contracted shippers and carriers." },
      { property: "og:title", content: "Lead Generation for Freight Brokers — Logiframe" },
      { property: "og:description", content: "Inbound shipper acquisition for freight brokers." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/industries/freight-brokers" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/industries/freight-brokers" }],
  }),
  component: () => (
    <MarketingPage
      eyebrow="Freight Brokers"
      title="Inbound shipper acquisition for freight brokers"
      subtitle="Replace the cold-call grind with a steady inbound stream of contracted shippers, spot freight and carrier partners — engineered for the spread economics of brokerage."
      heroImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=80"
      features={[
        { icon: Magnet, title: "Shipper acquisition funnels", body: "Lane-specific landing pages targeting manufacturers and retailers shipping out of your strongest corridors." },
        { icon: Network, title: "Carrier network growth", body: "Recruit asset-based carriers with high-converting carrier signup funnels." },
        { icon: Layers, title: "Load board halo SEO", body: "Be the first brand a dispatcher Googles after seeing your load on DAT or Truckstop." },
        { icon: MessageCircle, title: "Personalized outbound", body: "Cold email + LinkedIn sequences that don't look or sound like a cold sequence." },
        { icon: BarChart3, title: "Spread-aware reporting", body: "Track CAC against booked margin, not lead volume." },
        { icon: Phone, title: "Booked-call guarantee", body: "We optimize toward booked discovery calls with shipping decision-makers." },
      ]}
    />
  ),
});
