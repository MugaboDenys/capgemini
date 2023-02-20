/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"  ],
  theme: {
    extend: {
      backgroundImage : {
        gradient1 : "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.0018207966780462437) 100%)",
        gradient2 : "linear-gradient(90deg, rgba(36,31,113,1) 0%, rgba(3,123,214,1) 100%)",
        nobg : "none"
      },
      colors : {
        lightblue: "#00e1de"
      }
    },
  },
  plugins: [],
}
