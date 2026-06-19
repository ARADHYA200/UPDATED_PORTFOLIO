import { experiences } from "../../data/experience";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../effects/RevealOnScroll";

export default function Experience() {
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto" aria-label="Experience section">
      <SectionHeading
        label="Experience"
        title="Professional"
        highlight="Journey"
        description="Hands-on experience through internships in frontend development and embedded systems."
      />

      <div className="relative mt-16 sm:mt-20">
        <div className="absolute left-6 sm:left-7 top-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent h-full rounded-full" />

        {experiences.map((item, index) => {
          const Icon = item.icon;
          return (
            <RevealOnScroll key={item.company} delay={index * 0.15}>
              <div className="relative flex gap-6 sm:gap-8 mb-12 sm:mb-14 pl-16 sm:pl-20">
                <div className="absolute left-3 sm:left-4 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Icon size={24} />
                </div>

                <div className="glass rounded-3xl p-6 sm:p-8 flex-1 hover-glow transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">{item.role}</h3>
                      <p className="text-blue-400 mt-1 font-medium">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">{item.duration}</p>
                      <p className="text-gray-500 text-xs mt-1">{item.location}</p>
                    </div>
                  </div>

                  <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs bg-blue-500/10 border border-blue-500/20 text-cyan-300">
                    {item.type}
                  </span>

                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="text-gray-300 flex gap-3 text-sm sm:text-base">
                        <span className="text-cyan-400 shrink-0 mt-1">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
