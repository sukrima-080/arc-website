import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto px-8 text-center">

        <p className="font-mono text-xs tracking-[0.3em] text-white/40 mb-6">
          JOIN THE COMMUNITY
        </p>

        <h2
          className="text-5xl md:text-7xl leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Build.
          <br />
          Learn.
          <br />
          Innovate.
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto text-lg leading-8 mb-12">
          Whether you're a beginner or an experienced developer, ARC is a place
          to explore robotics, embedded systems, AI, and real-world engineering
          projects with like-minded students.
        </p>

        <Link
          to="/team"
          className="inline-block bg-white text-black px-8 py-4 font-mono text-xs tracking-[0.2em] hover:bg-white/90 transition"
        >
          ENLIST NOW
        </Link>

      </div>
    </section>
  );
}