/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        indigo: {
          950: "#1e1b4b",
        },
        cyan: {
          950: "#083344",
        },
      },
      boxShadow: {
        'soft-xl': '0 20px 40px rgba(0,0,0,0.1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      scale: {
        102: '1.02',
        105: '1.05',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
  ],
};
