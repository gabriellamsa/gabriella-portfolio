import { hero_content } from "../assets/data/data";
import profilePic from "../assets/images/profilePic.jpg";

export const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt="profile Picture"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tightr lg:text-8xl">
              Gabriella Andrade
            </h2>
            <span className="bg-gradient-to-r from-stone-600 to-stone-300 bg-clip-text text-3xl tracking-tight text-transparent">
              Front-End Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {hero_content}
            </p>
            <a
              href="/gabriellamsa-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
