/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wedges: ["'Wedges'"]
      },
      colors: {
        'light_brown': '#65503d',
        'light_green': '#c1ce9a',
      } 
    },
  },
  plugins: [],
};