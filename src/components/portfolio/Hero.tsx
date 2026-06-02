import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const roles = ["Diploma IT Student", "Frontend Developer", "React Developer", "Web Designer"];

function Typing() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = roles[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, del ? 40 : 90);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return (
    <span className="gradient-text">
      {text}
      <span className="inline-block w-[2px] h-7 align-middle ml-1 bg-primary animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.4em] text-primary uppercase mb-6"
        >
          Welcome to my portfolio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6"
        >
          Hi, I'm <span className="gradient-text">Mohammad Kumail</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-3xl font-medium mb-6 h-10"
        >
          <Typing />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10"
        >
          I create modern, responsive and visually attractive web experiences with clean UI and smooth user experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-neon)" }}
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3 text-sm font-semibold text-foreground hover:border-primary/60 transition-all"
          >
            <Download size={16} /> Download Resume
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-5"
        >
          {[
            { Icon: Github, href: "https://github.com/kumail-92" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-kumail-momin-4b58b7356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { Icon: Instagram, href: "https://www.instagram.com/kumail_tech?igsh=eGI2Z2pka29ia21z" },
            {
              Icon: WhatsAppIcon,
              href:
                "https://wa.me/9054013492?text=Hi%20Mohammad%20Kumail%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you.",
            },
            { Icon: Mail, href: "#contact" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="glass rounded-full p-3 text-foreground/70 hover:text-primary hover:scale-110 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-10 inline-flex justify-center text-muted-foreground"
          aria-label="Scroll"
        >
          <ArrowDown size={22} />
        </motion.a>
      </div>
    </section>
  );
}