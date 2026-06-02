import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";
import { Section } from "./Section";

// Order top -> bottom: Degree (top), Diploma (middle), School (bottom)
const items = [
  {
    Icon: GraduationCap,
    title: "Bachelor's Degree in Information Technology",
    place: "University — Upcoming",
    year: "2026 — 2029",
    desc: "Planned degree to deepen expertise in software engineering, full-stack development and modern computing.",
  },
  {
    Icon: BookOpen,
    title: "Diploma in Information Technology",
    place: "Government Polytechnic College",
    year: "2023 — 2026",
    desc: "Specializing in web development, software engineering and modern programming practices.",
  },
  {
    Icon: School,
    title: "School (1st to 10th)",
    place: "City Public High School",
    year: "2013 — 2023",
    desc: "Completed schooling with distinction in mathematics and computer science.",
  },
];

export function Education() {
  return (
    <Section id="education" eyebrow="My journey" title="Education">
      <div className="relative max-w-3xl mx-auto">
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-[1px]"
          style={{ background: "linear-gradient(180deg, transparent, oklch(0.78 0.17 200), oklch(0.62 0.22 300), transparent)" }}
        />
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative mb-10 md:flex md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="md:w-1/2 pl-12 md:pl-0 md:px-8">
              <div className="glass rounded-2xl p-6 hover:border-primary/60 transition-all">
                <span className="text-xs text-primary font-semibold tracking-wider">{it.year}</span>
                <h3 className="text-lg font-bold mt-1">{it.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{it.place}</p>
                <p className="text-sm text-foreground/70 mt-3 leading-relaxed">{it.desc}</p>
              </div>
            </div>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-neon)" }}
              >
                <it.Icon size={16} className="text-background" />
              </div>
            </div>
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}