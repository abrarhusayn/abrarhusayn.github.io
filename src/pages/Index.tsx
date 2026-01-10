import { useState, useCallback, useRef, useEffect } from "react";
import TerminalHeader from "@/components/TerminalHeader";
import TerminalSection from "@/components/TerminalSection";
import SkillBar from "@/components/SkillBar";
import ProjectCard from "@/components/ProjectCard";
import ContactInfo from "@/components/ContactInfo";
import CommandInput from "@/components/CommandInput";

const skills = [
  { name: "Java", level: 75 },
   { name: "Spring", level: 75},
  { name: "Spring Boot", level: 78 },
  { name: "Hibernate", level: 70 },
  { name: "Javascript", level: 73 },
  { name: "Node.js", level: 70 },
  { name: "React", level: 70 },
  { name: "PostgreSQL", level: 70 },
  { name: "MySQL", level: 80 },
  { name: "SQL", level: 82 },
  { name: "MongoDB", level: 70 },
  { name: "Git/Github", level: 72 },
 
];

const projects = [
  {
    title: "URL Shortner",
    description: "A URL Shortner web app which is used to convert long URL into short one.",
    tech: ["Java", "Servlet", "JSP", "PostgreSQL"],
    github: "https://github.com/abrarhusayn",
    live: "#",
  },
  {
    title: "Ridelo (Rapido Clone)",
    description: "Ridelo (Rapido Clone) a ride booking app like rapdio used to book ride.",
    tech: ["Java", "Servlet", "JSP", "JeoApify", "Mysql"],
    github: "https://github.com/abrarhusayn",
    live: "#",
  }
];

const helpCommands = [
  { cmd: "about", desc: "Display information about me" },
  { cmd: "skills", desc: "Show my technical skills" },
  { cmd: "projects", desc: "List my featured projects" },
  { cmd: "contact", desc: "Get my contact information" },
  { cmd: "all", desc: "Display everything" },
  { cmd: "clear", desc: "Clear the terminal" },
  { cmd: "help", desc: "Show available commands" },
];

type Section = "about" | "skills" | "projects" | "contact";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Section[]>(["about", "skills", "projects", "contact"]);
  const [commandOutput, setCommandOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [visibleSections, commandOutput, scrollToBottom]);

  const handleCommand = useCallback((command: string) => {
    const newOutput = [...commandOutput, `❯ ${command}`];
    
    switch (command) {
      case "about":
        setVisibleSections(["about"]);
        break;
      case "skills":
        setVisibleSections(["skills"]);
        break;
      case "projects":
        setVisibleSections(["projects"]);
        break;
      case "contact":
        setVisibleSections(["contact"]);
        break;
      case "all":
        setVisibleSections(["about", "skills", "projects", "contact"]);
        break;
      case "clear":
        setCommandOutput([]);
        setVisibleSections([]);
        return;
      case "help":
        newOutput.push("");
        newOutput.push("Available commands:");
        helpCommands.forEach(({ cmd, desc }) => {
          newOutput.push(`  ${cmd.padEnd(12)} - ${desc}`);
        });
        newOutput.push("");
        break;
      default:
        newOutput.push(`command not found: ${command}`);
        newOutput.push("type 'help' for available commands");
    }
    
    setCommandOutput(newOutput);
  }, [commandOutput]);

  return (
    <div className="min-h-screen bg-background">
      <div 
        ref={terminalRef}
        className="max-w-4xl mx-auto p-4 md:p-8 min-h-screen overflow-auto"
      >
        <TerminalHeader />
        
        {/* Command history output */}
        {commandOutput.length > 0 && (
          <div className="mb-6 text-sm">
            {commandOutput.map((line, i) => (
              <div key={i} className={line.startsWith("❯") ? "text-primary" : "text-muted-foreground"}>
                {line}
              </div>
            ))}
          </div>
        )}

        {/* About Section */}
        {visibleSections.includes("about") && (
          <TerminalSection command="cat about.md" delay={100}>
            <div className="space-y-3">
              <p className="text-foreground">
                Hello! I'm a <span className="text-accent">Abrar</span>,{" "}<span className="text-primary font-medium">Full Stack Developer</span>{" "}
                with {getExperience()} of experience building scalable web applications.
              </p>
              <p className="text-muted-foreground">
              I am skilled in designing and developing <span className="text-secondary">high-performance, end-to-end systems, </span>{" "} with a strong focus on clean, maintainable code and innovative, scalable solutions.
              </p>
              <p className="text-muted-foreground">
                Currently focused on{" "}
                <span className="text-accent">Building Enterprise Level applications</span>,{" "}
                <span className="text-accent">distributed systems</span>, and{" "}
                <span className="text-accent">AI integration</span>.
              </p>
              <div className="pt-2 text-sm text-muted-foreground">
                📍 Indore, MP  •  🕐 Available for freelance
              </div>
            </div>
          </TerminalSection>
        )}

        {/* Skills Section */}
        {visibleSections.includes("skills") && (
          <TerminalSection command="./skills --verbose" delay={300}>
            <div className="overflow-x-auto">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={400 + index * 100}
                />
              ))}
            </div>
          </TerminalSection>
        )}

        {/* Projects Section */}
        {visibleSections.includes("projects") && (
          <TerminalSection command="ls -la ~/projects" delay={500}>
            <div className="grid gap-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  delay={600 + index * 150}
                />
              ))}
            </div>
          </TerminalSection>
        )}

        {/* Contact Section */}
        {visibleSections.includes("contact") && (
          <TerminalSection command="cat contact.json | jq" delay={700}>
            <ContactInfo />
          </TerminalSection>
        )}

        {/* Command Input */}
        <div className="mt-8 pt-4 border-t border-border">
          <CommandInput onCommand={handleCommand} />
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 text-center text-xs text-muted-foreground border-t border-border/50">
          <p>© {new Date().getFullYear()} | Made with  ❤ by Abrar</p>
        </div>
      </div>
    </div>
  );
};

const getExperience = () => {
  const starting_month = 7;
  const starting_year = 2025;
  const date =  new Date();
  const curr_month = date.getMonth();
  const curr_year = date.getFullYear();
  const yr = curr_year - starting_year;
  const tm = yr * 12 + (12 - starting_month) - (12-curr_month);

  console.log(tm);

  let comDate = "";
  if(tm > 12){
    const m = tm % 12;
    const y = Math.floor(tm / 12);
    if(y > 1 && m > 1){
      comDate = y + " years " + m +" months ";
    }else if(m > 1){
    comDate = y + " year " + m +" months";
    }else if(y > 1){
      comDate = y + " years " + m +" month";
    }else{
      comDate = y + " year " + m +" month ";
    }

  }else{
     comDate =  tm +" months";
  }
  return comDate;
}

getExperience();

export default Index;
