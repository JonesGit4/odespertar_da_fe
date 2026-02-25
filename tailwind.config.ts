import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark + Gold theme
        gold: {
          50: '#FFF9E6',
          100: '#FFF0BF',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#D4A012',
          600: '#B8860B',
          700: '#996F0A',
          800: '#7A5908',
          900: '#5C4306',
        },
        dark: {
          50: '#2A2A2A',
          100: '#242424',
          200: '#1E1E1E',
          300: '#181818',
          400: '#141414',
          500: '#111111',
          600: '#0D0D0D',
          700: '#0A0A0A',
          800: '#070707',
          900: '#030303',
        },
        // Light + Modern theme
        sage: {
          50: '#F5F7F4',
          100: '#E8EDE6',
          200: '#D4DDD0',
          300: '#B5C7AF',
          400: '#8FAA85',
          500: '#6B8F5E',
          600: '#567A4A',
          700: '#44623B',
          800: '#384F31',
          900: '#2E412A',
        },
        cream: {
          50: '#FFFDF7',
          100: '#FFF9E8',
          200: '#FFF3D1',
          300: '#FFE9AB',
          400: '#FFDD80',
          500: '#FFD155',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4A012 0%, #FFD966 50%, #B8860B 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 160, 18, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 160, 18, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
