import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const items = [
  {
    icon: GraduationCap,
    title: "B.E Computer Science and Design",
    place: "Kongu Engineering College",
    metricLabel: "CGPA",
    metric: "7.57",
  },
  {
    icon: School,
    title: "HSC — Higher Secondary",
    place: "Navarasam Matric. Hr. Sec. School",
    metricLabel: "Percentage",
    metric: "79.83%",
  },
  {
    icon: BookOpen,
    title: "SSLC — Secondary School",
    place: "Navarasam Matric. Hr. Sec. School",
    metricLabel: "Percentage",
    metric: "98.2%",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle eyebrow="Academics" title="Education" />
        <div className="space-y-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass hover-glow relative overflow-hidden rounded-3xl p-6 sm:p-8"
            >
              <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, var(--neon-purple), transparent 70%)" }} />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl glow-purple"
                  style={{ background: "var(--gradient-hero)" }}>
                  <it.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gradient">{it.title}</h3>
                  <p className="mt-1 text-base text-foreground/90">{it.place}</p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm">
                    <span className="text-muted-foreground">{it.metricLabel}</span>
                    <span className="font-bold text-gradient text-base">{it.metric}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
