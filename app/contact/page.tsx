import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { PageHero, SectionHead, fmtPhone, tel } from "@/components/ui";
import { officeContacts, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the MasterVLSI office in Udayanagar, Bangalore — phone numbers, email, working hours, address and directions.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Talk to a person, <span className="text-volt">not a portal.</span></>}
        lede={`The office is open ${site.hours}. Call the right person below, send an enquiry, or simply walk in.`}
      />

      <section className="on-light section">
        <div className="wrap">
          <SectionHead eyebrow="Office contact" title="Who to call, and for what." />
          <ul className="cells grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {officeContacts.map((c, i) => (
              <li key={c.name} className="bg-paper p-7 flex flex-col">
                <span className="mono text-sm text-volt-deep">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-3 mt-4">{c.name}</h3>
                <p className="text-slate mt-2 text-[0.94rem]">{c.role}</p>
                <a href={tel(c.phone)} className="display text-2xl mt-auto pt-8 hover:text-volt-deep transition-colors">
                  {fmtPhone(c.phone)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="on-dark section">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Visit</p>
            <h2 className="display t-1 mt-5">MasterVLSI Institute</h2>
            <address className="not-italic lede muted mt-6">
              <span className="block">1st Floor,</span>
              {site.addressLines.slice(1).map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </address>
            <dl className="mt-8 border-t border-edge">
              {[
                ["Email", <a key="e" href={`mailto:${site.email}`} className="text-volt hover:text-paper transition-colors">{site.email}</a>],
                ["Working hours", site.hours],
                ["Landmark", "Opposite Vinayaka Temple, 100 m from Tin Factory bus stop"],
              ].map(([k, v]) => (
                <div key={String(k)} className="grid sm:grid-cols-[180px_1fr] gap-1 py-4 border-b border-edge">
                  <dt className="mono text-[0.72rem] uppercase tracking-[0.04em] text-dim pt-1">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3 mt-9">
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get directions ↗</a>
              <a href={site.community} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">WhatsApp community ↗</a>
            </div>
          </div>
          <div>
            <h2 className="eyebrow mb-6">Send an enquiry</h2>
            <EnquiryForm intent="enquiry" />
          </div>
        </div>
      </section>

      <section className="on-dark-2">
        <iframe
          title="Map showing the MasterVLSI institute in Udayanagar, Bangalore"
          src={site.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[420px] block border-0 grayscale-[0.4]"
        />
      </section>
    </>
  );
}
