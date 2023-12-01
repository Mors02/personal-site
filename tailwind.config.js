const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  //corePlugins: {preflight: false},
  content: [ "./src/**/*.{js,jsx,ts,tsx}", './resources/js/**/*.jsx',],
  theme: {
    extend: {
      backgroundImage: {
      'unity': "url('/src/Logos/unity.svg')",
      'github': "url('/src/Logos/github.svg')",
      'unreal': "url('/src/Logos/unreal.svg')",
      'react': "url('/src/Logos/react.svg')",
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
    }
  },
  plugins: []
}

