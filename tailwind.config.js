module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    colors: {
      brown: {
        100: "#D87D4A",
        200: "FB8F85",
      },
      black: {
        100: "#101010",
        200: "#000000",
      },
      white: {
        100: "#F1F1F1",
        200: "#FAFAFA",
        300: "#FFFFFF",
      },
    },
    extend: {
      screens: {
        xxl: "1100px",
      },

      backgroundImage: {
        desktopHero: "url('/src/assets/home/desktop/image-hero.jpg')",
        tabletHero: "url('/src/assets/home/tablet/image-header.jpg')",
        mobileHero: "url('/src/assets/home/mobile/image-header.jpg')",
      },

      letterSpacing: {
        veryWide: "1rem",
      },

      lineHeight: {
        40: "4rem",
        58: "5.8rem",
      },

      minHeight: {
        80: "80vh",
      },

      backgroundPosition: {
        "top-4": "center 85%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
