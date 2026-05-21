import { Github, Linkedin, Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          Designed & Developed by{" "}
          <span className="text-gradient font-semibold">Swathika M</span>{" "}
          <Heart className="inline h-3.5 w-3.5 text-pink-400" />
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Swathika-1804" target="_blank" rel="noreferrer"
            className="glass hover-glow flex h-10 w-10 items-center justify-center rounded-full">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/swathika-m-459247259/" target="_blank" rel="noreferrer"
            className="glass hover-glow flex h-10 w-10 items-center justify-center rounded-full">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="https://leetcode.com/u/swathikam04/" target="_blank" rel="noreferrer"
            className="glass hover-glow flex h-10 w-10 items-center justify-center rounded-full">
            <Code2 className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
