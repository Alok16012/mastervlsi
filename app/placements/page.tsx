import type { Metadata } from "next";
import { CtaBand, PageHero, Poster, SectionHead, StatRow } from "@/components/ui";
import { alumni, companyGroups, journey, records, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Placements — Where MasterVLSI Engineers Work",
  description:
    "Placement outcomes at MasterVLSI: hiring companies, alumni offers, standout achievements and the four-step placement journey.",
};

export default function Placements() {
  return (
    <>
      <PageHero
        eyebrow="Outcomes"
        title={<>Where our engineers <span className="text-volt">work today.</span></>}
        lede="Placement starts within 30–45 days of completing the core modules. Below is the proof — the companies, the names, the packages and the process."
      />

      <section className="on-dark">
        <div className="wrap py-12">
          <StatRow
            stats={[
              { value: "5000+", label: "Engineers trained" },
              { value: "60+", label: "Hiring companies" },
              { value: "₹70 LPA", label: "Highest package" },
              { value: "30–45", label: "Days to first offer" },
            ]}
          />
        </div>
      </section>

      <section className="on-light section">
        <div className="wrap">
          <SectionHead eyebrow="Records" title="Standout alumni achievements." />
          <div className="cells grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {records.map((r) => (
              <div key={r.label} className="bg-paper p-7">
                <p className="mono text-[0.72rem] uppercase tracking-[0.04em] text-slate">{r.label}</p>
                <p className="display text-[2.6rem] mt-4 text-volt-deep">{r.figure}</p>
                <p className="t-3 mt-3">{r.name}</p>
                <p className="text-slate mt-2 text-[0.94rem]">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark section">
        <div className="wrap">
          <SectionHead
            eyebrow="Hiring companies"
            title="Alumni currently shipping silicon at these companies."
          />
          <div className="border-t border-edge">
            {companyGroups.map((g) => (
              <div key={g.name} className="grid gap-4 lg:grid-cols-[260px_1fr] py-7 border-b border-edge">
                <h3 className="t-3">
                  {g.name}
                  <span className="mono text-[0.72rem] text-volt ml-3 font-normal">{g.list.length}</span>
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {g.list.map((c) => (
                    <li key={c} className="px-3 py-1.5 rounded-full bg-white border border-edge text-[0.92rem] text-dim hover:text-paper hover:border-edge-2 transition-colors">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-light section">
        <div className="wrap">
          <SectionHead
            eyebrow="Alumni wall"
            title="Real engineers, real offers."
            lede="Names, home towns and packages — with what they said about the program in their own words."
          />
          <div className="overflow-x-auto">
            <table className="data-table min-w-[720px]">
              <caption className="sr-only">Alumni offers and feedback</caption>
              <thead>
                <tr>
                  <th scope="col">Alumnus</th>
                  <th scope="col">From</th>
                  <th scope="col">In their words</th>
                  <th scope="col" className="text-right !pr-0">Offer</th>
                </tr>
              </thead>
              <tbody>
                {alumni.map((a) => (
                  <tr key={a.name}>
                    <td className="font-semibold whitespace-nowrap">{a.name}</td>
                    <td className="text-slate whitespace-nowrap">{a.place || "—"}</td>
                    <td className="text-slate">{a.quote ? `“${a.quote}”` : "—"}</td>
                    <td className="text-right !pr-0 mono whitespace-nowrap">₹{a.lpa} LPA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="on-mist section">
        <div className="wrap">
          <SectionHead eyebrow="The process" title="From cohort intake to offer letter, in four stops." />
          <ol className="cells grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j) => (
              <li key={j.n} className="bg-paper p-7">
                <span className="display text-5xl text-volt-deep">{j.n}</span>
                <h3 className="t-3 mt-5">{j.title}</h3>
                <p className="text-slate mt-3 text-[0.94rem]">{j.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-dark section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="eyebrow">Reviews and stories</p>
            <h2 className="display t-1 mt-5">Hear it from alumni, unscripted.</h2>
            <p className="lede muted mt-6">
              Student reviews and internship feedback are on our YouTube channel, and public
              ratings are on our Google Business profile.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <a href={site.social.YouTube} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Watch on YouTube ↗
              </a>
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Google reviews ↗
              </a>
            </div>
          </div>
          <Poster
            src="/media/placements-poster.jpg"
            alt="Poster of companies where MasterVLSI students have been placed, with special achievements"
            caption="Official placements poster"
          />
        </div>
      </section>

      <CtaBand title="Ready to join the next cohort?" body="Talk to a counsellor on WhatsApp, or sit in on a free demo class first." />
    </>
  );
}
