module.exports = {
  
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './Components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl" : "2000px",
      }
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
