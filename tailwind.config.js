/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./src/**/*.{html,js}",
  './dist/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        orange: 'linear-gradient(180deg, rgb(255, 180, 105) 0%, rgb(229, 119, 9) 100%)',
        blue: 'linear-gradient(135deg, #4EBEFF 0%, #0679BB 100%)',
        textGreen: 'linear-gradient(135deg, #2891CC 0%, #0A9949 100%)',
        dottedAround: 'url(/dist/img/dotted-circle.png)',
      },
      boxShadow: {
        buttonOrange: '0px 8px 16px rgba(229, 119, 9, 0.35)',
        buttonCircle: '0px 0px 16px rgba(0, 0, 0, 0.35)',
      },
      colors: {
        orangeCustom: 'rgb(229, 119, 9)'
      },
      borderRadius: {
        bannerLeftBottom: '0px 0px 0px 130px'
      },
      boxShadow: {
        custom: '0px 8px 40px rgba(0, 0, 0, 0.15)'
      },
      container: {
        screens: {
          '3xl': '1408px',
        },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}
