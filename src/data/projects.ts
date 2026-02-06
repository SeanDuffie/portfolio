export interface Project {
  id: number; // Index of the project
  title: string; // Name of the project
  subtitle: string; // Brief description
  heroImage: string; // The URL of the project hero image (local path or CDN URL)
  description: string; // A more detailed paragraph about the project
  youtubeVideoId?: string; // (Optional) The YouTube video ID to append to the link
  externalLink?: string; // (Optional) A link to a demo or more detailed page
  githubLink?: string; // (Optional) A link to the associated git repo, if open source
  technologies: {
    category: string;
    tools: string[];
  }[];
  timeline: {
    phase: string;
    date: string;
    description: string;
    status: "completed" | "in-progress" | "planned";
  }[];
  challenges: string[];
  outcomes: string[];
  team: string[];
  tags: string[]; // Added this based on your LandingPage.tsx needs
}

export const categories = ['all', 'web-app', 'PCB', 'Image Processing', 'personal'];

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Webpage",
    subtitle:
      "Fast and Responsive website using astro to display my Engineering Portfolio and other career ",
    heroImage: "./img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    youtubeVideoId: "dQw4w9WgXcQ",
    externalLink: "https://astro-portfolio-sean-duffie.vercel.app/",
    githubLink: "https://github.com/SeanDuffie/astro-portfolio",
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
    challenges: ["Learning Astro", "PCI compliance"],
    outcomes: ["Processed 10k orders", "99.9% uptime"],
    team: ["Solo"],
  },
  {
    id: 2,
    title: "Wordle Discord Bot",
    subtitle:
      "Automatic Wordle solver that has an option to integrate into a Discord Server",
    heroImage: "./img/wordle_example.png",
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
    title: "Portfolio Webpage",
    subtitle:
      "Fast and Responsive website using astro to display my Engineering Portfolio and other career ",
    heroImage: "./img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null,
    // externalLink: null,
    // githubLink: null,
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
    title: "Portfolio Webpage",
    subtitle:
      "Fast and Responsive website using astro to display my Engineering Portfolio and other career ",
    heroImage: "./img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    // githubLink: null,
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
    title: "Portfolio Webpage",
    subtitle:
      "Fast and Responsive website using astro to display my Engineering Portfolio and other career ",
    heroImage: "./img/23-05-12_SMD_TAMU_GradPix_035_b_lossy80.webp",
    description: "A comprehensive e-commerce platform built with Next.js...",
    // youtubeVideoId: null, // dQw4w9WgXcQ
    // externalLink: null,
    // githubLink: null,
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
];

// Helper to find a project by ID (useful for dynamic routing)
export function getProjectById(id: number | string) {
  return projects.find((p) => p.id === Number(id));
}
