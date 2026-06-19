import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
}) {
  const classes =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-500 text-white"
      : "border border-white/10 bg-white/5 hover:bg-white/10";

  const content = (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: .96 }}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition ${classes}`}
    >
      {icon}
      {children}
    </motion.div>
  );

  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );

  return (
    <button onClick={onClick}>
      {content}
    </button>
  );
}