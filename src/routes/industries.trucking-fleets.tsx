import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/MarketingPage";
import { Truck, Users, MapPin, BadgeCheck, FileText, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/industries/trucking-fleets")({
  head: () => ({
    meta: [
      { title: "Marketing & Driver Recruitment for Trucking Firms — Logiframe" },
      { name: "description", content: "CDL and Class A driver recruitment funnels plus fleet asset visibility marketing for trucking firms and carrier operators." },
      { property: "og:title", content: "Marketing for Trucking & Carrier Fleets — Logiframe" },
      { property: "og:description", content: "Driver recruitment + asset visibility for trucking fleets." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/industries/trucking-fleets" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/industries/trucking-fleets" }],
  }),
  component: () => (
    <MarketingPage
      eyebrow="Trucking & Fleets"
      title="Recruit drivers. Keep trucks loaded. Build a real fleet brand."
      subtitle="Driver shortages, empty miles and brand invisibility are the three taxes on every fleet. We rebuild your digital presence to attack all three."
      heroImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1800&q=80"
      features={[
        { icon: Users, title: "Driver recruitment funnels", body: "Geo-targeted Facebook + TikTok + Indeed campaigns into 60-second mobile application flows." },
        { icon: MapPin, title: "Lane-specific shipper SEO", body: "Rank locally for the shipping lanes your trucks already run." },
        { icon: Truck, title: "Asset visibility marketing", body: "Show 3PLs, forwarders and brokers that your equipment is available and ready." },
        { icon: BadgeCheck, title: "Carrier brand identity", body: "Modern fleet brand systems — wraps, web, social — that recruit drivers and shippers in the same breath." },
        { icon: FileText, title: "Owner-operator retention", body: "Retention content + portals that reduce churn and protect lifetime value." },
        { icon: TrendingUp, title: "Performance dashboards", body: "Daily driver-application volume, cost-per-hire, and shipper-lead reporting." },
      ]}
    />
  ),
});
