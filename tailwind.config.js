/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
    "./Error.{js,ts,vue}",
    "./error.{js,ts,vue}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {

    fontFamily: {
      "coffe-text": ["coffe-text"],
      "coffe-heading": ["coffe-heading"],
    },
    extend: {
      colors: {
        cGelap: "#271c19",
        cTerang: "#ffc0ad",
        cWhite: "#fffffe",
        cPrimary: "#55423d",
        cMuda: "#fff3ec",
        cPink: "#e78fb3",
        cUngu: "#9656a1",
        cPutih: "#f2f2f2",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.cGelap'),

            
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), ],
}