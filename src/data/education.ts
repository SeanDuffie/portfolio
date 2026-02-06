export interface Education {
  id: number;
  startYear: number;
  startMonth: number;
  startDay?: number;
  endYear?: number;
  endMonth?: number;
  endDay?: number;
  city?: string;
  state?: string;
  schoolName: string;
  degreeType: string;
  degreeName: string;
  minors?: string[];
  gpa?: number;
  description: string;
  notableClasses: string[];
  notableProjects: string[];
  skills: string[];
}

export const education: Education[] = [
  {
    id: 2,
    startYear: 2025,
    startMonth: 8,
    endYear: 2027,
    endMonth: 5,
    city: "Atlanta",
    state: "GA",
    schoolName: "Georgia Institute of Technology",
    degreeType: "Master of Science",
    degreeName: "Computer Science",
    gpa: 4.0,
    description:
      "Studying for my Master of Computer Science degree with a focus in Interactive Intelligence.",
    notableClasses: ["Video Game Design", "Game AI", "Robotics: AI Techniques"],
    notableProjects: [
      "Robotic Self Driving Car",
      "Short Video Game in Unity",
      "Retirement Planning Website Tool",
    ],
    skills: [],
  },{
    id: 1,
    startYear: 2018,
    startMonth: 8,
    endYear: 2023,
    endMonth: 5,
    city: "College Station",
    state: "TX",
    schoolName: "Texas A&M University",
    degreeType: "Bachelor of Science",
    degreeName: "Electronic Systems",
    minors: ["Computer Science", "Cybersecurity"],
    description:
      "Studied for my Bachelor of Science in Computer Science degree.",
    notableClasses: ["Video Game Design", "Game AI", "Robotics: AI Techniques"],
    notableProjects: [
      "Yagi Antenna Design",
      "Capstone: Budget-friendly Storm Monitoring System",
      "Retirement Planning Website Tool",
    ],
    skills: [],
  },
];