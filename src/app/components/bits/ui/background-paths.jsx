"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic"; 
import Image from "next/image";
import BotPosterCard from "../../Poster";

// Lazy-load Spline on client only
const Spline = dynamic(
  () => import("@splinetool/react-spline").then((mod) => mod.default),
  { ssr: false }
);

// ----------------------
// Floating background paths
// ----------------------
function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-white/40"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Technorian background motion</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

// ----------------------
// Countdown timer
// ----------------------
function CountdownTimer({ target }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetTime =
      typeof target === "string" ? new Date(target).getTime() : target.getTime();

    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, targetTime - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, mins, secs });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);

  const box =
    "flex flex-col px-3 py-2 bg-white/5 rounded-xl border border-white/10 text-[0.6rem] sm:text-xs uppercase tracking-[0.25em] text-white/60";

  const numberClass = "font-mono text-xl sm:text-2xl md:text-3xl text-white";

  return (
    <div className="grid grid-flow-col auto-cols-max gap-3 text-center">
      <div className={box}>
        <span className={numberClass}>{timeLeft.days}</span>
        <span>days</span>
      </div>
      <div className={box}>
        <span className={numberClass}>{timeLeft.hours}</span>
        <span>hours</span>
      </div>
      <div className={box}>
        <span className={numberClass}>{timeLeft.mins}</span>
        <span>min</span>
      </div>
      <div className={box}>
        <span className={numberClass}>{timeLeft.secs}</span>
        <span>sec</span>
      </div>
    </div>
  );
}

// ----------------------
// Hero / BackgroundPaths
// ----------------------
export function BackgroundPaths({ title = "A Fusion of Bots, Bytes, and Brilliance." }) {
  const words = title.split(" ");
  const eventDate = useMemo(() => new Date("2025-12-12T10:00:00+05:45"), []);

  const [canUseSpline, setCanUseSpline] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [splineError, setSplineError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // run on client only
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isSmallScreen = window.innerWidth < 768;
    setIsMobile(isSmallScreen);

    // Strategy:
    // - no Spline on small screens or if reduced-motion
    // - otherwise yes
    if (!prefersReducedMotion && !isSmallScreen) {
      setCanUseSpline(true);
    }

    // Suppress Spline-related console errors
    const originalError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' && 
        (args[0].includes('Spline') || 
         args[0].includes('runtime') ||
         args[0].includes('Missing property'))
      ) {
        return;
      }
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
    {/* animated background lines */}
    <div className="absolute inset-0">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>

    {/* HERO BLOCK */}
    <div className="relative z-10 container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="max-w-5xl mx-auto pt-24 sm:pt-28 lg:pt-32 flex flex-col items-center text-center"
      >
        {/* Spline bot block + countdown */}
        <div className="w-full max-w-4xl mb-10 md:mb-12">
          <div className={`relative w-full aspect-[16/6] rounded-[2.5rem] shadow-[0_40px_160px_rgba(0,0,0,1)] overflow-hidden ${
            isMobile ? 'bg-transparent' : 'bg-black/30'
          }`}>
            {/* darker center so bot pops - hidden on mobile */}
            {!isMobile && (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.98)_0,rgba(0,0,0,0.94)_35%,rgba(0,0,0,0.6)_60%,transparent_80%)]" />
            )}

            {/* countdown - centered on mobile, top-left on desktop */}
            <div className={`absolute z-20 pointer-events-auto ${
              isMobile 
                ? 'inset-0 flex items-center justify-center' 
                : 'left-4 sm:left-6 top-4 sm:top-6'
            }`}>
              <CountdownTimer target={eventDate} />
            </div>

       
          </div>
        </div>
{/* content surface */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-20">
  <BotPosterCard />
</div>






          {/* Tagline text */}
          <h1 className="mt-44 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 tracking-tighter">

            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3 sm:mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </motion.div>
      </div>

      {/* INTRO / NARRATIVE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.9, ease: "easeOut" }}
        className="relative z-10 pt-20 sm:pt-24 pb-24 sm:pb-28 lg:pb-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Intro label */}
          <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-white/50 mb-6">
            Introduction
          </p>

          {/* Massive headline */}
          <h2
            className="text-left font-medium leading-[1.05] text-slate-100
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              max-w-6xl mb-12 sm:mb-16"
          >
           <span className="text-white">
  Your ticket to IIT Bombay's techfest awaits.
</span>{" "}
<span className="text-slate-500">
  Compete in Technorian , conquer there—with complete accommodation and dining experiences curated for champions.
</span>
          </h2>

          {/* Supporting paragraph */}
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-400 mb-10 sm:mb-12">
            This year at Advanced College of Engineering & Mgmt, Technorian transforms our campus into a live
  engineering battleground. From autonomous robotics to real-time
  coding duels, circuit debugging labs and immersive digital-art
  experiments — every arena mirrors the unpredictability and
  intensity of real-world tech building.

            </p>
          </div>

          {/* ARENAS BLOCK */}
          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-10 pt-2">
            {/* Left vertical label */}
            <div className="flex flex-row sm:flex-col items-start gap-3">
              <span className="text-[0.65rem] uppercase tracking-[0.35em] text-white/55">
                Arenas
              </span>
              <div className="h-12 sm:h-24 w-px bg-gradient-to-b from-white/60 via-white/30 to-transparent" />
            </div>

            {/* Arena list */}
            <ul
              className="grid grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-2
                         text-sm sm:text-lg md:text-xl text-white/80"
            >
              <li>Robotics</li>
              <li>Coding</li>
              <li>Digital Arts</li>
              <li>Hardware</li>
              <li>Esports</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
}