/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        github: "#171515",
        link: "#5865F2",
        javascript: "#FEE75C"
      },
      spacing: {
        "15": "3.75rem"
      }
    },
  },
  plugins: [],
}
