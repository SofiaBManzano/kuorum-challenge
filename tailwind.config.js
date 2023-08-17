/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Inter", "serif"],
    },
    extend: {
      colors: {
        black: "#577575",
        "primary-color": "#575757",
        "primary-light": "#838383",
        "secondary-color": "#4D7AE3",
        "secondary-light": "#EDF2FC",
        "light-color": "#E0E0E0",
        "darker-color": "#2C2C2C",
      },
    },
  },
  plugins: [],
};
// require("./src/styles/custom.scss");
