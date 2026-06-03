import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react";

const VIDEO_SRC =
  "https://d1pcopq1a9mdhn.cloudfront.net/wp-content/uploads/2026/05/MOBURSTNASA-SMALL-1.mp4";

export function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
      <button
        onClick={onClose}
        className="absolute right-8 top-8 text-white hover:text-white/70"
      >
        <X size={32} />
      </button>
      <div className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black">
        <video src={VIDEO_SRC} controls autoPlay className="h-full w-full" />
      </div>
    </div>
  );
}

/* Background video for hero — full bleed, autoplay muted loop */
export function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#050505]">
      <video
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      {/* gradient overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
      {/* subtle grid + grain */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 grain text-white" />
    </div>
  );
}

/* Right-side preview card: real video playing short 3s loops with custom controls */
export function HeroVideoPreview({ onOpen }: { onOpen: () => void }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  // Loop a short 3s segment to keep the preview punchy
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const SEG_START = 2;
    const SEG_LEN = 3;
    const onTime = () => {
      const t = v.currentTime;
      if (t < SEG_START || t > SEG_START + SEG_LEN) v.currentTime = SEG_START;
      setProgress(Math.min(1, Math.max(0, (t - SEG_START) / SEG_LEN)));
    };
    v.addEventListener("timeupdate", onTime);
    return () => v.removeEventListener("timeupdate", onTime);
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="relative w-full"
    >
      {/* floating glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-white/5 blur-3xl" />

      <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <div className="relative aspect-[4/5] w-full sm:aspect-[5/6]">
          <video
            ref={ref}
            src={VIDEO_SRC}
            autoPlay
            muted={muted}
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

          {/* center play CTA — opens full video modal */}
          <button
            onClick={onOpen}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Watch full case study video"
          >
            <span className="relative grid h-24 w-24 place-items-center rounded-full bg-white/95 text-[#111] shadow-2xl transition group-hover:scale-105">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
              <Play className="relative h-9 w-9 translate-x-0.5 fill-current" />
            </span>
          </button>

          {/* top label */}
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              Live Reel
            </span>
            <span className="hidden sm:inline">Case Film · 03:42</span>
          </div>

          {/* bottom info + custom controls */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/60">
                  Featured Client
                </div>
                <div className="mt-1 font-display text-xl font-semibold text-white">
                  Built for the Supply Chain.
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle();
                  }}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMuted((m) => !m);
                  }}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* progress bar */}
            <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full bg-white transition-[width] duration-150 ease-linear"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* floating stat chip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="absolute -left-4 -bottom-6 hidden rounded-2xl border border-white/15 bg-black/80 px-5 py-4 backdrop-blur-xl sm:block"
      >
        <div className="font-display text-3xl font-semibold text-white">+312%</div>
        <div className="mt-1 text-[10px] uppercase tracking-widest text-white/60">
          Avg Lead Growth
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: 0.7 }}
        className="absolute -right-3 top-10 hidden rounded-2xl border border-white/15 bg-white px-4 py-3 text-[#111] shadow-xl sm:block"
      >
        <div className="font-display text-xl font-semibold">⭐ 4.9</div>
        <div className="mt-0.5 text-[10px] uppercase tracking-widest text-black/60">
          Client Rating
        </div>
      </motion.div>
    </motion.div>
  );
}
