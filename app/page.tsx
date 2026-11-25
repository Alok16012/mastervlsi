import Link from "next/link";
import ChipDie from "@/components/ChipDie";
import Reveal from "@/components/Reveal";
import { CtaBand, Faq, Marquee, SectionHead, StatRow } from "@/components/ui";
import {
  advantages, alumni, connectivity, fee, flow, heroStats, modules, paths, phases, playlists, records, site,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="on-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="wrap relative grid gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-center pt-14 pb-14 lg:pt-24 lg:pb-20">
          <div>
            <p className="eyebrow">Cohort 2026 · AI + Design Verification enrolling now</p>
            <h1 className="display t-hero mt-7">
              We don&apos;t sell certificates. We ship <span className="text-volt">engineers.</span>
            </h1>
            <p className="lede muted mt-8">
              RTL, SystemVerilog, UVM and the protocols silicon teams actually hire for — taught
              lab-first by working industry mentors in Bangalore, with AI-assisted debug, RTL review
              and interview prep built into every cohort.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <Link href="/demo" className="btn btn-primary">
                Book a free demo →
              </Link>
              <Link href="/courses" className="btn btn-ghost">
                Explore the curriculum
              </Link>
            </div>
          </div>
          <div className="max-w-[440px] lg:max-w-none mx-auto w-full">
            <ChipDie />
          </div>
        </div>
        <div className="wrap relative pb-14 lg:pb-20">
          <StatRow stats={heroStats} />
        </div>
      </section>

      <Marquee />

      {/* ── Paths ────────────────────────────────────────── */}
      <section className="on-light section">
        <div className="wrap">
          <SectionHead
            eyebrow="The VLSI transformation"
            title="Career gap. Internship. Apprenticeship. Whatever your start, there is a path in."
            lede="From IIT and NIT to engineering colleges across India — bright engineers still need to recharge before they're silicon-ready. Pick the route that matches where you are today."
          />
          <div className="cells grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {paths.map((p, i) => (
              <Reveal key={p.kicker} delay={i * 70} className="bg-paper">
                <article className="p-7 lg:p-8 h-full flex flex-col">
                  <p className="mono text-[0.72rem] uppercase tracking-[0.04em] text-volt-deep">
                    {String(i + 1).padStart(2, "0")} / {p.kicker}
                  </p>
                  <h3 className="t-3 mt-5">{p.title}</h3>
                  <p className="text-slate mt-3">{p.body}</p>
                  <ul className="mt-6 pt-6 border-t border-rule space-y-2.5 mt-auto">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-[0.94rem]">
                        <span className="mt-[0.6em] w-2 h-2 rounded-full bg-volt shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Program ──────────────────────────────────────── */}
      <section className="on-dark section">
        <div className="wrap">
          <SectionHead
            eyebrow="The program"
            title="One complete design and verification program. Twenty modules."
            lede="From number systems to PCIe Gen7. Every concept lands in a real Verilog or SystemVerilog file before a single slide."
            action={
              <Link href="/courses" className="arrow-link">
                Full curriculum →
              </Link>
            }
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <div className="border-2 border-volt rounded-2xl bg-white p-8 h-full flex flex-col">
                <p className="eyebrow">Online / offline training</p>
                <p className="display text-[clamp(2.4rem,4.6vw,4rem)] mt-6 whitespace-nowrap">
                  {fee.total}
                  <span className="text-dim text-[0.4em] ml-2 font-semibold tracking-normal">{fee.suffix}</span>
                </p>
                <dl className="mt-8 border-t border-edge">
                  {[
                    ["Duration", "6 months, live cohort"],
                    ["Mode", "Online or offline, Bangalore"],
                    ["Payment", "Two instalments of ₹45,000 + GST"],
                    ["Lab", "24/7 access"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-6 py-3.5 border-b border-edge">
                      <dt className="mono text-[0.72rem] uppercase tracking-[0.04em] text-dim pt-1">{k}</dt>
                      <dd className="text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap gap-3 mt-8 pt-2 mt-auto">
                  <Link href="/demo" className="btn btn-primary">
                    Book free demo
                  </Link>
                  <Link href="/fees" className="btn btn-ghost">
                    Fee terms
                  </Link>
                </div>
              </div>
            </Reveal>

            <div className="cells grid gap-4 sm:grid-cols-2">
              {phases.map((ph, i) => {
                const ms = modules.filter((m) => m.phase === ph);
                return (
                  <Reveal key={ph} delay={i * 60} className={`bg-ink-2 ${i === phases.length - 1 ? "sm:col-span-2" : ""}`}>
                    <div className="p-6 lg:p-7">
                      <div className="flex justify-between items-baseline">
                        <h3 className="t-3">{ph}</h3>
                        <span className="mono text-[0.72rem] text-volt">{ms.length} modules</span>
                      </div>
                      <ul className="mt-4 space-y-1.5 text-dim text-[0.94rem]">
                        {ms.map((m) => (
                          <li key={m.n} className="flex gap-3">
                            <span className="mono text-[0.72rem] pt-1 text-volt w-5 shrink-0">{String(m.n).padStart(2, "0")}</span>
                            {m.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Design flow ──────────────────────────────────── */}
      <section className="on-mist section">
        <div className="wrap">
          <SectionHead
            eyebrow="How you'll learn it"
            title="The complete VLSI flow, in the order a design team runs it."
          />
          <ol className="cells grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((s, i) => (
              <Reveal key={s.n} delay={(i % 4) * 60} className="bg-paper">
                <li className="p-6 lg:p-7 list-none h-full group">
                  <div className="flex items-center gap-3">
                    <span className="mono text-sm text-volt-deep">{s.n}</span>
                    <span className="h-px flex-1 bg-rule group-hover:bg-volt transition-colors" />
                    <span className="mono text-sm text-slate" aria-hidden="true">→</span>
                  </div>
                  <h3 className="display text-3xl mt-6">{s.name}</h3>
                  <p className="text-slate mt-3 text-[0.94rem]">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Advantage + founder ──────────────────────────── */}
      <section className="on-dark section">
        <div className="wrap">
          <SectionHead
            eyebrow="Why MasterVLSI"
            title="Every cohort runs like a small design house."
            lede="Daily stand-ups, peer code reviews, industry-grade EDA tools and mentors who work on real silicon. We don't lecture — we engineer."
          />
          <div className="cells grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 60} className="bg-ink">
                <div className="p-7 lg:p-8 h-full">
                  <span className="mono text-sm text-volt">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="t-3 mt-4">{a.title}</h3>
                  <p className="text-dim mt-3">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <figure className="mt-16 lg:mt-24 grid gap-8 lg:grid-cols-[auto_1fr] border-l-4 border-volt pl-6 lg:pl-12">
              <blockquote className="lg:col-span-2">
                <p className="display t-2 max-w-4xl">
                  &ldquo;I watched brilliant graduates fail interviews — not because they lacked
                  talent, but because nobody taught them how silicon really gets built.&rdquo;
                </p>
                <p className="lede muted mt-8">
                  Every cohort here is run like a real design house: code reviews, daily stand-ups
                  and industry EDA tools. If you put in the hours, we&apos;ll match them — and we
                  won&apos;t stop until your offer letter is on your phone.
                </p>
              </blockquote>
              <figcaption className="mono text-[0.78rem] uppercase tracking-[0.04em] text-dim lg:col-span-2">
                From the founder · MasterVLSI
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Placements ───────────────────────────────────── */}
      <section className="on-light section">
        <div className="wrap">
          <SectionHead
            eyebrow="Outcomes"
            title="We measure ourselves by your offer letter, not by hours taught."
            action={
              <Link href="/placements" className="arrow-link">
                All placement stories →
              </Link>
            }
          />
          <div className="cells grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {records.map((r, i) => (
              <Reveal key={r.label} delay={i * 60} className="bg-paper">
                <div className="p-7 h-full">
                  <p className="mono text-[0.72rem] uppercase tracking-[0.04em] text-slate">{r.label}</p>
                  <p className="display text-[2.6rem] mt-4 text-volt-deep">{r.figure}</p>
                  <p className="t-3 mt-3">{r.name}</p>
                  <p className="text-slate mt-2 text-[0.94rem]">{r.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 overflow-x-auto">
            <table className="data-table min-w-[560px]">
              <caption className="sr-only">Selected alumni offers</caption>
              <thead>
                <tr>
                  <th scope="col">Alumnus</th>
                  <th scope="col">From</th>
                  <th scope="col" className="text-right !pr-0">Offer</th>
                </tr>
              </thead>
              <tbody>
                {alumni.slice(0, 8).map((a) => (
                  <tr key={a.name}>
                    <td className="font-semibold">{a.name}</td>
                    <td className="text-slate">{a.place || "—"}</td>
                    <td className="text-right !pr-0 mono">₹{a.lpa} LPA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Campus ───────────────────────────────────────── */}
      <section className="on-dark-2 section">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">The campus</p>
            <h2 className="display t-1 mt-5">In Bengaluru&apos;s silicon belt. A short walk from the train.</h2>
            <p className="lede muted mt-6">
              Udayanagar, next to Tin Factory. A 24/7 lab on a CCTV-secured floor, with PG
              accommodation 10 m to 200 m from the door.
            </p>
            <address className="not-italic mt-8 border-l-2 border-volt pl-5">
              {site.addressLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>
            <div className="flex flex-wrap gap-3 mt-9">
              <Link href="/campus" className="btn btn-primary">
                Campus, travel and PGs
              </Link>
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Open in Maps ↗
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-2 border-t border-l border-edge">
            {[
              [connectivity.bus[0][1], "Tin Factory bus stop"],
              [connectivity.rail[0][1], "Krishnarajapuram railway station"],
              [connectivity.metro[0][1], "Benniganahalli metro"],
              ["10–200 m", "Co-living, girls' and boys' PGs"],
            ].map(([v, l]) => (
              <div key={l} className="border-r border-b border-edge p-6 lg:p-8 flex flex-col-reverse">
                <dt className="text-dim text-[0.94rem]">{l}</dt>
                <dd className="display text-[clamp(1.9rem,3.4vw,3rem)] mb-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── YouTube ──────────────────────────────────────── */}
      <section className="on-light section">
        <div className="wrap">
          <SectionHead
            eyebrow="Free on YouTube"
            title="Start learning before you enrol."
            lede="Deep-dive videos on Verilog, SystemVerilog, UVM and AMBA protocols, from working industry mentors."
            action={
              <Link href="/resources" className="arrow-link">
                All resources →
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-2">
            {playlists.slice(0, 2).map((p) => (
              <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="card block group">
                <span className="tag">{p.tag}</span>
                <h3 className="display t-2 mt-6">{p.title}</h3>
                <p className="text-slate mt-4">{p.body}</p>
                <p className="mono text-[0.78rem] mt-8 flex justify-between text-slate">
                  <span>{p.meta}</span>
                  <span className="text-volt-deep group-hover:translate-x-1 transition-transform">Watch on YouTube ↗</span>
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="on-mist section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="display t-1 mt-5">Common questions.</h2>
            <p className="lede muted mt-6">
              Something else on your mind? Ask on WhatsApp — a counsellor replies during office
              hours.
            </p>
            <Link href="/contact" className="arrow-link mt-8">
              Contact the office →
            </Link>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
