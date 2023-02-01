/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-theme': '#131313'
      },
    },
    colors: {
      Menu: '#414141',
      Background: '#131313',
      Text: "#ffffff",
      transparent: "rgba(255,255,255,0)",
      Search: "rgba(65, 65, 65, 1)",
    },
  },
  plugins: [],
}
