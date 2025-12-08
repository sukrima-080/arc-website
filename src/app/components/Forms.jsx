// "use client";

// export default function RegistrationForms() {
//   const forms = [
//     {
//       title: "Competition Registration",
//       description: "Register your team for Technorion 5.0 competitions",
//       icon: "🏆",
//       link: "https://docs.google.com/forms/d/1doDkZSDHo0hdghy39rDM3bf25KxHGJv0pCv8tqQeeLY/edit",
//     },
//     {
//       title: "Food Stall Registration",
//       description: "Register to set up a food stall at the event",
//       icon: "🍔",
//       link: "https://docs.google.com/forms/d/1QtHGVN8DTIc9O-mo1c674_Py-I4RhnJtZYbulX2Rn9Y/edit",
//     },
//     {
//       title: "Volunteer Registration",
//       description: "Join our team as a volunteer for Technorion 5.0",
//       icon: "🤝",
//       link: "https://docs.google.com/forms/d/1btLT4rlesZ3OH38yKYEizXgekeMI_BwcpPWCYILwny0/edit",
//     },
//   ];

//   return (
//     <section className="bg-black text-white py-24 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <header className="mb-14 text-center">
//           <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-white/45 mb-3">
//             Technorion 5.0 · Registration
//           </p>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium">
//             Join the Event
//           </h2>
//           <p className="text-white/60 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
//             Register now for competitions, food stalls, or volunteer opportunities
//           </p>
//         </header>

//         {/* Forms Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//           {forms.map((form, index) => (
//             <a
//               key={index}
//               href={form.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 
//                 hover:bg-white/10 hover:border-white/20 transition-all duration-300
//                 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)]"
//             >
//               {/* Icon */}
//               <div className="text-5xl mb-6">{form.icon}</div>

//               {/* Content */}
//               <h3 className="text-xl font-semibold mb-3 transition-colors">
//                 {form.title}
//               </h3>
//               <p className="text-white/60 text-sm mb-6">
//                 {form.description}
//               </p>

//               {/* Arrow Icon */}
//               <div className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
//                 <span>Register Now</span>
//                 <svg
//                   className="w-4 h-4 group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7l5 5m0 0l-5 5m5-5H6"
//                   />
//                 </svg>
//               </div>

//               {/* Decorative corner accent */}
//               <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";

import React from "react";
import Image from "next/image";

const forms = [
  {
    title: "COMPETITION",
    description:
      "Register your team for Technorion 5.0 and secure your competition slot.",
    icon: "/logos/competition.svg",
    link: "https://docs.google.com/forms/d/1doDkZSDHo0hdghy39rDM3bf25KxHGJv0pCv8tqQeeLY/edit",
  },
  {
    title: "FOOD STALL",
    description:
      "Register your food stall and showcase your culinary craft at the event.",
    icon: "/logos/food.svg",
    link: "https://docs.google.com/forms/d/1QtHGVN8DTIc9O-mo1c674_Py-I4RhnJtZYbulX2Rn9Y/edit",
  },
  {
    title: "VOLUNTEERING",
    description:
      "Join our volunteer team and help execute Technorion 5.0 with excellence.",
    icon: "/logos/volunteer.svg",
    link: "https://docs.google.com/forms/d/1btLT4rlesZ3OH38yKYEizXgekeMI_BwcpPWCYILwny0/edit",
  },
];

export default function RegistrationForms() {
  return (
    <section id="registration-forms" className="relative bg-black text-white py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.12),transparent_65%)]" />
      </div>

      {/* Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="w-full h-full bg-[size:32px_32px] bg-[linear-gradient(to_right,#404040_1px,transparent_1px),linear-gradient(to_bottom,#404040_1px,transparent_1px)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-400/80 font-mono mb-4">
            REGISTRATION
          </p>
          <h2 className="text-4xl sm:text-5xl font-medium tracking-tight">
            Initiate Registration
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Choose your registration pathway. All submissions are securely
            processed.
          </p>
        </header>

        {/* Enhanced 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {forms.map((form, idx) => (
            <a
              key={idx}
              href={form.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative
                bg-gradient-to-br from-white/[0.07] to-white/[0.02]
                border border-white/10
                rounded-2xl
                p-8 lg:p-10
                hover:border-white/20
                hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.05]
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]
                transition-all duration-500
                flex flex-col
                overflow-hidden
              "
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glow Effect on Hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Icon Container */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-pink-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 group-hover:border-white/20 transition-colors">
                    <Image
                      src={form.icon}
                      alt={form.title}
                      width={80}
                      height={80}
                      className="opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-2xl font-semibold tracking-wide mb-4 group-hover:text-blue-300 transition-colors">
                  {form.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">
                  {form.description}
                </p>

                {/* CTA Button */}
                <div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white group-hover:gap-3 transition-all">
                  <span>Register Now</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[0.65rem] font-mono text-emerald-400/80 uppercase tracking-wider">
                  Active
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <p className="text-xs text-white/40 font-mono tracking-wider uppercase">
            All forms are secured with end-to-end encryption
          </p>
        </div>
      </div>
    </section>
  );
}
