/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native");
const colors = require("./src/styles/colors.js");

module.exports = {
  content: [
    "./src/App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: colors
    },
    screens: {
      'sm': '320px', // smartphones pequenos
      'md': '405px', // smartphones médios (iPhone X, Galaxy S9)
      'lg': '425px', // smartphones grandes (Pixel 2 XL, iPhone 11 Pro Max)
      'xl': '768px', // tablets pequenos (iPad Mini)
      '2xl': '1024px', // tablets grandes (iPad Pro)
    },
  },
  plugins: [nativewind()],
}

