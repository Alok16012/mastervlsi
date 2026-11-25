export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <rect x="6" y="6" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" />
        {[11, 17, 23].map((p) => (
          <g key={p} stroke="currentColor" strokeWidth="2">
            <line x1={p} y1="1" x2={p} y2="6" />
            <line x1={p} y1="28" x2={p} y2="33" />
            <line x1="1" y1={p} x2="6" y2={p} />
            <line x1="28" y1={p} x2="33" y2={p} />
          </g>
        ))}
        <path d="M10.5 16.5l4.5 5 9-10.5" fill="none" stroke="#e5252a" strokeWidth="3.2" strokeLinecap="square" />
      </svg>
      <span
        className="font-display font-extrabold text-[1.35rem] tracking-[-0.02em] leading-none"
      >
        MASTER<span className="text-volt">VLSI</span>
      </span>
    </span>
  );
}
