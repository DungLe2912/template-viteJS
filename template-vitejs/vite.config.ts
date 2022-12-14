import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  optimizeDeps: {
    // https://github.com/vitejs/vite/issues/8069
    include: ["react/jsx-runtime"],
  },
  server: { port: 3000 },
});
