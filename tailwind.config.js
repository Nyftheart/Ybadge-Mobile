const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...defaultTheme,
    colors: {
      unselect: 'rgba(255, 255, 255, 0.35)',
      menu: '#414141',
      background: '#131313',
      text: '#ffffff',
      transparent: 'rgba(255,255,255,0)',
      search: 'rgba(65, 65, 65, 1)',
    },
    typography: {
      fontFamily: [
        'Poppins',
        'Roboto',
        '"Helvetica Neue"',
      ].join(','),
  },
  },
  plugins: [plugin],
}
