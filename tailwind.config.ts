import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#360D07',
          100: '#0b0301',
          200: '#160503',
          300: '#200804',
          400: '#2b0b06',
          500: '#360d07',
          600: '#862111',
          700: '#d5341c',
          800: '#ea7360',
          900: '#f5b9b0',
        },
        secondary: {
          DEFAULT: '#B49786',
          100: '#271e18',
          200: '#4e3b31',
          300: '#755949',
          400: '#9c7761',
          500: '#b49786',
          600: '#c3ada0',
          700: '#d2c1b7',
          800: '#e1d6cf',
          900: '#f0eae7',
        },
        tertiary: {
          DEFAULT: '#A3B2BE',
          100: '#1d2429',
          200: '#3a4852',
          300: '#586b7c',
          400: '#798fa0',
          500: '#a3b2be',
          600: '#b5c1cb',
          700: '#c8d0d8',
          800: '#dae0e5',
          900: '#edeff2',
        },
        background: '#f5f5f5',
      },
      fontFamily: {
        ballet: ['Ballet', 'serif'],
        forum: ['forum', 'serif'],
        ptSerif: ['PT Serif', 'serif'],
        afacad: ['Afacad', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

// #f5f5f5

// primary: '#421201',
//         secondary: '#ebe1d0',
//         tertiary: '#EFE6D8',
//         background: '#f5f5f5',
