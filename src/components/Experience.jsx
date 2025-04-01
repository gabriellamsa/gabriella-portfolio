import { experiences } from "../assets/data/data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
      duration: 1.2,
    },
  },
};

const yearVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

export const Experience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        Experience
      </motion.h2>
      <div>
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
          >
            <motion.div className="w-full lg:w-1/4" variants={yearVariants}>
              <h3 className="mb-2 text-medium font-semibold text-stone-800">
                {experience.year}
              </h3>
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              variants={contentVariants}
            >
              <h3 className="mb-2 font-semibold">
                {experience.role} -
                <span className="text-sm font-semibold text-stone-800">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-stone-600">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 rounded-full bg-gray-800 px-3 py-1 text-sm text-white"
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
                    className="mr-2 mt-4 rounded-full bg-teal-500 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-600 hover:text-white shadow-md"
                  >
                    View Project
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
