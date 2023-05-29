/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      fontFamily:{
        androidEuclid: ["AndroidEuclid", "cursive"],
        androidEuclid: ["AndroidEuclidBold", "bold"]
      }
    },
  },
  plugins: [],
}

