import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle eyebrow="About Me" title="A little about who I am" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg text-justify"
        >
          <p>
            I’m Swathika, a Computer Science and Design student passionate about full-stack development, AI, and UI/UX design. I enjoy building modern web applications and creating user-friendly digital experiences that combine clean design with smart functionality.
          </p>
          <p>
            I’ve worked on projects like <span className="text-gradient font-semibold">AgriMind</span>,{" "}
            <span className="text-gradient font-semibold">Textally</span>, and{" "}
            <span className="text-gradient font-semibold">Plantixx</span>, where I explored AI-powered solutions, responsive web development, and intuitive UI design. I enjoy turning ideas into impactful products while continuously learning new technologies and refining both my development and design skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
