import {
  api,
  agile,
  versioning,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  fasters,
  claro,
  nomad,
  podcastr,
  jobit,
  imageGenerator,
  bootstrap,
  optimize,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Agile Methodology",
    icon: agile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "API",
    icon: api,
  },
  {
    title: "Git Versioning",
    icon: versioning,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Google Optimize",
    icon: optimize,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "CRO Developer",
    company_name: "Global Hitss (Claro S.A)",
    icon: claro,
    iconBg: "#383E56",
    date: "December 2021 - April 2023",
    points: [
      "Develop and implement A/B tests on specific pages or elements of the website or application.",
      "Develop optimized pages and elements",
      "Work with analysis tools.",
      "Analyze website or application data to identify problem areas and improvement opportunities.",
    ],
  },
  {
    title: "Web developer | Freelancer",
    company_name: "Nomad",
    icon: nomad,
    iconBg: "#E6DEDD",
    date: "January 2021 - November 2021",
    points: [
      "Web application development including UX and UI design.",
      "Code analysis for implementing improvements.",
      "Development of specific functions for web applications.",
    ],
  },
  {
    title: "Front-end Developer",
    company_name: "Fasters",
    icon: fasters,
    iconBg: "#383E56",
    date: "January 2018 - Octuber 2020",
    points: [
      "Building websites from scratch based on a design.",
      "Making websites that are responsive.",
      "Rolling out upgrades to completed projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Podcastr",
    description:
      "Welcome to our podcast streaming site, where audio comes to life! Immerse yourself in a world of riveting conversations. Our functional player boasts numerous features, while dedicated pages provide detailed podcast descriptions and accessible transcriptions. Elevate your listening experience with us!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "postcss",
        color: "pink-text-gradient",
      },
    ],
    image: podcastr,
    source_code_link: "https://github.com/Henry-Mrqs/podcastr",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Image Generator",
    description:
      "A cutting-edge website enabling users to input text into a designated field. This text is sent as a reference to an artificial intelligence (AI) procedural image generation API. The outcome comprises four distinct image variations derived from the provided text, delivering a personalized and dynamic visual experience.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
    ],
    image: imageGenerator,
    source_code_link: "https://github.com/Henry-Mrqs/AI-Image-Generator",
  },
];

export { services, technologies, experiences, testimonials, projects };