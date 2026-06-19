import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Laptop,
  Target,
  BookOpen,
  Zap,
} from "lucide-react";
import {
  aboutCards,
  strengths,
  careerGoals,
  currentLearning,
  timeline,
  education,
} from "../../data/education";
import { certifications } from "../../data/certifications";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../effects/RevealOnScroll";

const cardIcons = [GraduationCap, Laptop, BrainCircuit, Code2];

export default function About() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto" aria-label="About section">
      <SectionHeading
        label="About Me"
        title="Passionate About Building"
        highlight="Software"
        description="ECE background with a Software Engineering focus — bridging hardware knowledge with modern full-stack and AI/ML development."
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
        <RevealOnScroll direction="left">
          <div className="space-y-6">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              I&apos;m{" "}
              <span className="text-white font-semibold">Aradhya Agarwal</span>, a Final Year
              Electronics & Communication Engineering student at{" "}
              <span className="text-blue-400 font-medium">NIT Jalandhar</span> with a strong
              passion for Software Engineering.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I enjoy transforming ideas into scalable web applications and AI-powered solutions.
              Over the last few years I&apos;ve built Full Stack applications using the MERN stack,
              REST APIs, and modern frontend technologies.
            </p>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Alongside Full Stack Development, I&apos;m actively learning Machine Learning and
              building projects including AI Smart Traffic Management, Emergency Vehicle Detection,
              Movie Recommendation, Spam Email Classification, and AI Study Planner.
            </p>

            <div className="glass rounded-2xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-blue-400" size={22} />
                <h3 className="text-lg font-semibold">Career Goals</h3>
              </div>
              <ul className="space-y-2">
                {careerGoals.map((goal) => (
                  <li key={goal} className="text-gray-400 flex gap-3 text-sm sm:text-base">
                    <span className="text-cyan-400 shrink-0">→</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-blue-400" size={22} />
                <h3 className="text-lg font-semibold">Currently Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentLearning.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-sm bg-blue-500/10 border border-blue-500/20 text-cyan-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="right">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {aboutCards.map((item, index) => {
              const Icon = cardIcons[index];
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass rounded-3xl p-6 hover-glow transition-all"
                >
                  <div className="text-blue-400">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mt-4">{item.title}</h3>
                  <p className="text-gray-400 mt-3 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </RevealOnScroll>
      </div>

      {/* Education */}
      <RevealOnScroll className="mt-20">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3">
          <GraduationCap className="text-blue-400" />
          Education
        </h3>
        {education.map((edu) => (
          <div key={edu.degree} className="glass rounded-3xl p-6 sm:p-8 hover-glow">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h4 className="text-xl font-bold">{edu.degree}</h4>
              <span className="text-blue-400 font-medium">{edu.duration}</span>
            </div>
            <p className="text-gray-300 mt-2">{edu.institution}</p>
            <p className="text-cyan-400 mt-1 font-semibold">CGPA: {edu.cgpa}</p>
            <ul className="mt-4 space-y-2">
              {edu.highlights.map((h) => (
                <li key={h} className="text-gray-400 flex gap-3 text-sm sm:text-base">
                  <span className="text-cyan-400">•</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </RevealOnScroll>

      {/* Strengths */}
      <RevealOnScroll className="mt-16">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
          <Zap className="text-blue-400" />
          Core Strengths
        </h3>
        <div className="flex flex-wrap gap-3">
          {strengths.map((s) => (
            <span
              key={s}
              className="px-4 py-2.5 rounded-xl glass text-sm sm:text-base hover:bg-blue-600/20 transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </RevealOnScroll>

      {/* Timeline */}
      <RevealOnScroll className="mt-20">
        <h3 className="text-2xl sm:text-3xl font-bold mb-10">My Journey</h3>
        <div className="relative">
          <div className="absolute left-4 sm:left-6 top-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-400 h-full" />
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-6 sm:gap-8 mb-10 pl-12 sm:pl-16"
            >
              <div className="absolute left-2 sm:left-4 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#030712] z-10" />
              <div>
                <span className="text-blue-400 font-bold text-sm">{item.year}</span>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </RevealOnScroll>

      {/* Certifications */}
      <RevealOnScroll className="mt-16">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8">Certifications & Highlights</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="glass rounded-2xl p-6 hover-glow">
              <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                {cert.year}
              </span>
              <h4 className="text-lg font-semibold mt-2">{cert.title}</h4>
              <p className="text-cyan-400 text-sm mt-1">{cert.issuer}</p>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
