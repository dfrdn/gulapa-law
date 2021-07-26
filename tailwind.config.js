module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        '2xl': "1280px",
      }
    },
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'arial']
    },
    extend: {
      container: {
        center: true,
      },
      scale: {
        '102': '1.02'
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
