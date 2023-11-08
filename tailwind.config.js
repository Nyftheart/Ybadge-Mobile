/** @type {Plugin} */
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'black-theme': '#131313'
      },
      keyframes: {
        stretch: {
          '0, 100%': {
            transform: 'scale-y-3000'
          },
        },
      },
      animation: {
        stretch: 'stretch 2s ease-in-out infinite'
      },
    },
    colors: {
      unselect: "rgba(255, 255, 255, 0.35)",
      Menu: '#414141',
      Background: '#131313',
      Text: "#ffffff",
      transparent: "rgba(255,255,255,0)",
      Search: "rgba(65, 65, 65, 1)",
    },
  },
  plugins: [
  ],
}
