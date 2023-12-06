const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  //corePlugins: {preflight: false},
  content: [ "./src/**/*.{js,jsx,ts,tsx}", './resources/js/**/*.jsx',],
  theme: {
    extend: {
      backgroundImage: {
      'logos': "url('/src/Logos/bg.png'), linear-gradient(to right bottom, #CB793A, #FCDC4D)"
      }
    },
    colors: {
      'light1': "#FCDC4D",
      'light2': "#CB793A",
      'mid': "#9A031E",
      'dark1': "#5F0F40",
      'dark2': "#321325",
      'white-bg': "#F4F1BB"   
    },
    screens: {
      'mobile': '375px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: []
}

