import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // Since we're deploying to https://<USERNAME>.github.io/
  plugins: [react()],
});
