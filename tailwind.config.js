const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['4rem', { lineHeight: '1.1' }],
      '7xl': ['5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        // Light mode primaries
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        // Warm accent (yellow/gold)
        accent: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        // Warm backgrounds
        surface: {
          50: '#FEFDFB',   // Barely-there cream (light bg)
          100: '#F5F3FF',  // Soft lavender (light surface)
          800: '#161433',  // Muted purple (dark surface)
          900: '#0C0A1D',  // Deep indigo-black (dark bg)
          950: '#080714',  // Darkest
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      fontFamily: {
        sans: ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
        display: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        '2xl': '40rem',
      },
      animation: {
        'marquee': 'marquee var(--duration, 30s) linear infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        // Bento card graphic animations
        'float': 'float 4s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 1.5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'radar': 'radar 2s ease-out infinite',
        'rocket': 'rocket 2s ease-in-out infinite',
        // 2026 animations
        'float-subtle': 'floatSubtle 6s ease-in-out infinite',
        'glow-breathe': 'glowBreathe 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        // Bento card graphic animations
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0.8)', opacity: '0.4' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1)', opacity: '0.3' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4', transform: 'translateY(0)' },
          '50%': { opacity: '0.6', transform: 'translateY(-5px)' },
        },
        radar: {
          '0%': { transform: 'scale(0.8)', opacity: '0.3' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        rocket: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(-45deg)' },
          '50%': { transform: 'translate(3px, -3px) rotate(-45deg)' },
        },
        // 2026 keyframes
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowBreathe: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.2), 0 0 40px rgba(139, 92, 246, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.3), 0 0 60px rgba(139, 92, 246, 0.15)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionDuration: {
        '400': '400ms',
      },
      boxShadow: {
        'warm': '0 4px 14px 0 rgba(124, 58, 237, 0.1)',
        'warm-lg': '0 10px 40px -10px rgba(124, 58, 237, 0.15)',
        'warm-xl': '0 20px 60px -15px rgba(124, 58, 237, 0.2)',
        'bento': '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)',
        'bento-hover': '0 4px 16px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
