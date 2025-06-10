import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between py-6 px-4">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2"
            width={200}
            height={183}
            alt="Logo"
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#projects"
          className="text-gray-700 hover:text-teal-500 transition-colors"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="text-gray-700 hover:text-teal-500 transition-colors"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="text-gray-700 hover:text-teal-500 transition-colors"
        >
          Contact
        </a>
        <div className="flex items-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/gabriellamsa/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-700 hover:text-teal-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/gabriellamsa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-700 hover:text-teal-500 transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-teal-500 transition-colors"
          aria-label="Toggle menu"
        >
          <HiMenu size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-20 right-4 bg-white shadow-lg rounded-lg p-4 w-48"
          >
            <div className="flex justify-end mb-2">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-teal-500 transition-colors"
                aria-label="Close menu"
              >
                <IoClose size={24} />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <a
                href="#projects"
                className="text-gray-700 hover:text-teal-500 transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-gray-700 hover:text-teal-500 transition-colors"
                onClick={toggleMenu}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-teal-500 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <div className="flex items-center gap-4 text-2xl pt-2">
                <a
                  href="https://www.linkedin.com/in/gabriellamsa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-700 hover:text-teal-500 transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/gabriellamsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-700 hover:text-teal-500 transition-colors"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
