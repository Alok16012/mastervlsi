"use client";

import { useState } from "react";
import { modules, phases } from "@/lib/data";

export default function Curriculum() {
  const [phase, setPhase] = useState<string>("All");
  const list = phase === "All" ? modules : modules.filter((m) => m.phase === phase);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter modules by phase">
        {["All", ...phases].map((p) => {
          const on = p === phase;
          return (
            <button
              key={p}
              type="button"
              aria-pressed={on}
              onClick={() => setPhase(p)}
              className={`min-h-11 px-4 mono text-[0.76rem] uppercase tracking-[0.04em] border transition-colors ${
                on ? "bg-volt text-white border-volt" : "bg-white border-rule text-slate hover:border-volt hover:text-volt"
              }`}
            >
              {p}
              <span className={`ml-2 ${on ? "text-white/80" : "text-volt"}`}>
                {p === "All" ? modules.length : modules.filter((m) => m.phase === p).length}
              </span>
            </button>
          );
        })}
      </div>

      <ol className="cells grid gap-4 md:grid-cols-2">
        {list.map((m) => (
          <li key={m.n} className="bg-paper p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <span className="mono text-sm text-volt-deep">{String(m.n).padStart(2, "0")}</span>
              <span className="tag">{m.phase}</span>
            </div>
            <h3 className="t-3 mt-4">{m.title}</h3>
            <p className="text-slate mt-1.5">{m.summary}</p>

            {m.topics.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2">
                {m.topics.map((t) => (
                  <li key={t} className="text-[0.86rem] px-2.5 py-1 rounded-md bg-mist">
                    {t}
                  </li>
                ))}
              </ul>
            )}

            {m.groups?.map((g) => (
              <div key={g.name} className="mt-5">
                <p className="mono text-[0.7rem] uppercase tracking-[0.04em] text-slate">{g.name}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {g.topics.map((t) => (
                    <li key={t} className="text-[0.86rem] px-2.5 py-1 rounded-md bg-mist">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
}
