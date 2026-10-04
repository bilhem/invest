import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: { DEFAULT: '#1B1A18', 800: '#242220', 700: '#2E2B28' },
        ivory: { DEFAULT: '#F7F3EB', 200: '#EFE9DD' },
        champagne: { DEFAULT: '#B8935A', light: '#D3B684', dark: '#9A7A47' },
        stone: { DEFAULT: '#8C857A', light: '#C9C2B5' },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '1240px' },
    },
  },
  plugins: [],
};
export default config;
