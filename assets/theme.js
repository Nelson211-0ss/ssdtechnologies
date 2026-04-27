// Shared Tailwind config – SSD-iT Solutions theme (extracted from logo)
window.tailwind &&
  (window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          // Brand orange from the logo (warm signal arcs)
          primary: '#f15a29',
          'primary-50': '#fff3ec',
          'primary-100': '#ffd9c2',
          'primary-300': '#ff9669',
          'primary-400': '#ff7a45',
          'primary-500': '#f15a29',
          'primary-600': '#d94614',
          'primary-700': '#a8340c',
          // Deep forest green (background of the logo card)
          forest: {
            950: '#03130a',
            900: '#061f10',
            800: '#0a2b18',
            700: '#0f3a22',
            600: '#16502f',
            500: '#1f6b40',
            400: '#2f8a55',
          },
          accent: '#10b981', // tech-green accent
          ink: '#020a05',
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        },
        boxShadow: {
          glow: '0 0 40px -8px rgba(241, 90, 41, 0.55)',
          'glow-lg': '0 0 80px -10px rgba(241, 90, 41, 0.55)',
          ring: '0 0 0 1px rgba(241,90,41,0.35), 0 10px 35px -10px rgba(241,90,41,0.45)',
        },
        animation: {
          'fade-up': 'fadeUp 0.7s ease-out both',
          'fade-in': 'fadeIn 0.8s ease-out both',
          float: 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 3.5s ease-in-out infinite',
          shimmer: 'shimmer 2.5s linear infinite',
          'gradient-x': 'gradientX 8s ease infinite',
          marquee: 'marquee 28s linear infinite',
          'spin-slow': 'spin 14s linear infinite',
          orbit: 'orbit 12s linear infinite',
          'ping-slow': 'ping 2.6s cubic-bezier(0,0,0.2,1) infinite',
        },
        keyframes: {
          fadeUp: {
            '0%': { opacity: 0, transform: 'translateY(24px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          float: {
            '0%,100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          shimmer: {
            '0%': { backgroundPosition: '-200% 0' },
            '100%': { backgroundPosition: '200% 0' },
          },
          gradientX: {
            '0%,100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          orbit: {
            '0%': { transform: 'rotate(0deg) translateX(60px) rotate(0deg)' },
            '100%': { transform: 'rotate(360deg) translateX(60px) rotate(-360deg)' },
          },
        },
      },
    },
  });
