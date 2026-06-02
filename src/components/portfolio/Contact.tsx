import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";
import { toast } from "sonner";
import { WhatsAppIcon } from "./WhatsAppIcon";

const SOCIALS = [
  { Icon: Github, href: "https://github.com/kumail-92" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-kumail-momin-4b58b7356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { Icon: Instagram, href: "https://www.instagram.com/kumail_tech?igsh=eGI2Z2pka29ia21z" },
  {
    Icon: WhatsAppIcon,
    href:
      "https://wa.me/9054013492?text=Hi%20Mohammad%20Kumail%2C%20I%20visited%20your%20portfolio%20website%20and%20would%20like%20to%20connect%20with%20you.",
  },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/kumailmomin92@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `New portfolio message from ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent!", { description: "Thanks for reaching out — I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Could not send", { description: "Please try again or email me directly." });
    } finally {
      setSending(false);
    }
  };

  const field = "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors";

  return (
    <Section id="contact" eyebrow="Let's connect" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            Have a project in mind, an internship opportunity, or just want to say hi? My inbox is always open.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 glass rounded-xl p-4">
              <div className="p-2 rounded-lg" style={{ background: "var(--gradient-primary)" }}>
                <Mail size={18} className="text-background" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">kumailmomin92@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 glass rounded-xl p-4">
              <div className="p-2 rounded-lg" style={{ background: "var(--gradient-primary)" }}>
                <MapPin size={18} className="text-background" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            {SOCIALS.map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="glass rounded-full p-3 hover:text-primary hover:scale-110 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 space-y-5"
        >
          <input
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={field}
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={field}
          />
          <textarea
            required
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${field} resize-none`}
          />
          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-neon)" }}
          >
            <Send size={16} /> {sending ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}