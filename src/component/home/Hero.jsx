import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <p className="font-mono tracking-[0.3em] text-white/40 text-sm mb-5">
          ADVANCED ROBOTICS CLUB
        </p>

        <h1
          className="text-6xl md:text-8xl leading-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Engineering
          <br />
          Tomorrow.
        </h1>

        <p className="mt-8 max-w-xl text-white/60 text-lg leading-8">
          A community of innovators exploring Robotics, Embedded Systems,
          Artificial Intelligence and next-generation technologies through
          collaboration, research and real-world projects.
        </p>

        <div className="mt-10 flex gap-5 flex-wrap">
          <Link
            to="/projects"
            className="bg-white text-black px-6 py-3 font-mono text-xs tracking-[0.2em] hover:bg-white/90 transition"
          >
            EXPLORE PROJECTS
          </Link>

          <Link
            to="/team"
            className="border border-white/20 px-6 py-3 font-mono text-xs tracking-[0.2em] hover:border-white transition"
          >
            JOIN ARC
          </Link>
        </div>
      </div>
    </section>
  );
}