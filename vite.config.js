import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: "/Portfolio/",
  build: {
    outDir: 'docs'
  },
  plugins: [
    tailwindcss(),
  ],
})