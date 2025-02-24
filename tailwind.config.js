/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ensure Tailwind dark mode is class-based
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
