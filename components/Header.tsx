"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 bg-white text-ink border-b border-edge shadow-[0_1px_8px_rgba(27,33,36,0.05)]">
      {/* Utility bar */}
      <div className="hidden lg:block bg-volt text-white">
        <div className="wrap flex items-center justify-between h-9 text-[0.82rem] text-white/90">
          <span>Udayanagar, Bangalore · {site.hours}</span>
          <span className="flex items-center gap-6">
            <a href={site.phoneHref} className="hover:text-white transition-colors">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
              {site.email}
            </a>
            <a href={site.community} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline underline-offset-4 decoration-white/50 hover:decoration-white">
              WhatsApp community ↗
            </a>
          </span>
        </div>
      </div>

      <div className="wrap flex items-center justify-between h-[68px]">
        <Link href="/" aria-label="MasterVLSI home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-6 text-[0.97rem] font-medium transition-colors hover:text-volt ${
                isActive(item.href) ? "text-volt font-semibold" : "text-ink"
              }`}
            >
              {item.label}
              {isActive(item.href) && <span className="absolute left-0 right-0 bottom-0 h-[3px] rounded-t bg-volt" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/demo" className="btn btn-primary btn-sm hidden sm:inline-flex">
            Book free demo
          </Link>
          <button
            type="button"
            className="xl:hidden w-11 h-11 grid place-items-center rounded-lg border border-edge-2"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block w-5 h-3.5">
              <span className={`absolute left-0 right-0 h-0.5 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 right-0 top-1.5 h-0.5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 right-0 h-0.5 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="xl:hidden fixed inset-x-0 top-[69px] bottom-0 bg-white overflow-y-auto border-t border-edge">
          <nav aria-label="Mobile" className="wrap py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-4 border-b border-edge font-semibold text-lg ${
                  isActive(item.href) ? "text-volt" : ""
                }`}
              >
                {item.label}
                <span className="text-volt">→</span>
              </Link>
            ))}
            <Link href="/demo" onClick={() => setOpen(false)} className="btn btn-primary w-full mt-8">
              Book free demo
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost w-full mt-3">
              Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
