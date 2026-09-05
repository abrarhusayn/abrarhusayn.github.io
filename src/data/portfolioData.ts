export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  year: string;
  featured?: boolean;
  metric?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const DATA = {
  name: "Abrar",
  handle: "@abrarhusayn",
  username: "abrarhusayn",
  title: "Software Engineer",
  location: "India • Remote Worldwide",
  avatarUrl: "/abrar.jpg",
  status: "Available for Q2 Projects & Full-time Roles",
  about:
    "I’m a backend developer specializing in Java, Spring Boot, Node.js, and Express.js. I build scalable, high-performance, and optimized backend solutions with a focus on clean architecture, reliability, and maintainability.",
  email: "m.abrarhusayn@gmail.com",
  socials: {
    github: "https://github.com/abrarhusayn",
    twitter: "https://x.com/abrarhusayn",
    linkedin: "https://linkedin.com/in/abrarhusayn",
  },
  resume: {
    pdfUrl: "/resume.pdf", // Reads directly from public/resume.pdf
    summary:
      "Full-stack engineer with hands-on experience in distributed web services, modern React architectures, and automated media & AI pipelines.",
    education: [
      {
        degree: "Bachelor of Computer Application",
        institution: "Vikram University",
        period: "2022 — 2025",
        location: "Mandsaur, Madhya Pradesh",
      },
      {
        degree: "Master of Computer Application",
        institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
        period: "2025 — Present",
        location: "Indore, India",
      },
    ] as Education[],
    certifications: [
      {
        // name: "Full Stack Developer",
        // issuer: "Udemy",
        // year: "2024",
      },
    ] as Certification[],
  },
  skillCategories: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    },
    {
      category: "Backend & Systems",
      skills: ["Node.js", "Expressjs", "Java", "SpringBoot", "PostgreSQL", "Redis", "REST & WebSockets"],
    },
    {
      category: "DevOps & Tooling",
      skills: ["Docker", "Git / GitHub Actions", "Cloudflare", "Linux / VPS", "Turbopack", "CI/CD"],
    },
  ],
  projects: [
    // {
    //   title: "is-a.software",
    //   tagline: "GitOps Automated Subdomain Registry",
    //   description:
    //     "Free developer subdomains powered by GitHub Actions pipeline and Cloudflare DNS automation when PRs merge.",
    //   metric: "500+ active domains",
    //   tech: ["Next.js", "GitHub Actions", "Cloudflare DNS", "Docker"],
    //   link: "https://example.com",
    //   github: "https://github.com/abrarhusayn",
    //   year: "2025",
    //   featured: false,
    // },
  ] as Project[],
  experiences: [
    // {
    //   role: "Full-Stack & Applied AI Engineer",
    //   company: "Independent & Open Source",
    //   period: "2024 — Present",
    //   description:
    //     "Architecting resilient web applications, developer CLI tools, and LLM-powered pipelines.",
    //   highlights: [
    //     "Engineered end-to-end full stack web platforms supporting thousands of monthly users.",
    //     "Created open-source tools and modular sub-agents for developer productivity.",
    //   ],
    //   skills: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS"],
    // },
  ] as Experience[],
};
