/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#DAF0EE",
      secondary: "#C565D4",
      grey: colors.trueGray,
      white: "#ffffff",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
