import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Navebar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden antialised">
      <div className="inset-0 z-10">
        <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

        <div className="container mx-auto px-8">
          <Navebar />
          <Hero />
          <Technologies />
          <Projects />
          <Experience />
        </div>
      </div>
    </div>
  );
}
