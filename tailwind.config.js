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
    extend: {
      fontFamily: {
        coke: ["Coca Cola ii", "sans-serif"],
      },
      keyframes: {
        exit: {
          '0%': { transform: 'scale(1.0) rotate(0deg)' },
          '50%':  { transform: 'rotate(340deg) translate(-300px,0px)' },
          '100%': { transform: 'scale(0.5) rotate(5deg) translate(1140px,-137px)'}
        }
      },
      animation: {
        exit: 'exit 2s ease-in-out',
      }
    },
  },

  plugins: [],
};
