import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-primary uppercase mb-3">{eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-bold">
            <span className="gradient-text">{title}</span>
          </h2>
          <div
            className="mx-auto mt-5 h-[2px] w-20 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
          />
        </motion.div>
        {children}
      </div>
    </section>
  );
}