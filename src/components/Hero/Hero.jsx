import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FileText, ArrowDown, FolderKanban } from "lucide-react";
import { Link } from "react-scroll";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
import { profile } from "../../data/profile";
import { socialLinks } from "../../data/socialLinks";

function AnimatedStat({ value, suffix, label }) {
  return (
    <div className="glass rounded-2xl p-4 sm:p-5 text-center hover-glow transition-all">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">
        {value}
        {suffix}
      </h2>

      <p className="text-gray-400 mt-1 text-sm sm:text-base">
        {label}
      </p>
    </div>
  );
}

// function AnimatedStat({ value, suffix, label, decimals = 0 }) {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

//   return (
//     <div ref={ref} className="glass rounded-2xl p-4 sm:p-5 text-center hover-glow transition-all">
//       <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">
//         {inView ? (
//           <CountUp
//             end={value}
//             duration={2}
//             decimals={decimals}
//             suffix={suffix}
//           />
//         ) : (
//           `0${suffix}`
//         )}
//       </h2>
//       <p className="text-gray-400 mt-1 text-sm sm:text-base">{label}</p>
//     </div>
//   );
// }

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const typingSequence = profile.typingRoles.flatMap((role) => [role, 1500]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-24 pb-16"
      aria-label="Hero section"
    >
      <div className="absolute w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-blue-600/20 blur-[140px] rounded-full top-20 -left-32 animate-pulse-slow" />
      <div className="absolute w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-cyan-500/15 blur-[140px] rounded-full bottom-10 -right-24 animate-pulse-slow" />

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {profile.openToWork && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-sm font-medium">Open to Work</span>
            </motion.div>
          )}

          <p className="text-cyan-400 text-base sm:text-lg mb-3">Hello, I&apos;m</p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            {profile.firstName}
            <br />
            <span className="gradient-text">{profile.lastName}</span>
          </h1>

          <div className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-gray-200 min-h-[2.5rem]">
            <TypeAnimation
              sequence={typingSequence}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 sm:mt-8 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl">
            Final Year{" "}
            <span className="text-white font-medium">Electronics & Communication Engineering</span>{" "}
            student at{" "}
            <span className="text-blue-400 font-medium">NIT Jalandhar</span>{" "}
            passionate about building scalable web applications, backend systems, and AI-powered solutions.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
              aria-label="Download resume"
            >
              <FileText size={18} />
              Download Resume
            </a>

            <Link
              to="projects"
              smooth
              duration={500}
              offset={-70}
              className="btn-secondary flex items-center gap-2 cursor-pointer"
              aria-label="View projects"
            >
              <FolderKanban size={18} />
              View Projects
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socialLinks.slice(0, 4).map(({ name, url, icon: Icon, ariaLabel }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-blue-600/30 hover:border-blue-500/50 transition-all hover:-translate-y-1"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-10 sm:mt-14">
            {profile.stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center order-first lg:order-last"
          style={{
            transform: `translate(${mouse.x}px, ${mouse.y}px)`,
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 blur-[90px] opacity-30 rounded-full" />

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-75 blur-sm animate-gradient" />

              <img
                src={profile.profileImage}
                alt={`${profile.name} - Software Engineer`}
                className="relative w-[260px] sm:w-[340px] lg:w-[400px] rounded-full border-4 border-blue-500/50 shadow-2xl object-cover aspect-square bg-slate-800"
                loading="eager"
              />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-blue-500/20"
            />
          </div>
        </motion.div>
      </div>

      <Link
        to="about"
        smooth
        duration={500}
        offset={-70}
        className="absolute bottom-8 cursor-pointer"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="text-gray-400 hover:text-white transition-colors" />
        </motion.div>
      </Link>
    </section>
  );
}
