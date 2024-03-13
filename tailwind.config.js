/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibarra: ["Ibarra Real Nova", "serif"],
        "public-sans": ["Public Sans", "sans-serif"],
      },
      boxShadow: {
        "box-sh": "2px 2px 100px 0px rgba(0, 0, 0, 0.20)",
      },
      screens: {
        desktop: { max: "75em" },
        laptop: { max: "64em" },
        tablet: { max: "48em" },
        mobile: { max: "31.25em" },
      },
    },
  },
  plugins: [],
};
