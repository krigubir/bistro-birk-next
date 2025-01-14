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
        primary: '#421201',
        secondary: '#ebe1d0',
        tertiary: '#EFE6D8',
        background: '#f5f5f5',
      },
      boxShadow: {
        card: '0 0 0.375rem 0 rgba(0, 0, 0, 0.2)',
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
