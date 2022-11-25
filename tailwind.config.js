// npm install tailwindcss postcss autoprefixer
// npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // agreagr esto
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
