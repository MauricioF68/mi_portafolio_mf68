/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},   // <--- Antes tenías "@tailwindcss/postcss", ahora es solo "tailwindcss"
    autoprefixer: {},
  },
};

export default config;