/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        customblue: "#4A69E2",
        customorange: "#FFA52F",
        customwhite: "#FAFAFA",
        customgray: "#E7E7E3",
        customgraydark: "#70706E",
        customblack: "#232321",
      }
    },
  },
  plugins: [],
}