import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/socialLinks";
import { profile } from "../../data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-slate-900/80 border-b border-white/10 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link
          to="home"
          smooth
          duration={500}
          offset={-70}
          className="text-xl sm:text-2xl font-bold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          aria-label="Go to home"
        >
          <span className="gradient-text">{profile.initials}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy
              smooth
              duration={500}
              offset={-70}
              onSetActive={setActiveSection}
              className={`cursor-pointer text-sm font-medium transition relative py-1 ${
                activeSection === item.to
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              activeClass="text-white"
            >
              {item.name}
              {activeSection === item.to && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                />
              )}
            </Link>
          ))}

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition px-5 py-2.5 rounded-full text-sm font-medium"
            aria-label="Download resume"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 border-b border-white/5 cursor-pointer hover:bg-white/5 text-gray-300 hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-blue-600 py-4 font-semibold"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
