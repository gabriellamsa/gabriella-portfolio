import project1 from "../images/projects/project-1.jpg";
import project2 from "../images/projects/project-2.jpg";
import project3 from "../images/projects/project-3.jpg";
import project4 from "../images/projects/project-4.jpg";
import project5 from "../images/projects/project-5.jpg";

export const hero_content = `I design and develop user-friendly, responsive, and visually engaging interfaces using HTML5, TailwindCSS, JavaScript, and React. My passion is crafting clean, efficient code that brings ideas to life, ensuring a seamless and enjoyable experience for users. Every project is an opportunity to create something meaningful with care and attention to detail.`

export const projects = [
  {
    title: "Music Player",
    image: project1,
    description:
      "A modern and responsive music player built with Next.js 15, React 19, and Tailwind CSS 4. Featuring a sleek interface, full audio playback controls, smooth animations, and an advanced search system, this application delivers a seamless music listening experience across all devices.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Lucide React"],
    liveDemo: "https://music-player-peach-eight.vercel.app/",
    code: "https://github.com/gabriellamsa/music-player",
  },
  {
    title: "Shopping Cart",
    image: project2,
    description:
      "A modern and interactive shopping cart application built with React, featuring smooth state management, local storage persistence, and an intuitive UI design.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveDemo: "https://shopping-cart-six-indol.vercel.app/",
    code: "https://github.com/gabriellamsa/shopping-cart",
  },
  {
    title: "Product Landing Page",
    image: project3,
    description:
      "A modern and responsive product landing page built with Next.js 15, React 19, and Tailwind CSS 4. Featuring smooth animations, dark/light mode support, and optimized performance with Turbopack, this landing page provides an engaging and professional user experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveDemo: "https://nextjs-product-landing.vercel.app/",
    code: "https://github.com/gabriellamsa/nextjs-product-landing",
  },
  {
    title: "Purific Ar",
    image: project4,
    description:
      "A professional website developed for Purific Ar, a company specializing in air conditioning installation and maintenance. Built with React and Tailwind CSS, it features a modern, responsive design, an intuitive service booking system, and an optimized user experience.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://purific-ar.vercel.app/",
    code: "https://github.com/gabriellamsa/purific-ar",
  },
  {
    title: "Nucampsite React",
    image: project5,
    description:
      "A campsite management application built with React and Redux, featuring booking functionality, user reviews, and detailed campsite information. Designed to be fully responsive with an engaging user interface for a seamless experience.",
    technologies: ["React", "Redux", "JavaScript", "Bootstrap"],
    liveDemo: "https://nucampsite-react-steel.vercel.app/",
    code: "https://github.com/gabriellamsa/nucampsite-react",
  },
];

export const experiences = [
  {
    year: "2024 - Present",
    role: "Front-End Developer",
    company: "Freelancer",
    description: `Designed and developed high-performance, fully-responsive web applications using modern front-end technologies. Focused on writing clean, scalable, and maintainable code while ensuring an exceptional user experience. Integrated APIs, optimized performance, and applied best practices in UI/UX to deliver impactful digital solutions.`,
    technologies: ["React", "JavaScript", "Tailwind CSS", "Next.js", "REST APIs"],
    projectLink: "https://github.com/gabriellamsa/purific-ar",
  },
  {
    year: "2024 – 2024",
    role: "Commercial Sales",
    company: "ALIEST - Escritório Associado Conexão C6 Bank",
    description: `Led strategic sales initiatives, managed customer relationships, and optimized business processes to drive revenue growth. Developed strong negotiation and communication skills while implementing data-driven sales strategies.`,
    technologies: ["CRM", "Customer Engagement", "Business Development"],
  },
  {
    year: "2021 – 2022",
    role: "Store Manager",
    company: "MOSKKITO",
    description: `Managed store operations, led a high-performance sales team, and implemented workflow improvements to enhance efficiency. Focused on customer satisfaction, inventory control, and data-driven decision-making to increase profitability.`,
    technologies: ["Data Analytics", "Leadership", "Customer Experience"],
  },
];
