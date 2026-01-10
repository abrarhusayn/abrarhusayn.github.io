import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string;
  delay?: number;
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
}

const TypingText = ({ 
  text, 
  delay = 50, 
  onComplete, 
  className = "",
  showCursor = true 
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsComplete(true);
        onComplete?.();
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isComplete && <span className="typing-cursor" />}
    </span>
  );
};

export default TypingText;
