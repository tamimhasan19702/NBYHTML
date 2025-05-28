/** @format */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}", "./index.html"],
  theme: {
    screens: {
      xs: "361px",
      sm: "481px",
      md: "769px",
      lg: "1025px",
      xl: "1281px",
      xxl: "1537px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary-color": "#EB641E",
        "secondary-color": "#393336",
        "black-color": "#000000",
      },
    },
  },
  plugins: [],
};
