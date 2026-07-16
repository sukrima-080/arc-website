

import { Link, useLocation } from "react-router-dom";
import { Menu, Cpu } from "lucide-react";

// Edit labels/paths here — Header + pages both read from this list.
export const navLinks = [
  { label: "HOME", path: "/" },
  { label: "PROJECTS", path: "/projects" },
  { label: "RESEARCH", path: "/research" },
  { label: "TIMELINE", path: "/timeline" },
  { label: "ACHIEVEMENTS", path: "/achievements" },
  { label: "TEAM", path: "/team" },
];

export default function Header() {
  const location = useLocation();

  return (
    <>
      <style>{`
        @keyframes chip-wiggle {
          0%   { transform: rotate(0deg); }
          25%  { transform: rotate(-18deg); }
          50%  { transform: rotate(0deg); }
          75%  { transform: rotate(18deg); }
          100% { transform: rotate(0deg); }
        }

        .logo:hover .chip-icon {
          animation: chip-wiggle 0.6s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      <header className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-black">
        {/* Logo */}
        <Link
          to="/"
          className="logo flex items-center gap-2 text-white text-xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <Cpu
            className="chip-icon w-5 h-5"
            strokeWidth={1.5}
          />

          <span className="italic">
            ARC Systems.
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-[0.15em]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.label}
                to={link.path}
                className={`pb-1 border-b transition-colors ${
                  isActive
                    ? "text-white border-white"
                    : "text-white/40 border-transparent hover:text-white/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <Link
            to="/team"
            className="bg-white text-black font-mono text-xs tracking-[0.15em] px-4 py-2 hover:bg-white/90 transition-colors"
          >
            ENLIST NOW
          </Link>

          <button
            aria-label="Open menu"
            className="text-white/80 hover:text-white"
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </header>
    </>
  );
}