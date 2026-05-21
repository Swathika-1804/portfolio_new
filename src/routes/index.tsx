import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/Background";
import { CursorGlow } from "@/components/CursorGlow";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Technologies } from "@/components/sections/Technologies";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swathika M — Full-Stack Developer & Designer" },
      {
        name: "description",
        content:
          "Portfolio of Swathika M — Computer Science and Design student building AI-driven full-stack apps and crafted UI/UX experiences.",
      },
      { property: "og:title", content: "Swathika M — Full-Stack Developer & Designer" },
      { property: "og:description", content: "AI, full-stack development and UI/UX — projects, skills and contact." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Technologies />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
