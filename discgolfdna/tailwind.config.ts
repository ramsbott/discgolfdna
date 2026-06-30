import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dna: {
          green: '#83bd3f',
          dark: '#071008',
          charcoal: '#101510'
        }
      }
    }
  },
  plugins: []
};
export default config;
