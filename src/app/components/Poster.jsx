
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import CountdownTimer from "./Counter";

export default function BotPosterCard() {
  const [isMobile, setIsMobile] = useState(false);

  const eventDate = useMemo(
    () => new Date("2025-12-12T10:00:00+05:45"),
    []
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center bg-black h-screen items-center px-3 sm:px-6 lg:px-1">
      <motion.div
        className="relative w-full max-w-5xl"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Outer conic glow frame */}
        <div className="pointer-events-none absolute -inset-[3px] rounded-[1.8rem] sm:rounded-[2.2rem] bg-[conic-gradient(from_140deg,rgba(56,189,248,0.25),rgba(129,140,248,0.55),rgba(244,114,182,0.45),transparent_60%)] opacity-70 blur-xl" />

        {/* Main card */}
        <motion.div
          whileHover={{
            rotateX: -5,
            rotateY: 5,
            translateY: -8,
            scale: 1.015,
          }}
          whileTap={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          className="relative rounded-[1.4rem] sm:rounded-[1.9rem] bg-black/50 border border-white/12
                     backdrop-blur-2xl shadow-[0_30px_110px_rgba(0,0,0,0.95)]
                     overflow-hidden"
        >
          {/* Inner wash */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.55)_0,transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.98)_0,transparent_60%)] opacity-80" />

          {/* Fine scanline / noise */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-soft-light bg-[repeating-linear-gradient(to_bottom,rgba(148,163,184,0.3)_0,rgba(148,163,184,0.3)_1px,transparent_1px,transparent_3px)]" />

          {/* Actual image block with responsive aspect ratio */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
            <Image
              src="/fallbacks/botnice.png"
              alt="Technorian prototype neuro-bot artwork"
              fill
              priority
              className="object-contain p-3 sm:p-5 md:p-6"
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1024px) 90vw,
                70vw
              "
            />
          </div>

          {/* Countdown overlay */}
          <div
            className={`pointer-events-none absolute z-20 ${
              isMobile
                ? "inset-0 flex items-center justify-center"
                : "top-3 sm:top-4 left-3 sm:left-4"
            }`}
          >
            <div className="pointer-events-auto">
              <CountdownTimer target={eventDate} />
            </div>
          </div>

          {/* Bottom metadata strip */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6 pt-2.5 border-t border-white/10 bg-black/55">
            <div className="flex items-center gap-2 sm:gap-3 text-[0.6rem] sm:text-[0.7rem] text-white/75 font-mono">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              <span className="tracking-[0.2em] sm:tracking-[0.24em] uppercase">
                Technorian · Prototype Neuro-Bot
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
