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
      'logos': "url('/src/Logos/bg.png'), linear-gradient(to right bottom, #E8E9F3, #272635)"
      }
    },
    colors: {
      'light1': "#E8E9F3",
      'light2': "#CECECE",
      'mid': "#A6A6A8",
      'dark1': "#272635",
      'dark2': "#161925",
      'white-bg': "#F4F1BB"   
    }
  },
  plugins: []
}

