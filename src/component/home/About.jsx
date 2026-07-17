export default function About() {
  return (
    <section className="py-28 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-8">

        <p className="font-mono text-xs tracking-[0.3em] text-white/40 mb-6">
          ABOUT ARC
        </p>

        <h2
          className="text-4xl md:text-6xl leading-tight mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          We build ideas into intelligent systems.
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <p className="text-white/70 leading-8">
            Advanced Robotics Club (ARC) is a student-led community where
            innovation meets engineering. We encourage students to explore
            robotics, embedded systems, artificial intelligence, automation,
            and programming through practical projects and collaborative
            learning.
          </p>

          <p className="text-white/70 leading-8">
            From beginner workshops to advanced research and competitions,
            ARC provides opportunities for every member to learn, build,
            and contribute to impactful technology.
          </p>

        </div>

      </div>
    </section>
  );
}