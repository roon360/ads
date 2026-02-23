import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Must match GitHub Pages path: https://roon360.github.io/ads/
  base: '/ads/',
})
