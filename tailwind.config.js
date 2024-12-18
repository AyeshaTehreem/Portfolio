/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyfont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#1a1a2e", // Dark indigo-like background
        textColor: "rgba(255, 255, 255, 0.85)",
        designColor: "#6a5acd", // Slate blue
        titleRoundBg: "linear-gradient(135deg, rgba(106,90,205,0.15) 0%, rgba(106,90,205,0.3) 100%)", // Soft slateblue gradient
        primary: {
          50: "#f5f3ff",    // Light lavender
          100: "#ede9fe",   // Soft lavender
          200: "#ddd6fe",   // Light purple
          300: "#c4b5fd",   // Soft purple
          400: "#a78bfa",   // Medium purple
          500: "#8b5cf6",   // Deep purple
          600: "#7c3aed",   // Indigo
          700: "#6d28d9",   // Dark indigo
          800: "#5b21b6",   // Deep indigo
          900: "#4c1d95"    // Darkest indigo
        },
        accent: {
          50: "#ecfeff",   // Light cyan/blue
          100: "#cffafe",  // Soft cyan
          200: "#a5f3fc",  // Light blue
          300: "#67e8f9",  // Bright cyan
          400: "#22d3ee",  // Vibrant blue
          500: "#06b6d4",  // Deep cyan
          600: "#0891b2",  // Dark cyan
          700: "#0e7490",  // Deep blue
          800: "#155e75",  // Dark blue
          900: "#164e63"   // Darkest blue
        }
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "reverse-spin": "reverse-spin 15s linear infinite",
      },
      keyframes: {
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
        },
      },
      boxShadow: {
        greenShadow: "0px 0px 188px -14px rgba(106,90,205,0.7)", // Slateblue shadow
        testShwdow: "11px 0px 13px -15px rgba(106,90,205,0.3)", // Soft purple shadow
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};