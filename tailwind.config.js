const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cyan' : colors.cyan,
        'teal' : colors.teal,
        'brand-blue': '#4bacbd',
        'brand-blue-dark': '#3993a3',
        'brand-blue-light': '#2beae5',
        'brand-purple': '#4436a9',
        'brand-gray': '#f3f1fb',
        'text-color': '#1a1a1a',
        'bg-dark-purple': '#3a2398',
        'bg-light-purple': '#7f61ff',
        'bg-midle-purple': '#583ec5',
        'bg-darkest-purple':'#332556',

      },
      fontFamily: {
        'exo': ['Exo', 'sans-serif'],
      },
      lineHeight: {
        '26': '26px',
      },
      borderRadius: {
        '5': '5px',
      },
      outline: {
        'brand-blue': '2px solid #4bacbd',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ]
}