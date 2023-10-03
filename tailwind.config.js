/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.html'],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '960px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.3em',
      },
    },
  },
  plugins: [],
};
