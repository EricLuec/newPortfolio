/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#06B6D4',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
