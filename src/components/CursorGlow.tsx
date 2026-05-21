import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setVisible(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!visible) return null;
  return (
    <div
      className="pointer-events-none fixed z-[100] h-[400px] w-[400px] rounded-full blur-3xl transition-transform duration-150"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        background: "radial-gradient(circle, color-mix(in oklab, var(--neon-purple) 22%, transparent), transparent 60%)",
      }}
    />
  );
}
