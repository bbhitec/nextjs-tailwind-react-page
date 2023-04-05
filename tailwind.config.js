/** @type {import('tailwindcss').Config} */

// this defines where should tailwind be incorporated
module.exports = {
  // enable darkmode selection
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // add personal colors etc
    extend: {
      // custom font
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
}