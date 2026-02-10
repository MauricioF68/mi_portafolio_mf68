import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // <--- IMPORTANTE: Usamos 'class', es lo más compatible
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Puedes agregar tus extensiones aquí si las necesitas luego
    },
  },
  plugins: [],
};
export default config;