import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { PageHero, SectionHead } from "@/components/ui";
import { engagement, services, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Corporate — VLSI Design & Verification Services",
  description:
    "MasterVLSI partners with semiconductor companies and fabless startups on RTL design, UVM verification and protocol engagements.",
};

export default function Corporate() {
  return (
    <>
      <PageHero
        eyebrow="For companies"
        title={<>Silicon engineering, <span className="text-volt">on demand.</span></>}
        lede="Beyond training, MasterVLSI partners with semiconductor companies and fabless startups on VLSI design and verification engagements — with deliverables you can drop into your repository and ship."
      >
        <a href="#talk" className="btn btn-primary">Start a conversation →</a>
      </PageHero>

      <section className="on-light section">
        <div className="wrap">
          <SectionHead eyebrow="Capabilities" title="What we take on." />
          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((s, i) => (
              <article key={s.title} className="card">
                <span className="mono text-sm text-volt-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display t-2 mt-5">{s.title}</h3>
                <p className="mono text-[0.78rem] text-slate mt-3">{s.line}</p>
                <p className="text-slate mt-5 pt-5 border-t border-rule">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark section">
        <div className="wrap">
          <SectionHead
            eyebrow="How we work"
            title="Predictable delivery, silicon-grade rigour."
          />
          <ol className="cells grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {engagement.map((e, i) => (
              <li key={e.title} className="bg-ink p-7">
                <span className="mono text-sm text-volt">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-3 mt-4">{e.title}</h3>
                <p className="text-dim mt-3">{e.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="talk" className="on-dark-2 section scroll-mt-28">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Have a silicon project?</p>
            <h2 className="display t-1 mt-5">Let&apos;s talk.</h2>
            <p className="lede muted mt-6">
              NDA-friendly, milestone-based engagement. Tell us what you are building and we will
              respond within a business day.
            </p>
            <ul className="mt-8 space-y-2">
              <li><a href={`mailto:${site.email}`} className="text-volt hover:text-paper transition-colors">{site.email}</a></li>
              <li><a href={site.phoneHref} className="hover:text-volt transition-colors">{site.phone}</a></li>
            </ul>
          </div>
          <EnquiryForm intent="corporate" />
        </div>
      </section>
    </>
  );
}
