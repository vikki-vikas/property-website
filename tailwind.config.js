/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue : "#5e23dc",
        gray : "#f4f4f4",
      }
    },
  },
  plugins: [],
}

