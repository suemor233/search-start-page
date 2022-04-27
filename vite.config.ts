import { resolve } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [
      vue(),
      vueJsx()
  ],
  server: {
    host:'0.0.0.0'
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
})
