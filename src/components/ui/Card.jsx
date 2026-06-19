import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}