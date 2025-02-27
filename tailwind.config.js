/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'media',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Helvetica Neue', ...defaultTheme.fontFamily.sans],
      'helveticaBlack': ['HelveticaNeueBlack'],
      'helveticaUltraLight': ['HelveticaNeueUltraLight'],
      'helveticaThin': ['HelveticaNeueThin'],
      'helveticaRoman': ['HelveticaNeueRoman'],
      'helveticaMedium': ['HelveticaNeueMedium'],
      'helveticaLight': ['HelveticaNeueLight'],
      'helveticaBold': ['HelveticaNeueBold'],
      'helveticaHeavy': ['HelveticaNeueHeavy'],
    },
    extend: {
      colors: {
        'primary': '#0500FF',
        'black': '#1C1C1C',
        'gray': '#9E9E9E',
      },
    },
  },
  plugins: [],
};
