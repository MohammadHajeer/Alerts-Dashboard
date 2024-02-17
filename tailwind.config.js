/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-text': '#5D5D5D',
        'main-blue': '#53ACFF',
        'gray-bg': '#313131',
        'gray-border': '#414040',
      }
    },
  },
  plugins: [],
}