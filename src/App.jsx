import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";
import ScrollProgress from "./components/ui/ScrollProgress";
import BackToTop from "./components/ui/BackToTop";
import Footer from "./components/Footer/Footer";
import AnimatedBackground from "./components/effects/AnimatedBackground";
import FloatingParticles from "./components/effects/FloatingParticles";
import CursorGlow from "./components/effects/CursorGlow";
import LoadingScreen from "./components/ui/LoadingScreen";

const Projects = lazy(() => import("./components/Projects/Projects"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-28">
      <div className="h-8 w-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedBackground />
            <FloatingParticles count={25} />
            <CursorGlow />
            <ScrollProgress />
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Suspense fallback={<SectionLoader />}>
                <Projects />
              </Suspense>
              <Achievements />
              <Contact />
            </main>
            <Footer />
            <BackToTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
