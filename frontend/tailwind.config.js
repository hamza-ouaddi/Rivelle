/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      "white-2": "#f8f9fa",
      "light-gray-1": "#e9ecef",
      "light-gray-2": "#dee2e6",
      "light-gray-3": "#ced4da",
      gray: "#adb5bd",
      "gray-2": "#6C7275",
      "medium-gray-1": "#6c757d",
      "medium-gray-2": "#495057",
      "dark-gray-1": "#343a40",
      "dark-gray-2": "#212529",
    },
    extend: {
      fontFamily: {
        clashDisplay: ["Clash Display", "sans-serif"],
        clashGrotesk: ["Clash Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
