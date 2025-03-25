import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  TbBrandCss3,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
} from "react-icons/tb";
import { motion } from "framer-motion";

const technologies = [
  { icon: TbBrandHtml5, color: "text-orange-400" },
  { icon: TbBrandCss3, color: "text-sky-400" },
  { icon: TbBrandJavascript, color: "text-amber-400" },
  { icon: RiReactjsLine, color: "text-cyan-400" },
  { icon: RiTailwindCssFill, color: "text-cyan-400" },
  { icon: TbBrandGit, color: "text-red-400" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        className="my-20 text-center text-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Technologies
      </motion.h2>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.5 },
            }}
            className={`${tech.color} text-7xl cursor-pointer`}
          >
            <tech.icon />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
