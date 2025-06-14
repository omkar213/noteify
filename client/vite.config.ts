import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    build: {
      outDir: "dist",
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BACKEND_URL,
        },
      },
    },
  };
});
