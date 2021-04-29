/* eslint-disable no-undef */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      darkGray: '#1e1f21',
      lightGray: '#2a2c2e',
      blueGray: '#1c2c3c',
    }),
    fontSize: {
      xs: '0.65rem',
    },
    extend: {
      backgroundImage: (theme) => ({
        background: "url('/src/img/background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
