import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  base: "/frontendmentor-github-user-search-app/",
  plugins: [react()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src")
    }
  }
})
