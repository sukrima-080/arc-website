import Hero from "../component/home/Hero";
import About from "../component/home/About";
import Domains from "../component/home/Domains";
import FeaturedProjects from "../component/home/FeaturedProjects";
import CTA from "../component/home/CTA";

export default function HomePages() {
  return (
    <>
      <Hero />
      <About />
      <Domains />
      <FeaturedProjects />
       
      <CTA />
    </>
  );
}