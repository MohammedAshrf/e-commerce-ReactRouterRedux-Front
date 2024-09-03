/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["inter", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      white: {
        50: "rgb(255 252 236 / 34%)",
        75: "rgb(255 252 236 / 66%)",
        100: "rgb(255 252 236)",
      },
    },
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
  },
  extend: {},
  plugins: [],
});
