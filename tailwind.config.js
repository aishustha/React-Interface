/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx, js,jsx,ts}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')]
}

