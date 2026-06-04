import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { PageHero, CTABand, PageShell } from "./PageShell";
import { Reveal, Stagger } from "./Reveal";

export interface ContentSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface FeatureCard {
  icon?: LucideIcon;
  title: string;
  body: string;
}

export interface MarketingPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  intro?: string;
  sections?: ContentSection[];
  features?: FeatureCard[];
  metrics?: { label: string; value: string }[];
  faq?: { q: string; a: string }[];
}

export function MarketingPage({
  eyebrow,
  title,
  subtitle,
  heroImage,
  intro,
  sections,
  features,
  metrics,
  faq,
}: MarketingPageProps) {
  return (
    <PageShell>
      <Nav />
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} image={heroImage} />

      {intro && (
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <Reveal>
              <p className="text-2xl font-light leading-relaxed text-[#111] md:text-3xl">{intro}</p>
            </Reveal>
          </div>
        </section>
      )}

      {metrics && metrics.length > 0 && (
        <section className="border-y border-black/10 bg-[#f6f6f6] py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-4">
            {metrics.map((m) => (
              <Reveal key={m.label}>
                <div className="text-center">
                  <div className="font-display text-5xl font-semibold tracking-tight">{m.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-widest text-black/50">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {features && features.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="group rounded-2xl border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    {Icon && (
                      <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-[#111] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                    <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-black/65">{f.body}</p>
                  </div>
                );
              })}
            </Stagger>
          </div>
        </section>
      )}

      {sections?.map((s, idx) => (
        <section
          key={s.heading}
          className={idx % 2 === 0 ? "bg-white py-24" : "bg-[#0a0a0a] py-24 text-white"}
        >
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">{s.heading}</h2>
              <p className={`mt-6 max-w-3xl text-lg leading-relaxed ${idx % 2 === 0 ? "text-black/70" : "text-white/70"}`}>
                {s.body}
              </p>
              {s.bullets && (
                <ul className="mt-8 grid gap-3 md:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${idx % 2 === 0 ? "text-[#111]" : "text-white"}`} />
                      <span className={idx % 2 === 0 ? "text-black/75" : "text-white/75"}>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </section>
      ))}

      {faq && faq.length > 0 && (
        <section className="bg-[#f6f6f6] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Frequently asked questions
              </h2>
            </Reveal>
            <div className="mt-12 space-y-4">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-black/10 bg-white p-6 open:shadow-md"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-base font-medium">
                    {item.q}
                    <ArrowRight className="h-4 w-4 transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-black/70">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
      <Footer />
    </PageShell>
  );
}

export function jsonLdFaq(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
