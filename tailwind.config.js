/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/components/**/*.{jsx,js}', './build/**/*.{jsx,js}', './src/pages/**/*.{jsx,js}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      navy: '#2C3333',
      teal: '#395B64',
      blue: '#A5C9CA',
      gradient: '#E7F6F2',
      green: '#50C878',
      red: '#EE1212',
    },
  },
  plugins: [],
};
