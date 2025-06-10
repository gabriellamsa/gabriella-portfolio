import { projects } from "../assets/data/data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

export const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="pb-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-col items-center lg:flex-row lg:justify-center lg:items-center"
            variants={containerVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-full lg:w-1/4 flex justify-center"
              variants={imageVariants}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="rounded-lg shadow-md w-64 h-auto"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-2/3 flex flex-col items-center lg:items-start text-center lg:text-left lg:pl-8"
              variants={contentVariants}
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 rounded-full px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-teal-600 transition"
                  >
                    LIVE DEMO
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-900 transition"
                  >
                    CODE
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
