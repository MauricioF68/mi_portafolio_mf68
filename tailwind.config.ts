import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <--- IMPORTANTE: Usamos 'class', es lo más compatible
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Puedes agregar tus extensiones aquí si las necesitas luego
    },
  },
  plugins: [],
};
export default config;