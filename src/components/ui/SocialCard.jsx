import { motion } from "framer-motion";

export default function SocialCard({
  icon: Icon,
  title,
  value,
  link,
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-blue-500 transition"
    >
      <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
        <Icon size={26} />
      </div>

      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-gray-400 text-sm">
          {value}
        </p>
      </div>
    </motion.a>
  );
}