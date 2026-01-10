import { ReactNode } from "react";

interface TerminalSectionProps {
  command: string;
  children: ReactNode;
  delay?: number;
}

const TerminalSection = ({ command, children, delay = 0 }: TerminalSectionProps) => {
  return (
    <div 
      className="mb-8 opacity-0 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-accent">$</span>
        <span className="text-foreground">{command}</span>
      </div>
      <div className="pl-4 border-l-2 border-border/50">
        {children}
      </div>
    </div>
  );
};

export default TerminalSection;
