import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { projects, projectCategories } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../effects/RevealOnScroll";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const query = search.toLowerCase();
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.technologies.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto" aria-label="Projects section">
      <SectionHeading
        label="Projects"
        title="Featured"
        highlight="Work"
        description="A collection of full-stack, AI/ML, and frontend projects showcasing my skills in building real-world applications."
      />

      <RevealOnScroll className="mt-10">
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="search"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-blue-500 transition text-sm sm:text-base"
              aria-label="Search projects"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-blue-600 text-white"
                    : "glass hover:bg-white/10"
                }`}
                aria-pressed={category === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-12 text-lg">
          No projects found matching your search.
        </p>
      )}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
