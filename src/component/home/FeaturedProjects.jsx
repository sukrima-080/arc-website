import { Link } from "react-router-dom";

const projects = [
  {
    title: "Autonomous Rover",
    category: "Robotics",
    description:
      "An autonomous rover capable of obstacle detection and navigation.",
  },
  {
    title: "Smart Home Automation",
    category: "Embedded Systems",
    description:
      "IoT-based home automation system using sensors and microcontrollers.",
  },
  {
    title: "AI Vision System",
    category: "Artificial Intelligence",
    description:
      "Computer vision project for object detection and image recognition.",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-28 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-white/40">
              FEATURED PROJECTS
            </p>

            <h2
              className="text-5xl mt-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We Build
            </h2>
          </div>

          <Link
            to="/projects"
            className="hidden md:block text-white/60 hover:text-white transition"
          >
            View All →
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-white/10 p-8 hover:border-white hover:-translate-y-2 transition-all duration-300"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
                {project.category}
              </p>

              <h3
                className="text-3xl mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {project.title}
              </h3>

              <p className="text-white/60 leading-8">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link
            to="/projects"
            className="text-white hover:text-white/70 transition"
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}