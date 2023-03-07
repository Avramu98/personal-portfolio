/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '400px',
      md: '768px',
      lg: '976px',
      xl: '1240px',
      '2xl': '1496px',
    },
    extend: {
      fontFamily: {
        enhanced: ['var(--enhanced-font)', ...fontFamily.sans],
        standard: ['var(--standard-font)', ...fontFamily.sans],
      },
      colors: {
        primary: '#28282B',
        // contrast: 'var(--color-contrast)',
        accent: '#FB8500',
      },
    },
  },
  plugins: [],
};
