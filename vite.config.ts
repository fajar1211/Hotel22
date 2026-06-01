import { defineConfig } from "vite";
import tanstackStart from "@tanstack/react-start";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: { port: 3001 },
  plugins: [
    tailwindcss(),
    viteReact(),
    tsConfigPaths(),
    tanstackStart({
      nitro: {
        preset: "cloudflare-pages",
        output: {
          dir: "dist",
          serverDir: "{{ output.dir }}/_worker.js",
          publicDir: "dist",
        },
        cloudflare: { nodeCompat: true },
      },
    }),
  ],
});
