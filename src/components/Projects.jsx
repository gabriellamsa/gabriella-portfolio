import { projects } from "../assets/data/data";

export const Projects = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="w-full lg:w-3/4 lg:pl-8">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="mt-4 flex gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
