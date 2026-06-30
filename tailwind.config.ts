import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { dna: { green: '#7ac142', dark: '#0b0f0a', black: '#050705', cream: '#f6f4ec' } }
    }
  },
  plugins: []
};
export default config;
