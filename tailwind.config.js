/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'wistful': {
          '50': '#f6f6fc',
          '100': '#eeeef9',
          '200': '#e1e0f4',
          '300': '#cac7eb',
          '400': '#b7b2e2',
          '500': '#8f83cf',
          '600': '#7b67c0',
          '700': '#6a55ac',
          '800': '#584790',
          '900': '#4a3b77',
          '950': '#2e264f',
      },
      },
    },
  },
  plugins: [],
}

