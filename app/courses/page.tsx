import type { Metadata } from "next";
import Link from "next/link";
import Curriculum from "@/components/Curriculum";
import { CtaBand, PageHero, Poster, SectionHead, StatRow } from "@/components/ui";
import { fee, tools, verificationLevels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Complete VLSI Design & Verification Training Program",
  description:
    "Twenty modules from digital design fundamentals to PCIe, USB and CXL verification — Verilog, SystemVerilog, UVM, scripting, ASIC flow and industry projects.",
};

export default function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title={<>Complete VLSI design and verification <span className="text-volt">training program.</span></>}
        lede="One program, twenty modules. You start at number systems and finish with APB and AXI verification environments you built yourself — plus the protocol depth product companies interview for."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/demo" className="btn btn-primary">Book a free demo →</Link>
          <Link href="/courses/protocols" className="btn btn-ghost">Protocols we teach</Link>
        </div>
      </PageHero>

      <section className="on-dark">
        <div className="wrap py-12">
          <StatRow
            stats={[
              { value: "20", label: "Modules" },
              { value: "6 mo", label: "Live cohort" },
              { value: "2", label: "Capstone UVM projects" },
              { value: fee.total, label: "Fee, + GST" },
            ]}
          />
        </div>
      </section>

      <section className="on-light section">
        <div className="wrap">
          <SectionHead
            eyebrow="Curriculum"
            title="Every module, every topic."
            lede="Filter by phase to see how the program builds — foundations first, then the verification core, protocols, flows and industry readiness."
          />
          <Curriculum />
        </div>
      </section>

      <section className="on-dark section">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Tools and environment</p>
            <h2 className="display t-1 mt-5">You graduate on the stack your manager uses.</h2>
            <p className="lede muted mt-6">
              Simulators from all three major EDA vendors, and the everyday environment of a
              verification team: Linux, Git, Makefiles and diff tools.
            </p>
            <h3 className="eyebrow mt-12">Verification levels covered</h3>
            <ul className="flex flex-wrap gap-2 mt-5">
              {verificationLevels.map((l) => (
                <li key={l} className="px-4 py-2.5 border border-edge-2 font-display font-bold" style={{ fontStretch: "108%" }}>
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-edge border border-edge self-start">
            {tools.map((t) => (
              <li key={t.name} className="bg-ink-2 p-5">
                <p className="t-3">{t.name}</p>
                <p className="mono text-[0.7rem] uppercase tracking-[0.04em] text-dim mt-1">{t.vendor}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-mist section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="eyebrow">Program at a glance</p>
            <h2 className="display t-1 mt-5">The whole syllabus on one sheet.</h2>
            <p className="lede muted mt-6">
              The official curriculum poster — handy to save, print or share with a parent or a
              friend who is deciding with you.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <a href="/media/curriculum-poster.jpg" download className="btn btn-primary">Download poster</a>
              <Link href="/fees" className="btn btn-ghost">Fees and terms</Link>
            </div>
          </div>
          <Poster
            src="/media/curriculum-poster.jpg"
            alt="MasterVLSI complete VLSI design and verification training program poster listing all twenty modules"
            caption="Official curriculum poster"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
