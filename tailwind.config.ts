import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#F5A623',
        saffron: '#FF6B00',
        midnight: '#0D0A1E',
        deepPurple: '#1A1035',
        ivory: '#FFFDF5',
        mutedGold: '#D4A853',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        // To revert back to elegant fonts, uncomment the lines below and comment out the Poppins overrides
        // cinzel: ['var(--font-cinzel)', 'serif'],
        // cormorant: ['var(--font-cormorant)', 'serif'],
        // jost: ['var(--font-jost)', 'sans-serif'],
        
        // Overrides for full Poppins usage:
        cinzel: ['var(--font-poppins)', 'sans-serif'],
        cormorant: ['var(--font-poppins)', 'sans-serif'],
        jost: ['var(--font-poppins)', 'sans-serif'],
        
        notoTelugu: ['var(--font-noto-telugu)', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
