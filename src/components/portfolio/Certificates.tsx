import { motion, AnimatePresence } from "framer-motion";
import { Award, Eye, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";

const certs = [
  { title: "Internship Certificate", provider: "Internship · 2025", file: "internship.pdf" },
  { title: "AMP NTS 2023", provider: "India Level Exam · 2023", file: "amp-nts-2023.pdf" },
  { title: "AINCAT 2025", provider: "India Level Aptitude Exam · 2025", file: "aincat-2025.pdf" },
  { title: "Git & GitHub", provider: "IBM · Coursera · 2025", file: "git-github-ibm.pdf" },
  { title: "JavaScript", provider: "Packt · Coursera · 2025", file: "javascript-packt.pdf" },
  { title: "SQL", provider: "University of Colorado Boulder · Coursera · 2024", file: "sql-uc-boulder.pdf" },
  { title: "HTML CSS JS", provider: "MindLuster · 2025", file: "html-css-js-mindluster.pdf" },
  { title: "Python", provider: "University of Pennsylvania · Coursera · 2024", file: "python-upenn.pdf" },
  { title: "Python", provider: "IBM · Coursera · 2026", file: "python-ibm.pdf" },
  { title: "Prompt Engineering", provider: "IBM · Coursera · 2026", file: "prompt-engineering-ibm.pdf" },
  { title: "Programming with Scratch", provider: "Hong Kong University · Coursera · 2024", file: "scratch-hk.pdf" },
  { title: "Career Edge", provider: "TCS iON · 2025", file: "career-edge-tcs.pdf" },
  { title: "Artificial Intelligence", provider: "Intel · 2025", file: "ai-intel.pdf" },
  { title: "Generative AI", provider: "Oracle University · 2025", file: "gen-ai-oracle.pdf" },
  { title: "AI for Web Development", provider: "Simplilearn · 2025", file: "ai-web-simplilearn.pdf" },
  { title: "Cybersecurity", provider: "Google · Coursera · 2025", file: "cyber-google.pdf" },
  { title: "Cyber Security", provider: "Deloitte · 2025", file: "cyber-deloitte.pdf" },
  { title: "Software Engineering", provider: "JPMorgan · Forage · 2025", file: "swe-jpmorgan.pdf" },
  { title: "Gemini Certified Student", provider: "Google · 2025", file: "gemini-student.pdf" },
  { title: "Gemini", provider: "Google Cloud · 2025", file: "gemini-cloud.pdf" },
  { title: "Interpersonal Skills", provider: "IBM · Coursera · 2024", file: "interpersonal-ibm.pdf" },
  { title: "Soft Skills", provider: "TCS iON · 2025", file: "soft-skills-tcs.pdf" },
  { title: "Agile Project Management", provider: "Google · Coursera · 2025", file: "agile-google.pdf" },
  { title: "Figma", provider: "Udemy · 2025", file: "figma-udemy.pdf" },
  { title: "Data Analysis", provider: "Deloitte · 2025", file: "data-analysis-deloitte.pdf" },
  { title: "Data Analytics", provider: "TATA · Forage · 2025", file: "data-analytics-tata.pdf" },
  { title: "Advanced Excel with AI", provider: "Skillected · 2025", file: "excel-ai-skillected.jpg" },
  { title: "Basic Mathematics", provider: "BITS Pilani · Coursera · 2024", file: "math-bits.pdf" },
  { title: "Data Management", provider: "TCS iON · 2025", file: "data-mgmt-tcs.pdf" },
  { title: "Technology", provider: "Deloitte · 2025", file: "technology-deloitte.pdf" },
];

export function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? certs : certs.slice(0, 6);

  return (
    <Section id="certificates" eyebrow="Achievements" title="Certifications">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence initial={false}>
        {visible.map((c, i) => {
          const isImage = /\.(jpe?g|png|webp|gif)$/i.test(c.file);
          return (
            <motion.div
              key={c.file}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, delay: i < 6 ? i * 0.07 : (i - 6) * 0.04 }}
              className="group relative rounded-2xl p-[1.5px] overflow-hidden"
              style={{ background: "linear-gradient(135deg, oklch(0.78 0.17 200 / 0.5), oklch(0.62 0.22 300 / 0.5))" }}
            >
              <div className="relative rounded-2xl bg-card p-6 h-full flex flex-col">
                <div className="mb-4">
                  {isImage ? (
                    <img
                      src={`/certificates/${c.file}`}
                      alt={c.title}
                      loading="lazy"
                      className="w-full h-44 sm:h-40 md:h-44 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-44 sm:h-40 md:h-44 flex items-center justify-center bg-muted rounded-md">
                      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                        <path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 2v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="8" y="12" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M10 15h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Award size={22} className="text-background" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.provider}</p>
                <a
                  href={`/certificates/${c.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Eye size={14} /> Preview
                  <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          );
        })}
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
