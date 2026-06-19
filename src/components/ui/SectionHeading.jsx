import { motion } from "framer-motion";

export default function SectionHeading({
  label,
  subtitle,
  title,
  highlight,
  description,
  align = "left",
}) {
  const sectionLabel = label || subtitle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={align === "center" ? "text-center" : ""}
    >
      {sectionLabel && (
        <p className="uppercase tracking-[4px] text-blue-400 font-semibold text-sm">
          {sectionLabel}
        </p>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 leading-tight">
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>

      {description && (
        <p
          className={`text-gray-400 leading-relaxed mt-4 sm:mt-6 text-sm sm:text-base ${
            align === "center" ? "max-w-3xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
