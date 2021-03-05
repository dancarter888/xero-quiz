module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          xero: '#13B5EA',
        }
      }
    },
  },
  variants: {
    extend: {
      borderWidth: ['focus'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
