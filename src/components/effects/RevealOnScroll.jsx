import { motion } from "framer-motion";

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const offset = direction === "left" ? { x: -50 } : direction === "right" ? { x: 50 } : { y: 40 };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
