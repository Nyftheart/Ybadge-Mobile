/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      Menu: '#414141',
      Background: '#131313',
      Text: "#ffffff",
      transparent: "rgba(255,255,255,0)",
    },
  },
  plugins: [],
}
