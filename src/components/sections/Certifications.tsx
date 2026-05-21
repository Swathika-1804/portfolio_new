import { motion } from "framer-motion";
import { Award, Cloud, Glasses } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const certs = [
  { title: "MongoDB Associate Developer", issuer: "MongoDB", icon: Award },
  { title: "Oracle Cloud Infrastructure", issuer: "Oracle", icon: Cloud },
  { title: "Metaverse (AR/VR)", issuer: "Specialization", icon: Glasses },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Credentials" title="Certifications" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass hover-glow group relative overflow-hidden rounded-2xl p-6"
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-70"
                style={{ background: "var(--gradient-hero)" }}
              />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: "var(--gradient-hero)" }}>
                  <c.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
