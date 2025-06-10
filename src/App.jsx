import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden antialised relative scroll-smooth">
      <div id="global-background"></div>

      <div className="container mx-auto px-8 relative z-10">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
