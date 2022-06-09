module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "mobile-menu": "mobile-menu 0.5s ease-in-out forwards",
      },
      backgroundImage: {
        brand: "linear-gradient(145deg, #1e2024, #23272b);",
        "brand-hover": "linear-gradient(to right bottom, #212428, #16181c)",
      },
      boxShadow: {
        red: "inset 0 0 5px rgba(255,0,0,1)",
        brand: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      colors: {
        "portfolio-bg": "#212428",
        "experience-color": "#17191c",
      },
      fontFamily: {
        "brand-primary": ["Poppins", "sans-serif"],
        "brand-secondary": ["Montserrat", "sans-serif"],
      },
      height: {
        "header-height": "104px",
        "intro-minus-header": "calc(100% - 104px)",
        "mobile-menu-body-minus-header": "calc(100% - 64px)",
        "90vh": "90vh",
        "portfolio-popup-body-minus-header": "calc(100% - 52px)",
      },
      inset: {
        unset: "unset",
      },
      keyframes: {
        "mobile-menu": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
      maxWidth: {
        "portfolio-popup-body-minus-header": "calc(100% - 52px)",
      },
      maxHeight: {
        "90vh": "90vh",
        "90vh-minus-padding": "calc(90vh - 80px)",
        none: "none",
        "portfolio-popup-body-minus-header": "calc(100% - 52px)",
      },
      spacing: {
        "header-height": "136px",
        "resume-even-item": "calc(100% + 32px + 4px + 32px)",
        5.5: "22px",
        10.5: "42px",
      },
      width: {
        "90vw": "90vw",
      },
      zIndex: {
        1000: 1000,
      },
    },
  },
  plugins: [],
};
