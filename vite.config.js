import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "motion";
            if (id.includes("lucide-react") || id.includes("react-icons")) return "icons";
            if (id.includes("react") || id.includes("react-dom")) return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
