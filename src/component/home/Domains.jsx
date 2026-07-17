const domains = [
  {
    title: "Robotics",
    description: "Designing intelligent robots and autonomous systems.",
  },
  {
    title: "Embedded Systems",
    description: "Programming microcontrollers and IoT devices.",
  },
  {
    title: "Artificial Intelligence",
    description: "Machine learning, computer vision and smart automation.",
  },
  {
    title: "Programming",
    description: "Building software solutions for robotics and research.",
  },
];

export default function Domains() {
  return (
    <section className="py-28 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8">

        <p className="font-mono text-xs tracking-[0.3em] text-white/40 mb-12">
          OUR DOMAINS
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {domains.map((domain) => (
            <div
              key={domain.title}
              className="border border-white/10 p-8 hover:border-white hover:-translate-y-2 transition-all duration-300"
            >
              <h3
                className="text-2xl mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {domain.title}
              </h3>

              <p className="text-white/60 leading-7">
                {domain.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}