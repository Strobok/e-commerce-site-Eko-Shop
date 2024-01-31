/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      primary: "#597c3a",
      secondary: "#E7CEC0",
      'white': '#FFFFFF',
      'black': '#000000',
      'info': '#0065FF',
      'success': '#36B37E',
      'warning': '#FFAB00',
      'error': '#FF5630',
      'grey': {
        50: '#F5F5F5',
        100: '#E6E6E6',
        200: '#CCCCCC',
        300: '#B3B3B3',
        400: '#999999',
        500: '#666666',
        600: '#333333',
        700: '#262626',
        800: '#191919',
        900: '#0D0D0D',
      },
    },
    fontFamily: {
      'sans': ['Inter', 'Arial', 'sans-serif'],
      'serif': ['"Libre Baskerville"', 'Georgia', 'serif'],
      extend: {},
    },
  },
plugins: []
});



 

