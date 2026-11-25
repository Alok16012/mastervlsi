"use client";

import { useState, type FormEvent } from "react";
import { site, waLink } from "@/lib/data";

type Props = { intent?: "demo" | "enquiry" | "corporate" };

const copy = {
  demo: { cta: "Reserve my seat on WhatsApp", lead: "I'd like to book a free demo class." },
  enquiry: { cta: "Send enquiry on WhatsApp", lead: "I have an enquiry about the VLSI course." },
  corporate: { cta: "Start a conversation", lead: "We'd like to discuss a design / verification engagement." },
};

export default function EnquiryForm({ intent = "enquiry" }: Props) {
  const [sent, setSent] = useState(false);
  const c = copy[intent];

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const lines = [
      `Hi MasterVLSI, ${c.lead}`,
      `Name: ${get("name")}`,
      get("org") && `Company: ${get("org")}`,
      get("mode") && `Mode: ${get("mode")}`,
      get("status") && `Current status: ${get("status")}`,
      get("message") && `Message: ${get("message")}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="border border-edge rounded-2xl bg-white shadow-[0_12px_32px_rgba(27,33,36,0.08)] p-6 md:p-8 grid gap-5">
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" required autoComplete="name" placeholder="Full name" />
      </div>

      {intent === "corporate" ? (
        <div className="field">
          <label htmlFor="org">Company</label>
          <input id="org" name="org" autoComplete="organization" placeholder="Company name" />
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          <div className="field">
            <label htmlFor="mode">Mode of training</label>
            <select id="mode" name="mode" defaultValue="Offline (Bangalore)">
              <option>Offline (Bangalore)</option>
              <option>Online</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="status">Current status</label>
            <select id="status" name="status" defaultValue="Completed graduation">
              <option>Pursuing graduation</option>
              <option>Completed graduation</option>
              <option>Career gap</option>
              <option>Working professional</option>
            </select>
          </div>
        </div>
      )}

      <div className="field">
        <label htmlFor="message">Anything we should know? (optional)</label>
        <textarea id="message" name="message" rows={3} placeholder="Your background, questions, preferred timing…" />
      </div>

      <button type="submit" className="btn btn-primary w-full">
        {c.cta} →
      </button>

      <p className="mono text-[0.72rem] text-dim" role="status">
        {sent
          ? "WhatsApp opened in a new tab — press send there to reach our team."
          : `Opens WhatsApp with your message pre-filled. Or call ${site.phone}.`}
      </p>
    </form>
  );
}
