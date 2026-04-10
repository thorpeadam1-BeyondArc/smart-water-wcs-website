import { siteConfig } from './src/site.config.ts';

const c = siteConfig.colors;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': c.bgPrimary,
        'bg-secondary': c.bgSecondary,
        accent: c.accent,
        'accent-secondary': c.accentSecondary,
        'text-primary': c.textPrimary,
        'text-secondary': c.textSecondary,
      },
      fontFamily: {
        heading: [siteConfig.fonts.heading],
        body: [siteConfig.fonts.body],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'droplet': 'dropletFall 3s ease-in-out infinite',
        'ripple': 'ripple 2s ease-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        dropletFall: {
          '0%': { transform: 'translateY(-10px) scale(0.8)', opacity: '0' },
          '20%': { opacity: '1', transform: 'translateY(0) scale(1)' },
          '80%': { opacity: '1', transform: 'translateY(60px) scale(1)' },
          '100%': { opacity: '0', transform: 'translateY(80px) scale(0.6)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
