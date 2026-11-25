import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import { glossary, playlists, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Resources — Free VLSI Videos and Glossary",
  description:
    "Free MasterVLSI YouTube playlists on Verilog, SystemVerilog, UVM and AXI, plus a VLSI glossary of the terms you will meet in interviews.",
};

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Free learning"
        title={<>VLSI on YouTube. <span className="text-volt">Zero excuses.</span></>}
        lede="Videos organised by topic — Verilog basics through UVM and interview prep — from working industry mentors. Start anywhere, work at your own pace."
      >
        <a href={site.social.YouTube} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Subscribe on YouTube ↗
        </a>
      </PageHero>

      <section className="on-light section">
        <div className="wrap">
          <SectionHead eyebrow="Playlists" title="Pick a starting point." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {playlists.map((p) => (
              <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="card flex flex-col group">
                <span className="tag self-start">{p.tag}</span>
                <h3 className="t-3 mt-5">{p.title}</h3>
                <p className="text-slate mt-3">{p.body}</p>
                <p className="mono text-[0.76rem] mt-auto pt-8 flex justify-between text-slate">
                  <span>{p.meta}</span>
                  <span className="text-volt-deep group-hover:translate-x-1 transition-transform">YouTube ↗</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark section">
        <div className="wrap">
          <SectionHead
            eyebrow="Cheatsheet"
            title="VLSI glossary."
            lede="The acronyms that come up in every interview, in one line each."
          />
          <dl className="border-t border-edge">
            {glossary.map(([abbr, full, def]) => (
              <div key={abbr} className="grid gap-1 md:grid-cols-[140px_300px_1fr] md:gap-6 py-5 border-b border-edge">
                <dt className="display text-2xl text-volt">{abbr}</dt>
                <dd className="font-semibold md:pt-1">{full}</dd>
                <dd className="text-dim md:pt-1">{def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand title="Ready for the live cohort?" body="Videos teach you the syntax. Mentors teach you the intent. Sit in on a free demo class." />
    </>
  );
}
