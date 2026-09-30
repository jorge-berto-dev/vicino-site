/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        vino: {
          DEFAULT: '#571e26',
          deep: '#3a1218',
          dark: '#2a0d12',
          light: '#7a3340',
          soft: '#f3e6e2',
        },
        grafite: {
          DEFAULT: '#201b17',
          soft: '#2c2521',
          mute: '#6f635b',
        },
        creme: {
          DEFAULT: '#f5eee2',
          dark: '#e9ddc8',
        },
        paper: '#fbf8f1',
        oliva: {
          DEFAULT: '#6f7344',
          dark: '#54572f',
        },
        madeira: '#8a5a38',
        terracota: '#b4552d',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
};
