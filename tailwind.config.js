/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#575757",
        "secondary-color": "#4D7AE3",
        "light-color": "#E0E0E0" ,
        "darker-color":"#2C2C2C"
      },
    },
  },
  plugins: [],
};
