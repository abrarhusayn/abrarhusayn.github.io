"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DATA } from "@/data/portfolioData";
import { soundFx } from "@/lib/sound";
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
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeTab, setActiveTab] = useState<"projects" | "experience" | "resume">("projects");
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
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#ffffff", "#888888", "#38bdf8", "#f97316"],
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Precision Header & Status */}
      <motion.header
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {/* Top bar with Availability & Sound */}
        <div className="flex items-center justify-between font-mono text-xs text-neutral-400">
          <div className="flex items-center gap-2 text-white font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{DATA.status}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleSound}
              className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-neutral-400 hover:border-neutral-700 hover:text-white transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3 text-emerald-400" />}
              <span>{isMuted ? "Muted" : "Sound"}</span>
            </button>
          </div>
        </div>

        {/* Hero Section: Centered on mobile, aligned on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          
          {/* Photo: Compact, Centered on mobile (order-1), Right-aligned on desktop (order-2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onClick={() => soundFx.playClick()}
            className="order-1 md:order-2 shrink-0 relative group cursor-pointer flex justify-center w-full md:w-auto"
          >
            {/* Ambient Glow Aura */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-500/20 via-sky-500/20 to-emerald-500/20 blur-md group-hover:blur-lg transition-all duration-500 opacity-70 group-hover:opacity-100" />

            <div className="relative w-40 sm:w-44 md:w-48 aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl flex items-center justify-center">
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

          {/* Text & Actions Column: Mobile Centered (text-center), Desktop Left-aligned (md:text-left) */}
          <div className="order-2 md:order-1 flex-1 space-y-4 text-center md:text-left">
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

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal pt-1 max-w-xl mx-auto md:mx-0">
              {DATA.about}
            </p>

            {/* Action / Social Bar: Centered on mobile, left on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-2 font-mono text-xs"
            >
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 rounded-lg bg-white text-black px-3.5 py-2 font-medium hover:bg-neutral-200 transition-all cursor-pointer shadow-sm active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Copied {DATA.email}</span>
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
                className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-neutral-300 hover:border-neutral-700 hover:text-white transition-all active:scale-95"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3 text-neutral-500" />
              </a>

              <a
                href={DATA.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-neutral-300 hover:border-neutral-700 hover:text-white transition-all active:scale-95"
              >
                <span>Twitter</span>
                <ArrowUpRight className="h-3 w-3 text-neutral-500" />
              </a>

              <a
                href={DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-neutral-300 hover:border-neutral-700 hover:text-white transition-all active:scale-95"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3 text-neutral-500" />
              </a>
            </motion.div>
          </div>

        </div>
      </motion.header>

      {/* Razor Tab Switcher */}
      <div className="flex items-center border-b border-neutral-900 font-mono text-xs overflow-x-auto scrollbar-none">
        {[
          { key: "projects", label: "Projects", count: DATA.projects.length },
          { key: "experience", label: "Experience", count: DATA.experiences.length },
          { key: "resume", label: "Resume & Education", count: "PDF" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              soundFx.playClick();
              setActiveTab(tab.key as "projects" | "experience" | "resume");
            }}
            className={`relative pb-3 pr-6 font-medium transition-colors cursor-pointer flex items-center gap-2 shrink-0 ${
              activeTab === tab.key ? "text-white" : "text-neutral-500 hover:text-neutral-300"
            }`}
          >
            <span>{tab.label}</span>
            <span className="rounded bg-neutral-900 px-1.5 py-0.5 text-[10px] text-neutral-400">
              {tab.count}
            </span>
            {activeTab === tab.key && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-6 h-0.5 bg-white"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
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
            className="space-y-4"
          >
            {DATA.projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                whileHover={{ y: -2 }}
                className="group rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-5 transition-all hover:border-neutral-700 hover:bg-neutral-900/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-base font-semibold text-white group-hover:text-neutral-200 transition-colors">
                        {project.title}
                      </h3>
                      {project.metric && (
                        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                          {project.metric}
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-neutral-400">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs shrink-0">
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

                <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-neutral-900">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] text-neutral-400 bg-neutral-900/90 px-2 py-0.5 rounded border border-neutral-800/60"
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
            className="space-y-12"
          >
            {/* Work History */}
            <section className="space-y-4">
              {DATA.experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-5 space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{exp.role}</h3>
                      <div className="font-mono text-xs text-neutral-400">{exp.company}</div>
                    </div>
                    <span className="font-mono text-xs text-neutral-500">{exp.period}</span>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed">
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
            <section className="space-y-4">
              <h2 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Technical Capabilities
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
                          className="font-mono text-[11px] text-neutral-400 bg-neutral-900/60 px-2 py-0.5 rounded border border-neutral-800/40"
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

        {/* Tab 3: Interactive Resume */}
        {activeTab === "resume" && (
          <motion.section
            key="resume"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div className="rounded-xl border border-neutral-800/80 bg-neutral-950/60 p-6 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                    Summary
                  </span>
                  <p className="text-sm text-neutral-300 mt-2 leading-relaxed max-w-xl">
                    {DATA.resume.summary}
                  </p>
                </div>

                <a
                  href={DATA.resume.downloadUrl}
                  onClick={() => soundFx.playSuccess()}
                  className="flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-white text-black px-3.5 py-1.5 font-mono text-xs font-medium hover:bg-neutral-200 transition-all shrink-0 active:scale-95"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>PDF</span>
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
                      <div className="text-sm font-medium text-white">{edu.degree}</div>
                      <div className="font-mono text-xs text-neutral-400">{edu.institution}</div>
                      <div className="font-mono text-[11px] text-neutral-500">
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
                        className="flex items-center justify-between font-mono text-xs"
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
      </AnimatePresence>

      {/* Razor Footer */}
      <footer className="pt-8 border-t border-neutral-900 flex items-center justify-between font-mono text-xs text-neutral-500">
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
