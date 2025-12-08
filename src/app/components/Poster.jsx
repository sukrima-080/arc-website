// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function BotPosterCard() {
//   return (
//     <div className="w-full flex justify-center px-4 sm:px-6">
//       <motion.div
//         className="relative w-full max-w-5xl"
//         initial={{ opacity: 0, y: 24 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//       >
//         {/* Outer glow frame */}
//         <div className="pointer-events-none absolute -inset-[2px] rounded-[2.4rem] bg-[conic-gradient(from_140deg,rgba(56,189,248,0.25),rgba(129,140,248,0.5),rgba(244,114,182,0.35),transparent_60%)] opacity-60 blur-xl" />

//         {/* Main card with tilt + hover */}
//         <motion.div
//           whileHover={{
//             rotateX: -6,
//             rotateY: 6,
//             translateY: -10,
//             scale: 1.02,
//           }}
//           whileTap={{ scale: 0.99 }}
//           transition={{ type: "spring", stiffness: 140, damping: 18 }}
//           className="relative rounded-[1.8rem] sm:rounded-[2.2rem] bg-black/40 border border-white/10
//                      backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.9)]
//                      overflow-hidden"
//         >
//           {/* Subtle inner gradient wash */}
//           <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.45)_0,transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95)_0,transparent_60%)] opacity-70" />

//           {/* Scanline / noise overlay */}
//           <div className="pointer-events-none absolute inset-0 opacity-[0.17] mix-blend-soft-light bg-[repeating-linear-gradient(to_bottom,rgba(148,163,184,0.28)_0,rgba(148,163,184,0.28)_1px,transparent_1px,transparent_3px)]" />

//           {/* Actual image block with responsive aspect ratio */}
//           <div className="relative aspect-[4/5] xs:aspect-[3/4] sm:aspect-[5/4] md:aspect-[1300/815]">
//             <Image
//               src="/fallbacks/bot.jpg"
//               alt="Technorian bot artwork"
//               fill
//               priority
//               className="object-contain p-3 sm:p-4 md:p-6"
//               sizes="(max-width: 640px) 100vw,
//                      (max-width: 1024px) 80vw,
//                      60vw"
//             />
//           </div>

//           {/* Bottom metadata strip */}
//           <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-6 pb-5 sm:pb-6 pt-2 border-t border-white/10 bg-black/40">
//             <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70 font-mono">
//               <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
//               <span className="tracking-[0.25em] uppercase text-[0.6rem] sm:text-[0.7rem]">
//                 Technorian · Prototype Neuro-Bot
//               </span>
//             </div>
//             <div className="text-[0.65rem] sm:text-xs text-white/50 font-mono tracking-[0.18em] uppercase">
//               Render: 1300 × 815 · Optimized
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BotPosterCard() {
  return (
    <div className="w-full flex justify-center px-3 sm:px-6 lg:px-10">
      <motion.div
        className="relative w-full max-w-5xl" // was max-w-6xl
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
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]">
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
