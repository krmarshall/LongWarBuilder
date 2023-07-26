/* eslint-disable no-undef */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      darkGray: '#1e1f21',
      lightGray: '#2a2c2e',
      lighterGray: '#3f4245',
      blueGray: '#223e59',
      scrollbarGray: '#d1d5db',
    }),
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/src/background.jpg')",
      }),
      outline: {
        gray: '2px solid #969da3',
      },
    },
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
      56: '0.5625',
      70: '.70',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
};
