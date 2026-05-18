import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: "/TAREA-05/", // 👈 ESTA LÍNEA ES LA CLAVE

  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})