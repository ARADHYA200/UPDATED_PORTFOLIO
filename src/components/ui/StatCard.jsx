import { motion } from "framer-motion";

export default function StatCard({
  icon: Icon,
  value,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
    >
      <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">

        <Icon size={30} />

      </div>

      <h2 className="text-4xl font-bold mt-6 text-blue-400">

        {value}

      </h2>

      <h3 className="text-xl font-semibold mt-4">

        {title}

      </h3>

      <p className="text-gray-400 leading-7 mt-4">

        {description}

      </p>
    </motion.div>
  );
}