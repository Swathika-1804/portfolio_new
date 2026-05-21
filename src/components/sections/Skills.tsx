import { motion } from "framer-motion";
import { Palette, Layers, Layout, Server } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const groups = [
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "from-pink-400 to-rose-400",
    desc: "Designing clean, modern, and user-friendly interfaces using Figma with a focus on usability, visual hierarchy, and seamless user experience.",
  },
  {
    title: "Full-Stack Development",
    icon: Layers,
    color: "from-fuchsia-400 to-purple-500",
    desc: "Building scalable web applications with modern frontend and backend technologies, focusing on performance, responsiveness, and functionality.",
  },
  {
    title: "Frontend",
    icon: Layout,
    color: "from-cyan-300 to-blue-400",
    desc: "Developing responsive and interactive user interfaces using React, JavaScript, HTML, and CSS.",
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-blue-400 to-indigo-500",
    desc: "Creating secure APIs and managing databases using Node.js, Express.js, MongoDB, Firebase, and SQL.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Toolkit" title="Skills & Stack" subtitle="What I do and the tools I love to work with." />
        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass hover-glow rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
                  <g.icon className="h-5 w-5 text-white" />
                </div>
                <div className={`bg-gradient-to-r ${g.color} bg-clip-text text-transparent font-display text-xl font-bold`}>
                  {g.title}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{g.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
