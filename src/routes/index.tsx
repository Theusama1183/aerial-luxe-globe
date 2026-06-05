import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Reveal, Stagger } from "@/components/Reveal";
import { PlanetScene } from "@/components/PlanetScene";
import { HeroVideoBackground, HeroVideoPreview, VideoModal } from "@/components/HeroMedia";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Play,
  Star,
  Truck,
  Plane,
  Check,
  Sparkles,
  Search,
  Target,
  Rocket,
  LineChart,
  Globe2,
  Warehouse,
  Package,
  Network,
  ChevronDown,
  Mail,
  TrendingUp,
  Zap,
  Database,
  Layers,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Logiframe — Digital Marketing Agency for Logistics & Supply Chain" },
      {
        name: "description",
        content:
          "Logiframe helps logistics, freight, 3PL and supply chain companies generate consistent B2B leads with SEO, high-conversion websites and digital marketing.",
      },
      { property: "og:title", content: "Logiframe — Logistics Marketing Specialists" },
      {
        property: "og:description",
        content:
          "Built exclusively for logistics. Websites, SEO and lead funnels that move freight.",
      },
    ],
  }),
  component: Home,
});

/* -------------------- copy (EN + NL) -------------------- */

type Copy = typeof copyEn;

const copyEn = {
  announce: "Free Logistics SEO Audit — Limited Spots Available",
  claim: "Claim Yours →",
  hero: {
    badge: "Logistics Marketing Specialists",
    title1: "Digital Marketing for",
    title2: "Supply Chain Companies",
    sub: "We help logistics companies generate consistent B2B freight leads using SEO, high-conversion websites and digital marketing.",
    cta1: "Book Strategy Call",
    cta2: "Watch Showreel",
    rating: "4.9 client rating",
    pill1: "Logistics specialists",
    pill2: "Proven growth",
    scroll: "Scroll",
    trusted: "Trusted by Leading Logistics Companies",
  },
  problem: {
    eyebrow: "The Problem",
    title: "Why Most Logistics Companies Struggle Online",
    sub: "The logistics industry is booming, but most companies are leaving millions on the table with ineffective digital marketing.",
    cards: [
      { title: "Outdated Websites", body: "90% of logistics websites fail to convert. They look dated, load slowly, and lack clear CTAs." },
      { title: "No SEO Strategy", body: "Competitors rank for 'freight forwarding services' while you're invisible on Google." },
      { title: "Weak Lead Funnels", body: "No capture forms, no nurture sequences, no way to turn visitors into qualified freight leads." },
    ],
    costEyebrow: "Cost of Inaction",
    costTitle: "Every month you delay is revenue lost to competitors.",
    costItems: [
      { t: "Lost Leads", b: "Every day without SEO is leads going to competitors" },
      { t: "Low Visibility", b: "Page 2 of Google means you don't exist" },
      { t: "Competitors Win", b: "They're investing in digital while you wait" },
    ],
  },
  testimonials: { eyebrow: "Testimonials", title: "What Our Clients Say" },
  whyUs: {
    eyebrow: "Why Us",
    title: "We Specialize Only in Logistics Marketing",
    p1: "Unlike generic agencies, we live and breathe logistics. Our team understands freight terminology, shipping cycles, B2B sales processes, and what decision-makers in supply chain companies actually search for.",
    p2: "This deep industry knowledge means better keywords, better content, better conversions — and ultimately, more qualified freight leads.",
    industries: [
      { title: "Freight Forwarding", body: "International & domestic freight" },
      { title: "Trucking", body: "LTL, FTL, and fleet operators" },
      { title: "3PL Providers", body: "Third-party logistics operators" },
      { title: "Warehousing", body: "Storage & distribution centers" },
      { title: "Supply Chain", body: "End-to-end supply chain companies" },
    ],
  },
  parallax: { eyebrow: "In Motion", title: "Moving freight across every channel" },
  methodology: {
    eyebrow: "Our Methodology",
    title: "Built for Logistics Growth",
    sub: "Our proprietary framework combines deep logistics knowledge with proven digital marketing strategies.",
    items: [
      { title: "Data-First Approach", body: "Every decision backed by logistics data and analytics." },
      { title: "Industry-Specific", body: "We only work with logistics — no generalist guesswork." },
      { title: "Speed to Results", body: "Proven frameworks that deliver leads in weeks, not months." },
    ],
    resultsEyebrow: "Results",
    resultsTitle: "Proven Growth for Logistics Companies",
    results: [
      { value: "3X", label: "Average Lead Increase" },
      { value: "120%", label: "Organic Traffic Growth" },
      { value: "2.5X", label: "Conversion Rate Boost" },
      { value: "50+", label: "Logistics Clients Served" },
    ],
  },
  timeline: {
    eyebrow: "Growth Timeline",
    title: "Your Path to More Freight Leads",
    items: [
      { stage: "Month 1–2", title: "Foundation", body: "Website build, SEO audit, keyword strategy." },
      { stage: "Month 3–4", title: "Traction", body: "Rankings improve, first leads start coming in." },
      { stage: "Month 5–6", title: "Growth", body: "Consistent lead flow, expanding keyword presence." },
      { stage: "Month 7+", title: "Scale", body: "Compounding results, dominant market position." },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Everything You Need to Dominate Online",
    sub: "A full-stack digital marketing system designed specifically for logistics companies.",
    serviceLabel: "SERVICE",
    cta: "Get Started",
    items: [
      { n: "01", title: "High-Conversion Website Design", body: "Custom logistics websites engineered to convert visitors into freight leads. Mobile-first, fast-loading, built with conversion psychology.", bullets: ["Custom UI/UX for logistics", "Lead capture optimization", "Mobile-responsive design", "Fast load speeds"] },
      { n: "02", title: "Logistics SEO", body: "Rank for high-intent keywords like 'freight forwarding services' and '3PL providers' to capture ready-to-buy leads.", bullets: ["Keyword research for logistics", "On-page optimization", "Technical SEO audits", "Local SEO for trucking"] },
      { n: "03", title: "Lead Generation Funnels", body: "Multi-touch funnels that nurture cold traffic into qualified B2B freight leads. From first touch to signed contract.", bullets: ["Landing page design", "Email nurture sequences", "CRM integration", "Lead scoring"] },
      { n: "04", title: "Content Marketing", body: "Authority-building content that positions your company as the go-to expert in your logistics niche.", bullets: ["Industry blog posts", "Case study creation", "Whitepapers & guides", "Social media content"] },
      { n: "05", title: "Paid Advertising", body: "Google Ads and LinkedIn campaigns targeting logistics decision-makers actively searching for your services.", bullets: ["Google Ads management", "LinkedIn B2B targeting", "Retargeting campaigns", "ROI tracking"] },
    ],
  },
  process: {
    eyebrow: "Our Process",
    title: "How We Grow Logistics Companies",
    sub: "A proven 6-step framework that consistently delivers qualified freight leads.",
    items: [
      { n: "01", title: "Audit & Research", body: "Deep-dive into your digital presence, competitors, and market opportunities." },
      { n: "02", title: "Strategy Development", body: "Custom marketing plan with target keywords, content calendar, and funnel architecture." },
      { n: "03", title: "Build Marketing System", body: "Design and build your high-conversion website, landing pages, and lead capture systems." },
      { n: "04", title: "Traffic Generation", body: "Launch SEO campaigns, content marketing, and paid ads to drive qualified logistics traffic." },
      { n: "05", title: "Conversion Optimization", body: "A/B test everything. Optimize forms, CTAs, and user flows to maximize lead generation." },
      { n: "06", title: "Scale Results", body: "Double down on what works. Expand into new keywords, markets, and channels." },
    ],
  },
  awards: {
    eyebrow: "The Award-Winning",
    title: "Logistics-First Digital Marketing Agency",
    adweekTitle: "Fastest Growing Agency",
    adweekBody: "Logiframe was named one of ADWEEK's Fastest Growing Logistics Marketing Agencies — three years in a row.",
    bloomberg: '"A best-in-class logistics marketing agency"',
    bloombergSub: "— Featured on Bloomberg TV",
    mmaTitle: "B2B Agency of the Year",
    mmaBody: "Logiframe won the prestigious SMARTIES X Global Award for category-defining work in freight and supply chain.",
    mmaTag: "Global Winner · 2025",
    leadershipEyebrow: "Category Leadership in Action",
    leadershipTitle: "From Carriers to Global 3PLs",
  },
  longCases: {
    eyebrow: "Case Studies",
    title: "Real Growth Stories",
    sub: "See how we've helped logistics companies transform their digital presence.",
    cta: "Get Results Like This",
    items: [
      {
        vertical: "Freight Forwarding",
        brand: "GlobalFreight Solutions",
        headline: "312% increase in organic traffic in 8 months",
        body: "A mid-size freight forwarder struggling with zero online presence. We rebuilt their website, launched a targeted SEO campaign, and built lead capture funnels that generated 87 qualified leads per month.",
        image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=70",
        stats: [{ v: "+312%", l: "Organic Traffic" }, { v: "87", l: "Qualified Leads/Mo" }, { v: "$1.2M", l: "Revenue Impact" }],
      },
      {
        vertical: "Trucking",
        brand: "MidWest Trucking Co.",
        headline: "From page 5 to #1 for 'trucking services' in their region",
        body: "A regional trucking company with an outdated website. We implemented local SEO, Google Business optimization, and a conversion-focused redesign that brought them to the top of search results.",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=70",
        stats: [{ v: "42 → #1", l: "Keyword Rankings" }, { v: "120+", l: "Monthly Leads" }, { v: "-64%", l: "Cost Per Lead" }],
      },
      {
        vertical: "3PL",
        brand: "ChainLink 3PL",
        headline: "2.5X conversion rate with new lead generation funnels",
        body: "A 3PL provider with plenty of traffic but poor conversion. We redesigned their funnel, added lead scoring, and implemented email nurture sequences that transformed their pipeline.",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=70",
        stats: [{ v: "2.5X", l: "Conversion Rate" }, { v: "+85%", l: "Lead Quality Score" }, { v: "+$3.4M", l: "Sales Pipeline" }],
      },
    ],
  },
  caseStudies: [
    { brand: "NorthFreight", metric: "+182%", label: "Qualified freight leads in 6 months" },
    { brand: "PortLine 3PL", metric: "+74%", label: "Organic traffic from shipper keywords" },
    { brand: "VeloCarrier", metric: "+1,400%", label: "ROI on paid LinkedIn campaigns" },
    { brand: "Cargonex", metric: "+58%", label: "RFQ form conversion uplift" },
    { brand: "Airbound", metric: "+91%", label: "Reduction in cost-per-lead" },
    { brand: "StackRoute", metric: "+46%", label: "Pipeline created in Q1 alone" },
  ],
  stages: {
    title1: "Tailored Growth Strategies,",
    title2: "For Your Business Stage",
    sub: "We don't run a one-size-fits-all playbook. Here's how we work with you at every stage.",
    cta: "Explore Plan",
    items: [
      { tag: "STARTUP", title: "Agile & Fast", body: "For early carriers and 3PLs finding product-market fit. Launch lean and validate channels.", points: ["Website + brand", "Founder-led content", "Demand discovery"] },
      { tag: "MID-SIZE", title: "Scale What Works", body: "For growing freight brands ready to double down on what's actually moving pipeline.", points: ["Performance SEO", "Sales-led ABM", "Conversion engineering"] },
      { tag: "ENTERPRISE", title: "Sustain Global Dominance", body: "For multi-region logistics leaders defending share across regions, lanes and verticals.", points: ["Global SEO ops", "Account-based motion", "Brand authority systems"] },
    ],
  },
  resources: {
    eyebrow: "Resources",
    title: "Free Logistics Marketing Guides",
    sub: "Learn how logistics companies generate more freight leads, improve SEO rankings, and grow their transportation business online.",
    cta: "Read Guide",
    items: [
      { tag: "SEO", read: "8 min read", title: "The Complete Logistics SEO Guide", body: "How logistics companies rank on Google for freight keywords, generate organic leads, and dominate search results." },
      { tag: "Marketing", read: "6 min read", title: "Freight Marketing Strategy Blueprint", body: "A step-by-step strategy used by successful logistics companies to generate consistent B2B leads." },
      { tag: "Growth", read: "5 min read", title: "How Logistics Websites Generate B2B Leads", body: "Website structures and marketing funnels that convert visitors into long-term shipping clients." },
    ],
  },
  whyChoose: {
    eyebrow: "Why Logistics Companies Choose Us",
    title: "Websites & Marketing Built Specifically for Logistics",
    sub: "Most agencies design generic websites. We specialize in logistics, freight, and supply chain — building websites that generate qualified B2B leads.",
    items: [
      { title: "Deep Logistics Industry Understanding", body: "We work exclusively with logistics, freight, and supply chain. We understand how your customers search and how to communicate your value.", tag: "Freight • 3PL • Warehousing • Transportation" },
      { title: "SEO Built for Freight Keywords", body: "Your website is optimized for freight forwarding, warehousing, trucking services, and supply chain solutions.", tag: "High-intent logistics search terms" },
      { title: "Designed to Generate Qualified Leads", body: "Every page is built with conversion psychology — strategic CTAs, trust signals, and lead capture forms.", tag: "More leads, not just more traffic" },
      { title: "Websites That Turn Visitors Into Customers", body: "Proven UX structures from high-growth companies. Clear messaging, strong CTAs, strategic layouts.", tag: "Conversion-focused layouts" },
      { title: "We Speak the Language of Logistics", body: "From freight forwarding to supply chain management, we communicate your services in a way that builds credibility with B2B buyers.", tag: "No generic marketing language" },
      { title: "Track Every Lead & Marketing Result", body: "Analytics and tracking systems so you know exactly where your leads come from and how marketing performs.", tag: "Clear performance insights" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently Asked Questions",
    sub: "Everything you wanted to know about working with a logistics-only marketing partner.",
    items: [
      { q: "How long does logistics SEO take to show results?", a: "Most clients see early ranking movement in 60–90 days and meaningful lead flow by month 4–6. Logistics keywords are competitive but high-intent, so the compounding effect after month 6 is significant." },
      { q: "What does your pricing look like?", a: "Engagements typically start at $4.5K/mo for focused SEO and scale to full growth retainers ($12K–$25K/mo) covering website, SEO, content and paid. Every plan is scoped to your stage." },
      { q: "What kind of results can we expect?", a: "Our average client sees a 3X lift in qualified freight leads and 120% organic traffic growth in the first 12 months. We share real benchmarks during the strategy call." },
      { q: "Do you work with small logistics companies?", a: "Yes. We have a Startup track designed for owner-operators and emerging 3PLs. Focused scope, lean spend, fast launch." },
      { q: "How is Logiframe different from other marketing agencies?", a: "We only work in logistics. We don't take dentists, SaaS or e-commerce. That focus means our playbooks, content and keyword libraries are purpose-built for freight." },
    ],
  },
  contact: {
    eyebrow: "Get Started",
    title: "Ready to Generate More Freight Leads?",
    sub: "Book a free strategy call and discover how we can help your logistics company dominate search results and generate qualified B2B leads consistently.",
    bullets: ["Free 30-minute strategy call", "Custom growth plan for your company", "No obligation, no pressure"],
    formTitle: "Request Strategy Call",
    formSub: "We'll reach out within 24 hours.",
    name: "Full Name",
    namePh: "John Smith",
    email: "Work Email",
    emailPh: "john@company.com",
    company: "Company Name",
    companyPh: "Your Logistics Company",
    phone: "Phone (optional)",
    phonePh: "+1 (555) 000-0000",
    serviceLabel: "Service Interested In",
    serviceSelect: "Select a service...",
    message: "Message (optional)",
    messagePh: "Tell us about your logistics company and goals...",
    submit: "Request Strategy Call",
    formFooter: "No spam. No obligation. Just growth strategies.",
  },
  testimonialsA: [
    { q: "Honestly wasn't sure about this whole digital thing at first. Been running trucks for 30 years the old way. But man, these guys get it. Phone's actually ringing now with real customers, not just brokers lowballing us.", name: "Dave Kowalski", role: "Owner, Kowalski Freight Lines" },
    { q: "We tried two other agencies before this and wasted like $15k. Finally found people who actually know what a 3PL does lol. Our site doesn't look like a generic template anymore and we're getting actual warehouse inquiries.", name: "Jennifer Patel", role: "Operations Manager, Summit 3PL" },
    { q: "First month I thought we made a mistake. Nothing happened. But then month 2-3 things started clicking. Now we're 6 months in and I'm eating my words. Lead quality is way better than the trade shows we used to do.", name: "Marcus Webb", role: "VP Sales, Midwest Distribution" },
    { q: "Finally, an agency that doesn't need me to explain what LTL means or why 'just run Facebook ads' won't work for us. The content they write actually sounds like it's from our industry.", name: "Rachel Nguyen", role: "Marketing Director, Pacific Cargo" },
  ],
  testimonialsB: [
    { q: "Been in this business since '92. Tried the Yellow Pages, cold calling, everything. This internet marketing stuff actually works if you got the right people. Wish I'd done this 5 years ago.", name: "Tom Berkowitz", role: "CEO, Berkowitz Logistics Group" },
    { q: "My husband was against spending money on a redesign. 'Nobody cares about websites' he said. Well, we just landed our biggest client yet and they told us they picked us because our site looked professional.", name: "Angela Morrison", role: "Co-Owner, Morrison & Sons Trucking" },
    { q: "Their proposal wasn't the cheapest. Went with them anyway because they actually asked good questions instead of just promising the moon. Three months later, best decision we made. ROI is there.", name: "Chris Delgado", role: "Founder, Velocity Freight Solutions" },
    { q: "We're in a super niche market — temperature controlled logistics. Most agencies have no clue. These folks took time to understand our world. The leads we get now actually know what reefer freight is.", name: "Karen Lindstrom", role: "BD Director, Nordic Cold Chain" },
  ],
  footer: {
    tagline: "The digital marketing agency built exclusively for logistics, freight forwarding, trucking, 3PL and supply chain companies.",
    corridors: "Freight Corridors",
    viewAll: "View All Service Areas →",
    rights: "All rights reserved.",
    groups: [
      { h: "Services", l: ["Logistics SEO", "Web Design", "Freight Broker Marketing", "3PL Lead Generation", "PPC Management", "Supply Chain SEO"] },
      { h: "Resources", l: ["Blog", "For AI", "Case Studies", "Our Process", "Contact"] },
      { h: "Legal", l: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"] },
    ],
  },
};

const copyNl: Copy = {
  announce: "Gratis Logistieke SEO-audit — Beperkte Plekken Beschikbaar",
  claim: "Claim de Jouwe →",
  hero: {
    badge: "Specialisten in Logistieke Marketing",
    title1: "Digitale Marketing voor",
    title2: "Supply Chain Bedrijven",
    sub: "We helpen logistieke bedrijven aan een constante stroom B2B-vrachtleads met SEO, conversiegerichte websites en digitale marketing.",
    cta1: "Plan een Strategiegesprek",
    cta2: "Bekijk Showreel",
    rating: "4.9 klantbeoordeling",
    pill1: "Logistiek specialisten",
    pill2: "Bewezen groei",
    scroll: "Scroll",
    trusted: "Vertrouwd door Toonaangevende Logistieke Bedrijven",
  },
  problem: {
    eyebrow: "Het Probleem",
    title: "Waarom de Meeste Logistieke Bedrijven Online Worstelen",
    sub: "De logistieke sector groeit hard, maar de meeste bedrijven laten miljoenen liggen door ineffectieve digitale marketing.",
    cards: [
      { title: "Verouderde Websites", body: "90% van de logistieke websites converteert niet. Ze ogen gedateerd, laden traag en missen duidelijke CTA's." },
      { title: "Geen SEO-strategie", body: "Concurrenten ranken op 'expeditiediensten' terwijl jij onzichtbaar bent op Google." },
      { title: "Zwakke Lead Funnels", body: "Geen formulieren, geen nurture-sequenties, geen manier om bezoekers om te zetten in gekwalificeerde vrachtleads." },
    ],
    costEyebrow: "Kosten van Stilstand",
    costTitle: "Elke maand uitstel is omzet die naar de concurrent gaat.",
    costItems: [
      { t: "Verloren Leads", b: "Elke dag zonder SEO zijn leads die naar concurrenten gaan" },
      { t: "Lage Zichtbaarheid", b: "Pagina 2 van Google betekent dat je niet bestaat" },
      { t: "Concurrenten Winnen", b: "Zij investeren in digitaal terwijl jij wacht" },
    ],
  },
  testimonials: { eyebrow: "Klantverhalen", title: "Wat Onze Klanten Zeggen" },
  whyUs: {
    eyebrow: "Waarom Wij",
    title: "Wij Specialiseren Alleen in Logistieke Marketing",
    p1: "Anders dan generieke bureaus leven en ademen wij logistiek. Ons team begrijpt vrachtterminologie, verzendcycli, B2B-verkoopprocessen en waar beslissers in supply chain-bedrijven écht naar zoeken.",
    p2: "Deze diepe sectorkennis levert betere keywords, betere content, betere conversies — en uiteindelijk meer gekwalificeerde vrachtleads.",
    industries: [
      { title: "Expeditie", body: "Internationaal & nationaal vrachtvervoer" },
      { title: "Transport", body: "LTL, FTL en wagenparkbeheerders" },
      { title: "3PL-aanbieders", body: "Third-party logistics operators" },
      { title: "Opslag", body: "Opslag- & distributiecentra" },
      { title: "Supply Chain", body: "End-to-end supply chain bedrijven" },
    ],
  },
  parallax: { eyebrow: "In Beweging", title: "Vracht in beweging op elk kanaal" },
  methodology: {
    eyebrow: "Onze Methodiek",
    title: "Gebouwd voor Logistieke Groei",
    sub: "Ons eigen framework combineert diepe logistieke kennis met bewezen digitale marketingstrategieën.",
    items: [
      { title: "Data-First Aanpak", body: "Elke beslissing onderbouwd met logistieke data en analytics." },
      { title: "Sector-specifiek", body: "We werken alleen met logistiek — geen generalistisch giswerk." },
      { title: "Snelle Resultaten", body: "Bewezen frameworks die leads opleveren in weken, niet maanden." },
    ],
    resultsEyebrow: "Resultaten",
    resultsTitle: "Bewezen Groei voor Logistieke Bedrijven",
    results: [
      { value: "3X", label: "Gemiddelde Toename Leads" },
      { value: "120%", label: "Groei Organisch Verkeer" },
      { value: "2.5X", label: "Boost Conversieratio" },
      { value: "50+", label: "Logistieke Klanten Bediend" },
    ],
  },
  timeline: {
    eyebrow: "Groei Tijdlijn",
    title: "Jouw Pad naar Meer Vrachtleads",
    items: [
      { stage: "Maand 1–2", title: "Fundament", body: "Website bouwen, SEO-audit, keyword-strategie." },
      { stage: "Maand 3–4", title: "Tractie", body: "Rankings stijgen, eerste leads komen binnen." },
      { stage: "Maand 5–6", title: "Groei", body: "Constante stroom leads, groeiende keyword-aanwezigheid." },
      { stage: "Maand 7+", title: "Schaal", body: "Compounding resultaten, dominante marktpositie." },
    ],
  },
  services: {
    eyebrow: "Diensten",
    title: "Alles wat je Nodig Hebt om Online te Domineren",
    sub: "Een full-stack digitaal marketingsysteem speciaal voor logistieke bedrijven.",
    serviceLabel: "DIENST",
    cta: "Start Nu",
    items: [
      { n: "01", title: "Conversiegerichte Webdesign", body: "Maatwerk logistieke websites gebouwd om bezoekers om te zetten in vrachtleads. Mobile-first, snel ladend, gebouwd met conversiepsychologie.", bullets: ["Maatwerk UI/UX voor logistiek", "Lead-capture-optimalisatie", "Mobiel-responsief ontwerp", "Snelle laadtijden"] },
      { n: "02", title: "Logistieke SEO", body: "Rank op high-intent keywords zoals 'expeditiediensten' en '3PL-aanbieders' om koopklare leads binnen te halen.", bullets: ["Keywordonderzoek voor logistiek", "On-page-optimalisatie", "Technische SEO-audits", "Lokale SEO voor transport"] },
      { n: "03", title: "Lead-generatie Funnels", body: "Multi-touch funnels die koud verkeer nurturen tot gekwalificeerde B2B-vrachtleads. Van eerste contact tot getekend contract.", bullets: ["Landingspagina-ontwerp", "E-mail nurture-sequenties", "CRM-integratie", "Lead-scoring"] },
      { n: "04", title: "Contentmarketing", body: "Autoriteit-opbouwende content die jouw bedrijf positioneert als dé expert in jouw logistieke niche.", bullets: ["Branche-blogposts", "Case studies", "Whitepapers & gidsen", "Social media content"] },
      { n: "05", title: "Betaalde Advertenties", body: "Google Ads en LinkedIn-campagnes gericht op logistieke beslissers die actief zoeken naar jouw diensten.", bullets: ["Google Ads-beheer", "LinkedIn B2B-targeting", "Retargeting-campagnes", "ROI-tracking"] },
    ],
  },
  process: {
    eyebrow: "Ons Proces",
    title: "Hoe Wij Logistieke Bedrijven Laten Groeien",
    sub: "Een bewezen 6-staps framework dat consistent gekwalificeerde vrachtleads oplevert.",
    items: [
      { n: "01", title: "Audit & Onderzoek", body: "Diepe duik in jouw digitale aanwezigheid, concurrenten en marktkansen." },
      { n: "02", title: "Strategie-ontwikkeling", body: "Maatwerk marketingplan met target keywords, contentkalender en funnel-architectuur." },
      { n: "03", title: "Marketingsysteem Bouwen", body: "Ontwerp en bouw van je conversiegerichte website, landingspagina's en lead-capture-systemen." },
      { n: "04", title: "Verkeersgeneratie", body: "Start SEO-campagnes, contentmarketing en betaalde ads om gekwalificeerd logistiek verkeer te genereren." },
      { n: "05", title: "Conversie-optimalisatie", body: "A/B-test alles. Optimaliseer formulieren, CTA's en user flows voor maximale leadgeneratie." },
      { n: "06", title: "Resultaten Opschalen", body: "Verdubbel wat werkt. Uitbreiden naar nieuwe keywords, markten en kanalen." },
    ],
  },
  awards: {
    eyebrow: "Het Bekroonde",
    title: "Logistiek-eerste Digitale Marketingbureau",
    adweekTitle: "Snelst Groeiende Bureau",
    adweekBody: "Logiframe werd uitgeroepen tot een van ADWEEK's snelst groeiende logistieke marketingbureaus — drie jaar op rij.",
    bloomberg: '"Een best-in-class logistiek marketingbureau"',
    bloombergSub: "— Genoemd op Bloomberg TV",
    mmaTitle: "B2B Bureau van het Jaar",
    mmaBody: "Logiframe won de prestigieuze SMARTIES X Global Award voor categorie-definiërend werk in vracht en supply chain.",
    mmaTag: "Wereldwijde Winnaar · 2025",
    leadershipEyebrow: "Categorie-leiderschap in Actie",
    leadershipTitle: "Van Vervoerders tot Wereldwijde 3PL's",
  },
  longCases: {
    eyebrow: "Case Studies",
    title: "Echte Groeiverhalen",
    sub: "Bekijk hoe wij logistieke bedrijven hebben geholpen hun digitale aanwezigheid te transformeren.",
    cta: "Krijg Soortgelijke Resultaten",
    items: [
      {
        vertical: "Expeditie",
        brand: "GlobalFreight Solutions",
        headline: "312% toename in organisch verkeer in 8 maanden",
        body: "Een middelgrote expediteur zonder online aanwezigheid. We bouwden hun website opnieuw, lanceerden een gerichte SEO-campagne en bouwden lead-capture-funnels die 87 gekwalificeerde leads per maand opleverden.",
        image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1200&q=70",
        stats: [{ v: "+312%", l: "Organisch Verkeer" }, { v: "87", l: "Gekwalificeerde Leads/mnd" }, { v: "€1,1M", l: "Omzetimpact" }],
      },
      {
        vertical: "Transport",
        brand: "MidWest Trucking Co.",
        headline: "Van pagina 5 naar #1 voor 'transportdiensten' in hun regio",
        body: "Een regionaal transportbedrijf met een verouderde website. We implementeerden lokale SEO, Google Bedrijfsprofiel-optimalisatie en een conversiegerichte redesign die hen naar de top van de zoekresultaten bracht.",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=70",
        stats: [{ v: "42 → #1", l: "Keyword Rankings" }, { v: "120+", l: "Maandelijkse Leads" }, { v: "-64%", l: "Kosten per Lead" }],
      },
      {
        vertical: "3PL",
        brand: "ChainLink 3PL",
        headline: "2,5X conversieratio met nieuwe lead-funnels",
        body: "Een 3PL-aanbieder met genoeg verkeer maar slechte conversie. We herontwierpen de funnel, voegden lead-scoring toe en implementeerden e-mail nurture-sequenties die hun pijplijn transformeerden.",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=70",
        stats: [{ v: "2,5X", l: "Conversieratio" }, { v: "+85%", l: "Leadkwaliteit-score" }, { v: "+€3,1M", l: "Verkoop-pijplijn" }],
      },
    ],
  },
  caseStudies: [
    { brand: "NorthFreight", metric: "+182%", label: "Gekwalificeerde vrachtleads in 6 maanden" },
    { brand: "PortLine 3PL", metric: "+74%", label: "Organisch verkeer uit verlader-keywords" },
    { brand: "VeloCarrier", metric: "+1.400%", label: "ROI op betaalde LinkedIn-campagnes" },
    { brand: "Cargonex", metric: "+58%", label: "RFQ-formulier conversiestijging" },
    { brand: "Airbound", metric: "+91%", label: "Daling in kosten per lead" },
    { brand: "StackRoute", metric: "+46%", label: "Pijplijn gecreëerd in Q1 alleen" },
  ],
  stages: {
    title1: "Op Maat Gemaakte Groeistrategieën,",
    title2: "Voor Jouw Bedrijfsfase",
    sub: "Wij draaien geen one-size-fits-all playbook. Zo werken wij met je samen in elke fase.",
    cta: "Bekijk Plan",
    items: [
      { tag: "STARTUP", title: "Wendbaar & Snel", body: "Voor jonge vervoerders en 3PL's die product-market fit zoeken. Lean lanceren en kanalen valideren.", points: ["Website + merk", "Founder-content", "Vraagonderzoek"] },
      { tag: "MIDDELGROOT", title: "Schaal Wat Werkt", body: "Voor groeiende vrachtmerken die willen verdubbelen op wat pijplijn beweegt.", points: ["Performance SEO", "Sales-gedreven ABM", "Conversie-engineering"] },
      { tag: "ENTERPRISE", title: "Behoud Wereldwijde Dominantie", body: "Voor multi-regio logistieke leiders die marktaandeel verdedigen over regio's, lanes en verticalen.", points: ["Globale SEO-ops", "Account-based motion", "Brand authority systemen"] },
    ],
  },
  resources: {
    eyebrow: "Bronnen",
    title: "Gratis Logistieke Marketinggidsen",
    sub: "Leer hoe logistieke bedrijven meer vrachtleads genereren, SEO-rankings verbeteren en hun transportbedrijf online laten groeien.",
    cta: "Lees Gids",
    items: [
      { tag: "SEO", read: "8 min lezen", title: "De Complete Logistieke SEO-gids", body: "Hoe logistieke bedrijven ranken op Google voor vracht-keywords, organische leads genereren en zoekresultaten domineren." },
      { tag: "Marketing", read: "6 min lezen", title: "Blueprint voor Vrachtmarketing-strategie", body: "Een stappenplan dat succesvolle logistieke bedrijven gebruiken voor constante B2B-leads." },
      { tag: "Groei", read: "5 min lezen", title: "Hoe Logistieke Websites B2B-leads Genereren", body: "Websitestructuren en marketing-funnels die bezoekers omzetten in langetermijn verzendklanten." },
    ],
  },
  whyChoose: {
    eyebrow: "Waarom Logistieke Bedrijven Voor Ons Kiezen",
    title: "Websites & Marketing Specifiek voor Logistiek",
    sub: "De meeste bureaus ontwerpen generieke websites. Wij zijn gespecialiseerd in logistiek, vracht en supply chain — en bouwen websites die gekwalificeerde B2B-leads genereren.",
    items: [
      { title: "Diepgaande Logistieke Sectorkennis", body: "We werken exclusief met logistiek, vracht en supply chain. We begrijpen hoe je klanten zoeken en hoe je waarde overbrengt.", tag: "Vracht • 3PL • Opslag • Transport" },
      { title: "SEO Gebouwd voor Vracht-keywords", body: "Je website is geoptimaliseerd voor expeditie, opslag, transportdiensten en supply chain-oplossingen.", tag: "High-intent logistieke zoektermen" },
      { title: "Ontworpen om Gekwalificeerde Leads te Genereren", body: "Elke pagina is gebouwd met conversiepsychologie — strategische CTA's, vertrouwenssignalen en lead-formulieren.", tag: "Meer leads, niet alleen meer verkeer" },
      { title: "Websites die Bezoekers in Klanten Veranderen", body: "Bewezen UX-structuren van snel groeiende bedrijven. Heldere boodschap, sterke CTA's, strategische layouts.", tag: "Conversiegerichte layouts" },
      { title: "Wij Spreken de Taal van Logistiek", body: "Van expeditie tot supply chain management, we communiceren je diensten op een manier die geloofwaardig is voor B2B-kopers.", tag: "Geen generieke marketingtaal" },
      { title: "Volg Elke Lead & Marketing-resultaat", body: "Analytics en tracking zodat je precies weet waar leads vandaan komen en hoe marketing presteert.", tag: "Duidelijke performance-inzichten" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde Vragen",
    sub: "Alles wat je wilde weten over werken met een logistiek-specifieke marketingpartner.",
    items: [
      { q: "Hoe lang duurt logistieke SEO voordat het resultaat geeft?", a: "De meeste klanten zien eerste ranking-bewegingen in 60–90 dagen en betekenisvolle leadflow tegen maand 4–6. Logistieke keywords zijn competitief maar high-intent, dus het compounding-effect na maand 6 is significant." },
      { q: "Hoe ziet jullie prijsstelling eruit?", a: "Opdrachten starten meestal bij €4,2K/mnd voor gerichte SEO en schalen tot volledige groei-retainers (€11K–€23K/mnd) inclusief website, SEO, content en paid. Elk plan is afgestemd op jouw fase." },
      { q: "Welke resultaten kunnen we verwachten?", a: "Onze gemiddelde klant ziet een 3X stijging in gekwalificeerde vrachtleads en 120% groei in organisch verkeer in de eerste 12 maanden. We delen echte benchmarks tijdens het strategiegesprek." },
      { q: "Werken jullie met kleine logistieke bedrijven?", a: "Ja. We hebben een Startup-track voor owner-operators en opkomende 3PL's. Gerichte scope, lean budget, snelle lancering." },
      { q: "Hoe verschilt Logiframe van andere marketingbureaus?", a: "Wij werken alleen in logistiek. Geen tandartsen, SaaS of e-commerce. Die focus betekent dat onze playbooks, content en keyword-bibliotheken speciaal voor vracht zijn gebouwd." },
    ],
  },
  contact: {
    eyebrow: "Start Nu",
    title: "Klaar om Meer Vrachtleads te Genereren?",
    sub: "Plan een gratis strategiegesprek en ontdek hoe wij jouw logistieke bedrijf kunnen helpen zoekresultaten te domineren en consistent gekwalificeerde B2B-leads te genereren.",
    bullets: ["Gratis strategiegesprek van 30 minuten", "Maatwerk groeiplan voor jouw bedrijf", "Geen verplichting, geen druk"],
    formTitle: "Vraag een Strategiegesprek Aan",
    formSub: "We nemen binnen 24 uur contact op.",
    name: "Volledige Naam",
    namePh: "Jan de Vries",
    email: "Werk-e-mail",
    emailPh: "jan@bedrijf.com",
    company: "Bedrijfsnaam",
    companyPh: "Jouw Logistieke Bedrijf",
    phone: "Telefoon (optioneel)",
    phonePh: "+31 (0)20 000 0000",
    serviceLabel: "Geïnteresseerde Dienst",
    serviceSelect: "Selecteer een dienst...",
    message: "Bericht (optioneel)",
    messagePh: "Vertel ons over je logistieke bedrijf en doelen...",
    submit: "Vraag Strategiegesprek Aan",
    formFooter: "Geen spam. Geen verplichting. Alleen groeistrategieën.",
  },
  testimonialsA: [
    { q: "Eerlijk gezegd niet zeker over dit hele digitale gebeuren in het begin. Run al 30 jaar trucks op de oude manier. Maar man, deze mensen snappen het. De telefoon rinkelt nu écht met echte klanten, niet alleen brokers die ons lowballen.", name: "Dave Kowalski", role: "Eigenaar, Kowalski Freight Lines" },
    { q: "We hebben twee andere bureaus geprobeerd en zo'n €14k verspild. Eindelijk mensen gevonden die weten wat een 3PL doet. Onze site oogt niet meer als een generiek template en we krijgen echte opslag-aanvragen.", name: "Jennifer Patel", role: "Operations Manager, Summit 3PL" },
    { q: "Eerste maand dacht ik dat we een fout hadden gemaakt. Niks gebeurde. Maar maand 2–3 begon het te klikken. Nu 6 maanden verder en ik moet mijn woorden inslikken. Leadkwaliteit is veel beter dan de beurzen die we vroeger deden.", name: "Marcus Webb", role: "VP Sales, Midwest Distribution" },
    { q: "Eindelijk een bureau dat niet hoeft te vragen wat LTL betekent of waarom 'gewoon Facebook-ads' niet voor ons werkt. De content die ze schrijven klinkt écht uit onze branche.", name: "Rachel Nguyen", role: "Marketing Director, Pacific Cargo" },
  ],
  testimonialsB: [
    { q: "Zit al sinds '92 in dit vak. Gouden Gids, koud bellen, alles geprobeerd. Dit internetmarketing-spul werkt echt als je de juiste mensen hebt. Had het 5 jaar eerder moeten doen.", name: "Tom Berkowitz", role: "CEO, Berkowitz Logistics Group" },
    { q: "Mijn man was tegen geld uitgeven aan een redesign. 'Niemand geeft om websites' zei hij. Nou, we wonnen net onze grootste klant ooit en ze zeiden dat ze ons kozen omdat onze site er professioneel uitzag.", name: "Angela Morrison", role: "Mede-eigenaar, Morrison & Sons Trucking" },
    { q: "Hun voorstel was niet het goedkoopste. We kozen toch voor hen omdat ze goede vragen stelden in plaats van de hemel te beloven. Drie maanden later, beste beslissing ooit. ROI is er.", name: "Chris Delgado", role: "Oprichter, Velocity Freight Solutions" },
    { q: "We zitten in een super nichemarkt — temperatuurgestuurde logistiek. De meeste bureaus snappen er niks van. Deze mensen namen de tijd om onze wereld te begrijpen. De leads die we nu krijgen weten echt wat reefer-vracht is.", name: "Karen Lindstrom", role: "BD Director, Nordic Cold Chain" },
  ],
  footer: {
    tagline: "Het digitale marketingbureau exclusief voor logistiek, expeditie, transport, 3PL en supply chain-bedrijven.",
    corridors: "Vrachtcorridors",
    viewAll: "Bekijk Alle Servicegebieden →",
    rights: "Alle rechten voorbehouden.",
    groups: [
      { h: "Diensten", l: ["Logistieke SEO", "Webdesign", "Marketing voor Vrachtmakelaars", "3PL Lead-generatie", "PPC-beheer", "Supply Chain SEO"] },
      { h: "Bronnen", l: ["Blog", "Voor AI", "Case Studies", "Ons Proces", "Contact"] },
      { h: "Juridisch", l: ["Privacybeleid", "Algemene Voorwaarden", "Cookiebeleid", "Disclaimer"] },
    ],
  },
};

const partnerLogos = [
  "FREIGHTMAX", "GLOBALSHIP", "TRUCKPRO", "WARENET", "CHAINLINK",
  "LOGIFLOW", "CARGOWISE", "SHIPFAST", "MAERSK", "DHL", "FEDEX", "UPS",
];

const problemIcons = [Layers, Search, Target];
const industryIcons = [Globe2, Truck, Network, Warehouse, Package];
const methodologyIcons = [Database, Target, Zap];

function useCopy(): Copy {
  const { i18n } = useTranslation();
  return i18n.language === "nl" ? copyNl : copyEn;
}

/* -------------------- page -------------------- */

function Home() {
  const c = useCopy();
  const [videoOpen, setVideoOpen] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-white text-[#111111]">
      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />

      {/* announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#111] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-2 text-xs">
          <Sparkles className="h-3.5 w-3.5" />
          <span className="opacity-80">{c.announce}</span>
          <a href="#contact" className="font-medium underline-offset-4 hover:underline">
            {c.claim}
          </a>
        </div>
      </div>
      <div className="h-9" />

      <Nav />

      {/* HERO */}
      <section ref={heroRef} className="section-dark relative min-h-screen overflow-hidden">
        <HeroVideoBackground />
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.15fr_1fr]"
        >
          <div className="max-w-2xl">
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur">
                <span className="relative h-1.5 w-1.5 rounded-full bg-white pulse-ring" />
                {c.hero.badge}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[80px]">
                {c.hero.title1}
                <span className="block text-white/60">{c.hero.title2}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-lg text-white/70">{c.hero.sub}</p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#111] transition hover:bg-white/90">
                  {c.hero.cta1}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#111]">
                    <Play className="h-3.5 w-3.5 translate-x-px fill-current" />
                  </span>
                  {c.hero.cta2}
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-white text-white" />
                    ))}
                  </div>
                  <span className="uppercase tracking-widest">{c.hero.rating}</span>
                </div>
                <span className="uppercase tracking-widest">{c.hero.pill1}</span>
                <span className="uppercase tracking-widest">{c.hero.pill2}</span>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <HeroVideoPreview onOpen={() => setVideoOpen(true)} />
          </div>
        </motion.div>

        <div className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/40 md:flex">
          <span>{c.hero.scroll}</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="h-6 w-px bg-white/30" />
        </div>

        <div className="relative z-10 border-y border-white/10 bg-black/40 py-7 backdrop-blur">
          <p className="mb-5 text-center text-[10px] uppercase tracking-[0.35em] text-white/40">
            {c.hero.trusted}
          </p>
          <div className="overflow-hidden">
            <div className="marquee flex w-max gap-16 px-8">
              {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                <span key={i} className="font-display whitespace-nowrap text-xl font-semibold tracking-widest text-white/40 transition hover:text-white">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="absolute inset-0 grid-bg-light opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">{c.problem.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              {c.problem.title}
            </h2>
            <p className="mt-5 max-w-2xl text-[#555]">{c.problem.sub}</p>
          </Reveal>

          <Stagger className="mt-16 grid gap-5 md:grid-cols-3">
            {c.problem.cards.map((p, i) => {
              const Icon = problemIcons[i];
              return (
                <Reveal key={p.title}>
                  <div className="group h-full rounded-2xl border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:border-black/40 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.2)]">
                    <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-[#111] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                    <p className="mt-3 text-sm text-[#555]">{p.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </Stagger>

          <Reveal>
            <div className="mt-16 rounded-3xl border border-black/10 bg-[#111] p-10 text-white sm:p-14">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{c.problem.costEyebrow}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{c.problem.costTitle}</h3>
                </div>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {c.problem.costItems.map((x) => (
                  <div key={x.t} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="font-display text-lg font-semibold">{x.t}</div>
                    <p className="mt-2 text-sm text-white/60">{x.b}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-white/50">{c.testimonials.eyebrow}</p>
            <h2 className="mx-auto mt-3 max-w-3xl text-center font-display text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
              {c.testimonials.title}
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-14 space-y-6">
          <MarqueeRow items={c.testimonialsA} />
          <MarqueeRow items={c.testimonialsB} reverse />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />
      </section>

      {/* WHY US */}
      <section id="industries" className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">{c.whyUs.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {c.whyUs.title}
            </h2>
            <p className="mt-5 max-w-lg text-[#555]">{c.whyUs.p1}</p>
            <p className="mt-4 max-w-lg text-[#555]">{c.whyUs.p2}</p>
          </Reveal>
          <Stagger className="grid grid-cols-2 gap-4">
            {c.whyUs.industries.map((i, idx) => {
              const Icon = industryIcons[idx];
              return (
                <Reveal key={i.title}>
                  <div className="group h-full rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-black/40">
                    <Icon className="h-6 w-6" />
                    <div className="mt-5 font-display text-lg font-semibold">{i.title}</div>
                    <p className="mt-1.5 text-sm text-[#666]">{i.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </Stagger>
        </div>
      </section>

      <ParallaxStrip />

      {/* METHODOLOGY + RESULTS */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{c.methodology.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {c.methodology.title}
            </h2>
            <p className="mt-5 max-w-2xl text-white/60">{c.methodology.sub}</p>
          </Reveal>

          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {c.methodology.items.map((m, idx) => {
              const Icon = methodologyIcons[idx];
              return (
                <Reveal key={m.title}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-white/40">
                    <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-white text-[#111]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-white">{m.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{m.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </Stagger>

          <div className="mt-24">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{c.methodology.resultsEyebrow}</p>
              <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
                {c.methodology.resultsTitle}
              </h2>
            </Reveal>
            <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {c.methodology.results.map((r) => (
                <Reveal key={r.label}>
                  <div className="h-full bg-[#111] p-8">
                    <div className="font-display text-5xl font-semibold text-white">{r.value}</div>
                    <div className="mt-3 text-sm text-white/60">{r.label}</div>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">{c.timeline.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {c.timeline.title}
            </h2>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-black/10 md:block" />
            <Stagger className="grid gap-8 md:grid-cols-4">
              {c.timeline.items.map((t, i) => (
                <Reveal key={t.stage}>
                  <div className="relative">
                    <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-black/10 bg-white font-display font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-6 text-xs uppercase tracking-[0.25em] text-[#666]">{t.stage}</div>
                    <div className="mt-2 font-display text-2xl font-semibold">{t.title}</div>
                    <p className="mt-2 text-sm text-[#555]">{t.body}</p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{c.services.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {c.services.title}
            </h2>
            <p className="mt-5 max-w-2xl text-white/60">{c.services.sub}</p>
          </Reveal>

          <div className="mt-16 space-y-6">
            {c.services.items.map((s) => (
              <Reveal key={s.n}>
                <div className="group grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition hover:border-white/40 hover:bg-white/[0.05] md:grid-cols-[1fr_2fr] md:p-12">
                  <div>
                    <div className="font-mono text-xs tracking-[0.25em] text-white/40">{c.services.serviceLabel} {s.n}</div>
                    <h3 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">{s.title}</h3>
                    <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#111] transition hover:bg-white/90">
                      {c.services.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div>
                    <p className="text-white/70">{s.body}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-white/80">
                          <Check className="h-4 w-4 text-white/60" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">{c.process.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {c.process.title}
            </h2>
            <p className="mt-5 max-w-2xl text-[#555]">{c.process.sub}</p>
          </Reveal>
          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
            {c.process.items.map((p) => (
              <Reveal key={p.n}>
                <div className="group relative h-full bg-white p-8 transition hover:bg-[#111] hover:text-white">
                  <div className="font-display text-5xl font-semibold text-black/15 transition group-hover:text-white/30">{p.n}</div>
                  <div className="mt-4 font-display text-2xl font-semibold">{p.title}</div>
                  <p className="mt-3 text-sm text-[#555] transition group-hover:text-white/70">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* AWARDS */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <PlanetScene />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-center text-sm uppercase tracking-[0.3em] text-white/50">{c.awards.eyebrow}</p>
            <h2 className="mx-auto mt-3 max-w-4xl text-center font-display text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              {c.awards.title}
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-4">
            <Reveal className="lg:col-span-1">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-7 backdrop-blur-xl transition hover:border-white/30">
                <div className="mb-5 inline-flex h-10 items-center rounded-md bg-white px-3 font-display text-sm font-bold tracking-tight text-black">ADWEEK</div>
                <h3 className="font-display text-2xl font-semibold text-white">{c.awards.adweekTitle}</h3>
                <p className="mt-3 text-sm text-white/60">{c.awards.adweekBody}</p>
                <div className="mt-8 text-xs uppercase tracking-widest text-white/40 transition group-hover:text-white">2022 · 2023 · 2024</div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-2">
              <div className="group relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-white/10 bg-black">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,#2a2a2a,#000)]" />
                  <div className="absolute inset-0 opacity-40 grid-bg" />
                  <motion.div initial={{ x: "-20%" }} animate={{ x: "120%" }} transition={{ duration: 14, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 -translate-y-1/2">
                    <Truck className="h-16 w-16 text-white/30" strokeWidth={1} />
                  </motion.div>
                  <motion.div initial={{ x: "120%" }} animate={{ x: "-20%" }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute top-1/3">
                    <Plane className="h-12 w-12 text-white/20" strokeWidth={1} />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="relative flex h-full min-h-[340px] flex-col items-center justify-center p-10 text-center">
                  <button className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-white text-[#111] transition hover:scale-110">
                    <Play className="h-7 w-7 translate-x-0.5 fill-current" />
                  </button>
                  <p className="font-display text-xl font-medium text-white sm:text-2xl">{c.awards.bloomberg}</p>
                  <p className="mt-2 text-sm uppercase tracking-widest text-white/50">{c.awards.bloombergSub}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="lg:col-span-1">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-7 backdrop-blur-xl transition hover:border-white/30">
                <div className="mb-5 inline-flex flex-col rounded-md bg-white px-3 py-2 font-display text-black">
                  <span className="text-[10px] font-bold leading-none tracking-widest">MMA</span>
                  <span className="text-sm font-extrabold leading-none tracking-tight">SMARTIES</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">{c.awards.mmaTitle}</h3>
                <p className="mt-3 text-sm text-white/60">{c.awards.mmaBody}</p>
                <div className="mt-8 text-xs uppercase tracking-widest text-white/40 transition group-hover:text-white">{c.awards.mmaTag}</div>
              </div>
            </Reveal>
          </div>

          <div id="cases" className="mt-32">
            <Reveal>
              <p className="text-center text-sm uppercase tracking-[0.3em] text-white/50">{c.awards.leadershipEyebrow}</p>
              <h2 className="mx-auto mt-3 max-w-4xl text-center font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {c.awards.leadershipTitle}
              </h2>
            </Reveal>

            <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {c.caseStudies.map((cs) => (
                <Reveal key={cs.brand}>
                  <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-xl transition hover:border-white/40 hover:bg-black/70">
                    <div className="flex items-start justify-between">
                      <span className="font-display text-sm tracking-wide text-white/60">{cs.brand}</span>
                      <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                    </div>
                    <div className="mt-10 font-display text-5xl font-semibold text-white">{cs.metric}</div>
                    <p className="mt-3 text-sm text-white/60">{cs.label}</p>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* LONG CASES */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">{c.longCases.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {c.longCases.title}
            </h2>
            <p className="mt-5 max-w-2xl text-[#555]">{c.longCases.sub}</p>
          </Reveal>

          <div className="mt-16 space-y-8">
            {c.longCases.items.map((cs, idx) => (
              <Reveal key={cs.brand}>
                <div className={`group grid gap-10 overflow-hidden rounded-3xl border border-black/10 bg-white p-8 transition hover:border-black/40 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] md:grid-cols-[1fr_1.1fr] md:p-12 ${idx % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl md:[direction:ltr]">
                    <motion.img
                      src={cs.image}
                      alt={cs.brand}
                      loading="lazy"
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full min-h-[280px] w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#111]">
                      {cs.vertical}
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                      <span className="font-display text-lg font-semibold">{cs.brand}</span>
                      <ArrowUpRight className="h-5 w-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="md:[direction:ltr]">
                    <h3 className="font-display text-2xl font-semibold leading-tight sm:text-3xl">{cs.headline}</h3>
                    <p className="mt-4 text-[#555]">{cs.body}</p>
                    <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-black/10">
                      {cs.stats.map((s) => (
                        <div key={s.l} className="bg-white p-5">
                          <div className="font-display text-2xl font-semibold sm:text-3xl">{s.v}</div>
                          <div className="mt-2 text-[11px] uppercase tracking-widest text-[#666]">{s.l}</div>
                        </div>
                      ))}
                    </div>
                    <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#222]">
                      {c.longCases.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 -z-0 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-1/2 -z-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-10 backdrop-blur-2xl sm:p-16">
              <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
              <div className="relative text-center">
                <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  {c.stages.title1}
                  <span className="block text-white/60">{c.stages.title2}</span>
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-white/60">{c.stages.sub}</p>
              </div>
              <Stagger className="relative mt-14 grid gap-5 md:grid-cols-3">
                {c.stages.items.map((s) => (
                  <Reveal key={s.tag}>
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-7 backdrop-blur transition hover:border-white/40 hover:bg-black/80">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-white/40">{s.tag}</span>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-white">{s.title}</h3>
                      <p className="mt-3 text-sm text-white/60">{s.body}</p>
                      <ul className="mt-6 space-y-2 text-sm text-white/70">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-white/70" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 overflow-hidden">
                        <a href="#contact" className="inline-flex translate-y-12 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#111] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                          {c.stages.cta} <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </Stagger>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">{c.resources.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {c.resources.title}
            </h2>
            <p className="mt-5 max-w-2xl text-[#555]">{c.resources.sub}</p>
          </Reveal>
          <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
            {c.resources.items.map((r) => (
              <Reveal key={r.title}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:border-black/40">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#666]">
                    <span className="rounded-full border border-black/15 px-2.5 py-1 font-medium">{r.tag}</span>
                    <span>{r.read}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug">{r.title}</h3>
                  <p className="mt-3 text-sm text-[#555]">{r.body}</p>
                  <a href="#" className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                    {c.resources.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{c.whyChoose.eyebrow}</p>
            <h2 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {c.whyChoose.title}
            </h2>
            <p className="mt-5 max-w-2xl text-white/60">{c.whyChoose.sub}</p>
          </Reveal>

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {c.whyChoose.items.map((w) => (
              <Reveal key={w.title}>
                <div className="group h-full bg-[#111] p-8 transition hover:bg-[#181818]">
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10 text-white">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{w.title}</h3>
                      <p className="mt-2 text-sm text-white/65">{w.body}</p>
                      <div className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/40">{w.tag}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-white py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#666]">{c.faq.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {c.faq.title}
            </h2>
            <p className="mt-5 max-w-md text-[#555]">{c.faq.sub}</p>
            <TrendingUp className="mt-10 h-12 w-12 text-[#111]" strokeWidth={1.2} />
          </Reveal>
          <div className="space-y-3">
            {c.faq.items.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section-dark relative overflow-hidden py-28">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">{c.contact.eyebrow}</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {c.contact.title}
            </h2>
            <p className="mt-5 max-w-md text-white/60">{c.contact.sub}</p>
            <ul className="mt-8 space-y-3 text-sm text-white/80">
              {c.contact.bullets.map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <Check className="h-4 w-4" /> {x}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex items-center gap-3 text-xs text-white/50">
              <Mail className="h-4 w-4" /><span>hello@logiframe.com</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">
              <div className="font-display text-xl font-semibold text-white">{c.contact.formTitle}</div>
              <p className="mt-1 text-sm text-white/50">{c.contact.formSub}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label={c.contact.name} placeholder={c.contact.namePh} />
                <Field label={c.contact.email} placeholder={c.contact.emailPh} type="email" />
                <Field label={c.contact.company} placeholder={c.contact.companyPh} />
                <Field label={c.contact.phone} placeholder={c.contact.phonePh} />
              </div>
              <div className="mt-4">
                <label className="text-xs uppercase tracking-[0.2em] text-white/50">{c.contact.serviceLabel}</label>
                <select className="mt-2 w-full appearance-none rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-white">
                  <option>{c.contact.serviceSelect}</option>
                  {c.services.items.map((s) => (
                    <option key={s.n}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="mt-4">
                <label className="text-xs uppercase tracking-[0.2em] text-white/50">{c.contact.message}</label>
                <textarea rows={4} placeholder={c.contact.messagePh} className="mt-2 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white" />
              </div>
              <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#111] transition hover:bg-white/90">
                {c.contact.submit} <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-4 text-center text-xs text-white/40">{c.contact.formFooter}</p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section-dark border-t border-white/10 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="font-display text-lg font-semibold text-white">LOGIFRAME</div>
            <p className="mt-4 max-w-xs text-sm text-white/60">{c.footer.tagline}</p>
            <div className="mt-6">
              <div className="text-xs uppercase tracking-[0.25em] text-white/40">{c.footer.corridors}</div>
              <ul className="mt-3 grid grid-cols-2 gap-1 text-sm text-white/60">
                {["Laredo, TX", "El Paso, TX", "McAllen, TX", "Brownsville, TX", "Odessa, TX"].map((ct) => (
                  <li key={ct}><a href="#" className="hover:text-white">{ct}</a></li>
                ))}
              </ul>
              <a href="#" className="mt-3 inline-flex text-xs uppercase tracking-widest text-white/50 hover:text-white">{c.footer.viewAll}</a>
            </div>
          </div>
          {c.footer.groups.map((g) => (
            <div key={g.h}>
              <div className="font-display text-sm font-semibold text-white">{g.h}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {g.l.map((i) => (
                  <li key={i}><a href="#" className="hover:text-white">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-6 text-xs text-white/40">
          © 2026 Logiframe. {c.footer.rights}
        </div>
      </footer>
    </div>
  );
}

/* -------------------- sub components -------------------- */

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: { q: string; name: string; role: string }[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div className={`flex w-max gap-5 ${reverse ? "marquee-reverse" : "marquee-slow"}`}>
        {[...items, ...items].map((t, i) => (
          <div key={i} className="w-[380px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
            <Rocket className="h-4 w-4 text-white/30" />
            <p className="mt-4 text-sm leading-relaxed text-white/80">"{t.q}"</p>
            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="font-display text-sm font-semibold text-white">{t.name}</div>
              <div className="text-xs text-white/50">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:border-black/30">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold sm:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-sm leading-relaxed text-[#555]">{a}</div>
      </motion.div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-white/50">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-white/15 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-white"
      />
    </div>
  );
}

function ParallaxStrip() {
  const c = useCopy();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const imgs = [
    "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1568138084810-d471a36c0a26?auto=format&fit=crop&w=900&q=70",
    "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=900&q=70",
  ];
  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0a0a0a] py-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
      <div className="mb-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">{c.parallax.eyebrow}</p>
        <h3 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
          {c.parallax.title}
        </h3>
      </div>
      <motion.div style={{ x: x1 }} className="flex gap-5 px-5">
        {imgs.slice(0, 4).concat(imgs.slice(0, 4)).map((src, i) => (
          <div key={`a${i}`} className="relative h-56 w-[28rem] shrink-0 overflow-hidden rounded-2xl">
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="mt-5 flex gap-5 px-5">
        {imgs.slice(4).concat(imgs.slice(4)).map((src, i) => (
          <div key={`b${i}`} className="relative h-56 w-[28rem] shrink-0 overflow-hidden rounded-2xl">
            <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}

void LineChart;
