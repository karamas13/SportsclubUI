/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
    colors: {
      '50': '#edf7ff',
      '100': '#d6ecff',
      '200': '#b5dfff',
      '300': '#83cdff',
      '400': '#48b0ff',
      '500': '#1e8bff',
      '600': '#0669ff',
      '700': '#004eeb',
      '800': '#0841c5',
      '900': '#0d3c9b',
      '950': '#0e265d',
  },
  
  },
  variants: {
    backgroundColor:['responsive','hover','focus','active']
   }, 
  plugins: [],
}

