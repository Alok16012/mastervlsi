import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { Faq } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book a Free Demo Class",
  description:
    "Book a free 60-minute VLSI demo class at MasterVLSI, Bangalore — on-site or online. Meet the mentor, walk the lab, ask anything.",
};

const facts = [
  ["Any weekday", "Monday to Friday slots"],
  ["60 minutes", "Live and interactive"],
  ["On-site or online", "Choose what works for you"],
  ["Small batch", "So every question gets answered"],
];

export default function Demo() {
  return (
    <>
      <section className="on-dark relative overflow-hidden border-b border-edge">
        <div className="absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="wrap relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] pt-16 pb-16 lg:pt-24 lg:pb-24">
          <div>
            <p className="eyebrow">Try before you commit</p>
            <h1 className="display t-hero mt-6">
              Book a free <span className="text-volt">demo class.</span>
            </h1>
            <p className="lede muted mt-8">
              Experience our teaching first-hand. Meet the mentor, walk the lab, ask anything.
              Sixty minutes, zero obligation.
            </p>
            <dl className="grid grid-cols-2 border-t border-l border-edge mt-12">
              {facts.map(([t, b]) => (
                <div key={t} className="border-r border-b border-edge p-5 lg:p-6">
                  <dt className="t-3">{t}</dt>
                  <dd className="text-dim mt-1 text-[0.94rem]">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:pt-10">
            <EnquiryForm intent="demo" />
          </div>
        </div>
      </section>

      <section className="on-mist section">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Before you come</p>
            <h2 className="display t-1 mt-5">Common questions.</h2>
          </div>
          <Faq />
        </div>
      </section>
    </>
  );
}
