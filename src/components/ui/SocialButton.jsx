import { motion } from "framer-motion";

export default function SocialButton({
  icon: Icon,
  href,
  label,
}) {
  return (
    <motion.a
      whileHover={{
        y: -5,
        scale: 1.08,
      }}
      whileTap={{
        scale: .95,
      }}
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-xl bg-white/5 hover:bg-blue-600 flex items-center justify-center transition"
    >
      <Icon size={22} />
    </motion.a>
  );
}