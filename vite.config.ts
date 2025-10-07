import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "react": path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      mainFields: ['module', 'main'],
      resolveExtensions: ['.mjs', '.js', '.jsx', '.json'],
    },
    include: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      '@radix-ui/react-tooltip',
      '@tanstack/react-query',
      'next-themes',
      'react-router-dom',
    ],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
}));
