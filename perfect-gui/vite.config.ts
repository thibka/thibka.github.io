import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const guiVersion = (
  JSON.parse(
    readFileSync(
      fileURLToPath(new URL('./node_modules/perfect-gui/package.json', import.meta.url)),
      'utf-8',
    ),
  ) as { version: string }
).version

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  define: {
    __GUI_VERSION__: JSON.stringify(guiVersion),
  },
  build: {
    // GuiDemoPanel is lazy-loaded (see Hero.tsx) and pulls in three.js,
    // which alone exceeds the default 500 kB limit — not on the critical path.
    chunkSizeWarningLimit: 600,
  },
})
