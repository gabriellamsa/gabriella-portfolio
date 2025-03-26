import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navebar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden antialised relative">
      <div id="global-background"></div>

      <div className="container mx-auto px-8 relative z-10">
        <Navebar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
