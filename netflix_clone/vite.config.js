import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
base: "/Netflix--clone-2025/";
export default defineConfig({
  plugins: [react()],
})
