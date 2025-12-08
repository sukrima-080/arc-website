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
    <section  id="registration-forms"  className="bg-black text-white py-28 px-4 sm:px-8 lg:px-16">
      {/* Header */}
      <header className="text-center mb-24">
        <p className="text-xs uppercase tracking-[0.35em]  text-blue-400/80 font-mono mb-4">
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

      {/* 3-Column Luxe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {forms.map((form, idx) => (
          <a
            key={idx}
            href={form.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex flex-col justify-between
              px-10 py-24  
              border-t border-white/10 
              hover:bg-white/[0.03]
              transition-all
            "
          >
            {/* Centered Icon */}
            <div className="flex justify-center mb-16">
              <Image
                src={form.icon}
                alt={form.title}
                width={100}
                height={100}
                className="opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Title */}
            <h3 className="text-3xl font-light tracking-wide mb-4">
              {form.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              {form.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
