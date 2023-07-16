/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },

    extend: {
      colors: {
        1: "#7C5DFA",
        2: "#9277FF",
        3: "#1E2139",
        4: "#252945",
        5: "#DFE3FA",
        6: "#888EB0",
        7: "#7E88C3",
        8: "#0C0E16",
        9: "#EC5757",
        10: "#FF9797",
        11: "#F8F8FB",
        12: "#141625",
      },
    },
  },
  // Add only if you want to use the @tailwindcss/forms package
  plugins: [require("@tailwindcss/forms")],
};
