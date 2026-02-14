// src/data/siteData.ts

export interface LandingData {
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

export const landing: LandingData = {
  heroPath: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
  heading: "Howdy, I'm Sean Duffie!",
  subHeading:
    "I\'m an Embedded Software Engineer with a passion for optimization and innovation. \nLet\'s build something amazing together.",
  resumePath: "/Resume/Duffie_Sean_Resume.pdf",

  aboutMe: [
    "I'm a maker at heart, and have had 5+ years of professional engineering experience. I'm currently working as a C++ Software Engineer at Leidos, while I finish my Master's degree in Computer Science at Georgia Tech.",
    "I have a strong background in embedded systems, and I would consider myself a Jack of all trades. I've worked with PCB design, Signal Processing, Embedded Software Development, and System Integration. I've even dabbled in 3D Modeling, 3D Printing, and Robotics. I'm constantly learning and staying up-to-date with the latest trends in the broader engineering landscape.",
    "When I'm not at work, you could find me contributing to open-source projects, working on woodworking projects, or developing my automated home garden.",
  ],

  featuredIntro:
    "Here are some of my recent personal projects that showcase my skills and experience. Click any of the cards to view a more detailed page.",
  featuredProjects: [1, 2, 3],

  contactIntro:
    "Feel free to reach out for collaborations or just to establish a connection! I'm always open to discussing new opportunities and ideas.",
  email: "duffiesean@gmail.com",
  github: "https://github.com/SeanDuffie",
  linkedin: "https://www.linkedin.com/in/sean-duffie",
  currentYear: "2026",
}; 
