import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import path from "path";

import vue from "@vitejs/plugin-vue";
// import eslintPlugin from 'vite-plugin-eslint';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    VueI18nPlugin({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,
      include: path.resolve(__dirname, "./src/plugins/i18n/lang/**"),
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "esnext",
  },
});
