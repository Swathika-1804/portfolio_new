import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

const TECHS = [
  "JavaScript",
  "Python",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "HTML",
  "CSS",
];

const TOOLS = [
  "Figma",
  "Unity",
  "VS Code",
  "Git",
  "GitHub",
  "Canva",
];

function PillList({ items }: { items: string[] }) {
  return (
    <ul className="relative flex flex-wrap justify-center gap-3 sm:gap-4">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
        >
          <span className="group inline-flex cursor-default items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium tracking-wide text-foreground/85 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-white/25 hover:bg-white/10 hover:text-foreground hover:shadow-[0_0_24px_-4px_rgb(139_92_246/0.55),0_0_40px_-8px_rgb(34_211_238/0.35)]">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export function Technologies() {
  return (
    <section id="technologies" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle
          eyebrow="Tech I Use"
          title="TECHNOLOGIES"
          subtitle="Tools and languages I work with day to day."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass relative space-y-10 rounded-3xl border border-white/10 p-8 sm:p-10"
        >
          <div
            className="pointer-events-none absolute -inset-1 rounded-3xl opacity-40 blur-3xl"
            style={{ background: "var(--gradient-hero)" }}
            aria-hidden
          />
          <div className="relative">
            <h3 className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Languages & Frameworks
            </h3>
            <PillList items={TECHS} />
          </div>
          <div className="relative">
            <h3 className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Tools
            </h3>
            <PillList items={TOOLS} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
