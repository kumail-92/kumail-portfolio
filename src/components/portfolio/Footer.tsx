import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-10 px-6">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-8 items-center">
        <div>
          <p className="text-2xl font-bold gradient-text">MK</p>
          <p className="text-xs text-muted-foreground mt-1">Crafting digital experiences.</p>
        </div>
        <ul className="flex flex-wrap justify-center gap-5">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex md:justify-end gap-3">
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
            <a key={i} href={href} className="glass rounded-full p-2.5 hover:text-primary transition-all">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">
        © {new Date().getFullYear()} Mohammad Kumail. Built with React, Tailwind & Framer Motion.
      </p>
    </footer>
  );
}