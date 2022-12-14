/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white1': '#ffffff',
        'black1': '#0D0D0D',
        'gray1': '#BFBFBF',
        'red1': '#FF0000',
        'green1': '#34D178',
      },
    },
  },
  plugins: [],
}
