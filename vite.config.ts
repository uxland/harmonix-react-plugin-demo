import { defineConfig, loadEnv } from "vite";
import pkg from "./package.json";
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  

  return defineConfig({
    define: {
      'process.env': {NODE_ENV: "production"}, // Define process.env para evitar el error
    },
    server:{
      host:'0.0.0.0'
    },
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: "./src/plugin.ts",
        // the proper extensions will be added
        fileName: "index",
        name: pkg.name,
        formats: ["es"]
      },
      rollupOptions: {
        external: ["react", "react-dom",  "@uxland/primary-shell", "react-dom/client"],
        output: {
          inlineDynamicImports: true, // Incluye todas las importaciones dinámicas en un solo archivo
          manualChunks: undefined, // Desactiva la fragmentación para generar un solo archivo
        }
      },
      minify: true,
      sourcemap: true,
    },
  });
};