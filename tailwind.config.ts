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
        background: '#f5f5f5',
        primary: '#4d0000',
        darkPrimary: '#221b27',
      },
      boxShadow: {
        card: '0 0 0.375rem 0 rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
