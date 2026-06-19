import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -120, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[700px] h-[700px]
        rounded-full
        bg-blue-600/20
        blur-[180px]
        -top-52
        -left-52"
      />

      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[600px] h-[600px]
        rounded-full
        bg-cyan-500/20
        blur-[180px]
        bottom-0
        right-0"
      />

    </div>
  );
}