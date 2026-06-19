import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Marquee from "react-fast-marquee";
import { skillCategories, techMarquee } from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../effects/RevealOnScroll";

function SkillBar({ name, proficiency, icon: SkillIcon, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {SkillIcon && <SkillIcon size={16} className="text-blue-400" />}
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-xs text-gray-500">{proficiency}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${proficiency}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding max-w-7xl mx-auto" aria-label="Skills section">
      <SectionHeading
        label="Skills"
        title="Technologies I"
        highlight="Work With"
        description="Building scalable software with modern web technologies while continuously learning backend engineering, AI, and cloud."
      />

      <RevealOnScroll className="mt-10">
        <div className="glass rounded-2xl py-4 overflow-hidden">
          <Marquee gradient gradientColor={[3, 7, 18]} speed={40} pauseOnHover>
            {techMarquee.map((tech) => (
              <span
                key={tech}
                className="mx-6 text-gray-400 font-medium text-sm sm:text-base"
              >
                {tech}
              </span>
            ))}
          </Marquee>
        </div>
      </RevealOnScroll>

      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mt-16">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-6 sm:p-8 hover-glow transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    icon={skill.icon}
                    delay={i * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
