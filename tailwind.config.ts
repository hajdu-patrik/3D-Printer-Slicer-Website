import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          peach: '#F6C8A5',
          coral: '#F7A57A',
          cream: '#FFF8F1',
          ink: '#151515'
        }
      },
      boxShadow: {
        soft: '0 12px 30px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
