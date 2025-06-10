import project1 from "../images/projects/project-1.jpg";
import project2 from "../images/projects/project-2.jpg";
import project3 from "../images/projects/project-3.jpg";
import project4 from "../images/projects/project-4.jpg";
import project5 from "../images/projects/project-5.jpg";

export const hero_content = `Front-End Developer passionate about building responsive, accessible, and visually engaging web experiences. I craft clean, efficient code using React, Next.js, Tailwind CSS, TypeScript, and JavaScript -— always with a focus on performance and user experience. Constantly exploring new technologies like Next.js 15 and React 19, I thrive on learning and pushing my skills forward. Every project is a chance to bring ideas to life with care, creativity, and attention to detail.`

export const projects = [
  {
    title: "Paws & Purpose",
    image: project1,
    description:
      "A modern web platform that connects pet lovers with their ideal companions. Featuring a responsive and intuitive interface, it's built with Next.js 15, React 19, and Tailwind CSS 4, with smooth animations via Framer Motion and an interactive carousel using Keen Slider. Optimized with Turbopack for high performance and smooth navigation.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Keen Slider", "Lucide React"],
    liveDemo: "https://paws-and-purpose.vercel.app/",
    code: "https://github.com/gabriellamsa/paws-and-purpose",
  },
  {
    title: "Music Player",
    image: project2,
    description:
      "A modern and responsive music player built with Next.js 15, React 19, and Tailwind CSS 4. Featuring a sleek interface, full audio playback controls, smooth animations, and an advanced search system, this application delivers a seamless music listening experience across all devices.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Lucide React"],
    liveDemo: "https://music-player-peach-eight.vercel.app/",
    code: "https://github.com/gabriellamsa/music-player",
  },
  {
    title: "Shopping Cart",
    image: project3,
    description:
      "A modern and interactive shopping cart application built with React, featuring smooth state management, local storage persistence, and an intuitive UI design.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveDemo: "https://shopping-cart-six-indol.vercel.app/",
    code: "https://github.com/gabriellamsa/shopping-cart",
  },
  {
    title: "Product Landing Page",
    image: project4,
    description:
      "A modern and responsive product landing page built with Next.js 15, React 19, and Tailwind CSS 4. Featuring smooth animations, dark/light mode support, and optimized performance with Turbopack, this landing page provides an engaging and professional user experience.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    liveDemo: "https://nextjs-product-landing.vercel.app/",
    code: "https://github.com/gabriellamsa/nextjs-product-landing",
  },
  {
    title: "Purific Ar",
    image: project5,
    description:
      "A professional website developed for Purific Ar, a company specializing in air conditioning installation and maintenance. Built with React and Tailwind CSS, it features a modern, responsive design, an intuitive service booking system, and an optimized user experience.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://purific-ar.vercel.app/",
    code: "https://github.com/gabriellamsa/purific-ar",
  },
  {
    title: "Nucampsite React",
    image: project1,
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
    company: "Freelance",
    description: `Developed responsive and high-performance interfaces using React, Next.js, and TypeScript, delivering pixel-perfect UIs and collaborating with clients to meet business goals.`,
    technologies: ["React", "JavaScript", "Tailwind CSS", "Next.js", "REST APIs"],
    projectLink: "https://github.com/gabriellamsa/purific-ar",
  },
  {
    year: "2024 – 2024",
    role: "Sales Consultant",
    company: "ALIEST Conexão",
    description: `Managed B2B/B2C sales of financial solutions, emphasizing customer experience and personalized service.`,
    technologies: ["CRM", "Customer Engagement", "Business Development"],
  },
  {
    year: "2021 – 2022",
    role: "Store Manager",
    company: "MOSKKITO",
    description: `Led daily operations, customer service, and team coordination, improving store performance and client satisfaction.`,
    technologies: ["Data Analytics", "Leadership", "Customer Experience"],
  },
];
