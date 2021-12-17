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
        200: "#FB8F85",
      },
      red: {
        100: "#cd2c2c",
      },

      gray: {
        100: "#cfcfcf",
      },
      black: {
        100: "#101010",
        200: "#000000",
      },
      white: {
        100: "#F1F1F1",
        200: "#FAFAFA",
        300: "#FFFFFF",
        400: "#B9B9B9",
        500: "#969696",
      },
    },
    extend: {
      screens: {
        sm: "375px",
        xxl: "1100px",
      },

      backgroundSize: {
        80: "80%",
      },

      backgroundImage: {
        // Home Image
        desktopHero: "url('/src/assets/home/desktop/image-hero.jpg')",
        tabletHero: "url('/src/assets/home/tablet/image-header.jpg')",
        mobileHero: "url('/src/assets/home/mobile/image-header.jpg')",
        patternCircles: "url('/src/assets/home/desktop/pattern-circles.svg')",
        zx7Speaker: "url('/src/assets/home/desktop/image-speaker-zx7.jpg')",
        zx7SpeakerTablet: "url('/src/assets/home/tablet/image-speaker-zx7.jpg')",
        zx7SpeakerMobile: "url('/src/assets/home/mobile/image-speaker-zx7.jpg')",
      },

      letterSpacing: {
        veryWide: "1rem",
      },

      lineHeight: {
        36: "3.6rem",
        40: "4rem",
        44: "4.4rem",
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

      fontSize: {
        "2xxl": ["1.8rem", "2.5rem"],
        "3xxl": ["2.4rem", "3.6rem"],
        "3xx": ["2.4rem", "3.278rem"],
        "4xxl": ["2.8rem", "3.825rem"],
        "5xxl": ["3.6rem", "4rem"],
        "6xxl": ["4rem", "4.4rem"],
        "7xxl": ["5.6rem", "5.8rem"],
      },

      backgroundPosition: {
        "top-4": "center 85%",
        "top-5": "50% -16rem",
        "top-6": "50% -25rem",
        "left-bottom-100": "left -85% top 15%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
