/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'text-gray':'rgba(2, 6, 12, 0.75)',
        'theme-green':'#198754',
        'theme-pink':'#DF334B',
        'theme-gray':'#F5F5F5'
      },
    },
    fontFamily:{
      'logo':['Dancing Script','roboto'],
      'gilory':['Gilroy','roboto']
    },
  
  },
  plugins: [],
}