import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//
// Vite configuration
// - Vite is the tool that runs the app during development and builds it for production.
// - The React plugin teaches Vite how to handle React files.
//
export default defineConfig({
  // Enable React support (fast refresh, JSX, etc.)
  plugins: [react()],
})
