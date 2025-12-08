import { useState, useEffect } from "react"; 
import { useMemo } from "react";
// ----------------------
// Countdown timer
// ----------------------
function CountdownTimer({ target }) { 
    const eventDate = useMemo(() => new Date("2025-12-12T10:00:00+05:45"), []);
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

  export default CountdownTimer;

