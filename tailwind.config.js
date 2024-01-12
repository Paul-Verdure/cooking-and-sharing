/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chilean-fire': {
          '50': '#fffaec',
          '100': '#fff4d3',
          '200': '#ffe5a5',
          '300': '#ffd06d',
          '400': '#ffb032',
          '500': '#ff960a',
          '600': '#f57900',
          '700': '#cc5c02',
          '800': '#a1470b',
          '900': '#823c0c',
          '950': '#461c04',
        },
      },
    },
  },
  plugins: [],
}

