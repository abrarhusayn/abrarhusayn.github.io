import { useState, useEffect } from "react";

const asciiArt =`  ▄▄▄▄   ▄▄                        ▄▄▄   ▄▄▄                                   
▄██▀▀██▄ ██                        ███   ███                         ▀▀        
███  ███ ████▄ ████▄  ▀▀█▄ ████▄   █████████ ██ ██ ▄█▀▀▀ ▄█▀▀▀  ▀▀█▄ ██  ████▄ 
███▀▀███ ██ ██ ██ ▀▀ ▄█▀██ ██ ▀▀   ███▀▀▀███ ██ ██ ▀███▄ ▀███▄ ▄█▀██ ██  ██ ██ 
███  ███ ████▀ ██    ▀█▄██ ██      ███   ███ ▀██▀█ ▄▄▄█▀ ▄▄▄█▀ ▀█▄██ ██▄ ██ ██ `

const TerminalHeader = () => {
  const [showAscii, setShowAscii] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAscii(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4 px-3 py-2 bg-muted rounded-t-md border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-terminal-orange/70" />
          <div className="w-3 h-3 rounded-full bg-terminal-green/70" />
        </div>
        <span className="text-xs text-muted-foreground ml-2">~/portfolio — @abrarhusayn</span>
      </div>
      <div className="text-muted-foreground text-xs mb-4">
        Last login: {new Date().toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })} on ttys001
      </div>
      {showAscii && (
        <pre className="ascii-art text-primary overflow-x-auto mb-4">
          {asciiArt}
        </pre>
      )}
      <p className="text-sm text-muted-foreground">
        Welcome to my portfolio. Type <span className="text-primary">help</span> for available commands.
      </p>
    </div>
  );
};

export default TerminalHeader;
