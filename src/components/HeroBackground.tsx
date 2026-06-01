import { useEffect, useRef } from "react";

/* Cinematic animated background: subtle moving gradient orbs + grid + grain.
   Used as a "video-like" hero background without external video assets. */
export function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden bg-[#0a0a0a]">
      {/* drifting orbs */}
      <div
        className="absolute -left-32 top-1/4 h-[40rem] w-[40rem] rounded-full opacity-40 blur-3xl float-slow"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18), transparent 60%)",
          transform: "translate(var(--mx,0), var(--my,0))",
        }}
      />
      <div
        className="absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(180,200,255,0.18), transparent 60%)",
          animation: "float-slow 9s ease-in-out infinite",
          transform: "translate(calc(var(--mx,0) * -1), calc(var(--my,0) * -1))",
        }}
      />
      {/* moving lines */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* shooting truck-route line */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="trail" x1="0" x2="1">
            <stop offset="0" stopColor="white" stopOpacity="0" />
            <stop offset="0.5" stopColor="white" stopOpacity="0.6" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 620 Q 300 540 600 580 T 1200 460"
          fill="none"
          stroke="url(#trail)"
          strokeWidth="1"
          strokeDasharray="4 8"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-120" dur="6s" repeatCount="indefinite" />
        </path>
        <path
          d="M0 200 Q 400 280 700 220 T 1200 320"
          fill="none"
          stroke="url(#trail)"
          strokeWidth="1"
          strokeDasharray="3 10"
          opacity="0.6"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="120" dur="9s" repeatCount="indefinite" />
        </path>
      </svg>
      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      <div className="absolute inset-0 grain text-white" />
    </div>
  );
}
