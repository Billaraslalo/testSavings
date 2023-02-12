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
      screens: {
        'belowlg': {'max': '1023px'},
      },
      height: {
        "1/7": "14%",
        "1/8": "12.5%",
        "1/10": "10%"
      },
      width: {
        "2/9.5": "21%"
      },
      colors: {
        "lightGreen": "#6fbc91",
        "lightWhite": "EEEEEE",
        "darkGreen": "#205843",
        "darkBlue": "#1a2c3c",
        

      }
    },
  },
  plugins: [],
}