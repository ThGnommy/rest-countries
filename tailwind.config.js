module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans"],
    },
    extend: {
      backgroundColor: {
        "design-white": "hsl(0, 0%, 98%)",
        "design-black": "hsl(207, 26%, 17%)",
        "dark-element": "hsl(209, 23%, 22%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
