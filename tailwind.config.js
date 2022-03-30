module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
    extend: {
      colors: {
        white: "#fefefe",
        black: "#121212",
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
  plugins: [],
};
