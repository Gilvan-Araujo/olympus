/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0080ff",
        red: "#FF1000",
        green: "#32FF00",
        orange: "#FFA000",
        pink: "#FF00C8",
        "gray-dark": "#2B2F33",
        gray: "#406080",
        white: "#FFF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["EB Garamond", "serif"],
      },
      animation: {
        pulsate: "pulsate 1s ease-in-out infinite",
      },
      keyframes: {
        pulsate: {
          "0%, 100%": { borderColor: "#0080ff" },
          "50%": { borderColor: "#00D0FF" },
        },
      },
    },
  },
  plugins: [],
};
