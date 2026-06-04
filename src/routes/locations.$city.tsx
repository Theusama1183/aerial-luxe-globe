import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTABand, PageShell } from "@/components/PageShell";
import { Reveal, Stagger } from "@/components/Reveal";
import { CITIES, getCity } from "@/data/cities";
import { ArrowRight, MapPin, Anchor, Warehouse, Truck, Ship, Building2 } from "lucide-react";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const city = getCity(params.city);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.city;
    if (!c) return { meta: [{ title: "City not found" }] };
    const url = `https://aerial-luxe-globe.lovable.app/locations/${c.slug}`;
    return {
      meta: [
        { title: `${c.name} Logistics Marketing Agency — Logiframe` },
        {
          name: "description",
          content: `Digital marketing agency for ${c.name}, ${c.country} logistics, 3PL, freight broker, trucking and forwarder companies. ${c.hook}`,
        },
        { property: "og:title", content: `${c.name} Logistics Marketing — Logiframe` },
        { property: "og:description", content: c.hook },
        { property: "og:image", content: c.image },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `Logiframe — ${c.name} Logistics Marketing`,
            description: c.hook,
            areaServed: { "@type": "City", name: c.name, addressCountry: c.country },
            url,
            image: c.image,
          }),
        },
      ],
    };
  },
  component: CityPage,
});

function CityPage() {
  const { city } = Route.useLoaderData();
  const others = CITIES.filter((c) => c.slug !== city.slug).slice(0, 6);

  return (
    <PageShell>
      <Nav />

      <section className="relative overflow-hidden bg-[#0a0a0a] pt-40 pb-28 text-white">
        <div className="absolute inset-0 opacity-40">
          <img src={city.image} alt={city.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
            <MapPin className="h-3 w-3" /> {city.country} · {city.tier}
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            The Logistics & Supply Chain Digital Agency in {city.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            No generalists. We build high-converting websites, TMS integrations and lead generation funnels exclusively for {city.name}'s freight brokers, 3PLs, carriers and forwarders.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#111] hover:bg-white/90">
              Schedule a Supply Chain Marketing Audit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/case-studies" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10">
              See European Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-black/50">The local landscape</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Solving supply chain marketing challenges in the Port of {city.name}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-black/70">{city.hook}</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/60">
              We work directly with {city.audience}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f6f6f6] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-xs uppercase tracking-widest text-black/50">Trade lanes & local realities</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {city.trade.map((t: string) => (
              <div key={t} className="rounded-2xl border border-black/10 bg-white p-6 text-center">
                <Anchor className="mx-auto h-5 w-5 text-[#111]" />
                <div className="mt-3 font-medium">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Niche-specific solutions for {city.name}</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { icon: Building2, title: "Freight Brokers", body: `Shipper acquisition + load board visibility for ${city.name}-based brokers.` },
              { icon: Warehouse, title: "3PLs & Warehousing", body: `Capacity-fill campaigns targeting manufacturers and retailers shipping through ${city.name}.` },
              { icon: Truck, title: "Trucking & Fleets", body: `Driver recruitment funnels and asset visibility for fleets running ${city.name} lanes.` },
              { icon: Ship, title: "Freight Forwarders", body: `Digital customer portals, rate calculators and customs authority content for ${city.name} forwarders.` },
            ].map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="rounded-2xl border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">
                  <Icon className="h-6 w-6 text-[#111]" />
                  <h3 className="mt-4 font-display text-xl font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-black/65">{b.body}</p>
                </div>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">High-intent keywords we target for {city.name}</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {city.keywords.map((k: string) => (
              <span key={k} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm">{k}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f6f6] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">Other European ports we serve</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((c) => (
              <Link key={c.slug} to="/locations/$city" params={{ city: c.slug }} className="rounded-xl border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md">
                <div className="text-xs uppercase tracking-widest text-black/50">{c.country}</div>
                <div className="mt-1 font-display text-lg font-semibold">{c.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
      <Footer />
    </PageShell>
  );
}

// Lazy import for the Building2 icon used above
import { Building2 } from "lucide-react";
