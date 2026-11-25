import Link from "next/link";
import type { ReactNode } from "react";
import { companies, faqs as defaultFaqs, site, waLink } from "@/lib/data";

export function SectionHead({
  eyebrow,
  title,
  lede,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center mb-10 lg:mb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display t-1 mt-4 max-w-3xl">{title}</h2>
      {lede && <p className="lede muted mt-4">{lede}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="on-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="wrap relative pt-14 pb-14 lg:pt-20 lg:pb-20">
        <p className="eyebrow !bg-white">{eyebrow}</p>
        <h1 className="display t-hero mt-5 max-w-4xl">{title}</h1>
        <p className="lede muted mt-5">{lede}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

const tints = ["bg-[#fff3e4]", "bg-[#ffeef0]", "bg-[#e4f6fd]", "bg-[#ecebff]"];

export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
      {stats.map((s, i) => (
        <div key={s.label} className={`${tints[i % 4]} rounded-2xl px-5 py-6 lg:px-7 lg:py-8 flex flex-col-reverse text-center text-[#1b2124]`}>
          <dt className="text-[0.95rem] text-[#3d3d3d]">{s.label}</dt>
          <dd className="display text-[clamp(1.7rem,3vw,2.5rem)] mb-1">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Marquee() {
  const row = [...companies.slice(0, 34)];
  return (
    <div className="marquee overflow-hidden border-y border-edge bg-white py-4" aria-label="Companies where MasterVLSI alumni work">
      <div className="marquee-track">
        {[0, 1].map((k) => (
          <ul key={k} className="flex items-center shrink-0" aria-hidden={k === 1}>
            {row.map((c) => (
              <li key={c} className="px-6 font-semibold text-[1.05rem] text-[#3d3d3d] whitespace-nowrap flex items-center gap-12">
                {c}
                <span className="w-1.5 h-1.5 rounded-full bg-volt" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function Faq({ items = defaultFaqs }: { items?: { q: string; a: string }[] }) {
  return (
    <div className="faq border-t border-rule">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Ready to tape out your career?",
  body = "Book a complimentary demo class. See how we teach, meet the mentors and tour the lab — all in 60 minutes.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-white py-10 lg:py-16"><div className="wrap"><div className="rounded-3xl bg-gradient-to-br from-[#5a4bda] to-[#7a5af8] text-white px-6 lg:px-14">
      <div className="py-12 lg:py-16 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <h2 className="display t-1">{title}</h2>
          <p className="lede mt-4 text-white/90">{body}</p>
        </div>
        <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
          <Link href="/demo" className="btn btn-dark">
            Book free demo →
          </Link>
          <a
            href={waLink("Hi MasterVLSI, I'd like to talk to a counsellor about the VLSI course.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-onvolt"
          >
            Talk to a counsellor
          </a>
        </div>
      </div>
    </div></div></section>
  );
}

export function Poster({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="border hairline rounded-2xl overflow-hidden bg-white">
      <a href={src} target="_blank" rel="noopener noreferrer" className="block bg-paper">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
      </a>
      <figcaption className="text-[0.85rem] muted px-4 py-3 border-t hairline flex justify-between gap-4">
        <span>{caption}</span>
        <a href={src} target="_blank" rel="noopener noreferrer" className="accent shrink-0">
          Open full size ↗
        </a>
      </figcaption>
    </figure>
  );
}

export const tel = (n: string) => `tel:+91${n}`;
export const fmtPhone = (n: string) => `${n.slice(0, 5)} ${n.slice(5)}`;
export { site };
