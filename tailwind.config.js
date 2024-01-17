const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      ...defaultTheme,
      colors: {
        unselect: 'rgba(255, 255, 255, 0.35)',
        menu: '#414141',
        background: '#131313',
        text: '#ffffff',
        transparent: 'rgba(255,255,255,0)',
        search: 'rgba(65, 65, 65, 1)',
      },
      fontFamily: {
        'chillax': ['Chillax', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
    typography: {
      fontFamily: [
        'Poppins',
        'Chillax',
        'Roboto',
        '"Helvetica Neue"',
      ].join(','),
  },
  },
  plugins: [plugin],
}
