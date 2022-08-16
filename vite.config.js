import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://joaogabrielti.github.io/vite-project/',
  plugins: [react()]
})
