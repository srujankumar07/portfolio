/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'], 
        garamond: ['EB Garamond', 'serif'], 
        // Adding Nunito font family
      },
    },

  },
  plugins: [],
}

