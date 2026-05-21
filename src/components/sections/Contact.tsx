import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Code2, Send, CheckCircle2, AlertCircle } from "lucide-react";

import emailjs from "@emailjs/browser";
import { SectionTitle } from "./SectionTitle";

const EMAILJS_SERVICE_ID = "service_o40seyr";
const EMAILJS_TEMPLATE_ID = "template_nynwr09";
const EMAILJS_PUBLIC_KEY = "6dAMTqU4nl__pcIOP";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("sent");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Get In Touch" title="Let's Build Something" subtitle="Have a project in mind or just want to say hi? My inbox is open." />
        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <a href="mailto:mvswathika@gmail.com" className="glass hover-glow flex items-center gap-4 rounded-2xl p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium">mvswathika@gmail.com</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/swathika-m-459247259/" target="_blank" rel="noreferrer"
              className="glass hover-glow flex items-center gap-4 rounded-2xl p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
                <Linkedin className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-sm font-medium">@swathika-m</div>
              </div>
            </a>
            <a href="https://github.com/Swathika-1804" target="_blank" rel="noreferrer"
              className="glass hover-glow flex items-center gap-4 rounded-2xl p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
                <Github className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="text-sm font-medium">@Swathika-1804</div>
              </div>
            </a>
            <a href="https://leetcode.com/u/swathikam04/" target="_blank" rel="noreferrer"
              className="glass hover-glow flex items-center gap-4 rounded-2xl p-5">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">LeetCode</div>
                <div className="text-sm font-medium">@swathikam04</div>
              </div>
            </a>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass lg:col-span-3 space-y-4 rounded-3xl p-8"
          >
            <Field name="name" label="Your Name" placeholder="Jane Doe" />
            <Field name="email" type="email" label="Email" placeholder="you@example.com" />
            <Field name="message" label="Message" placeholder="Tell me about your idea…" textarea />
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-hero inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send Message"}
            </button>
            {status === "sent" && (
              <div className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 className="h-4 w-4" /> Thanks! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-rose-400">
                <AlertCircle className="h-4 w-4" /> Something went wrong. Please email me directly.
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, type = "text", textarea = false }: { name: string; label: string; placeholder: string; type?: string; textarea?: boolean }) {
  const base =
    "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all outline-none focus:border-[color:var(--neon-purple)] focus:bg-white/[0.07] focus:shadow-[0_0_24px_color-mix(in_oklab,var(--neon-purple)_35%,transparent)]";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea required name={name} placeholder={placeholder} rows={5} className={base} />
      ) : (
        <input required name={name} type={type} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}
