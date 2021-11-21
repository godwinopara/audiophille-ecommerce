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
        patternCircles: "url('/src/assets/home/desktop/pattern-circles.svg')",
      },

      letterSpacing: {
        veryWide: "1rem",
      },

      lineHeight: {
        40: "4rem",
        58: "5.8rem",
      },

      minHeight: {
        small: "50.7rem",
        mid: "63.9rem",
        large: "63.3rem",
      },

      spacing: {
        100: "32rem",
        150: "38rem",
        200: "56rem",
      },

      backgroundPosition: {
        "top-4": "center 85%",
        "top-5": "50% -16rem",
        "top-6": "50% -25rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
