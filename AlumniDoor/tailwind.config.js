/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
