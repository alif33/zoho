/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        primaryBlueText: '#016cfa',
        secondaryBlueText: '#01bcfa',
      },
      colors: {
        primaryBlue: '#016cfa',
        darkBlue: '#00102a',
        lightBlue: '#01bcfa',
        yellowBorder: '#493a00',
        bgDarkPurple: '#4b00716b',
        bgDarkYellow: '#493a0080',
        lightYellow: '#ffefaf',
        darkYellow: '#ffd634',
      },
      width: {
        w_70: '70%',
      },
      boxShadow: {
        shadowAll: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }
    },
  },
  plugins: [],
}