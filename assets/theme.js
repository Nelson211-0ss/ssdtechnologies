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
          surface: '#ffffff',
          'surface-muted': '#f5f8f6',
          'surface-soft': '#e8f0eb',
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
          sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        boxShadow: {
          glow: '0 0 40px -14px rgba(241, 90, 41, 0.28)',
          'glow-lg': '0 0 80px -16px rgba(241, 90, 41, 0.22)',
          card: '0 1px 2px rgba(2, 10, 5, 0.04), 0 8px 24px -8px rgba(2, 10, 5, 0.08)',
          'card-hover': '0 1px 2px rgba(2, 10, 5, 0.04), 0 12px 28px -10px rgba(241, 90, 41, 0.14)',
        },
      },
    },
  });
