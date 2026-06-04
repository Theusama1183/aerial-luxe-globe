import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "@/components/MarketingPage";
import { Plug, Database, Truck, Boxes, ScanLine, FileCode2 } from "lucide-react";

const stacks = [
  { name: "CargoWise", category: "TMS / Forwarder OS" },
  { name: "McLeod", category: "Broker TMS" },
  { name: "MercuryGate", category: "Multi-mode TMS" },
  { name: "Descartes", category: "Customs & Visibility" },
  { name: "DAT", category: "Load Board" },
  { name: "Truckstop", category: "Load Board" },
  { name: "Manhattan WMS", category: "Warehouse" },
  { name: "SAP TM", category: "Enterprise TMS" },
  { name: "Oracle OTM", category: "Enterprise TMS" },
  { name: "HubSpot", category: "CRM" },
  { name: "Salesforce", category: "CRM" },
  { name: "Project44", category: "Visibility" },
];

export const Route = createFileRoute("/tech-integrations")({
  head: () => ({
    meta: [
      { title: "Logistics Tech & TMS Integrations — Logiframe" },
      { name: "description", content: "We integrate marketing websites with CargoWise, McLeod, MercuryGate, Descartes, DAT, Truckstop, SAP TM, HubSpot, Salesforce and more." },
      { property: "og:title", content: "Logistics Tech & TMS Integrations — Logiframe" },
      { property: "og:description", content: "Marketing platforms wired into your TMS, WMS and CRM stack." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/tech-integrations" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/tech-integrations" }],
  }),
  component: TechIntegrations,
});

function TechIntegrations() {
  return (
    <>
      <MarketingPage
        eyebrow="Tech Integrations"
        title="Marketing platforms wired into your TMS, WMS and CRM"
        subtitle="We build marketing engines that pass leads, quotes and shipper data seamlessly through APIs into the operational systems your team already runs."
        heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80"
        features={[
          { icon: Plug, title: "API-first integrations", body: "REST and GraphQL endpoints, signed webhooks, retry/queue patterns." },
          { icon: Database, title: "TMS connectivity", body: "CargoWise, McLeod, MercuryGate, Descartes, SAP TM, Oracle OTM." },
          { icon: Truck, title: "Load board sync", body: "DAT, Truckstop and 123Loadboard for inbound and outbound matching." },
          { icon: Boxes, title: "WMS pipelines", body: "Manhattan, Blue Yonder, SAP EWM and Körber WMS integration." },
          { icon: ScanLine, title: "Visibility platforms", body: "Project44, FourKites, Shippeo, Transporeon — surface ETAs on your site." },
          { icon: FileCode2, title: "Custom middleware", body: "We build secure middleware layers when off-the-shelf integration isn't enough." },
        ]}
        sections={[
          {
            heading: "The stack we already speak fluently",
            body: "Below is a slice of the tools we have already wired into client marketing platforms.",
            bullets: stacks.map((s) => `${s.name} — ${s.category}`),
          },
        ]}
      />
    </>
  );
}
