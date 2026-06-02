import { motion } from "framer-motion";
import {
  Code2, Palette, FileCode, Atom, Wind, Database, Github, Terminal, Braces, Zap,
} from "lucide-react";
import { Section } from "./Section";

const skills = [
  { name: "HTML", level: 95, Icon: FileCode, color: "oklch(0.7 0.2 30)" },
  { name: "CSS", level: 92, Icon: Palette, color: "oklch(0.7 0.18 230)" },
  { name: "JavaScript", level: 88, Icon: Braces, color: "oklch(0.85 0.18 90)" },
  { name: "React JS", level: 85, Icon: Atom, color: "oklch(0.78 0.17 200)" },
  { name: "Tailwind CSS", level: 90, Icon: Wind, color: "oklch(0.75 0.15 220)" },
  { name: "PHP", level: 75, Icon: Code2, color: "oklch(0.6 0.18 280)" },
  { name: "MySQL", level: 78, Icon: Database, color: "oklch(0.7 0.15 240)" },
  { name: "GitHub", level: 85, Icon: Github, color: "oklch(0.7 0 0)" },
  { name: "C Programming", level: 70, Icon: Terminal, color: "oklch(0.7 0.1 250)" },
  { name: "Python", level: 75, Icon: Zap, color: "oklch(0.8 0.18 90)" },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="My Skills">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -6, rotate: -1 }}
            className="group glass rounded-2xl p-5 hover:border-primary/60 transition-all relative overflow-hidden"
          >
            <div
              className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"
              style={{ background: s.color }}
            />
            <div className="relative">
              <s.Icon size={32} style={{ color: s.color }} className="mb-3" />
              <h3 className="font-semibold text-foreground mb-2">{s.name}</h3>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{s.level}%</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}