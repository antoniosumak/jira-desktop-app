/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#7e56da',
        dark: '#1F2937',
        darker: '#111827',
      },
    },
  },
  plugins: [],
};
