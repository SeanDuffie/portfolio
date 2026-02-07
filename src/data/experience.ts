export interface Experience {
  id: number;
  startYear: number;
  startMonth: number;
  startDay?: number;
  endYear?: number;
  endMonth?: number;
  endDay?: number;
  city: string;
  state: string;
  companyName: string;
  positionName: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const experience: Experience[] = [
  {
    id: 7,
    startYear: 2026,
    startMonth: 8,
    city: "Huntsville",
    state: "AL",
    companyName: "Leidos",
    positionName: "C++ Software Engineer",
    description: "TODO: Description for my current role at Leidos.",
    responsibilities: [
      "Being freaking cool and doing cool stuff with C++ at Leidos.",
    ],
    skills: ["C++", "Embedded Systems"],
  },
  {
    id: 6,
    startYear: 2026,
    startMonth: 2,
    endYear: 2026,
    endMonth: 8,
    city: "Huntsville",
    state: "AL",
    companyName: "Insight Global",
    positionName: "C++ Software Engineer",
    description:
      "Working for Leidos through Insight Global as a contract-to-hire.",
    responsibilities: [
      "Being freaking cool and doing cool stuff with C++ at Leidos.",
    ],
    skills: ["C++", "Embedded Systems"],
  },
  {
    id: 5,
    startYear: 2024,
    startMonth: 9,
    endYear: 2025,
    endMonth: 11,
    city: "Atlanta",
    state: "GA",
    companyName: "GTRI",
    positionName: "Software Research Engineer I",
    description: "",
    responsibilities: [],
    skills: [],
  },
  {
    id: 4,
    startYear: 2024,
    startMonth: 2,
    endYear: 2025,
    endMonth: 11,
    city: "Atlanta",
    state: "GA",
    companyName: "Insight Global",
    positionName: "Software Research Engineer I",
    description:
      "Working for GTRI through Insight Global as a contract-to-hire.",
    responsibilities: [],
    skills: [],
  },
  {
    id: 3,
    startYear: 2023,
    startMonth: 5,
    endYear: 2024,
    endMonth: 1,
    city: "College Station",
    state: "TX",
    companyName: "Lynntech, inc.",
    positionName: "Embedded Software Engineer",
    description: "",
    responsibilities: [],
    skills: [],
  },
  {
    id: 2,
    startYear: 2021,
    startMonth: 9,
    endYear: 2023,
    endMonth: 5,
    city: "College Station",
    state: "TX",
    companyName: "Lynntech, inc.",
    positionName: "Embedded Engineering Technician",
    description: "An ",
    responsibilities: [],
    skills: [],
  },
  {
    id: 1,
    startYear: 2021,
    startMonth: 5,
    endYear: 2021,
    endMonth: 9,
    city: "College Station",
    state: "TX",
    companyName: "12th Man Technologies",
    positionName: "Student Ambassador",
    description:
      "A computer repair store on campus during my undergraduate experience.",
    responsibilities: [
      "Diagnosed and documented issues with laptops that were checked in to us for repair or maintenance.",
    ],
    skills: ["Debugging"],
  },
];
