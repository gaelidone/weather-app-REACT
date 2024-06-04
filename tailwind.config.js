/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackPri: "#181818",
        blackSec: "#2A2A2A"
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      }

    },
  },
  plugins: [],
}

