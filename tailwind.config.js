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

        //Headphone page images

        // XX99 Mark One HEADPHONE
        xx99MarkOne:
          "url('/src/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg')",
        xx99MarkOneTablet:
          "url('/src/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg')",
        xx99MarkOneMobile:
          "url('/src/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg')",
        // XX99 MARK TWO HEADPHONE
        xx99MarkTwo:
          "url('/src/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg')",
        xx99MarkTwoTablet:
          "url('/src/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg')",
        xx99MarkTwoMobile:
          "url('/src/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg')",
        //XX59 HEADPHONE
        xx59: "url('/src/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg')",
        xx59Tablet:
          "url('/src/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg')",
        xx59Mobile:
          "url('/src/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg')",

        // YXI EARPHONE
        yx1: "url('/src/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg')",
        yx1Tablet:
          "url('/src/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg')",
        yx1Mobile:
          "url('/src/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg')",
      },

      letterSpacing: {
        veryWide: "1rem",
      },

      lineHeight: {
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
        "4xxl": ["2.8rem", "3.825rem"],
        "6xxl": ["4rem", "4.4rem"],
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
