/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green': {
          500: '#82b440'
        },
        'radical-red': {
          500: '#ff3850',
          600: '#ff3269'
        },
        amaranth: {
          500: '#ee2851',
          600: '#ed2851'
        }
      }
    }
  }
}
