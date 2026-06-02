import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section } from "./Section";
import profile from "@/assets/profile.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n}{suffix}</span>;
}

const stats = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Technologies Learned", value: 10, suffix: "+" },
  { label: "Certifications", value: 6, suffix: "" },
];

export function About() {
  return (
    <Section id="about" eyebrow="Get to know me" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="relative animate-float">
            <div
              className="absolute inset-0 rounded-3xl blur-2xl opacity-60"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative glass rounded-3xl overflow-hidden p-2 neon-border">
              <img
                src={profile}
                alt="Mohammad Kumail"
                width={400}
                height={400}
                loading="lazy"
                className="rounded-2xl w-72 h-72 sm:w-80 sm:h-80 object-cover"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-foreground/80 leading-relaxed mb-5">
            I'm a passionate <span className="text-primary font-semibold">Diploma IT student</span> with a deep love
            for crafting modern web experiences. My journey is fueled by curiosity and a constant drive to build
            things that look great and work even better.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I specialize in React JS, modern UI/UX design, and building responsive websites. I'm always learning
            new technologies and exploring creative ways to bring ideas to life on the web.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 text-center hover:border-primary/50 transition-all">
                <div className="text-3xl font-bold gradient-text mb-1">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-muted-foreground leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}