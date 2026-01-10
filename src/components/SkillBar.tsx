interface SkillBarProps {
  name: string;
  level: number;
  delay?: number;
}

const SkillBar = ({ name, level, delay = 0 }: SkillBarProps) => {
  const filled = Math.round(level / 5);
  const empty = 20 - filled;

  return (
    <div 
      className="flex items-center gap-4 mb-2 opacity-0 animate-fadeIn"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="w-28 text-foreground text-sm">{name}</span>
      <span className="text-primary font-mono text-xs">
        [{"▓".repeat(filled)}{"░".repeat(empty)}]
      </span>
      <span className="text-muted-foreground text-xs">{level}%</span>
    </div>
  );
};

export default SkillBar;
