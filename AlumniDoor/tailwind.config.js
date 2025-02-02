/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        brown: "#8D4033",
        greenColor: "#1F8052", //Sea Green
        greenlightColor: "#C7F9CC", //Tea Green
        greenTextColor: "#7DDF64", //SGBUS Green
        greenBgColor: "#99F7AB", //Light Green
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },

        ".scrollbar-custom": {
          "scrollbar-width": "thin",
          // "scrollbar-color": " #1F8052 #C7F9CC",
          // "&::-webkit-scrollbar": {
          //   width: "2px",
          // },
          // "&::-webkit-scrollbar": {
          //   "border-radius": "10px",
          // },
        },
      });
    }),
  ],
};
