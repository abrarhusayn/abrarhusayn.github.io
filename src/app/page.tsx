"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DATA } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/SocialIcons";
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Volume2,
  VolumeX,
  Download,
  GraduationCap,
  Award,
  User,
  BookOpen,
  Layers,
  Briefcase,
  FileText,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "experience" | "resume" | "blogs">("projects");
  const [imgError, setImgError] = useState(false);

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
  };

  const copyEmail = () => {
    soundFx.playSuccess();
    navigator.clipboard.writeText(DATA.email);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#ffffff", "#888888", "#38bdf8", "#f97316"],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { key: "projects" as const, label: "Projects", icon: Layers, count: DATA.projects.length },
    { key: "experience" as const, label: "Experience", icon: Briefcase, count: DATA.experiences.length },
    { key: "resume" as const, label: "Resume", icon: FileText, count: "PDF" },
    { key: "blogs" as const, label: "Blogs", icon: BookOpen, count: "Soon" },
  ];

  return (
    <div className="w-full space-y-8 sm:space-y-14 pb-8">
      {/* Precision Header & Status */}
      <motion.header
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full space-y-6"
      >
        {/* Top bar with SVG Logo, Availability & Sound */}
        <div className="flex items-center justify-between font-mono text-xs text-neutral-400 w-full">
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Clean SVG Logo Emblem */}
            <a
              href="#"
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-2 text-white font-medium group"
            >
              <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
                <img src="/logo.svg" alt="Abrar Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-bold text-xs sm:text-sm tracking-tight text-white group-hover:text-neutral-200">
                {DATA.username}
                <span className="text-neutral-500 font-normal">/dev</span>
              </span>
            </a>

            {/* Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-neutral-800 text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px]">{DATA.status}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-neutral-400 hover:border-neutral-700 hover:text-white transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3 text-emerald-400" />}
              <span className="hidden sm:inline">{isMuted ? "Muted" : "Sound"}</span>
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 w-full">
          
          {/* Photo: Compact, Centered on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onClick={() => soundFx.playClick()}
            className="order-1 md:order-2 shrink-0 relative group cursor-pointer flex justify-center w-full md:w-auto"
          >
            {/* Ambient Glow Aura */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500/20 via-sky-500/20 to-emerald-500/20 blur-md group-hover:blur-lg transition-all duration-500 opacity-70 group-hover:opacity-100" />

            <div className="relative w-36 sm:w-44 md:w-48 aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl flex items-center justify-center">
              {!imgError && DATA.avatarUrl ? (
                <img
                  src={DATA.avatarUrl}
                  alt={DATA.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black flex flex-col items-center justify-center p-4 text-center select-none">
                  <User className="h-8 w-8 text-neutral-600 mb-1" />
                  <span className="font-mono font-bold text-xs text-neutral-300 tracking-wider">
                    {DATA.name.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 mt-0.5">
                    /public/abrar.jpg
                  </span>
                </div>
              )}

              {/* Status Indicator on Image */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between font-mono text-[10px] pointer-events-none z-10">
                <div className="flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-full border border-neutral-800 text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{DATA.name}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text & Actions Column */}
          <div className="order-2 md:order-1 flex-1 space-y-3 sm:space-y-4 text-center md:text-left w-full">
            <motion.h1
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Hi, I&apos;m {DATA.name}.
            </motion.h1>

            <p className="font-mono text-xs sm:text-sm text-neutral-400">
              {DATA.title} &middot; {DATA.location}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-normal pt-1 max-w-xl mx-auto md:mx-0">
              {DATA.about}
            </p>

            {/* Action / Social Bar with Clean Icons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2 font-mono text-xs"
            >
              <button
                onClick={copyEmail}
                className="flex items-center gap-1.5 rounded-lg bg-white text-black px-3.5 py-2 font-medium hover:bg-neutral-200 transition-all cursor-pointer shadow-sm active:scale-95 text-xs"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                aria-label="GitHub"
                className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-neutral-300 hover:border-neutral-700 hover:text-white transition-all active:scale-95"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              <a
                href={DATA.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                aria-label="Twitter"
                className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-neutral-300 hover:border-neutral-700 hover:text-white transition-all active:scale-95"
              >
                <TwitterIcon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Twitter</span>
              </a>

              <a
                href={DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                aria-label="LinkedIn"
                className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-neutral-300 hover:border-neutral-700 hover:text-white transition-all active:scale-95"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </motion.div>
          </div>

        </div>
      </motion.header>

      {/* Modern Sticky Navigation Tab Bar (Icon-Only on Mobile, Full on Desktop, Solid Top Pin) */}
      <div className="sticky top-0 z-50 w-full bg-black/95 backdrop-blur-md border-b border-neutral-900 font-mono text-xs pt-3 pb-0 -mt-2">
        <div className="grid grid-cols-4 sm:flex sm:items-center w-full gap-1 sm:gap-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(tab.key);
                }}
                aria-label={tab.label}
                className={`relative pb-3.5 pt-1.5 flex items-center justify-center sm:justify-start gap-2 font-medium transition-colors cursor-pointer w-full sm:w-auto ${
                  activeTab === tab.key ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline text-xs">{tab.label}</span>
                </div>
                <span
                  className={`hidden sm:inline-block rounded px-1.5 py-0.5 text-[10px] ${
                    tab.key === "blogs"
                      ? "bg-orange-500/10 text-orange-400 border border-orange-500/20"
                      : "bg-neutral-900 text-neutral-400"
                  }`}
                >
                  {tab.count}
                </span>
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content with Smooth Transitions */}
      <AnimatePresence mode="wait">
        {/* Tab 1: Selected Projects */}
        {activeTab === "projects" && (
          <motion.section
            key="projects"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-4 w-full"
          >
            {DATA.projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                whileHover={{ y: -2 }}
                className="group rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-4 sm:p-5 transition-all hover:border-neutral-700 hover:bg-neutral-900/40 w-full"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 w-full">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-white group-hover:text-neutral-200 transition-colors">
                        {project.title}
                      </h3>
                      {project.metric && (
                        <span className="font-mono text-[9px] sm:text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                          {project.metric}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-neutral-400">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs shrink-0 pt-1 sm:pt-0">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFx.playClick()}
                        className="text-white hover:text-neutral-300 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Live</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFx.playClick()}
                        className="text-neutral-400 hover:text-white inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Code</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 mt-2.5 sm:mt-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3 sm:mt-4 pt-3 border-t border-neutral-900">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] sm:text-[11px] text-neutral-400 bg-neutral-900/90 px-2 py-0.5 rounded border border-neutral-800/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.section>
        )}

        {/* Tab 2: Work Experience & Stack */}
        {activeTab === "experience" && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-8 sm:space-y-12 w-full"
          >
            {/* Work History */}
            <section className="space-y-4 w-full">
              {DATA.experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-4 sm:p-5 space-y-2.5 sm:space-y-3 w-full"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                      <div className="font-mono text-xs text-neutral-400">{exp.company}</div>
                    </div>
                    <span className="font-mono text-[11px] sm:text-xs text-neutral-500">{exp.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.highlights && (
                    <ul className="space-y-1 text-xs text-neutral-400 pt-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-neutral-600 font-mono">/</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-neutral-900">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="font-mono text-[10px] text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </section>

            {/* Technical Tooling Grid */}
            <section className="space-y-4 w-full">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Technical Capabilities
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
                {DATA.skillCategories.map((group) => (
                  <div
                    key={group.category}
                    className="rounded-xl border border-neutral-800/60 bg-neutral-950/40 p-4 space-y-2.5"
                  >
                    <div className="font-mono text-xs font-medium text-neutral-300 border-b border-neutral-900 pb-2">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-[10px] sm:text-[11px] text-neutral-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-neutral-800/40"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {/* Tab 3: Interactive Resume & Education */}
        {activeTab === "resume" && (
          <motion.section
            key="resume"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-6 w-full"
          >
            <div className="rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-5 sm:p-6 space-y-6 w-full">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                    Summary
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed max-w-xl">
                    {DATA.resume.summary}
                  </p>
                </div>

                <a
                  href={DATA.resume.pdfUrl}
                  download="abrar_resume.pdf"
                  onClick={() => soundFx.playSuccess()}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-neutral-700 bg-white text-black px-3.5 py-1.5 font-mono text-xs font-medium hover:bg-neutral-200 transition-all shrink-0 active:scale-95 shadow-sm w-fit"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-900">
                {/* Education */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    <GraduationCap className="h-4 w-4 text-neutral-400" />
                    <span>Education</span>
                  </div>
                  {DATA.resume.education.map((edu) => (
                    <div key={edu.degree} className="space-y-0.5">
                      <div className="text-xs sm:text-sm font-medium text-white">{edu.degree}</div>
                      <div className="font-mono text-xs text-neutral-400">{edu.institution}</div>
                      <div className="font-mono text-[10px] sm:text-[11px] text-neutral-500">
                        {edu.period} &middot; {edu.location}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                    <Award className="h-4 w-4 text-neutral-400" />
                    <span>Certifications &amp; Focus</span>
                  </div>
                  <div className="space-y-2">
                    {DATA.resume.certifications.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex items-center justify-between font-mono text-[11px] sm:text-xs"
                      >
                        <span className="text-neutral-300">{cert.name}</span>
                        <span className="text-neutral-500">{cert.year}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Tab 4: Blogs (Coming Soon) */}
        {activeTab === "blogs" && (
          <motion.section
            key="blogs"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-8 sm:p-12 text-center space-y-4 w-full"
          >
            <div className="inline-flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 mb-1 sm:mb-2">
              <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <div className="space-y-1.5 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-semibold text-white">
                <span>Technical Writing &amp; Notes</span>
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              </div>
              <p className="text-xs sm:text-sm text-neutral-400">
                Articles on Next.js architectures, distributed backends, self-hosting, and AI tooling are coming soon...
              </p>
            </div>

            <div className="pt-2 font-mono text-[11px] sm:text-xs text-neutral-500">
              Stay tuned &middot; Check back soon
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Razor Footer */}
      <footer className="pt-6 sm:pt-8 border-t border-neutral-900 flex items-center justify-between font-mono text-[11px] sm:text-xs text-neutral-500 w-full">
        <div>
          © {new Date().getFullYear()} {DATA.name} &middot; Precision Engineering
        </div>

        <button
          onClick={() => {
            soundFx.playClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="hover:text-neutral-300 transition-colors cursor-pointer"
        >
          top ↑
        </button>
      </footer>
    </div>
  );
}
