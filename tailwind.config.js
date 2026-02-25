/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#3E5C54",
            secondary: "#C5D5C5",
            "bg-light": "#F0F4F2",
            "bg-dark": "#2A2A2A",
        },
    },
  },
  plugins: [],
};