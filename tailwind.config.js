/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // permite modo claro/oscuro manual
  theme: {
    extend: {
      colors: {
        primary: '#36454F',       // Gris Acero Oscuro
        'primary-focus': '#5A6D7C',// Gris Acero Medio
        secondary: '#8D99AE',     // Gris Plata
        'base-100': '#EDF2F7',      // Aluminio Cepillado
        'base-200': '#D8DEE4'       // Metal Pulido
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
