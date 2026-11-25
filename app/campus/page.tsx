import type { Metadata } from "next";
import { CtaBand, PageHero, Poster, SectionHead, StatRow, fmtPhone, tel } from "@/components/ui";
import { connectivity, neighbours, officeContacts, pgs, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Campus, Connectivity & PG Accommodation",
  description:
    "MasterVLSI campus in Udayanagar, Bangalore: nearest railway, metro and bus stops, nearby VLSI companies and PG accommodation with contact numbers.",
};

const transit = [
  { title: "Railway stations", rows: connectivity.rail },
  { title: "Metro stations", rows: connectivity.metro },
  { title: "Bus stops", rows: connectivity.bus },
];

export default function Campus() {
  return (
    <>
      <PageHero
        eyebrow="Campus"
        title={<>Perfectly placed in Bengaluru&apos;s <span className="text-volt">silicon belt.</span></>}
        lede="Udayanagar, opposite Vinayaka Temple, near the Tin-Factory bus stop. Walk to the bus in 100 m, the railway station in 450 m and the metro in 500 m."
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get directions ↗</a>
          <a href="#pg" className="btn btn-ghost">PG accommodation</a>
        </div>
      </PageHero>

      <section className="on-dark">
        <div className="wrap py-12">
          <StatRow
            stats={[
              { value: "100 m", label: "Tin Factory bus stop" },
              { value: "450 m", label: "Krishnarajapuram railway" },
              { value: "500 m", label: "Benniganahalli metro" },
              { value: "24/7", label: "Lab access" },
            ]}
          />
        </div>
      </section>

      {/* Connectivity */}
      <section className="on-light section">
        <div className="wrap">
          <SectionHead
            eyebrow="Nearby connectivity"
            title="Excellent connectivity. Every destination within easy reach."
            lede="Approximate road distances from the MasterVLSI building."
          />
          <div className="grid gap-10 lg:grid-cols-3">
            {transit.map((t) => (
              <div key={t.title}>
                <h3 className="t-3 pb-4 border-b border-rule">{t.title}</h3>
                <ul>
                  {t.rows.map(([name, dist]) => (
                    <li key={name} className="flex justify-between gap-6 py-3.5 border-b border-rule">
                      <span>{name}</span>
                      <span className="mono text-volt-deep whitespace-nowrap">{dist}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2 mt-16">
            <div className="border border-rule min-h-[360px]">
              <iframe
                title="Map showing the MasterVLSI institute in Udayanagar, Bangalore"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[360px] block"
              />
            </div>
            <Poster
              src="/media/connectivity.jpg"
              alt="Map of railway stations, metro stations and bus stops near the MasterVLSI building"
              caption="Connectivity map"
            />
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="on-dark section">
        <div className="wrap">
          <SectionHead
            eyebrow="Silicon neighbours"
            title="VLSI companies in the same corridor."
            lede="East Bengaluru is where much of India's chip design happens. Product companies, EDA vendors and design-services firms all have offices within commuting distance of the institute."
          />
          <div className="border-t border-edge">
            {neighbours.map((g) => (
              <div key={g.type} className="grid gap-4 lg:grid-cols-[260px_1fr] py-7 border-b border-edge">
                <h3 className="t-3">
                  {g.type}
                  <span className="mono text-[0.72rem] text-volt ml-3 font-normal">{g.list.length}</span>
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.list.map((c) => (
                    <li key={c} className="px-3 py-1.5 rounded-full bg-white border border-edge text-[0.92rem] text-dim">{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PG */}
      <section id="pg" className="on-mist section scroll-mt-28">
        <div className="wrap">
          <SectionHead
            eyebrow="Accommodation"
            title="Nearby PG details."
            lede="All the PGs listed here are 10 m to 200 m from MasterVLSI. Call the PG directly to check availability and rent."
          />
          <div className="space-y-14">
            {pgs.map((g) => (
              <div key={g.group}>
                <div className="flex items-baseline justify-between gap-6 border-b border-rule pb-4 mb-6">
                  <h3 className="display t-2">{g.group}</h3>
                  <span className="mono text-[0.72rem] uppercase tracking-[0.04em] text-slate">{g.note}</span>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {g.list.map((p) => (
                    <li key={p.name} className="card">
                      <div className="flex justify-between items-start gap-4">
                        <h4 className="t-3">{p.name}</h4>
                        <span className="tag shrink-0">Very near</span>
                      </div>
                      <ul className="mt-5 space-y-1.5">
                        {p.phones.map((n) => (
                          <li key={n}>
                            <a href={tel(n)} className="mono text-[1.02rem] hover:text-volt-deep transition-colors inline-flex items-center min-h-9">
                              {fmtPhone(n)}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <h3 className="display t-2">Need help choosing?</h3>
              <p className="lede muted mt-4">The office team can point you to a PG that suits your budget and batch timing.</p>
              <ul className="mt-8 border-t border-rule">
                {officeContacts.slice(0, 2).map((c) => (
                  <li key={c.name} className="flex justify-between items-center gap-6 py-4 border-b border-rule">
                    <span className="font-semibold">{c.name}</span>
                    <a href={tel(c.phone)} className="mono text-volt-deep">{fmtPhone(c.phone)}</a>
                  </li>
                ))}
              </ul>
            </div>
            <Poster
              src="/media/pg-accommodation.jpg"
              alt="Flyer showing photos and phone numbers of co-living, girls and boys PGs near MasterVLSI"
              caption="PG flyer with building photos"
            />
          </div>
        </div>
      </section>

      <CtaBand title="Come and see the lab." body="Book a demo class and walk the floor before you decide." />
    </>
  );
}
