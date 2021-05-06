/* eslint-disable no-undef */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      darkGray: '#1e1f21',
      lightGray: '#2a2c2e',
      blueGray: '#223e59',
      scrollbarGray: '#d1d5db',
    }),
    fontSize: {
      xs: '0.65rem',
      sm: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/src/background.jpg')",
      }),
    },
    scale: {
      0: '0',
      25: '.25',
      50: '.5',
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
