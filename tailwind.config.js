/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#0080ff",
      red: "#FF1000",
      green: "#32FF00",
      orange: "#FFA000",
      pink: "#FF00C8",
      "gray-dark": "#2B2F33",
      gray: "#406080",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["EB Garamond", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
