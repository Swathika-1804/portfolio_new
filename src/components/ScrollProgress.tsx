import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.3 });
  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, var(--neon-purple), var(--neon-blue), var(--neon-cyan))",
        boxShadow: "0 0 12px var(--neon-purple)",
      }}
    />
  );
}
