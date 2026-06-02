import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%", background: "var(--gradient-primary)" }}
      className="fixed top-0 left-0 right-0 h-[3px] z-[60]"
    />
  );
}