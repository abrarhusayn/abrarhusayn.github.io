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
  email: "abrarhusayn@example.com",
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
        degree: "Bachelor of Technology in Computer Science",
        institution: "Technical University",
        period: "2021 — 2025",
        location: "India",
      },
    ] as Education[],
    certifications: [
      {
        name: "Cloud Architecture & Containers",
        issuer: "Linux Foundation / Self-Taught",
        year: "2024",
      },
      {
        name: "Full-Stack Web Development Mastery",
        issuer: "Modern Web Standards",
        year: "2023",
      },
    ] as Certification[],
  },
  skillCategories: [
    {
      category: "Frontend",
      skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
    },
    {
      category: "Backend & Systems",
      skills: ["Node.js", "Bun", "Python", "FastAPI", "PostgreSQL", "Redis", "REST & WebSockets"],
    },
    {
      category: "DevOps & Tooling",
      skills: ["Docker", "Git / GitHub Actions", "Cloudflare", "Linux / VPS", "Turbopack", "CI/CD"],
    },
  ],
  projects: [
    {
      title: "SubAgents Hub",
      tagline: "Curated AI Sub-Agents & MCP Server Registry",
      description:
        "A discovery platform and benchmarking index for autonomous Claude & AI sub-agents and Model Context Protocol servers.",
      metric: "12k+ monthly devs",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
      link: "https://example.com",
      github: "https://github.com/abrarhusayn",
      year: "2026",
      featured: true,
    },
    {
      title: "ClipForge AI",
      tagline: "Automated Video Clip & Transcription Pipeline",
      description:
        "High-throughput media processing engine combining local Whisper transcription, LLM highlight extraction, and Remotion video rendering.",
      metric: "85% faster render",
      tech: ["TypeScript", "Bun", "Whisper", "FFmpeg", "Remotion"],
      link: "https://example.com",
      github: "https://github.com/abrarhusayn",
      year: "2025",
      featured: true,
    },
    {
      title: "is-a.software",
      tagline: "GitOps Automated Subdomain Registry",
      description:
        "Free developer subdomains powered by GitHub Actions pipeline and Cloudflare DNS automation when PRs merge.",
      metric: "500+ active domains",
      tech: ["Next.js", "GitHub Actions", "Cloudflare DNS", "Docker"],
      link: "https://example.com",
      github: "https://github.com/abrarhusayn",
      year: "2025",
      featured: false,
    },
  ] as Project[],
  experiences: [
    {
      role: "Full-Stack & Applied AI Engineer",
      company: "Independent & Open Source",
      period: "2024 — Present",
      description:
        "Architecting resilient web applications, developer CLI tools, and LLM-powered pipelines.",
      highlights: [
        "Engineered end-to-end full stack web platforms supporting thousands of monthly users.",
        "Created open-source tools and modular sub-agents for developer productivity.",
      ],
      skills: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS"],
    },
    {
      role: "Frontend & Backend Developer",
      company: "Product & Engineering Collaborations",
      period: "2023 — 2024",
      description:
        "Built responsive user interfaces and designed performant REST and WebSocket microservices.",
      highlights: [
        "Achieved 95+ Core Web Vitals performance across mobile and desktop applications.",
        "Streamlined API latency and implemented real-time caching layers with Redis.",
      ],
      skills: ["React", "Node.js", "Redis", "TypeScript", "REST APIs"],
    },
  ] as Experience[],
};
