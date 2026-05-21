export function Background() {
  const particles = Array.from({ length: 28 });
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, var(--neon-purple), transparent 70%)", animation: "var(--animate-blob)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle, var(--neon-blue), transparent 70%)", animation: "var(--animate-blob)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--neon-cyan), transparent 70%)", animation: "var(--animate-blob)", animationDelay: "-12s" }}
      />
      {particles.map((_, i) => {
        const size = 2 + (i % 4);
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 8) * 0.7;
        const duration = 6 + (i % 5);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-white/70"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animation: `float ${duration}s ease-in-out ${delay}s infinite`,
              boxShadow: "0 0 8px rgba(167,139,250,0.9)",
              opacity: 0.6,
            }}
          />
        );
      })}
    </div>
  );
}
