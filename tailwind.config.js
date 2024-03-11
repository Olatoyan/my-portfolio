/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibarra: ["Ibarra Real Nova", "serif"],
        "public-sans": ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
