// Plugins
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    vue({}),
    vuetify({
      autoImport: true,
    }),
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router/", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components/", import.meta.url)
      ),
      "@containers": fileURLToPath(
        new URL("./src/containers/", import.meta.url)
      ),
      "@templates": fileURLToPath(new URL("./src/templates/", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages/", import.meta.url)),

      "@modules": fileURLToPath(
        new URL("./src/store/modules/", import.meta.url)
      ),
      "@store": fileURLToPath(new URL("./src/store/", import.meta.url)),

      "@assets": fileURLToPath(new URL("./src/assets/", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 3000,
  },
});
