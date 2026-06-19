import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../../data/profile";

export default function LoadingScreen({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712]"
          role="status"
          aria-label="Loading portfolio"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold gradient-text"
          >
            {profile.initials}
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="mt-6 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
          />

          <p className="mt-4 text-sm text-gray-500">Loading portfolio...</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
