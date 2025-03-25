import { hero_content } from "../assets/data/data";
import profilePic from "../assets/images/profilePic.jpg";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt="Foto de perfil de Gabriella Andrade"
              className="border border-stone-900 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h1 className="pb-2 text-4xl tracking-tightr lg:text-8xl font-bold">
              Gabriella Andrade
            </h1>
            <span className="bg-gradient-to-r from-stone-600 to-stone-300 bg-clip-text text-3xl tracking-tight text-transparent">
              Front-End Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {hero_content}
            </p>

            <motion.a
              href="/gabriellamsa-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full px-8 py-4 text-sm text-stone-800 mb-10 hover:bg-stone-100 transition-colors duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
