import { experiences } from "../assets/data/data";

export const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-medium font-semibold text-stone-500">
                {experience.year}
              </p>
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </span>
              ))}

              {experience.projectLink && (
                <div className="mt-4">
                  <a
                    href={experience.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2 mt-4 rounded bg-teal-500 px-5 py-2 text-sm font-medium text-stone-100 transition-colors hover:bg-teal-600 hover:text-white"
                  >
                    View Project
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
