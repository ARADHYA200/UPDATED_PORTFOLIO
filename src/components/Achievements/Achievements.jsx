import { motion } from "framer-motion";
import { achievements } from "../../data/achievements";
import StatCard from "../ui/StatCard";
import SectionHeading from "../ui/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding max-w-7xl mx-auto" aria-label="Achievements section">
      <SectionHeading
        label="Achievements"
        title="Numbers That"
        highlight="Represent My Journey"
        description="Beyond academics, I enjoy solving problems, building products, and continuously improving my software engineering skills."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <StatCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
