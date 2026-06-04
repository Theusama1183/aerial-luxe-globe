import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage, jsonLdFaq } from "@/components/MarketingPage";
import { Gauge, Smartphone, ShieldCheck, Plug, Sparkles, Code2 } from "lucide-react";

const faq = [
  { q: "How long does a redesign take?", a: "Most logistics sites go live in 6–10 weeks. Larger forwarder portals with TMS integrations ship in 12–14 weeks." },
  { q: "Will my legacy SEO rankings survive?", a: "Yes. We migrate every URL with 301 maps, structured-data parity, and Core Web Vitals tuning. Rankings typically improve within 30 days post-launch." },
  { q: "Can you integrate with our TMS or quote tool?", a: "We integrate with CargoWise, McLeod, MercuryGate, Descartes, DAT and Truckstop via secure API endpoints." },
];

export const Route = createFileRoute("/services/website-redesign")({
  head: () => ({
    meta: [
      { title: "Logistics Website Redesign — Logiframe" },
      { name: "description", content: "Replace outdated, slow or broken logistics websites with fast, conversion-engineered platforms built for freight brokers, 3PLs and forwarders." },
      { property: "og:title", content: "Logistics Website Redesign — Logiframe" },
      { property: "og:description", content: "Rebuild legacy logistics websites into modern, conversion-engineered platforms." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/services/website-redesign" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/services/website-redesign" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLdFaq(faq)) }],
  }),
  component: () => (
    <MarketingPage
      eyebrow="Website Redesign"
      title="Transform broken, outdated logistics websites into high-converting digital assets"
      subtitle="Fix slow loads, broken mobile layouts, dead contact forms and zero conversions. Ship a website that closes."
      heroImage="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=80"
      intro="Your website is the first thing a $5M shipper sees. If it loads in 8 seconds and looks like 2012, the deal is over before it starts."
      features={[
        { icon: Gauge, title: "Core Web Vitals tuned", body: "Sub-2.5s LCP, near-zero CLS, INP under 200ms — Google ranks you, buyers stay." },
        { icon: Smartphone, title: "Mobile-first conversion", body: "Dispatchers and brokers live on phones. Every CTA, form and quote tool is rebuilt for thumb." },
        { icon: ShieldCheck, title: "GDPR & enterprise security", body: "HTTPS everywhere, secure form encryption, EU-compliant cookie + privacy posture." },
        { icon: Plug, title: "TMS / quote tool integrations", body: "CargoWise, McLeod, MercuryGate, Descartes — pipe leads straight into your ops stack." },
        { icon: Sparkles, title: "Conversion-engineered UX", body: "Multi-step intake, instant rate calculators, live tracking widgets and trust-stack design." },
        { icon: Code2, title: "Modern stack, no plugins", body: "Built on React + edge rendering. No WordPress plugin sprawl. No nightly downtime." },
      ]}
      sections={[
        {
          heading: "The legacy logistics website problem",
          body: "Most freight, 3PL and forwarder sites were built 6–10 years ago on WordPress with stitched-together plugins. They load slowly, break on mobile, leak leads through dead forms and look nothing like the operational sophistication of the business behind them.",
          bullets: [
            "8+ second mobile load times killing PPC ROI",
            "Generic stock-photo home pages with no proof",
            "Contact forms that don't notify operations",
            "Zero structured data — invisible to AI search",
            "No integration with TMS or pricing tools",
          ],
        },
        {
          heading: "What we ship instead",
          body: "A fast, beautiful, conversion-engineered logistics website that pipes leads straight into your operations system, ranks in Google and gets cited by AI engines.",
          bullets: [
            "Custom design built around your trade lanes",
            "Instant quote / rate calculator tools",
            "Live tracking + customer portal modules",
            "Industry-specific case study layouts",
            "Multilingual subfolder architecture (/nl/, /de/, /pl/)",
          ],
        },
      ]}
      faq={faq}
    />
  ),
});
