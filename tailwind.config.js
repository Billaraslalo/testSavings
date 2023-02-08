/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [    
  "./components/**/*.{js,vue,ts}",
  "./layouts/**/*.vue",
  "./pages/**/*.vue",
  "./plugins/**/*.{js,ts}",
  "./nuxt.config.{js,ts}",],
  theme: {
    extend: {
      height: {
        "1/7": "14%",
        "1/8": "12.5%",
        "1/10": "10%"
      },
      width: {
        "2/9.5": "21%"
      }
    },
  },
  plugins: [],
}