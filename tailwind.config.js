/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.{jsx,js}', './build/**/*.{jsx,js}', './src/pages/**/*.{jsx,js}'],
  theme: {
    screens: {
      mobile: '640px',
      // => @media (min-width: 640px) { ... }

      tablet: '768px',
      // => @media (min-width: 768px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      screen: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
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
