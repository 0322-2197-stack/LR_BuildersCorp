/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        corporate: '0 18px 50px rgba(15, 23, 42, 0.12)',
      },
      colors: {
        amber: {
          500: '#f5a623',
        },
      },
      backgroundImage: {
        'industrial-grid':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
