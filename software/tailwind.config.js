/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true, // Esto ayuda a evitar conflictos con Bootstrap
  theme: {
    extend: {},
  },
  plugins: [],
};
