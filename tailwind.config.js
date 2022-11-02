const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      sky: colors.sky,
      neutral: colors.neutral,
      gray: {
        800: '#262929',
      },
    },
    extend: {
      spacing: {
        '7': '60px',
      },
    },
  },
}