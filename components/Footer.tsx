import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/lib/data";

const tracks = [
  ["RTL Design", "/courses"],
  ["Design Verification", "/courses"],
  ["SystemVerilog & UVM", "/courses"],
  ["Protocols", "/courses/protocols"],
  ["Fees & terms", "/fees"],
];

export default function Footer() {
  return (
    <footer className="on-night">
      <div className="wrap py-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo />
          <p className="muted mt-5 max-w-sm">
            {site.tagline}. Training the engineers who build the chips — RTL design and UVM
            verification with real-time industry mentors and a 24/7 lab.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 mono text-[0.78rem]">
            {Object.entries(site.social).map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="text-dim hover:text-volt transition-colors">
                {name} ↗
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="eyebrow">Program</h2>
          <ul className="mt-5 space-y-3">
            {tracks.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="hover:text-volt transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Institute</h2>
          <ul className="mt-5 space-y-3">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-volt transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/demo" className="hover:text-volt transition-colors">
                Free demo
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Visit</h2>
          <address className="not-italic mt-5 muted">
            {site.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
          <ul className="mt-5 space-y-2">
            <li>
              <a href={site.phoneHref} className="hover:text-volt transition-colors">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-volt transition-colors">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="text-volt hover:text-paper transition-colors">
                Open in Google Maps ↗
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-edge">
        <div className="wrap py-6 flex flex-col md:flex-row gap-2 justify-between mono text-[0.72rem] text-dim">
          <span>© {site.year} MasterVLSI. All rights reserved.</span>
          <span>All company names and trademarks belong to their respective owners.</span>
        </div>
      </div>
    </footer>
  );
}
