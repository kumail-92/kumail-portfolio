import { useEffect, useState } from "react";

export function Background() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="glow-blob animate-blob"
          style={{ width: 500, height: 500, background: "oklch(0.78 0.17 200)", top: "-10%", left: "-10%" }}
        />
        <div
          className="glow-blob animate-blob"
          style={{ width: 600, height: 600, background: "oklch(0.62 0.22 300)", bottom: "-20%", right: "-10%", animationDelay: "4s" }}
        />
        <div
          className="glow-blob animate-blob"
          style={{ width: 400, height: 400, background: "oklch(0.7 0.2 260)", top: "40%", left: "40%", animationDelay: "8s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.9 0.05 200) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.05 200) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div
        className="pointer-events-none fixed -z-10 h-[400px] w-[400px] rounded-full transition-transform duration-200 ease-out"
        style={{
          left: pos.x - 200,
          top: pos.y - 200,
          background: "radial-gradient(circle, oklch(0.78 0.17 200 / 0.15), transparent 60%)",
        }}
      />
    </>
  );
}