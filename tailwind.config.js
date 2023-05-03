/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'button-watch': '0 0 2px #ff073a, 0 0 2px #ff073a, 0 0 2px #ff073a, 0 0 2px #ff073a]',
      },
    },
  },
  plugins: [],
};
