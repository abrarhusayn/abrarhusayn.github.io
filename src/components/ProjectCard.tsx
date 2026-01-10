import { ExternalLink, Github, Folder } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, tech, github, live, delay = 0 }: ProjectCardProps) => {
  return (
    <div 
      className="terminal-border p-4 mb-3 opacity-0 animate-fadeIn hover:border-primary/50 transition-colors rounded-md"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Folder className="w-4 h-4 text-terminal-orange" />
          <span className="text-primary font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {live && (
            <a 
              href={live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-muted-foreground text-sm mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span 
            key={i}
            className="text-xs px-2 py-0.5 bg-muted text-foreground rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
