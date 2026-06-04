import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero, CTABand, PageShell } from "@/components/PageShell";
import { Stagger } from "@/components/Reveal";
import { CITIES } from "@/data/cities";
import { ArrowRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "European Port Cities We Serve — Logiframe" },
      { name: "description", content: "Logistics marketing across Europe's 15 most strategic port cities — Rotterdam, Antwerp, Hamburg, Valencia, Gdańsk, Felixstowe and more." },
      { property: "og:title", content: "Locations — Logiframe" },
      { property: "og:description", content: "Logistics marketing across Europe's top 15 port cities." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/locations" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/locations" }],
  }),
  component: LocationsHub,
});

function LocationsHub() {
  const tiers = ["Mega Hub", "Mediterranean Gateway", "Specialized", "Transshipment"] as const;
  return (
    <PageShell>
      <Nav />
      <PageHero
        eyebrow="Locations"
        title="Logistics marketing across Europe's strategic port cities"
        subtitle="Native-language pages, hreflang architecture, and local trade-lane content for the 15 ports that move European freight."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          {tiers.map((tier) => (
            <div key={tier} className="mb-16 last:mb-0">
              <div className="mb-8 flex items-end justify-between">
                <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{tier}</h2>
                <span className="text-xs uppercase tracking-widest text-black/40">
                  {CITIES.filter((c) => c.tier === tier).length} cities
                </span>
              </div>
              <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {CITIES.filter((c) => c.tier === tier).map((c) => (
                  <Link
                    key={c.slug}
                    to="/locations/$city"
                    params={{ city: c.slug }}
                    className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-black/50">
                        <MapPin className="h-3 w-3" /> {c.country}
                      </div>
                      <h3 className="mt-2 font-display text-xl font-semibold">{c.name}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-black/65">{c.hook}</p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#111]">
                        Explore <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
      <Footer />
    </PageShell>
  );
}
