/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6750A4',
          50: '#F6F2FF',
          100: '#EADDFF',
          200: '#D0BCFF',
          300: '#B69DF8',
          400: '#9A82DB',
          500: '#6750A4',
          600: '#7F67BE',
          700: '#4F378B',
          800: '#381E72',
          900: '#21005D',
        },
        secondary: {
          DEFAULT: '#625B71',
          50: '#F6EDFF',
          100: '#E8DEF8',
          200: '#CCC2DC',
          300: '#B0A7C0',
          400: '#958DA5',
          500: '#625B71',
          600: '#4A4458',
          700: '#332D41',
          800: '#1D192B',
          900: '#0E0B14',
        },
        tertiary: {
          DEFAULT: '#7D5260',
          50: '#FDF2F6',
          100: '#FFD8E4',
          200: '#EFB8C8',
          300: '#D29DAD',
          400: '#B58392',
          500: '#7D5260',
          600: '#633B48',
          700: '#492532',
          800: '#31111D',
          900: '#1A080E',
        }
      },
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
};