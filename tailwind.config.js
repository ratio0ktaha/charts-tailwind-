const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        "3xl": "1200px",

      },

      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "1.25rem",
      },
    },

    extend: {
      screens: {
        "1440md": "1440px",
        "3xl": "1700px",
        "4xl": "1800px",
        "5xl": "2100px",
      },

      backgroundImage: {
        'heropattern': "url('https://d1uxar20wh5oai.cloudfront.net/email-comp-bg.png')",
        'banner': "url('https://d1uxar20wh5oai.cloudfront.net/banner-bg-grad.png')"

      },

      spacing: {
        41: "2.563rem",
        42: "2.625rem",
      },

      borderRadius: {
        DEFAULT: "30px",
        btn: "8px",
      },

      colors: {
        primary: "#282A3A",
        "primary-hover": "#4C506F",
        secondary: "#EEEFFF",
        "secondary-hover": "#D9C1FF",
        "pink-secondary": "#FF9D9D",
        "yellow-tersiary": "#FFE9BA",
        "purple-accent": "#D9C1FF",
        "blue-accent": "#D4E5FF",
        "grey-accent": "#828282",
        "noraml-grey": "#666666",
        heading: "#242424",
        desc: "#5A5A5A",
        first: "#D5E5FF",
        second: "#D9C1FF",
        third: "#FFE9BA",
        blogSingleDesc: "#62657E",
      },

      fontFamily: {
        sans: [
          // "avenir-regular",
          "Montserrat",
          "sans-serif",
          "ui-sans-serif",
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        playfair: ["Playfair Display"],
        Montserrat: ["Montserrat"],

        // avenirRegular: "avenir-regular",
        // avenirBlack: "avenir-black",
        // avenirBold: "avenir-bold",
        // avenirMedium: "avenir-medium",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".section-spacing-md": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600",
          margin: "6rem auto",
        },
        ".section-spacing": {
          margin: "4rem auto",
        },

        ".color-transparent": {
          color: "transparent",
        },

        ".container-app": {
          maxWidth: "100%",
          padding: "0 20px",
          margin: "0 auto",

          "@media (min-width: 1300px)": {
            padding: "0 20px",
            maxWidth: "1200px",
          },
        },
      });
    }),
  ],
};
