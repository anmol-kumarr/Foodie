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
      boxShadow: {
        'custom-black': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.03)', // Modify as needed
      },
    },
    fontFamily:{
      'logo':['Dancing Script','roboto'],
      'gilory':['Gilroy','roboto']
    },
    boxShadow: {
      'inner-bottom': 'inset 0 -40px 40px -10px rgba(0, 0, 0, 0.5)' // Custom blackish shadow
    },
  
  },
  plugins: [],
}