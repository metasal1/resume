// const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: "#fffff",
      secondary: "#000000",
      cokeprimary: "#f40009",
      cokesecondary: "#1e1e1e",
      pepsiprimary: "#c9002b",
      pepsisecondary: "#004b93",
      fantaprimary: "#f7941e",
      fantasecondary: "#2d3092",
      spriteprimary: "#008b47",
      spritesecondary: "#f8cd24",
    },
    extend: {},
  },
  plugins: [],
};
