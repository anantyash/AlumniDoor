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
        greenColor: "#1F8052",
        greenlightColor: "#C7F9CC",
        greenTextColor: "#7DDF64",
      },
    },
  },
  plugins: [],
};
