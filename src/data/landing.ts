// src/data/siteData.ts

export interface LandingPage {
  iconPath: string; // The URL of the icon image (local path or CDN URL)
  pageTitle: string; // The text displayed on the browser tab

  heroPath: string; // The URL of the hero image (local path or CDN URL)
  heading: string; // The "Hello, my name is!" text
  subHeading: string; // The "What I do" text
  resumePath: string; // The Path to the Resume download
  
  aboutMe: string[]; // A more detailed paragraph of the

  featuredIntro: string;
  featuredProjects: number[]; // A list of project IDs that will be featured (3)

  contactIntro: string;
  email: string;
  github: string;
  linkedin: string;
  currentYear: string;
}

export const landing: LandingPage = {
  iconPath: "/img/Hawaii Icon 1.webp", // FIXME: This is not currently being used
  pageTitle: "Sean Duffie | Portfolio",

  heroPath: "/img/23-05-12_SMD_TAMU_GradPix_035_b.jpg",
  heading: "Howdy, I'm Sean Duffie!",
  subHeading:
    "I\'m an Embedded Software Engineer with a passion for optimization and innovation.</br>Let\'s build something amazing together.",
  resumePath: "/Resume/Duffie_Sean_Resume.pdf",

  aboutMe: [
    "I'm a maker at heart, and have had 5+ years of professional engineering experience.",
    "My expertise lies in React, Next.js, TypeScript, and Node.js. I'm constantly learning and staying up-to-date with the latest trends in web development.",
    "When I'm not coding, you can find me contributing to open-source projects, writing technical blog posts, or exploring new technologies.",
  ],

  featuredIntro:
    "Here are some of my recent personal projects that showcase my skills and experience. Click any of the cards to view a more detailed page.",
  featuredProjects: [1, 2, 3],

  contactIntro:
    "Feel free to reach out for collaborations or just a friendly hello",
  email: "duffiesean@gmail.com",
  github: "https://github.com/SeanDuffie",
  linkedin: "https://www.linkedin.com/in/sean-duffie",
  currentYear: "2026",
}; 

export const SITE_DATA = {
  // Global settings
  general: {
    title: "My Portfolio",
    baseUrl: "https://mysite.com",
    logoText: "JD.",
  },
  // Navigation Links (used in Navbar across all pages)
  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ],
  // Shared Image Paths
  images: {
    heroBackground: "/img/23-05-12_SMD_TAMU_GradPix_035_b.jpg",
    profileAvatar: "/img/avatar.jpg",
  },
  // Content for specific sections
  hero: {
    heading: "Building for the Web",
    subHeading: "Specializing in React & Embedded Systems",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Jane Doe`,
    socials: {
      github: "https://github.com/...",
      linkedin: "https://linkedin.com/...",
    },
  },
};
