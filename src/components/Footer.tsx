import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-white font-bold text-[#111]">L</div>
            <span className="font-display text-lg font-semibold tracking-tight">LOGIFRAME</span>
          </div>
          <p className="mt-4 max-w-xs text-sm">
            The digital marketing agency built exclusively for logistics, freight forwarding, trucking, 3PL and supply
            chain companies.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">Services</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/website-redesign" className="hover:text-white">Website Redesign</Link></li>
            <li><Link to="/services/seo-geo-aio" className="hover:text-white">SEO · GEO · AIO</Link></li>
            <li><Link to="/services/lead-generation" className="hover:text-white">Lead Generation</Link></li>
            <li><Link to="/services/ppc-ads" className="hover:text-white">PPC Ads</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">Industries</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/industries/3pl-warehousing" className="hover:text-white">3PL & Warehousing</Link></li>
            <li><Link to="/industries/freight-brokers" className="hover:text-white">Freight Brokers</Link></li>
            <li><Link to="/industries/trucking-fleets" className="hover:text-white">Trucking & Fleets</Link></li>
            <li><Link to="/industries/freight-forwarders" className="hover:text-white">Freight Forwarders</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
            <li><Link to="/tech-integrations" className="hover:text-white">Tech Integrations</Link></li>
            <li><Link to="/locations" className="hover:text-white">Locations</Link></li>
            <li><Link to="/blog" className="hover:text-white">Insights</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/40">
        © {year} Logiframe. All rights reserved.
      </div>
    </footer>
  );
}
