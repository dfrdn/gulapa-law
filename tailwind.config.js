module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        '2xl': "1440px",
      }
    },
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'arial']
    },
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: '#243467',
        secondary: '#C59B27',
        tertiary: '#101010',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
