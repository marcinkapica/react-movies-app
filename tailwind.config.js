module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        shamrock: {
          50: '#ebf8f8',
          100: '#cff7f3',
          200: '#9cf2e5',
          300: '#09e8ef',
          400: '#1cd7bd',
          500: '#08c09d',
          600: '#07a580',
          700: '#0d8868',
          800: '#106a54',
          900: '#105645',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
