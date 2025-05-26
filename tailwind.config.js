/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    fontFamily: {
      oswald: ['Oswald', 'sans - serif'],
      dmsans: ['DM Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primaryColor: '#010a5e',
        primaryColorLight: '#010d78',
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',
        whiteColor: '#fff',
        blackColor: '#000',
        greenColor: '#007936',
        redColor: '#cc3433',
        darkColor: '#000',
        darkColorLight: '#171717',
      },
      keyframes: {
        move: {
          '50%': { transform: 'translateY(-1rem)' },
        },
      },
      animation: {
        movingY: 'move 2s linear infinite',
      },
    },
    plugins: [],
  },
};
