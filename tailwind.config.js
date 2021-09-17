module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        '2xl': '1280px',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'arial'],
      header: [
        'Montserrat',
        'Lucida Sans',
        'Lucida Sans Regular',
        'Lucida Grande',
        'Lucida Sans Unicode',
        'sans-serif',
      ],
    },
    extend: {
      boxShadow: {
        DEFAULT: '3px 6px 10px rgba(0, 0, 0, 0.16)',
        around: '0px 0px 12px #00000029;',
      },
      container: {
        center: true,
      },
      scale: {
        102: '1.02',
      },
      colors: {
        primary: '#243467',
        secondary: '#C59B27',
        tertiary: '#101010',
      },
    },
  },
  variants: {
    extend: {
      display: ['hover', 'group-hover'],
      scale: ['hover', 'group-hover'],
      filter: ['group-hover'],
      height: ['group-hover'],
      brightness: ['group-hover'],
      invert: ['group-hover'],
      margin: ['group-hover'],
      textAlign: ['group-hover'],
      fontSize: ['group-hover'],
      justifyContent: ['hover'],
      alignItems: ['hover'],
      backgroundColor: ['active', 'focus'],
      pointerEvents: ['hover'],
      borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
