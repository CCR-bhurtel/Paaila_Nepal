/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        Mont: ["Monsserrat", "sans-serif"],
        Open: ["Open Sans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        Apple: "#66CC33",
        Toxic: "#2BDD3D",
        Leaf: "#3B7120",
        Iron: "#D9D9D9",
        Army: "#445A26",
        Teal: "#86C2AD",
        Smoky: "#090909",
        black: "#000",
        white: "#ffffff",
        Nickel: "#737373",
      },
      screens: {
        sm: "640px",
        usm: "425px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
