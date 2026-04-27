// Shared Tailwind config – SSD-iT Solutions theme
window.tailwind &&
  (window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#f15a29',
          'primary-50': '#fff3ec',
          'primary-100': '#ffd9c2',
          'primary-300': '#ff9669',
          'primary-400': '#ff7a45',
          'primary-500': '#f15a29',
          'primary-600': '#d94614',
          'primary-700': '#a8340c',
          forest: {
            950: '#03130a',
            900: '#061f10',
            800: '#0a2b18',
            700: '#0f3a22',
            600: '#16502f',
            500: '#1f6b40',
            400: '#2f8a55',
          },
          accent: '#10b981',
          ink: '#020a05',
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        },
        boxShadow: {
          glow: '0 0 40px -10px rgba(241, 90, 41, 0.45)',
          'glow-lg': '0 0 80px -12px rgba(241, 90, 41, 0.45)',
        },
      },
    },
  });
