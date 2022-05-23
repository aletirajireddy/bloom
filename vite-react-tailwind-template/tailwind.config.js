/* eslint-disable no-undef */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pic1: "url('/src/assets/images/pic1.jpg')",
        pic2: "url('/src/assets/images/pic2.jpg')",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "0rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1224px",
      },
    },
  },
  plugins: [],
};
