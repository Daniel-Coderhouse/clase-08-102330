import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // 👈 CORREGIDO AQUÍ
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
