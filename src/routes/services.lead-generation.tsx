import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage, jsonLdFaq } from "@/components/MarketingPage";
import { Magnet, Filter, Workflow, MessageCircle, Target, BarChart3 } from "lucide-react";

const faq = [
  { q: "What kind of leads do you generate?", a: "Shipper RFQs, contracted carrier interest, freight broker partnerships, CDL driver applications, 3PL contract logistics inquiries — depending on your offer." },
  { q: "Do you handle outbound as well as inbound?", a: "Yes. We run LinkedIn ABM, sales-enabled email sequences, and intent-data prospecting alongside inbound SEO + ads." },
];

export const Route = createFileRoute("/services/lead-generation")({
  head: () => ({
    meta: [
      { title: "Logistics Lead Generation — Logiframe" },
      { name: "description", content: "Predictable B2B lead pipelines for freight brokers, 3PLs, trucking firms and forwarders. Inbound + outbound + ABM." },
      { property: "og:title", content: "Logistics Lead Generation — Logiframe" },
      { property: "og:description", content: "Predictable shipper, carrier and driver pipelines for logistics companies." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/services/lead-generation" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/services/lead-generation" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLdFaq(faq)) }],
  }),
  component: () => (
    <MarketingPage
      eyebrow="Lead Generation"
      title="Predictable B2B freight, carrier & driver pipelines"
      subtitle="Stop relying on referrals and cold-calling brokers. Engineer a full inbound + outbound + ABM machine that books strategy calls with the right buyer every week."
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
      features={[
        { icon: Magnet, title: "High-intent landing pages", body: "Tightly scoped pages for each service × geography combination — built to convert paid and organic traffic." },
        { icon: Filter, title: "Multi-step intake forms", body: "Qualify shippers, carriers and drivers automatically: lane, equipment, TMS, volume." },
        { icon: Target, title: "LinkedIn ABM", body: "Target named accounts: shipping managers, VPs of supply chain, freight procurement directors." },
        { icon: MessageCircle, title: "Sales-enabled email", body: "Personalized outbound sequences with intent triggers — sent from your CRM, not a spammy box." },
        { icon: Workflow, title: "CRM + TMS pipelines", body: "Leads route into HubSpot, Salesforce, Pipedrive or directly into your TMS via API." },
        { icon: BarChart3, title: "Attribution dashboard", body: "Track booked calls, qualified pipeline and closed revenue down to keyword and campaign." },
      ]}
      sections={[
        {
          heading: "What we measure",
          body: "Vanity metrics are dead. We report on the only things that matter to a logistics operator.",
          bullets: [
            "Booked strategy calls per month",
            "Qualified pipeline value (€ / $)",
            "Cost per lane / cost per driver application",
            "Win rate by source",
            "Payback period vs CAC",
          ],
        },
      ]}
      faq={faq}
    />
  ),
});
