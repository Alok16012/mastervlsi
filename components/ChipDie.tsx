// Decorative chip-floorplan illustration for the home hero.
const blocks = [
  { x: 96, y: 96, w: 150, h: 96, label: "RTL", sub: "always_ff", hot: true },
  { x: 258, y: 96, w: 166, h: 60, label: "UVM ENV", sub: "agent · sqr · scb" },
  { x: 258, y: 168, w: 78, h: 76, label: "AXI", sub: "5-ch" },
  { x: 346, y: 168, w: 78, h: 76, label: "APB", sub: "periph" },
  { x: 96, y: 204, w: 150, h: 112, label: "PCIe", sub: "LTSSM · Gen7", hot: true },
  { x: 258, y: 256, w: 166, h: 60, label: "CXL", sub: ".io .cache .mem" },
  { x: 96, y: 328, w: 96, h: 96, label: "USB", sub: "3.x" },
  { x: 204, y: 328, w: 108, h: 96, label: "SVA", sub: "coverage" },
  { x: 324, y: 328, w: 100, h: 96, label: "CLK/RST", sub: "GLS" },
];

const traces = [
  "M246 144 H258",
  "M171 192 V204",
  "M336 206 H346",
  "M246 260 H258 V256",
  "M144 316 V328",
  "M258 316 V328",
  "M374 316 V328",
  "M341 156 V168",
];

export default function ChipDie() {
  const pins = Array.from({ length: 14 }, (_, i) => 78 + i * 28);
  return (
    <svg viewBox="0 0 520 520" role="img" aria-label="Illustration of a chip floorplan with RTL, UVM, AXI, PCIe and CXL blocks" className="w-full h-auto">
      {/* pins */}
      <g stroke="#3a3e45" strokeWidth="6">
        {pins.map((p) => (
          <g key={p}>
            <line x1={p} y1="18" x2={p} y2="52" />
            <line x1={p} y1="468" x2={p} y2="502" />
            <line x1="18" y1={p} x2="52" y2={p} />
            <line x1="468" y1={p} x2="502" y2={p} />
          </g>
        ))}
      </g>
      {/* package + die */}
      <rect x="52" y="52" width="416" height="416" fill="#101113" stroke="#3a3e45" strokeWidth="2" />
      <rect x="80" y="80" width="360" height="360" fill="#08090a" stroke="#26292e" />
      <path d="M52 84 V52 H84" fill="none" stroke="#7a5af8" strokeWidth="4" />
      <circle cx="68" cy="452" r="5" fill="#7a5af8" />

      {blocks.map((b, i) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="#17191c" stroke={b.hot ? "#7a5af8" : "#3a3e45"} strokeWidth={b.hot ? 1.5 : 1} />
          <rect className="pulse" style={{ animationDelay: `${i * 0.35}s` }} x={b.x + b.w - 14} y={b.y + 8} width="6" height="6" fill={b.hot ? "#7a5af8" : "#7ee0b0"} />
          <text x={b.x + 10} y={b.y + 24} fill="#ffffff" fontSize="15" fontWeight="800" fontFamily="var(--font-archivo), sans-serif" style={{ fontStretch: "112%" }}>
            {b.label}
          </text>
          <text x={b.x + 10} y={b.y + 41} fill="#9da2a9" fontSize="9.5" fontFamily="var(--font-plex-mono), monospace">
            {b.sub}
          </text>
        </g>
      ))}

      <g fill="none" stroke="#3a3e45" strokeWidth="2">
        {traces.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {/* animated signal around the die ring */}
      <rect x="88" y="88" width="344" height="344" fill="none" stroke="#7a5af8" strokeWidth="2" className="trace" />
    </svg>
  );
}
