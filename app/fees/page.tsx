import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, Poster, SectionHead } from "@/components/ui";
import { fee, feePolicies, lateConsequences } from "@/lib/data";

export const metadata: Metadata = {
  title: "Fee Details and Terms & Conditions",
  description:
    "MasterVLSI online / offline training fees are ₹90,000 + GST in two instalments. Read the complete payment schedule and fee terms.",
};

export default function Fees() {
  return (
    <>
      <PageHero
        eyebrow="Fees"
        title={<>Fee details and <span className="text-volt">terms.</span></>}
        lede="One fee for online or offline training, paid in two equal instalments. Please read the terms below before you enrol — we would rather you know them now."
      />

      <section className="on-dark section !pt-14">
        <div className="wrap grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="border-2 border-volt rounded-2xl bg-white p-8 lg:p-12">
            <p className="eyebrow">Online / offline training fees</p>
            <p className="display text-[clamp(2.7rem,6vw,5.25rem)] mt-6 whitespace-nowrap">
              {fee.total}
              <span className="text-dim text-[0.32em] ml-3 font-semibold tracking-normal">{fee.suffix}</span>
            </p>
            <p className="text-dim mt-4 max-w-md">
              Complete course fees must be cleared within {fee.clearance}.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link href="/demo" className="btn btn-primary">Book free demo →</Link>
              <Link href="/contact" className="btn btn-ghost">Ask the office</Link>
            </div>
          </div>

          <ol className="cells grid gap-4">
            {fee.instalments.map((i, k) => (
              <li key={i.name} className="bg-ink-2 p-8 flex flex-col justify-center">
                <span className="mono text-sm text-volt">{String(k + 1).padStart(2, "0")}</span>
                <p className="mono text-[0.72rem] uppercase tracking-[0.04em] text-dim mt-4">{i.name}</p>
                <p className="display text-4xl mt-2">{i.amount}</p>
                <p className="text-dim mt-2">{i.when}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="on-light section">
        <div className="wrap">
          <SectionHead eyebrow="Fee policy" title="The terms, in plain words." />
          <dl className="border-t border-rule">
            {feePolicies.map((p, i) => (
              <div key={p.title} className="grid gap-2 md:grid-cols-[80px_280px_1fr] py-6 border-b border-rule">
                <span className="mono text-sm text-volt-deep">{String(i + 1).padStart(2, "0")}</span>
                <dt className="t-3">{p.title}</dt>
                <dd className="text-slate max-w-[62ch]">{p.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="on-mist section">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Important payment policy</p>
            <h2 className="display t-1 mt-5">If payment is late.</h2>
            <p className="lede muted mt-6">
              The maximum duration for fee clearance is <strong className="text-ink">{fee.clearance}</strong>.
              If payment is not completed in that time, these actions follow:
            </p>
            <ul className="mt-8 border-t border-rule">
              {lateConsequences.map((c) => (
                <li key={c} className="flex gap-4 py-4 border-b border-rule">
                  <span className="mt-[0.55em] w-2 h-2 rounded-full bg-volt shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl bg-[#fff4ed] border border-[#fddcc4] text-ink p-8">
              <p className="mono text-[0.72rem] uppercase tracking-[0.04em] text-[#b93815]">Termination</p>
              <p className="t-3 mt-4">
                A student who fails to pay even after multiple reminders (maximum two) will be
                terminated.
              </p>
              <p className="text-slate mt-4">                After termination, the student needs to re-enrol under the latest fee structure to
                continue the course.
              </p>
            </div>
            <Poster
              src="/media/fee-terms.jpg"
              alt="Official MasterVLSI fee details and terms and conditions sheet"
              caption="Official fee and terms sheet"
            />
          </div>
        </div>
      </section>

      <CtaBand title="Questions about fees?" body="Speak to the office before you enrol — or sit in on a free demo class first." />
    </>
  );
}
