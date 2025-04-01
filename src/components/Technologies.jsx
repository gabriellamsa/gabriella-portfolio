import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  TbBrandCss3,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNodejs,
} from "react-icons/tb";
import { motion } from "framer-motion";

const technologies = [
  { icon: TbBrandHtml5, color: "text-orange-400", delay: 0 },
  { icon: TbBrandCss3, color: "text-sky-400", delay: 0.2 },
  { icon: TbBrandJavascript, color: "text-amber-400", delay: 0.4 },
  { icon: RiReactjsLine, color: "text-cyan-400", delay: 0.6 },
  { icon: RiTailwindCssFill, color: "text-cyan-400", delay: 0.8 },
  { icon: TbBrandGit, color: "text-red-400", delay: 1 },
  { icon: TbBrandNodejs, color: "text-emerald-400", delay: 1.2 },
];

export const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Technologies
      </motion.h2>

      <motion.div className="flex flex-wrap items-center justify-center gap-12">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className={`${tech.color} text-7xl cursor-pointer`}
            animate={{
              y: [-8, 8, -8],
              transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: tech.delay,
              },
            }}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.5 },
            }}
          >
            <tech.icon />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
