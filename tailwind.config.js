/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary' : '#1061FF',
      'secondary': '#A2C8E8',
      'surface' : {
        'light' : '#FCFCFC',
        'dark' : '#030303',
        'active' : 'rgba(15,96,255,0.05)'
      },
      'emphasis' : {
        'high' : '#08080B',
        'medium' : '#74696C',
        'blue': '#69A4D5',
        'low' : '#B3B4BC',
      },
      'outline': '#F0F0F0'

    },
    extend: {},
  },
  plugins: [],
}