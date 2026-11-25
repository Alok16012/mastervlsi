import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero } from "@/components/ui";
import { protocolFamilies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Protocols We Teach — AMBA, PCIe, USB, CXL, HDMI, DisplayPort",
  description:
    "Protocol training at MasterVLSI: AMBA APB/AHB/AXI, UART, SPI, I2C, GPIO, JTAG, PCIe Gen1–Gen7, USB, CXL, HDMI, DisplayPort and DDR.",
};

export default function Protocols() {
  return (
    <>
      <PageHero
        eyebrow="Protocol training"
        title={<>Every protocol on <span className="text-volt">modern silicon.</span></>}
        lede="From the AMBA on-chip fabric to high-speed serial links — we cover the protocols semiconductor companies actually hire for."
      >
        <Link href="/courses" className="btn btn-ghost">← Back to the full curriculum</Link>
      </PageHero>

      {protocolFamilies.map((fam, i) => (
        <section key={fam.family} className={`${i % 2 === 0 ? "on-light" : "on-mist"} section`}>
          <div className="wrap">
            <div className="flex items-baseline justify-between gap-6 border-b border-rule pb-5 mb-10">
              <h2 className="display t-2">{fam.family}</h2>
              <span className="mono text-sm text-volt-deep shrink-0">
                {String(i + 1).padStart(2, "0")} / {String(protocolFamilies.length).padStart(2, "0")}
              </span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fam.items.map((p) => (
                <article key={p.name} className="card">
                  <h3 className="display text-4xl">{p.name}</h3>
                  <p className="text-slate mt-2">{p.line}</p>
                  <ul className="mt-6 pt-5 border-t border-rule space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[0.94rem]">
                        <span className="mt-[0.6em] w-2 h-2 rounded-full bg-volt shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        title="Learn any protocol in depth."
        body="Protocol modules are part of the design and verification program. Sit in on a demo class and see how a protocol session runs."
      />
    </>
  );
}
