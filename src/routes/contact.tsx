import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero, PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Speak with a Supply Chain Strategist — Logiframe" },
      { name: "description", content: "Book a strategy call with a logistics marketing specialist. Answer a few questions about your TMS, lanes and goals — we'll send a custom growth plan." },
      { property: "og:title", content: "Contact — Logiframe" },
      { property: "og:description", content: "Book a strategy call with a logistics marketing specialist." },
      { property: "og:url", content: "https://aerial-luxe-globe.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://aerial-luxe-globe.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <Nav />
      <PageHero
        eyebrow="Contact"
        title="Speak with a supply chain strategist"
        subtitle="Tell us about your fleet, your lanes, and the TMS you're running. We'll send back a custom plan within 48 hours."
      />
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-tight">Direct lines</h2>
              <p className="mt-4 text-black/70">
                Prefer to skip the form? Reach a strategist directly. We answer every message within one business day.
              </p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center gap-3"><Mail className="h-4 w-4" /><span>hello@logiframe.com</span></li>
                <li className="flex items-center gap-3"><Phone className="h-4 w-4" /><span>+31 (0) 10 808 1234</span></li>
                <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /><span>Wilhelminakade 173, Rotterdam, NL</span></li>
              </ul>
              <div className="mt-10 rounded-2xl border border-black/10 bg-[#f6f6f6] p-6 text-sm text-black/70">
                <strong className="text-[#111]">No obligation.</strong> We don't run discovery calls as disguised sales pitches. You'll leave the call with a written plan whether you hire us or not.
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <form
              className="rounded-3xl border border-black/10 bg-white p-8 shadow-xl"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks. A strategist will reach out within 24 hours.");
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" required />
                <Field label="Corporate email" type="email" required />
                <Field label="Company" required />
                <Field label="Website URL" type="url" />
              </div>
              <div className="mt-4">
                <label className="text-xs font-medium uppercase tracking-widest text-black/60">Business type</label>
                <select required className="mt-2 w-full rounded-lg border border-black/15 bg-white px-3 py-3 text-sm">
                  <option value="">Select your business type</option>
                  <option>3PL / Warehousing</option>
                  <option>Freight Broker</option>
                  <option>Trucking / Carrier Fleet</option>
                  <option>Freight Forwarder</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="text-xs font-medium uppercase tracking-widest text-black/60">Primary TMS / software</label>
                <input className="mt-2 w-full rounded-lg border border-black/15 bg-white px-3 py-3 text-sm" placeholder="CargoWise, McLeod, MercuryGate..." />
              </div>
              <div className="mt-4">
                <label className="text-xs font-medium uppercase tracking-widest text-black/60">What outcome do you want?</label>
                <textarea rows={4} className="mt-2 w-full rounded-lg border border-black/15 bg-white px-3 py-3 text-sm" placeholder="More shippers, more drivers, faster website, AI visibility..." />
              </div>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#111] px-6 py-4 text-sm font-medium text-white hover:bg-[#222]">
                <Send className="h-4 w-4" /> Request Strategy Call
              </button>
              <p className="mt-3 text-center text-xs text-black/50">We respect your data. GDPR-compliant. No spam.</p>
            </form>
          </Reveal>
        </div>
      </section>
      <Footer />
    </PageShell>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-widest text-black/60">{label}{required && " *"}</span>
      <input type={type} required={required} className="mt-2 w-full rounded-lg border border-black/15 bg-white px-3 py-3 text-sm" />
    </label>
  );
}
