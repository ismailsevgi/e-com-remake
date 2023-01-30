/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        csblack: '#15161D',
        csred: '#D10024',
        cstopbar: '#1E1F29',
        csgray: '#323438',
        cswhite: '#E5E6EF',
        csred2: '#D31737',
      },
    },
  },
  plugins: [],
};
