import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Mail, ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImg from "@/assets/swathika-profile.jpg";

const ROLES = ["Full-Stack Developer", "UI/UX Designer"];

export function Hero() {
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgb(52,211,153)]" />
            Available for opportunities
          </div>

          <p className="mt-6 text-base text-muted-foreground">Hello, I'm</p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Swathika M</span>
          </h1>
          <h2 className="mt-3 text-2xl font-semibold text-foreground/90 sm:text-3xl h-10 sm:h-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIdx]}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-gradient inline-block"
              >
                {ROLES[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-justify">
            Where creativity meets code — building modern products with purpose and precision.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => scroll("projects")} className="btn-hero inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
              View Projects <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => scroll("contact")} className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
              <Mail className="h-4 w-4" /> Contact Me
            </button>
            <a
              href="https://i.postimg.cc/HLjVCB8V/SWATHIKA-M-Resume-8.png"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-glow inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs"
            >
              <Zap className="h-3.5 w-3.5 text-yellow-300" /> Building Web Apps
            </motion.span>
            <motion.span
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.2 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs"
            >
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" /> Design + Code Crafted
            </motion.span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div
            className="absolute inset-0 rounded-3xl blur-2xl opacity-60"
            style={{ background: "var(--gradient-hero)" }}
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-3xl glass border border-white/15"
          >
            <img src={heroImg} alt="Developer workspace illustration" width={1024} height={1024} className="h-72 w-full object-cover sm:h-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -left-4 top-10 glass rounded-2xl px-4 py-3 text-xs glow-purple"
          >
            <div className="font-mono text-[10px] text-muted-foreground">$ npm run</div>
            <div className="text-gradient font-semibold">creativity</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
            className="absolute -right-3 bottom-10 glass rounded-2xl px-4 py-3 text-xs glow-blue"
          >
            <div className="text-muted-foreground">CGPA</div>
            <div className="text-gradient font-bold text-base">7.57</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
