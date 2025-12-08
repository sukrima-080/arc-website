import { motion } from "framer-motion";
function HeaderText() { 
    return( 
        // INTRO / NARRATIVE SECTION
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
    ) 
    
} 

export default HeaderText;