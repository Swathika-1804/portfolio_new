import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
import agri from "@/assets/project-agrimind.jpg";
import textally from "@/assets/project-textally.jpg";
import plantixx from "@/assets/project-plantixx.jpg";

const projects = [
  {
    title: "AgriMind",
    subtitle: "Smart crop and fertilizer recommendation system using CoT & ToT",
    description:
      "An AI-powered Smart Crop & Fertilizer Recommendation System designed to support sustainable agriculture. AgriMind uses Machine Learning, Chain of Thought (CoT), and Tree of Thought (ToT) reasoning to analyze soil and environmental data for accurate crop prediction and fertilizer recommendations.",
    stack: ["React", "Node.js", "MongoDB", "Gemini API", "CoT & ToT"],
    image: agri,
    link: "https://github.com/Swathika-1804/Agrimind",
    linkLabel: "GitHub",
  },
  {
    title: "Textally",
    subtitle: "Material management system",
    description:
      "A smart inventory and material management platform designed to streamline batch tracking, material monitoring, and wastage calculation processes. Built with a clean and responsive interface to improve operational efficiency, resource management, and real-time workflow tracking.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    image: textally,
    link: "https://github.com/SubhaAnanthi4/cmasons-co",
    linkLabel: "GitHub",
  },
  {
    title: "Plantixx",
    subtitle: "UI/UX Project",
    description:
      "A modern UI/UX design concept for a smart plant health and disease detection platform. Designed in Figma with a focus on clean interfaces, intuitive user experience, and visually engaging dashboards for seamless plant monitoring and care management.",
    stack: ["Figma"],
    image: plantixx,
    link: "https://www.figma.com/design/C3Bx74brViLHfHrtOEKc71/Plantixx-uid?node-id=0-1&t=Sl7P4BWuaSkzHGfE-1",
    linkLabel: "Figma",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle eyebrow="Selected Work" title="Featured Projects" subtitle="A glimpse into things I've designed and built." />
        <div className="space-y-12">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`glass hover-glow group grid gap-8 overflow-hidden rounded-3xl p-8 lg:grid-cols-2 lg:p-10 ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div
                  className="absolute -inset-1 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
                  style={{ background: "var(--gradient-hero)" }}
                />
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="relative h-64 w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105 sm:h-72"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Project 0{i + 1}</div>
                <h3 className="mt-2 font-display text-2xl font-bold text-gradient">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">{p.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-justify">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={p.link} target="_blank" rel="noreferrer"
                    className="btn-hero inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold">
                    {p.linkLabel === "GitHub" ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                    {p.linkLabel}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
