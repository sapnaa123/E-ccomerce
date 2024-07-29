/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],


  theme: {
    extend: {
      colors:{
        primaryColor: "#84a59d",
        sacendryColor: "#355070"
      }
    },
  },
  plugins: [],
}

