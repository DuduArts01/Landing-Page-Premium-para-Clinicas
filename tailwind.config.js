/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'champagne': '#C9A96E',
        'champagne-dark': '#8B6914',
        'champagne-light': '#F5ECD7',
      }
    },
  },
  plugins: [],
}