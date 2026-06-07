/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FAF7F2',
          200: '#F5EFE6',
          300: '#EBE3D6',
          400: '#DDD2C0',
          500: '#C9BBA5',
        },
        brand: {
          50: '#FAF6F0',
          100: '#F0E8DC',
          200: '#E2D5C3',
          300: '#CDB896',
          400: '#B89B6E',
          500: '#9C7F4E',
          600: '#8B7355',
          700: '#725D45',
          800: '#5C4A38',
          900: '#453629',
          950: '#2E241C',
        },
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(92 74 56 / 0.06), 0 1px 2px -1px rgb(92 74 56 / 0.04)',
        'card-hover': '0 20px 40px -12px rgb(92 74 56 / 0.14), 0 8px 16px -8px rgb(92 74 56 / 0.08)',
        glow: '0 0 48px -10px rgb(139 115 85 / 0.35)',
        luxury: '0 4px 24px -4px rgb(92 74 56 / 0.12), 0 0 0 1px rgb(226 213 195 / 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        shimmer: 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
      },
    },
  },
  plugins: [],
};
