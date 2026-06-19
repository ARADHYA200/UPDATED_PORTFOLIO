import { useMemo } from "react";
import { motion } from "framer-motion";

function pseudoRandom(seed) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export default function FloatingParticles({ count = 30 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: pseudoRandom(i + 1) * 100,
        y: pseudoRandom(i + 2) * 100,
        size: pseudoRandom(i + 3) * 3 + 1,
        duration: pseudoRandom(i + 4) * 20 + 15,
        delay: pseudoRandom(i + 5) * 5,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
