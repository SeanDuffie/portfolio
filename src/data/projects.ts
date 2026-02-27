export interface Project {
  id: number; // Index of the project
  title: string; // Name of the project
  elevatorPitch: string; // Brief description
  description: string; // A more detailed paragraph about the project
  tags: string[]; // Added this based on your LandingPage.tsx needs
  heroImage: string; // The URL of the project hero image (local path or CDN URL)
  systemSpecs?: {
    mechanical: string[];
    electronics: string[];
    software: string[];
  };
  technologies: {
    category: string;
    tools: string[];
  }[];
  youtubeVideoId?: string; // (Optional) The YouTube video ID to append to the link
  externalLink?: string; // (Optional) A link to a demo or more detailed page
  githubLink?: string; // (Optional) A link to the associated git repo, if open source
  blockDiagram?: string; // (Optional) The URL of the block diagram image (local path or CDN URL)
  timeline?: {
    phase: string;
    date: string;
    description: string;
    status: "completed" | "in-progress" | "planned";
  }[];
  todo?: string[];
  challenges?: string[];
  outcomes?: string[];
  team?: string[];
}

export const categories = ['all', 'web-app', 'PCB', 'Image Processing', 'personal'];

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Webpage",
    elevatorPitch:
      "Fast and Responsive website using Astro and Svelte to display my Engineering Portfolio.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    youtubeVideoId: "dQw4w9WgXcQ",
    externalLink: "https://astro-portfolio-sean-duffie.vercel.app/",
    githubLink: "https://github.com/SeanDuffie/astro-portfolio",
    tags: ["Astro", "TypeScript", "Svelte", "ReactJS"],
    systemSpecs: {},
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Learning Astro", "PCI compliance"],
    outcomes: ["Processed 10k orders", "99.9% uptime"],
    team: ["Solo"],
  },
  {
    id: 2,
    title: "Wordle Discord Bot",
    elevatorPitch:
      "Automatic Wordle solver that has an option to integrate into a Discord Server",
    heroImage: "/img/wordle_example.png",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    // githubLink: null,
    tags: [
      "Python",
      "OpenCV",
      "Selenium",
      "BeautifulSoup",
      "SQL",
      "Pandas",
      "Discord API",
    ],
    technologies: [
      {
        category: "Frontend",
        tools: ["Discord API"],
      },
      // ... fill in the rest of your data here
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Inventory synchronization", "PCI compliance"],
    outcomes: ["Processed 10k orders", "99.9% uptime"],
    team: ["Solo"],
  },
  {
    id: 3,
    title: "Recipe Scraper & Analyzer",
    elevatorPitch:
      "Assemble and organize recipes from various sources, calculate nutritional information, and generate shopping lists.",
    heroImage: "",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null,
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/recipe-scraper",
    tags: ["Astro", "TypeScript", "Svelte", "ReactJS"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Inventory synchronization", "PCI compliance"],
    outcomes: ["Processed 10k orders", "99.9% uptime"],
    team: ["Solo"],
  },
  {
    id: 4,
    title: "Lightning Locator",
    elevatorPitch:
      "A cheap, All-in-one system to track thunderstorm data by measuring when and where lighting strikes.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description:
      "A cheap, All-in-one system to track thunderstorm data by measuring when and where lighting strikes.",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/lnb-node",
    tags: ["Astro", "TypeScript", "Svelte", "ReactJS"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Inventory synchronization", "PCI compliance"],
    outcomes: ["Processed 10k orders", "99.9% uptime"],
    team: ["Solo"],
  },
  {
    id: 5,
    title: "Chicken Coop Monitor",
    elevatorPitch:
      "A camera system to automatically monitor chicken coops, and detect when there are eggs.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/ChickenCoop",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
  {
    id: 6,
    title: "Routinely",
    elevatorPitch:
      "A tool to integrate into the users daily routine, encourage habits, and organize data for personal use.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/ChickenCoop",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
  {
    id: 7,
    title: "Smart Enough Devices",
    elevatorPitch:
      "Protect user network security and data privacy, without sacrificing the convenience of a smart home",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/ChickenCoop",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
  {
    id: 8,
    title: "OBS Game Renamer",
    elevatorPitch:
      "An OBS plugin to allow for more configuration when automatically naming produced clips.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/obs-game-renamer",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
  {
    id: 9,
    title: "Finance Planner",
    elevatorPitch:
      "Tool to assist individuals in financial, visualization, understanding, and planning.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/predictive-budgeting",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
  {
    id: 10,
    title: "Auto-Player",
    elevatorPitch:
      "Essentially a smart-macro. Configurable. Can read certain text on the screen and perform actions in response.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/Auto-Player",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
  {
    id: 11,
    title: "Graduation Cap GIFs",
    elevatorPitch:
      "An LED matrix fixed onto your cap, controlled by a microcontroller, allowing you to upload GIFs from your phone!",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/graduation-cap-leds",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
  {
    id: 12,
    title: "Minecraft Quick Server Environment",
    elevatorPitch:
      "A quick way to setup a dedicated home minecraft server for any version, with optional mods, without the headache.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/MCServer",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
  {
    id: 13,
    title: "Synthetic Garden",
    elevatorPitch:
      "Automate as much of the gardening process as possible. Track data for scientific curiosity.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/agri-scripts",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
  {
    id: 14,
    title: "Matrix Homeserver",
    elevatorPitch:
      "Support Open Source communication platforms that value privacy and autonomy.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/agri-scripts",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
  {
    id: 15,
    title: "Quick Deploy Project Templates",
    elevatorPitch:
      "Prepare the project for various production features from the start, rather than relearn everything later.",
    heroImage: "/img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    githubLink: "https://github.com/SeanDuffie/agri-scripts",
    tags: ["Python", "OpenCV"],
    technologies: [
      {
        category: "Frontend",
        tools: [
          "Astro",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "ReactJS",
          "Svelte",
        ],
      },
    ],
    timeline: [
      {
        phase: "Planning & Design",
        date: "Jan 2024",
        description: "Requirements gathering...",
        status: "completed",
      },
    ],
    challenges: ["Eggs still have to be cleared out daily"],
    outcomes: ["Happy and safe chickens"],
    team: ["Solo"],
  },
];

// Helper to find a project by ID (useful for dynamic routing)
export function getProjectById(id: number | string) {
  return projects.find((p) => p.id === Number(id));
}
