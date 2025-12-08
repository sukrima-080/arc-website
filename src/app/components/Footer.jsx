// components/TerminalGridFooter.jsx
"use client";

import React from "react";

// Data for team officials and links
const teamMembers = [
  { role: "President", name: "Aayush Raj Nepal" },
  { role: "Event Lead", name: "Bhuwan Basnet" },
  { role: "Tech Lead", name: "Sonu Alam, Joyash Shrestha" },
  { role: "Design Lead", name: "Ritika Budhathoki" },
];

const links = [
  { name: "Facebook", url: "https://www.facebook.com/arcacem" },
  { name: "Instagram", url: "https://www.instagram.com/arc.acem/" },
  //{ name: "LinkedIn", url: "#" },
  //{ name: "YouTube", url: "#" },
  //{ name: "News", url: "#" },
  //{ name: "Company", url: "#" },
  { name: "Contact Us", url: "https://www.facebook.com/arcacem" },
];

// Using a custom font stack for the data-terminal look
const terminalFont = "font-mono tracking-tight";

// College Logo SVG path (Placeholder: Replace with your actual college logo SVG)
const CollegeLogo = () => (
  <img
    src="/logos/acem_logo.png"
    alt="ACEM Logo"
    className="w-21 h-21 sm:w-24 sm:h-24 md:w-30 md:h-30 object-contain"
  />
);

const TerminalGridFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-black text-white ${terminalFont} border-t border-gray-800`}
    >
      {/* Main Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-gray-800">
        {/* COLUMN 1: Event Officials */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-start">
          <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 mb-5">
            Event Officials
          </h3>
          <div className="space-y-3">
            {teamMembers.map((member, index) => (
              <p key={index} className="text-sm sm:text-base">
                <span className="text-white font-semibold block">
                  {member.name}
                </span>
                <span className="text-white/60 block text-[0.7rem] sm:text-xs">
                  {member.role}
                </span>
              </p>
            ))}
          </div>
        </div>

        {/* COLUMN 2: College Logo */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center border-t md:border-t-0 border-gray-800">
          <CollegeLogo />
          <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em]  text-blue-400/80 mt-4 text-center">
            [A.C.E.M]
          </p>
        </div>

        {/* COLUMN 3: Links */}
        <div className="p-6 sm:p-8 lg:p-10 border-t md:border-t-0 border-gray-800">
          <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80 mb-5">
            External Access
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-sm sm:text-base hover:text-blue-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-gray-800">
          {/* Bottom Left */}
          <div className="p-5 sm:p-6 lg:p-8 flex items-center justify-start">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7V5a1 1 0 112 0v6a1 1 0 11-2 0zm-1 3a1 1 0 102 0 1 1 0 00-2 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-[0.65rem] sm:text-xs text-white/80">
              {`ACCESS PROTOCOL ${currentYear}. ALL RIGHTS RESERVED.`}
            </span>
          </div>

          {/* Bottom Center (spacer) */}
          <div className="p-5 sm:p-6 lg:p-8 flex items-center justify-start md:justify-end">
            <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-white/80 text-left md:text-right break-words">
              Crafted by- ASOFT Corp. &amp; ARC Creative Division
            </p>
          </div>

          {/* Bottom Right */}
          <div className="p-5 sm:p-6 lg:p-8 flex items-center justify-start md:justify-end">
            <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-white/80 text-left md:text-right break-words">
              Event Location: Advanced College of Engineering &amp; Mgmt,
              Kathmandu, Nepal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TerminalGridFooter;










