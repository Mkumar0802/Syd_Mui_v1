import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  // Add this section to fix TTF/OTF font loading
  server: {
    mimeTypes: {
      "application/font-ttf": ["ttf"],
      "application/font-otf": ["otf"],
      "application/font-sfnt": ["ttf", "otf"],
    },
  },
})
