/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBackground: '#F9F5E7',
        color21: '#212121',
        colorText: '#4f4f4f',
        colorTextOut: '#90908e',
        colorPrimary: '#9EB384',
        colorDestaque: '#557C55',
        colorSecondary: '#CEDEBD',
        colorWhite: '#F5F5F5',
        colorRed: '#e74c3c',
        colorGreen: '#2ECC71',
        colorSeparate: '#cccccc',
        colorYellowSec: '#b38f00',


      },
      backgroundImage: {
        'cbol': "url('/src/assets/bg-icons-1.png')",
        'rosc': "url('/src/assets/bg-icons-2.png')",
      }
    },
  },
  plugins: [],
}

