import Hero from "@/components/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <About />
      <Projects />
      {/* Add other sections similarly: Skills, Experience, Education, Certifications, Gallery, Blog, Contact */}
    </div>
  );
}
