import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHead, StatRow } from "@/components/ui";
import { comparison, method, pillars } from "@/lib/data";

export const metadata: Metadata = {
  title: "About MasterVLSI",
  description:
    "MasterVLSI trains VLSI design and verification engineers in Bangalore with a lab-first, mentor-led, outcome-tied method.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>We build the engineers who <span className="text-volt">build the chips.</span></>}
        lede="MasterVLSI began as a small mentor circle in Bengaluru. We obsess over one outcome: getting you into a real VLSI role at a real company, in record time."
      />

      <section className="on-dark">
        <div className="wrap py-12">
          <StatRow
            stats={[
              { value: "12+", label: "Years of training" },
              { value: "5000+", label: "Engineers trained" },
              { value: "20", label: "Program modules" },
              { value: "60+", label: "Hiring companies" },
            ]}
          />
        </div>
      </section>

      <section className="on-light section">
        <div className="wrap">
          <div className="cells grid gap-4 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-paper p-8 lg:p-10">
                <span className="mono text-sm text-volt-deep">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="display t-2 mt-5">{p.title}</h2>
                <p className="text-slate mt-5 text-[1.05rem]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark section">
        <div className="wrap">
          <SectionHead
            eyebrow="Methodology"
            title="How a MasterVLSI cohort actually runs."
            lede="We don't believe in tutorial-style learning. Every concept is taught against a real artefact you build — a UART, a pipelined adder, an AXI verification environment, a UVM testbench. You finish with a portfolio, not just a certificate."
          />
          <div className="cells grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {method.map((m, i) => (
              <div key={m.title} className="bg-ink p-7">
                <span className="mono text-sm text-volt">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-3 mt-4">{m.title}</h3>
                <p className="text-dim mt-3">{m.body}</p>
              </div>
            ))}
          </div>

          <div className="cells grid gap-4 md:grid-cols-3 mt-6">
            {[
              ["Lab-first", "Every concept lands in a real Verilog/SV file before a single slide."],
              ["Mentor-led", "1-on-1 reviews with engineers who work on silicon for a living."],
              ["Outcome-tied", "We measure ourselves by your offer letter, not by hours taught."],
            ].map(([t, b]) => (
              <div key={t} className="bg-ink-2 p-7">
                <h3 className="display text-3xl text-volt">{t}</h3>
                <p className="mt-3">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-mist section">
        <div className="wrap">
          <SectionHead eyebrow="Honest comparison" title="MasterVLSI and a typical bootcamp." />
          <div className="overflow-x-auto">
            <table className="data-table min-w-[620px]">
              <thead>
                <tr>
                  <th scope="col" className="w-1/3"><span className="sr-only">Criterion</span></th>
                  <th scope="col" className="text-volt-deep">MasterVLSI</th>
                  <th scope="col">Typical bootcamp</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([k, a, b]) => (
                  <tr key={k}>
                    <th scope="row" className="!border-b !border-rule !font-sans !text-[0.95rem] !normal-case !tracking-normal !font-semibold py-4">{k}</th>
                    <td className="font-semibold">{a}</td>
                    <td className="text-slate">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
