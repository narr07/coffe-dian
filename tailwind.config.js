/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        gelap: "#271c19",
        terang: "#ffc0ad",
        primary: "#55423d",
        secondary: "#fffffe",
        tertiary: "#fff3ec",
        senary: "#e78fb3",
        septenary: "#9656a1",
        nonary: "#f2f2f2",
        denary: "#f2f2f2",
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), ],
}