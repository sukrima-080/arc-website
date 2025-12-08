// components/RegistrationDeadlineModal.jsx
"use client";

import React, { useEffect, useState } from "react";

export default function RegistrationDeadlineModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 700); // slight delay so it feels intentional
    return () => clearTimeout(timer);
  }, []);

  const handleGoToForms = () => {
    const el = document.getElementById("registration-forms");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={() => setOpen(false)} 
    >
      <div
        className="relative max-w-md w-full bg-[#050508] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.85)] overflow-hidden"
        onClick={(e) => e.stopPropagation()} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-deadline-title"
      >
        {/* Subtle gradient highlight strip */}
        <div className="pointer-events-none absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-blue-500/0 via-blue-400/70 to-purple-500/0" />

        {/* Top row: label + close */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-yellow-400/10 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-yellow-200">
              Registration closing soon
            </span>
          </span>

          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-full border border-white/15 hover:border-white/40 hover:bg-white/5 transition"
            aria-label="Close"
          >
            <svg
              className="w-3.5 h-3.5 text-white/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h2
            id="registration-deadline-title"
            className="text-lg sm:text-xl font-semibold tracking-tight"
          >
            Last call to lock your team in.
          </h2>
          <p className="text-sm sm:text-[0.95rem] text-white/70 leading-relaxed">
            Technorion 5.0 registrations will be closing shortly. Ensure your
            team, stall, or volunteer slot is confirmed before the window
            expires.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <button
            onClick={handleGoToForms}
            className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-colors"
          >
            Go to registration
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>

          <p className="text-[0.7rem] text-white/45 uppercase tracking-[0.18em] text-left sm:text-right">
            Forms section · Technorion 5.0
          </p>
        </div>
      </div>
    </div>
  );
}
