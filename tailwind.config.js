/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FAFAFA',
        'accent': '#E8E8E8',
        'dark-primary': '#0F0F0F',
        'dark-accent': '#2E2E2E',
        'light-font': 'rgba(255, 255, 255, 0.75)',
        'dark-font': 'rgba(0, 0, 0, 0.75)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
