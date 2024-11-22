/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b8dfff',
          300: '#7cc7ff',
          400: '#36aeff',
          500: '#0095ff',
          600: '#0077ff',
          700: '#0061ff',
          800: '#0052d6',
          900: '#0040aa',
        },
        secondary: {
          50: '#fff0f7',
          100: '#ffe0ef',
          200: '#ffb8df',
          300: '#ff7cc7',
          400: '#ff36ae',
          500: '#ff0095',
          600: '#ff0077',
          700: '#ff0061',
          800: '#d60052',
          900: '#aa0040',
        },
        accent: {
          50: '#f7f0ff',
          100: '#efe0ff',
          200: '#dfb8ff',
          300: '#c77cff',
          400: '#ae36ff',
          500: '#9500ff',
          600: '#7700ff',
          700: '#6100ff',
          800: '#5200d6',
          900: '#4000aa',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        beam: 'beam 3s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        gradient: 'gradient 8s linear infinite',
        aurora: 'aurora 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        beam: {
          '0%, 100%': { opacity: '0.1' },
          '50%': { opacity: '0.5' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        aurora: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.5)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-aurora': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
      transitionDelay: {
        75: '75ms',
        150: '150ms',
        300: '300ms',
        450: '450ms',
      },
    },
  },
  plugins: [],
};
