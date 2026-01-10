import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "m.abrarhusayn@gmail.com", href: "mailto:m.abrarhusayn@gmail.com" },
  { icon: Github, label: "GitHub", value: "github.com/abrarhusayn", href: "https://github.com/abrarhusayn" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abrarhusayn", href: "https://linkedin.com/in/abrarhusayn" },
  { icon: Twitter, label: "Twitter", value: "@_abrarhusayn", href: "https://twitter.com/_abrarhusayn" },
];

const ContactInfo = () => {
  return (
    <div className="space-y-3">
      {contacts.map((contact, index) => (
        <a
          key={contact.label}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors opacity-0 animate-fadeIn group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <contact.icon className="w-4 h-4 text-secondary group-hover:text-primary transition-colors" />
          <span className="w-20">{contact.label}:</span>
          <span className="text-primary terminal-glow">{contact.value}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;
