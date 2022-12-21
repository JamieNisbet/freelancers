/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/components/**/*.{jsx,js}',
    './build/**/*.{jsx,js}',
    './src/layout/**/*.{jsx,js}',
    './src/pages/**/*.{jsx,js}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fefefe',
      secondary: '#a0a6bc',
      primary: '#253266',
      success: '#50C878',
      error: '#EE1212',
    },
  },
  plugins: [],
};
