import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";

const projects = [
  {
    title: "Mirani Fabrication (Business Project)",
    desc: "A portfolio website for a metal fabrication business to showcase products and receive customer inquiries.",
    tech: ["CSS", "JavaScript", "React", "Vite"],
    img: "/projects/mirani-fabrication.jpg",
    link: "https://miranifabrication.netlify.app/",
  },
  {
    title: "CineBook (Hackathon Project)",
    desc: "A full-stack web app for browsing movies, selecting seats, and booking cinema tickets online.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    img: "/projects/cinebook.jpg",
    link: "",
  },
  {
    title: "DentalCare (Internship Project)",
    desc: "A dental clinic website where patients can explore services, meet the team, check open hours, and book appointments.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
    img: "/projects/dentalcare.jpg",
    link: "https://dental-care-bymk.netlify.app/",
  },
  {
    title: "ResumeAI (Final Year Project)",
    desc: "A full-stack SaaS platform where candidates build, customize, and export AI-assisted resumes while recruiters manage job postings.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    img: "/projects/resumeai.jpg",
    link: "https://resume-ai-bymk.netlify.app/",
  },
  {
    title: "EduVault",
    desc: "A secure portal for students to access Diploma Semester 5 study materials.",
    tech: ["React", "Vite", "Node.js", "MongoDB"],
    img: "/projects/eduvault.jpg",
    link: "https://sem5materialsbymk.netlify.app/",
  },
  {
    title: "DDECT MCQs Hub",
    desc: "A fast, responsive MCQ practice platform for DDECT 2026 exam preparation.",
    tech: ["CSS", "JavaScript", "Python"],
    img: "/projects/ddect-mcqs-hub.jpg",
    link: "https://ddcetquizhub.netlify.app/",
  },
  {
    title: "My Portfolio (Personal Project)",
    desc: "A futuristic personal portfolio showcasing the skills, projects, and certificates of a Diploma IT student and frontend developer.",
    tech: ["JavaScript", "React", "Vite", "Tailwind CSS", "Radix UI"],
    img: "/projects/personal-portfolio.jpg",
    link: "",
  },
  {
    title: "SmartResume AI (UI Only)",
    desc: "An AI-powered platform that helps candidates build resumes and connects them with recruiters through smart job matching and insights.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    img: "/projects/smartresume-ai.jpg",
    link: "https://smart-resume-ui.netlify.app/",
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 4);
  return (
    <Section id="projects" eyebrow="Things I've built" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-7">
        <AnimatePresence initial={false}>
        {visible.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i < 4 ? i * 0.1 : (i - 4) * 0.08 }}
            className="group relative glass rounded-3xl overflow-hidden hover:border-primary/60 transition-all"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg, oklch(0.78 0.17 200 / 0.15), oklch(0.62 0.22 300 / 0.15))" }}
            />
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                width={1024}
                height={640}
                loading="lazy"
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            </div>
            <div className="relative p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full glass border-primary/30 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={p.link || "#"}
                  target={p.link ? "_blank" : undefined}
                  rel={p.link ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-12">
        <motion.button
          onClick={() => setShowAll((v) => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-2 rounded-full p-[1.5px] overflow-hidden"
          style={{ background: "linear-gradient(135deg, oklch(0.78 0.17 200), oklch(0.62 0.22 300))" }}
        >
          <span className="relative inline-flex items-center gap-2 rounded-full bg-background px-7 py-3 text-sm font-semibold text-foreground transition-colors group-hover:bg-background/70">
            {showAll ? "Show Less" : "View More"}
            <motion.span
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex"
            >
              <ChevronDown size={16} className="text-primary" />
            </motion.span>
          </span>
        </motion.button>
      </div>
    </Section>
  );
}